import dynamic from 'next/dynamic';

// استخدم dynamic imports للمكونات الكبيرة لتحسين السرعة
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-screen" />,
});

const OffersMarquee = dynamic(() => import('@/components/OffersMarquee'));
const TotalContent = dynamic(() => import('@/components/TotalContent'));
const ClientsSlider = dynamic(() => import('@/components/ClientsSlider'));
const Brands = dynamic(() => import('@/components/Brands'));
const Services = dynamic(() => import('@/components/Services'));
const Features = dynamic(() => import('@/components/Features'));
const Stats = dynamic(() => import('@/components/Stats'));
const TopOfDirectors = dynamic(() => import('@/components/TopOfDirectors'));
const Contact = dynamic(() => import('@/components/Contact'));
const Newsletter = dynamic(() => import('@/components/Newsletter'));

export default function Home() {
  return (
    <>
      <Hero />
      <OffersMarquee />
      <TotalContent />
      <ClientsSlider />
      <Brands />
      <Features />
      <Services />
      <Stats />
      <TopOfDirectors />
      <Contact />
      <Newsletter />
    </>
  );
}