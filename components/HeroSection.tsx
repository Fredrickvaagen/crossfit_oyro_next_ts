import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import Headline from './Headline'

export default function HeroSection() {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      margin="0 auto"
      padding="2rem"
      maxW="1440px"
      height="95vh"
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Headline />
          </Heading>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            display="flex"
            justifyContent={'center'}
            marginTop={'5rem !important'}
          >
            <Button
              rounded={'full'}
              bg={'yellow.400'}
              color={'black'}
              _hover={{
                bg: 'yellow.500',
              }}
            >
              Bli medlem
            </Button>
            <Link href="/om-oss">
              <Button rounded={'full'}>Hvorfor CrossFit Øyro</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
}
