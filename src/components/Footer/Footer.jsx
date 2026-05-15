import './Footer.css';

export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {year} {name}版权所有
      </p>
      <a href="#hero" className="footer__top">回到顶部 &uarr;</a>
    </footer>
  );
}
