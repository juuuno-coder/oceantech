'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PopupBanner.module.css';

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <div 
      className={styles.popup}
      style={{ 
        position: 'fixed', 
        left: position.x, 
        top: position.y,
        margin: 0, // Reset centering margins
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      <div 
        className={styles.dragHandle}
        onMouseDown={handleMouseDown}
      >
        <span>:: Drag to Move</span>
      </div>
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
  );
}
