import type {Metadata} from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cin7 Business Performance Analyzer',
  description: 'Enterprise Operational Analytics and Decision Engine for Cin7 exports',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
