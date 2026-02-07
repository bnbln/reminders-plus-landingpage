import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureIcons from '@/components/FeatureIcons';
import FeatureCards from '@/components/FeatureCards';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <Header />
      <Hero />
      <FeatureIcons />
      <FeatureCards />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
