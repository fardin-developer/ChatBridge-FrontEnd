import Head from 'next/head';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import ClientComponentsWrapper from '@/components/ClientComponentsWrapper';

export default function Page() {
  return (
    <>
      <Head>
        <title>Advanced WhatsApp API - Enterprise Messaging Infrastructure</title>
        <meta
          name="description"
          content="Discover our enterprise-grade WhatsApp API with quantum-secure architecture, real-time analytics, and interactive API playground."
        />
        <meta name="keywords" content="WhatsApp API, Messaging, Enterprise, Quantum Encryption, API Playground" />
        <meta property="og:title" content="Advanced WhatsApp API" />
        <meta
          property="og:description"
          content="Enterprise-grade messaging infrastructure with quantum-secure architecture."
        />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-900">
        <main className="flex-grow text-white overflow-x-hidden relative bg-gray-900">
          <ClientComponentsWrapper />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}