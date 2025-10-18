// app/page.tsx
import BenefitsSection from "@/components/2-molecules/BenefitsSection";
import HeroSection from "@/components/3-organisms/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
    </main>
  );
}