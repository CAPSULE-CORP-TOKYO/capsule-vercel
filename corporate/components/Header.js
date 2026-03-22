'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Header({ navItems, logoHref = '/' }) {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="header-inner">
          <Link href={logoHref} className="logo">CAPSULE</Link>
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href}>{t(item.ja, item.en)}</a>
                </li>
              ))}
            </ul>
            <button
              className="lang-toggle"
              aria-label="Switch language"
              onClick={toggleLang}
            >
              {lang === 'ja' ? 'EN' : 'JA'}
            </button>
          </nav>
          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? ' active' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>{t(item.ja, item.en)}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
