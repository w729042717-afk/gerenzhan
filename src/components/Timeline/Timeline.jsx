import TimelineItem from './TimelineItem';
import './Timeline.css';

export default function Timeline({ events }) {
  return (
    <div className="timeline">
      <div className="timeline__line" />
      {events.map((event) => (
        <TimelineItem key={event.id} event={event} />
      ))}
    </div>
  );
}
