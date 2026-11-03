import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";

function ImageLightbox({ images, index, onSelect, onClose, title }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const move = (direction) => onSelect((index + direction + images.length) % images.length);

  return (
    <dialog
      ref={dialogRef}
      className="image-lightbox"
      aria-label={`Galeri ${title}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="lightbox-header">
        <p>{title}</p>
        <button type="button" className="icon-button" onClick={onClose} aria-label="Tutup galeri">
          <Icon name="close" />
        </button>
      </div>
      <div className="lightbox-image-wrap">
        <img src={images[index]} alt={`${title}, tampilan ${index + 1}`} className="lightbox-image" />
      </div>
      <div className="lightbox-footer">
        <span aria-live="polite">Tampilan {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        {images.length > 1 && (
          <div className="gallery-arrows">
            <button type="button" className="icon-button" onClick={() => move(-1)} aria-label="Gambar sebelumnya"><Icon name="chevronLeft" /></button>
            <button type="button" className="icon-button" onClick={() => move(1)} aria-label="Gambar berikutnya"><Icon name="chevronRight" /></button>
          </div>
        )}
      </div>
    </dialog>
  );
}

export default function ImageGallery({ images, title, className = "", eager = false, autoPlay = false, autoPlayActive = true, heroTransition = false }) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(() => !document.hidden);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const lastLoadedIndex = useRef(null);

  const selectImage = useCallback((nextIndex, manual = true) => {
    if (nextIndex === index) return;
    if (manual) setUserPaused(true);
    setPreviousIndex(lastLoadedIndex.current);
    setIsLoaded(false);
    setHasError(false);
    setIndex(nextIndex);
  }, [index]);

  useEffect(() => {
    if (!autoPlay) return undefined;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) => setReducedMotion(event.matches);
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [autoPlay]);

  const automaticMode = autoPlay && autoPlayActive && images.length > 1 && !userPaused && !hovered && !focusPaused && !isOpen && documentVisible && !reducedMotion && !hasError;
  const playing = automaticMode && isLoaded;

  useEffect(() => {
    if (!playing) return undefined;
    const nextIndex = (index + 1) % images.length;
    const nextImage = new Image();
    nextImage.src = images[nextIndex];
    const timer = window.setTimeout(() => selectImage(nextIndex, false), 6000);
    return () => window.clearTimeout(timer);
  }, [playing, index, images, selectImage]);

  const move = (direction) => selectImage((index + direction + images.length) % images.length);

  return (
    <div
      className={`image-gallery ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false); }}
    >
      <button
        type="button"
        className={`gallery-stage ${isLoaded ? "is-loaded" : ""}`}
        onClick={() => { setUserPaused(true); setIsOpen(true); }}
        aria-label={`Perbesar ${title}, tampilan ${index + 1}`}
        disabled={hasError}
      >
        {previousIndex !== null && <img src={images[previousIndex]} alt="" aria-hidden="true" className="gallery-image gallery-image-previous" />}
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title}, tampilan ${index + 1}`}
          className="gallery-image gallery-image-current"
          style={heroTransition ? { viewTransitionName: "project-hero" } : undefined}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => { lastLoadedIndex.current = index; setIsLoaded(true); }}
          onError={() => setHasError(true)}
        />
        {hasError ? <span className="gallery-error">Gambar tidak dapat dimuat.</span> : <span className="gallery-enlarge"><Icon name="expand" />Perbesar</span>}
      </button>
      <div className="gallery-toolbar">
        <span className="gallery-count" aria-live={automaticMode ? "off" : "polite"}>Tampilan <span>{String(index + 1).padStart(2, "0")}</span> / {String(images.length).padStart(2, "0")}</span>
        {images.length > 1 && (
          <div className="gallery-arrows">
            {autoPlay && !reducedMotion && <button
              type="button"
              className="icon-button gallery-playback"
              aria-label={`${userPaused ? "Lanjutkan" : "Jeda"} pergantian otomatis untuk ${title}`}
              title={userPaused ? "Lanjutkan slideshow" : "Jeda slideshow"}
              onClick={() => { setUserPaused(!userPaused); setFocusPaused(false); }}
            ><Icon name={userPaused ? "play" : "pause"} /></button>}
            <button type="button" className="icon-button" onClick={() => move(-1)} aria-label={`Tampilan sebelumnya untuk ${title}`}><Icon name="chevronLeft" /></button>
            <button type="button" className="icon-button" onClick={() => move(1)} aria-label={`Tampilan berikutnya untuk ${title}`}><Icon name="chevronRight" /></button>
          </div>
        )}
      </div>
      {isOpen && <ImageLightbox images={images} index={index} title={title} onSelect={selectImage} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
