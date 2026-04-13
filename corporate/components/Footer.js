import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">CAPSULE</span>
        <div className="footer-right">
          <nav className="footer-links">
            <Link href="/cloud-cto/terms">利用規約</Link>
            <Link href="/cloud-cto/legal">特定商取引法に基づく表記</Link>
          </nav>
          <span className="footer-copy">&copy; 2024 CAPSULE Inc.</span>
        </div>
      </div>
    </footer>
  );
}
