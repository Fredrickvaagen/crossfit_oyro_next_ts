/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import { memberships } from '../../data/memberships'
import PriceCard from './PriceCard'

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
