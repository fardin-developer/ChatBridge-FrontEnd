import React from "react";
import ClientPricingSection from "./ClientPricingSection";

export default function PricingSection() {
  return (
    <>
      <section className="py-6" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">WhatsApp API Pricing Plans</h2>
          <div className="sr-only">
            <p>Choose from our flexible pricing plans for WhatsApp API integration.</p>
            <ul>
              <li>Starter Plan: ₹300 per instance per month for 0-10 instances</li>
              <li>Business Plan: ₹250 per instance per month for 10-20 instances</li>
              <li>Enterprise Plan: ₹200 per instance per month for 20+ instances</li>
            </ul>
            <p>All plans include unlimited messages, no pay-per-use fees, and access to all features.</p>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "PriceSpecification",
                "name": "WhatsApp API Pricing Plans",
                "description": "Flexible pricing plans for WhatsApp API integration with unlimited messages.",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Starter Plan",
                    "price": "300",
                    "priceCurrency": "INR",
                    "description": "Perfect for small businesses with up to 10 instances"
                  },
                  {
                    "@type": "Offer",
                    "name": "Business Plan",
                    "price": "250",
                    "priceCurrency": "INR",
                    "description": "Ideal for growing businesses with 10-20 instances"
                  },
                  {
                    "@type": "Offer",
                    "name": "Enterprise Plan",
                    "price": "200",
                    "priceCurrency": "INR",
                    "description": "Best value for large businesses with 20+ instances"
                  }
                ]
              })
            }}
          />
        </div>
      </section>
      
      <ClientPricingSection />
    </>
  );
}