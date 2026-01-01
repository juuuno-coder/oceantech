'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (id.length < 4) {
      setError('아이디는 최소 4자 이상이어야 합니다.');
      return;
    }
    if (pw.length < 4) {
      setError('비밀번호는 최소 4자 이상이어야 합니다.');
      return;
    }

    setLoading(true);

    const success = await login(id, pw);
    
    if (success) {
      if (id === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>로그인하여 계속하세요</p>
        
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="ID" 
            className={styles.input}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            type="password" 
            placeholder="Password" 
            className={styles.input}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}
        
        <button type="submit" className={styles.loginBtn} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className={styles.hint}>
          Hint: admin / 1234
        </div>
      </form>
    </div>
  );
}
