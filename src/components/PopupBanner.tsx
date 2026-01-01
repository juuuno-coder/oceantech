'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PopupBanner.module.css';

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      // 1. Check if admin has disabled it globally
      const globalConfig = localStorage.getItem('global_popup_config');
      const isEnabledGlobally = globalConfig ? JSON.parse(globalConfig).isEnabled : true;
      
      if (!isEnabledGlobally) {
        setIsVisible(false);
        return;
      }

      // 2. Check if current user has hidden it for today
      const hidePopup = localStorage.getItem('hidePopup_lacan_event');
      if (!hidePopup) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();

    // Listen for admin config changes
    window.addEventListener('popup_config_updated', checkVisibility);

    // Keyboard support - close on Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popup_config_updated', checkVisibility);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closePopup = (dontShowAgain = false) => {
    if (dontShowAgain) {
      const today = new Date();
      // Simple logic: just store a flag. Ideally, store typical expiry.
      localStorage.setItem('hidePopup_lacan_event', 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/라캉-무료테스트-전단.png" 
            alt="Lacan Free Test Event" 
            width={400} 
            height={500} 
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.controls}>
          <button onClick={() => closePopup(true)} className={styles.secondaryBtn}>
            오늘 하루 보지 않기
          </button>
          <button onClick={() => closePopup(false)} className={styles.closeBtn}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
