'use client';

import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'none';
  fullWidth?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  fullWidth = false,
  id,
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`${styles.section} ${styles[background]} ${className}`}
    >
      <div className={fullWidth ? '' : 'container'}>
        {children}
      </div>
    </section>
  );
}
