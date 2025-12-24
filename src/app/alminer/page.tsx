'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './alminer.module.css';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function AlminerPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.backgroundCanvas}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>PREMIUM SELF WAXING</span>
            <h1 className="fade-in">{t.alminer.title}</h1>
            <p className="fade-in" style={{ animationDelay: '0.2s' }}>{t.alminer.subtitle}</p>
            <div className={`${styles.statusBadge} fade-in`} style={{ animationDelay: '0.4s' }}>
              <span className={styles.pulse}></span>
              {t.alminer.comingSoon}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className={styles.intro}>
        <div className={styles.introText}>
          <span className={styles.label}>THE HERITAGE</span>
          <h2>LA CAN Expertise for Home</h2>
          <p>{t.alminer.description}</p>
        </div>
      </Section>

      {/* Product Highlight Section */}
      <Section background="light">
        <div className={styles.productHighlight}>
          <div className={styles.productVisual}>
            <div className={styles.placeholderImg}>Alminer Product</div>
          </div>
          <div className={styles.productDetail}>
            <h3>{t.alminer.product.name}</h3>
            <p className={styles.productDesc}>{t.alminer.product.desc}</p>
            <ul className={styles.specs}>
              {t.alminer.product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <Button href="https://www.coupang.com/vp/products/8730201181" variant="alminer" size="lg" external>
              {t.alminer.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* Features Grid - 3 Core Technologies */}
      <Section>
        <h2 className={styles.sectionTitle}>3 Core Technologies</h2>
        <div className={styles.grid}>
          {t.alminer.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconBox}>
                <div className={`${styles.iconShape} ${styles[`shape${index + 1}`]}`}></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap / Vision Statement */}
      <Section background="dark" className={styles.visionSection}>
        <div className={styles.visionContent}>
          <span className={styles.visionLabel}>FUTURE VISION</span>
          <h2>Beyond Waxing</h2>
          <p>알마이너는 단순한 제품을 넘어, 사용자의 데이터를 학습하고 분석하여 최상의 뷰티 경험을 제안하는 데이터 플랫폼으로 진화하고 있습니다.</p>
          <p style={{ marginTop: '20px', fontSize: '1rem', opacity: 0.6 }}>개개인의 모질과 피부 상태에 따른 최적화된 왁싱 주기를 데이터로 제안합니다.</p>
        </div>
      </Section>
    </div>
  );
}
