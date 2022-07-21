import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navigation>
        <Head>
          <title>CrossFit Øyro</title>
        </Head>
        <Component {...pageProps} />
      </Navigation>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
