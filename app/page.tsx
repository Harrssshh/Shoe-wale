import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InstagramGrid } from "@/components/InstagramGrid";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { ScrollShoes } from "@/components/ScrollShoes";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TrustStrip />
        <ScrollShoes />
        <WhyUs />
        <InstagramGrid />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
