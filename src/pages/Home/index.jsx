import './App.css'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'
import { useMediaQuery } from "@uidotdev/usehooks"
import AboutUs from '../../components/AboutUs/AboutUs'
import HowItWorksOne from '../../components/HowItWorksOne/HowItWorksOne'
import Feedbacks from '../../components/Feedbacks/Feedbacks'
import HowItWorksTwo from '../../components/HowItWorksTwo/HowItWorksTwo'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
import ServicosPopulares from '../../components/ServicosPopulares/ServicosPopulares'
import Rodape from '../../components/Rodape'



function App() {

  const isMobile = useMediaQuery("only screen and (max-width:1445px)")

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Hero />
      <AboutUs />
      <HowItWorksOne />
      <Feedbacks />
      <HowItWorksTwo />
      <ServicosPopulares/>
      <DownloadApp />
      <Rodape/>
    </>
  )
}

export default App
