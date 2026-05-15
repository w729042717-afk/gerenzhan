import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ navLinks, activeSection, onNavClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    onNavClick(id);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={() => handleClick('hero')}>
          CM
        </a>
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="切换菜单"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
