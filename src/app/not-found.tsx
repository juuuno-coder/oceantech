'use client';

import Link from 'next/link';
import styles from './404.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>우리가 길을 잃었나요?</h2>
        <p className={styles.desc}>
          요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인하시거나 브랜드 홈으로 돌아가주세요.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>홈으로 돌아가기</Link>
          <Link href="/shop" className={styles.outlineBtn}>전체 상품 보기</Link>
        </div>
      </div>
    </div>
  );
}
