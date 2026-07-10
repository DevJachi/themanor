import HeroSection from "@/components/HeroSection";
import ExperienceGallery from "@/components/ExperienceGallery";
import BestSellers from "@/components/BestSellers";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceGallery />
      <BestSellers />
      <SiteFooter />
    </main>
  );
}
