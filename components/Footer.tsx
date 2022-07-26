import { ReactNode } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { SocialButton } from './SocialButton'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>CrossFit Øyro</ListHeader>
            <Link href={'/om-oss'}>Om oss</Link>
            <Link href={'/medlemskap'}>Medlemskap</Link>
            {/* <Link href={'/timeplan'}>Timeplan og Booking</Link> */}
            <Link href={'/team'}>Vårt team</Link>
            <Link href={'/kids'}>CrossFit Kids</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Kontakt</ListHeader>
            <Link href={'/kontakt'}>Kontakt oss</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CF Øyro App</ListHeader>
            <Link
              target={'_blank'}
              href={
                'https://apps.apple.com/us/app/7-fjell-crossfit/id1370781770?uo=4&at=11l6hc&app=itunes&ct=fnd'
              }
            >
              App store (Apple)
            </Link>
            <Link
              target={'_blank'}
              href={
                'https://play.google.com/store/apps/details?id=com.bookingapp.syvfjell&hl=en&gl=US'
              }
            >
              Google Play (Android)
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2022 CrossFit Øyro. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
