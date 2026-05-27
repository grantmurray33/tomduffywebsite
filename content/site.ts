export const firm = {
  name: 'Tom Duffy, CPA, P.A. & P.C.',
  shortName: 'Tom Duffy CPA',
  tagline:
    'Creative Planning and Consulting for Tax Minimization and Wealth Preservation.',
  description:
    'Greater Chicago-based CPA firm specializing in international taxation, Puerto Rico Act 60 planning, and U.S. tax compliance for high-net-worth individuals and businesses.',
  email: 'info@tomduffycpa.com',
  phone: '847-621-2966',
  phoneHref: 'tel:+18476212966',
  location: 'Greater Chicago Area',
  referralOnly:
    'Due to unprecedented demand for our services, we are currently accepting new clients by referral only.',
} as const;

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
] as const;

export const homeQuote = {
  text: 'Anyone may so arrange his affairs that his taxes shall be as low as possible; he is not bound to choose that pattern which will best pay the Treasury; there is not even a patriotic duty to increase one\'s taxes…',
  attribution: 'Judge Learned Hand, Helvering v. Gregory, 69 F.2d 809 (2d Cir. 1934)',
} as const;

export const articlesQuote = {
  text: 'In America there are two tax systems, one for the informed and one for the uninformed. Both systems are legal.',
  attribution: 'U.S. Appeals Court Justice Learned Hand (1935)',
} as const;

export const tomDuffyPhoto = {
  src: '/images/tom-duffy.jpg',
  alt: 'Tom Duffy, Certified Public Accountant and founder of Tom Duffy, CPA, P.A. & P.C.',
  width: 600,
  height: 800,
} as const;

export const aboutTom = {
  headline: 'About Tom Duffy',
  name: 'Tom Duffy',
  role: 'Founder · Tom Duffy, CPA, P.A. & P.C.',
  summary:
    'Tom Duffy is a Certified Public Accountant and founder of Tom Duffy, CPA, P.A. & P.C. Based in the greater Chicago area, he advises high-net-worth individuals and other demanding clients on complex tax planning, tax minimization, and international tax matters, with a particular focus on Puerto Rico and U.S. possession-related issues.',
  bioExtended: `Tom guides clients through the maze of tax and regulatory issues surrounding complex planning and minimization strategies. His experience at elite international accounting firms supports a comprehensive, global approach to bespoke tax planning and compliance.

He provides domestic and international tax planning advice to clients across a range of industries worldwide, contributes to industry trade journals, and is a frequent presenter at conferences throughout the United States and Puerto Rico. Tom also works with prestigious U.S. law firms on accounting and tax matters for clients facing civil and criminal non-compliance challenges.`,
  credentials: [
    'Certified Public Accountant',
    'University of Florida graduate',
    'Focused on complex tax planning and international taxation',
  ] as const,
} as const;

export const homeHeroSlides = [
  {
    id: 'puerto-rico',
    eyebrow: 'Puerto Rico Tax Planning',
    headline: 'Navigate Act 60 with confidence',
    description:
      'Specialized guidance for bona fide residency, U.S. federal compliance, and Puerto Rico incentive planning — from one of the few firms focused on this complex intersection.',
    cta: { label: 'Puerto Rico services', href: '/services/puerto-rico-tax-planning' },
  },
  {
    id: 'tax-minimization',
    eyebrow: 'Tax Minimization Strategies',
    headline: 'Lawful planning for complex tax matters',
    description:
      'Creative planning and consulting for domestic and international tax minimization — tailored strategies for high-net-worth individuals and businesses.',
    cta: { label: 'Explore our services', href: '/services' },
  },
  {
    id: 'wealth-preservation',
    eyebrow: 'Wealth Preservation Consulting',
    headline: 'Preserve what you have built',
    description:
      'We guide clients through wealth preservation techniques, compliance, and representation — with deep expertise in U.S. tax obligations at home and abroad.',
    cta: { label: 'About the firm', href: '/about' },
  },
] as const;

export const homeServiceCards = [
  {
    title: 'Puerto Rico Tax Services',
    description:
      'Act 60 planning, bona fide residency, and IRS representation for residents of Puerto Rico.',
    href: '/services/puerto-rico-tax-planning',
    icon: 'puerto-rico' as const,
  },
  {
    title: 'Domestic Tax Services',
    description:
      'Federal tax planning, compliance, and representation for individuals and businesses.',
    href: '/services/domestic-tax-services',
    icon: 'domestic' as const,
  },
  {
    title: 'International Tax Planning',
    description:
      'Cross-border planning, treaty analysis, and compliance for global operations.',
    href: '/services/international-tax-services',
    icon: 'international' as const,
  },
  {
    title: 'Wealth Preservation',
    description:
      'Tax minimization and wealth preservation strategies tailored to each client.',
    href: '/services',
    icon: 'wealth' as const,
  },
  {
    title: 'Foreign Trust Services',
    description:
      'Foreign trust reporting, grantor trust compliance, and related U.S. disclosures.',
    href: '/services/foreign-trust-services',
    icon: 'trust' as const,
  },
  {
    title: 'Tax Insights & Articles',
    description:
      'Technical articles on Puerto Rico, international tax, and U.S. compliance.',
    href: '/articles',
    icon: 'articles' as const,
  },
] as const;

export const trustHighlights = [
  {
    value: '15+',
    label: 'Years of international tax experience',
  },
  {
    value: 'Act 60',
    label: 'Specialized Puerto Rico incentive advisory',
  },
  {
    value: 'Global',
    label: 'Clients across the U.S., its possessions, and worldwide',
  },
] as const;

export const aboutFirm = {
  intro: `Tom Duffy C.P.A., P.C. is a Greater Chicago-based firm that specializes in international taxation with a particular focus on U.S. possessions. In addition, the firm is one of the few CPA firms in the country that specializes in representing residents of Puerto Rico during IRS examinations, specifically those taxpayers granted tax incentives under Puerto Rico's Act 60 (formerly Act 20/22).`,
  experience:
    'Our clients rely on our knowledge and expertise in complying with their U.S. tax obligations. Tom Duffy has over fifteen years of experience in international tax planning and associated U.S. tax return preparation. The firm services clients in the United States, its possessions, and throughout the world.',
} as const;
