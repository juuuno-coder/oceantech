'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './business.module.css';
import Button from '@/components/ui/Button';

export default function BusinessPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className="container">
          <span className={styles.label}>BUSINESS RESOURCE CENTER</span>
          <h1>{t.business.subtitle}</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Download Section */}
          <section className={styles.section}>
            <h2>{t.business.download.title}</h2>
            <p className={styles.desc}>{t.business.download.desc}</p>
            
            <div className={styles.downloadGrid}>
              <div className={styles.downloadCard}>
                <div className={styles.fileIcon}>PDF</div>
                <div className={styles.fileInfo}>
                  <h3>{t.business.download.catalog}</h3>
                  <p>2025 OceanTech Product Catalog.pdf</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>

              <div className={styles.downloadCard}>
                <div className={styles.fileIcon}>ZIP</div>
                <div className={styles.fileInfo}>
                  <h3>{t.business.download.kit}</h3>
                  <p>Media_Kit_v2.0.zip</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>

              <div className={styles.downloadCard}>
                <div className={styles.fileIcon}>AI</div>
                <div className={styles.fileInfo}>
                  <h3>{t.business.download.bi}</h3>
                  <p>Brand_Logo_Assets.ai</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </div>
          </section>

          {/* Inquiry Form Placeholder */}
          <section className={styles.section}>
            <div className={styles.inquiryBox}>
              <h2>{t.business.inquiry.title}</h2>
              <p>{t.business.inquiry.desc}</p>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Company Name" className={styles.input} />
                  <input type="email" placeholder="Email Address" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <select className={styles.select}>
                    <option>Select Region</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                  <select className={styles.select}>
                    <option>Inquiry Type</option>
                    <option>Wholesale</option>
                    <option>Export / Distribution</option>
                    <option>OEM / ODM</option>
                  </select>
                </div>
                <textarea placeholder="Message" className={styles.textarea}></textarea>
                <Button variant="primary" size="lg" className={styles.submitBtn}>{t.business.inquiry.btn}</Button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
