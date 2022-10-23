import Banner from "../components/banner/Banner"
import Logo from "../components/logo/Logo"
import Portfolio from "../components/portfolio/Portfolio"
import Features from "../components/sections/Features"
import TextBlockOne from "../components/text-blocks/TextBlockOne"
import TextBlockThree from "../components/text-blocks/TextBlockThree"
import TextBlockTwo from "../components/text-blocks/TextBlockTwo"
import Whyus from "../components/whyUs/Whyus"
import Footer from "../components/footer/Footer"


const Home  = () => {
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
