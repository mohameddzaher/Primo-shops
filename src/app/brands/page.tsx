import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandsContent from '@/components/BrandsContent';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1229] via-[#1D2340] to-[#2a1e3a]">
      <Header />
      <BrandsContent />
      <Footer />
    </div>
  );
}