import {
  VStack,
  Heading,
  Stack,
  HStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Text,
  Box,
  Button,
  Center,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { PriceWrapper } from '../components/Membership'

function Medlemskap() {
  return (
    <>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Våre medlemskap
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Vi har også gode tilbud til din bedrift, send oss en mail for mer
            informasjon.
          </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                KLIPPEKORT (12/6 klipp)
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  kr
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  1500/850
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Gyldighet 12 måneder
                </ListItem>

                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Gratis introkurs (verdi 1200 kr)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Tren når du vil!
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('blue.300', 'blue.700')}
                  px={3}
                  py={1}
                  color={useColorModeValue('gray.900', 'gray.300')}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Mest for pengene
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  12 MÅNEDER
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    kr
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    750
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /måned
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Gunstigere pris
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Gratis introkurs (verdi 1200 kr)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Studentrabatt (-100,- kr)
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                LØPENDE
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  kr
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  900
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /måned
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ingen binding
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Gratis introkurs (verdi 1200 kr)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Studentrabatt (-100,- kr)
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                DROPIN
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  kr
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  150
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Tren når du vil!
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
      <Center paddingBottom={100}>
        <Link href="/kontakt">
          <Button
            minW="150px"
            rounded={'full'}
            bg={'yellow.400'}
            color={'black'}
            _hover={{
              bg: 'yellow.500',
            }}
          >
            Kontakt oss tilbud og innmelding!
          </Button>
        </Link>
      </Center>
    </>
  )
}

export default Medlemskap
