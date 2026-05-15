import './Footer.css';

export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {year} {name}. All rights reserved.
      </p>
      <a href="#hero" className="footer__top">Back to top &uarr;</a>
    </footer>
  );
}
