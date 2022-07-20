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
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              CrossFit Øyro
            </Text>
            <Heading>Hos oss er alle velkommen!</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              7Fjell CrossFit er boxen for alle, uansett mål, treningsbakgrunn
              og alder. Vi har høyt fokus på samhold, godt humør og trivsel.
              Vårt unike miljø gir deg en ypperlig mulighet til å bli kjent med
              nye mennesker og skape nye vennskap. Våre dyktige trenere vil gi
              deg en trygg og grundig opplæring i CrossFit sine
              treningsprinsipper.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Helt siden den spede start har vi hatt som mål å tilby noe for
              alle. Vi har plass til mosjonister, treningsglade, idrettsutøvere
              og crossfit-atleter. Vi har også et klart mål om å tilby noe til
              grupper som ikke har det så lett, og samarbeider derfor med en
              rekke aktører innen helse- og sosialt arbeid. Våre generelle mål
              er at alle som trener hos oss skal oppleve økt generell fysisk
              form, stor grad av trivsel og mestring.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Terskelen for å komme i gang med crossfit hos oss skal være lav,
              og vi ta hjertelig imot deg som aldri har trent før i tillegg til
              deg som har trent masse.
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'/background.jpg'}
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
              src={'/background.jpg'}
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'black.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              CrossFit Øyro
            </Text>
            <Heading>VÅR VISJON!</Heading>
            <Heading>Trening for alle!</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Vår visjon er å møte det enkelte medlem der de er og gi den
              oppfølgingen de trenger på veien mot en bedre livsstil og helse.
              Hos oss vil du bli møtt med respekt, utfordringer og garantert god
              stemning!
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Først og fremst skal vi være imøtekommende og hjelpsomme med alle
              som titter hodet innenfor våre dører eller dukker opp på våre
              arrangementer. Deretter skal vi være dyktige og kompetente trenere
              som skal kunne gi deg den veiledningen, utviklingen og de
              utfordringer som DU trenger.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Så hva driver vi med? Vi driver med konstant variert funksjonell
              trening utført med høy intensitet. Dette gjør vi med en blanding
              av olympisk vektløfting, styrkeløft, gymnastikk og
              kondisjonstrening(sykling, roing, løping). ALLE, uansett form,
              alder, kjønn, stil, erfaring og humør er velkommen hos oss.
            </Text>
            <Heading>CrossFit er for alle!</Heading>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}