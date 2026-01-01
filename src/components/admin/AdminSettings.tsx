'use client';

import React, { useState } from 'react';
import styles from './AdminComponents.module.css';

export default function AdminSettings() {
  const [portoneId, setPortoneId] = useState('imp802931****');
  const [apiKey, setApiKey] = useState('14920193****');
  const [shippingFee, setShippingFee] = useState(3000);

  const handleSave = () => {
    alert('Settings Saved! (Simulation)');
  };

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>System Settings</h2>

      <div className={styles.settingSection}>
        <h3>Payment Gateway (Portone)</h3>
        <p className={styles.sectionDesc}>Configure your Portone (I'mport) API keys for electronic payments.</p>
        
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
        <h3>Store Configurations</h3>
        <div className={styles.formGroup}>
          <label>Default Shipping Fee (KRW)</label>
          <input 
            type="number" 
            value={shippingFee} 
            onChange={(e) => setShippingFee(Number(e.target.value))} 
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveBtn} onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}
