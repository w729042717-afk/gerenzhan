import './RichContent.css';

export default function RichContent({ text }) {
  if (!text) return null;

  const paragraphs = text.split('\n\n').filter(Boolean);

  return (
    <div className="rich-content">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
