'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './GlobalMap.module.css';

export default function GlobalMap() {
  const { t } = useLanguage();

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapBackground}>
        {/* Simplified World Map SVG Outline */}
        <svg viewBox="0 0 1000 500" className={styles.worldMap}>
          {/* Rough outlines of continents */}
          <path d="M150,100 Q200,50 300,100 T400,150 T300,300 T150,350 T100,200 Z" className={styles.continent} /> {/* Americas */}
          <path d="M450,100 Q550,50 650,100 T750,150 T650,300 T450,350 T400,200 Z" className={styles.continent} /> {/* Eurasia/Africa */}
          <path d="M750,300 Q800,280 850,300 T800,400 Z" className={styles.continent} /> {/* Australia */}
        </svg>

        {/* Dynamic Pins */}
        <div className={styles.pin} style={{ top: '30%', left: '20%' }}>
          <span className={styles.pinDot}></span>
          <span className={styles.pinPulse}></span>
          <div className={styles.pinLabel}>
            <strong>Amazon US</strong>
            <span>North America</span>
          </div>
        </div>

        <div className={styles.pin} style={{ top: '45%', left: '75%' }}>
          <span className={styles.pinDot}></span>
          <span className={styles.pinPulse}></span>
          <div className={styles.pinLabel}>
            <strong>Qoo10 JP</strong>
            <span>Japan</span>
          </div>
        </div>

        <div className={styles.pin} style={{ top: '55%', left: '70%' }}>
          <span className={styles.pinDot}></span>
          <span className={styles.pinPulse}></span>
          <div className={styles.pinLabel}>
            <strong>Shopee</strong>
            <span>Southeast Asia</span>
          </div>
        </div>
      </div>
      
      <div className={styles.partnerList}>
        {t.global.partners.map((partner, index) => (
          <div key={index} className={styles.partnerItem}>
            <h3>{partner.name}</h3>
            <p>{partner.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
