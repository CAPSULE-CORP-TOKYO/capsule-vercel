'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import { useScrollReveal, useSmoothScroll } from '@/hooks/useScrollEffects';

const navItems = [
  { href: '#features', ja: 'サポート内容', en: 'Features' },
  { href: '#how', ja: 'ご利用の流れ', en: 'How it works' },
  { href: '#pricing', ja: '料金', en: 'Pricing' },
  { href: '#faq', ja: 'よくある質問', en: 'FAQ' },
];

export default function CloudCTOPage() {
  const { t } = useLanguage();
  useScrollReveal();
  useSmoothScroll();

  return (
    <>
      <Header navItems={navItems} logoHref="/" />

      {/* Hero */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <Link href="/" className="back-link">{t('← CAPSULE トップへ', '← Back to CAPSULE')}</Link>
          <h1 className="svc-hero-title">{t('中小企業に、IT部門を。', 'An IT department for your business.')}</h1>
          <p className="svc-hero-desc">
            {t(
              'IT戦略の策定、ツール選定、セキュリティ、日々の運用まで。専任のCTOを雇わなくても、必要なIT機能がすべて手に入ります。',
              'From IT strategy and tool selection to security and daily operations. Get everything you need from an IT department — without hiring a full-time CTO.'
            )}
          </p>
          <div className="svc-hero-cta">
            <a href="mailto:support@its-capsule.com" className="btn-primary">{t('無料相談する', 'Get started')}</a>
            <span className="svc-hero-note">{t('まずは30分の無料ヒアリングから', 'Start with a free 30-minute consultation')}</span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="svc-values">
        <div className="svc-values-inner">
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </span>
            <h3>{t('採用コスト不要', 'No hiring costs')}</h3>
            <p>{t('CTO人材の採用・育成コストをかけずに、即日からプロのIT支援を受けられます。', 'Get professional IT support from day one — without the cost of hiring and training a CTO.')}</p>
          </div>
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M6 20V4M18 20v-6"/></svg>
            </span>
            <h3>{t('事業フェーズに合わせて', 'Scales with you')}</h3>
            <p>{t('スタートアップから成長期まで、事業の規模やフェーズに合わせてサポート内容を柔軟に調整します。', 'From startup to growth phase — we flexibly adjust our support to match your business size and stage.')}</p>
          </div>
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z"/><path d="M7.5 4.21l4.5 2.6 4.5-2.6M7.5 19.79V14.6L3 12M21 12l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05"/></svg>
            </span>
            <h3>{t('ワンストップ対応', 'One-stop solution')}</h3>
            <p>{t('戦略から導入、運用、トラブル対応まで。IT周りのすべてを一つの窓口で完結できます。', 'Strategy, implementation, operations, and troubleshooting — all through a single point of contact.')}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section svc-features" id="features">
        <div className="section-inner">
          <p className="section-label reveal">{t('サポート内容', 'What we cover')}</p>
          <h2 className="section-title reveal">{t('IT担当者がいなくても、安心。', "No in-house IT? No problem.")}</h2>

          <div className="svc-features-grid">
            <div className="svc-feature reveal">
              <h3>{t('IT戦略・ロードマップ策定', 'IT Strategy & Roadmap')}</h3>
              <p>{t('事業計画に合わせたIT戦略を立案。投資の優先順位やロードマップを一緒に設計します。', 'We design an IT strategy aligned with your business plan, setting priorities and building a roadmap together.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('SaaS・ツール選定&導入', 'SaaS & Tool Selection')}</h3>
              <p>{t('業務に最適なSaaSやツールを選定し、導入から社内定着までをサポートします。', 'We select the best SaaS and tools for your workflow, supporting you from implementation to team adoption.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('セキュリティ対策', 'Security Management')}</h3>
              <p>{t('情報セキュリティポリシーの策定、アクセス管理、インシデント対応まで。御社の情報資産を守ります。', 'From security policy creation to access management and incident response — we protect your digital assets.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('クラウド環境の構築・管理', 'Cloud Infrastructure')}</h3>
              <p>{t('AWS、Google Cloudなどのクラウド環境の設計・構築・運用を代行します。', 'We design, build, and manage your cloud infrastructure on AWS, Google Cloud, and more.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('ベンダーマネジメント', 'Vendor Management')}</h3>
              <p>{t('外部の開発会社やSaaSベンダーとの交渉・管理を代行。技術的な目利きとしてサポートします。', 'We handle negotiations and management with dev agencies and SaaS vendors — acting as your technical advisor.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('ITヘルプデスク', 'IT Help Desk')}</h3>
              <p>{t('「このツール使い方わからない」「PCが動かない」——日常のIT困りごとも気軽に相談できます。', "\"How do I use this tool?\" \"My PC won't start.\" — We're here for everyday IT questions too.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section svc-how" id="how">
        <div className="section-inner">
          <p className="section-label reveal">{t('ご利用の流れ', 'How it works')}</p>
          <h2 className="section-title reveal">{t('始め方は、とてもシンプル。', 'Getting started is simple.')}</h2>

          <div className="svc-steps">
            <div className="svc-step reveal">
              <span className="svc-step-num">01</span>
              <h3>{t('無料ヒアリング', 'Free Consultation')}</h3>
              <p>{t('現在のIT環境、課題、ご要望をお伺いし、最適なサポートプランをご提案します。', 'We assess your current IT environment, challenges, and needs to propose the ideal support plan.')}</p>
            </div>
            <div className="svc-step reveal">
              <span className="svc-step-num">02</span>
              <h3>{t('IT環境の棚卸し', 'IT Audit & Setup')}</h3>
              <p>{t('既存のツール・システム・セキュリティ状況を整理し、改善計画を策定。優先度の高いものから着手します。', 'We audit your existing tools, systems, and security, create an improvement plan, and start with the highest priorities.')}</p>
            </div>
            <div className="svc-step reveal">
              <span className="svc-step-num">03</span>
              <h3>{t('継続サポート開始', 'Ongoing Support')}</h3>
              <p>{t('定期ミーティングとチャットサポートで、御社のIT課題を継続的に解決。必要に応じてプランを調整します。', 'Through regular meetings and chat support, we continuously solve your IT challenges — adjusting the plan as needed.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section svc-pricing" id="pricing">
        <div className="section-inner">
          <p className="section-label reveal">{t('料金プラン', 'Pricing')}</p>
          <h2 className="section-title reveal">{t('必要な分だけ、無駄なく。', 'Pay only for what you need.')}</h2>

          <div className="svc-pricing-grid">
            {/* Light */}
            <div className="svc-plan reveal">
              <div className="svc-plan-header">
                <span className="svc-plan-name">Light</span>
                <p className="svc-plan-desc">{t('まずはIT相談から始めたい方に', 'For those starting with IT consultation')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>50,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <ul className="svc-plan-features">
                <li>{t('月1回のオンラインミーティング', '1 online meeting per month')}</li>
                <li>{t('IT戦略アドバイス', 'IT strategy advice')}</li>
                <li>{t('ツール選定サポート', 'Tool selection support')}</li>
                <li>{t('メールサポート', 'Email support')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Cloud%20CTO%20Light%20プランについて" className="btn-secondary">{t('相談する', 'Get started')}</a>
            </div>

            {/* Standard */}
            <div className="svc-plan svc-plan--featured reveal">
              <div className="svc-plan-badge">{t('おすすめ', 'Recommended')}</div>
              <div className="svc-plan-header">
                <span className="svc-plan-name">Standard</span>
                <p className="svc-plan-desc">{t('IT環境を本格的に整備したい方に', 'For those ready to build a solid IT foundation')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>100,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <ul className="svc-plan-features">
                <li>{t('月2回のオンラインミーティング', '2 online meetings per month')}</li>
                <li>{t('IT戦略・ロードマップ策定', 'IT strategy & roadmap')}</li>
                <li>{t('SaaS導入・設定代行', 'SaaS setup & implementation')}</li>
                <li>{t('セキュリティ基本対策', 'Basic security measures')}</li>
                <li>{t('ベンダーマネジメント', 'Vendor management')}</li>
                <li>{t('チャット & メールサポート', 'Chat & email support')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Cloud%20CTO%20Standard%20プランについて" className="btn-primary">{t('相談する', 'Get started')}</a>
            </div>

            {/* Premium */}
            <div className="svc-plan reveal">
              <div className="svc-plan-header">
                <span className="svc-plan-name">Premium</span>
                <p className="svc-plan-desc">{t('IT業務をまるごと任せたい方に', 'For those who want full IT outsourcing')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>200,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <ul className="svc-plan-features">
                <li>{t('週1回のオンラインミーティング', 'Weekly online meetings')}</li>
                <li>{t('IT戦略・ロードマップ策定', 'IT strategy & roadmap')}</li>
                <li>{t('SaaS導入・運用代行', 'SaaS implementation & management')}</li>
                <li>{t('セキュリティ対策・監視', 'Security measures & monitoring')}</li>
                <li>{t('クラウド環境の構築・管理', 'Cloud infrastructure management')}</li>
                <li>{t('ITヘルプデスク', 'IT help desk')}</li>
                <li>{t('優先サポート（Slack連携可）', 'Priority support (Slack available)')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Cloud%20CTO%20Premium%20プランについて" className="btn-secondary">{t('相談する', 'Get started')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section svc-faq" id="faq">
        <div className="section-inner">
          <p className="section-label reveal">{t('よくある質問', 'FAQ')}</p>
          <h2 className="section-title reveal">{t('ご質問にお答えします。', 'Questions answered.')}</h2>

          <div className="svc-faq-list">
            <details className="svc-faq-item reveal">
              <summary>{t('どんな規模の会社が対象ですか？', 'What size companies do you work with?')}</summary>
              <p>{t('社員数5〜100名程度の中小企業を中心にサポートしています。IT専任者がいない、または1人情シスの企業に特に最適です。', 'We primarily support small and medium businesses with 5-100 employees. Especially ideal for companies without dedicated IT staff or with a single IT person.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('社内にITの知識がなくても大丈夫ですか？', 'Do we need any IT knowledge in-house?')}</summary>
              <p>{t('まったく問題ありません。専門用語を使わず、わかりやすくご説明します。ITのことはすべてお任せいただけます。', 'Not at all. We explain everything in plain language, no jargon. You can leave all IT matters to us.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('既存のシステムやツールはそのまま使えますか？', 'Can we keep our existing systems and tools?')}</summary>
              <p>{t('はい、既存の環境をベースに最適化していきます。不要なコストがかかっているツールの見直しもご提案します。', 'Yes, we optimize based on your existing environment. We also suggest reviewing tools that may be costing you unnecessarily.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('契約期間の縛りはありますか？', 'Is there a minimum contract period?')}</summary>
              <p>{t('最低契約期間は3ヶ月です。その後は月単位で継続・解約が可能です。', 'The minimum contract period is 3 months. After that, you can continue or cancel on a monthly basis.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('Web制作サービスとの併用は可能ですか？', 'Can I use this with your Web Design service?')}</summary>
              <p>{t('はい、Cloud CTOプランをご契約いただいている場合、Web制作サービスを特別価格でご利用いただけます。', 'Yes, Cloud CTO plan subscribers can access our Web Design & Development service at a special rate.')}</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section svc-cta">
        <div className="section-inner">
          <div className="svc-cta-card reveal">
            <h2 className="svc-cta-title">{t('まずは、ITの「困った」を聞かせてください。', "Tell us about your IT challenges.")}</h2>
            <p className="svc-cta-text">{t('30分の無料ヒアリングで、御社に最適なプランをご提案します。', "In a free 30-minute consultation, we'll propose the ideal plan for your company.")}</p>
            <a href="mailto:support@its-capsule.com" className="btn-primary">{t('無料相談する', 'Get started')}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
