import { useEffect, useRef, useState } from "react";

const EMPTY_IDS = [];

export default function usePageMotion(sectionIds = EMPTY_IDS, projectIds = EMPTY_IDS) {
  const pageRef = useRef(null);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const [activeProject, setActiveProject] = useState(projectIds[0] || "");

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = [...page.querySelectorAll("[data-reveal]")];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const projects = projectIds.map((id) => document.getElementById(id)).filter(Boolean);
    let reducedMotion = preference.matches;
    let frame = 0;
    let currentSection = "";
    let currentProject = "";
    let observer;

    if (!reducedMotion && "IntersectionObserver" in window) {
      page.classList.add("motion-ready");
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

      reveals.forEach((element) => {
        element.style.setProperty("--reveal-delay", `${Number(element.dataset.revealDelay) || 0}ms`);
        observer.observe(element);
      });
    }

    function updatePosition() {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const scrollable = document.documentElement.scrollHeight - viewportHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      page.style.setProperty("--page-progress", progress.toFixed(4));

      let nextSection = sections[0]?.id || "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= viewportHeight * 0.5) nextSection = section.id;
      });
      // A short final section may never reach the middle of a tall viewport.
      if (progress >= 0.995 && sections.length) {
        nextSection = sections[sections.length - 1].id;
      }
      if (nextSection !== currentSection) {
        currentSection = nextSection;
        setActiveSection(nextSection);
      }

      let nearestProject = "";
      let nearestDistance = Infinity;
      projects.forEach((project) => {
        const bounds = project.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - viewportHeight / 2);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestProject = project.id;
        }
        if (bounds.top < viewportHeight + 100 && bounds.bottom > -100) {
          const offset = reducedMotion ? 0 : Math.max(-1, Math.min(1, (bounds.top + bounds.height / 2 - viewportHeight / 2) / viewportHeight));
          project.style.setProperty("--project-offset", offset.toFixed(3));
        }
      });
      if (nearestProject !== currentProject) {
        currentProject = nearestProject;
        setActiveProject(nearestProject);
      }
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    }

    function updatePreference(event) {
      reducedMotion = event.matches;
      if (reducedMotion) {
        page.classList.remove("motion-ready");
        observer?.disconnect();
        reveals.forEach((element) => element.classList.add("is-revealed"));
      }
      scheduleUpdate();
    }

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    preference.addEventListener("change", updatePreference);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      preference.removeEventListener("change", updatePreference);
      page.classList.remove("motion-ready");
    };
  }, [sectionIds, projectIds]);

  return { pageRef, activeSection, activeProject };
}
