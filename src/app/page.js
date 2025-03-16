import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import ClientComponentsWrapper from '@/components/ClientComponentsWrapper';
import PricingSection from '@/components/PricingSection';

export const metadata = {
  title: 'Affordable WhatsApp API - Enterprise Messaging Infrastructure',
  description: 'Discover our enterprise-grade WhatsApp API with secure architecture, real-time analytics, and interactive API playground.',
  keywords: 'WhatsApp API, Messaging, Enterprise, API Playground',
  openGraph: {
    title: 'Advanced WhatsApp API',
    description: 'Enterprise-grade messaging infrastructure for your business.',
    images: 'https://chatlinker.cloud/og-image.png',
    url: 'https://chatlinker.cloud',
  },
  alternates: {
    canonical: 'https://chatlinker.cloud',
  }
};

export default function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <main className="flex-grow text-white overflow-x-hidden relative bg-gray-900">
          <ClientComponentsWrapper />
          <FeaturesSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </>
  );
}