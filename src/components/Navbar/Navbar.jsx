import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const isActive = (path) => location.pathname === path ? 'navbar__link--active' : '';

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          CM
        </Link>
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <li>
            <Link to="/" className={`navbar__link ${isActive('/')}`} onClick={closeMenu}>
              作品
            </Link>
          </li>
          <li>
            <Link to="/about" className={`navbar__link ${isActive('/about')}`} onClick={closeMenu}>
              关于
            </Link>
          </li>
          <li>
            <a href="#contact" className="navbar__link" onClick={handleContactClick}>
              联系
            </a>
          </li>
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
