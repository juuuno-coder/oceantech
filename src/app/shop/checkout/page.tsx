'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import styles from './checkout.module.css';
import Button from '@/components/ui/Button';

function CheckoutContent() {
  const { t } = useLanguage();
  // In a real app, we would parse query params to get items: ?items=[{id:...,qty:...}]
  // For this visual demo, we'll assume a standard pack is being ordered or just show a static placeholder order.
  // Or better, let's just make a static "Sample Order" if no params are present, 
  // but since we are linking effectively from a 'Buy Now' button that might not pass params yet,
  // let's show a "Alminer Hard Wax Package" as default item.
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.checkout.title}</h1>

      <div className={styles.grid}>
        {/* Left Col: Order Form */}
        <div className={styles.formSection}>
          <div className={styles.sectionBlock}>
            <h2>{t.checkout.shippingInfo}</h2>
            <div className={styles.formGroup}>
              <label>{t.checkout.labels.recipient}</label>
              <input type="text" placeholder="" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>{t.checkout.labels.phone}</label>
              <input type="tel" placeholder="010-0000-0000" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>{t.checkout.labels.address}</label>
              <div className={styles.addressGroup}>
                <input type="text" placeholder="Postal Code" className={styles.inputShort} />
                <button className={styles.searchBtn}>Find</button>
              </div>
              <input type="text" placeholder="Address Block 1" className={styles.input} style={{ marginTop: '10px' }} />
              <input type="text" placeholder="Detail Address" className={styles.input} style={{ marginTop: '10px' }} />
            </div>
            <div className={styles.formGroup}>
              <label>{t.checkout.labels.memo}</label>
              <input type="text" placeholder="Ex: Leave at front door" className={styles.input} />
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <h2>{t.checkout.paymentInfo}</h2>
            <div className={styles.paymentMethods}>
              <div className={`${styles.payMethod} ${styles.active}`}>Credit Card</div>
              <div className={styles.payMethod}>Bank Transfer</div>
              <div className={styles.payMethod}>Naver Pay</div>
            </div>
          </div>
        </div>

        {/* Right Col: Order Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h2>{t.checkout.orderSummary}</h2>
            
            <div className={styles.itemList}>
              <div className={styles.item}>
                <div className={styles.itemImg}></div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>Alminer Hard Wax (200g)</div>
                  <div className={styles.itemMeta}>1 ea</div>
                </div>
                <div className={styles.itemPrice}>9,500원</div>
              </div>
            </div>

            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span className={styles.totalPrice}>12,500원</span>
            </div>
            <div className={styles.shippingRow}>
              <span>Shipping</span>
              <span>3,000원</span>
            </div>
            
            <button className={styles.checkoutBtn}>{t.checkout.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
