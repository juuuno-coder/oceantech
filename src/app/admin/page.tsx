'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';
import { useState } from 'react';
import PriceSimulator from '@/components/admin/PriceSimulator';
import OrderManager from '@/components/admin/OrderManager';
import AdminSettings from '@/components/admin/AdminSettings';
import BannerManager from '@/components/admin/BannerManager';
import StoreStatus from '@/components/admin/StoreStatus';

export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Protect Route
  useEffect(() => {
    if (!isLoading) {
      if (!user || user.role !== 'admin') {
        router.push('/login');
      }
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role !== 'admin') {
     return <div className="loading">Loading Admin Panel...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>ADMIN</div>
        <nav className={styles.nav}>
          <div 
            className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'pricing' ? styles.active : ''}`}
            onClick={() => setActiveTab('pricing')}
          >
            Global Pricing
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'banners' ? styles.active : ''}`}
            onClick={() => setActiveTab('banners')}
          >
            Banner Manager
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'stores' ? styles.active : ''}`}
            onClick={() => setActiveTab('stores')}
          >
            Store Status
          </div>
          <div 
            className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </div>
        </nav>
      </div>

      <div className={styles.main}>
        <header className={styles.header}>
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className={styles.profile}>{user.name}</div>
        </header>

        <div className={styles.contentArea}>
          {activeTab === 'dashboard' && (
            <>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>Total Orders</h3>
                  <div className={styles.value}>1,024</div>
                  <div className={styles.trend}>+12% from last month</div>
                </div>
                <div className={styles.statCard}>
                  <h3>Revenue</h3>
                  <div className={styles.value}>₩84,320,000</div>
                  <div className={styles.trend}>+5% from last month</div>
                </div>
                <div className={styles.statCard}>
                  <h3>Pending Shipments</h3>
                  <div className={styles.value}>42</div>
                  <div className={styles.trend} style={{color: 'orange'}}>Action Needed</div>
                </div>
              </div>

              <div className={styles.recentOrders}>
                <h2>Recent Activity</h2>
                <div className={styles.alertBox}>
                  <strong>Ready for Portone Payments</strong>
                  <p>Configure API keys in Settings to enable real-time order tracking.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'orders' && <OrderManager />}
          {activeTab === 'pricing' && <PriceSimulator />}
          {activeTab === 'banners' && <BannerManager />}
          {activeTab === 'stores' && <StoreStatus />}
          {activeTab === 'settings' && <AdminSettings />}
        </div>
      </div>
    </div>
  );
}
