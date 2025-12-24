'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <h3 className={styles.companyName}>{t.footer.companyName}</h3>
              <p className={styles.address}>{t.about.address}</p>
            </div>
            <div className={styles.contact}>
               <p>{t.about.ceo}</p>
               <p>{t.footer.tel}</p>
               <p>{t.footer.email}</p>
            </div>
            <div className={styles.links}>
               <Link href="/about">{t.nav.about}</Link>
               <Link href="/lacan">{t.nav.lacan}</Link>
               <Link href="/alminer">{t.nav.alminer}</Link>
            </div>
          </div>
          
          <div className={styles.bottom}>
            <p className={styles.copyright}>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
