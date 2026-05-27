export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: 'domestic-tax-services',
    title: 'Domestic Tax Services',
    shortTitle: 'Domestic Tax',
    description:
      'Federal tax planning, compliance, and representation for individuals, businesses, and trusts.',
    overview:
      'Our firm has extensive experience with federal issues regarding the taxation of individuals, corporations, S corporations, LLCs, partnerships, Trusts, and more. Preparing tax returns is only a small part of our service; we focus on guiding clients through wealth preservation techniques and tax minimization strategies catered to each client\'s needs.',
    highlights: [
      'Tax consulting and compliance (S-Corps, LLCs, C-Corps, Partnerships, Trusts)',
      'Personal tax planning and compliance (individuals)',
      'Business tax advice and tax minimization strategies',
      'Representation before the IRS and state taxing authorities',
      'Tax planning and research',
    ],
  },
  {
    slug: 'international-tax-services',
    title: 'International Tax Services',
    shortTitle: 'International Tax',
    description:
      'Cross-border tax planning, compliance, and treaty analysis for inbound and outbound operations.',
    overview:
      'Many companies are beginning to realize that in order to stay competitive, they must enter the global market to sell their services and products. We help U.S.-based companies that are expanding operations outside of the U.S., while also providing guidance to foreign investors (companies or individuals) entering the U.S.',
    highlights: [
      'Tax planning to minimize global tax liability',
      'U.S. tax compliance for inbound and outbound operations',
      'U.S. tax return preparations for foreign individuals and companies',
      'Tax planning and compliance for U.S. real estate ownership by non-resident aliens',
      'Income tax treaty analysis',
      'Withholding taxes',
      'Passive Foreign Investment Company (PFIC)',
      'Foreign Bank Account Reporting (FBAR) / Foreign Asset and Ownership Disclosure',
      'Foreign Trusts and Foreign Gifts (Form 3520 and 3520-A)',
      'Expatriate and non-resident tax returns',
      'Choice of Entity / Check-the-box',
    ],
  },
  {
    slug: 'puerto-rico-tax-planning',
    title: 'Puerto Rico Tax Services',
    shortTitle: 'Puerto Rico Tax',
    description:
      'Act 60 planning, bona fide residency, and U.S. federal compliance for residents of Puerto Rico.',
    overview:
      'As U.S. tax rates at both the federal and state levels continue to target successful entrepreneurs, innovators and other wealthy taxpayers, Puerto Rico remains a destination for those seeking a lawful avenue to reduce U.S. federal and state taxes. Our firm has advised taxpayers since 2012 on how to properly establish operations in Puerto Rico without running afoul of U.S. tax laws.',
    highlights: [
      'Act 60 (formerly Act 20/22) incentive planning and compliance',
      'Bona fide residency analysis (presence, tax home, closer connection)',
      'Anti-inversion rules (IRC §7874) and entity structuring',
      'U.S. trade or business and effectively connected income issues',
      'Transfer pricing and related-party transactions',
      'Form 5471, Form 926, Form 1120-F, and other U.S. reporting obligations',
      'IRS audit representation for residents of Puerto Rico',
    ],
  },
  {
    slug: 'foreign-trust-services',
    title: 'Foreign Trust Services',
    shortTitle: 'Foreign Trusts',
    description:
      'Foreign trust reporting, grantor trust compliance, and related U.S. disclosure requirements.',
    overview:
      'High net worth individuals often utilize foreign trusts to protect assets accumulated over a lifetime. Foreign trusts are one of the most effective methods to protect assets from unwanted and unwarranted claims. If you are either a grantor/settlor (owner) or a beneficiary of a foreign trust, then you have filing requirements that cannot be overlooked or ignored.',
    highlights: [
      'Foreign trust creation and transfer reporting',
      'Foreign grantor trust owner and beneficiary statements',
      'Forms 3520 and 3520-A compliance',
      'IRS foreign trust information reporting campaign guidance',
      'Annual trust activity accounting and U.S. tax forms',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
