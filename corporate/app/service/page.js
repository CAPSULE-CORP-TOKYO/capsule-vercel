'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import { useScrollReveal, useSmoothScroll } from '@/hooks/useScrollEffects';

const navItems = [
  { href: '#features', ja: '特徴', en: 'Features' },
  { href: '#how', ja: 'ご利用の流れ', en: 'How it works' },
  { href: '#pricing', ja: '料金', en: 'Pricing' },
  { href: '#faq', ja: 'よくある質問', en: 'FAQ' },
];

export default function ServicePage() {
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
          <h1 className="svc-hero-title">{t('プロのWebサイトを、月額制で。', 'A professional website, on a monthly plan.')}</h1>
          <p className="svc-hero-desc">
            {t(
              '制作費0円。デザイン、開発、ホスティング、保守運用まですべてコミコミ。あなたはビジネスに集中するだけ。',
              'Zero upfront cost. Design, development, hosting, and maintenance — all included. You focus on your business.'
            )}
          </p>
          <div className="svc-hero-cta">
            <a href="mailto:support@its-capsule.com" className="btn-primary">{t('無料相談する', 'Get started')}</a>
            <span className="svc-hero-note">{t('初期費用は一切かかりません', 'No upfront costs, ever')}</span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="svc-values">
        <div className="svc-values-inner">
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
            </span>
            <h3>{t('制作費 0円', 'Zero setup cost')}</h3>
            <p>{t('初期費用なし。月額料金だけでプロ品質のWebサイトが手に入ります。', 'No upfront fees. Get a professional website with just a monthly payment.')}</p>
          </div>
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </span>
            <h3>{t('AI活用で高速納品', 'AI-powered, fast delivery')}</h3>
            <p>{t('AIを活用した制作プロセスで、高品質なサイトをスピーディにお届けします。', 'Our AI-powered workflow delivers high-quality sites at exceptional speed.')}</p>
          </div>
          <div className="svc-value reveal">
            <span className="svc-value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>
            <h3>{t('運用・保守込み', 'Maintenance included')}</h3>
            <p>{t('公開後の更新、セキュリティ対応、サーバー管理まですべてお任せください。', 'Updates, security, server management — all taken care of after launch.')}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section svc-features" id="features">
        <div className="section-inner">
          <p className="section-label reveal">{t('すべて含まれています', 'Everything included')}</p>
          <h2 className="section-title reveal">{t('Webサイトに必要なもの、全部入り。', 'Everything your website needs. All in one.')}</h2>

          <div className="svc-features-grid">
            <div className="svc-feature reveal">
              <h3>{t('オリジナルデザイン', 'Custom Design')}</h3>
              <p>{t('テンプレートではない、あなたのブランドに最適化されたデザインを制作します。', 'Not a template — we create designs optimized for your brand.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('レスポンシブ対応', 'Responsive')}</h3>
              <p>{t('スマートフォン、タブレット、PC。すべてのデバイスで美しく表示されます。', 'Looks beautiful on every device — mobile, tablet, and desktop.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('高速パフォーマンス', 'Lightning Fast')}</h3>
              <p>{t('最新技術による高速表示で、ユーザー体験とSEOの両方を最大化します。', 'Built with modern tech for fast loading, maximizing UX and SEO.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('SEO対策', 'SEO Ready')}</h3>
              <p>{t('検索エンジンに最適化された構造で、見つけてもらえるサイトを構築します。', 'Search engine optimized structure so your site gets found.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('ホスティング', 'Hosting')}</h3>
              <p>{t('安定したサーバー環境を提供。SSL証明書、CDN配信も標準装備です。', 'Reliable hosting with SSL and CDN included as standard.')}</p>
            </div>
            <div className="svc-feature reveal">
              <h3>{t('セキュリティ対策', 'Security')}</h3>
              <p>{t('SSL証明書の管理、定期的なアップデート、脆弱性対応まで安心してお任せください。', 'SSL management, regular updates, and vulnerability protection — all handled for you.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section svc-testimonials">
        <div className="section-inner">
          <p className="section-label reveal">{t('ご利用者の声', 'Testimonials')}</p>
          <h2 className="section-title reveal">{t('導入企業の声をご紹介します。', 'What our clients say.')}</h2>

          <div className="svc-testimonials-grid">
            <div className="svc-testimonial reveal">
              <p className="svc-testimonial-text">
                {t(
                  '「他社では初期費用だけで80万円の見積もりでした。AIを活用した制作プロセスのおかげか、月額制で初期費用がかからないのに、テンプレートではないオリジナルデザインで仕上げてもらえて驚きました。」',
                  '"Other companies quoted us ¥800,000 just for setup. Thanks to their AI-driven workflow, we got an original design — not a template — with zero upfront cost on a monthly plan."'
                )}
              </p>
              <div className="svc-testimonial-author">
                <span className="svc-testimonial-role">{t('美容サロン経営', 'Beauty Salon Owner')}</span>
                <span className="svc-testimonial-company">{t('個人事業主', 'Sole Proprietor')}</span>
              </div>
            </div>

            <div className="svc-testimonial reveal">
              <p className="svc-testimonial-text">
                {t(
                  '「相談から2週間でサイトが公開できました。以前の制作会社では3ヶ月かかっていたので、AIでここまで変わるのかと正直びっくりです。対応も丁寧でした。」',
                  '"Our site went live just 2 weeks after our first consultation. Our previous agency took 3 months — we were honestly amazed at how much AI changes the game. Great communication too."'
                )}
              </p>
              <div className="svc-testimonial-author">
                <span className="svc-testimonial-role">{t('不動産業', 'Real Estate')}</span>
                <span className="svc-testimonial-company">{t('従業員6名', '6 employees')}</span>
              </div>
            </div>

            <div className="svc-testimonial reveal">
              <p className="svc-testimonial-text">
                {t(
                  '「以前の制作会社ではちょっとした修正でも数万円かかっていて、更新を諦めていました。CAPSULEさんはリニューアルのデモをすぐに作って見せてくれたので安心してお願いでき、今は更新も月額内で対応してもらえるので、サイトを活用できるようになりました。」',
                  '"Our previous agency charged tens of thousands of yen for even minor updates, so we\'d given up on keeping our site current. CAPSULE quickly built a redesign demo for us, which gave us confidence. Now all updates are included in the monthly fee, and we\'re finally making the most of our website."'
                )}
              </p>
              <div className="svc-testimonial-author">
                <span className="svc-testimonial-role">{t('整骨院経営', 'Chiropractic Clinic')}</span>
                <span className="svc-testimonial-company">{t('従業員3名', '3 employees')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section svc-how" id="how">
        <div className="section-inner">
          <p className="section-label reveal">{t('ご利用の流れ', 'How it works')}</p>
          <h2 className="section-title reveal">{t('3ステップで、あなたのWebサイトが完成。', 'Your website, ready in 3 steps.')}</h2>

          <div className="svc-steps">
            <div className="svc-step reveal">
              <span className="svc-step-num">01</span>
              <h3>{t('ヒアリング', 'Consultation')}</h3>
              <p>{t('ビジネスの内容、ターゲット、ご要望をお伺いし、最適なサイト設計をご提案します。', 'We learn about your business, audience, and goals to propose the ideal site design.')}</p>
            </div>
            <div className="svc-step reveal">
              <span className="svc-step-num">02</span>
              <h3>{t('デザイン & 開発', 'Design & Build')}</h3>
              <p>{t('AIを活用した制作プロセスで、高品質なサイトをスピーディに構築。完成までフィードバックを反映します。', "We build your site quickly with our AI-powered workflow, incorporating your feedback until it's perfect.")}</p>
            </div>
            <div className="svc-step reveal">
              <span className="svc-step-num">03</span>
              <h3>{t('公開 & 運用開始', 'Launch & Operate')}</h3>
              <p>{t('サイト公開後も、保守・更新・改善を継続的にサポート。あなたはビジネスに集中するだけ。', 'After launch, we continuously support maintenance, updates, and improvements. You just focus on your business.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section svc-pricing" id="pricing">
        <div className="section-inner">
          <p className="section-label reveal">{t('料金プラン', 'Pricing')}</p>
          <h2 className="section-title reveal">{t('シンプルな月額制。隠れた費用はありません。', 'Simple monthly pricing. No hidden fees.')}</h2>

          <div className="svc-pricing-grid">
            {/* Light */}
            <div className="svc-plan reveal">
              <div className="svc-plan-header">
                <span className="svc-plan-name">Light</span>
                <p className="svc-plan-desc">{t('まずはWebサイトを持ちたい方に', 'For those who want to get started')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>20,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <div className="svc-plan-setup">{t('制作費 ¥0', 'Setup fee: ¥0')}</div>
              <ul className="svc-plan-features">
                <li>{t('オリジナルデザイン（5ページまで）', 'Custom design (up to 5 pages)')}</li>
                <li>{t('レスポンシブ対応', 'Responsive design')}</li>
                <li>{t('ホスティング & SSL', 'Hosting & SSL')}</li>
                <li>{t('メールサポート', 'Email support')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Light%20プランについて" className="btn-secondary">{t('相談する', 'Get started')}</a>
            </div>

            {/* Standard */}
            <div className="svc-plan svc-plan--featured reveal">
              <div className="svc-plan-badge">{t('おすすめ', 'Recommended')}</div>
              <div className="svc-plan-header">
                <span className="svc-plan-name">Standard</span>
                <p className="svc-plan-desc">{t('ビジネスを本格的に成長させたい方に', 'For growing your business seriously')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>50,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <div className="svc-plan-setup">{t('制作費 ¥0', 'Setup fee: ¥0')}</div>
              <ul className="svc-plan-features">
                <li>{t('オリジナルデザイン（10ページまで）', 'Custom design (up to 10 pages)')}</li>
                <li>{t('レスポンシブ対応', 'Responsive design')}</li>
                <li>{t('ホスティング & SSL & CDN', 'Hosting, SSL & CDN')}</li>
                <li>{t('SEO基本設定', 'Basic SEO setup')}</li>
                <li>{t('アクセス解析レポート', 'Analytics reporting')}</li>
                <li>{t('チャット & メールサポート', 'Chat & email support')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Standard%20プランについて" className="btn-primary">{t('相談する', 'Get started')}</a>
            </div>

            {/* Premium */}
            <div className="svc-plan reveal">
              <div className="svc-plan-header">
                <span className="svc-plan-name">Premium</span>
                <p className="svc-plan-desc">{t('フルサポートで任せたい方に', 'For those who want full support')}</p>
              </div>
              <div className="svc-plan-price">
                <span className="svc-plan-amount"><span className="svc-plan-yen">&yen;</span>100,000</span>
                <span className="svc-plan-period">{t('/ 月（税別）', '/ month (excl. tax)')}</span>
              </div>
              <div className="svc-plan-setup">{t('制作費 ¥0', 'Setup fee: ¥0')}</div>
              <ul className="svc-plan-features">
                <li>{t('オリジナルデザイン（ページ数無制限）', 'Custom design (unlimited pages)')}</li>
                <li>{t('レスポンシブ対応', 'Responsive design')}</li>
                <li>{t('ホスティング & SSL & CDN', 'Hosting, SSL & CDN')}</li>
                <li>{t('SEO対策 & 改善提案', 'SEO optimization & improvement proposals')}</li>
                <li>{t('アクセス解析 & 月次レポート', 'Analytics & monthly reporting')}</li>
                <li>{t('優先サポート（Slack連携可）', 'Priority support (Slack available)')}</li>
                <li>{t('機能追加・改修対応', 'Feature additions & modifications')}</li>
              </ul>
              <a href="mailto:support@its-capsule.com?subject=Premium%20プランについて" className="btn-secondary">{t('相談する', 'Get started')}</a>
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
              <summary>{t('本当に制作費0円ですか？', 'Is the setup fee really ¥0?')}</summary>
              <p>{t('はい、初期の制作費用は一切いただきません。月額料金のみでご利用いただけます。最低契約期間は12ヶ月となります。', 'Yes, there are absolutely no upfront costs. You only pay the monthly fee. The minimum contract period is 12 months.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('制作期間はどれくらいですか？', 'How long does it take to build?')}</summary>
              <p>{t('通常2〜4週間で公開可能です。AIを活用した制作プロセスにより、従来よりも大幅に短い納期を実現しています。', 'Typically 2-4 weeks to launch. Our AI-powered workflow enables significantly shorter delivery times than traditional approaches.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('途中でプランを変更できますか？', 'Can I change plans later?')}</summary>
              <p>{t('はい、いつでもプランのアップグレード・ダウングレードが可能です。翌月から新しいプランが適用されます。', 'Yes, you can upgrade or downgrade your plan at any time. The new plan takes effect from the following month.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('解約した場合、サイトはどうなりますか？', 'What happens to my site if I cancel?')}</summary>
              <p>{t('解約後、サイトのソースコードをお渡しします。ご自身でホスティングいただくか、別の制作会社へ引き継ぐことが可能です。', 'After cancellation, we provide you with the source code. You can host it yourself or transfer it to another provider.')}</p>
            </details>
            <details className="svc-faq-item reveal">
              <summary>{t('どんな業種でも対応できますか？', 'Do you work with any industry?')}</summary>
              <p>{t('はい、業種を問わず対応可能です。コーポレートサイト、店舗サイト、クリニック、士業など、幅広い実績がございます。', 'Yes, we work with all industries — corporate sites, retail, clinics, professional services, and more.')}</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section svc-cta">
        <div className="section-inner">
          <div className="svc-cta-card reveal">
            <h2 className="svc-cta-title">{t('まずは無料相談から。', 'Start with a free consultation.')}</h2>
            <p className="svc-cta-text">{t('あなたのビジネスに最適なプランをご提案します。お気軽にご連絡ください。', "We'll propose the ideal plan for your business. Feel free to reach out.")}</p>
            <a href="mailto:support@its-capsule.com" className="btn-primary">{t('無料相談する', 'Get started')}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
