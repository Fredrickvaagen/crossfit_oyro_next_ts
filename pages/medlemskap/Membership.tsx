import { ReactNode } from 'react'
import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import PriceCard from './PriceCard'

export type MembershipProps = {
  title: string
  price: string
  currency: string
  listItems: string[]
  monthly: boolean
  mostValue: boolean
}

export const memberships: MembershipProps[] = [
  {
    title: 'Klippekort (12/6 klipp)',
    currency: 'kr',
    price: '1500/850',
    monthly: false,
    mostValue: false,

    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Tren når du vil!',
    ],
  },
  {
    title: '12 MÅNEDER',
    currency: 'kr',
    price: '750',
    monthly: true,
    mostValue: true,
    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
  {
    title: 'LØPENDE',
    currency: 'kr',
    price: '900',
    monthly: true,
    mostValue: false,

    listItems: [
      'Ingen binding',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
]

export function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  )
}

export default function Membership() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          VÅRE MEDLEMSKAP
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Vi har flere forskjellige medlemskap som passer for deg. Vi har også
          spesial avtaler for blålys/offshore arbeidere.
        </Text>
      </VStack>
      <Stack
        mt={['1', '5']}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 5 }}
        py={10}
        flexWrap={'wrap'}
      >
        {memberships.map((e, index) => {
          return <PriceCard membership={e} key={index} />
        })}
      </Stack>
    </Box>
  )
}
