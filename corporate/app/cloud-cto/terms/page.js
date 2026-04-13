'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header navItems={[]} logoHref="/" />

      <div className="legal-page">
        <div className="legal-inner">
          <Link href="/" className="back-link">{t('← CAPSULE トップへ', '← Back to CAPSULE')}</Link>

          <h1 className="legal-title">{t('HP制作サービス利用規約', 'Web Design Service Terms of Use')}</h1>
          <p className="legal-updated">{t('最終更新日：2025年4月1日', 'Last updated: April 1, 2025')}</p>

          <div className="legal-body">
            <section>
              <h2>{t('第1条（適用範囲）', 'Article 1 (Scope)')}</h2>
              <p>{t(
                '本規約は、株式会社CAPSULE（以下「当社」）が提供するHP制作サービス（以下「本サービス」）の利用に関する条件を定めるものです。本サービスをご利用いただくすべてのお客様（以下「利用者」）に適用されます。',
                'These terms define the conditions for using the web design service ("Service") provided by CAPSULE Inc. ("Company"). They apply to all customers ("Users") of the Service.'
              )}</p>
            </section>

            <section>
              <h2>{t('第2条（サービス内容）', 'Article 2 (Service Description)')}</h2>
              <p>{t(
                '本サービスは、利用者のWebサイトのデザイン、開発、ホスティング、および保守運用を月額制で提供するものです。具体的なサービス内容は、利用者が選択するプランに応じて異なります。',
                'The Service provides website design, development, hosting, and maintenance on a monthly subscription basis. Specific service details vary depending on the plan selected by the User.'
              )}</p>
              <ol>
                <li>{t(
                  'Lightプラン：オリジナルデザイン（5ページまで）、レスポンシブ対応、ホスティング・SSL、メールサポート',
                  'Light Plan: Custom design (up to 5 pages), responsive design, hosting & SSL, email support'
                )}</li>
                <li>{t(
                  'Standardプラン：オリジナルデザイン（10ページまで）、レスポンシブ対応、ホスティング・SSL・CDN、SEO基本設定、アクセス解析レポート、チャット＆メールサポート',
                  'Standard Plan: Custom design (up to 10 pages), responsive design, hosting, SSL & CDN, basic SEO setup, analytics reporting, chat & email support'
                )}</li>
                <li>{t(
                  'Premiumプラン：オリジナルデザイン（ページ数無制限）、レスポンシブ対応、ホスティング・SSL・CDN、SEO対策・改善提案、アクセス解析・月次レポート、優先サポート（Slack連携可）、機能追加・改修対応',
                  'Premium Plan: Custom design (unlimited pages), responsive design, hosting, SSL & CDN, SEO optimization & improvement proposals, analytics & monthly reporting, priority support (Slack available), feature additions & modifications'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第3条（契約の成立）', 'Article 3 (Contract Formation)')}</h2>
              <p>{t(
                '利用者が当社に対してサービスの申込みを行い、当社がこれを承諾した時点で契約が成立するものとします。当社は、以下の場合に申込みをお断りすることがあります。',
                'The contract is formed when the User applies for the Service and the Company accepts the application. The Company may decline an application in the following cases.'
              )}</p>
              <ol>
                <li>{t('申込み内容に虚偽の記載がある場合', 'False information in the application')}</li>
                <li>{t('過去に本規約に違反した事実がある場合', 'Previous violations of these terms')}</li>
                <li>{t('その他、当社が不適切と判断した場合', 'Any other case deemed inappropriate by the Company')}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第4条（契約期間）', 'Article 4 (Contract Period)')}</h2>
              <p>{t(
                '本サービスの最低契約期間は12ヶ月とします。最低契約期間満了後は、1ヶ月単位で自動更新されるものとし、解約の申し出がない限り契約は継続します。',
                'The minimum contract period is 12 months. After the minimum period, the contract automatically renews on a monthly basis and continues unless a cancellation request is made.'
              )}</p>
            </section>

            <section>
              <h2>{t('第5条（料金および支払い）', 'Article 5 (Fees and Payment)')}</h2>
              <ol>
                <li>{t(
                  '本サービスの初期制作費用は0円とします。利用者は、選択したプランに応じた月額料金を支払うものとします。',
                  'The initial setup fee is ¥0. Users shall pay the monthly fee corresponding to their selected plan.'
                )}</li>
                <li>{t(
                  '月額料金は税別表示です。別途消費税が加算されます。',
                  'Monthly fees are displayed excluding tax. Consumption tax will be added separately.'
                )}</li>
                <li>{t(
                  '初回決済日をもって契約開始とし、当社はサービスの提供を開始します。日割り計算は行いません。',
                  'The contract begins on the date of the first payment, and the Company will commence the Service. No prorated billing is applied.'
                )}</li>
                <li>{t(
                  '2ヶ月目以降の支払いは、決済代行サービス（Stripe）を通じて行われます。支払方法により仕組みが異なります。',
                  'Payments from the second month onward are processed through the payment platform Stripe. The process differs by payment method.'
                )}</li>
                <li>{t(
                  'クレジットカードの場合：初回決済日と同日に毎月自動で引き落としが行われます（例：3月26日に契約した場合、毎月26日が自動引き落とし日となります）。',
                  'Credit card: Payments are automatically charged on the same date each month as the initial payment (e.g., if contracted on March 26, automatic billing occurs on the 26th monthly).'
                )}</li>
                <li>{t(
                  '銀行振込の場合：毎月の請求日にStripeから請求書がメールで送付されます。利用者は請求書に記載された指定口座へ期日までにお振込みください。',
                  'Bank transfer: An invoice is sent via email from Stripe on each billing date. Users must transfer the amount to the designated account by the due date stated on the invoice.'
                )}</li>
                <li>{t(
                  '支払いが遅延した場合、年14.6%の遅延損害金を申し受ける場合があります。また、支払いの確認ができない場合、当社はサービスの提供を停止することがあります。',
                  'In the event of late payment, a late fee of 14.6% per annum may be charged. The Company may suspend the Service if payment cannot be confirmed.'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第6条（制作プロセス）', 'Article 6 (Production Process)')}</h2>
              <ol>
                <li>{t(
                  '当社は、利用者からのヒアリングに基づき、Webサイトのデザインおよび開発を行います。通常、契約成立後2〜4週間でサイトを公開します。',
                  'The Company will design and develop the website based on consultation with the User. Typically, the site will be launched within 2-4 weeks after the contract is formed.'
                )}</li>
                <li>{t(
                  '制作過程において、利用者にはデザイン確認およびフィードバックにご協力いただきます。利用者の確認遅延により納期が遅れた場合、当社は責任を負いません。',
                  'During production, Users are expected to cooperate with design reviews and feedback. The Company is not liable for delays caused by late User feedback.'
                )}</li>
                <li>{t(
                  '利用者が提供する素材（テキスト、画像等）については、利用者が必要な権利を有していることを保証するものとします。',
                  'Users guarantee that they hold the necessary rights to all materials (text, images, etc.) provided to the Company.'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第7条（知的財産権）', 'Article 7 (Intellectual Property)')}</h2>
              <ol>
                <li>{t(
                  '本サービスにより制作されたWebサイトのデザインおよびソースコードの著作権は、契約期間中は当社に帰属します。',
                  'Copyright of the website design and source code produced through the Service belongs to the Company during the contract period.'
                )}</li>
                <li>{t(
                  '契約解除後、利用者の要請に基づき、当社はWebサイトのソースコードを利用者に引き渡します。引き渡し後のソースコードの利用権は利用者に移転します。',
                  'Upon contract termination, the Company will provide the website source code to the User upon request. Usage rights transfer to the User after delivery.'
                )}</li>
                <li>{t(
                  '当社は、本サービスの実績として、利用者のWebサイトを当社のポートフォリオに掲載できるものとします。',
                  'The Company may feature the User\'s website in its portfolio as a service case study.'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第8条（保守・運用）', 'Article 8 (Maintenance & Operations)')}</h2>
              <p>{t(
                'サイト公開後、当社は選択されたプランに応じた保守・運用サービスを提供します。これには、コンテンツ更新、セキュリティ対策、サーバー管理が含まれます。ただし、以下の場合は追加費用が発生することがあります。',
                'After site launch, the Company provides maintenance and operation services according to the selected plan, including content updates, security measures, and server management. Additional fees may apply in the following cases.'
              )}</p>
              <ol>
                <li>{t('プランに含まれるページ数を超える追加ページの制作', 'Creating additional pages beyond the plan\'s page limit')}</li>
                <li>{t('大規模なデザイン変更やシステム改修', 'Major design changes or system modifications')}</li>
                <li>{t('外部サービスとの連携開発', 'Integration development with external services')}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第9条（プラン変更）', 'Article 9 (Plan Changes)')}</h2>
              <p>{t(
                '利用者は、いつでもプランのアップグレードまたはダウングレードを申し出ることができます。プラン変更は翌月から適用されます。',
                'Users may request a plan upgrade or downgrade at any time. Plan changes take effect from the following month.'
              )}</p>
            </section>

            <section>
              <h2>{t('第10条（解約）', 'Article 10 (Cancellation)')}</h2>
              <ol>
                <li>{t(
                  '最低契約期間（12ヶ月）満了後、利用者は1ヶ月前までに書面またはメールで解約を申し出ることができます。',
                  'After the minimum contract period (12 months), Users may submit a cancellation request in writing or by email at least 1 month in advance.'
                )}</li>
                <li>{t(
                  '最低契約期間内に解約を希望する場合、残期間分の月額料金をお支払いいただきます。',
                  'If cancellation is requested during the minimum contract period, the remaining months\' fees shall be paid.'
                )}</li>
                <li>{t(
                  '解約後、第7条に基づきソースコードを引き渡します。ホスティングおよびドメイン管理は解約月末で終了します。',
                  'After cancellation, the source code will be provided as per Article 7. Hosting and domain management will end at the end of the cancellation month.'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第11条（秘密保持）', 'Article 11 (Confidentiality)')}</h2>
              <p>{t(
                '当社および利用者は、本サービスの提供・利用に関して知り得た相手方の秘密情報を、第三者に開示または漏洩しないものとします。ただし、法令により開示が義務付けられている場合はこの限りではありません。',
                'Both the Company and Users shall not disclose or leak confidential information obtained through the Service to third parties, except when disclosure is required by law.'
              )}</p>
            </section>

            <section>
              <h2>{t('第12条（免責事項）', 'Article 12 (Disclaimer)')}</h2>
              <ol>
                <li>{t(
                  '当社は、本サービスにより制作されたWebサイトが利用者の売上向上等の特定の成果をもたらすことを保証するものではありません。',
                  'The Company does not guarantee that websites produced through the Service will achieve specific results such as increased sales.'
                )}</li>
                <li>{t(
                  '天災、サーバー障害、第三者による攻撃等の不可抗力により生じた損害について、当社は責任を負いません。',
                  'The Company is not liable for damages caused by force majeure, including natural disasters, server failures, or third-party attacks.'
                )}</li>
                <li>{t(
                  '当社の損害賠償責任は、いかなる場合においても、利用者が過去12ヶ月間に当社に支払った月額料金の合計額を上限とします。',
                  'The Company\'s liability shall in no event exceed the total monthly fees paid by the User in the preceding 12 months.'
                )}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第13条（禁止事項）', 'Article 13 (Prohibited Actions)')}</h2>
              <p>{t('利用者は、以下の行為を行ってはならないものとします。', 'Users shall not engage in the following actions.')}</p>
              <ol>
                <li>{t('法令または公序良俗に反するコンテンツの掲載を依頼する行為', 'Requesting content that violates laws or public order')}</li>
                <li>{t('第三者の知的財産権、プライバシー権等を侵害するコンテンツの掲載を依頼する行為', 'Requesting content that infringes on third-party intellectual property or privacy rights')}</li>
                <li>{t('当社または第三者に不利益、損害を与える行為', 'Actions that cause disadvantage or damage to the Company or third parties')}</li>
                <li>{t('本サービスを通じて取得した情報を不正に利用する行為', 'Unauthorized use of information obtained through the Service')}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第14条（サービスの中断・終了）', 'Article 14 (Service Suspension or Termination)')}</h2>
              <p>{t(
                '当社は、以下の場合に本サービスの全部または一部を中断・終了することがあります。事前に利用者へ通知するよう努めますが、緊急の場合は事後の通知とすることがあります。',
                'The Company may suspend or terminate all or part of the Service in the following cases. The Company will endeavor to notify Users in advance, but in emergencies, notification may be provided afterward.'
              )}</p>
              <ol>
                <li>{t('システムの保守・点検を行う場合', 'System maintenance or inspection')}</li>
                <li>{t('天災、停電等の不可抗力が生じた場合', 'Force majeure events such as natural disasters or power outages')}</li>
                <li>{t('利用者が本規約に違反した場合', 'User violation of these terms')}</li>
                <li>{t('利用者が支払いを2ヶ月以上滞納した場合', 'User non-payment for 2 or more months')}</li>
              </ol>
            </section>

            <section>
              <h2>{t('第15条（個人情報の取り扱い）', 'Article 15 (Handling of Personal Information)')}</h2>
              <p>{t(
                '当社は、本サービスの提供にあたり取得した個人情報を、本サービスの提供および運営改善の目的にのみ使用し、適切に管理します。法令に基づく場合を除き、利用者の同意なく第三者に提供することはありません。',
                'The Company will use personal information obtained through the Service solely for service provision and operational improvement, and will manage it appropriately. Personal information will not be provided to third parties without User consent, except as required by law.'
              )}</p>
            </section>

            <section>
              <h2>{t('第16条（規約の変更）', 'Article 16 (Changes to Terms)')}</h2>
              <p>{t(
                '当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当社Webサイトに掲載した時点で効力を生じるものとします。重要な変更については、利用者に事前に通知するよう努めます。',
                'The Company may modify these terms as necessary. Modified terms become effective upon publication on the Company\'s website. The Company will endeavor to notify Users in advance of significant changes.'
              )}</p>
            </section>

            <section>
              <h2>{t('第17条（準拠法・管轄裁判所）', 'Article 17 (Governing Law and Jurisdiction)')}</h2>
              <p>{t(
                '本規約は日本法に準拠し、日本法に従って解釈されるものとします。本規約に関する紛争については、横浜地方裁判所を第一審の専属的合意管轄裁判所とします。',
                'These terms are governed by and construed in accordance with the laws of Japan. The Yokohama District Court shall have exclusive jurisdiction over any disputes arising from these terms.'
              )}</p>
            </section>

            <section className="legal-footer-note">
              <p>{t('以上', 'End of Terms')}</p>
              <p>{t('株式会社CAPSULE', 'CAPSULE Inc.')}</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
