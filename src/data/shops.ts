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
  bookingMode: 'book-online-walk-in' | 'walk-ins-only';
  primaryCtaLabel: string;
  availabilityLine: string;
  heroImage: string;
  galleryImages: string[];
  seoTitle: string;
  seoDescription: string;
  localSeoHeading: string;
  localSeoBody: string;
  localSeoPoints: string[];
  highlights: { title: string; text: string }[];
  services: { name: string; price: string; note: string }[];
  openingHours: { day: string; hours: string }[];
};

const ilBarbiereHours = [
  { day: 'Monday', hours: '8:30am – 5:30pm' },
  { day: 'Tuesday', hours: '8:30am – 5:30pm' },
  { day: 'Wednesday', hours: '8:30am – 5:30pm' },
  { day: 'Thursday', hours: '8:30am – 5:30pm' },
  { day: 'Friday', hours: '8:30am – 5:30pm' },
  { day: 'Saturday', hours: '8:30am – 4:30pm' },
  { day: 'Sunday', hours: 'Closed' },
];

const histonHours = [
  { day: 'Monday', hours: '9:30am – 5:30pm' },
  { day: 'Tuesday', hours: '9:30am – 5:30pm' },
  { day: 'Wednesday', hours: '9:30am – 7:00pm' },
  { day: 'Thursday', hours: '9:30am – 5:30pm' },
  { day: 'Friday', hours: '9:30am – 5:30pm' },
  { day: 'Saturday', hours: '8:30am – 4:30pm' },
  { day: 'Sunday', hours: 'Closed' },
];

const parkersHours = [
  { day: 'Monday', hours: '9:00am – 6:30pm' },
  { day: 'Tuesday', hours: '9:00am – 6:30pm' },
  { day: 'Wednesday', hours: '9:00am – 6:30pm' },
  { day: 'Thursday', hours: '9:00am – 6:30pm' },
  { day: 'Friday', hours: '9:00am – 6:30pm' },
  { day: 'Saturday', hours: '9:00am – 5:30pm' },
  { day: 'Sunday', hours: '10:00am – 4:00pm' },
];

