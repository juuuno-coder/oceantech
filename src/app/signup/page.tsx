'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../login/login.module.css'; // Reuse login styles for consistency

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
    pwConfirm: '',
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.pw !== formData.pwConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    // Mock Signup
    alert('회원가입이 완료되었습니다! (데모)');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>라캉 & 알마이너의 회원이 되어주세요</p>
        
        <div className={styles.inputGroup}>
          <input 
            name="id" type="text" placeholder="아이디" required
            className={styles.input} onChange={handleChange}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            name="pw" type="password" placeholder="비밀번호" required
            className={styles.input} onChange={handleChange}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            name="pwConfirm" type="password" placeholder="비밀번호 확인" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            name="name" type="text" placeholder="이름" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            name="email" type="email" placeholder="이메일" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            name="phone" type="tel" placeholder="휴대전화번호" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}
        
        <button type="submit" className={styles.loginBtn}>
          Sign Up
        </button>

        <div className={styles.links}>
          <Link href="/login">이미 계정이 있으신가요? 로그인</Link>
        </div>
      </form>
    </div>
  );
}
