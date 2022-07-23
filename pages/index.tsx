import { Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import HeroSection from './index/HeroSection'
import Membership from '../components/Membership'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Divider mt={'1'} />
      <Membership />
    </>
  )
}

export default Home