export const shops: Shop[] = [
  {
    slug: 'il-barbiere',
    name: 'Il Barbiere',
    shortName: 'Il Barbiere',
    kicker: 'Magdalene Street barber shop',
    tagline: 'Classic\nCambridge\nbarbering',
    intro: 'Established in 1991, Il Barbiere offers traditional walk-in barbering on Magdalene Street, close to Bridge Street, Quayside, Cambridge city centre and the punts on the River Cam.',
    serviceIntro: 'Walk in for classic barbering, from dry cuts and clipper cuts to shampoo cuts, student haircuts and younger customer cuts.',
    visualLabel: 'Established Cambridge barber',
    identityNote: 'Monochrome / classic / established',
    logo: '/logos/il-barbiere-logo.png',
    address: '22 Magdalene St, Cambridge CB3 0AF',
    phone: '01223 506914',
    email: '',
    booksyUrl: '',
    instagram: '',
    facebook: '',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=22%20Magdalene%20St%2C%20Cambridge%20CB3%200AF',
    theme: 'heritage',
    bookingMode: 'walk-ins-only',
    primaryCtaLabel: 'Plan your visit',
    availabilityLine: 'Walk-ins only',
    heroImage: '/images/il-barbiere/hero-01.png',
    galleryImages: ['/images/il-barbiere/gallery-01.jpg', '/images/il-barbiere/gallery-02.jpg', '/images/il-barbiere/gallery-03.jpg'],
    seoTitle: 'Il Barbiere | Walk-in Barber on Magdalene Street, Cambridge',
    seoDescription: 'Walk-in barbering at Il Barbiere, 22 Magdalene St, Cambridge CB3 0AF. Traditional cuts near Quayside, Bridge Street and the River Cam.',
    localSeoHeading: 'Traditional walk-in barber near Magdalene Street, Cambridge',
    localSeoBody: 'Il Barbiere is a long-established Cambridge barber for customers looking for a traditional walk-in cut near Magdalene Street, Bridge Street, Quayside and the historic city centre. A few steps from the punts on the River Cam, it is a convenient central Cambridge stop for straightforward barbering in a classic setting.',
    localSeoPoints: ['Magdalene Street location', 'Established in 1991', 'Near Quayside and the River Cam', 'Walk-ins only'],
    highlights: [
      { title: 'Walk-ins only', text: 'No online booking needed — check the opening hours and visit the shop.' },
      { title: 'Established 1991', text: 'Traditional Cambridge barbering on Magdalene Street.' },
      { title: 'Central location', text: 'Close to Bridge Street, Quayside and the city centre.' },
    ],
    services: [
      { name: 'Senior Citizens', price: '£16', note: 'Traditional senior citizens cut.' },
      { name: 'All Over Clipper Cut', price: '£15', note: 'Simple all-over clipper finish.' },
      { name: 'Dry Cut', price: '£19', note: 'Classic dry cut, finished properly.' },
      { name: 'Shampoo & Cut', price: '£20', note: 'Wash and cut service.' },
      { name: 'Shampoo, Cut & Blow Dry', price: '£23', note: 'Full wash, cut and blow dry finish.' },
      { name: 'Under 13 Cut', price: '£15', note: 'Younger customer haircut.' },
      { name: 'Student Haircuts', price: '£18', note: 'Monday to Friday with NUS card.' },
    ],
    openingHours: ilBarbiereHours,
  },
  {
    slug: 'histon-barbers',
    name: 'Histon Barber Shop',
    shortName: 'Histon',
    kicker: 'High Street barber in Histon',
    tagline: 'Your local Histon\nbarber — book online\nor walk in.',
    intro: 'A friendly high-street barber for Histon, Impington and north Cambridge, offering haircuts, skin fades, beard trims, shaves and younger customer cuts.',
    serviceIntro: 'Choose from everyday cuts, skin fades, beard trims, wet shaves, hot and cold shaves and younger customer cuts. Book online or walk in when available.',
    visualLabel: 'Local Histon barber shop',
    identityNote: 'Orange / friendly / village local',
    logo: '/logos/histon-logo.png',
    address: '2 High Street, Histon, Cambridge CB24 9LG',
    phone: '01223 233778',
    email: '',
    booksyUrl: 'https://booksy.com/en-gb/162646_histon-barbershop_barber_163129_histon#ba_s=seo',
    instagram: '',
    facebook: '',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=2%20High%20Street%2C%20Histon%2C%20Cambridge%20CB24%209LG',
    theme: 'village',
    bookingMode: 'book-online-walk-in',
    primaryCtaLabel: 'Book online or walk in',
    availabilityLine: 'Booksy bookings and walk-ins welcome',
    heroImage: '/images/histon-barbers/hero-01.jpg',
    galleryImages: ['/images/histon-barbers/gallery-01.png', '/images/histon-barbers/gallery-02.jpg', '/images/histon-barbers/gallery-03.jpg'],
    seoTitle: 'Histon Barber Shop | Barber in Histon and Impington',
    seoDescription: 'Book a haircut, skin fade, beard trim, wet shave or younger customer cut at Histon Barber Shop, 2 High Street, Histon, Cambridge CB24 9LG.',
    localSeoHeading: 'Local barber on Histon High Street',
    localSeoBody: 'Histon Barber Shop is the local high-street option for customers in Histon, Impington and north Cambridge who want a straightforward haircut, skin fade, beard trim, wet shave or younger customer cut. Find us on the High Street and book online or walk in when available.',
    localSeoPoints: ['Histon High Street location', 'Serving Histon and Impington', 'Haircuts, skin fades and shaves', 'Book online or walk in'],
    highlights: [
      { title: 'Book or walk in', text: 'Use Booksy for appointments, or walk in when the shop has space.' },
      { title: 'Local High Street shop', text: 'Easy to find at 2 High Street, Histon.' },
      { title: 'Full barber menu', text: 'Cuts, fades, beard trims, wet shaves and tidy finishes.' },
    ],
    services: [
      { name: 'Senior Citizens', price: '£16', note: 'Senior citizens haircut.' },
      { name: 'Skin Fade', price: '£20', note: 'Clean fade, shaped and finished properly.' },
      { name: 'Dry Cut', price: '£18', note: 'Classic dry cut.' },
      { name: 'Wash Cut & Dry', price: '£22', note: 'Wash, cut and dry finish.' },
      { name: 'Clipper Cut', price: 'from £15', note: 'All-over clipper cut.' },
      { name: 'Students', price: '£16', note: 'Student haircut, Monday to Friday.' },
      { name: 'Under 12 Cut', price: '£15', note: 'Younger customer haircut.' },
      { name: 'Beard Trim', price: '£7', note: 'Simple beard trim and tidy.' },
      { name: 'Wet Shave', price: '£14', note: 'Traditional wet shave.' },
      { name: 'Hot & Cold Shave', price: '£20', note: 'Hot and cold shave service.' },
      { name: 'Family Offer', price: '£2 off', note: 'Family haircut offer.' },
    ],
    openingHours: histonHours,
  },
  {
    slug: 'parkers-barbers',
    name: "Parker's Barber Shop",
    shortName: "Parker's",
    kicker: 'St Andrew’s Street barber shop',
    tagline: 'Clean lines.\nSharp fades.\nEasy appointments.',
    intro: 'A contemporary Cambridge city-centre barber on St Andrew’s Street, offering skin fades, restyles, dry cuts, wash and cuts, beard shaping and Hot and Cold Towel Shaves.',
    serviceIntro: 'Choose from sharp skin fades, restyles, dry cuts, wash and cuts, beard shaping, Hot and Cold Towel Shaves and clipper cuts. Book online or walk in when available.',
    visualLabel: 'Cambridge city-centre barber',
    identityNote: 'Green / sharp / contemporary',
    logo: '/logos/parkers-logo.png',
    address: "39a St Andrew's St, Cambridge CB2 3AR",
    phone: '01223 471582',
    email: '',
    booksyUrl: 'https://booksy.com/en-gb/160552_parkers-barbershop_barber_148251_cambridge#ba_s=seo',
    instagram: '',
    facebook: '',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=39a%20St%20Andrew%27s%20St%2C%20Cambridge%20CB2%203AR',
    theme: 'modern',
    bookingMode: 'book-online-walk-in',
    primaryCtaLabel: 'Book online or walk in',
    availabilityLine: 'Booksy bookings and walk-ins welcome',
    heroImage: '/images/parkers-barbers/hero-01.png',
    galleryImages: ['/images/parkers-barbers/gallery-01.png', '/images/parkers-barbers/gallery-02.png', '/images/parkers-barbers/gallery-03.png'],
    seoTitle: "Parker's Barber Shop | Barber on St Andrew’s Street, Cambridge",
    seoDescription: "Book online or walk in at Parker’s Barber Shop, 39a St Andrew's St, Cambridge CB2 3AR. Skin fades, restyles, dry cuts, beard shaping and Hot and Cold Towel Shaves.",
    localSeoHeading: 'City-centre barber on St Andrew’s Street, Cambridge',
    localSeoBody: 'Parker’s Barber Shop is for Cambridge city-centre customers looking for a clean haircut, sharp skin fade, restyle, beard shape or Hot and Cold Towel Shave close to St Andrew’s Street, the Grand Arcade and central shopping streets. Book online or walk in when available.',
    localSeoPoints: ['St Andrew’s Street location', 'Cambridge city-centre barber', 'Skin fades, restyles and Hot and Cold Towel Shaves', 'Book online or walk in'],
    highlights: [
      { title: 'Book or walk in', text: 'Use Booksy for appointments, or walk in when the shop has space.' },
      { title: 'City-centre location', text: 'Find Parker’s on St Andrew’s Street in central Cambridge.' },
      { title: 'Sharp modern services', text: 'Skin fades, restyles, beard shaping and Hot and Cold Towel Shaves.' },
    ],
    services: [
      { name: 'Skin Fade', price: '£25', note: 'Sharp fade, shaped and finished properly.' },
      { name: 'Restyle', price: '£27', note: 'A fuller cut and restyle service.' },
      { name: 'Dry Cut', price: '£20', note: 'Clean dry cut.' },
      { name: 'Wash & Cut', price: '£23', note: 'Wash and cut finish.' },
      { name: 'Beard Shaping', price: '£10', note: 'Beard shape and tidy.' },
      { name: 'Hot & Cold Towel Shaving', price: '£20', note: 'Towel shave service.' },
      { name: 'All Over Clipper', price: '£17', note: 'Simple all-over clipper cut.' },
      { name: 'Senior Citizens', price: '£17', note: 'Senior citizens haircut.' },
      { name: 'Under 15 Cut', price: '£15', note: 'Younger customer haircut.' },
      { name: 'Students with NUS Card', price: '£19', note: 'Student haircut with valid NUS card.' },
    ],
    openingHours: parkersHours,
  },
];

export function getShop(slug: string) {
  return shops.find((shop) => shop.slug === slug);
}
