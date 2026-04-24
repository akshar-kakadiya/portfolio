export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">AK</span>
          <span className="footer-copy">© {year} Akshar Kakadiya. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <span className="footer-built">Built with React &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
