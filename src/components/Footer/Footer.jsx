import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/loadContent';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {year} {personalInfo.name} 版权所有
      </p>
      <div className="footer__links">
        <Link to="/">作品</Link>
        <Link to="/about">关于</Link>
      </div>
    </footer>
  );
}
