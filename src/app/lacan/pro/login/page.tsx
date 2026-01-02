'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './login.module.css';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProLoginPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, pw);
    
    if (result.success) {
      // Login success
      router.push('/lacan'); // Or a specific Pro dashboard
    } else {
      setError(result.error || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.logoArea}>
            <span className={styles.badge}>AUTHORIZED PERSONNEL ONLY</span>
            <h2>{t.pro.login.title}</h2>
            <p>{t.pro.login.desc}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input 
                type="email" 
                placeholder="email@example.com" 
                className={styles.input} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>{t.pro.login.pwLabel}</label>
              <input 
                type="password" 
                className={styles.input} 
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.errorMsg} style={{color: 'red', marginBottom: '10px'}}>{error}</p>}
            <Button variant="lacan" size="lg" className={styles.loginBtn} disabled={loading}>
              {loading ? 'Logging in...' : t.pro.login.btn}
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.registerLink}>
              {language === 'ko' ? '아직 회원이 아니신가요?' : 'Not a member yet?'} <br/>
              <Link href="/lacan/pro/register">{t.pro.login.register}</Link>
            </p>
            
            {/* International Notice */}
            {language !== 'ko' && (
              <div className={styles.intlNotice}>
                <p><strong>Note for Global Partners:</strong></p>
                <p>Pro Membership is currently for South Korea only.</p>
                <p>For international wholesale, please visit the <Link href="/business">Business Center</Link>.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
