export type Shop = {
  slug: string;
  name: string;
  shortName: string;
  kicker: string;
  tagline: string;
  intro: string;
  serviceIntro: string;
  visualLabel: string;
  identityNote: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
  booksyUrl: string;
  instagram: string;
  facebook: string;
  googleMapsUrl: string;
  theme: 'heritage' | 'village' | 'modern';
  seoTitle: string;
  seoDescription: string;
  services: { name: string; price: string; note: string }[];
  openingHours: { day: string; hours: string }[];
};

const sharedServices = [
  { name: 'Haircut', price: 'Confirm', note: 'Classic cut, finished properly.' },
  { name: 'Skin fade', price: 'Confirm', note: 'Clean fade, shaped to suit.' },
  { name: 'Haircut & beard', price: 'Confirm', note: 'Cut, beard shape and finish.' },
  { name: 'Kids cut', price: 'Confirm', note: 'Friendly, simple and reliable.' },
];

const defaultHours = [
  { day: 'Monday', hours: 'Confirm' },
  { day: 'Tuesday', hours: 'Confirm' },
  { day: 'Wednesday', hours: 'Confirm' },
  { day: 'Thursday', hours: 'Confirm' },
  { day: 'Friday', hours: 'Confirm' },
  { day: 'Saturday', hours: 'Confirm' },
  { day: 'Sunday', hours: 'Confirm' },
];

export const shops: Shop[] = [
  {
    slug: 'il-barbiere',
    name: 'Il Barbiere',
    shortName: 'Il Barbiere',
    kicker: 'Established Cambridge barbering',
    tagline: 'Classic cuts. Quiet confidence. No fuss.',
    intro: 'A black-and-white heritage treatment for Il Barbiere: simple, established and understated. This is a bonus/goodwill site unless Lino confirms it as part of the live job.',
    serviceIntro: 'A restrained service menu. Keep final prices and live availability inside Booksy once the correct booking link is confirmed.',
    visualLabel: 'Black & white heritage direction',
    identityNote: 'Monochrome / classic / established',
    logo: '/logos/il-barbiere-logo.svg',
    address: 'Needs Lino confirmation',
    phone: 'Needs Lino confirmation',
    email: 'Needs Lino confirmation',
    booksyUrl: 'Needs Lino confirmation',
    instagram: 'Needs Lino confirmation',
    facebook: 'Needs Lino confirmation',
    googleMapsUrl: '#',
    theme: 'heritage',
    seoTitle: 'Il Barbiere | Cambridge Barber',
    seoDescription: 'Classic Cambridge barbering, easy online booking and a proper local service.',
    services: sharedServices,
    openingHours: defaultHours,
  },
  {
    slug: 'histon-barbers',
    name: 'Histon Barbers',
    shortName: 'Histon',
    kicker: 'High Street barber in Histon',
    tagline: 'Your local Histon barber — easy booking, proper cuts.',
    intro: 'A warm orange-led identity for Histon Barbers: friendly, local, village-centred and easy to book from a phone.',
    serviceIntro: 'Simple, familiar services for local customers. Prices below are from the current Booksy listing and should be confirmed before launch.',
    visualLabel: 'Warm local Histon direction',
    identityNote: 'Orange / friendly / village local',
    logo: '/logos/histon-logo.png',
    address: '2 High Street, Histon, Cambridge CB24 9LG — confirm with Lino',
    phone: '01223 236692 — confirm with Lino',
    email: 'Needs Lino confirmation',
    booksyUrl: 'https://booksy.com/en-gb/162646_histon-barbershop_barber_163129_histon#ba_s=seo',
    instagram: 'Needs Lino confirmation',
    facebook: 'Needs Lino confirmation',
    googleMapsUrl: '#',
    theme: 'village',
    seoTitle: 'Histon Barbers | Barber in Histon, Cambridge',
    seoDescription: 'Book a haircut, skin fade, beard trim or kids cut at Histon Barbers.',
    services: [
      { name: 'Haircut', price: '£18', note: 'Classic local haircut. Confirm current price with Lino.' },
      { name: 'Skin fade', price: '£20', note: 'Clean fade, shaped and finished properly.' },
      { name: 'Haircut & beard', price: '£25+', note: 'Cut, beard shape and tidy finish.' },
      { name: 'Kids cut', price: '£15', note: 'Friendly, simple and reliable.' },
    ],
    openingHours: defaultHours,
  },
  {
    slug: 'parkers-barbers',
    name: "Parker's Barbers",
    shortName: "Parker's",
    kicker: 'Sharp Cambridge barbering',
    tagline: 'Clean lines. Sharp fades. Fresh appointments.',
    intro: 'A green-led contemporary identity for Parker’s Barbers: sharper, more modern and more appointment-led than Histon.',
    serviceIntro: 'Keep the menu punchy and modern. Use Booksy as the live source of availability and final prices once Lino confirms the correct link.',
    visualLabel: 'Green modern Parker’s direction',
    identityNote: 'Green / sharp / contemporary',
    logo: '/logos/parkers-logo.svg',
    address: 'Needs Lino confirmation',
    phone: 'Needs Lino confirmation',
    email: 'Needs Lino confirmation',
    booksyUrl: 'Needs Lino confirmation',
    instagram: 'Needs Lino confirmation',
    facebook: 'Needs Lino confirmation',
    googleMapsUrl: '#',
    theme: 'modern',
    seoTitle: "Parker's Barbers | Cambridge Barber",
    seoDescription: 'Book online at Parker’s Barbers in Cambridge.',
    services: sharedServices,
    openingHours: defaultHours,
  },
];

export function getShop(slug: string) {
  return shops.find((shop) => shop.slug === slug);
}
