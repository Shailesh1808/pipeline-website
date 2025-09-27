import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Industries from "@/components/Industries";
import Insights from "@/components/Insights";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <Insights />
        <Team />
        <Contact />
        <Footer />
        {/* More sections will go here next */}
      </main>
    </>
  );
}
