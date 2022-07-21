import { Box, SimpleGrid } from '@chakra-ui/react'
import ContactForm from './kontakt/ContactForm'
import GoogleMapIFrame from './kontakt/GoogleMapIFrame'

export default function Contact() {
  return (
    <SimpleGrid minChildWidth={['auto', '500px']} padding={['1rem', '2rem']}>
      <Box>
        <ContactForm />
      </Box>
      <Box>
        <GoogleMapIFrame />
      </Box>
    </SimpleGrid>
  )
}
