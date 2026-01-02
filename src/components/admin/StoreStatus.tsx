'use client';

import React from 'react';
import styles from './AdminComponents.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface Store {
  id: string;
  name: string;
  nameKO: string;
  url: string;
  price: number;
  status: 'Active' | 'Low Stock' | 'Sold Out';
  lastUpdated: string;
}

const stores: Store[] = [
  {
    id: '1',
    name: 'Coupang (Official)',
    nameKO: '쿠팡 (본사공식)',
    url: 'https://www.coupang.com/vp/products/8730201181',
    price: 21140,
    status: 'Active',
    lastUpdated: '2026-01-01 23:10'
  },
  {
    id: '2',
    name: 'A-bly (Premium)',
    nameKO: '에이블리 (프리미엄)',
    url: 'https://m.a-bly.com/goods/45571661',
    price: 22000,
    status: 'Active',
    lastUpdated: '2026-01-01 22:50'
  },
  {
    id: '3',
    name: 'Naver Smart Store',
    nameKO: '네이버 스마트스토어',
    url: 'https://smartstore.naver.com/oceantech',
    price: 21500,
    status: 'Active',
    lastUpdated: '2026-01-01 12:00'
  },
  {
    id: '4',
    name: 'Gmarket',
    nameKO: '지마켓',
    url: 'https://browse.gmarket.co.kr/search?keyword=알마이너',
    price: 23500,
    status: 'Low Stock',
    lastUpdated: '2026-01-01 15:30'
  }
];

export default function StoreStatus() {
  const { language } = useLanguage();

  const getStatusText = (status: string) => {
    if (language !== 'ko') return status;
    switch (status) {
      case 'Active': return '판매중';
      case 'Low Stock': return '재고부족';
      case 'Sold Out': return '품절';
      default: return status;
    }
  };
  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>{language === 'ko' ? '입점 스토어 현황' : 'Marketplace Store Status'}</h2>
      <p className={styles.desc}>
        {language === 'ko' 
          ? '현재 입점된 사이트들의 판매 현황과 가격을 실시간으로 모니터링합니다.' 
          : 'Real-time monitoring of sales status and prices across marketplaces.'}
      </p>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{language === 'ko' ? '판매처 명' : 'Store Name'}</th>
              <th>{language === 'ko' ? '상태' : 'Status'}</th>
              <th>{language === 'ko' ? '판매가 (KRW)' : 'Price (KRW)'}</th>
              <th>{language === 'ko' ? '최근 업데이트' : 'Last Updated'}</th>
              <th>{language === 'ko' ? '바로가기' : 'Quick Link'}</th>
            </tr>
          </thead>
          <tbody>
            {[...stores].sort((a, b) => a.price - b.price).map((store) => (
              <tr key={store.id}>
                <td><strong>{language === 'ko' ? store.nameKO : store.name}</strong></td>
                <td>
                  <span className={`${styles.badge} ${styles[store.status.toLowerCase().replace(' ', '')]}`}>
                    {getStatusText(store.status)}
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
          <label>{language === 'ko' ? '최저가 플랫폼' : 'Lowest Price Platform'}</label>
          <span>
            {(() => {
              const lowest = stores.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
              return language === 'ko' ? lowest.nameKO : lowest.name;
            })()}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <label>{language === 'ko' ? '평균 판매가' : 'Average Price'}</label>
          <span>{(stores.reduce((acc, curr) => acc + curr.price, 0) / stores.length).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
