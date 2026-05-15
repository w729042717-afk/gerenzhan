import './About.css';

export default function About({ bio, avatar, highlights }) {
  return (
    <div className="about">
      {avatar && (
        <div className="about__image">
          <img src={avatar} alt="Portrait" />
        </div>
      )}
      <div className={`about__text${!avatar ? ' about__text--full' : ''}`}>
        <p className="about__bio">{bio}</p>
        <div className="about__highlights">
          {highlights.map((h) => (
            <div key={h.label} className="about__stat">
              <span className="about__stat-value">{h.value}</span>
              <span className="about__stat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
