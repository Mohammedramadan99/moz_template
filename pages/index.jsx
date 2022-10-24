import { useEffect } from 'react';
import 'aos/dist/aos.css'
import AOS from "aos"
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../components/banner/Banner"));
const Features = dynamic(() => import("../components/sections/Features"));
const Portfolio = dynamic(() => import("../components/portfolio/Portfolio"));
const TextBlockOne = dynamic(() => import("../components/text-blocks/TextBlockOne"));
const TextBlockThree = dynamic(() => import("../components/text-blocks/TextBlockThree"));
const TextBlockTwo = dynamic(() => import("../components/text-blocks/TextBlockTwo"));
const Whyus = dynamic(() => import("../components/whyUs/Whyus"));
const Footer = dynamic(() => import("../components/footer/Footer"));

const Home = () =>
{
  useEffect(() =>
  {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <Banner />
      <TextBlockOne/>
      <Features />
      <TextBlockTwo />
      <Portfolio />
      <Whyus />
      <TextBlockThree />
      <Footer />
    </>
  )
}

export default Home
