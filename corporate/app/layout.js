import Script from 'next/script';
import { Outfit } from 'next/font/google';
import { LanguageProvider } from '@/components/LanguageContext';
import './globals.css';

const GA_ID = 'G-N42WB4GF1E';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const siteUrl = 'https://its-capsule.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '株式会社CAPSULE | AI-native Digital Studio',
    template: '%s — CAPSULE Inc.',
  },
  description: 'CAPSULEは、AIを基盤に、戦略からデザイン、開発までを一貫して提供するデジタルスタジオです。Webデザイン・開発、ITアウトソーシングを通じて、ビジネスの成長を支えます。',
  keywords: ['株式会社CAPSULE', 'CAPSULE', 'Webデザイン', 'Web開発', 'ITアウトソーシング', 'Cloud CTO', 'AIコンサルティング', '藤沢'],
  authors: [{ name: '株式会社CAPSULE' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: '株式会社CAPSULE',
    title: '株式会社CAPSULE | AI-native Digital Studio',
    description: 'AIを基盤に、戦略からデザイン、開発までを一貫して提供。Webデザイン・開発、ITアウトソーシングでビジネスの成長を支えます。',
  },
  twitter: {
    card: 'summary',
    title: '株式会社CAPSULE | AI-native Digital Studio',
    description: 'AIを基盤に、戦略からデザイン、開発までを一貫して提供するデジタルスタジオ。',
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社CAPSULE',
  url: siteUrl,
  email: 'support@its-capsule.com',
  foundingDate: '2024-10',
  address: {
    '@type': 'PostalAddress',
    postalCode: '251-0025',
    addressRegion: '神奈川県',
    addressLocality: '藤沢市',
    streetAddress: '鵠沼石上3-1-13-3A',
    addressCountry: 'JP',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
