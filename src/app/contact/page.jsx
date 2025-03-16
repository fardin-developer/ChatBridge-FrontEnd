import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: 'Contact Us | ChatLinker - WhatsApp API',
  description: 'Get in touch with the ChatLinker team for questions about our WhatsApp API service, pricing, or custom solutions.',
  keywords: 'contact ChatLinker, WhatsApp API support, messaging API help',
  openGraph: {
    title: 'Contact ChatLinker - WhatsApp API Provider',
    description: 'Reach out to our team for questions or custom WhatsApp API solutions for your business.',
    images: 'https://chatlinker.cloud/og-image.png',
    url: 'https://chatlinker.cloud/contact',
  },
  alternates: {
    canonical: 'https://chatlinker.cloud/contact',
  }
};

export default function ContactPage() {
  return <ContactForm />;
}