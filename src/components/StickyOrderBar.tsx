'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import styles from './StickyOrderBar.module.css';
import Button from './ui/Button';

export default function StickyOrderBar() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Multiple selected items state
  const [selectedItems, setSelectedItems] = useState<{ label: string; price: number; quantity: number }[]>([]);

  // Format price helper
  const formatPrice = (p: number) => {
    // For English, we might want to approximate USD or just show KRW for now.
    // The user requirement implies identical options from Coupang KR.
    // Let's stick to KRW formatting for consistency or handle basic currency symbol.
    return new Intl.NumberFormat('ko-KR').format(p);
  };

  // Calculate total price
  const totalPrice = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalQuantity = selectedItems.reduce((sum, item) => sum + item.quantity, 0);

  // Toggle internal visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const currentOptions = t.alminer.shop.options || [];

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = parseInt(e.target.value, 10);
    if (isNaN(idx) || idx < 0) return;
    
    const option = currentOptions[idx];
    
    // Check if already added
    const existingItemIndex = selectedItems.findIndex(item => item.label === option.label);
    if (existingItemIndex > -1) {
      // Already exists, just increase quantity
      const newItems = [...selectedItems];
      newItems[existingItemIndex].quantity += 1;
      setSelectedItems(newItems);
    } else {
      // Add new item
      setSelectedItems([...selectedItems, { ...option, quantity: 1 }]);
    }
    
    // Reset select to default
    e.target.value = "-1";
    
    // Auto expand on mobile when adding items if not already
    setIsExpanded(true);
  };

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...selectedItems];
    const newQty = newItems[index].quantity + delta;
    
    if (newQty < 1) {
      // Remove item if quantity goes below 1
      newItems.splice(index, 1);
    } else {
      newItems[index].quantity = newQty;
    }
    setSelectedItems(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    setSelectedItems(newItems);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    if (language === 'ko') {
      // Internal Checkout Flow
      // Serialize selected items to query string (simple version)
      // If no items selected, maybe default to 1 pack? 
      // For now, if no items, alert or just go.
      
      const itemsParam = encodeURIComponent(JSON.stringify(selectedItems));
      router.push(`/shop/checkout?items=${itemsParam}`);
    } else {
      // English: Go to Coupang or Global Store? 
      // Existing logic was Coupang. Keeping it as external link or alert "Global Shipping Coming Soon"
      // User instruction said "EN version... design page listing Shopee/Amazon". 
      // That is the /shop page. On the *detail* page, if they click buy, where should they go?
      // Maybe back to /shop for global selection? Or Shopee link directly?
      // Let's redirect to /shop for now if EN, or keep Coupang link as fallback.
      // Reverting to Coupang link for simplicity unless strictly forbidden.
      window.open('https://www.coupang.com/vp/products/8730201181', '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={`${styles.barWrapper} ${isExpanded ? styles.expanded : ''}`}>
        
        <button className={styles.expandToggle} onClick={toggleExpand}>
           {isExpanded ? '▼' : '▲'} {isExpanded ? 'Close Options' : 'Buy Now'}
        </button>

        <div className={styles.content}>
          <div className={styles.productInfo}>
             <span className={styles.productName}>{t.alminer.product.name}</span>
          </div>

          <div className={styles.selectionArea}>
             {/* Option Selector */}
             <div className={styles.selectWrapper}>
               <select className={styles.optionSelect} onChange={handleOptionSelect} defaultValue="-1">
                 <option value="-1" disabled>{t.alminer.shop.selectOption}</option>
                 {currentOptions.map((opt, idx) => (
                   <option key={idx} value={idx}>
                     {opt.label} - {formatPrice(opt.price)}{language === 'ko' ? '원' : ' KRW'}
                   </option>
                 ))}
               </select>
             </div>

             {/* Selected Items List */}
             {selectedItems.length > 0 && (
               <div className={styles.selectedItemsList}>
                 {selectedItems.map((item, idx) => (
                   <div key={idx} className={styles.selectedItem}>
                      <div className={styles.itemLabel}>
                        <span className={styles.itemName}>{item.label}</span>
                        <button className={styles.removeBtn} onClick={() => removeItem(idx)}>×</button>
                      </div>
                      <div className={styles.itemControls}>
                        <div className={styles.quantityMini}>
                          <button onClick={() => updateQuantity(idx, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(idx, 1)}>+</button>
                        </div>
                        <span className={styles.itemPrice}>{formatPrice(item.price * item.quantity)}{language === 'ko' ? '원' : 'W'}</span>
                      </div>
                   </div>
                 ))}
               </div>
             )}
          </div>
            
          <div className={styles.footerActions}>
            <div className={styles.totalPrice}>
              <span className={styles.totalLabel}>{t.alminer.shop.total} ({totalQuantity}{language === 'ko' ? '개' : 'ea'})</span>
              <span className={styles.totalValue}>₩{formatPrice(totalPrice)}</span>
            </div>

            <div className={styles.actions}>
              <Button href="#" variant="outline" size="md" className={styles.cartBtn}>
                {t.alminer.shop.addToCart}
              </Button>
              {/* Buy Button with OnClick Handler */}
              <button 
                className={`${styles.realBuyBtn} ${styles.buyBtn}`} // Use specific class to mimic Button style
                onClick={handleBuyNow}
              >
                {t.alminer.shop.buyNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
