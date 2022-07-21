import { Stack } from '@chakra-ui/react'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaGooglePlay,
  FaAppStore,
} from 'react-icons/fa'
import { SocialButton } from '../../../components/Footer'

function SocialButtons() {
  return (
    <>
      <Stack direction={'row'} spacing={6} justifyContent="center">
        <SocialButton
          label={'Facebook'}
          href={'https://www.facebook.com/groups/558065008681105'}
        >
          <FaFacebook />
        </SocialButton>
        <SocialButton
          label={'Instagram'}
          href={'https://www.instagram.com/crossfit_oyro/'}
        >
          <FaInstagram />
        </SocialButton>
        <SocialButton
          label={'Google Play Store'}
          href={
            'https://play.google.com/store/apps/details?id=com.bookingapp.syvfjell&hl=en&gl=US'
          }
        >
          <FaGooglePlay />
        </SocialButton>
        <SocialButton
          label={'Appstore'}
          href={
            'https://apps.apple.com/us/app/7-fjell-crossfit/id1370781770?uo=4&at=11l6hc&app=itunes&ct=fnd'
          }
        >
          <FaAppStore />
        </SocialButton>
      </Stack>
    </>
  )
}

export default SocialButtons
