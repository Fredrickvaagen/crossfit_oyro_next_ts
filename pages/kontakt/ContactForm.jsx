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
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import ContactInfo from './ContactInfo'

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor="name">Ditt navn</FormLabel>
                        <Input
                          id="name"
                          placeholder="Ditt navn"
                          {...register('name', {
                            required: 'Dette feltet er påkrevd',
                            minLength: {
                              value: 4,
                              message: 'Minumum lengde er 4 bokstaver',
                            },
                          })}
                        />
                        <FormErrorMessage>
                          {errors.name && errors.name.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl marginTop={2} isInvalid={errors.email}>
                        <FormLabel htmlFor="name">Email</FormLabel>
                        <Input
                          id="email"
                          placeholder="Email"
                          {...register('email', {
                            required: 'Dette feltet er påkrevd',
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: 'Dette er ikke en gyldig email',
                            },
                          })}
                        />
                        <FormErrorMessage>
                          {errors.email && errors.email.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl marginTop={2} isInvalid={errors.subject}>
                        <FormLabel htmlFor="subject">Emne</FormLabel>
                        <Input
                          id="subject"
                          placeholder="Emne"
                          {...register('subject', {
                            required: 'Dette feltet er påkrevd',
                            minLength: {
                              value: 4,
                              message: 'Minimum lengde er 4 bokstaver',
                            },
                          })}
                        />
                        <FormErrorMessage>
                          {errors.subject && errors.message.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl marginTop={2} isInvalid={errors.message}>
                        <FormLabel htmlFor="message">Emne</FormLabel>
                        <Textarea
                          id="subject"
                          placeholder="Melding"
                          {...register('message', {
                            required: 'Dette feltet er påkrevd',
                            minLength: {
                              value: 5,
                              message: 'Minimum lengde er 5 bokstaver',
                            },
                          })}
                        />
                        <FormErrorMessage>
                          {errors.message && errors.message.message}
                        </FormErrorMessage>
                      </FormControl>

                      <Button
                        mt={4}
                        width="100%"
                        colorScheme="yellow"
                        isLoading={isSubmitting}
                        type="submit"
                      >
                        Send
                      </Button>
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
