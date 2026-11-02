export const business = {
  name: 'Sri Renuka Yellamma Thalli Packers & Movers',
  shortName: 'Sri Renuka Yellamma Thalli',
  tagline: 'Packers & Movers',
  phoneDisplay: '+91 77994 51430',
  phoneTel: 'tel:+917799451430',
  phoneRaw: '917799451430',
  whatsappUrl: 'https://wa.me/917799451430',
  email: null as string | null,
  address: {
    line1: 'Plot No. 8-8-491, Tapovan Colony',
    line2: 'Karmanghat, Hyderabad, Telangana – 500079',
    country: 'India',
    full: 'Plot No. 8-8-491, Tapovan Colony, Karmanghat, Hyderabad, Telangana – 500079, India.',
  },
  city: 'Hyderabad',
  locality: 'Karmanghat',
  state: 'Telangana',
  postalCode: '500079',
  country: 'IN',
  description:
    'Packing and moving services for home and office relocation in Hyderabad, based in Karmanghat.',
  // Embeddable Google Map (no API key needed). Replace with the Google Business
  // Profile / Maps share link once the listing is live, if preferred.
  mapEmbedUrl:
    'https://www.google.com/maps?q=Plot+No.+8-8-491,+Tapovan+Colony,+Karmanghat,+Hyderabad,+Telangana+500079&output=embed',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Plot+No.+8-8-491,+Tapovan+Colony,+Karmanghat,+Hyderabad,+Telangana+500079',
} as const;

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'Contact', path: '/contact' },
] as const;

export const serviceAreas = [
  'Karmanghat',
  'LB Nagar',
  'Bairamalguda',
  'Vanasthalipuram',
  'Saroornagar',
  'Dilsukhnagar',
  'Kothapet',
  'Champapet',
  'Meerpet',
  'BN Reddy Nagar',
] as const;

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  whatsappMessage: string;
  image?: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    id: 'home-shifting',
    number: '01',
    title: 'Home Shifting',
    description:
      'Help with planning the movement of household belongings, furniture, and appliances to your next home.',
    whatsappMessage:
      'Hello, I would like to discuss a home shifting enquiry with Sri Renuka Yellamma Thalli Packers & Movers.',
    image: '/images/home-shifting.jpg',
    featured: true,
  },
  {
    id: 'office-relocation',
    number: '02',
    title: 'Office Relocation',
    description:
      'Moving support for office furniture, equipment, and business belongings within Hyderabad.',
    whatsappMessage:
      'Hello, I would like to discuss an office relocation enquiry with Sri Renuka Yellamma Thalli Packers & Movers.',
    image: '/images/office-relocation.jpg',
    featured: true,
  },
  {
    id: 'local-moving',
    number: '03',
    title: 'Local Moving',
    description:
      'Relocation services within Hyderabad and nearby areas served from Karmanghat.',
    whatsappMessage:
      'Hello, I would like to discuss a local moving enquiry within Hyderabad.',
  },
  {
    id: 'long-distance',
    number: '04',
    title: 'Long-Distance Moving',
    description:
      'Transportation support for moves between cities, subject to service availability for your route.',
    whatsappMessage:
      'Hello, I would like to discuss a long-distance moving enquiry and check if my route is covered.',
  },
  {
    id: 'packing-unpacking',
    number: '05',
    title: 'Packing & Unpacking',
    description:
      'Packing assistance to help prepare belongings for transportation, with unpacking support as needed.',
    whatsappMessage:
      'Hello, I would like to discuss packing and unpacking support for my move.',
  },
  {
    id: 'loading-unloading',
    number: '06',
    title: 'Loading & Unloading',
    description:
      'Assistance with moving packed goods between the property and the transport vehicle.',
    whatsappMessage:
      'Hello, I would like to discuss loading and unloading assistance for my relocation.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Move',
    description:
      'Share the current location, destination, moving date, and requirements.',
  },
  {
    number: '02',
    title: 'Discuss Your Requirements',
    description:
      'Explain the items to be moved and the type of service needed.',
  },
  {
    number: '03',
    title: 'Receive a Quote',
    description:
      'Discuss the expected costs and scope of service with the business.',
  },
  {
    number: '04',
    title: 'Schedule Your Move',
    description:
      'Confirm the date and arrangements directly with the business.',
  },
] as const;

