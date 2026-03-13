import type { Metadata } from 'next';

import '@/styles/globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileBottomNav } from '@/components/mobile-bottom-nav';

export const metadata: Metadata = {
  title: 'SF Telegram App',
  description: 'SF web app starter for Telegram Mini App',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <main className='mx-auto min-h-[calc(100vh-130px)] w-full max-w-6xl px-4 py-6 pb-20 md:pb-6'>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
