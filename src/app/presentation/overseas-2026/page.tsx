"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

/**
 * Slide Data Configuration
 */
const TOTAL_SLIDES = 4;

const content = {
  en: {
    slide1: {
      label: "2026 Management Vision",
      title: "Global Expansion Strategy",
      desc: <>Innovating Marine Biotechnology & Digital Sales Channels<br/>for a Connected World.</>
    },
    slide2: {
      label: "Step 01. Digital Transformation",
      title: "Global DTC Platform",
      card1: {
        title: "Global Standard Web Architecture",
        items: [
          { title: "Multi-Language & Currency:", desc: "Seamless toggle between Korean (KRW) and English (USD/EUR) to reduce friction for international B2B/B2C buyers." },
          { title: "Dedicated Domains:", desc: "Separate .com/.net domains ensuring high SEO ranking in target regions." }
        ]
      },
      card2: {
        title: "Brand & Commerce Integration",
        items: [
          { title: "Unified Brand Showcase:", desc: "Showcasing \"Alminer\" (Premium Food Tech) and \"Lacan\" (Marine Wax) portfolios in one hub." },
          { title: "Cross-Border Commerce:", desc: "Direct purchase capabilities integrated with global payment gateways (PayPal, Stripe)." },
          { title: "Business Inquiry System:", desc: "Dedicated B2B quote request forms directly connected to CRM." }
        ]
      }
    },
    slide3: {
      label: "Step 02. Marketplace Strategy",
      title: "Shopee SEA Expansion",
      card1: {
        title: "Strategic Value",
        desc: "Utilizing Shopee, the No.1 E-commerce platform in Southeast Asia, as our primary efficient export channel.",
        items: [
          { title: "Target Markets:", desc: "Singapore (Testbed), Malaysia, Philippines, Vietnam, Thailand." },
          { title: "Low Barrier to Entry:", desc: "Minimal setup costs compared to Amazon; high affinity for K-Brands." }
        ]
      },
      card2: {
        title: "Operational Excellence (SLS)",
        items: [
          { title: "SLS (Shopee Logistics Service):", desc: "We simply ship to the Gimpo/Incheon collection center. Shopee manages customs, international shipping, and last-mile delivery." },
          { title: "Incubation Support:", desc: "Leveraging \"Shopee Korea\" incubation programs for marketing subsidies and keyword optimization." }
        ]
      }
    },
    slide4: {
      label: "Step 03. 2026 Growth Engines",
      title: "Strategic Partnerships & AI",
      card1: {
        title: "2026 Export Voucher Program",
        desc: "Maximizing government subsidies to accelerate global reach.",
        items: [
          { title: "Marketing Track:", desc: "Funding for social media ads (Meta/Google) targeting SEA/US regions." },
          { title: "Translation & Production:", desc: "Support for creating English/Chinese catalogues and promotional videos." },
          { title: "Certification:", desc: "Subsidies for obtaining necessary FDA/CE certifications for new products." }
        ]
      },
      card2: {
        title: "AI-Driven Localization",
        items: [
          { title: "Human-in-the-loop AI Operations:", desc: "Utilizing DeepL & Chat-based AI for real-time customer service (CS) translation, overcoming language barriers instantly." },
          { title: "Content Localization:", desc: "Automated generation of local-friendly marketing copy and SEO keywords for each target country." }
        ]
      }
    }
  },
  ko: {
    slide1: {
      label: "2026 경영 비전",
      title: "글로벌 확장 전략",
      desc: <>초연결 시대를 위한 해양 바이오 기술 혁신<br/>및 디지털 판매 채널 구축</>
    },
    slide2: {
      label: "Step 01. 디지털 대전환",
      title: "글로벌 자사몰(DTC) 플랫폼",
      card1: {
        title: "글로벌 표준 웹 아키텍처",
        items: [
          { title: "다국어 및 다통화 지원:", desc: "해외 바이어와 고객을 위한 한국어(KRW)/영어(USD) 완벽 지원." },
          { title: "전용 도메인:", desc: "주요 타겟 국가의 검색 엔진 최적화(SEO)를 위한 닷컴(.com) 도메인 운영." }
        ]
      },
      card2: {
        title: "브랜드 및 커머스 통합",
        items: [
          { title: "통합 브랜드 쇼케이스:", desc: "\"알마이너\"(프리미엄 푸드테크)와 \"라캉\"(해양 왁스) 포트폴리오의 통합 허브 구축." },
          { title: "크로스보더 커머스:", desc: "페이팔(PayPal), 스트라이프 등 글로벌 결제 모듈 연동을 통한 직접 구매 구현." },
          { title: "비즈니스 문의 시스템:", desc: "CRM과 연동된 B2B 전용 견적 및 제휴 문의 시스템 구축." }
        ]
      }
    },
    slide3: {
      label: "Step 02. 마켓플레이스 전략",
      title: "동남아시아(Shopee) 시장 확장",
      card1: {
        title: "전략적 가치",
        desc: "동남아 1위 이커머스 플랫폼 '쇼피'를 핵심 수출 채널로 활용하여 시장 진입 장벽 최소화.",
        items: [
          { title: "타겟 시장:", desc: "싱가포르(테스트베드), 말레이시아, 필리핀, 베트남, 태국." },
          { title: "낮은 진입 장벽:", desc: "아마존 대비 초기 세팅 비용이 낮으며, K-브랜드에 대한 높은 선호도 활용." }
        ]
      },
      card2: {
        title: "운영 효율화 (SLS)",
        items: [
          { title: "SLS (쇼피 물류 서비스):", desc: "검증된 김포/인천 집하장으로 발송하면 통관 및 현지 배송은 쇼피가 전담(One-Stop Logistics)." },
          { title: "인큐베이션 지원:", desc: "쇼피 코리아의 공식 인큐베이션 프로그램을 통한 마케팅 바우처 및 키워드 최적화 지원." }
        ]
      }
    },
    slide4: {
      label: "Step 03. 2026 성장 동력",
      title: "정부 지원사업 및 AI 도입",
      card1: {
        title: "2026 수출바우처 사업",
        desc: "정부 지원금을 전략적으로 활용하여 글로벌 마케팅 및 인프라 구축 비용 절감.",
        items: [
          { title: "마케팅 트랙:", desc: "동남아/미국 타겟 메타(Meta) 및 구글(Google) 스폰서드 광고 집행 지원." },
          { title: "통번역 및 제작:", desc: "영문/중문 카탈로그 제작 및 브랜드 홍보 영상 다국어 자막 제작." },
          { title: "해외 인증:", desc: "신제품의 원활한 수출을 위한 필수 인증(FDA/CE 등) 획득 비용 지원." }
        ]
      },
      card2: {
        title: "AI 기반 현지화 전략",
        items: [
          { title: "실시간 AI CS 통번역:", desc: "DeepL 및 챗봇 AI를 활용하여 언어 장벽 없는 실시간 고객 응대 시스템 구축." },
          { title: "콘텐츠 현지화:", desc: "국가별 문화적 특성을 고려한 마케팅 카피 자동 생성 및 SEO 키워드 최적화." }
        ]
      }
    }
  }
};

