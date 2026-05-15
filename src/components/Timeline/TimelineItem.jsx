import { useRef } from 'react';
import useInView from '../../hooks/useInView';
import './TimelineItem.css';

export default function TimelineItem({ event }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.2, once: true });

  return (
    <div
      ref={ref}
      className={`timeline-item${isVisible ? ' timeline-item--visible' : ''}`}
    >
      <div className="timeline-item__dot" />
      <div className="timeline-item__content">
        <span className="timeline-item__date">{event.date}</span>
        <h3 className="timeline-item__title">{event.title}</h3>
        <p className="timeline-item__company">{event.company}</p>
        <p className="timeline-item__desc">{event.description}</p>
      </div>
    </div>
  );
}
