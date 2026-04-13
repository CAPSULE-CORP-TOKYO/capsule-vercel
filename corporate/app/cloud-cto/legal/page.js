'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';

export default function LegalPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header navItems={[]} logoHref="/" />

      <div className="legal-page">
        <div className="legal-inner">
          <Link href="/" className="back-link">{t('← CAPSULE トップへ', '← Back to CAPSULE')}</Link>

          <h1 className="legal-title">{t('特定商取引法に基づく表記', 'Notation Based on the Specified Commercial Transactions Act')}</h1>

          <div className="legal-body">
            <div className="legal-table">
              <div className="legal-row">
                <dt>{t('販売業者', 'Business Operator')}</dt>
                <dd>株式会社CAPSULE</dd>
              </div>
              <div className="legal-row">
                <dt>{t('代表責任者', 'Representative')}</dt>
                <dd>{t('矢野 太一', 'Taichi Yano')}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('所在地', 'Address')}</dt>
                <dd>{t('〒251-0025 神奈川県藤沢市鵠沼石上3-1-13-3A', '3-1-13-3A Kugenuma Ishigami, Fujisawa, Kanagawa 251-0025, Japan')}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('連絡先', 'Contact')}</dt>
                <dd>
                  {t('メール：', 'Email: ')}<a href="mailto:support@its-capsule.com">support@its-capsule.com</a>
                </dd>
              </div>
              <div className="legal-row">
                <dt>{t('サービスの名称', 'Service Name')}</dt>
                <dd>{t('HP制作サービス（Webサイトのデザイン、開発、ホスティング、保守運用）', 'Web Design Service (website design, development, hosting, maintenance)')}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('サービスの対価', 'Service Fee')}</dt>
                <dd>
                  <ul className="legal-list">
                    <li>{t('Lightプラン：月額20,000円（税別）', 'Light Plan: ¥20,000/month (excl. tax)')}</li>
                    <li>{t('Standardプラン：月額50,000円（税別）', 'Standard Plan: ¥50,000/month (excl. tax)')}</li>
                    <li>{t('Premiumプラン：月額100,000円（税別）', 'Premium Plan: ¥100,000/month (excl. tax)')}</li>
                  </ul>
                  <p className="legal-note">{t('※初期制作費用は0円です。', '* Initial setup fee is ¥0.')}</p>
                </dd>
              </div>
              <div className="legal-row">
                <dt>{t('対価以外に必要な費用', 'Additional Costs')}</dt>
                <dd>{t(
                  '独自ドメインの取得・維持費用（ご希望の場合）。インターネット接続に必要な通信料等はお客様のご負担となります。',
                  'Domain acquisition and maintenance fees (if requested). Internet connection and communication costs are borne by the customer.'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('支払方法', 'Payment Methods')}</dt>
                <dd>{t(
                  'クレジットカード（Stripe経由の自動決済）、銀行振込（Stripe経由の請求書払い）',
                  'Credit card (automatic billing via Stripe), bank transfer (invoice payment via Stripe)'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('支払時期', 'Payment Timing')}</dt>
                <dd>{t(
                  '初回決済日に契約開始となり、サービスを開始します。以降、クレジットカードの場合は初回決済日と同日に毎月自動引き落とし、銀行振込の場合は毎月の請求日にStripeから請求書がメールで届きますので期日までにお振込みください。日割り計算は行いません。',
                  'The contract starts on the initial payment date, and the Service begins. For credit cards, payments are automatically charged on the same date each month. For bank transfers, an invoice is emailed via Stripe on each billing date and must be paid by the due date. No prorated billing.'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('サービスの提供時期', 'Service Delivery')}</dt>
                <dd>{t(
                  'お申込み後、ヒアリングを経て通常2〜4週間でWebサイトを公開します。その後、契約期間中は継続的に保守・運用サービスを提供します。',
                  'After application and consultation, the website is typically launched within 2-4 weeks. Maintenance and operation services are provided continuously during the contract period.'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('契約期間', 'Contract Period')}</dt>
                <dd>{t(
                  '最低契約期間は12ヶ月です。最低契約期間満了後は、1ヶ月単位で自動更新されます。',
                  'The minimum contract period is 12 months. After the minimum period, the contract automatically renews on a monthly basis.'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('解約・返金について', 'Cancellation and Refunds')}</dt>
                <dd>
                  <p>{t(
                    '最低契約期間（12ヶ月）満了後は、1ヶ月前までにお申し出いただくことで解約が可能です。最低契約期間内の解約の場合は、残期間分の月額料金をお支払いいただきます。',
                    'After the minimum contract period (12 months), cancellation is possible with 1 month\'s notice. If canceling within the minimum period, the remaining months\' fees must be paid.'
                  )}</p>
                  <p>{t(
                    'サービスの性質上、制作開始後の返金には応じかねます。',
                    'Due to the nature of the service, refunds are not available after production has begun.'
                  )}</p>
                </dd>
              </div>
              <div className="legal-row">
                <dt>{t('解約後の対応', 'After Cancellation')}</dt>
                <dd>{t(
                  '解約後、ご要望に応じてWebサイトのソースコードをお渡しします。ご自身でホスティングいただくか、別の制作会社へ引き継ぐことが可能です。',
                  'After cancellation, the website source code will be provided upon request. You may host it yourself or transfer it to another provider.'
                )}</dd>
              </div>
              <div className="legal-row">
                <dt>{t('動作環境', 'System Requirements')}</dt>
                <dd>{t(
                  'インターネットに接続されたPC、スマートフォン、タブレット等のデバイスおよび最新のWebブラウザ（Chrome、Safari、Firefox、Edge等）。',
                  'Devices connected to the internet (PC, smartphone, tablet, etc.) with a modern web browser (Chrome, Safari, Firefox, Edge, etc.).'
                )}</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
