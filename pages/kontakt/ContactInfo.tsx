import { WrapItem, Heading, VStack, Button, Box } from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdAlarm } from 'react-icons/md'

import React from 'react'

function ContactInfo() {
  return (
    <WrapItem>
      <Box>
        <Heading>Kontakt oss</Heading>

        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
          <VStack pl={0} spacing={3} alignItems="flex-start">
            <Button
              size="md"
              height="48px"
              width="auto"
              variant="ghost"
              color="black"
              _hover={{ border: '2px solid black' }}
              leftIcon={<MdPhone color="black" size="20px" />}
            >
              +47 95 55 55 68
            </Button>
            <Button
              size="md"
              height="48px"
              width="auto"
              variant="ghost"
              color="black"
              _hover={{ border: '2px solid black' }}
              leftIcon={<MdEmail color="black" size="20px" />}
            >
              post@7fjellcrossfit.no
            </Button>
            <Button
              size="md"
              height="48px"
              width="auto"
              variant="ghost"
              color="black"
              _hover={{ border: '2px solid black' }}
              leftIcon={<MdLocationOn color="black" size="20px" />}
            >
              7 Fjell Øyro Brugata 11 5200 Os
            </Button>
            <Button
              size="md"
              height="48px"
              width="auto"
              variant="ghost"
              color="black"
              _hover={{ border: '2px solid black' }}
              leftIcon={<MdAlarm color="black" size="20px" />}
            >
              Åpningstider: Kl. 06.00-23.00 (tlf 10-14 og 16-20)
            </Button>
          </VStack>
        </Box>
      </Box>
    </WrapItem>
  )
}

export default ContactInfo
