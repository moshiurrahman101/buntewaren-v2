import AboutSection from "./components/AboutSection";
import DetailsOurProduct from "./components/DetailsOurProduct";
import FaqSection from "./components/FaqSection";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <DetailsOurProduct />
      <AboutSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
