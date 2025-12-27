import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // هذا مهم للسرعة
});

export const metadata: Metadata = {
  title: 'Primo - Premium Home Appliances',
  description: 'Leading home appliances retailer in Egypt and Saudi Arabia since 2019',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-[#0d1229] via-[#1D2340] to-[#2a1e3a] text-white`}>
        {/* Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EA591D]/5 via-transparent to-[#EA591D]/5 pointer-events-none" />
        
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1"> {/* pt-16 للتعويض عن ارتفاع الـ Header الثابت */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}