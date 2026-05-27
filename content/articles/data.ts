import { defineArticle } from './helpers';
import type { Article } from './types';

const prCluster = [
  'statute-of-limitations',
  'bona-fide-residency-in-puerto-rico-presence-test',
  'bona-fide-resident-puerto-rico',
  'rule-for-year-of-move-puerto-rico',
];

const act60Cluster = [
  'us-tax-consequences-act-60',
  'us-tax-form-926-act-60',
  'requirements-puerto-rico-residents',
  'corporate-inversions',
  'irs-puerto-rico',
];

export const articles: Article[] = [
  defineArticle({
    slug: 'statute-of-limitations',
    title: 'Statute of Limitations for Bona Fide Residents of Puerto Rico',
    description:
      'How long the IRS may examine U.S. tax returns for bona fide residents of Puerto Rico, including extensions tied to international disclosure forms.',
    publishedAt: '2025-08-24',
    excerpt:
      'Over the past 12 years, during seminars, speaking engagements, and in prospective client meetings regarding Puerto Rico\'s Act 60 program, a question that we receive quite often is: "How long do I need to be concerned about the IRS examining my US tax return?"',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Statute-of-Limitations-and-WSLA-for-BRPR-Article.pdf',
    relatedSlugs: [
      'requirements-puerto-rico-residents',
      'us-tax-form-926-act-60',
      'bona-fide-residency-in-puerto-rico-presence-test',
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Statute of Limitations', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Over the past 12 years, during seminars, speaking engagements, and in prospective client meetings regarding Puerto Rico\'s Act 60 program, a question that we receive quite often is: "How long do I need to be concerned about the IRS examining my US tax return?" Since it is such a popular topic, it is the subject of this article. The answer, as with most issues, is multi-pronged and fact specific.',
      },
      {
        type: 'disclaimer',
        text: 'We are not attorneys and nothing in this article can be construed as legal advice. This is an important disclaimer because the answer to this question often requires an analysis of both civil and criminal rules. This article discusses those time limits and introduces some issues that the reader may want to discuss with their legal counsel.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Importance of Statutes of Limitations',
      },
      {
        type: 'paragraph',
        text: 'In Rothensies v. Electric Storage Battery Co., the Supreme Court stressed the importance of a statute of limitations, noting that an income tax system without a day of final settlement would be intolerable for both taxpayers and the government. Statutes of limitation are designed to promote justice by preventing surprises through the revival of claims that have been allowed to slumber until evidence has been lost, memories have faded, and witnesses have disappeared.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'General Rules (3 Years or No Limit)',
      },
      {
        type: 'paragraph',
        text: 'In general, the assessment of a deficiency in tax must be made within 3 years of the taxpayer\'s filing of his or her return. However, there is no limit on the time to assess tax if the IRS proves fraud or if the taxpayer does not file a return. If a taxpayer files a late return, the statute of limitations ends 3 years after the filing of the late return. The limitations period is extended to 6 years in certain circumstances discussed below.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Substantial Omission of Gross Income (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'The limitations period is extended to 6 years when a taxpayer omits from gross income an amount that exceeds 25% of the gross income required to be shown on the taxpayer\'s return. This 25% omission rule is particularly relevant to bona fide residents of Puerto Rico because it is normal for bona fide residents of Puerto Rico to exclude Puerto Rican-source income from their US tax returns. Bona fide residents of Puerto Rico should be sure to disclose on their US tax returns the nature and amount of any income that will be excluded from US gross income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Failure to Include International Disclosure Forms',
      },
      {
        type: 'paragraph',
        text: 'An important rule for bona fide residents of Puerto Rico relates to an extension of the statute of limitations for failure to file certain international disclosure forms. Bona fide residents of Puerto Rico often miss filing certain of these forms, which can keep the statute of limitations open indefinitely.',
      },
      {
        type: 'list',
        items: [
          'Form 5471 — Information Return of U.S. Persons With Respect to Certain Foreign Corporations',
          'Form 8621 — PFIC or Qualified Electing Fund',
          'Form 926 — Return by a U.S. Transferor of Property to a Foreign Corporation',
          'Form 8865 — Return of U.S. Persons With Respect to Certain Foreign Partnerships',
          'Form 8938 — Statement of Specified Foreign Financial Assets',
          'Form 3520 and Form 3520-A — Foreign Trusts',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bona fide residents of Puerto Rico often do not realize that they may need to file Form 926. If a required international disclosure form is not filed, the statute of limitations for the entire tax return for that year may remain open until 3 years after the form is filed — or indefinitely if the form is never filed. See our articles on Form 926 filing requirements and Form 5471 filing requirements for residents of Puerto Rico.',
      },
      {
        type: 'placeholder',
        label: 'Remaining sections from source article',
        note:
          'Migrate remaining sections from the original article (WSLA, criminal statutes, state limitations, etc.) from tomduffycpa.com/statute-of-limitations/ or the site PDF.',
      },
    ],
  }),

  defineArticle({
    slug: 'bona-fide-residency-in-puerto-rico-presence-test',
    title: 'The "Presence Test" for Bona Fide Residency in Puerto Rico',
    description:
      'An analysis of the presence test for bona fide residency in Puerto Rico under U.S. tax rules.',
    publishedAt: '2025-01-20',
    excerpt:
      'As we have discussed in previous articles, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test. In this article we will focus on the presence test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Presence-Test-for-PR-Residents-Article-Jan-2025.pdf',
    relatedSlugs: prCluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
  }),

  defineArticle({
    slug: 'after-puerto-rico-expatriation',
    title: 'After Puerto Rico: Is Expatriation Worth Considering?',
    description:
      'Tax considerations for Act 60 participants who may consider renouncing U.S. citizenship after leaving Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt:
      'For some Act 60 participants, growing old in Puerto Rico is not a realistic part of the long-term plan. Few people relish the thought of returning to the mainland U.S. tax system after enjoying Act 60 tax benefits.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/After-PR-Is-Expatriation-Worth-Considering.pdf',
    relatedSlugs: ['final-year-in-puerto-rico', 'bona-fide-resident-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Expatriation', 'Act 60'],
  }),

  defineArticle({
    slug: 'pre-move-transfer-property-partnership',
    title: 'Pre-Move Transfer Of Property To A Partnership',
    description:
      'Tax planning considerations when transferring appreciated property to a partnership before a move to Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt:
      'Amy is a U.S. citizen who lives in the United States. Amy owns shares of marketable stock that have appreciated in value. The shares have a value of $22,000,000, and Amy\'s basis in the shares is $2,000,000.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Pre-move-transfer-of-property-to-a-partnership-FINAL.pdf',
    relatedSlugs: ['puerto-rico-tax-structure', 'corporate-inversions'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Entity Structuring'],
  }),

  defineArticle({
    slug: 'rule-for-year-of-move-puerto-rico',
    title: 'Three Year Residency Requirement For Year of Move To/From Puerto Rico',
    description:
      'The three-year residency requirement applicable in the year of moving to or from Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt:
      'To qualify as a bona fide resident of Puerto Rico, an individual generally must meet a presence test, a tax home test, and a closer connection test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Three-Year-Residency-Rule-For-Year-of-Move-PR.pdf',
    relatedSlugs: prCluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
  }),

  defineArticle({
    slug: 'living-trusts-bona-fide-residents-puerto-rico',
    title:
      'Living Trusts for Bona Fide Residents of Puerto Rico – Is Your Living Trust a Foreign Trust for U.S. Tax Purposes?',
    description:
      'Whether a U.S. living trust may be treated as a foreign trust for U.S. tax purposes for bona fide residents of Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt:
      'Individuals who move to Puerto Rico to avail themselves of Act 60 benefits often hold their assets through a living trust. Holding assets through a U.S. living trust may raise complex U.S. tax issues for bona fide residents of Puerto Rico.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Living-Trust-PR-Act-60-Article.pdf',
    relatedSlugs: ['fica-taxes-bona-resident-puerto-rico', 'requirements-puerto-rico-residents'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Trusts', 'Act 60'],
  }),

  defineArticle({
    slug: 'fica-taxes-bona-resident-puerto-rico',
    title: 'FICA Taxes for Bona Fide Residents of Puerto Rico',
    description:
      'FICA tax considerations for bona fide residents of Puerto Rico who own Puerto Rican entities.',
    publishedAt: '2024-06-22',
    excerpt:
      'Katy is a U.S. citizen who is a bona fide resident of Puerto Rico. Katy owns 100% of a Puerto Rican LLC classified as a corporation for both Puerto Rican and U.S. tax purposes.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/FICA-Taxes-for-Bona-Fide-Residents-of-Puerto-Rico.pdf',
    relatedSlugs: ['us-tax-consequences-act-60'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Payroll Tax', 'Act 60'],
  }),

  defineArticle({
    slug: 'final-year-in-puerto-rico',
    title: 'Your Final Year in Puerto Rico',
    description:
      'U.S. tax considerations when transitioning back to the mainland after participating in Puerto Rico\'s Act 60 program.',
    publishedAt: '2024-06-22',
    excerpt:
      'Puerto Rico\'s Act 60 program has seen more than five thousand U.S. taxpayers move to the island since 2012. Eventually, many of these taxpayers will return and transition back to life on the mainland.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Your-Final-Year-in-Puerto-Rico.pdf',
    relatedSlugs: ['after-puerto-rico-expatriation', 'rule-for-year-of-move-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Act 60'],
  }),

  defineArticle({
    slug: 'federal-tax-credit-solar-panels-puerto-rico',
    title: 'Federal Tax Credit for Solar Panels in Puerto Rico? Not So Fast.',
    description:
      'Federal solar tax credit considerations for residents of Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt:
      'Warm breezes, white sand, stunning sunsets. These are the images most people conjure when thinking of Puerto Rico. They often overlook the unwelcome and frequent power outages that seem to accompany every major storm.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Federal-Solar-Tax-Credits-for-PR-Residents.pdf',
    relatedSlugs: ['act-2024-bona-fide-resident-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Credits'],
  }),

  defineArticle({
    slug: 'act-2024-bona-fide-resident-puerto-rico',
    title:
      'The Corporate Transparency Act of 2024 and Bona Fide Residents of Puerto Rico: What You Need to Know',
    description:
      'Corporate Transparency Act reporting requirements for bona fide residents of Puerto Rico and their entities.',
    publishedAt: '2024-06-22',
    excerpt:
      'The Corporate Transparency Act of 2024 (CTA) mandates the creation of a national database exposing the true owners of U.S. companies and companies authorized to do business in the U.S., known as beneficial owners.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Corporate-Transparency-Act-for-PR-Companies.pdf',
    relatedSlugs: ['requirements-puerto-rico-residents', 'us-tax-form-926-act-60'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Corporate Transparency Act', 'Compliance'],
  }),

  defineArticle({
    slug: 'requirements-puerto-rico-residents',
    title: 'Form 5471 Filing Requirements for Residents of Puerto Rico',
    description:
      'Form 5471 filing requirements for a bona fide resident of Puerto Rico with respect to a Puerto Rican corporation.',
    publishedAt: '2023-06-25',
    excerpt:
      'This memorandum discusses the Form 5471 filing requirements for a bona fide resident of Puerto Rico with respect to a Puerto Rican corporation.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Form-5471-Filing-Requirements-for-Residents-of-Puerto-Rico.pdf',
    relatedSlugs: ['us-tax-form-926-act-60', 'statute-of-limitations'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Form 5471', 'Compliance'],
  }),

  defineArticle({
    slug: 'puerto-rico-residents-capital-losses',
    title: 'Sourcing Capital Losses Generated by a Resident of Puerto Rico',
    description:
      'How capital losses are sourced for bona fide residents of Puerto Rico under Act 60.',
    publishedAt: '2023-05-14',
    excerpt:
      'Individual A is a US citizen who is a bona fide resident of Puerto Rico with a tax home in Puerto Rico. Under Act 60, capital gains recognized by Individual A are excluded from Puerto Rican taxable income.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Final-Memo-Sourcing-of-Capital-Losses-by-Residents-of-Puerto-Rico-April-19-2023.pdf',
    relatedSlugs: ['rules-bona-fide-residents-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Capital Gains', 'Sourcing'],
  }),

  defineArticle({
    slug: 'puerto-rico-tax-structure',
    title: 'Establishing a Branch in Puerto Rico: An Often Neglected Tax Structure',
    description:
      'Why a Puerto Rico branch structure may be preferable to forming a new Puerto Rico LLC for Act 60 participants.',
    publishedAt: '2023-05-14',
    excerpt:
      'When moving to Puerto Rico to participate in the Act 60 program, many taxpayers establish a Puerto Rico LLC to conduct operations. In our experience, this is not always the most efficient tax structure.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Operating-as-a-Branch-in-Puerto-Rico-FINAL.pdf',
    relatedSlugs: ['corporate-inversions', 'pre-move-transfer-property-partnership'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Entity Structuring', 'Act 60'],
  }),

  defineArticle({
    slug: 'interest-expense-allocation-bona-fide-residents-of-puerto-rico',
    title: 'Interest Expense Allocation For Bona Fide Residents of Puerto Rico',
    description:
      'Interest expense allocation rules applicable to bona fide residents of Puerto Rico.',
    publishedAt: '2023-03-25',
    excerpt:
      'U.S. income tax is generally imposed on taxable income. Taxable income is defined as gross income minus certain deductions, including interest expense.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Interest-Expense-Allocation-Memo-Feb-23-2023-FINAL.pdf',
    relatedSlugs: ['rules-bona-fide-residents-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Deductions'],
  }),

  defineArticle({
    slug: 'errors-in-irs-publication-1321',
    title:
      'Errors in IRS Publication 1321 Regarding the Allocation and Apportionment of Charitable Contributions for Residents of Puerto Rico',
    description:
      'Analysis of errors in IRS Publication 1321 affecting residents of Puerto Rico.',
    publishedAt: '2023-03-25',
    excerpt:
      'Bob is a U.S. citizen and bona fide resident of Puerto Rico for the entire year. This year Bob earned $24,000 from Puerto Rico sources and $96,000 from U.S. sources.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Errors-in-IRS-Publication-1321.pdf',
    relatedSlugs: ['rules-bona-fide-residents-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Compliance'],
  }),

  defineArticle({
    slug: 'us-withholding-on-payments-to-puerto-rican-entities',
    title:
      'Compliance Alert: U.S. Withholding on Payments to Puerto Rican Persons/Entities & Other Information Reporting Requirements',
    description:
      'U.S. withholding and information reporting on payments to Puerto Rican service providers.',
    publishedAt: '2022-06-20',
    excerpt:
      'Many Puerto Rico Act 60 companies and individuals holding export service decrees receive service fees from U.S.-based companies. The U.S. companies paying these fees may be unpleasantly surprised when the IRS assesses them with a 30% tax for failure to comply with U.S. information reporting and withholding requirements.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/US-Withholding-Tax-on-Payments-to-PR-Persons-and-Entities-April-22-2022-1.pdf',
    relatedSlugs: act60Cluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Withholding', 'Compliance'],
  }),

  defineArticle({
    slug: 'market-sourcing',
    title:
      'Sourcing of Income to California and "Economic Nexus" Consequences for Nonresidents',
    description:
      'California sourcing rules and economic nexus consequences for nonresident business owners.',
    publishedAt: '2022-05-23',
    excerpt:
      'When it comes to the taxation of nonresidents, the California tax agencies have held that a nonresident business owner who never set foot in California may owe personal income taxes to the State based on where customers receive the benefit of services.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Market-Sourcing-Article-Final-Draft-May-5-2022.pdf',
    relatedSlugs: ['rules-bona-fide-residents-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['State Tax', 'California', 'Sourcing'],
  }),

  defineArticle({
    slug: 'working-outside-of-puerto-rico-tax-consequences',
    title:
      'Tax Consequences of Working Outside of Puerto Rico for Owners of Act 60 Companies',
    description:
      'Tax consequences when Act 60 company owners work remotely outside of Puerto Rico, including from Europe.',
    publishedAt: '2022-04-10',
    excerpt:
      'As the COVID-19 pandemic begins to wind down and various countries throughout the world begin to open up, many of us are ready to resume overseas travel. A frequent question arises regarding the tax consequences to an Act 60 owner who desires to spend a summer in Europe with his or her family and work remotely.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Working-Outside-of-Puerto-Rico-Final-Draft-March-9-2022.pdf',
    relatedSlugs: ['us-tax-consequences-act-60', 'puerto-rico-companies-mitigate-us-task-risks'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Act 60', 'Remote Work'],
  }),

  defineArticle({
    slug: 'rules-bona-fide-residents-puerto-rico',
    title:
      'Back to Basics: An Overview of Sourcing Rules for Bona Fide Residents of Puerto Rico',
    description:
      'Overview of income sourcing rules for bona fide residents of Puerto Rico under IRC §933.',
    publishedAt: '2021-11-21',
    excerpt:
      'An individual who is a bona fide resident of Puerto Rico can generally exclude from US income his or her income derived from sources within Puerto Rico. Because Puerto Rican-sourced income is the only income that can be excluded, it is important to understand what income is and what income is not Puerto Rican-sourced.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Back-to-Basics-Final-Draft.pdf',
    relatedSlugs: prCluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Sourcing', 'Act 60'],
  }),

  defineArticle({
    slug: 'us-tax-form-926-act-60',
    title:
      'Form 926 – One of the Most Important U.S. Tax Forms that Most Act 60 Recipients Fail to File',
    description:
      'Form 926 filing requirements when a U.S. citizen contributes property to a Puerto Rican corporation.',
    publishedAt: '2021-05-09',
    excerpt:
      'If a U.S. citizen forms a Puerto Rican corporation and contributes cash to the Puerto Rican corporation, is the U.S. citizen obligated to notify the IRS?',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Form-926-Final-Version.pdf',
    relatedSlugs: ['requirements-puerto-rico-residents', 'statute-of-limitations'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Form 926', 'Compliance'],
  }),

  defineArticle({
    slug: 'irs-puerto-rico',
    title: 'Alert: IRS to "Campaign" into Puerto Rico; How can Taxpayers Defend?',
    description:
      'The IRS campaign focused on U.S. persons claiming benefits under Puerto Rico Act 22 and related incentives.',
    publishedAt: '2021-03-07',
    excerpt:
      'The IRS has announced a new "Campaign." It will focus its attention on U.S. persons who have reduced their U.S. tax burden by claiming benefits under Puerto Rico Act 22.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/IRS-to-Campaign-into-Puerto-Rico-How-can-Taxpayers-Defend.pdf',
    relatedSlugs: act60Cluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'IRS', 'Act 60'],
  }),

  defineArticle({
    slug: 'us-tax-consequences-act-60',
    title:
      'U.S. Tax Consequences of Working in the U.S. on Behalf of Your Act 60 Company',
    description:
      'U.S. tax consequences when Puerto Rico residents work in the U.S. on behalf of their Act 60 companies.',
    publishedAt: '2021-03-07',
    excerpt:
      'As the IRS Campaign in Puerto Rico kicks off, now would be a good time for taxpayers to assess their past U.S. tax filings and prepare for the very real event of an IRS audit or soft letter.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Puerto-Rican-Residents-Working-From-The-US-Final-Version.pdf',
    relatedSlugs: act60Cluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Act 60', 'IRS'],
  }),

  defineArticle({
    slug: 'act-20-22-taxpayers-asking-questions',
    title:
      'Alert: Act 20/22 Taxpayers Asking Questions Following Indictment and Arrest of BDO Tax Division Head',
    description:
      'Implications for Act 60 taxpayers following the DOJ indictment of BDO Puerto Rico\'s Tax Division head.',
    publishedAt: '2020-12-22',
    excerpt:
      'The Department of Justice indicted and arrested the head of BDO Puerto Rico\'s Tax Division for allegedly flouting rules surrounding Puerto Rico\'s Act 20/22/60 tax incentive program.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Nov-2020-Act-20_22-Taxpayers-Asking-Questions-Following-Indictment-and-Arrest-of-BDO-Tax-Division-Head.pdf',
    relatedSlugs: ['irs-puerto-rico'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Act 60', 'Compliance'],
  }),

  defineArticle({
    slug: 'bona-fide-resident-puerto-rico',
    title: 'Bona Fide Resident of Puerto Rico – Closer Connection Test',
    description:
      'The closer connection test for establishing bona fide residency in Puerto Rico.',
    publishedAt: '2020-12-08',
    excerpt:
      'In general, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test. In this article, we will primarily focus on the closer connection test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Bona-Fide-Residency-in-Puerto-Rico.pdf',
    relatedSlugs: prCluster,
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
  }),

  defineArticle({
    slug: 'corporate-inversions',
    title:
      'Corporate Inversions – Is Your Puerto Rico Act 60 Company Still Subject to U.S. Tax?',
    description:
      'How IRC §7874 corporate inversion rules may apply to Puerto Rico Act 60 companies.',
    publishedAt: '2020-11-05',
    excerpt:
      'As combined federal, state and local tax rates for high-income earners in many parts of the country exceed 40%, many U.S. taxpayers are looking for a less onerous tax environment. Puerto Rico offers entity-level tax rates as low as 4% for eligible Act 60 companies.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Anti-Inversion-Article-Oct-26-2020-Final.pdf',
    relatedSlugs: ['puerto-rico-tax-structure', 'pre-move-transfer-property-partnership'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Corporate Inversions', 'Act 60'],
  }),

  defineArticle({
    slug: 'puerto-rico-companies-mitigate-us-task-risks',
    title: 'Tax Alert: How Puerto Rico Companies Mitigate U.S. Tax Risks',
    description:
      'Strategies for Puerto Rico Act 60 companies to mitigate U.S. federal tax risks.',
    publishedAt: '2020-06-07',
    excerpt:
      'You moved to Puerto Rico and set up an Act 20 or Act 73 company. The Company\'s income is taxed at 4%, a rate that\'s virtually impossible to match anywhere else (legally). But the costs to your personal mobility are significant.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/TAX-ALERT_-How-Puerto-Rico-Companies-Mitigate-U.S.-Tax-Risks-Final.pdf',
    relatedSlugs: ['us-tax-consequences-act-60', 'working-outside-of-puerto-rico-tax-consequences'],
    contentStatus: 'needs_migration',
    topics: ['Puerto Rico', 'Act 60', 'Risk Management'],
  }),
];

export const articleSlugs = articles.map((a) => a.slug);
