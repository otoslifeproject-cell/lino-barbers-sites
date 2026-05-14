export type Shop = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
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
    tagline: 'Classic Cambridge barbering with real heritage.',
    intro: 'A heritage-led barber identity for one of Lino’s Cambridge shops. Keep the tone confident, established and understated.',
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
    tagline: 'Your local Histon barber — easy booking, proper cuts.',
    intro: 'A warmer local identity for Histon, focused on convenience, trust and village/community feel.',
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
      { name: 'Haircut', price: '£18', note: 'Confirm current price with Lino.' },
      { name: 'Skin fade', price: '£20', note: 'Confirm current price with Lino.' },
      { name: 'Haircut & beard', price: '£25+', note: 'Confirm current price with Lino.' },
      { name: 'Kids cut', price: '£15', note: 'Confirm current price with Lino.' },
    ],
    openingHours: defaultHours,
  },
  {
    slug: 'parkers-barbers',
    name: "Parker's Barbers",
    shortName: "Parker's",
    tagline: 'Sharp, clean barbering for Cambridge.',
    intro: 'A more modern identity for Parker’s. Do not treat Parker’s as a competitor — this is Lino’s third shop.',
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
