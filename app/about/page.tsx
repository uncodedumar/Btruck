import Image from "next/image";

import AboutHero from "../components/AboutHero"
import Testimonial from "../components/Testimonial"
import FAQs from "../components/FAQs"
import AbtSub from "../components/AbtSub"

export default function Home() {
  return (
    <>
 
    <AboutHero></AboutHero>    <AbtSub></AbtSub>    <FAQs></FAQs>

    <Testimonial></Testimonial>

    
    </>
  );
}
