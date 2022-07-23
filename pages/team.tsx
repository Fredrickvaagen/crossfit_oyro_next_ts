import {
  Wrap,
  WrapItem,
  Center,
  Image,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react'
import React from 'react'

function Team() {
  return (
    <>
      <Box pl={['0.5rem', '2rem']} pt={['0.5rem', '2rem']}>
        <Heading>VÅRE TRENERE</Heading>
      </Box>
      <Wrap height="auto" padding={['0.5rem', '2rem']}>
        <WrapItem>
          <Center maxW="700px" h="auto">
            <Box padding="1rem">
              <Image
                maxHeight={'350px'}
                borderRadius={'4px'}
                src="/kristine.jpeg"
                alt="Kristine Aakre"
              />
              <Box>
                <Heading paddingBottom="1rem" paddingTop={'1rem'}>
                  KRISTINE AAKRE
                </Heading>
                <Text fontWeight={'bold'} paddingBottom="1rem">
                  Daglig leder, personlig trener og CrossFit Level 1 coach.
                </Text>
                <Text>
                  Kristine – hobbiten mellom de 7 fjell! Kristine er en dame
                  proppfull av energi, godt humør og alltid klar for nye
                  eventyr. Hun gløder på trening, og med flere års erfaring som
                  personlig trener sitter hun på masse kunnskap. Denne damen
                  lager knallgod stemning på trening, og er rett og slett en
                  skikkelig motivator.{' '}
                </Text>
              </Box>
            </Box>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center maxW="700px" h="auto">
            <Box padding="1rem">
              <Image
                maxHeight={'350px'}
                borderRadius={'4px'}
                src="/tim.jpeg"
                alt="Tim Herland"
              />
              <Box>
                <Heading paddingBottom="1rem" paddingTop={'1rem'}>
                  Tim Herland
                </Heading>
                <Text fontWeight={'bold'} paddingBottom="1rem">
                  CrossFit Level 1 coach, klatreleder inne og medeier av 7 Fjell
                  CrossFit
                </Text>
                <Text>
                  Tim er en person som motiveres av å motivere andre. Han er en
                  person med mange gode egenskaper og stortrives å jobbe med
                  mennesker. Han ser hver enkelt person for den de er og gir dem
                  en ekstra boost på treningen med sitt gode humør! Tim jobber
                  aktivt med mennesker hos Trappen Motiveringssenter, Wayback
                  Bergen og Idrett Bergen Sør.
                </Text>
              </Box>
            </Box>
          </Center>
        </WrapItem>
      </Wrap>
    </>
  )
}

export default Team
