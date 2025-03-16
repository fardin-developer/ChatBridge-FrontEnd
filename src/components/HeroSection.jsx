import React from "react";
import ClientHeroSection from "./ClientHeroSection";

export default function HeroSection() {
  return (
    <>
      <section className="h-auto">
        <div className="container mx-auto px-4">
          <h1 className="sr-only">Advanced WhatsApp API - Enterprise-Grade Messaging Infrastructure</h1>
          <div className="sr-only">
            <p>Create your own WhatsApp API instance or explore our comprehensive API documentation.</p>
            <p>Enterprise-grade messaging infrastructure for businesses and developers.</p>
            <ul>
              <li>Send messages programmatically</li>
              <li>Enterprise-grade messaging solutions</li>
              <li>Advanced WhatsApp integration API</li>
              <li>Cloud-based messaging infrastructure</li>
            </ul>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "ChatLinker - Advanced WhatsApp API",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Cloud",
                "description": "Enterprise-Grade WhatsApp Messaging Infrastructure for businesses and developers.",
                "offers": {
                  "@type": "Offer",
                  "url": "https://app.chatlinker.cloud"
                }
              })
            }}
          />
        </div>
      </section>
      
      <ClientHeroSection />
    </>
  );
}