import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Box,
  HStack,
  List,
  ListIcon,
  ListItem,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { PriceWrapper } from '../components/Membership'

export default function SplitWithImage() {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>ØYRO KIDS</Heading>
            <Text fontSize={'lg'}>
              CrossFit Øyro er boxen for alle, uansett mål, treningsbakgrunn og
              alder. Vi har høyt fokus på samhold, godt humør og trivsel. Vårt
              unike miljø gir deg en ypperlig mulighet til å bli kjent med nye
              mennesker og skape nye vennskap. Våre dyktige trenere vil gi deg
              en trygg og grundig opplæring i CrossFit sine treningsprinsipper.
            </Text>

            <Box>
              <Stack textAlign="center">
                <Box marginTop={5}>
                  <PriceWrapper>
                    <Box py={6} px={12} width="100%">
                      <Text fontWeight="500" fontSize={['1xl', '2xl']}>
                        KLIPPEKORT (12/6 klipp)
                      </Text>
                      <HStack justifyContent="center">
                        <Text fontSize={['2xl', '3xl']} fontWeight="600">
                          kr
                        </Text>
                        <Text fontSize={['3xl', '5xl']} fontWeight="900">
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
                      <Link href="/kontakt">
                        <Box w="80%" pt={7}>
                          <Button w="full" bg="yellow.400" variant="outline">
                            KJØP CF KIDS KLIPPEKORT
                          </Button>
                        </Box>
                      </Link>
                    </VStack>
                  </PriceWrapper>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Flex maxHeight={670}>
            <Image
              rounded={'md'}
              alt={'crossfit øyro gruppe'}
              src={'/group2.webp'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  )
}
