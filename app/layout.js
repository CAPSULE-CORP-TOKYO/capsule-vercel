import { Outfit } from 'next/font/google';
import { LanguageProvider } from '@/components/LanguageContext';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'CAPSULE Inc.',
  description: 'CAPSULE - AI-native digital studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={outfit.variable}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
