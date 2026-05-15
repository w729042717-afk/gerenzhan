import { useState, useCallback, useEffect } from 'react';
import './ProjectGallery.css';

export default function ProjectGallery({ images, title }) {
  const [lightbox, setLightbox] = useState(null);

  const open = (index) => setLightbox(index);
  const close = () => setLightbox(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, goNext, goPrev]);

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button key={i} className="gallery__item" onClick={() => open(i)}>
            <img src={src} alt={`${title} - ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="关闭">&times;</button>
          <button className="lightbox__prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="上一张">&lsaquo;</button>
          <img
            className="lightbox__img"
            src={images[lightbox]}
            alt={`${title} - ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="下一张">&rsaquo;</button>
          <span className="lightbox__count">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
