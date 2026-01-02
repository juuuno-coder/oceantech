'use client';

import React, { useEffect, useState } from 'react';
import styles from './AdminComponents.module.css';
import { useLanguage } from '@/context/LanguageContext';

// Product Data Type
interface Product {
  id: string;
  name: string;
  priceKRW: number;
}

// Basic Fee Assumptions: Platform 10% + Shipping/Buffer 15% = 25% Markup required
const MARKUP_SHOPEE = 1.35; // Safe margin for SEA
const MARKUP_AMAZON = 1.60; // Higher shipping/FBA costs for US

const CURRENCIES = [
  { code: 'USD', name: 'Amazon US', country: 'US (Amazon)', countryKO: '미국 (아마존)', markup: MARKUP_AMAZON },
  { code: 'SGD', name: 'Shopee SG', country: 'SG (Shopee)', countryKO: '싱가포르 (쇼피)', markup: MARKUP_SHOPEE },
  { code: 'MYR', name: 'Shopee MY', country: 'MY (Shopee)', countryKO: '말레이시아 (쇼피)', markup: MARKUP_SHOPEE },
  { code: 'IDR', name: 'Shopee ID', country: 'ID (Shopee)', countryKO: '인도네시아 (쇼피)', markup: MARKUP_SHOPEE },
  { code: 'THB', name: 'Shopee TH', country: 'TH (Shopee)', countryKO: '태국 (쇼피)', markup: MARKUP_SHOPEE },
  { code: 'VND', name: 'Shopee VN', country: 'VN (Shopee)', countryKO: '베트남 (쇼피)', markup: MARKUP_SHOPEE },
  { code: 'PHP', name: 'Shopee PH', country: 'PH (Shopee)', countryKO: '필리핀 (쇼피)', markup: MARKUP_SHOPEE },
];

const INITIAL_PRODUCTS: Product[] = [
  { id: 'rminu-1kg', name: 'R-minu Hard Wax (1kg)', nameKO: '알마이너 하드 왁스 (1kg)', priceKRW: 21140 },
  { id: 'rminu-500g', name: 'R-minu Hard Wax (500g)', nameKO: '알마이너 하드 왁스 (500g)', priceKRW: 14450 },
  { id: 'rminu-400g', name: 'R-minu Hard Wax (400g)', nameKO: '알마이너 하드 왁스 (400g)', priceKRW: 14400 },
  { id: 'rminu-200g', name: 'R-minu Hard Wax (200g)', nameKO: '알마이너 하드 왁스 (200g)', priceKRW: 9500 },
  { id: 'lacan-1kg', name: 'Lacan Hard Wax (Pro 1kg)', nameKO: '라캉 하드 왁스 (전문가용 1kg)', priceKRW: 88000 },
] as any[];

// Mock rates for "Yesterday" to show fluctuation
const YESTERDAY_RATES: Record<string, number> = {
  USD: 0.00075, SGD: 0.00101, MYR: 0.00355, IDR: 11.85, 
  THB: 0.0265, VND: 18.2, PHP: 0.0425
};

export default function PriceSimulator() {
  const { language } = useLanguage();
  const [rates, setRates] = useState<Record<string, number>>({});
  const [prevRates, setPrevRates] = useState<Record<string, number>>(YESTERDAY_RATES);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/KRW');
        const data = await res.json();
        setRates(data.rates);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const handlePriceChange = (id: string, newPrice: number) => {
    setProducts(products.map(p => p.id === id ? { ...p, priceKRW: newPrice } : p));
  };

  return (
    <div className={styles.componentContainer}>
      <h2 className={styles.title}>
        {language === 'ko' ? '글로벌 판매 전략 시뮬레이터 (아마존 & 쇼피)' : 'Global Strategy Pricing (Amazon & Shopee)'}
      </h2>
      <p className={styles.desc}>
        {language === 'ko' 
          ? '해외 플랫폼 수수료(Amazon ~15%, Shopee ~5~10%) 및 배송 완충비용을 고려한 권장 판매가입니다.'
          : 'Recommended selling price considering overseas platform fees and shipping buffer.'}
        <br/>
        <small>* 적용 마진율: Amazon (160%), Shopee (135%) 기준 자동 계산</small>
      </p>
      
      {loading ? <div>Loading Rates...</div> : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{language === 'ko' ? '제품 정보' : 'Product Information'}</th>
                <th style={{width: '150px'}}>{language === 'ko' ? '기준 판매가 (KRW)' : 'Base Price (KRW)'}</th>
                {CURRENCIES.map(c => (
                   <th key={c.code}>
                     <div className={styles.thCol}>
                       <span>{language === 'ko' ? c.countryKO : c.country} ({c.code})</span>
                       <span className={styles.rate}>x {rates[c.code]?.toFixed(4)}</span>
                     </div>
                   </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{language === 'ko' ? (p as any).nameKO : p.name}</td>
                  <td>
                    <input 
                      type="number" 
                      className={styles.priceInput}
                      value={p.priceKRW}
                      onChange={(e) => handlePriceChange(p.id, Number(e.target.value))}
                    />
                  </td>
                  {CURRENCIES.map(c => (
                    <td key={c.code} className={styles.currVal}>
                      <div className={styles.priceMain}>
                        {formatCurrency(p.priceKRW * (rates[c.code] || 0) * c.markup, c.code)}
                      </div>
                      
                      {/* Fluctuation Indicator */}
                      {rates[c.code] && (
                        <div className={styles.priceDiff}>
                          {(() => {
                            const current = p.priceKRW * rates[c.code] * c.markup;
                            const prev = p.priceKRW * (prevRates[c.code] || rates[c.code]) * c.markup;
                            const diff = current - prev;
                            const isPositive = diff >= 0;
                            return (
                              <span style={{ color: isPositive ? '#166534' : '#991b1b', fontSize: '0.75rem' }}>
                                {isPositive ? '▲' : '▼'} {formatCurrency(Math.abs(diff), c.code)}
                              </span>
                            );
                          })()}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
