import {
  Box,
  Button,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { MembershipProps, PriceWrapper } from './Membership'

type PriceCardProps = {
  membership: MembershipProps
}

export default function PriceCard({ membership }: PriceCardProps) {
  return (
    <PriceWrapper>
      <Box position="relative">
        {membership.mostValue ? (
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: 'translate(-50%)' }}
          >
            <Text
              textTransform="uppercase"
              bg={['yellow.400', 'yellow.400']}
              px={3}
              py={1}
              color={['black.900', 'black.300']}
              fontSize="sm"
              fontWeight="600"
              rounded="xl"
            >
              Mest for pengene
            </Text>
          </Box>
        ) : null}

        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize={['1xl', '2xl']}>
            {membership.title}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize={['2xl', '3xl']} fontWeight="600">
              {membership.currency}
            </Text>
            <Text fontSize={['3xl', '5xl']} fontWeight="900">
              {membership.price}
            </Text>
            {membership.monthly && (
              <Text fontSize={['2xl', '3xl']} color="gray.500">
                /måned
              </Text>
            )}
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          borderBottomRadius={'xl'}
        >
          <List spacing={3} textAlign="start" px={12}>
            {membership.listItems.map((e, index) => {
              return (
                <ListItem key={index}>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  {e}
                </ListItem>
              )
            })}
          </List>
          <Box width="80%" pt="5">
            <Link href="/kontakt">
              <Button w="full" bg="yellow.400" variant="outline">
                Kjøp
              </Button>
            </Link>
          </Box>
        </VStack>
      </Box>
    </PriceWrapper>
  )
}
