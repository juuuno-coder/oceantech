'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/hero-beauty.png" 
            alt="Ocean Tech Beauty" 
            fill 
            priority
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className="fade-in">Converging<br />Ocean Tech & Beauty</h1>
          <p className="fade-in" style={{ animationDelay: '0.2s' }}>해양 바이오 데이터와 첨단 뷰티 과학의 만남</p>
        </div>
        <div className={`${styles.scrollIndicator} fade-in`} style={{ animationDelay: '1.2s' }}>
           <span>SCROLL</span>
           <div className={styles.scrollLine}></div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Intro Section */}
      <section className="section container">
        <div className={styles.intro}>
          <h2>{t.about.title}</h2>
          <p>{t.about.description}</p>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brands}>
        {/* Lacan Card */}
        <div className={styles.brandCard}>
          <div className={styles.brandContent}>
            <h3>{t.lacan.title}</h3>
            <p>{t.lacan.description}</p>
            <Link href="/lacan" className={styles.lacanBtn}>
              VIEW DETAILS
            </Link>
          </div>
          <div className={`${styles.brandVisual} ${styles.lacanVisual}`}>
            <Image 
              src="/lacan-bg.png" 
              alt="Lacan Premium Wax" 
              fill
              quality={90}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.visualOverlay}></div>
             <span className={styles.brandBgLabel}>PRO</span>
          </div>
        </div>

        {/* Alminer Card */}
        <div className={styles.brandCard}>
          <div className={styles.brandContent}>
            <h3>{t.alminer.title}</h3>
            <p>{t.alminer.description}</p>
            <Link href="/alminer" className={styles.alminerBtn}>
              VIEW DETAILS
            </Link>
          </div>
          <div className={`${styles.brandVisual} ${styles.alminerVisual}`}>
             <Image 
              src="/alminer-bg.png" 
              alt="Alminer Bio Tech" 
              fill
              quality={90}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.visualOverlayLight}></div>
             <span className={styles.brandBgLabel}>TECH</span>
          </div>
        </div>
      </section>
    </div>
  );
}
