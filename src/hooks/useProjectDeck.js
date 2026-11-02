import { useLayoutEffect, useRef, useState } from "react";

export default function useProjectDeck(projectIds) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const panelsRef = useRef(null);
  const [view, setView] = useState({ pinned: false, index: 0, visible: false });
  const viewRef = useRef(view);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const panels = panelsRef.current;
    const articles = [...panels.querySelectorAll(".project-showcase")];
    const layouts = articles.map((article) => article.querySelector(".project-layout"));
    const markers = projectIds.map((id) => document.getElementById(id));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let metrics = { pinned: false, start: 0, step: 1, header: 0, ready: false };
    let scrollFrame = 0;
    let measureFrame = 0;
    let mounted = true;

    function updatePosition() {
      scrollFrame = 0;
      const viewportHeight = window.innerHeight;
      let index = 0;

      if (metrics.pinned) {
        const position = (window.scrollY - metrics.start) / metrics.step;
        index = Math.max(0, Math.min(articles.length - 1, Math.floor(position + 0.35)));
      } else {
        let nearestDistance = Infinity;
        articles.forEach((article, articleIndex) => {
          const box = article.getBoundingClientRect();
          const distance = Math.abs(box.top + box.height / 2 - viewportHeight / 2);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            index = articleIndex;
          }
        });
      }

      const box = (metrics.pinned ? panels : articles[index]).getBoundingClientRect();
      const visibleHeight = Math.max(0, Math.min(box.bottom, viewportHeight) - Math.max(box.top, metrics.header));
      const next = { pinned: metrics.pinned, index, visible: visibleHeight >= Math.min(240, box.height * 0.5) };
      const previous = viewRef.current;
      if (previous.pinned !== next.pinned || previous.index !== next.index || previous.visible !== next.visible) {
        viewRef.current = next;
        setView(next);
      }
    }

    function schedulePosition() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updatePosition);
    }

    function measure() {
      measureFrame = 0;
      if (!mounted) return;

      const previous = metrics;
      const previousIndex = viewRef.current.index;
      const oldPosition = (window.scrollY - previous.start) / previous.step;
      const wasInside = previous.ready && (previous.pinned
        ? oldPosition >= 0 && oldPosition <= articles.length
        : track.getBoundingClientRect().top <= previous.header && track.getBoundingClientRect().bottom > previous.header);
      const header = document.querySelector(".site-header").getBoundingClientRect().height;
      const sceneHeight = window.innerHeight - header;
      const navigationHeight = stage.querySelector(".project-navigation").getBoundingClientRect().height;
      const panelHeight = Math.max(0, sceneHeight - navigationHeight);
      const step = Math.max(320, Math.round(sceneHeight * 0.9));

      track.style.setProperty("--deck-top", `${header}px`);
      track.style.setProperty("--deck-scene-height", `${sceneHeight}px`);
      track.style.setProperty("--deck-panel-height", `${panelHeight}px`);
      track.style.setProperty("--deck-nav-height", `${navigationHeight}px`);
      track.classList.add("is-pinned");

      // Keep ordinary scrolling when a full project cannot fit on the screen.
      const fits = panelHeight >= 320 && layouts.every((layout) => layout.scrollHeight <= panelHeight + 2);
      const pinned = fits && !preference.matches && articles.length > 1;
      track.classList.toggle("is-pinned", pinned);
      track.style.height = pinned ? `${sceneHeight + articles.length * step}px` : "";

      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const start = trackTop - header;
      markers.forEach((marker, index) => {
        const top = pinned ? index * step : articles[index].getBoundingClientRect().top + window.scrollY - trackTop;
        marker.style.top = `${top}px`;
      });
      metrics = { pinned, step, header, start, ready: true };

      if (!previous.ready) {
        const linkedProject = markers.find((marker) => marker.id === window.location.hash.slice(1));
        linkedProject?.scrollIntoView({ behavior: "instant", block: "start" });
      } else if (wasInside && previous.pinned !== pinned) {
        const target = pinned ? start + previousIndex * step : trackTop + parseFloat(markers[previousIndex].style.top) - header - navigationHeight - 12;
        window.scrollTo({ top: Math.max(0, target), behavior: "instant" });
      } else if (wasInside && pinned && (Math.abs(previous.step - step) > 1 || Math.abs(previous.start - start) > 1)) {
        window.scrollTo({ top: Math.max(0, start + oldPosition * step), behavior: "instant" });
      }

      updatePosition();
    }

    function scheduleMeasure() {
      if (!measureFrame) measureFrame = window.requestAnimationFrame(measure);
    }

    measure();
    const observer = "ResizeObserver" in window ? new ResizeObserver(scheduleMeasure) : null;
    layouts.forEach((layout) => observer?.observe(layout));
    observer?.observe(track);
    window.addEventListener("scroll", schedulePosition, { passive: true });
    window.addEventListener("resize", scheduleMeasure);
    preference.addEventListener("change", scheduleMeasure);
    document.fonts?.ready.then(() => { if (mounted) scheduleMeasure(); });

    return () => {
      mounted = false;
      observer?.disconnect();
      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(measureFrame);
      window.removeEventListener("scroll", schedulePosition);
      window.removeEventListener("resize", scheduleMeasure);
      preference.removeEventListener("change", scheduleMeasure);
    };
  }, [projectIds]);

  return { trackRef, stageRef, panelsRef, ...view };
}
