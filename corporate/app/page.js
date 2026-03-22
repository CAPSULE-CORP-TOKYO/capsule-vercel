'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCanvas from '@/components/HeroCanvas';
import { useLanguage } from '@/components/LanguageContext';
import { useScrollReveal, useSmoothScroll } from '@/hooks/useScrollEffects';

const navItems = [
  { href: '#services', ja: 'サービス', en: 'Services' },
  { href: '#about', ja: '私たちについて', en: 'About' },
  { href: '#contact', ja: 'お問い合わせ', en: 'Contact' },
];

export default function Home() {
  const { t } = useLanguage();
  useScrollReveal();
  useSmoothScroll();

  return (
    <>
      <Header navItems={navItems} />

      {/* Hero */}
      <section className="hero" id="hero">
        <HeroCanvas />
        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="hero-line">{t('デジタルの力で、', 'We shape ideas')}</span>
            <span className="hero-line">{t('ビジネスを前へ。', 'into digital reality.')}</span>
          </h1>
          <p className="hero-sub">
            {t(
              'AIを基盤に、戦略からデザイン、開発までを一貫して提供。従来の枠を超えたものづくりを。',
              'Built on AI, we deliver end-to-end — from strategy to design to development. Crafting beyond convention.'
            )}
          </p>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Services */}
      <section className="section services" id="services">
        <div className="section-inner">
          <p className="section-label reveal">{t('サービス', 'Services')}</p>
          <h2 className="section-title reveal">{t('提供サービス', 'What we do')}</h2>

          <div className="services-grid">
            <Link href="/service" className="service-card reveal">
              <div className="service-card-inner">
                <span className="service-number">01</span>
                <h3 className="service-name">Web Design &amp; Development</h3>
                <p className="service-desc">
                  {t(
                    '戦略設計からデザイン、開発、運用まで。ビジネスの成長を支えるWebサイトを、ワンストップで提供します。',
                    'From strategy to design, development, and operations. We deliver websites that drive business growth, end to end.'
                  )}
                </p>
                <span className="service-link">{t('詳しく見る', 'Learn more')}</span>
              </div>
              <div className="service-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </Link>

            <div className="service-card service-card--coming reveal">
              <div className="service-card-inner">
                <span className="service-number">02</span>
                <h3 className="service-name">AI Integration &amp; Consulting</h3>
                <p className="service-desc">
                  {t(
                    '最先端のAI技術を活用した業務効率化・プロダクト開発を支援。導入戦略の策定からPoC、実装までを伴走します。',
                    'We help businesses leverage cutting-edge AI for operational efficiency and product development — from strategy and PoC to full implementation.'
                  )}
                </p>
                <span className="service-badge">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="section-inner">
          <p className="section-label reveal">{t('私たちについて', 'About')}</p>
          <div className="about-content reveal">
            <h2 className="about-title">{t('シンプルに、本質を。', 'Simply essential.')}</h2>
            <div className="about-text">
              <p>
                {t(
                  'CAPSULEは、テクノロジーとデザインの交差点で、本当に必要なものだけを、美しく届けるデジタルスタジオです。',
                  'CAPSULE is a digital studio at the intersection of technology and design, delivering only what truly matters — beautifully.'
                )}
              </p>
              <p>
                {t(
                  '余分なものを削ぎ落とし、本質を際立たせる。それが私たちのものづくりの哲学です。',
                  'Strip away the excess, let the essence stand out. That is our philosophy of creation.'
                )}
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="company-info reveal">
            <h3 className="company-info-title">{t('会社概要', 'Company Overview')}</h3>
            <dl className="company-info-table">
              <div className="info-row">
                <dt>{t('会社名', 'Company Name')}</dt>
                <dd>株式会社CAPSULE</dd>
              </div>
              <div className="info-row">
                <dt>{t('代表取締役', 'Representative')}</dt>
                <dd>矢野 太一</dd>
              </div>
              <div className="info-row">
                <dt>{t('設立', 'Founded')}</dt>
                <dd>{t('2024年10月', 'October 2024')}</dd>
              </div>
              <div className="info-row">
                <dt>{t('資本金', 'Capital')}</dt>
                <dd>{t('2,000万円', '¥20,000,000')}</dd>
              </div>
              <div className="info-row">
                <dt>{t('所在地', 'Location')}</dt>
                <dd>{t('〒251-0025 神奈川県藤沢市鵠沼石上3-1-13-3A', '3-1-13-3A Kugenuma Ishigami, Fujisawa, Kanagawa, Japan')}</dd>
              </div>
              <div className="info-row">
                <dt>{t('事業内容', 'Business')}</dt>
                <dd>{t('Webデザイン・開発 / AIコンサルティング', 'Web Design & Development / AI Consulting')}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="section-inner">
          <p className="section-label reveal">{t('お問い合わせ', 'Contact')}</p>
          <div className="contact-content reveal">
            <h2 className="contact-title">{t('お気軽にご相談ください。', 'Get in touch.')}</h2>
            <p className="contact-text">
              {t(
                'プロジェクトのご依頼・ご質問など、まずはメールでお問い合わせください。',
                'For project inquiries or questions, feel free to reach out via email.'
              )}
            </p>
            <a href="mailto:support@its-capsule.com" className="contact-email">support@its-capsule.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
