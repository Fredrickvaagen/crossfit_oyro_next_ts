import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  useColorModeValue,
  Stack,
  Popover,
  Text,
  PopoverTrigger,
  PopoverContent,
  Flex,
  Icon,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { NavItem, NAV_ITEMS } from './NavItems'

export const DesktopNav = () => {
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200')
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={navItem.href ?? '#'}>
                <ChakraLink
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={ChakraLinkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: ChakraLinkHoverColor,
                  }}
                >
                  {navItem.label}
                </ChakraLink>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href ?? '/'}>
      <ChakraLink
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black.400' }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'black.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    </Link>
  )
}
