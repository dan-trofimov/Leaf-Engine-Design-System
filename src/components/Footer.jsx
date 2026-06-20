import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          <a href="https://taplink.cc/congreen" target="_blank" rel="noopener noreferrer">Taplink</a>
          <span className="footer__dot">&middot;</span>
          <a href="https://www.instagram.com/leaf_engine/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span className="footer__dot">&middot;</span>
          <a href="https://www.tiktok.com/@leaf_engine_" target="_blank" rel="noopener noreferrer">TikTok</a>
          <span className="footer__dot">&middot;</span>
          <a href="https://discord.com/invite/cN6K7j5gWz" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
        <div className="footer__legal">
          <button className="footer__legal-link">Impressum</button>
          <span className="footer__dot">&middot;</span>
          <button className="footer__legal-link">Datenschutz</button>
        </div>
        <p className="footer__copy">&copy; 2026 Congreen &mdash; FH BFI Wien</p>
      </div>
    </footer>
  );
}
