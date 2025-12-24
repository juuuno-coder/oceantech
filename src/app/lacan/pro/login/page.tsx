'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './login.module.css';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ProLoginPage() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.logoArea}>
            <span className={styles.badge}>AUTHORIZED PERSONNEL ONLY</span>
            <h2>{t.pro.login.title}</h2>
            <p>{t.pro.login.desc}</p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>{t.pro.login.idLabel}</label>
              <input type="text" placeholder="000-00-00000" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label>{t.pro.login.pwLabel}</label>
              <input type="password" className={styles.input} />
            </div>
            <Button variant="lacan" size="lg" className={styles.loginBtn}>
              {t.pro.login.btn}
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
