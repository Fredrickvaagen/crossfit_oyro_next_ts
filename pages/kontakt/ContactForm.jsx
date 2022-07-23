import {
  Container,
  Flex,
  Box,
  Button,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
} from '@chakra-ui/react'
import ContactInfo from './ContactInfo'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORM ?? 'xlezqwoo'
  )

  return (
    <Container maxW="full">
      <Flex>
        <Box color="black" borderRadius="lg">
          <Box>
            <Wrap>
              <ContactInfo />

              <WrapItem width={'100%'} p="1rem">
                <Box width={'100%'} bg="white" borderRadius="lg">
                  <Box color="#0B0E3F">
                    <form onSubmit={handleSubmit}>
                      <FormControl>
                        <FormLabel htmlFor="name">Ditt navn</FormLabel>
                        <Input
                          id="name"
                          placeholder="Ditt navn"
                          name="name"
                          disabled={state.isSubmitting || state.succeeded}
                          minLength={3}
                        />

                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </FormControl>
                      <FormControl marginTop={2}>
                        <FormLabel htmlFor="name">Email</FormLabel>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          disabled={state.isSubmitting || state.succeeded}
                          minLength={5}
                        />

                        <ValidationError
                          prefix="email"
                          field="email"
                          errors={state.errors}
                        />
                      </FormControl>
                      <FormControl marginTop={2}>
                        <FormLabel htmlFor="subject">Emne</FormLabel>
                        <Input
                          disabled={state.isSubmitting || state.succeeded}
                          id="subject"
                          placeholder="Emne"
                          name="subject"
                          minLength={4}
                        />
                        <ValidationError
                          prefix="Subject"
                          field="subject"
                          errors={state.errors}
                        />
                      </FormControl>
                      <FormControl marginTop={2}>
                        <FormLabel htmlFor="message">Emne</FormLabel>
                        <Textarea
                          disabled={state.isSubmitting || state.succeeded}
                          id="message"
                          placeholder="Melding"
                          name="message"
                          minLength={10}
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </FormControl>

                      {state.succeeded ? (
                        <Text mt="1rem" color="green">
                          Takk for meldingen. Vi vil kontakte deg så snart som
                          mulig!
                        </Text>
                      ) : (
                        <Button
                          mt={4}
                          width="100%"
                          colorScheme="yellow"
                          disabled={state.submitting}
                          type="submit"
                          data-sitekey="reCAPTCHA_site_key"
                        >
                          Send
                        </Button>
                      )}
                      {state.errors && state.errors.length > 0 && (
                        <Text mt="1rem" color="red">
                          Noe gikk galt. Vennligst prøv igjen.{' '}
                          {state.errors.map((error) => error.message)}
                        </Text>
                      )}
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
