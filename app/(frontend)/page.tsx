import Hero from "@/app/components/Hero";
import FeaturedProduct from "@/app/components/FeaturedProduct";
import DetailsOurProduct from "@/app/components/DetailsOurProduct";
import AboutSection from "@/app/components/AboutSection";
import FaqSection from "@/app/components/FaqSection";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <DetailsOurProduct />
      <AboutSection />
      <FaqSection />
    </div>
  );
}
