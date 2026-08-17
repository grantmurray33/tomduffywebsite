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
    "Tom Duffy, CPA, focuses exclusively on the U.S. federal tax compliance dimensions of Puerto Rico's Act 60 incentive regime. He has advised individuals and businesses on the federal consequences of Puerto Rico's incentive programs since the modern regime was enacted in 2012, and that work remains the sole focus of his practice today.",
  bioExtended: `Act 60 offers significant tax incentives to U.S. persons who establish bona fide residency in Puerto Rico, but those incentives come with intricate federal compliance obligations. Bona fide residency, income sourcing, sections 933 and 937, foreign financial reporting, PFICs, controlled foreign corporations, foreign trusts, and other U.S. disclosure requirements all require careful coordination across multiple areas of federal tax law. For individuals and families with substantial wealth and complex business interests, the stakes involved in getting this right can be considerable.

By design, Tom Duffy, CPA, PC operates as a lean, highly specialized boutique. This structure allows for senior-level attention, direct access to Tom, and close coordination across each client's filings. For clients with substantial wealth, complex structures, and sensitive tax matters, the emphasis is on technical precision, continuity, and discretion.

The practice centers on the federal compliance obligations of Act 60 individuals and their businesses, including extensive preparation of U.S. individual income tax returns, as well as partnership and S corporation returns for businesses with Puerto Rico operations, together with the international information reporting and other federal filings these structures frequently require. This integrated approach helps ensure that positions taken across individual and entity returns, disclosures, and reporting years remain consistent and technically supportable.

A significant part of Tom's practice involves working alongside other professional advisers. Many of his clients maintain relationships with regional and national accounting firms for their broader tax and financial needs. When Act 60 raises federal issues requiring specialized expertise, certain filings, most often the individual income tax return, are carved out of those engagements and entrusted to Tom.

In other cases, clients retain Tom to provide an independent technical review of federal tax work prepared by their existing accounting firms, particularly in years involving substantial income, liquidity events, or unusually complex transactions. In these engagements, Tom works alongside the client's existing advisers, adding a layer of specialized Act 60 expertise where the federal consequences can be significant. Whether assuming responsibility for the filing or reviewing another firm's work, Tom regularly coordinates with accountants, tax attorneys, family offices, investment advisers, and other professionals to ensure the client's reporting is technically supportable and consistent with their broader financial and legal structure.

Tom also works extensively with tax counsel on sensitive matters. He has been engaged under Kovel arrangements by Am Law 100 firms and leading tax controversy practices to provide specialized expertise in connection with IRS examinations, investigations, and other controversy matters, analyzing federal Act 60 compliance, reconstructing prior reporting positions, identifying potential exposure, and helping counsel evaluate technically supportable approaches to complex issues.

Tom's professional writing reflects the same focus. He has been published in Tax Notes, Bloomberg Tax, The Journal of Taxation, and The Journal of International Taxation on sophisticated federal tax issues encountered in practice.

Tom's experience in taxation spans more than two decades, including work at international accounting firms, and has concentrated on the federal dimensions of Puerto Rico's incentive regime since its inception in 2012. A graduate of the University of Florida and a CPA licensed in Illinois and Florida, he brings to each engagement a combination of technical analysis, practical experience, and a deep understanding of how federal tax rules apply to the complex structures common among Act 60 taxpayers.

Puerto Rico tax incentives may begin in Puerto Rico. For U.S. persons, their success ultimately depends on getting the federal side right, and that is Tom Duffy's focus.`,
  credentials: [
    'CPA licensed in Illinois and Florida',
    'University of Florida graduate',
    'Act 60 federal tax compliance since 2012',
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
    image: '/images/hero/hero-puerto-rico.jpg',
    imagePosition: 'center 40%',
  },
  {
    id: 'tax-minimization',
    eyebrow: 'Tax Minimization Strategies',
    headline: 'Lawful planning for complex tax matters',
    description:
      'Creative planning and consulting for domestic and international tax minimization — tailored strategies for high-net-worth individuals and businesses.',
    cta: { label: 'Explore our services', href: '/services' },
    image: '/images/hero/hero-tax-planning.jpg',
    imagePosition: 'center 50%',
  },
  {
    id: 'wealth-preservation',
    eyebrow: 'Wealth Preservation Consulting',
    headline: 'Preserve what you have built',
    description:
      'We guide clients through wealth preservation techniques, compliance, and representation — with deep expertise in U.S. tax obligations at home and abroad.',
    cta: { label: 'About the firm', href: '/about' },
    image: '/images/hero/hero-wealth.jpg',
    imagePosition: 'center 45%',
  },
] as const;

export const firmAffiliations = [
  { abbr: 'CPA', label: 'Certified Public Accountant' },
  { abbr: 'AICPA', label: 'American Institute of CPAs' },
  { abbr: 'PR CPA', label: 'Puerto Rico Society of CPAs' },
  { abbr: 'IL · FL', label: 'Licensed in Illinois & Florida' },
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
