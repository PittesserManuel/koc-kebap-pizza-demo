import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuTeaser from "@/components/MenuTeaser";
import UeberUns from "@/components/UeberUns";
import Highlight from "@/components/Highlight";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import SocialProof from "@/components/SocialProof";
import BestellCTA from "@/components/BestellCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <DemoBanner />
      <Header />
      <Hero />
      <Marquee />
      <MenuTeaser />
      <UeberUns />
      <Highlight />
      <Oeffnungszeiten />
      <SocialProof />
      <BestellCTA />
      <Footer />
    </main>
  );
}
