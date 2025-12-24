'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Define routes that have dark hero sections (requiring white header text)
  const isDarkHero = pathname === '/lacan' || pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${!scrolled && isDarkHero ? styles.darkHero : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            OceanTech
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>{t.nav.home}</Link>
            <Link href="/about" className={styles.link}>{t.nav.about}</Link>
            <Link href="/lacan" className={styles.link}>{t.nav.lacan}</Link>
            <Link href="/alminer" className={styles.link}>{t.nav.alminer}</Link>
            <Link href="/business" className={styles.link}>{t.nav.business}</Link>
            <Link href="/presentation/overseas-2026" className={styles.link}>{t.nav.strategy}</Link>
            <a href="http://lacanwax.com/" target="_blank" rel="noopener noreferrer" className={styles.shopBtn}>
              {t.nav.shop}
            </a>
          </nav>

          <div className={styles.mobileMenuBtn}>
            {/* Simple Hamburger Icon Placeholder */}
            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>☰</span>
          </div>

          <div className={styles.langSwitch}>
            <button 
              className={`${styles.langBtn} ${language === 'ko' ? styles.active : ''}`}
              onClick={() => setLanguage('ko')}
            >
              KR
            </button>
            <span className={styles.divider}>|</span>
            <button 
              className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
