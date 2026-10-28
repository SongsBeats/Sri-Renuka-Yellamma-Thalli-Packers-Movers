export const business = {
  name: 'Sri Renuka Yellamma Thalli Packers & Movers',
  shortName: 'Sri Renuka Yellamma Thalli',
  tagline: 'PACKERS & MOVERS',
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
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Plot+No.+8-8-491,+Tapovan+Colony,+Karmanghat,+Hyderabad,+Telangana+500079',
} as const;

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
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
