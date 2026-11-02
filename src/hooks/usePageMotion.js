import { useEffect, useRef, useState } from "react";

const EMPTY_IDS = [];

export default function usePageMotion(sectionIds = EMPTY_IDS) {
  const pageRef = useRef(null);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = [...page.querySelectorAll("[data-reveal]")];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    let reducedMotion = preference.matches;
    let frame = 0;
    let currentSection = "";
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
  }, [sectionIds]);

  return { pageRef, activeSection };
}
