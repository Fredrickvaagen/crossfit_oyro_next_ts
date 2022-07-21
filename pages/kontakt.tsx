import { Box, SimpleGrid } from '@chakra-ui/react'
import ContactForm from './kontakt/ContactForm'
import GoogleMapIFrame from './kontakt/GoogleMapIFrame'

export default function Contact() {
  return (
    <SimpleGrid
      padding="2rem"
      height="auto"
      minChildWidth="400px"
      spacing="40px"
    >
      <Box height="auto">
        <ContactForm />
      </Box>
      <Box height="auto">
        <GoogleMapIFrame />
      </Box>
    </SimpleGrid>
  )
}
