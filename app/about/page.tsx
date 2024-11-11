import FounderAbout from "@/app/components/about/FounderAbout";
import Hero from "@/app/components/about/Hero";
import Mission from "@/app/components/about/Mission";
import DetailsOurProduct from "@/app/components/DetailsOurProduct";
import Commitment from "@/app/components/about/Commitment";

export default function About() {
  return (
    <div>
      <Hero />
      <FounderAbout />
      <Mission />
      <DetailsOurProduct />
      <Commitment />
    </div>
  );
}
