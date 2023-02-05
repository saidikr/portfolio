import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home"
import { Navbar } from "./Navbar"
import Portfolio from "./Portfolio";
import { SocialLinks } from "./SocialLinks";


function HomePage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks/>
      <Contact/>
    </>
  )
}

export default HomePage