export const whyChoosePoints = [
  {
    title: 'Thoughtful Handling',
    description:
      'Careful attention to belongings during packing, loading, and relocation.',
  },
  {
    title: 'Practical Moving Support',
    description:
      'Clear guidance to help you understand the services your move may need.',
  },
  {
    title: 'Clear Communication',
    description:
      'Straightforward discussion of requirements, timing, and next steps.',
  },
  {
    title: 'Convenient Enquiries',
    description:
      'Reach out easily by phone or WhatsApp to discuss your relocation.',
  },
] as const;

export const trustItems = [
  'Home & Office Relocation',
  'Packing & Moving',
  'Local Transportation',
  'Enquiry Support',
] as const;

// ---------------------------------------------------------------------------
// PLACEHOLDERS - NOT YET CONFIRMED BY THE BUSINESS OWNER.
// Update these values, then set the matching *Confirmed flag to true.
// Everything on the site (footer, contact page, JSON-LD schema) reads from here.
// ---------------------------------------------------------------------------

/** TODO(owner): confirm real opening hours - these are PLACEHOLDERS. */
export const businessHours = {
  confirmed: false,
  /** Human readable rows shown on the site. */
  rows: [
    { days: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  /** Machine readable rows used for schema.org openingHoursSpecification. */
  schema: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
} as const;

/**
 * TODO(owner): approximate centre of Karmanghat locality (public data), NOT the
 * exact plot. Replace with the exact latitude/longitude of the shop from Google Maps.
 */
export const geo = {
  confirmed: false,
  latitude: 17.34111,
  longitude: 78.53167,
} as const;

/**
 * TODO(owner): live website URL (e.g. 'https://www.yourdomain.in'). Used for the
 * static JSON-LD in index.html. Leave empty until a domain is connected; the
 * runtime schema falls back to the current origin.
 */
export const siteUrl = '';

/** Pre-filled WhatsApp opening message used by the floating button and Call/WhatsApp buttons. */
export const whatsappDefaultMessage =
  'Hello, I would like to enquire about packing and moving services with Sri Renuka Yellamma Thalli Packers & Movers.';

export type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

/** Real business photos (the same ones used on the Google Business Profile). */
export const galleryImages: GalleryImage[] = [
  {
    id: 'truck-front',
    src: '/images/gallery/sryt-truck-front.webp',
    width: 640,
    height: 640,
    alt: 'Front of a Sri Renuka Yellamma Thalli Packers & Movers truck in Karmanghat, Hyderabad',
    caption: 'Our branded moving truck',
  },
  {
    id: 'fleet',
    src: '/images/gallery/sryt-fleet.webp',
    width: 1400,
    height: 630,
    alt: 'Fleet of Sri Renuka Yellamma Thalli Packers & Movers trucks decorated with garlands in Karmanghat, Hyderabad',
    caption: 'Our fleet, ready for your move',
  },
  {
    id: 'packing-materials',
    src: '/images/gallery/sryt-packing-materials.webp',
    width: 1280,
    height: 577,
    alt: 'Moving blanket and bubble wrap packing materials used by Sri Renuka Yellamma Thalli Packers & Movers, Karmanghat, Hyderabad',
    caption: 'Packing materials: blankets, bubble wrap and stretch film',
  },
  {
    id: 'loaded-truck',
    src: '/images/gallery/sryt-loaded-truck.webp',
    width: 1280,
    height: 576,
    alt: 'Sri Renuka Yellamma Thalli Packers & Movers truck loaded with household goods in Karmanghat, Hyderabad',
    caption: 'A truck loaded with household goods',
  },
  {
    id: 'office',
    src: '/images/gallery/sryt-office-karmanghat.webp',
    width: 1280,
    height: 576,
    alt: 'Office entrance of Sri Renuka Yellamma Thalli Packers & Movers at Tapovan Colony, Karmanghat, Hyderabad',
    caption: 'Our office at Tapovan Colony, Karmanghat',
  },
];
