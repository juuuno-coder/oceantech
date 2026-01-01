'use client';

import React from 'react';
import styles from './AdminComponents.module.css';

interface Store {
  id: string;
  name: string;
  url: string;
  price: number;
  status: 'Active' | 'Low Stock' | 'Sold Out';
  lastUpdated: string;
}

const stores: Store[] = [
  {
    id: '1',
    name: 'Coupang (Official)',
    url: 'https://www.coupang.com/vp/products/8730201181',
    price: 21140,
    status: 'Active',
    lastUpdated: '2026-01-01 23:10'
  },
  {
    id: '2',
    name: 'A-bly (Premium)',
    url: 'https://m.a-bly.com/goods/45571661',
    price: 22000,
    status: 'Active',
    lastUpdated: '2026-01-01 22:50'
  },
  {
    id: '3',
    name: 'Naver Smart Store',
    url: 'https://smartstore.naver.com/oceantech',
    price: 21500,
    status: 'Active',
    lastUpdated: '2026-01-01 12:00'
  },
  {
    id: '4',
    name: 'Gmarket',
    url: 'https://browse.gmarket.co.kr/search?keyword=알마이너',
    price: 23500,
    status: 'Low Stock',
    lastUpdated: '2026-01-01 15:30'
  }
];

export default function StoreStatus() {
  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>Marketplace Store Status</h2>
      <p className={styles.desc}>현재 입점된 사이트들의 판매 현황과 가격을 실시간으로 모니터링합니다.</p>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Status</th>
              <th>Price (KRW)</th>
              <th>Last Updated</th>
              <th>Quick Link</th>
            </tr>
          </thead>
          <tbody>
            {[...stores].sort((a, b) => a.price - b.price).map((store) => (
              <tr key={store.id}>
                <td><strong>{store.name}</strong></td>
                <td>
                  <span className={`${styles.badge} ${styles[store.status.toLowerCase().replace(' ', '')]}`}>
                    {store.status}
                  </span>
                </td>
                <td>{store.price.toLocaleString()}원</td>
                <td>{store.lastUpdated}</td>
                <td>
                  <a 
                    href={store.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkBtn}
                  >
                    방문하기
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={styles.summaryBox}>
        <div className={styles.summaryItem}>
          <label>최저가 플랫폼</label>
          <span>{stores.reduce((prev, curr) => prev.price < curr.price ? prev : curr).name}</span>
        </div>
        <div className={styles.summaryItem}>
          <label>평균 판매가</label>
          <span>{(stores.reduce((acc, curr) => acc + curr.price, 0) / stores.length).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
