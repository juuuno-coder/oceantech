'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminComponents.module.css';
import Image from 'next/image';
import { useToast } from '@/context/ToastContext';

export default function BannerManager() {
  const { showToast } = useToast();
  const [isPopupEnabled, setIsPopupEnabled] = useState(true);
  const [bannerTitle, setBannerTitle] = useState('라캉 전문가용 무료 테스트 이벤트');
  const [imagePath, setImagePath] = useState('/라캉-무료테스트-전단.png');

  // Load configuration from localStorage for demo purposes
  useEffect(() => {
    const savedConfig = localStorage.getItem('global_popup_config');
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      setIsPopupEnabled(config.isEnabled);
      setBannerTitle(config.title || bannerTitle);
      setImagePath(config.imagePath || imagePath);
    }
  }, []);

  const handleSave = () => {
    const config = {
      isEnabled: isPopupEnabled,
      title: bannerTitle,
      imagePath: imagePath,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('global_popup_config', JSON.stringify(config));
    
    // Dispatch a custom event so other components (like PopupBanner) can react if they are in the same tab
    // In a real app, this would be a DB update and the banner would fetch it on load.
    window.dispatchEvent(new Event('popup_config_updated'));
    
    showToast('팝업 설정이 저장되었습니다.', 'success');
  };

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>Popup & Banner Management</h2>
      <p className={styles.desc}>홈페이지 메인에 표시될 팝업 배너를 관리합니다.</p>

      <div className={styles.settingSection}>
        <div className={styles.toggleRow}>
          <h3>메인 팝업 활성화</h3>
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={isPopupEnabled} 
              onChange={(e) => setIsPopupEnabled(e.target.checked)} 
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        
        <div className={styles.formGroup}>
          <label>배너 관리 제목 (내부용)</label>
          <input 
            type="text" 
            value={bannerTitle} 
             onChange={(e) => setBannerTitle(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>이미지 경로</label>
          <input 
            type="text" 
            value={imagePath} 
             onChange={(e) => setImagePath(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.previewSection}>
          <label>미리보기</label>
          <div className={styles.bannerPreview}>
            <Image 
              src={imagePath} 
              alt="Preview" 
              width={200} 
              height={250} 
              style={{ objectFit: 'contain' }}
            />
            {!isPopupEnabled && <div className={styles.disabledOverlay}>OFF</div>}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveBtn} onClick={handleSave}>설정 저장하기</button>
      </div>
    </div>
  );
}
