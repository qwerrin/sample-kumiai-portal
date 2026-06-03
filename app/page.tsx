import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import Stats from "@/components/Stats";
import News from "@/components/News";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <Stats />
        <News />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
