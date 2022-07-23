export type MembershipProps = {
  title: string
  price: string
  currency: string
  listItems: string[]
  monthly: boolean
  mostValue: boolean
}

export const featured_memberships: MembershipProps[] = [
  {
    title: 'Klippekort (12/6 klipp)',
    currency: 'kr',
    price: '1500/850',
    monthly: false,
    mostValue: false,

    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Tren når du vil!',
    ],
  },
  {
    title: '12 MÅNEDER',
    currency: 'kr',
    price: '750',
    monthly: true,
    mostValue: true,
    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
  {
    title: 'LØPENDE',
    currency: 'kr',
    price: '900',
    monthly: true,
    mostValue: false,
    listItems: [
      'Ingen binding',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
]

export const memberships: MembershipProps[] = [
  {
    title: 'Klippekort (12/6 klipp)',
    currency: 'kr',
    price: '1500/850',
    monthly: false,
    mostValue: false,

    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Tren når du vil!',
    ],
  },
  {
    title: '12 MÅNEDER',
    currency: 'kr',
    price: '750',
    monthly: true,
    mostValue: true,
    listItems: [
      'Gyldighet 12 måneder',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
  {
    title: 'LØPENDE',
    currency: 'kr',
    price: '900',
    monthly: true,
    mostValue: false,
    listItems: [
      'Ingen binding',
      'Gratis introkurs (verdi 1200 kr)',
      'Studentrabatt (-100,- kr)',
    ],
  },
  {
    title: 'DROPIN',
    currency: 'kr',
    price: '150',
    monthly: false,
    mostValue: false,
    listItems: [],
  },
]
