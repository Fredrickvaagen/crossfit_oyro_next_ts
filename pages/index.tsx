import { Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import Membership from '../components/Membership'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <Membership />
    </>
  )
}

export default Home
