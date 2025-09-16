import Image from "next/image";
import Hero from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import CurrentSituation from "@/components/Current";
import InnovationSection from "@/components/Cards";
import HealthBenefits from "@/components/HelthBenifits";
import NextStep from "@/components/NextStep";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import LeadershipTeam from "@/components/Team";
import FounderSection from "@/components/Founder";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
          <Hero/>
          <AboutUs/>
          <CurrentSituation/>
          <InnovationSection/>
          <HealthBenefits/>
          <FounderSection/>
          <LeadershipTeam/>
          <Testimonial/>
          <NextStep/>
          <Footer/>
          
    </main>
  );
}
