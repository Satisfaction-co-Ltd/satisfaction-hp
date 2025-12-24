import NavBar from '@/components/NavBar'
import MainBanner from '@/components/MainBanner'
import ValueAppeal from '@/components/ValueAppeal'
import Visibility from '@/components/Visibility'
import Testimonials from '@/components/Testimonials'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <MainBanner />
      
      <ValueAppeal />

      <Visibility />

      <Testimonials />

      <Cta />

      <Footer />

      {/* <NavbarStyleOne />   */}
      {/* <NavbarStyleTwo />   */}
      {/* <NavbarStyleThree /> */}
      {/* <NavbarStyleFour /> */}
    </>
  )
}

export default Home
