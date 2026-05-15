import { useRef } from 'react';
import useInView from '../../hooks/useInView';
import './Section.css';

export default function Section({ id, title, children }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`section${isVisible ? ' section--visible' : ''}`}
    >
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        <span className="section__line" />
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
