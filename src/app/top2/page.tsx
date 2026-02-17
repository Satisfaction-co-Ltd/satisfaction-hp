import NavBar from '@/components/NavBar'
import MainBanner from '@/components/MainBanner'
import ValueAppeal2 from '@/components/ValueAppeal2'
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
      
      <ValueAppeal2 />

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
