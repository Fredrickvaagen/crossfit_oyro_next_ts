import { Box, Flex, Stack } from '@chakra-ui/react'
import Video from '../../components/Video'
import ActionButtons from './heroSection/ActionButtons'
import Heading from './heroSection/Heading'
// import MyImage from './heroSection/Image'
import SocialButtons from './heroSection/SocialButtons'

export default function HeroSection() {
  return (
    <Stack
      direction={['column', 'column', 'column', 'column', 'row']}
      margin="0 auto"
      maxW="1440px"
      minHeight={['50vh', '50vh', '90vh']}
      padding="1.5rem"
    >
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack w={'full'} maxW={'lg'}>
          <Heading />
          <ActionButtons />
          <Box mb="2rem !important">
            <SocialButtons />
          </Box>
        </Stack>
      </Flex>
      <Flex align={'center'} justify="center">
        <Video />
      </Flex>
    </Stack>
  )
}
