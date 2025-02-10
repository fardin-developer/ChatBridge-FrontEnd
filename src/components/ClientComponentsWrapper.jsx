"use client";
import dynamic from 'next/dynamic';

// Dynamically import Client Components
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const InteractiveDemo = dynamic(() => import('@/components/InteractiveDemo'), { ssr: false });

export default function ClientComponentsWrapper() {
  return (
    <>
      <HeroSection />
      <InteractiveDemo />
    </>
  );
}