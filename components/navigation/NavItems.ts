export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Hjem',
    href: '/',
  },
  {
    label: 'Om oss',
    href: '/om-oss',
    children: [
      {
        label: 'Vårt team',
        subLabel: '',
        href: '/team',
      },
      {
        label: 'Bilder',
        subLabel: '',
        href: '/bilder',
      },
    ],
  },
  {
    label: 'Medlemskap',
    href: '/medlemskap',
  },
  {
    label: 'Timeplan og Booking',
    href: '#',
  },
  {
    label: 'CF Kidz',
    href: '#',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
]
