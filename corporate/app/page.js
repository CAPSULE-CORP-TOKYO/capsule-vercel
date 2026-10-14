'use client';

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
            <span className="hero-line">{t('AIの力で、', 'Moving business')}</span>
            <span className="hero-line">{t('ビジネスを前へ。', 'forward with AI.')}</span>
          </h1>
          <p className="hero-sub">
            {t(
              'AIを基盤にしたプロダクトと伴走支援で、中小企業・個人事業主の次の一歩を後押しします。',
              'AI-native products and hands-on support that help small businesses and independent owners take their next step.'
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
            <a href="https://hojokinpocket.ai" target="_blank" rel="noopener noreferrer" className="service-card reveal">
              <div className="service-card-inner">
                <span className="service-number">01</span>
                <h3 className="service-name">{t('補助金ポケット', 'Hojokin Pocket')}</h3>
                <p className="service-desc">
                  {t(
                    '中小企業の補助金申請を、経営者とそのAIで進めるためのサービス『補助金ポケット』を開発・運営しています。',
                    'CAPSULE Inc. builds and operates Hojokin Pocket, an AI-native platform that helps Japanese small businesses find and apply for government subsidies.'
                  )}
                </p>
                <span className="service-link">{t('サービスサイトへ', 'Visit website')}</span>
              </div>
              <div className="service-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </a>

            <div className="service-card reveal">
              <div className="service-card-inner">
                <span className="service-number">02</span>
                <h3 className="service-name">AI Integration &amp; Consulting</h3>
                <p className="service-desc">
                  {t(
                    '最先端のAI技術を活用した業務効率化・プロダクト開発を支援。導入戦略の策定からPoC、実装までを伴走します。',
                    'We help businesses leverage cutting-edge AI for operational efficiency and product development — from strategy and PoC to full implementation.'
                  )}
                </p>
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

          {/* Founder */}
          <div className="founder reveal">
            <div className="founder-inner">
              <div className="founder-header">
                <div>
                  <h3 className="founder-name">{t('矢野 太一', 'Taichi Yano')}</h3>
                  <span className="founder-role">{t('代表取締役', 'Founder & CEO')}</span>
                </div>
              </div>
              <div className="founder-bio">
                <p>
                  {t(
                    '青山学院大学卒業後、スタートアップを共同創業し、事業売却を経験。その後、累計1,000万DL超のAIヘルスケアアプリを展開するテック企業にて、事業部長としてプロダクト戦略と事業成長を牽引。独立後はPM（プロダクトマネージャー）として複数のスタートアップで新規事業立ち上げやSaaS開発に従事。',
                    'After graduating from Aoyama Gakuin University, co-founded a startup and achieved a successful exit. Then led product strategy and business growth as Division Head at a tech company operating an AI healthcare app with over 10 million downloads. As an independent PM, launched new businesses and developed SaaS products across multiple startups.'
                  )}
                </p>
                <p>
                  {t(
                    'UI/UX設計から事業開発、AIの実務活用まで、プロダクトづくりの全工程を一気通貫で手がける。AIをものづくりの基盤に据えた新しい形のスタジオを構想し、2024年にEast Venturesの出資を受けCAPSULEを法人化。',
                    'Covers the full spectrum of product development — from UI/UX design and business development to practical AI implementation. Envisioning a new kind of studio with AI at its core, incorporated CAPSULE in 2024 with investment from East Ventures.'
                  )}
                </p>
              </div>
              <blockquote className="founder-quote">
                {t(
                  '「テクノロジーは、人の可能性を広げるためのツールだと思っています。リソースが限られる中小企業や個人事業主の方々に、AIとWebの専門性を届けることで、新しい挑戦が生まれる土壌をつくりたい。」',
                  '"I believe technology is a tool for expanding human potential. By bringing AI and web expertise to small businesses and solo entrepreneurs with limited resources, I want to create fertile ground for new challenges."'
                )}
              </blockquote>
            </div>
          </div>

          {/* Company Info */}
          <div className="company-info reveal">
            <h3 className="company-info-title">{t('会社概要', 'Company Overview')}</h3>
            <dl className="company-info-table">
              <div className="info-row">
                <dt>{t('会社名', 'Company Name')}</dt>
                <dd>{t('株式会社CAPSULE', 'CAPSULE Inc.')}</dd>
              </div>
              <div className="info-row">
                <dt>{t('代表取締役', 'Representative')}</dt>
                <dd>{t('矢野 太一', 'Taichi Yano')}</dd>
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
                <dd>{t('〒251-0025 神奈川県藤沢市鵠沼石上3-1-13-3A', '3-1-13-3A Kugenuma Ishigami, Fujisawa, Kanagawa 251-0025, Japan')}</dd>
              </div>
              <div className="info-row">
                <dt>{t('事業内容', 'Business')}</dt>
                <dd>{t('補助金申請支援サービス「補助金ポケット」の開発・運営 / AIコンサルティング', 'Development and operation of Hojokin Pocket, an AI-native subsidy application platform / AI Consulting')}</dd>
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
                'サービスに関するご質問やご相談は、メールでお問い合わせください。',
                'For questions about our services, feel free to reach out via email.'
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
