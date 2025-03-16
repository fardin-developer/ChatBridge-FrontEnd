import HeroSection from '@/components/HeroSection';
import InteractiveDemo from '@/components/InteractiveDemo';

export default function ClientComponentsWrapper() {
  return (
    <>
      <div className='h-auto'>
        <HeroSection />
        <InteractiveDemo />
      </div>
    </>
  );
}