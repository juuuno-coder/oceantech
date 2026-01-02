'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions
import styles from '../../../login/login.module.css'; // Reuse common login styles

export default function ProRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: '', // Will serve as email for now or separate
    email: '',
    pw: '',
    pwConfirm: '',
    name: '',
    phone: '',
    businessNumber: '', // Business Registration Number
    salonName: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatBusinessNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '').replace(/^(\d{3})(\d{2})(\d{5})$/, '$1-$2-$3');
  };

  const handleBusinessNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length <= 10) {
       setFormData(prev => ({ ...prev, businessNumber: val }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.pw !== formData.pwConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (formData.businessNumber.length < 10) {
      setError('올바른 사업자등록번호 10자리를 입력해주세요.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Create User in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.pw);
      const user = userCredential.user;
      
      // 2. Update Basic Profile (Display Name)
      await updateProfile(user, {
        displayName: formData.name
      });

      // 3. Save Extended Data (Business Number, etc) to Cloud Firestore
      // We use the user's UID as the document key for easy retrieval
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        businessNumber: formData.businessNumber, // The custom field
        salonName: formData.salonName,
        role: 'pro_pending', // Initially pending approval
        createdAt: serverTimestamp(),
        provider: 'email',
        isApproved: false // Admin needs to approve
      });

      alert('전문가(PRO) 회원가입이 신청되었습니다.\n관리자 승인 후 정식 이용이 가능합니다.');
      router.push('/lacan/pro/login'); // Redirect to Pro Login
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('이미 사용 중인 이메일입니다.');
      } else if (err.code === 'auth/weak-password') {
        setError('비밀번호는 6자리 이상이어야 합니다.');
      } else {
        setError('가입 실패: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formCard} style={{maxWidth:'500px'}}>
        <Link href="/" className={styles.homeLink}>← Home</Link>
        <h1 className={styles.title}>PRO Membership</h1>
        <p className={styles.subtitle}>라캉 프로페셔널 멤버십 신청 (사업자 전용)</p>
        
        <div className={styles.sectionHeader}>기본 정보</div>

        <div className={styles.inputGroup}>
          <input 
            name="email" type="email" placeholder="이메일 (아이디로 사용)" required
            className={styles.input} onChange={handleChange}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            name="pw" type="password" placeholder="비밀번호 (6자리 이상)" required
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
            name="name" type="text" placeholder="대표자명" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            name="phone" type="tel" placeholder="연락처 (- 없이 입력)" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.sectionHeader} style={{marginTop:'20px'}}>사업자 정보</div>

        <div className={styles.inputGroup}>
          <input 
            name="salonName" type="text" placeholder="상호명 (살롱 이름)" required
            className={styles.input} onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input 
            name="businessNumber" type="text" placeholder="사업자등록번호 (숫자만 입력)" required
            className={styles.input} 
            value={formData.businessNumber}
            onChange={handleBusinessNumberChange}
            maxLength={10}
          />
          <p style={{fontSize:'0.8rem', color:'#666', marginTop:'5px'}}>
             * 사업자 번호: {formData.businessNumber.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')}
          </p>
        </div>

        {error && <div className={styles.error}>{error}</div>}
        
        <button type="submit" className={styles.loginBtn} disabled={loading}>
          {loading ? '처리중...' : '전문가 회원 가입 신청'}
        </button>

        <div className={styles.links}>
          <Link href="/lacan/pro/login">이미 계정이 있으신가요? 로그인</Link>
        </div>
      </form>
    </div>
  );
}
