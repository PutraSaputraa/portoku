import { useLayoutEffect, useRef, useState } from "react";

/**
 * Horizontal scroll-driven project gallery.
 *
 * The deck track is given extra height; while the sticky stage is pinned,
 * vertical scroll progress is mapped to a horizontal translation of the
 * panels strip. Falls back to a plain vertical list when the viewport is
 * short/narrow or the user prefers reduced motion.
 */
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
    const markers = projectIds.map((id) => document.getElementById(id));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let metrics = { pinned: false, start: 0, range: 1, maxShift: 0, header: 0, ready: false };
    let scrollFrame = 0;
    let measureFrame = 0;
    let mounted = true;

    function updatePosition() {
      scrollFrame = 0;
      let index = 0;

      if (metrics.pinned) {
        const progress = Math.max(0, Math.min(1, (window.scrollY - metrics.start) / metrics.range));
        panels.style.transform = `translate3d(${(-progress * metrics.maxShift).toFixed(1)}px, 0, 0)`;
        index = Math.max(0, Math.min(articles.length - 1, Math.round(progress * (articles.length - 1))));
      } else {
        panels.style.transform = "";
        const viewportHeight = window.innerHeight;
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

      const stageBox = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visibleHeight = Math.max(0, Math.min(stageBox.bottom, viewportHeight) - Math.max(stageBox.top, metrics.header));
      const next = { pinned: metrics.pinned, index, visible: visibleHeight >= Math.min(240, stageBox.height * 0.5) };
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
      const oldProgress = previous.range > 0 ? (window.scrollY - previous.start) / previous.range : 0;
      const wasInside = previous.ready && window.scrollY >= previous.start - window.innerHeight && window.scrollY <= previous.start + previous.range + window.innerHeight;

      // Reset transform before measuring natural widths.
      panels.style.transform = "";
      track.style.height = "";
      track.classList.remove("is-pinned");

      const header = document.querySelector(".site-header").getBoundingClientRect().height;
      const sceneHeight = window.innerHeight - header;
      const navigationHeight = stage.querySelector(".project-navigation").getBoundingClientRect().height;
      const panelHeight = Math.max(0, sceneHeight - navigationHeight);

      track.style.setProperty("--deck-top", `${header}px`);
      track.style.setProperty("--deck-scene-height", `${sceneHeight}px`);
      track.style.setProperty("--deck-panel-height", `${panelHeight}px`);
      track.style.setProperty("--deck-nav-height", `${navigationHeight}px`);

      // Keep ordinary vertical scrolling when the layout cannot fit.
      const fits = panelHeight >= 480 && window.innerWidth > 760 && articles.length > 1;
      const pinned = fits && !preference.matches;

      let start = 0;
      let range = 1;
      let maxShift = 0;

      if (pinned) {
        track.classList.add("is-pinned");
        const stripWidth = panels.scrollWidth;
        const viewportWidth = panels.clientWidth;
        maxShift = Math.max(0, stripWidth - viewportWidth);
        range = Math.max(1, maxShift + sceneHeight * 0.25);
        track.style.height = `${sceneHeight + range}px`;
        const trackTop = track.getBoundingClientRect().top + window.scrollY;
        start = trackTop - header;
        markers.forEach((marker, markerIndex) => {
          const fraction = articles.length > 1 ? markerIndex / (articles.length - 1) : 0;
          marker.style.top = `${fraction * range}px`;
        });
      } else {
        const trackTop = track.getBoundingClientRect().top + window.scrollY;
        start = trackTop - header;
        markers.forEach((marker, markerIndex) => {
          marker.style.top = `${articles[markerIndex].getBoundingClientRect().top + window.scrollY - trackTop}px`;
        });
      }

      metrics = { pinned, start, range, maxShift, header, ready: true };

      if (!previous.ready) {
        const linkedProject = markers.find((marker) => marker.id === window.location.hash.slice(1));
        linkedProject?.scrollIntoView({ behavior: "instant", block: "start" });
      } else if (wasInside && previous.pinned !== pinned) {
        const target = pinned
          ? start + (previousIndex / Math.max(1, articles.length - 1)) * range
          : track.getBoundingClientRect().top + window.scrollY + parseFloat(markers[previousIndex].style.top) - header - navigationHeight - 12;
        window.scrollTo({ top: Math.max(0, target), behavior: "instant" });
      } else if (wasInside && pinned && Math.abs(oldProgress * previous.range - oldProgress * range) > 2) {
        window.scrollTo({ top: Math.max(0, start + Math.max(0, Math.min(1, oldProgress)) * range), behavior: "instant" });
      }

      updatePosition();
    }

    function scheduleMeasure() {
      if (!measureFrame) measureFrame = window.requestAnimationFrame(measure);
    }

    measure();
    const observer = "ResizeObserver" in window ? new ResizeObserver(scheduleMeasure) : null;
    observer?.observe(panels);
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
