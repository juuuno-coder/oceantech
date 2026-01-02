'use client';

import React, { useState } from 'react';
import styles from './AdminComponents.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/context/ToastContext';

export default function AdminSettings() {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const [portoneId, setPortoneId] = useState('imp802931****');
  const [apiKey, setApiKey] = useState('14920193****');
  const [shippingFee, setShippingFee] = useState(3000);

  const handleSave = () => {
    showToast(language === 'ko' ? '설정이 저장되었습니다!' : 'Settings Saved!', 'success');
  };

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>{language === 'ko' ? '시스템 설정' : 'System Settings'}</h2>

      <div className={styles.settingSection}>
        <h3>{language === 'ko' ? '결제 연동 (포트원)' : 'Payment Gateway (Portone)'}</h3>
        <p className={styles.sectionDesc}>
          {language === 'ko' 
            ? '전자 결제를 위한 포트원(아임포트) API 키를 설정합니다.' 
            : "Configure your Portone (I'mport) API keys for electronic payments."}
        </p>
        
        <div className={styles.formGroup}>
          <label>Merchant ID (가맹점 식별코드)</label>
          <input 
            type="text" 
            value={portoneId} 
            onChange={(e) => setPortoneId(e.target.value)} 
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>REST API Key</label>
          <input 
            type="password" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)} 
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.settingSection}>
        <h3>{language === 'ko' ? '스토어 설정' : 'Store Configurations'}</h3>
        <div className={styles.formGroup}>
          <label>{language === 'ko' ? '기본 배송비 (KRW)' : 'Default Shipping Fee (KRW)'}</label>
          <input 
            type="number" 
            value={shippingFee} 
            onChange={(e) => setShippingFee(Number(e.target.value))} 
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveBtn} onClick={handleSave}>
          {language === 'ko' ? '변경사항 저장' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
