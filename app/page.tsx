import Image from "next/image";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Subhero from "./components/Subhero"
import Images from "./components/Images"
import ServicesSection from "./components/ServicesSection"
import QSection from "./components/QSection"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import ServicesHero from "./components/ServicesHero"
import AboutHero from "./components/AboutHero"
import Testimonial from "./components/Testimonial"
import FAQs from "./components/FAQs"
import AbtSub from "./components/AbtSub"
import Contact from "./components/Contact"
import TruckingServices from "./components/TruckingServices"

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Subhero></Subhero>
    <ServicesSection></ServicesSection>
    <Images></Images>
    <ServicesHero></ServicesHero>
    <AboutHero></AboutHero>
    <Testimonial></Testimonial>
    <FAQs></FAQs>
    <AbtSub></AbtSub>
    <QSection></QSection>
    <Contact></Contact>
    <TruckingServices></TruckingServices>
    <Cta></Cta>
    <Footer></Footer>
    </>
  );
}