export default function OverseasStrategy2026() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState<'en' | 'ko'>('en');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const t = content[lang];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className={styles.container}>
      {/* Background Ambience */}
      <div className={styles.ambientLight} />

      {/* Language Toggle */}
      <button 
        onClick={() => setLang(prev => prev === 'en' ? 'ko' : 'en')}
        style={{ 
          position: 'absolute', 
          top: '3rem', 
          right: '12rem', 
          zIndex: 30,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          backdropFilter: 'blur(5px)',
          fontSize: '0.9rem'
        }}
      >
        {lang === 'en' ? '🇰🇷 KOREAN' : '🇺🇸 ENGLISH'}
      </button>

      {/* --- Slide 1: Cover --- */}
      <section className={`${styles.slide} ${currentSlide === 0 ? styles.active : ""}`}>
        <div>
          <span className={styles.label}>{t.slide1.label}</span>
          <h1>
            <span className={styles.goldText}>Ocean Marine Tech</span>
            <br />
            <span className={styles.gradientText}>{t.slide1.title}</span>
          </h1>
          <p style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
            {t.slide1.desc}
          </p>
        </div>
      </section>

      {/* --- Slide 2: Digital Transformation (DTC) --- */}
      <section className={`${styles.slide} ${currentSlide === 1 ? styles.active : ""}`}>
        <span className={styles.label}>{t.slide2.label}</span>
        <h2 className={styles.gradientText}>{t.slide2.title}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t.slide2.card1.title}</h3>
            <ul className={styles.features}>
              {t.slide2.card1.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.card}>
            <h3>{t.slide2.card2.title}</h3>
            <ul className={styles.features}>
              {t.slide2.card2.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Slide 3: Shopee Expansion (Marketplace) --- */}
      <section className={`${styles.slide} ${currentSlide === 2 ? styles.active : ""}`}>
        <span className={styles.label}>{t.slide3.label}</span>
        <h2 className={styles.gradientText}>{t.slide3.title}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t.slide3.card1.title}</h3>
            <p style={{ marginBottom: '1.5rem', color: '#cbd5e1' }}>
              {t.slide3.card1.desc}
            </p>
            <ul className={styles.features}>
              {t.slide3.card1.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{t.slide3.card2.title}</h3>
            <ul className={styles.features}>
              {t.slide3.card2.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Slide 4: Government Support & AI --- */}
      <section className={`${styles.slide} ${currentSlide === 3 ? styles.active : ""}`}>
        <span className={styles.label}>{t.slide4.label}</span>
        <h2 className={styles.gradientText}>{t.slide4.title}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t.slide4.card1.title}</h3>
            <p style={{ marginBottom: '1.5rem', color: '#cbd5e1' }}>
             {t.slide4.card1.desc}
            </p>
            <ul className={styles.features}>
              {t.slide4.card1.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>{t.slide4.card2.title}</h3>
            <ul className={styles.features}>
              {t.slide4.card2.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> 
                  <br/>{item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Controls --- */}
      <div className={styles.navBar}>
        <div className={styles.progressContainer}>
          {[...Array(TOTAL_SLIDES)].map((_, idx) => (
            <div 
              key={idx} 
              className={`${styles.dot} ${currentSlide === idx ? styles.active : ""}`} 
            />
          ))}
        </div>

        <div className={styles.controls}>
          <button 
            className={styles.btn}
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button 
            className={styles.btn}
            onClick={nextSlide} 
            disabled={currentSlide === TOTAL_SLIDES - 1}
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </div>

      <Link href="/" style={{ position: 'absolute', top: '3rem', right: '4rem', opacity: 0.5, color: '#fff', fontSize: '0.9rem' }}>
        Exit Presentation
      </Link>
    </div>
  );
}
