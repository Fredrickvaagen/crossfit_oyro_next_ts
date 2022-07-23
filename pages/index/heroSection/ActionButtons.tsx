import { Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function ActionButtons() {
  return (
    <Stack
      direction={{ ['base']: 'column', ['md']: 'row' }}
      spacing={4}
      display="flex"
      justifyContent={'center'}
      marginTop={'2rem !important'}
      marginBottom={'2rem !important'}
    >
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
          Bli medlem
        </Button>
      </Link>
      <Link href="/om-oss">
        <Button minW="250px" rounded={'full'}>
          Hvorfor CrossFit Øyro
        </Button>
      </Link>
      <Link href="/om-oss">
        <Button minW="150px" rounded={'full'}>
          Booking
        </Button>
      </Link>
    </Stack>
  )
}

export default ActionButtons
