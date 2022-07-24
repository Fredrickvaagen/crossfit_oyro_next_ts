import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SplitWithImage() {
  return (
    <>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'black.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('yellow.50', 'black.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              CrossFit Øyro
            </Text>
            <Heading>Hos oss er alle velkommen!</Heading>
            <Text fontSize={'lg'}>
              CrossFit Øyro er boxen for alle, uansett mål, treningsbakgrunn og
              alder. Vi har høyt fokus på samhold, godt humør og trivsel. Vårt
              unike miljø gir deg en ypperlig mulighet til å bli kjent med nye
              mennesker og skape nye vennskap. Våre dyktige trenere vil gi deg
              en trygg og grundig opplæring i CrossFit sine treningsprinsipper.
            </Text>
            <Text fontSize={'lg'}>
              Helt siden den spede start har vi hatt som mål å tilby noe for
              alle. Vi har plass til mosjonister, treningsglade, idrettsutøvere
              og crossfit-atleter. Vi har også et klart mål om å tilby noe til
              grupper som ikke har det så lett, og samarbeider derfor med en
              rekke aktører innen helse- og sosialt arbeid. Våre generelle mål
              er at alle som trener hos oss skal oppleve økt generell fysisk
              form, stor grad av trivsel og mestring.
            </Text>
            <Text fontSize={'lg'}>
              Terskelen for å komme i gang med crossfit hos oss skal være lav,
              og vi ta hjertelig imot deg som aldri har trent før i tillegg til
              deg som har trent masse.
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/owners.webp'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/murph.webp'}
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Heading>Vår visjon</Heading>
            <Text fontSize={'lg'}>
              Vår visjon er å møte det enkelte medlem der de er og gi den
              oppfølgingen de trenger på veien mot en bedre livsstil og helse.
              Hos oss vil du bli møtt med respekt, utfordringer og garantert god
              stemning!
            </Text>
            <Text fontSize={'lg'}>
              Først og fremst skal vi være imøtekommende og hjelpsomme med alle
              som titter hodet innenfor våre dører eller dukker opp på våre
              arrangementer. Deretter skal vi være dyktige og kompetente trenere
              som skal kunne gi deg den veiledningen, utviklingen og de
              utfordringer som DU trenger.
            </Text>
            <Text fontSize={'lg'}>
              Så hva driver vi med? Vi driver med konstant variert funksjonell
              trening utført med høy intensitet. Dette gjør vi med en blanding
              av olympisk vektløfting, styrkeløft, gymnastikk og
              kondisjonstrening(sykling, roing, løping). ALLE, uansett form,
              alder, kjønn, stil, erfaring og humør er velkommen hos oss.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}
