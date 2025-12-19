import NavBar from '@/components/NavBar'
import MainBanner from '@/components/MainBanner'
import ValueAppeal from '@/components/ValueAppeal'
import Visibility from '@/components/Visibility'
// import MainBanner from '@/_components/HomeDemo1/MainBanner'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <MainBanner />
      
      <ValueAppeal />

      <Visibility />

      {/* <NavbarStyleOne />   */}
      {/* <NavbarStyleTwo />   */}
      {/* <NavbarStyleThree /> */}
      {/* <NavbarStyleFour /> */}
    </>
  )
}

export default Home
