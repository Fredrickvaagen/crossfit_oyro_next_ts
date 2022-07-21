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
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Medlemskap',
    href: '/medlemskap',
  },
  // {
  //   label: 'Timeplan og Booking',
  //   href: '/timeplan-og-booking',
  // },
  {
    label: 'Øyro Kids',
    href: '/kids',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
]
