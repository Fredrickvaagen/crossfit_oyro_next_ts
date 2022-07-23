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
import { featured_memberships } from './membership/memberships'

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
        <Text fontSize="lg" color={'gray.500'} pl="2rem" pr="2rem">
          Vi har flere forskjellige medlemskap som passer for deg. Vi har også
          spesial avtaler for blålys/offshore arbeidere.
        </Text>
      </VStack>
      <Stack
        mt={['1', '5']}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify={[
          'flex-start',
          'flex-start',
          'flex-start',
          'flex-start',
          'center',
        ]}
        spacing={{ base: 4, lg: 5 }}
        py={10}
        flexWrap={'wrap'}
        pl={['0', '2rem', '2rem', '2rem', '0']}
      >
        {featured_memberships.map((e, index) => {
          return <PriceCard membership={e} key={index} />
        })}
      </Stack>
    </Box>
  )
}
