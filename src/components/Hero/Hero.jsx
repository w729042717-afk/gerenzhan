import './Hero.css';

export default function Hero({ name, title, subtitle, heroImage }) {
  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`hero${heroImage ? ' hero--image' : ''}`}
      style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__title">{title}</p>
        <h1 className="hero__name">{name}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <button className="hero__cta" onClick={scrollToWorks}>
          查看作品
        </button>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
