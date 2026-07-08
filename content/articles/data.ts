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
        text: 'In Rothensies v. Electric Storage Battery Co., 329 U.S. 296, 301 (1946), the Supreme Court stressed the importance of a statute of limitations, stating that it "would be all but intolerable" to have an income tax system under which there never would come a day of final settlement, requiring both the taxpayer and the government to stand ready forever to produce vouchers, prove events, establish values, and recall details of a tax contest. Statutes of limitation are designed to promote justice by preventing surprises through the revival of claims that have been allowed to slumber until evidence has been lost, memories have faded, and witnesses have disappeared. The theory is that even a just claim becomes unjust to prosecute once the right to be free of stale claims comes to prevail over the right to bring them.',
      },
      {
        type: 'paragraph',
        text: 'A statute of limitations is the time period established by law during which the government can review, analyze, and resolve tax-related issues (Code §6501, et seq.). Once the statutory period expires, the IRS can no longer assess or collect additional tax, or allow taxpayers to claim a refund.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'General Rules (3 Years or No Limit)',
      },
      {
        type: 'paragraph',
        text: 'In general, the assessment of a deficiency in tax must be made within 3 years of the taxpayer\'s filing of his or her return (Code §6501(a)). However, there is no limit on the time to assess tax if the IRS proves fraud (Code §6501(c)(1) and (2)) or if the taxpayer does not file a return (Code §6501(c)(3)). If a taxpayer files a late return, the statute of limitations ends 3 years after the filing of the late return. The limitations period is extended to 6 years in three circumstances discussed below.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Substantial Omission of Gross Income (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'The limitations period is extended to 6 years when a taxpayer omits from gross income an amount that exceeds 25% of the gross income required to be shown on the taxpayer\'s return (Code §6501(e)(1)(A)(i)). However, an amount is not considered omitted from gross income if it is "disclosed in the return, or in a statement attached to the return, in a manner adequate to apprise the [IRS] of the nature and amount of such item" (Code §6501(e)(1)(B)(iii)). This 25% omission rule is particularly relevant to bona fide residents of Puerto Rico because it is normal for bona fide residents of Puerto Rico to exclude Puerto Rican-source income from their US tax returns (Code §933(1)).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example 1',
      },
      {
        type: 'paragraph',
        text: 'Tony is a bona fide resident of Puerto Rico. Tony\'s worldwide gross income is $40,000,000, with $30,000,000 being Puerto Rican-source income and $10,000,000 being US-source income. The $30,000,000 of Puerto Rican-source income can be excluded from Tony\'s US tax return, so his US tax return is only required to show $10,000,000 of gross income. If it is later determined that $12,000,000 of the $30,000,000 is more properly characterized as US-source income, Tony will have excluded 54.5% ($12,000,000/$22,000,000) of the gross income required to be shown on his return, and the statute of limitations will be extended to 6 years — unless Tony disclosed the nature and amount of the $12,000,000 in his return or an attached statement, in which case the amount would likely not be considered omitted and the 6-year statute would likely not apply. To avoid the potential 6-year statute of limitations, bona fide residents of Puerto Rico should be sure to disclose on their US tax returns the nature and amount of any income that will be excluded from US gross income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Omission of Income from Foreign Financial Assets (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'IRS Form 8938, Statement of Foreign Financial Assets, requires certain taxpayers to disclose information about foreign financial assets (Code §6038D; financial assets in Puerto Rico generally do not need to be reported on Form 8938 for bona fide residents of Puerto Rico under Treas. Reg. §1.6038D-7(c)). If a taxpayer improperly omits more than $5,000 from gross income, where the omitted amount is attributable to foreign financial assets, the limitations period on assessment is extended to 6 years (Code §6501(e)(1)(A)(ii)). This rule applies regardless of whether or not the taxpayer is required to file Form 8938.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Omission of Subpart F Income or GILTI Inclusions (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'US shareholders of controlled foreign corporations ("CFCs") are often required to include Subpart F income and/or global intangible low-taxed income ("GILTI") inclusions in their gross income (Code §§951(a) and 951A). If such a US shareholder omits from gross income Subpart F income or GILTI inclusions that are required to be shown on the return, the limitations period on assessment is extended to 6 years (Code §6501(e)(1)(C)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Failure to Include International Disclosure Forms (Until 3 Years After the Forms Are Filed)',
      },
      {
        type: 'paragraph',
        text: 'An important rule for bona fide residents of Puerto Rico relates to an extension of the statute of limitations for failure to file certain international disclosure forms (Code §6501(c)(8)). Bona fide residents of Puerto Rico often miss filing certain of these forms, which can keep the statute of limitations open indefinitely. The international disclosure forms captured by this rule include:',
      },
      {
        type: 'list',
        items: [
          'Form 5471 — Information Return of U.S. Persons With Respect to Certain Foreign Corporations',
          'Form 8621 — Return by a Shareholder of a Passive Foreign Investment Company or Qualified Electing Fund',
          'Form 926 — Return by a U.S. Transferor of Property to a Foreign Corporation',
          'Form 8865 — Return of U.S. Persons With Respect to Certain Foreign Partnerships',
          'Form 8938 — Statement of Foreign Financial Assets',
          'Form 3520 — Annual Return To Report Transactions With Foreign Trusts and Receipt of Certain Foreign Gifts',
          'Form 3520-A — Annual Information Return of Foreign Trust With a U.S. Owner',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bona fide residents of Puerto Rico often do not realize that they may need to file Form 926. If a required international disclosure form is not filed, the statute of limitations for the entire tax return for that year may remain open until 3 years after the form is filed — or indefinitely if the form is never filed (Code §6038B). This extended period is not limited to adjustments related to the specific form; it applies to the taxpayer\'s entire return for that year.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example 2',
      },
      {
        type: 'paragraph',
        text: 'Grace is a US citizen who became a bona fide resident of Puerto Rico in 2021. In 2021, Grace formed an Act 60 company ("PRCo") in Puerto Rico, wholly owned by Grace and classified as a corporation for US tax purposes. As part of the formation, Grace contributed $100 as equity into PRCo, but she was not advised that she needed to file Form 926 with respect to the transfer. The statute of limitations for Grace\'s 2021 tax return will remain open until 3 years after she files Form 926 — if she never files it, the statute of limitations for that year remains open forever. Her failure to file Form 926 does not only extend the assessment period with respect to PRCo or the form itself; the extended period applies to her entire 2021 tax return.',
      },
      {
        type: 'paragraph',
        text: 'Complicated rules apply to determine whether Forms 5471 are required for Puerto Rican entities owned by bona fide residents of Puerto Rico. If one or more Forms 5471 are missed for a particular year, the statute of limitations for that year will remain open until 3 years after the Forms 5471 are filed.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example 3',
      },
      {
        type: 'paragraph',
        text: 'In 2024, Joe is a bona fide resident of Puerto Rico. Joe owns 100% of USCo, a US C corporation, and 100% of PRCo, a Puerto Rican LLC classified as a corporation for US tax purposes. In 2024, USCo paid a management fee of $10 million to PRCo, primarily justified by the expertise Joe provides through PRCo. Joe spent 40% of his time in the US in 2024, performing his normal duties on behalf of PRCo during that time, so up to 40% of PRCo\'s gross income is US-source income effectively connected with a US trade or business. Joe is required to file Form 5471 for multiple reasons: PRCo is a controlled foreign corporation and Joe is a US shareholder who must file as a Category 4 and 5 filer, and PRCo will not meet the 80% test in Treas. Reg. §1.937-2(g)(1)(ii)(A), meaning Joe is considered a US person who controls PRCo. If Joe fails to file Form 5471 for 2024, the statute of limitations will remain open until 3 years after he files the form.',
      },
      {
        type: 'paragraph',
        text: 'Certain aspects of the passive foreign investment company ("PFIC") rules do not apply to bona fide residents of Puerto Rico, but there are no exceptions to the annual PFIC filing requirements. Therefore, Form 8621 may be required for a bona fide resident of Puerto Rico even if no US tax is due with respect to the PFIC.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example 4',
      },
      {
        type: 'paragraph',
        text: 'In 2023, Kevin is a bona fide resident of Puerto Rico who owns 100% of PRCo, a Puerto Rican LLC classified as a corporation for US tax purposes. PRCo owns Kevin\'s principal residence in Puerto Rico, purchased several years ago for $5 million. Although PRCo is not a CFC, Kevin was advised to annually file Form 5471 for PRCo, which he timely did in 2023. However, Kevin\'s US tax advisor did not realize that his residence held by PRCo is a passive asset because it does not give rise to any income. Because more than 50% of PRCo\'s assets are passive assets, PRCo is considered a PFIC, and Kevin is required to annually file Form 8621 for PRCo — which he did not do for 2023. The statute of limitations for Kevin\'s 2023 tax return will remain open until 3 years after he files Form 8621, or indefinitely if he never files it. As with Grace above, the extended period applies to Kevin\'s entire tax return, not just adjustments related to PRCo.',
      },
      {
        type: 'paragraph',
        text: 'In many cases, the failure to file a form or a return is an inadvertent oversight or the result of poor planning. However, if the IRS suspects fraud has occurred with respect to a taxpayer, a different set of rules applies. If the IRS alleges civil fraud, the statute of limitations on assessments and civil penalties will never begin and therefore never expire. Additional issues arise if the taxpayer is referred to the IRS Criminal Investigation division in connection with that suspected fraud.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Criminal Offenses',
      },
      {
        type: 'paragraph',
        text: 'What begins as a civil audit can escalate into a criminal investigation if the IRS auditor uncovers "firm indications of fraud" (IRS Manual 25.1.2.2). In such instances, the case is referred to the IRS Criminal Investigation division ("IRS CI"), which employs special agents to investigate potential criminal violations of the Internal Revenue Code. The IRS Manual draws a fine but definite distinction between avoidance and evasion: legitimate tax avoidance shapes events to reduce tax liability and, upon the happening of those events, makes complete disclosure; evasion involves deceit, concealment, or an attempt to make things seem other than they are.',
      },
      {
        type: 'paragraph',
        text: 'Separate statutes of limitations apply to federal tax crimes. Code §6531 provides a general 3-year statute of limitations for most criminal offenses arising under the internal revenue laws. A 6-year limitations period applies to several enumerated offenses, including:',
      },
      {
        type: 'list',
        items: [
          'Code §7201 — evasion of tax or payment',
          'Code §7202 — failure to collect, account for, or pay over tax',
          'Code §7203 (in part) — failure to pay tax; failure to file certain returns',
          'Code §7206(1) — filing a false return',
          'Code §7206(2) — aiding or assisting in the preparation of a false return',
          'Code §7207 — delivering or disclosing a false document',
          'Code §7212(a) — attempting to interfere with the administration of the internal revenue laws',
          '18 U.S.C. §371 — conspiracy to commit tax evasion or to defraud the IRS',
        ],
      },
      {
        type: 'paragraph',
        text: 'Generally, the statute of limitations begins to run on the day the offense is completed. The IRS Manual explains that different events complete different offenses: filing a false return is generally complete on the day the return is filed (or the statutory due date if filed early, or the day received by the IRS if filed late); failure to file is complete on the date the return was due (or the extension date, if a valid extension was granted); tax evasion is complete on the date of the last affirmative act or the statutory due date, whichever is later; and conspiracy is complete on the date of the last overt act taken in furtherance of the conspiracy, by any member.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Suspension of the Statute of Limitations',
      },
      {
        type: 'paragraph',
        text: 'Most taxpayers would generally breathe a sigh of relief once the 6-year period passes, assuming the IRS has not alleged fraud. However, in recent years there has been discussion of the rarely used Wartime Suspension of Limitations Act ("WSLA"), which can effectively extend the statute of limitations indefinitely for offenses involving fraud against the United States. The following discussion is for general informational purposes only and is not legal advice.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example: Theo and Marlene',
      },
      {
        type: 'paragraph',
        text: 'Theo and Marlene moved to Puerto Rico in 2013 but traveled back and forth to the US quite a bit in 2014, and later discovered they did not meet the presence test to qualify as bona fide residents that year. After realizing the additional tax liability they would incur, they falsified travel records and calendar entries to make it appear they were in Puerto Rico more than 183 days, told their preparer they had spent 185 days on the island, and filed their 2014 return on October 15, 2015 excluding a significant amount of PR-source income. In 2020 they moved back to South Florida, and on October 15, 2021 — the end of the 6-year statute of limitations for their 2014 return — they celebrated, having never been contacted or audited. On May 1, 2023, the IRS opened a civil audit of their 2020 return; irregularities led to a referral to IRS CI, which on March 17, 2025 found no evidence of criminal activity for 2020 but, based on documents and interviews from that investigation, came to believe Theo and Marlene had committed tax crimes in connection with their 2014 residency claims. Prosecutors threatened to charge them with tax evasion, filing a false return, and conspiracy.',
      },
      {
        type: 'paragraph',
        text: 'Question: Can IRS CI/DOJ investigate and prosecute Theo and Marlene for falsifying their 2014 residency, more than 6 years after the fact? Short answer: based on existing authority, yes, they can, and they might.',
      },
      {
        type: 'paragraph',
        text: 'The WSLA provides that when the United States is at war or Congress has enacted a specific authorization for the use of the Armed Forces, the running of any statute of limitations applicable to an offense involving fraud or attempted fraud against the United States "shall be suspended until five years after the termination of hostilities" as proclaimed by the President, with notice to Congress, or by concurrent resolution of Congress (18 U.S.C. §3287). The WSLA was amended in 2008 to extend the suspension period from 3 to 5 years and to apply it to authorizations for the use of Armed Forces rather than only a formally declared war.',
      },
      {
        type: 'paragraph',
        text: 'Courts have applied the WSLA to tax-related offenses. In Daugerdas v. United States (S.D.N.Y. 2021), a CPA/lawyer convicted of a decade-long scheme to defraud the IRS through fraudulent tax shelters challenged his conviction on statute of limitations grounds; the court held that the 2001 and 2002 military force authorizations for Afghanistan and Iraq met the WSLA criteria and suspended the statute of limitations for his conspiracy and mail fraud charges. In United States v. Wellington (D.N.M. 2022), the government successfully invoked the WSLA against a similar limitations challenge on a tax evasion conspiracy charge, noting the relevant military authorizations have never been repealed and no presidential proclamation has declared hostilities terminated. Appeals courts in the First Circuit (which includes Puerto Rico) and the Eleventh Circuit have likewise found the WSLA suspends the statute of limitations based on the post-9/11 and 2003 Iraq war authorizations (United States v. Melendez-Gonzalez, 1st Cir. 2018; United States v. Frediani, 11th Cir. 2015). The Ninth Circuit has held that offenses involving fraud against the US or its property need not have any nexus to the military authorizations for the WSLA to apply (United States v. Nishiie, 9th Cir. 2021, cert. denied 2022).',
      },
      {
        type: 'paragraph',
        text: 'In 2021, the American Bar Association Tax Section urged the government to make clear that IRS CI would not recommend prosecution for otherwise-untimely charges based solely on the WSLA, warning that its unlimited application could allow tax crimes more than two decades old to be prosecuted. That request came before the Wellington decision, and nothing in the DOJ Criminal Tax Manual has changed as a result — it remains silent on the issue.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Lack of Congressional Action Since 2008',
      },
      {
        type: 'paragraph',
        text: 'The absence of legislative changes limiting the WSLA\'s application to specific crimes, such as tax offenses, might embolden prosecutors to continue using it to suspend the statute of limitations. The Ninth Circuit in Nishiie specifically acknowledged that the WSLA could result in a multiple-decades-long suspension absent Congressional action, while also noting that Congress has shown, through its 2008 amendments, that it is fully capable of narrowing the WSLA\'s reach if public policy warrants such a change.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'In general, the statute of limitations for the IRS to assess additional taxes is 3 years from the date of filing a tax return, or 6 years in the case of a substantial ("gross") omission. However, the statute of limitations is unlimited if the IRS can prove civil fraud or if no tax return was filed. If the DOJ decides to prosecute a taxpayer for tax offenses, the statute of limitations could potentially extend many more years if the WSLA applies to suspend it.',
      },
      {
        type: 'paragraph',
        text: 'Theo and Marlene, in the example above, would be wise to contact competent criminal defense attorneys to discuss their particular facts and circumstances — if the prosecutor successfully invokes the WSLA, the 6-year statute of limitations might not bar prosecution for their 2014 tax offenses. We strongly encourage all taxpayers who are contacted by the IRS to engage a competent legal team to review their facts and applicable statutes of limitations, including the potential impact of the WSLA, particularly in the First, Ninth, and Eleventh Circuits.',
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'paragraph',
        text: 'As we have discussed in previous articles, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test (Code §937(a) and Treas. Reg. §1.937-1). In this article we will focus on the presence test.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Five Ways to Meet the Presence Test',
      },
      {
        type: 'paragraph',
        text: 'There are five alternative ways to meet the presence test (Treas. Reg. §1.937-1(c)(1)). An individual only needs to meet one of the five to satisfy the test:',
      },
      {
        type: 'list',
        items: [
          '183 Day Rule — be present in Puerto Rico for at least 183 days during the taxable year.',
          '549 Day Rule — be present in Puerto Rico for at least 549 days during the three-year period consisting of the taxable year and the two immediately preceding taxable years, and be present in Puerto Rico for at least 60 days during each of those three taxable years.',
          '90 Day Rule — be present in the U.S. for no more than 90 days during the taxable year.',
          'Earned Income Rule — have earned income in the U.S. during the taxable year of less than $3,000, and be present in Puerto Rico for more days during the taxable year than in the U.S.',
          'No Significant U.S. Connection Rule — have no significant connection to the U.S. during the taxable year.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The examples below illustrate different fact patterns for meeting the presence test. They are not representative of when an individual qualifies as a bona fide resident of Puerto Rico overall — an individual must also meet the tax home test and the closer connection test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'David Lives in Israel & Annually Vacations in Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'David is a U.S. citizen who lives and works in Israel, has no home in the U.S., is single with no children, and is not registered to vote in U.S. elections. Once a year he visits Puerto Rico for ten days around Hanukkah, staying in a San Juan hotel, and otherwise has no connection to Puerto Rico or the U.S. David does not meet the 183 Day Rule (only 10 days in Puerto Rico) or the 549 Day Rule (only 30 days over three years), but he meets the 90 Day Rule (he was never in the U.S.) and the Earned Income Rule (no U.S. earned income, and more days in Puerto Rico than in the U.S.). He would have a significant U.S. connection only if he had a permanent U.S. home, was registered to vote in the U.S., or had a spouse or minor child whose abode is in the U.S. (Treas. Reg. §1.937-1(c)(5)(i)) — none of which apply, so he also meets the No Significant U.S. Connection Rule. David meets three of the five alternative ways to satisfy the presence test (whether he meets the tax home test or closer connection test are separate questions not addressed here).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Ken Cruises the World on His Yacht',
      },
      {
        type: 'paragraph',
        text: 'Ken, a U.S. citizen who sold his internet startup for $500 million, now spends most of his time on his yacht managing investments. His wife lives with him mostly on the yacht; his three grown children live in California; and he owns homes in both New York and California. Each year he spends 30 days in the U.S., 31 days in Puerto Rico, and cruises the world the remaining 304 days. Ken does not meet the 183 Day Rule (only 31 days in Puerto Rico) or the 549 Day Rule (only 93 days over three years), but he meets the 90 Day Rule and the Earned Income Rule (no U.S. earned income and more days in Puerto Rico than the U.S.). He does not meet the No Significant U.S. Connection Rule because he maintains two U.S. homes. Ken meets two of the five alternative ways.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Julie Has Been Spending More Time in the U.S. Recently',
      },
      {
        type: 'paragraph',
        text: 'Julie spent 365 days in Puerto Rico in 2022, 124 days in 2023, and 60 days in 2024 (the rest of each year in the U.S.). For 2024, Julie meets the 549 Day Rule: across the three-year period 2022–2024 she was present in Puerto Rico for 549 days total, and at least 60 days in each individual year. Consequently, Julie meets the presence test for 2024.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'José Attends University in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'José, a U.S. citizen born in Puerto Rico who never left the island until college, spent 320 days in the U.S. during 2024 (his second year at a New York university), returning to Puerto Rico for 45 days over the summer. He did not work and is not registered to vote. José does not meet the 183 Day Rule or the 549 Day Rule, but his days of presence in the U.S. as a full-time student are not counted as U.S. presence days (Treas. Reg. §1.937-1(c)(3)(ii)(D)), so he meets the 90 Day Rule, the Earned Income Rule (no U.S. earned income, and more Puerto Rico days than counted U.S. days), and the No Significant U.S. Connection Rule (no permanent U.S. home, not registered to vote, no spouse or minor children with a U.S. abode). José meets three of the five alternative ways.',
      },
      {
        type: 'heading',
        level: 3,
        text: "Phil and Dorothy's Foreign Travel",
      },
      {
        type: 'paragraph',
        text: 'Phil and Dorothy, U.S. citizens who moved to Puerto Rico in 2023, spent 140 days in the U.S., 155 days in Puerto Rico, and 70 days in Europe during 2024. Because they spent more days in Puerto Rico than in the U.S. (155 vs. 140, not counting the extra days), a special rule lets them count up to 30 of their days spent outside both the U.S. and Puerto Rico as days present in Puerto Rico (Prop. Treas. Reg. §1.937-1(c)(3)(i)(D), on which taxpayers may rely). Adding 30 of their 70 European days brings their Puerto Rico presence to 185 days for 2024, meeting the 183 Day Rule.',
      },
      {
        type: 'heading',
        level: 3,
        text: "Beth's First Year in Puerto Rico (But a Hurricane Hit)",
      },
      {
        type: 'paragraph',
        text: 'Beth moved from California to Puerto Rico on June 22, 2024, planning to spend 192 days there by year-end to meet the 183 Day Rule. Tropical storm Ernesto forced her to leave on August 12, 2024, and she returned on August 22 once it was safe — 10 days away, all within 14 days of the storm\'s FEMA-declared major disaster incident period (August 13–16, 2024). An individual who leaves or cannot return to Puerto Rico within 14 days of such a declared disaster is still considered present in Puerto Rico for those days (Treas. Reg. §1.937-1(c)(3)(i)(C)). Although Beth was physically present for only 182 days, all 10 days away count as presence, giving her 192 days and satisfying the 183 Day Rule.',
      },
      {
        type: 'heading',
        level: 3,
        text: "Jane's First Year in Puerto Rico (But Caught COVID-19 While Visiting the U.S.)",
      },
      {
        type: 'paragraph',
        text: 'Jane moved from Florida to Puerto Rico on June 8, 2024 and flew to Florida on November 26 for Thanksgiving, planning to return November 30 and reach 202 days in Puerto Rico for the year. She contracted COVID-19, was hospitalized from November 28 through December 28, and returned to Puerto Rico December 29. Days spent outside Puerto Rico receiving qualifying medical treatment — including inpatient hospital care — count as days present in Puerto Rico (Treas. Reg. §1.937-1(c)(3)(i)(B)). Although physically present for only 172 days, her 30 hospitalized days count toward presence, giving her 202 days and satisfying the 183 Day Rule.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Summary',
      },
      {
        type: 'paragraph',
        text: 'As these examples demonstrate, there are multiple ways to meet the presence test. However, the presence test is only one of three tests — an individual must also meet the tax home test and the closer connection test to be considered a bona fide resident of Puerto Rico. It is equally important to remember that only Puerto Rico-source income qualifies for the Act 60 exclusion from U.S. tax; spending time working outside of Puerto Rico can result in unintended adverse U.S. tax consequences.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Expatriation', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'For some Act 60 participants, growing old in Puerto Rico is not a realistic part of the long-term plan. Few people relish the thought of returning to the mainland U.S. tax system after enjoying the enviable Act 60 tax benefits, and in some instances a return to the mainland regime is simply unimaginable — leading a number of individuals to explore renouncing their U.S. citizenship.',
      },
      {
        type: 'paragraph',
        text: 'Anticipating that U.S. citizens and long-term green card holders would attempt to minimize U.S. tax by expatriating, Congress established an exit tax regime under which an expatriate meeting certain financial thresholds is treated as having sold their worldwide assets for fair market value the day before expatriating (Code §877A(a)). This "mark-to-market" regime dissuades many high-net-worth taxpayers from expatriating, since much of their wealth is often tied up in non-liquid assets. However, there are unique planning opportunities for Act 60 participants who have been bona fide residents of Puerto Rico for more than ten years. The hypothetical below illustrates how these rules apply.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane are U.S. citizens and bona fide residents of Puerto Rico who were granted Act 22 (now Act 60) tax decrees. They relocated from California and have lived in Puerto Rico for 11 years; they are in their 50s, have been married over 30 years, and their grown children live in the U.S. Both have also obtained Irish citizenship through their parents and are considering renouncing their U.S. citizenship in order to move to Switzerland, having grown attached to Puerto Rico\'s low tax rates and unwilling to return to combined federal and state rates that can exceed 50%. They have discussed the immigration drawbacks of renunciation with counsel — including the risk of being refused re-entry to the U.S. under the Reed Amendment if tax avoidance is found to be a purpose of renouncing — and intend to be taxed in Switzerland under its special "forfait" regime.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane own 100% of a U.S. C corporation ("USCo," a 30-year-old profitable operating business) and 100% of a Puerto Rican entity ("PRCo," an Act 20/60 Export Services decree holder taxed at 4% with exempt dividends) to which USCo pays roughly $10 million per year in management fees. They plan to sell USCo for $70 million (tax basis $10 million) to a long-time employee via an installment note, electing out of installment reporting to recognize the full gain in the year of sale, and expect to continue earning about $2 million per year in consulting fees from USCo after the sale. They also own, through a jointly held U.S. LLC, U.S. real estate (basis $20 million, value $50 million), a Puerto Rico home (basis $5 million, value $9 million), U.S. equities (basis $40 million, value $60 million), and Jack holds a $3 million 401(k) with zero basis — a combined $117 million of unrealized gain across roughly $192 million of assets.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Issues Addressed',
      },
      {
        type: 'paragraph',
        text: 'The memo addresses nineteen issues raised by this fact pattern, including: whether renunciation triggers the mark-to-market regime; whether bona fide residents of Puerto Rico can exclude Puerto Rican-source income; whether the special former-U.S.-resident sourcing rules apply after 10+ years of residency; whether Jack and Diane would still be bona fide residents of Puerto Rico at the moment of renunciation if they first move to Switzerland; whether gain on the USCo sale, the Puerto Rico home, and the U.S. equities is Puerto Rican-source income; options for triggering gain recognition on other assets before residency terminates; the sourcing of gain on the U.S.-real-estate-holding LLC and on a sale of LLC interests; the 401(k) distribution rules tied to Form W-8CE; treaty relief (or lack of it) on installment-note interest and consulting income; the 40% "covered gift" tax under Code §2801 on gifts to U.S.-citizen children after renunciation; pre-renunciation gifting strategies; U.S. estate tax exposure on U.S.-situs assets after renunciation; and the Form 8854 expatriation filing obligation.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Summary Conclusions',
      },
      {
        type: 'list',
        items: [
          'Renouncing U.S. citizenship subjects Jack and Diane to the mark-to-market regime — they are treated as selling all worldwide property at fair market value the day before renunciation.',
          'Bona fide residents of Puerto Rico can generally exclude Puerto Rican-source income from U.S. taxable income.',
          'Because Jack and Diane have been bona fide residents for more than 10 years, the special former-U.S.-resident sourcing rules (which apply only within a 10-year window) do not apply to them.',
          'If they move to Switzerland and renounce citizenship at a U.S. embassy there, they would likely no longer be bona fide residents of Puerto Rico at that time, and could not exclude the mark-to-market gain.',
          'As long as the USCo sale occurs after their 10-year mark and before residency ends, the gain should be Puerto Rican-source income and excluded from U.S. tax (subject to a 5% Puerto Rico tax on pre-residency appreciation).',
          'There are multiple ways to trigger gain recognition on other assets before residency terminates, including bona fide sales to unrelated parties, contributions to a U.S. corporation for nonqualified preferred stock, or contributions to certain foreign corporations.',
          'Gains on the Puerto Rico home and U.S. equities should likewise be Puerto Rican-source income if recognized before residency ends.',
          'Delaying the sale of U.S. equities until after moving to Switzerland (but before renouncing) would make the gain non-Puerto-Rican-source, since their tax home would have shifted to Switzerland.',
          'It may make sense to trigger gain on the Puerto Rico home before listing it for sale, since listing it could itself suggest a shifted tax home or closer connection.',
          'Gain on a sale of U.S. real estate by the jointly held U.S. LLC would be U.S.-source income, not excludable.',
          'Gain on a sale of interests in the U.S. LLC itself should generally be Puerto Rican-source income (subject to unresolved case law on any portion attributable to unrealized receivables or inventory items under Code §751).',
          'If Jack files Form W-8CE with his 401(k) administrator within 30 days of renouncing, he avoids being treated as receiving a full distribution the day before renunciation; if he does not, he will be treated as receiving that full distribution.',
          'Jack and Diane cannot rely on the U.S.–Switzerland income tax treaty to avoid U.S. tax on installment-note interest, because Swiss "forfait" taxation prevents them from qualifying as Swiss treaty residents — though the portfolio interest exception may independently apply.',
          'Consulting fee income earned while physically working from Switzerland should not be U.S.-source income and should escape the 30% NRA withholding tax.',
          'Post-renunciation gifts or bequests to their U.S.-citizen children would be subject to a 40% tax under Code §2801 (though the reporting mechanics, via a not-yet-existent Form 708, remain deferred pending IRS guidance).',
          'Gifting assets to their children before renouncing, while still using their available gift/estate tax exemption, can avoid both the Code §2801 tax and U.S. gift/estate tax on those transfers.',
          'After renouncing, Jack and Diane would face U.S. estate tax only on U.S.-situs assets, but with an exemption reduced to just $60,000 — and U.S. corporation shares (like retained USCo consulting arrangements or U.S. equities) are treated as U.S.-situs.',
          'Both Jack and Diane must each file Form 8854 for the year they renounce; the penalty for failing to do so is $10,000.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Selected Discussion',
      },
      {
        type: 'paragraph',
        text: 'The mark-to-market regime under Code §877A applies to "covered expatriates" and taxes deemed gain (after an inflation-adjusted exclusion — $866,000 for 2024) at ordinary rates up to 37% or long-term capital gains rates up to 20%, plus the 3.8% net investment income tax, with an option to elect deferral (Code §877A(a)–(b)). Deferred compensation items, specified tax-deferred accounts, and certain non-grantor trust interests are excluded from mark-to-market treatment and follow separate rules (Code §877A(c)).',
      },
      {
        type: 'paragraph',
        text: 'U.S. citizens who are bona fide residents of Puerto Rico remain subject to U.S. tax on worldwide income (Cook v. Tait, 265 U.S. 47 (1924)), but can exclude Puerto Rican-source gross income under Code §933. Special sourcing rules under Treas. Reg. §1.937-2(f) treat gains on certain pre-residency investment property as non-Puerto-Rican-source for 10 years after the move — a window Jack and Diane have already passed. Gain on the sale of a business like USCo, or on personal property like U.S. equities, is generally sourced to the residence of the seller (Code §865(a)); Puerto Rico bona fide residents are exempted from the usual 10%-foreign-tax requirement for nonresident sourcing status (Notice 89-40). Real estate, by contrast, is always sourced to its location (Code §862(a)(5)), so the Puerto Rico home\'s gain is Puerto Rican-source while the U.S. LLC\'s real estate gain is U.S.-source regardless of the partners\' residence.',
      },
      {
        type: 'paragraph',
        text: 'An individual\'s tax home shifts based on principal place of business or, absent one, regular place of abode (Treas. Reg. §1.937-1(d)); a "year of move" rule allows an individual to be treated as a bona fide resident for the portion of the departure year during which they still have a closer connection to Puerto Rico (Treas. Reg. §1.937-1(f)(2)(ii)). Because U.S. embassy appointments to renounce citizenship can take months to secure, Jack and Diane would likely have already shifted their tax home to Switzerland well before the renunciation date itself — meaning the mark-to-market gain, recognized the day before renunciation, would not be excludable Puerto Rican-source income. This makes the timing and sequencing of asset sales, before departure from Puerto Rico, critical to the planning.',
      },
      {
        type: 'paragraph',
        text: 'After renunciation, Jack and Diane become nonresident aliens subject to 30% withholding on U.S.-source fixed and determinable income such as interest (Code §871(a)), though personal services income is sourced to where services are physically performed (Code §§861(a)(3), 862(a)(3)) — meaning Switzerland-based consulting income should escape U.S. withholding entirely. Separately, gifts and bequests from "covered expatriates" to U.S. citizens or residents are subject to a 40% tax under Code §2801, and Jack and Diane\'s estates would face U.S. estate tax only on U.S.-situs property (with stock of U.S. corporations treated as U.S.-situs) subject to a sharply reduced $60,000 exemption for non-U.S.-citizens (Code §2101–2104).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'If Jack and Diane were not 10-year residents of Puerto Rico and expatriated today, they would owe U.S. exit tax on roughly $114 million of deemed gain, resulting in a federal tax bill in the range of $25–$40 million. Because they are in the unique position of being 10+ year Act 60 residents of Puerto Rico, they have genuine planning opportunities to substantially eliminate that federal tax bill if they ultimately decide to expatriate — but the analysis is highly fact-specific, sequencing-dependent, and should not be undertaken without both U.S. tax counsel and an immigration attorney.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Entity Structuring'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Amy is a U.S. citizen who lives in the United States. Amy owns shares of marketable stock (the "Shares") that have appreciated in value. The Shares have a value of $22,000,000, and Amy\'s basis in the Shares is $2,000,000. If Amy were to sell the Shares, she would recognize a gain of $20,000,000.',
      },
      {
        type: 'paragraph',
        text: 'Amy would like to sell the Shares without paying U.S. tax on the gain. She has come across the Puerto Rico Act 60 program, which allows qualifying individuals to apply for a tax decree providing a 0% tax rate on Puerto Rico-source capital gains, dividends, and interest income. Amy understands that if she sells the Shares soon after becoming a bona fide resident of Puerto Rico, most or all of the gain will not be considered Puerto Rican-source income and cannot be excluded from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Amy has heard that gains on sales by partnerships flow through to their partners and are sourced at the partner level. Prior to her move, she wants to create a new partnership (the "Partnership") between herself and her wholly owned corporation, contributing the Shares for a 99% interest. Amy will then become a bona fide resident of Puerto Rico, and in her second year of residency, cause the Partnership to sell the Shares — hoping the resulting gain will be sourced to Puerto Rico and excluded entirely from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Can Amy Exclude the Gain?',
      },
      {
        type: 'paragraph',
        text: 'No. Amy cannot exclude any of the gain.',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of personal property recognized by partnerships are generally sourced at the partner level (Code §865(i)(5)), and gains from sales of personal property are generally sourced based on the residence of the seller (Code §865(a)). Amy will be a resident of Puerto Rico — so why can\'t she claim the gain on the Partnership\'s sale of the Shares is Puerto Rican-source income?',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Special Anti-Abuse Sourcing Rules',
      },
      {
        type: 'paragraph',
        text: 'Special rules apply to gains from dispositions of certain investment property (stocks, bonds, debt instruments, diamonds, gold, cryptocurrencies, etc.) owned prior to becoming a bona fide resident of Puerto Rico (Treas. Reg. §1.937-2(f)(1)). Under these rules, gains from dispositions of such property within 10 years after becoming a bona fide resident generally are treated as non-Puerto Rican-source income, unless the individual makes an election under Treas. Reg. §1.937-2(f)(1)(vi) to source a portion of the gain to Puerto Rico. Amy wants to argue the full amount of the gain is Puerto Rican-source income, so she will not make that election.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Are the Shares Property Described in (f)(1)(ii)?',
      },
      {
        type: 'paragraph',
        text: 'Yes. Property is described in Treas. Reg. §1.937-2(f)(1)(ii) when it is of a kind described in Code §731(c)(3)(C)(i) or §954(c)(1)(B), and was owned by the individual before becoming a bona fide resident. Shares of stock in a corporation are property described in Code §954(c)(1)(B) (property giving rise to dividend income), and the Shares were owned by Amy before she became a bona fide resident of Puerto Rico. So the Shares meet both conditions.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Will Amy Be an Individual Described in (f)(1)(iii)?',
      },
      {
        type: 'paragraph',
        text: 'Yes. An individual is described in Treas. Reg. §1.937-2(f)(1)(iii) when, for the year the source of the gain must be determined, the individual is a bona fide resident of Puerto Rico, and for any of the 10 preceding years was a citizen or resident of the United States (other than as a bona fide resident of Puerto Rico). In the Partnership\'s sale year, Amy will be a bona fide resident of Puerto Rico, and for 8 of the preceding 10 years she will have been a U.S. citizen or resident (other than as a Puerto Rico resident). She therefore meets this test.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Amy is determining the source of the gain on disposition of the Shares. Although it was the Partnership that sold the Shares, under the partnership sourcing rules the gain is determined at Amy\'s level, not the Partnership\'s. Because Amy previously owned the Shares directly, the Shares are property described in (f)(1)(ii), and Amy is an individual described in (f)(1)(iii). Consequently, the gain from disposition of the Shares will not be Puerto Rican-source income and cannot be excluded from Amy\'s U.S. taxable income — contributing appreciated pre-residency property to a partnership does not avoid the special anti-abuse sourcing rules.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Bona Fide Resident General Rules',
      },
      {
        type: 'paragraph',
        text: 'To qualify as a bona fide resident of Puerto Rico, an individual generally must meet a presence test, a tax home test, and a closer connection test. The presence test generally requires that the individual be present in Puerto Rico for at least 183 days during the year (Treas. Reg. §1.937-1(c)). The tax home test generally requires that the individual not have a tax home outside Puerto Rico during any part of the taxable year (Treas. Reg. §1.937-1(d)(1)). The closer connection test generally requires that the individual not have a closer connection to the United States or a foreign country than to Puerto Rico during any part of the taxable year (Treas. Reg. §1.937-1(e)(1)).',
      },
      {
        type: 'paragraph',
        text: 'In the year an individual moves to Puerto Rico, the individual cannot be treated as a bona fide resident under these general rules alone — for part of the year the individual did not have a tax home in Puerto Rico, and for part of the year did not have a closer connection to Puerto Rico. So under the general rules, even an individual who moved to Puerto Rico in January and spent more than 330 days there that year would not be treated as a bona fide resident for that year.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Special Rule for Year of Move To Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.937-1(f)(1) provides a special rule for the year an individual moves to Puerto Rico, waiving the tax home and closer connection requirements for the entire year — provided three requirements are met. First, the individual must not have been a bona fide resident of Puerto Rico for the 3 taxable years preceding the move (Treas. Reg. §1.937-1(f)(1)(i)). Second, the individual must meet the tax home and closer connection requirements for the last 183 days of the year of the move (Treas. Reg. §1.937-1(f)(1)(ii)). Third, the individual must be a bona fide resident of Puerto Rico for each of the 3 taxable years immediately following the year of the move (Treas. Reg. §1.937-1(f)(1)(iii)).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example',
      },
      {
        type: 'paragraph',
        text: 'Rich, a U.S. citizen, moved to Puerto Rico in May of 2021 and spent more than 183 days there that year. He was not a bona fide resident of Puerto Rico for any of the 3 taxable years immediately preceding 2021, and he met the tax home and closer connection requirements for the last 183 days of 2021. As long as Rich remains a bona fide resident of Puerto Rico for each of 2022, 2023, and 2024, he can be treated as a bona fide resident of Puerto Rico for 2021 — even though he moved partway through the year. If instead Rich were to return to the U.S. in 2024 (rather than 2025), a question arises as to whether he satisfies the requirement that he be a bona fide resident "for each of the 3 taxable years immediately following" 2021.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Special Rule for Year of Move From Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'There are also special rules for the year of a move from Puerto Rico: generally, an individual can be treated as a bona fide resident of Puerto Rico for part of that year if certain requirements are met (Treas. Reg. §1.937-1(f)(2)(ii)). So if Rich moves back to the U.S. in 2024, he may be a bona fide resident of Puerto Rico for part of 2024 — but that raises the question of whether a partial year counts toward the "each of the 3 taxable years immediately following" requirement for his 2021 move-in year.',
      },
      {
        type: 'paragraph',
        text: 'One way to narrow the question: was Rich a bona fide resident of Puerto Rico for the taxable year 2024? A reference to "the" taxable year would seem to imply the full taxable year, which would mean Rich needs to remain a bona fide resident of Puerto Rico until sometime in 2025 to secure treatment as a bona fide resident for 2021. However, there may be an argument that partial-year residency in 2024 satisfies the requirement, since Treas. Reg. §1.937-1(f)(1)(iii) refers only to "the 3 taxable years" without expressly requiring "full" taxable years — leaving room to argue that only part of 2024 is needed. Because the law in this area is not clear, we would highly recommend that an individual in Rich\'s position remain a bona fide resident of Puerto Rico throughout the entire following taxable year, rather than terminating residency status partway through it.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Trusts', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Individuals who move to Puerto Rico to avail themselves of Act 60 benefits often hold their assets through a living trust. Holding assets through a U.S. living trust may raise complex U.S. tax issues for bona fide residents of Puerto Rico. This article discusses whether the IRS will treat a U.S. living trust of a bona fide resident of Puerto Rico as a "foreign trust" under U.S. tax principles — foreign trusts are subject to multiple layers of U.S. tax filing requirements with hefty penalties for noncompliance.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Beth is a U.S. citizen who lives in California. Years ago, she created a trust in California (the "Living Trust") and transferred $20 million of her assets into it, primarily to avoid the California probate process, while also enjoying its privacy, asset protection, and estate tax planning benefits. Beth is both settlor and sole trustee, and the trust document gives her the right to revoke or amend it at any time during her lifetime — making it a "revocable" trust with no automatic migration provision. Years later, Beth moves to Puerto Rico, becomes a bona fide resident, and now administers the Living Trust from her home there.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Living Trust Is a Grantor Trust',
      },
      {
        type: 'paragraph',
        text: 'A grantor of a trust is treated as the owner of all or a portion of the trust\'s income (Treas. Reg. §1.671-3(a)), and a grantor treated as owner of the entire trust under Code §671 is treated as owner of all its income and, for certain purposes, its assets (Treas. Reg. §1.671-3(a)(1); Rev. Rul. 85-13). A grantor is treated as the owner of a trust if she has the power to revoke it (Code §676). Because Beth is the sole grantor of the Living Trust and holds the power to revoke it, the Living Trust is a grantor trust with respect to her, and its income is taxable directly to her.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'U.S. Tax Filings for U.S. Grantor Trusts',
      },
      {
        type: 'paragraph',
        text: 'Income of a grantor trust is generally not reported on Form 1041; instead it is shown on a statement attached to a blank Form 1041 (Treas. Reg. §1.671-4(a)). As an alternative, the trustee need not file any return if the entire trust is owned by one grantor, provided the trustee furnishes certain information to payors and gives the grantor a statement showing all items of income, deduction, and credit; identifying the payor of each item; providing the information needed to compute the grantor\'s taxable income; and informing the grantor that those items must be included on the grantor\'s own return (Treas. Reg. §1.671-4(b)(2)(B)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'U.S. Tax Filings for Foreign Grantor Trusts',
      },
      {
        type: 'paragraph',
        text: 'Each U.S. person treated as owner of any portion of a foreign trust under the grantor trust rules (Code §§671–679) must ensure the trust annually files a return setting forth a full and complete accounting of all trust activities and operations, the name of the trust\'s U.S. agent, and other prescribed information (Code §6048(b)(1)(A)) — satisfied by filing Form 3520-A. In addition, any U.S. person who is a beneficiary of a foreign trust and receives a distribution must file an information return reporting the trust\'s name, the aggregate distribution amount, and other prescribed information (Code §6048(c)(1)) — satisfied by filing Form 3520 (Notice 97-34).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Trusts as Domestic or Foreign',
      },
      {
        type: 'paragraph',
        text: 'A foreign trust is any trust that is not a "United States person" — in other words, any trust that is not domestic (Code §7701(a)(30)(E), (31)(B); Treas. Reg. §301.7701-7(a)(2)). A trust is domestic only if it satisfies a two-part test: (1) a court within the United States is able to exercise primary supervision over the administration of the trust (the "Court Test"), and (2) one or more U.S. persons have authority to control all substantial decisions of the trust (the "Control Test") (Code §7701(a)(30)(E); Treas. Reg. §301.7701-7(a)). Failing either test makes the trust foreign for federal tax purposes.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Court Test',
      },
      {
        type: 'paragraph',
        text: 'There are two ways to meet the Court Test: a Safe Harbor, and a General Rule. Under the Safe Harbor, a trust satisfies the Court Test if its governing document does not direct administration outside the U.S., the trust is in fact administered exclusively in the U.S., and it is not subject to an automatic migration provision that would move it abroad if a U.S. court asserted jurisdiction (Treas. Reg. §301.7701-7(c)(1), (4)(ii)). "Administration" includes maintaining books and records, filing tax returns, managing and investing assets, defending against creditor suits, and determining distributions (Treas. Reg. §301.7701-7(c)(3)(v)). For this purpose, "the United States" means only the 50 states and the District of Columbia — a court within Puerto Rico is not a court within the U.S. (Code §7701(a)(9); Treas. Reg. §301.7701-7(c)(2)). Because Beth administers the Living Trust from Puerto Rico, it is not administered exclusively in the U.S. and does not meet the Safe Harbor.',
      },
      {
        type: 'paragraph',
        text: 'Under the General Rule, the Court Test is met if a U.S. court is able to exercise "primary supervision" over the trust\'s administration — meaning it has or would have authority to resolve substantially all administration issues, even if another court also has jurisdiction over a trustee, beneficiary, or trust property (Treas. Reg. §301.7701-7(c)(3)(iii)–(iv)). If both a U.S. court and a foreign court could exercise primary supervision, the Court Test is still met (Treas. Reg. §301.7701-7(c)(4)(i)(D)). Where a trust is administered from Puerto Rico, the regulations offer no clear guidance on whether a U.S. or Puerto Rican court would have primary supervision; relevant factors might include where the trust was formed, where the trustee resides and makes decisions, where the trust\'s property is located, where beneficiaries are located, and what the governing documents say about applicable law and dispute resolution. Separately, if fiduciaries or beneficiaries of a non-testamentary trust take steps with a U.S. court that subject the trust\'s administration to that court\'s primary supervision, the Court Test is met (Treas. Reg. §301.7701-7(c)(4)(i)(C)) — though the regulations do not specify what steps are required. In the absence of clear guidance, a bona fide resident of Puerto Rico administering a living trust from the island should obtain individualized legal advice on whether the Court Test is met.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Control Test',
      },
      {
        type: 'paragraph',
        text: 'The Control Test is met if one or more U.S. persons have authority to control all substantial decisions of the trust. Because Beth is a U.S. citizen (a U.S. person under Code §7701(a)(30)(A)) and controls all substantial decisions of the Living Trust, it should meet the Control Test. Because the Living Trust meets the Control Test, its status as a foreign trust ultimately turns on whether it meets the Court Test — a determination that requires individualized legal advice based on the specific facts.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Potential Penalties If a Foreign Trust',
      },
      {
        type: 'paragraph',
        text: 'If the Living Trust is a foreign trust, failure to timely and fully disclose on Form 3520 results in a penalty equal to the greater of $10,000 or 35% of the "gross reportable amount" — the gross value of the property involved in the reportable event (Code §6677(a), (c)). A domestic trust that becomes a foreign trust is deemed to have transferred all its assets to a foreign trust, an event requiring Form 3520 disclosure (Code §6048(a)(3)(A)(ii); Notice 97-34, §III.B). If Beth\'s move to Puerto Rico caused the Living Trust to become foreign, she would need to disclose that deemed transfer — and on $20 million of assets, a failure to file could carry a $7 million penalty (35% × $20,000,000).',
      },
      {
        type: 'paragraph',
        text: 'A U.S. person receiving a distribution from a foreign trust must also report it on Form 3520 (Code §6048(c)); failing to do so triggers a 35% penalty on the gross distribution amount (Code §6677(a)). Separately, failing to file Form 3520-A carries a penalty equal to the greater of $10,000 or 5% of the trust\'s gross reportable assets at year-end attributable to the U.S. owner (Code §6677(a)-(b), (c)(2)) — on a $20 million trust, that could mean a $1 million penalty each year the form is not filed.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Summary',
      },
      {
        type: 'paragraph',
        text: 'It is important for a bona fide resident of Puerto Rico administering a U.S. living trust from the island to determine whether that move causes the trust to become a foreign trust for U.S. tax purposes. If so, Form 3520 and Form 3520-A reporting obligations arise, with very substantial penalties for noncompliance — and failing to file these returns also keeps the statute of limitations open indefinitely on the IRS\'s ability to examine the returns and assess penalties.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Payroll Tax', 'Act 60'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Facts (the "Base Case")',
      },
      {
        type: 'paragraph',
        text: 'Katy is a U.S. citizen who is a bona fide resident of Puerto Rico. Katy owns 100% of a Puerto Rican LLC ("PRLLC"), classified as a corporation for both Puerto Rican and U.S. tax purposes. PRLLC performs services entirely in Puerto Rico and receives arm\'s-length service fee income from unrelated parties, with gross revenue of $1,200,000 and total expenses (including Katy\'s salary) of $500,000. Katy\'s salary is $350,000 — reasonable in relation to her services (Treas. Reg. §1.162-7(a)) and paid purely for services rendered, all performed in Puerto Rico, making it Puerto Rican-source income (Code §861(a)(3); Treas. Reg. §1.861-4).',
      },
      {
        type: 'heading',
        level: 2,
        text: "U.S. Income Taxes on Katy's Salary",
      },
      {
        type: 'paragraph',
        text: 'U.S. citizens are generally taxed on worldwide income (Code §61(a); Cook v. Tait, 265 U.S. 47 (1924)), but bona fide residents of Puerto Rico can exclude Puerto Rican-source income (Code §933). Because Katy is a bona fide resident and all her PRLLC services are performed in Puerto Rico, she can exclude her $350,000 salary from U.S. taxable income. Puerto Rico may separately impose its own income tax on the salary, but that is a Puerto Rican tax collected by the Puerto Rican government, not a U.S. federal tax.',
      },
      {
        type: 'heading',
        level: 2,
        text: "U.S. FICA Taxes on Katy's Salary",
      },
      {
        type: 'paragraph',
        text: '"United States," used geographically, generally includes only the 50 states and D.C. (Code §7701(a)(9)) — so PRLLC is a foreign, not domestic, corporation (Code §7701(a)(4)). However, "wages" means all remuneration for "employment" (Code §3121(a)), and "employment" includes services performed by an employee within the United States (Code §3121(b)) — and for FICA purposes specifically, "United States" is defined to include Puerto Rico (Code §3121(e)). So Katy\'s services are performed by an employee "within the United States" for FICA purposes, making her PRLLC salary subject to U.S. FICA tax (Code §§3101(a)-(b), 3111(a)-(b)) even though it is excluded from federal income tax. PRLLC reports the wages and withheld FICA tax to the IRS on Form 941 (PR), and may separately withhold Puerto Rican income tax, which is retained by the Puerto Rican government.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Alternative Facts: PRLLC as a Disregarded Entity',
      },
      {
        type: 'paragraph',
        text: 'Assume the same facts, except PRLLC elects to be a disregarded entity for U.S. tax purposes (Treas. Reg. §301.7701-3(a)) while remaining a corporation for Puerto Rican tax purposes. A disregarded entity\'s activities are treated as a sole proprietorship, branch, or division of its owner (Treas. Reg. §301.7701-2(a)), with no existence separate from the owner for U.S. federal tax purposes (Whirlpool Fin. Corp. & Consol. Subs. v. Commr., 154 T.C. 142 (2020)).',
      },
      {
        type: 'paragraph',
        text: 'Under this structure, payments between Katy and PRLLC are disregarded: Katy has gross income of $1,200,000 and deductions of $150,000 (the $500,000 of total expenses less the disregarded $350,000 salary). Because all of PRLLC\'s gross services income derives from Puerto Rico, the full $1,200,000 can be excluded from Katy\'s gross income under Code §933, and the $150,000 of expenses properly allocable to that excluded income are disallowed for U.S. tax purposes (Code §933(1)) — so none of the $1,050,000 net income is taxable to Katy, the same as in the Base Case.',
      },
      {
        type: 'paragraph',
        text: 'However, the U.S. imposes self-employment tax on net earnings from self-employment (Code §1401), defined as gross income from a trade or business less attributable deductions (Code §1402(a)-(b)). Because PRLLC\'s activities are attributed to Katy under the disregarded-entity structure, she has net earnings from self-employment of $1,050,000, subject to U.S. self-employment tax — a result the Base Case does not trigger.',
      },
      {
        type: 'paragraph',
        text: 'On the FICA side, because payments between Katy and PRLLC are disregarded for U.S. tax purposes, Katy is not treated as receiving a salary from PRLLC federally, even though Puerto Rican tax law (where PRLLC remains a corporation) treats her as receiving one. When PRLLC files its U.S. payroll tax returns, it should not treat Katy as receiving a salary, so none of Katy\'s income should be subject to FICA tax under these alternative facts (Treas. Reg. §301.7701-2(c)(2)(iv)(C)(2): a disregarded entity "is not treated as a corporation for purposes of employing its owner ... the owner will be subject to self-employment tax on self-employment income with respect to the entity\'s activities").',
      },
      {
        type: 'paragraph',
        text: 'In short: keeping PRLLC classified as a corporation subjects Katy\'s salary to FICA tax (but not income tax), while electing disregarded-entity status trades FICA tax for self-employment tax on the full net income — a structuring decision that should be made deliberately with the tradeoffs in mind.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Puerto Rico\'s Act 60 program has seen more than five thousand U.S. taxpayers move to the island since the program\'s inception in 2012 to take advantage of its once-in-a-lifetime tax benefits. Eventually, many of these taxpayers will return and transition back to life on the mainland. When an individual decides to leave, questions arise: is the individual a bona fide resident of Puerto Rico at all during the year of the departure? Can income earned in that year still be excluded from U.S. taxable income? This article discusses those questions through a detailed example.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Betty, a U.S. citizen, has been a bona fide resident of Puerto Rico since May 2019. In 2023 she decided to move to New York, relocating on August 1, 2023, having been present in Puerto Rico every day from January 1 through August 1 with her principal place of business and closer connection remaining there until the move. Her financial picture for 2023: she sold her Puerto Rico home (purchased in 2020 for $2 million) for $7 million, a $5 million gain; she sold U.S. publicly traded stock (purchased in 2020 for $1 million, gain not attributable to any U.S. office or fixed place of business) for $5 million, a $4 million gain; her wholly owned Puerto Rican Act 60 export-services company, PRCo (which met the 80%/50% Puerto Rico-source tests of Treas. Reg. §1.937-2(g)(1)(ii)), paid her a $3 million dividend in January and then liquidated on July 1, distributing $2,100,000 against her $100,000 basis for a $2 million gain; and she earned and was fully paid a $200,000 salary from PRCo for services performed in Puerto Rico, all before August 1.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Was Betty a Bona Fide Resident for Part of 2023?',
      },
      {
        type: 'paragraph',
        text: 'Yes. A special "year of move from Puerto Rico" rule (Treas. Reg. §1.937-2(f)(2)(ii)) treats an individual as a bona fide resident for the part of the year before departure if the individual: is a U.S. citizen; was a bona fide resident for at least the 2 preceding taxable years; ceases to be a bona fide resident during the year; ceases to have a tax home in Puerto Rico during the year; and had a closer connection to Puerto Rico than to the U.S. or a foreign country throughout the part of the year before the tax home changed. Betty meets all five conditions, so she is treated as a bona fide resident of Puerto Rico through August 1, 2023.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Year-of-Departure Exclusion Rule',
      },
      {
        type: 'paragraph',
        text: 'Code §933(2) allows a U.S. citizen who has been a bona fide resident of Puerto Rico for at least 2 years before changing residence to exclude Puerto Rican-source income "attributable to that part of such period of Puerto Rican residence before such date." Two conditions must be met: the income must be Puerto Rican-source, and it must be attributable to the period of actual Puerto Rican residence.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale of the Puerto Rico Home',
      },
      {
        type: 'paragraph',
        text: 'Gains on real estate are sourced to the property\'s location (Code §§861(a)(5), 862(a)(5)), so the $5 million gain on Betty\'s Puerto Rico home is Puerto Rican-source and attributable to her residency period — excludable from U.S. tax. Even if she had instead sold the home on September 1, 2023 (after moving to New York), the gain would still be Puerto Rican-source real estate income and, absent unusual circumstances in that one month, still substantially attributable to her Puerto Rico residency — so it likely would still have been excludable.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale of U.S. Stocks',
      },
      {
        type: 'paragraph',
        text: 'Gains on personal property like stock are generally sourced to the seller\'s residence (Code §865(a)), and a bona fide resident of Puerto Rico is treated as a nonresident for this purpose (Code §865(g)) without the usual 10%-foreign-tax requirement (Notice 89-40). Because Betty had her tax home in Puerto Rico when she sold the U.S. stocks, and the gain was not attributable to a U.S. office or fixed place of business, the $4 million gain is Puerto Rican-source and excludable. Critically, this result flips entirely on timing: had she instead sold the stock on September 1, 2023 (after her tax home moved to New York), she would have been a U.S. resident for sourcing purposes at that point, making the gain U.S.-source and not excludable at all.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo Dividend and Liquidation Gain',
      },
      {
        type: 'paragraph',
        text: 'Because PRCo met the 80%/50% Puerto Rico-source tests, the entire $3 million dividend is Puerto Rican-source and, received while Betty was still a bona fide resident, is excludable. The $2 million gain on PRCo\'s liquidation is treated as a sale of her PRCo stock (Code §331), again sourced to her residence at the time (Code §865(a), (g)) — since she still had her Puerto Rico tax home on the July 1 liquidation date, the gain is Puerto Rican-source and excludable. As with the stock sale, had the liquidation instead occurred on September 1, 2023, after her move, the gain would have been U.S.-source and not excludable.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Puerto Rico Salary',
      },
      {
        type: 'paragraph',
        text: 'Compensation for services performed in Puerto Rico is Puerto Rican-source income (Code §861(a)(3)), so Betty\'s $200,000 salary, earned and received while she was a bona fide resident, is excludable. Had a portion of that salary instead been paid on September 1, 2023 but attributable to services she performed in Puerto Rico before August 1, that portion should still have been excludable, since the source and the attributable residency period do not change merely because payment is delayed slightly.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Form 8898 Filing Requirement',
      },
      {
        type: 'paragraph',
        text: 'An individual who takes the position that they ceased to be a bona fide resident of Puerto Rico for a taxable year must file Form 8898 (Code §937(c)); the penalty for failing to do so is $1,000 (Code §6688). Because Betty ceased Puerto Rico residency in 2023, she must file Form 8898 for that year, mailed separately rather than attached to Form 1040.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Betty's 2019 Move-In Exclusion Is Not Jeopardized",
      },
      {
        type: 'paragraph',
        text: 'Betty moved to Puerto Rico partway through 2019 and still excluded Puerto Rican-source income earned that year under the "year of move" exception (Treas. Reg. §1.937-1(f)(1)), which requires remaining a bona fide resident for each of the 3 taxable years immediately following the move. Because Betty remained a bona fide resident throughout 2020, 2021, and 2022, her 2023 departure does not retroactively jeopardize her 2019 exclusion.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'An Unresolved Question: Income Received After the Move-Out Year',
      },
      {
        type: 'paragraph',
        text: 'A separate issue arises if Puerto Rican-source income attributable to the residency period is received in a later calendar year — for example, if Betty had sold her Puerto Rico home in 2024. In Rev. Rul. 68-7, the IRS held that income received in a year after the year of the move could not be excluded, even if Puerto Rican-source and attributable to the residency period. However, neither Code §933(2) nor its regulations expressly limit the exclusion to only the year of the move; the IRS\'s position appears to rest on the statutory heading "Taxable year of change of residence from Puerto Rico," and the Supreme Court has repeatedly held that statutory headings cannot limit the plain meaning of the operative text (FTC v. Mandel Brothers, 359 U.S. 385 (1959); Bhd. of R.R. Trainmen v. Balt. & Ohio R.R., 331 U.S. 519 (1947)). Because the underlying rule is narrow already (Puerto Rican-source income attributable to the residency period only), it is far from clear that Rev. Rul. 68-7 correctly forecloses exclusion for income simply received in a later year.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Credits'],
    content: [
      {
        type: 'paragraph',
        text: 'Warm breezes, white sand, stunning sunsets. These are the images most people conjure when thinking of Puerto Rico. They often overlook the unwelcome and frequent power outages that seem to accompany every major storm and sometimes happen without explanation — the electric grid has one major power line which, if compromised, can bring down the entire system. Power outages are not unique to Puerto Rico; many residents moved from areas where solar power and backup generators were already common, especially during storms. Understandably, many residents, especially Act 60 recipients, want a reliable backup power source, and the federal tax credit available to offset the cost of such systems is often an attractive incentive to make the investment.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Example',
      },
      {
        type: 'paragraph',
        text: 'Katie and Michael moved to Puerto Rico to take advantage of the Act 60 program and need a reliable power source because they work from home. They want to use the federal tax credit to offset the cost of installing solar panels with a battery storage system to ensure they have alternative power in case of an outage.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Federal Tax Credit',
      },
      {
        type: 'paragraph',
        text: 'Code §25D allows a tax credit for qualified expenditures on residential energy-efficient property. A "qualified solar electric property expenditure" is an expenditure for property "which uses solar energy to generate electricity for use in a dwelling unit located in the United States and used as a residence by the taxpayer." Code §7701(a)(9) provides that "United States," used geographically, "includes only the States and the District of Columbia" — it does not include U.S. territories, which the Code and regulations generally refer to as "possessions." Code §25D does not modify this definition.',
      },
      {
        type: 'paragraph',
        text: 'Because Katie and Michael\'s property is located in Puerto Rico, it is treated as not being in the "United States" for purposes of Code §25D. Consequently, no federal tax credit is available for solar panels installed at their Puerto Rico home.',
      },
      {
        type: 'paragraph',
        text: 'Even though the federal tax credit is not available for solar panels installed in a Puerto Rico home, it can nevertheless be a worthwhile investment to make life on the island more resilient during power outages.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Corporate Transparency Act', 'Compliance'],
    content: [
      {
        type: 'paragraph',
        text: 'The Corporate Transparency Act of 2024 (CTA) is being heralded as a game changer in the fight against financial crime. Effective January 1, 2024, the CTA mandates the creation of a national database exposing the true owners of U.S. companies and companies authorized to do business in the U.S. — their "beneficial owners" (BOs) — to combat the use of shell companies for money laundering, terrorism financing, and other illicit purposes. Certain entities must disclose identifying information about the people who own or control them, and about the individuals who formed or registered them, to the Financial Crimes Enforcement Network (FinCEN).',
      },
      {
        type: 'paragraph',
        text: 'This raises questions for U.S. taxpayers who are bona fide residents of Puerto Rico: if you own or control a U.S. company, or a company registered to do business in the U.S., does the CTA apply? What if you own a Puerto Rico entity instead? What if you are a joint owner? If the CTA applies, what must you file, and by when?',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Who Must File',
      },
      {
        type: 'paragraph',
        text: 'The CTA applies to non-exempt "Reporting Companies" — a corporation, LLC, or similar entity created by filing with a secretary of state (or similar office) under state or tribal law, or a foreign entity registered to do business in the U.S. in the same manner (31 U.S.C. §5336(a)(11)). For this purpose, "state" expressly includes Puerto Rico and other U.S. commonwealths, territories, and possessions (31 U.S.C. §5336(a)(12)) — so an entity formed in Puerto Rico that is not otherwise exempt is a domestic Reporting Company.',
      },
      {
        type: 'paragraph',
        text: 'Common exemptions include securities reporting issuers; registered money transmitting businesses; registered brokers or dealers; SEC-registered investment companies and investment advisers; certain investment advisers that have filed specified schedules of Form ADV; and "large operating companies" — those with a physical U.S. presence, more than 20 U.S. employees, and over $5,000,000 in prior-year gross revenue reported on a U.S. tax return. This list is not exhaustive, and each entity\'s exemption status must be individually analyzed.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Information Required to Be Reported',
      },
      {
        type: 'paragraph',
        text: 'A Reporting Company must file a report disclosing each beneficial owner\'s name, date of birth, address, and a government-issued ID number (the "CTA Report"), stored securely but accessible to law enforcement and authorized government officials. Depending on the entity\'s formation date, it must also disclose certain information about "Company Applicants" — individuals who directly filed the formation document or who were primarily responsible for directing or controlling that filing (31 C.F.R. §1010.380(e)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Identifying the Beneficial Owner',
      },
      {
        type: 'paragraph',
        text: 'A beneficial owner is any individual who, directly or indirectly, owns or controls at least 25% of the ownership interests of a Reporting Company, or who exercises "substantial control" over it. Substantial control includes being a senior officer, having authority to appoint or remove certain officers or a majority of directors, being an important decision-maker, or otherwise having any form of substantial control. Whether the CTA applies to you specifically requires careful consideration of your ownership structure, control arrangements, exemption eligibility, and who formed or registered the entity.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Timing of Filings',
      },
      {
        type: 'paragraph',
        text: 'For domestic Reporting Companies (which, again, includes Puerto Rico entities): those created before January 1, 2024 must file by January 1, 2025; those created on or after January 1, 2024 but before January 1, 2025 must file within 90 calendar days of formation; and those created on or after January 1, 2025 must file within 30 calendar days of formation (31 C.F.R. §1010.380(a)(1)(i)-(ii)). An entity that was previously exempt but no longer qualifies for any exemption must file within 30 calendar days after it stops meeting the exemption criteria. Updated or corrected reports are required by specified deadlines whenever previously filed information changes — including a beneficial owner\'s name, address, or the addition of a new beneficial owner.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Examples',
      },
      {
        type: 'paragraph',
        text: 'Colin, a bona fide resident of Puerto Rico as of January 1, 2024, is the sole owner of an Act 60 Puerto Rico LLC, three U.S. entities, and an SEC-registered investment adviser entity, all formed before that date. Colin is a beneficial owner of all four, but the investment adviser entity is exempt from CTA reporting — so he must file CTA Reports only for the Puerto Rico LLC and the three U.S. entities, each due no later than January 1, 2025. If Colin misses that deadline, he faces escalating fines from $500 to $10,000 per violation and up to two years of jail time. If Colin later forms a new Puerto Rico LLC on June 1, 2024, that entity\'s CTA Report is due within 90 days, by September 1, 2024. And if Colin subsequently moves to a new home or renews an expiring passport used as his identification on a prior filing, he must file an updated CTA Report reflecting the change within 30 days for every entity affected.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Next Steps',
      },
      {
        type: 'paragraph',
        text: 'Navigating the CTA\'s intricacies can be complex, so consulting with a qualified attorney is important — they can analyze your specific ownership and control structure, determine your reporting requirements, and guide you through filing. Failing to comply can lead to significant fines and potential criminal penalties. All U.S. taxpayers who are bona fide residents of Puerto Rico should discuss CTA reporting requirements with counsel, and at a minimum should be prepared to file CTA Reports for their Puerto Rico Act 60 companies and any other U.S. entities they own, keeping those filings updated as information changes.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Form 5471', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'This memorandum discusses the Form 5471 filing requirements for a bona fide resident of Puerto Rico ("BFR of PR") with respect to a Puerto Rican corporation ("PRCo"). Form 5471 satisfies the reporting requirements of Code §§6038 and 6046 for certain U.S. persons who are officers, directors, or shareholders of certain foreign corporations. Most Puerto Rico companies are organized as LLCs; a Puerto Rico LLC that has not elected flow-through treatment is treated as a corporation for U.S. purposes (Treas. Reg. §301.7701-3(b)(2)(i)(B)).',
      },
      {
        type: 'paragraph',
        text: 'In our fact pattern, the BFR of PR was a bona fide resident of Puerto Rico for the entire year and owns 100% of PRCo. PRCo earns solely U.S.-source income but is not engaged in a trade or business in the U.S. or in Puerto Rico. There are five categories of Form 5471 filer.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Category 1 and Category 5 Filers',
      },
      {
        type: 'paragraph',
        text: 'Category 1 applies to Code §965 specified foreign corporations, and would apply if PRCo qualifies as one. Category 5 applies to U.S. shareholders of controlled foreign corporations (CFCs) — but a bona fide resident of Puerto Rico is not treated as a "US person" for this specific category if a dividend from the Puerto Rican corporation would, under Code §933(1), be treated as Puerto Rican-source income (Treas. Reg. §1.957-3(b); note the special 80/50 rules of Treas. Reg. §1.937-2(g)(1) do not apply for this determination — the ordinary dividend-sourcing rule of Code §861(a)(2)(B) applies instead).',
      },
      {
        type: 'paragraph',
        text: 'Under Code §861(a)(2)(B), a dividend from PRCo is entirely Puerto Rican-source unless 25% or more of PRCo\'s gross income over the prior 3-year period was effectively connected with a U.S. trade or business ("ECI"). Because PRCo is not engaged in a U.S. trade or business, none of its income is ECI, so any dividend is entirely Puerto Rican-source under this rule. Consequently, the BFR of PR is not a "US person" under Code §957(c)(1) and Treas. Reg. §1.957-3(b) with respect to PRCo, is not a "US shareholder" of PRCo (Code §951(b)), PRCo is not a CFC (Code §957(a)), and the BFR of PR is therefore not a Category 5 filer with respect to PRCo.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Category 2, 3, and 4 Filers Use a Different "US Person" Test',
      },
      {
        type: 'paragraph',
        text: 'Unlike the Category 5 test, the "US person" definitions for Category 2/3 filers (Treas. Reg. §1.6046-1(f)(3)(ii)(A)) and Category 4 filers (Treas. Reg. §1.6038-2(d)(2)(i)) both incorporate Treas. Reg. §1.957-3(b) but apply the special 80/50 rules of Treas. Reg. §1.937-2(g)(1). Under those rules, a dividend from PRCo is entirely Puerto Rican-source only if (A) 80% or more of PRCo\'s gross income over a 3-year testing period is Puerto Rico-source or effectively connected with a Puerto Rico trade or business, and (B) 50% or more of PRCo\'s gross income for that period is derived from the active conduct of a trade or business within Puerto Rico. Because PRCo is not engaged in an active trade or business in Puerto Rico, it fails this 80/50 test.',
      },
      {
        type: 'paragraph',
        text: 'When the 80/50 test is not met, only a "possessions source ratio" of PRCo\'s dividends is Puerto Rico-source — a fraction of PRCo\'s Puerto Rico-source gross income over its total gross income for the testing period (Treas. Reg. §1.937-2(g)(1)(i)(A)). Because PRCo earns only U.S.-source income, none (or only a portion) of a dividend would be Puerto Rican-source under this ratio. As a result, for Category 2, 3, and 4 purposes specifically, the BFR of PR is treated as a "US person" with respect to PRCo — meaning normal Form 5471 filing obligations apply: an annual Category 4 filing, and Category 2/3 filings in any year the BFR of PR acquires a 10% or greater interest in PRCo.',
      },
      {
        type: 'paragraph',
        text: 'This outcome is intentional. The preamble to Treasury Decision 9391, which promulgated these regulations, explains that "the information required under sections 6038 and 6046 is necessary for purposes of determining whether [bona fide residents of Puerto Rico] have a Federal income tax liability," and that the final regulations "continue to apply the 80/50 conditions ... when defining United States person for purposes of the information reporting requirements." In short: a Puerto Rico corporation without an active Puerto Rico trade or business does not give its bona fide-resident owner an escape from Form 5471 reporting, even if the owner\'s dividend income from that corporation is otherwise excluded from U.S. income tax.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Capital Gains', 'Sourcing'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Individual A is a U.S. citizen who is a bona fide resident of Puerto Rico with a tax home in Puerto Rico. Under Act 60 (formerly Act 22), capital gains recognized by Individual A are excluded from Puerto Rican taxable income. Individual A purchases shares of stock after becoming a bona fide resident of Puerto Rico, and later sells the shares at a loss (the "Stock Loss") while still a bona fide resident. The question: should the Stock Loss be allocated against Puerto Rican-source income or non-Puerto Rican-source income?',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Gains as Foreign-Source Income — the 10% Foreign Tax Rule',
      },
      {
        type: 'paragraph',
        text: 'Under Code §865(a), the source of income from a sale of personal property (like stock) is determined by the seller\'s residence at the time of sale. However, Code §865(g)(2) provides that gains recognized by a U.S. citizen or resident alien who is, at the time of sale, a resident of a foreign country are still treated as U.S.-source income unless the person pays a foreign income tax on the gain of at least 10%.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Symmetrical Rule for Losses?',
      },
      {
        type: 'paragraph',
        text: 'When Congress enacted Code §865, it directed Treasury to issue regulations governing the source of losses on personal property sales (Code §865(j)(1)), anticipating that "losses from sales of personal property generally will be allocated consistently with the source of income that gains would generate" (1986 Bluebook). Because losses are not gross income, they are not sourced under the normal rules — instead they are allocated against gross income (Treas. Reg. §1.861-8(a)(1)). Treas. Reg. §1.865-2(a)(1) provides that stock losses are allocated against the type of gross income a gain on the same stock would have generated, and Treas. Reg. §1.865-2(a)(3)(i) more specifically provides that for a U.S. citizen or resident alien with a foreign tax home, a stock loss is allocated to reduce foreign-source income if a gain on the same stock would have been taxable by the foreign country at a rate of at least 10%. Since losses are not themselves taxed, this 10% reference is to the hypothetical rate that would have applied to a gain — a symmetrical rule.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Puerto Rico Wrinkle',
      },
      {
        type: 'paragraph',
        text: 'Puerto Rico is treated as a foreign country for gain-sourcing purposes. Absent an exception, gains from personal property sales by a bona fide resident of Puerto Rico would only be Puerto Rican-source if the person paid at least 10% Puerto Rican tax on the gain. But in Notice 89-40, the IRS waived that 10% foreign tax requirement specifically for sales of personal property by bona fide residents of Puerto Rico — so gains from stock sales are Puerto Rican-source regardless of the actual Puerto Rican tax rate on those gains. Notice 89-40, however, addresses only the sourcing of gains; it says nothing about the allocation of losses.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Open Question for Individual A',
      },
      {
        type: 'paragraph',
        text: 'Under Treas. Reg. §1.865-2(a)(3)(i), Individual A\'s Stock Loss would be allocated against Puerto Rican-source income only if (1) a gain on the stock would have been taxable in Puerto Rico, and (2) the highest marginal Puerto Rican rate on such gains is at least 10%. A gain on the stock would have been Puerto Rican-source income, which suggests a symmetrical result. But a literal reading raises real questions: if the gain is excluded from Puerto Rican taxable income under Act 60 (taxed at a 0% rate), was it ever really "taxable in Puerto Rico" at all? Because the 10% foreign tax rule from Code §865(g)(2) does not apply to gains recognized by bona fide residents of Puerto Rico under Notice 89-40, should the parallel 10% rule for losses in Treas. Reg. §1.865-2(a)(3)(i) also be disregarded for these taxpayers — implying a symmetrical rule regardless of the actual Puerto Rican rate? Or is the 10% threshold meant to apply based on the rate that generally applies to bona fide residents of Puerto Rico (who, without an Act 60 decree, may pay Puerto Rican capital gains tax well above 10%), rather than the rate specific to an Act 60 holder like Individual A?',
      },
      {
        type: 'paragraph',
        text: 'Notably, the stock loss regulations were proposed in 1999 and finalized in 2001 — a decade after Notice 89-40 — and included a special (though unrelated) rule for certain Puerto Rican corporations, showing the drafters were aware special rules apply to bona fide residents of Puerto Rico. Yet no special loss-allocation rule was carved out for the case where the Puerto Rican tax rate is below 10%. Separately, IRS Publication 570 states that "if personal property is sold by a bona fide resident of a relevant territory, the gain (or loss) from the sale is treated as sourced within that territory" — but informal IRS publications like Publication 570 are not authoritative sources of law (Zimmerman v. Commr., 71 T.C. 367 (1978); Casa De La Jolla Park, Inc. v. Commr., 94 T.C. 384 (1990)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tentative Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Although not entirely clear, it would seem a position could be taken that the Stock Loss recognized by Individual A should be allocated against non-Puerto Rican-source income — possibly even that it should be allocated there. Given the ambiguity in how the regulations interact with Notice 89-40 for Act 60 participants, taxpayers in this position should discuss the specific facts with qualified tax counsel before taking a reporting position.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Entity Structuring', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'When moving to Puerto Rico to participate in the Act 60 program, many taxpayers establish a Puerto Rico LLC to conduct operations. In our experience, this is not always the most efficient tax structure, and can lead to U.S. tax issues that a taxpayer and their advisor have not contemplated. Many times, having your current U.S. company establish a branch in Puerto Rico is the optimal structure and something that should be considered. This article uses a fictional case study to explain the branch approach.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Matt is a U.S. citizen living in Nevada who owns 100% of a Nevada corporation ("NevCo") that has elected S corporation status. Matt and NevCo provide consulting services, using proprietary software (the "Software") that NevCo legally and beneficially owns to charge premium prices, making the business very profitable. Matt receives a reasonable salary from NevCo. Matt is considering becoming a bona fide resident of Puerto Rico and relocating the business there, but he is concerned that shutting down NevCo and forming a new Puerto Rican company could (1) trigger the anti-inversion rules of Code §7874, causing the new Puerto Rican company to be taxed as a U.S. company, or (2) trigger deemed royalty rules under Code §367(d) on the outbound transfer of the Software. He is also concerned that working partly from the U.S. could subject a Puerto Rican company\'s U.S. profits to triple taxation.',
      },
      {
        type: 'paragraph',
        text: 'Because of these concerns, Matt decides to keep NevCo and have it open a branch in Puerto Rico instead — NevCo itself applies for the Act 60 grant, with no separate Puerto Rico company needed. Matt becomes a bona fide resident of Puerto Rico, continues to receive his salary from NevCo, but now works full-time from Puerto Rico, and the Software has been moved to NevCo\'s Puerto Rico branch.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Is a "Branch"?',
      },
      {
        type: 'paragraph',
        text: 'There is no single statutory definition of "branch." One definition, for a "foreign branch," is found in Treas. Reg. §1.367(a)-6T(g)(1): "an integral business operation carried on by a U.S. person outside the United States," determined under all the facts and circumstances, with evidence including a separate set of books and records and an office or fixed place of business used by employees or officers in carrying out business activities abroad.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'S Corporation Taxation, Briefly',
      },
      {
        type: 'paragraph',
        text: 'As the First Circuit summarized in Benenson v. Commr., 887 F.3d 511 (1st Cir. 2018): a C corporation pays tax at the corporate level, and shareholders pay tax again on dividends — double taxation. An S corporation, by contrast, is not taxed at the corporate level; tax liability instead passes through to shareholders in proportion to their pro rata share, so S corporation income is taxed only once, at the shareholder level.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Sourcing NevCo's Income and Its Flow-Through to Matt",
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced to where the services are performed, regardless of the payor\'s location, the taxpayer\'s residence, the place of contracting, or the place of payment (Code §§861(a)(3), 862(a)(3); Treas. Reg. §1.861-4(a)). To the extent Matt and NevCo perform services in Puerto Rico, that income is Puerto Rican-source, typically apportioned on a time basis when facts and circumstances warrant. If NevCo generates all its income from Puerto Rican activities, all of NevCo\'s income is Puerto Rican-source.',
      },
      {
        type: 'paragraph',
        text: 'Because NevCo is an S corporation, all of its income flows through to and is taxable to Matt (Code §1366(a)(1)), with NevCo itself paying no federal income tax (Code §1363(a)), and the income retaining its character — including its Puerto Rican source — when reported on Matt\'s return (Code §1366(b)). Income from Puerto Rican sources is excludable from Matt\'s gross income as a bona fide resident (Code §933(1); Treas. Reg. §1.933-1(a)(1)), with related deductions correspondingly disallowed (Treas. Reg. §1.933-1(c)). NevCo\'s Schedules K-1/K-3 must identify the portion of gross income and related deductions attributable to Puerto Rican sources; if Matt or other employees work partly from the U.S., NevCo must perform a transfer-pricing-style analysis to split income between the two sources.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Matt's Salary",
      },
      {
        type: 'paragraph',
        text: 'For employees, compensation is sourced by comparing days of service performed in the U.S. to total days of service during the year (Treas. Reg. §1.861-4(b)(2)(ii)(A) and (E)). If Matt works 250 total days and 80 of them from the U.S., 32% (80/250) of his compensation is U.S.-source and cannot be excluded under Code §933(1) — only the remaining 68% can be excluded.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Form 8858 Filing',
      },
      {
        type: 'paragraph',
        text: 'NevCo must annually file Form 8858, Information Return of U.S. Persons With Respect to Foreign Disregarded Entities and Foreign Branches, disclosing the activities of its Puerto Rican branch.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Benefits of the Branch Structure',
      },
      {
        type: 'paragraph',
        text: 'The branch structure requires Matt to become a bona fide resident of Puerto Rico, but it avoids Code §7874\'s anti-inversion rules (since no foreign corporation acquires a domestic corporation\'s assets) and Code §367(d)\'s deemed royalty rules (since the Software is never transferred to a foreign corporation). If Matt works partly from the U.S., NevCo\'s U.S.-source profits are not subject to the triple taxation that could arise under a standalone Puerto Rican corporation structure (U.S. corporate income tax, U.S. branch profits tax, and U.S. individual income tax on U.S.-source dividends). Finally, the branch structure avoids several U.S. information reporting obligations that would otherwise apply — Form 5471 for U.S. citizens owning foreign corporations, and Forms 1120-F and 5472 for foreign corporations doing business in the U.S. — along with the substantial penalties for failing to file them.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Deductions'],
    content: [
      {
        type: 'paragraph',
        text: 'U.S. income tax is generally imposed on taxable income (Code §§1, 11) — gross income minus certain deductions (Code §63(a)), such as trade or business expenses (Code §162), interest expense (Code §163), losses (Code §165), bad debt (Code §166), depreciation (Code §167), and others. At times, U.S. tax law allows certain gross income to be excluded from taxable income altogether — for example, municipal bond interest (Code §103) or, for bona fide residents of Puerto Rico, gross income derived from Puerto Rican sources (Code §933). A fundamental principle of U.S. tax law is that expenses related to excluded income cannot be claimed as deductions: Code §265(a) disallows deductions allocable to exempt income generally, and Code §933(1) specifically disallows deductions allocable to income excluded under that section.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Allocating Expenses Between Excluded and Taxable Income',
      },
      {
        type: 'paragraph',
        text: 'Only deductions "allocable to" excluded income must be disallowed — so a taxpayer with both excluded and taxable income must allocate expenses between the two categories. The regulations under Code §861 provide extensive rules for allocating expenses between U.S.-source and foreign-source income (Treas. Reg. §1.861-8, et seq.), and Treasury has adopted these same rules for the Code §933 exclusion (Treas. Reg. §1.861-8(f)(1)(vi)(F), designating §933 an "operative section"). So bona fide residents of Puerto Rico with both excluded and taxable income must allocate expenses using the Code §861 framework.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Interest Expense Allocation: The Fungibility Principle',
      },
      {
        type: 'paragraph',
        text: 'Interest expense allocation rules rest on the idea that money is fungible — interest expense is attributable to all of a taxpayer\'s activities and property, regardless of the specific purpose for which any particular debt was incurred (Temp. Treas. Reg. §1.861-9T(a)). Accordingly, interest expense is treated as related to all of the taxpayer\'s income-producing activities and assets.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'How Individuals Allocate Interest Expense',
      },
      {
        type: 'paragraph',
        text: 'Individuals must first categorize interest expense as trade or business interest, investment interest, passive activity interest, or qualified residence/personal interest (Temp. Treas. Reg. §1.861-9T(d)(1)). Business, investment, and passive activity interest are each allocated using an "asset method" based on the relevant category of assets; qualified residence interest uses a gross income method instead.',
      },
      {
        type: 'paragraph',
        text: 'Under the asset method, the individual computes the average tax basis (beginning and end of year) of worldwide business, investment, and passive activity assets, each characterized by the type of income the asset generates or is expected to generate. For our purposes — bona fide residents of Puerto Rico — those assets must then be further subdivided by source: assets generating Puerto Rican-source income (the "statutory grouping") versus assets generating non-Puerto Rican-source income (the "residual grouping").',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example — Business Interest and Business Assets',
      },
      {
        type: 'paragraph',
        text: 'Fred, a bona fide resident of Puerto Rico, has $1,000 of gross business income and $100 of business interest expense, with $500 of the gross income being Puerto Rican-source (excludable). Even though only 50% of his business income is excludable, the interest expense allocation runs off Fred\'s asset basis, not his income split: his business assets have an average tax basis of $10,000, of which $8,000 generates Puerto Rican-source income. So $80 of interest expense (100 × 8,000/10,000) is allocated to Puerto Rican-source income and disallowed as a deduction — a higher disallowed percentage (80%) than the excluded-income percentage (50%), because the asset basis, not the income split, drives the allocation. The same asset-method computation would apply separately to any investment or passive activity interest Fred has.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Partnerships: The 10%-Owner Aggregate Rule',
      },
      {
        type: 'paragraph',
        text: 'General partners, and limited partners owning 10% or more of a partnership, apply an "aggregate rule" — including their share of the partnership\'s interest expense and their share of its assets directly in the individual-level allocation (Temp. Treas. Reg. §1.861-9T(e)(1); Treas. Reg. §1.861-9(e)(3)). Continuing the example, Fred is also a 20% limited partner in a partnership (USPS); because he owns more than 10%, his $100 of business interest expense and $10,000 of business asset basis already include his proportional share of USPS\'s interest expense and assets, sourced using the information USPS reports to him on Schedule K-3.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Partnerships Under 10%: The Entity Rule and Income Method',
      },
      {
        type: 'paragraph',
        text: 'A limited partner owning less than 10% instead applies an "entity rule," allocating their share of the partnership\'s interest expense based on their share of the partnership\'s gross income rather than its assets (Treas. Reg. §1.861-9(e)(4)(i)). Suppose Fred also owns a 5% limited interest in a second partnership, USLP, which earns only business income — $90 of gross income from U.S. sources and $10 from Puerto Rican sources — and his share of USLP\'s business interest expense is $20. Using the income method, $2 of that $20 (20 × 10/100) is allocated to Puerto Rican-source income and disallowed, leaving $18 deductible.',
      },
      {
        type: 'paragraph',
        text: 'Fred still allocates his overall business interest expense using the asset method, but his USLP partnership interest itself counts as one of his assets — valued at his tax basis in the partnership interest (not his share of USLP\'s gross assets), reduced by his share of USLP liabilities included in that basis under Code §752. If Fred\'s $1,100 basis in USLP includes $500 of allocated liabilities, his "net" basis for this purpose is $600, of which 10% ($60, matching USLP\'s Puerto Rican-source gross income percentage) is treated as a Puerto Rican business asset. Adding this $600 to his other $10,000 of business assets brings the total to $10,600, of which $8,060 is Puerto Rican-source — so $76 (100 × 8,060/10,600) of Fred\'s total business interest expense is now disallowed, versus $80 before the USLP interest was added.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'S Corporations Are Not Partnerships for This Purpose',
      },
      {
        type: 'paragraph',
        text: 'Although an S corporation is treated as a partnership for certain purposes (Code §1373(a)), Code §933 is not among the sections covered by that rule — so a bona fide resident of Puerto Rico does not apply the partnership aggregate rule to S corporation stock. Instead, the individual determines their average tax basis in the S corporation shares, the type of income the corporation earns, and the source of that income, and uses those figures directly in the asset-method interest expense allocation.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Bob is a U.S. citizen and bona fide resident of Puerto Rico for the entire year. This year Bob earned $24,000 from Puerto Rico sources and $96,000 from U.S. sources, all as compensation for services. Bob itemizes deductions, including $5,000 of cash charitable contributions to a U.S. charity. IRS Publication 1321 indicates Bob can only deduct $4,000 of the $5,000 on Schedule A, computed as $5,000 × (96,000/120,000) — that is, apportioned ratably based on his overall gross income mix.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Issue and Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Is IRS Publication 1321 wrong — can Bob actually deduct the full $5,000 on Schedule A? Yes. IRS Publication 1321 is incorrect, and Bob can deduct the full $5,000.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Discussion',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.937-2(b) applies the principles of Code §§861 through 865 in determining income from sources within and without Puerto Rico. As the Tax Court recently summarized in Aptargroup, Inc. v. Commr., 158 T.C. No. 4 (2022), expenses under Treas. Reg. §1.861-8 are first allocated to the class of gross income to which they definitely relate (or ratably to all gross income, if not definitely related to one class), and then, if necessary, apportioned between the "statutory grouping" and "residual grouping" within that class.',
      },
      {
        type: 'paragraph',
        text: 'Bob earns only compensation for services (Code §61(a)(1)), so that is the only relevant class of gross income. His $24,000 of Puerto Rican-source income is the statutory grouping (the amount excludable under Code §933), and his $96,000 of U.S.-source income is the residual grouping (Treas. Reg. §1.861-8(a)(4)).',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.861-8(e)(12)(i) specifically addresses charitable contributions: the deduction is "definitely related and allocable to all of the taxpayer\'s gross income," and is apportioned between the statutory and residual groupings "on the basis of the relative amounts of gross income from sources in the United States in each grouping" — not on the basis of total gross income in each grouping, and no exception for bona fide residents of Puerto Rico exists in the statute or regulations.',
      },
      {
        type: 'paragraph',
        text: 'Applying that rule literally: none of the gross income in the statutory grouping (Bob\'s Puerto Rican-source income) is U.S.-source, while all of the gross income in the residual grouping (his U.S.-source income) is U.S.-source. So the amount apportioned to the statutory grouping is $5,000 × (0/100) = $0, and the amount apportioned to the residual grouping is $5,000 × (100/100) = $5,000. In other words, the entire $5,000 charitable contribution is apportioned to Bob\'s U.S.-source income and is fully deductible on Schedule A.',
      },
      {
        type: 'paragraph',
        text: 'This reading is consistent with the instructions to Schedule K-2, which state that "charitable contribution deductions are apportioned solely to U.S. source gross income," and with Schedule K-2 itself, which only provides an input for apportioning charitable contributions against U.S.-source income. An older version of Treas. Reg. §1.861-8 did apportion charitable contributions ratably based on gross income (the approach IRS Publication 1321 still reflects), but the regulation was changed in 2004 specifically "to ensure that a taxpayer is not discouraged from making a charitable contribution" (Treasury Decision 9143).',
      },
      {
        type: 'paragraph',
        text: 'IRS Publication 1321 has simply not been updated to reflect the 2004 regulatory change, and in only allowing Bob a $4,000 deduction it is incorrect — informal IRS publications are not authoritative sources of law in any event (Zimmerman v. Commr., 71 T.C. 367 (1978); Casa De La Jolla Park, Inc. v. Commr., 94 T.C. 384 (1990)).',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Withholding', 'Compliance'],
    content: [
      {
        type: 'paragraph',
        text: 'Many Puerto Rico Act 60 companies and individuals holding export service decrees receive service fees from U.S.-based companies. Those U.S. companies may be unpleasantly surprised when the IRS assesses them a 30% tax on the total fees paid to a Puerto Rican service provider for failure to comply with U.S. information reporting and withholding requirements. A frequent source of noncompliance we see is U.S. companies failing to obtain the necessary tax documentation from their Puerto Rico service providers, which is essential to determining their reporting and withholding obligations. Puerto Rico is treated as a foreign country for most U.S. tax purposes (Code §7701(a)(9)), which makes these rules more complex than domestic vendors typically trigger. This article breaks down, in plain terms, the reporting and withholding requirements for U.S. companies paying fees to Puerto Rico-based companies or persons.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Typical Fact Pattern',
      },
      {
        type: 'paragraph',
        text: 'USCo, a U.S. C corporation, makes payments to two Puerto Rican corporations, PRCo1 and PRCo2 (neither a financial institution, both wholly owned by bona fide residents of Puerto Rico), and to Brad, a U.S. citizen and bona fide resident of Puerto Rico who works as an independent contractor. Payments to PRCo1 are for services PRCo1 performs wholly in Puerto Rico; PRCo1 has no U.S. trade or business and files no U.S. return. Payments to PRCo2 are for services performed partly in Puerto Rico and partly in the U.S.; PRCo2 has a U.S. trade or business and files Form 1120-F annually. Payments to Brad are for services he performs entirely in Puerto Rico. None of the three are related to USCo or each other.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Form 1099 Reporting',
      },
      {
        type: 'paragraph',
        text: 'Code §6041(a) generally requires a business paying $600 or more to a person for services in a year to file an information return (typically Form 1099), and to collect the recipient\'s taxpayer ID number via Form W-9 — with backup withholding (currently 28%) required if the recipient refuses to provide one (Code §3406). Payments to foreign recipients generally do not require Form 1099 (Treas. Reg. §1.6041-4). PRCo1 and PRCo2 are foreign persons (Puerto Rican corporations are not domestic corporations under Code §§7701(a)(4), (9)), so Form 1099 and backup withholding do not apply to USCo\'s payments to them.',
      },
      {
        type: 'paragraph',
        text: 'Brad, however, is a U.S. citizen and therefore a U.S. person (Code §7701(a)(30)(A)), so USCo should still obtain a Form W-9 from him. But Treas. Reg. §1.6049-5(c)(5)(ii) exempts U.S. payors from Form 1099 reporting on income that is sourced within a U.S. possession and exempt under Code §§931, 932, or 933, as long as the payor can reliably associate the payment with valid documentation supporting the recipient\'s claimed possession residency before payment. Because Brad is a bona fide resident of Puerto Rico earning Puerto Rican-source income excludable under Code §933, USCo does not need to report payments to him on Form 1099 if it obtains adequate supporting documentation beforehand — the IRS has not prescribed a specific form, but a statement attached to Form W-9, signed under penalties of perjury, certifying Brad\'s bona fide residency and that the income is from Puerto Rico-based services should suffice.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Withholding on Payments to PRCo1 (Wholly Puerto Rico-Source)',
      },
      {
        type: 'paragraph',
        text: 'Code §§1441 and 1442 generally require withholding of 30% U.S. tax on certain income paid to foreign persons, including services income sourced to the U.S. — but the U.S. has no income tax treaty with Puerto Rico to reduce that rate. Because PRCo1\'s services are performed wholly in Puerto Rico, all of its income from USCo is Puerto Rican-source, not U.S.-source, so as long as PRCo1 provides USCo a Form W-8BEN-E before payment, no withholding is required, and USCo need not report the payments on Form 1042 or 1042-S. USCo also need not withhold Chapter 4 (FATCA) tax as long as PRCo1\'s Form W-8BEN-E identifies its status as an "Excepted Territory NFFE" — which PRCo1 qualifies for as a Puerto Rico-incorporated entity wholly owned by bona fide residents of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Withholding on Payments to PRCo2 (Partly U.S.-Source)',
      },
      {
        type: 'paragraph',
        text: 'Because PRCo2\'s services are performed partly in the U.S., only the Puerto Rico-performed portion of its income is Puerto Rican-source; the rest is U.S. effectively connected income (ECI). PRCo2 cannot rely on a single Form W-8BEN-E, since that form certifies the income is not ECI. Instead, PRCo2 can submit two separate withholding certificates for its two types of payments — a Form W-8ECI for the ECI portion and a Form W-8BEN-E for the non-ECI portion (Treas. Reg. §1.1441-1(e)(2)(i)) — and it would make sense for PRCo2\'s monthly invoices to break out the ECI and non-ECI portions so USCo can apply the right treatment to each. Under this split certification, USCo need not withhold on the ECI portion (Code §1441(c); Treas. Reg. §1.1441-4) or on the non-ECI portion (since it is non-U.S.-source), but must still report the ECI (U.S.-source) portion on Forms 1042 and 1042-S. As with PRCo1, no Chapter 4 withholding is required if PRCo2\'s Form W-8BEN-E identifies it as an Excepted Territory NFFE, which it qualifies for on the same basis.',
      },
      {
        type: 'heading',
        level: 2,
        text: "USCo's Exposure for Failing to Withhold",
      },
      {
        type: 'paragraph',
        text: 'A withholding agent that fails to withhold required tax under Code §1441 is itself liable for the tax (Code §1461; A.C. Monk & Co. v. Commr., 10 T.C. 77 (1948)) — so if USCo should have withheld on payments to PRCo2 but did not, USCo bears that tax liability directly. Beyond the tax itself, USCo can face a 25% penalty for failing to file Form 1042 and a 10% penalty for failing to timely deposit the withheld tax (Code §§6651, 6656), absent reasonable cause for the failure.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['State Tax', 'California', 'Sourcing'],
    content: [
      {
        type: 'paragraph',
        text: 'This article was co-authored with Dakessian Law, Ltd., a state and local tax controversy firm based in Los Angeles and Sacramento.',
      },
      {
        type: 'paragraph',
        text: 'When it comes to the taxation of nonresidents, California\'s Franchise Tax Board and Office of Tax Appeals (OTA) have held that a nonresident business owner who never set foot in California may still owe California personal income tax, based on rules that look to where customers receive the benefit of services rather than where the services are performed. This "economic nexus" concept is not new — California has applied it since 2011 — and as this article shows, a nonresident individual may owe California tax if they generate even $1 of California-source income under the state\'s personal income tax rules.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Case Study: The Problem',
      },
      {
        type: 'paragraph',
        text: 'Max and Jane live and work in Puerto Rico, are bona fide residents of Puerto Rico for federal tax purposes, and are California nonresidents. They are 50/50 owners of PRCo, an Act 60 Puerto Rico LLC (taxed as a corporation), which bills its customers for services Max and Jane perform entirely in Puerto Rico as PRCo employees. In 2021, PRCo generated $9 million in consulting fee income from its primary customer, headquartered in California. PRCo then received a notice that California\'s Franchise Tax Board would audit whether, and how much, California tax it owes for that income — even though all the underlying work was performed in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Market-Based Sourcing and the Bindley Decision',
      },
      {
        type: 'paragraph',
        text: 'In 2019, California\'s OTA issued a precedential decision (Appeal of Blair S. Bindley, 2019-OTA-179P) applying "market-based sourcing" combined with economic-nexus jurisdiction to a self-employed Arizona screenwriter who performed all his work in Arizona for two California-headquartered producers. The OTA held that because the screenwriter\'s customers were in California, the benefit of his services was received there — sourcing his income to California even though he never set foot in the state, and upholding California\'s tax assessment.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Shift to Market Sourcing and "Doing Business" Thresholds',
      },
      {
        type: 'paragraph',
        text: 'For tax years beginning on or after January 1, 2013, California requires most businesses to source sales of services and intangibles to the location of customer benefit ("market sourcing") rather than where the work was performed (Cal. Rev. & Tax. Code §25128.7). Separately, since 2011 California has defined "doing business" for corporations using factor-presence thresholds — for 2021, sales in California exceeding $637,252 or 25% of total sales (or comparable property/payroll thresholds) establish a corporate tax filing obligation, even with no other in-state presence (Cal. Rev. & Tax. Code §23101). If PRCo\'s customer received the benefit of its services in California and PRCo\'s California-sourced sales exceeded that threshold, PRCo could be "doing business" in California based purely on economic presence.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'No Comparable Threshold for Individual Owners',
      },
      {
        type: 'paragraph',
        text: 'Critically, California\'s factor-presence "doing business" thresholds apply only to corporations under the Corporation Tax Law (Part 11 of the Revenue and Taxation Code) — they do not apply to nonresident individuals who are partners in partnerships or sole proprietors, who are instead governed by the Personal Income Tax Law (Part 10), a different system with no economic-nexus minimum. As the Bindley decision confirms, nonresident individuals are taxable on their California-source income (Cal. Rev. & Tax. Code §17041(b)) without any de minimis threshold, and California\'s market-sourcing rules (via Cal. Code Regs. tit. 18, §17951-4) apply the same customer-benefit sourcing concept to nonresident owners of flow-through entities. The upshot: the statutory and regulatory framework appears to give California the right to tax even $1 of California-source income earned by a nonresident individual business owner, with a practical backstop only in California\'s income tax filing threshold (based on total federal adjusted gross income from all sources, not California-source income specifically).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Back to PRCo',
      },
      {
        type: 'paragraph',
        text: 'California\'s market-sourcing regulation assigns the benefit of services to California if the taxpayer\'s books and records "kept in the normal course of business" indicate the benefit is received there (Cal. Code Regs. tit. 18, §25136-1(c)(2)(A)); absent such records, the regulation allows a "reasonable approximation," with cascading fallback rules based on order-placement location or billing address. In practice, few taxpayers keep records tracking this concept, so depending on the nature of PRCo\'s services and how its customer benefited, California could source all, some, or very little of the $9 million to the state — and the fact that all services were physically performed in Puerto Rico does not resolve the question. Max and Jane will need to explain to the Franchise Tax Board the nature of PRCo\'s services and where its California customer actually received the benefit. Separately, because Max and Jane performed all of their own employment services in Puerto Rico, their personal wage income (sourced differently than business income under California law) would be sourced entirely to Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'If PRCo instead elected partnership tax treatment, the entity itself might face a minimum tax and information-reporting requirement in California, but it would be Max and Jane personally who owe California personal income tax on their share of California-sourced flow-through income — at rates up to 13.3%, California\'s top marginal rate as of 2021.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion and Practical Takeaways',
      },
      {
        type: 'paragraph',
        text: 'California may assert taxing jurisdiction over nonresident corporations and nonresident individual owners of flow-through entities based purely on economic presence tied to where customers receive the benefit of services — with no minimum threshold at all for individual owners, unlike the clear factor-presence thresholds that apply to corporations. Nonresidents facing this issue may still have Due Process and Commerce Clause arguments available depending on the facts. California is not unique — roughly 30 states have adopted market-sourcing rules over the past decade — so taxpayers and business owners with out-of-state customers, including bona fide residents of Puerto Rico billing mainland clients, should proactively assess their exposure rather than waiting for an audit notice. Note also that the statute of limitations for a state to assess tax generally does not begin to run until a complete and accurate state return is filed.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Remote Work'],
    content: [
      {
        type: 'paragraph',
        text: 'As international travel normalized after the COVID-19 pandemic, a frequent question arose: what are the tax consequences for an Act 60 company owner who wants to spend a summer in Europe with family and work remotely? The results are interesting and, for many taxpayers, surprising. This article uses a fictional case study to explain the issue and shows why proper planning is key to avoiding potentially disastrous tax and legal consequences.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Julie is a U.S. citizen and bona fide resident of Puerto Rico who owns PRCo, an Act 60 LLC taxed as a corporation, paying a 4% Puerto Rico tax rate with tax-exempt distributions. PRCo performs services for customers outside Puerto Rico; Julie is an employee whose time and effort drive the business, alongside three other bona fide-resident employees. A transfer pricing study attributes 90% of PRCo\'s $15 million in annual gross revenue ($13.5 million) to Julie\'s own activities, with the remaining $1.5 million attributable to the other employees. PRCo generates a consistent $10 million annual profit and distributes it all to Julie as a dividend. Until now, Julie and her employees have worked exclusively from Puerto Rico — but Julie is now considering spending summers working from France.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Sourcing PRCo's Services Income and Julie's Dividends",
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced to where the services are performed (Code §§861(a)(3), 862(a)(3)), so as long as all of PRCo\'s work happens in Puerto Rico, all of its income is Puerto Rican-source. Two separate dividend-sourcing rules matter here: the "861/862 rule," which determines whether PRCo is a controlled foreign corporation (CFC), and the "937 rule," which determines how much of Julie\'s dividend she can exclude from U.S. tax. Under the 861/862 rule, a foreign corporation\'s dividends are entirely foreign-source as long as less than 25% of its gross income over the prior 3 years is U.S. effectively connected income (ECI) — since none of PRCo\'s income is currently U.S.-source, none is ECI, so Julie is not a "U.S. person" with respect to PRCo for CFC purposes, and PRCo avoids CFC status (avoiding Subpart F and GILTI entirely). This should remain true even after Julie starts working part of the year from France, since her French work is still non-U.S.-source.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The 937 Rule: The 80% and 50% Tests',
      },
      {
        type: 'paragraph',
        text: 'Under the separate 937 dividend-sourcing rule, PRCo\'s dividends are entirely Puerto Rican-source only if PRCo meets both an "80% Test" (80% or more of gross income over a 3-year testing period is Puerto Rico-source or effectively connected with a Puerto Rico trade or business) and a "50% Test" (50% or more of gross income is from the active conduct of a trade or business within Puerto Rico) (Treas. Reg. §1.937-2(g)(1)(ii)). Until now, PRCo has met both tests, so Julie has properly excluded her entire $10 million annual dividend. But once Julie starts working from France, a portion of PRCo\'s income shifts to non-Puerto Rico sources — and if she spends 25% of her time in France each year for three years, the 3-year testing period shows only 77.5% of PRCo\'s gross income as Puerto Rico-source, failing the 80% Test. At that point, only the "possessions source ratio" (here, 77.5%) of Julie\'s dividend is excludable — meaning $2.25 million of her $10 million annual dividend becomes taxable to her in the U.S. at qualified dividend rates up to 23.8%.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Failing the 80% Test Also Triggers Form 5471',
      },
      {
        type: 'paragraph',
        text: 'If PRCo fails the 80% Test or 50% Test in a given year, Julie becomes a "US person" with respect to PRCo for Category 2, 3, and 4 Form 5471 filing purposes (Treas. Reg. §§1.6046-1(f)(3)(ii)(A), 1.6038-2(d)(2)(i)) — Category 4 filings are required annually in any such year. The penalty for failing to file is generally $10,000 per year, and the statute of limitations on Julie\'s entire Form 1040 for that year does not begin to run until the form is filed (Code §6501(c)(8)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Puerto Rico Side of the Ledger',
      },
      {
        type: 'paragraph',
        text: 'Even if Julie plans her French time carefully enough to avoid failing the 80/50 federal tests, she faces a separate Puerto Rico problem: income attributable to services she performs from France likely does not qualify as "export services income" for Puerto Rico purposes. Puerto Rico\'s Incentives Regulations allow work "outside of Puerto Rico" to remain eligible only where relocating abroad is necessary to the nature of the activity and the out-of-Puerto-Rico work is merely "incidental" to the main eligible activity conducted from Puerto Rico. A discretionary summer in France for personal reasons does not appear to meet this standard. The portion of PRCo\'s income tied to Julie\'s French work would likely be taxed at Puerto Rico\'s full corporate rates (up to a 37.5% top marginal rate) rather than the 4% Act 60 rate — potentially over $1.2 million in additional Puerto Rico corporate tax for a summer\'s work, an amount that dwarfs any U.S. tax savings from staying under the 80/50 thresholds.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Word of Caution on Compliance',
      },
      {
        type: 'paragraph',
        text: 'Signing a Puerto Rico tax return under penalties of perjury that claims the 4% rate applies to income the facts don\'t support raises real compliance risk, and U.S. courts have shown willingness to treat schemes to deprive a foreign government (including, by extension, Puerto Rico) of tax revenue as federal wire fraud (Pasquantino v. United States, 544 U.S. 349 (2005), involving alcohol smuggled into Canada to evade Canadian excise tax). Taxpayers in Julie\'s position should get advice tailored to their specific facts before assuming any position is safe, and may want to explore requesting formal clarification or an amendment to their Act 60 export services grant from Puerto Rico\'s Department of Economic Development and Commerce (DDEC) regarding remote work thresholds.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'As international travel has normalized, and with the IRS\'s Puerto Rico compliance campaign and DDEC\'s ongoing residency audits of tax grant recipients, taxpayers should proactively review past filings for compliance gaps. With proper planning and structuring up front, many of the surprising tax traps described above are entirely preventable — a summer abroad does not need to become a tax nightmare.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Sourcing', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'An individual who is a bona fide resident of Puerto Rico can generally exclude from U.S. income his or her "income derived from sources within Puerto Rico" (Code §933(1); Treas. Reg. §1.933-1(a)(1)). Because Puerto Rican-sourced income is the only income that can be excluded, it is essential to understand what income is, and is not, Puerto Rican-sourced. Category-by-category rules determine the source of income (Code §§861, 862, 863), and the more common categories include interest, dividends, compensation for personal services, rentals and royalties, income from the sale of real property, and income from the sale of personal property.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Interest and Dividend Income',
      },
      {
        type: 'paragraph',
        text: 'Interest income is Puerto Rican-source if paid by a resident of Puerto Rico or a Puerto Rican corporation (Code §861(a)(1)); interest from a U.S. corporation or U.S. resident is U.S.-source and not excludable. The same principle applies to dividends: dividend income is Puerto Rican-source only if paid by a Puerto Rican corporation (Code §861(a)(2)) — dividends from a U.S. corporation are U.S.-source and cannot be excluded, regardless of the recipient\'s Puerto Rico residency.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Compensation for Personal Services',
      },
      {
        type: 'paragraph',
        text: 'Compensation for personal services is sourced to where the services are performed (Code §861(a)(3)); services performed both within and outside Puerto Rico must be allocated between the two, so only the Puerto Rico-attributable portion is excludable. (Working in the U.S. on behalf of a Puerto Rican company can create its own set of nasty U.S. tax consequences for that company — a topic covered in a separate article on this site.)',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Rents, Royalties, and Real Property',
      },
      {
        type: 'paragraph',
        text: 'Rental and royalty income is sourced by the location or place of use of the property (Code §861(a)(4)) — rents or royalties from property used outside Puerto Rico are not excludable, regardless of the recipient\'s residency. Likewise, gain from the sale of Puerto Rican real estate is Puerto Rican-source and excludable (Code §861(a)(5)), while gain from real estate located outside Puerto Rico is not.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sale of Personal Property — Inventory',
      },
      {
        type: 'paragraph',
        text: 'Inventory (property held for sale to customers in the ordinary course of business) follows its own rules: income from inventory manufactured by the taxpayer in Puerto Rico is Puerto Rican-source; manufactured elsewhere, it is not. Income from purchased (non-manufactured) inventory is Puerto Rican-source if title transfers in Puerto Rico, and not if title transfers elsewhere.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sale of Personal Property — Non-Inventory, and the 10-Year "Tainted Property" Rule',
      },
      {
        type: 'paragraph',
        text: 'Subject to significant exceptions, gain from the sale of non-inventory personal property is generally sourced to the residence of the seller (Code §865(a)) — so a bona fide resident of Puerto Rico\'s personal property gains would generally be Puerto Rican-source. However, special rules apply to gains on certain investment property (stocks, bonds, debt instruments, diamonds, gold, cryptocurrency, etc.) owned before becoming a bona fide resident of Puerto Rico ("Tainted Property"): gains on Tainted Property disposed of within 10 years of becoming a bona fide resident generally are not Puerto Rican-source and cannot be excluded (Treas. Reg. §1.937-2(f)(1)).',
      },
      {
        type: 'paragraph',
        text: 'A bona fide resident may instead elect to split the gain between a U.S. holding period and a Puerto Rican holding period — using a mark-to-market allocation for marketable securities, and a time-based allocation for other property (Treas. Reg. §1.937-2(f)(1)(vi)). For marketable securities, the Puerto Rico-source portion is the appreciation from the start of Puerto Rico residency to the sale date. For example, Jane bought $1,000,000 of publicly traded stock in 2020 while a U.S. resident; the stock was worth $2,000,000 when she became a Puerto Rico bona fide resident on January 1, 2021; and she sold it for $10,000,000 a year later. Of her $9,000,000 total gain, $1,000,000 (the pre-residency appreciation) is allocated to the U.S. holding period, and $8,000,000 (the appreciation during residency) is allocated to Puerto Rico and excludable. For non-marketable property, the allocation is instead based on the ratio of days held during each period — so if Jane had held privately held (non-marketable) stock for one year before and one year after becoming a resident, only half of her $9,000,000 gain ($4,500,000) would be excludable, regardless of when the appreciation actually occurred.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Income Earned Through Partnerships and S Corporations',
      },
      {
        type: 'paragraph',
        text: 'Partnerships and S corporations are not themselves taxed; income flows through to partners and shareholders, generally retaining its character and source as if realized directly by the owner (Code §§701, 702, 1363(a), 1366). Certain sales of partnership personal property are specifically sourced to the residence of the partner (Code §865(a), (i)(5)) — so, for example, a bona fide resident of Puerto Rico who is a partner in a U.S. partnership that sells U.S.-traded stock at a gain would generally source her distributive share of that gain to Puerto Rico and could exclude it.',
      },
      {
        type: 'paragraph',
        text: 'S corporations are treated differently. Although an S corporation is treated as a partnership for certain foreign-sourced-income purposes (Code §1373(a)), the Puerto Rico sourcing rules of Code §937 fall outside the specific Code subparts where that treatment applies — so for Code §933/§937 exclusion purposes, gain on a sale of personal property by an S corporation is sourced to the S corporation itself (a U.S. resident), not to its bona fide-resident shareholder, and is not excludable even though the shareholder\'s pro rata share would be treated differently for foreign tax credit purposes under Code §904. This is a meaningful trap: the same transaction can produce different sourcing outcomes depending on whether the entity is a partnership or an S corporation.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Sourcing By Analogy',
      },
      {
        type: 'paragraph',
        text: 'Code §§861 through 863 were never intended to be all-inclusive. When an item of income doesn\'t fit neatly into the statutory or regulatory categories, courts have sourced it by comparison and analogy to the classes of income the statutes do address (Howkins v. Commr., 49 T.C. 689 (1968); Bank of America v. U.S., 230 Cl. Ct. 679 (1982)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Allocating Expenses to Excluded Income',
      },
      {
        type: 'paragraph',
        text: 'Deductions or losses properly allocable to income excluded under Code §933 cannot be deducted (Treas. Reg. §1.933-1(c)), applying the same allocation and apportionment framework used elsewhere under Code §861 (Treas. Reg. §1.861-8). A taxpayer may apportion a shared expense using any reasonable basis that reflects the factual relationship between the deduction and the relevant income — comparisons of units sold, gross receipts, cost of goods sold, profit contribution, expenses/assets/salaries/space/time devoted to the activity, or gross income itself. For example, if a business generates 80% of its gross income from Puerto Rican sources, 80% of a shared expense would typically be allocated to (and disallowed against) that Puerto Rican-source income — but whatever method is chosen must reasonably reflect the actual factual relationship between the expense and the income it supports.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Form 926', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Question',
      },
      {
        type: 'paragraph',
        text: 'If a U.S. citizen forms a Puerto Rican corporation (or a Puerto Rico LLC taxed as a corporation for U.S. purposes) and contributes cash to it, is the U.S. citizen obligated to notify the IRS?',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Answer',
      },
      {
        type: 'paragraph',
        text: 'Yes. The U.S. citizen is a U.S. person, the Puerto Rican entity is a foreign corporation, and the cash contribution must be disclosed on Form 926.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Filing Requirement',
      },
      {
        type: 'paragraph',
        text: 'Code §6038B(a) requires each U.S. person who transfers property to a foreign corporation in a Code §351 exchange (among other exchange types) to report the transfer to the IRS on Form 926, Return by a U.S. Transferor of Property to a Foreign Corporation, attached to the transferor\'s timely filed income tax return for the year of the transfer (Treas. Reg. §1.6038B-1(b)(1)(i)). This applies not just to cash but to any property transferred in a Code §351 exchange, and also extends to transfers qualifying for nonrecognition under Code §§332, 354, 355, 356, and 361 — though §351 exchanges are by far the most common trigger.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'No Special Exception for Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Some international information returns carve out special rules for bona fide residents of Puerto Rico — Puerto Rican financial assets are excluded from the Form 8938 threshold, and Form 5471 isn\'t required for certain active Puerto Rican businesses. But neither the statute nor the regulations provide any exception to Form 926 for bona fide residents of Puerto Rico, and Puerto Rican corporations are generally treated as foreign corporations (Code §§7701(a)(4), (9)) — so the normal Form 926 filing rules apply just as they would for a transfer to any other foreign corporation.',
      },
      {
        type: 'paragraph',
        text: 'This matters because most Puerto Rico businesses are set up as LLCs, and unlike a U.S. domestic LLC (which defaults to pass-through treatment), a Puerto Rican LLC defaults to corporation classification absent an entity classification election on Form 8832 (Treas. Reg. §301.7701-3(b)(2)(i)(B)) — meaning contributions to a standard, unelected Puerto Rico LLC squarely trigger Form 926.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Narrow Exception for Small Cash Transfers',
      },
      {
        type: 'paragraph',
        text: 'A cash transfer to a foreign corporation in a Code §351 exchange need only be reported if, immediately after the transfer, the transferor holds at least 10% of the vote or value of the corporation, or the transferor (or a related person) has transferred more than $100,000 in cash to that corporation over the preceding 12 months (Treas. Reg. §1.6038B-1(b)(3)). So a cash-only contribution under $100,000 by someone owning less than 10% of the corporation escapes Form 926 — but this narrow exception rarely helps a sole or majority owner forming their own Act 60 company.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Partnerships and Foreign Partnerships',
      },
      {
        type: 'paragraph',
        text: 'When a partnership transfers property to a foreign corporation in a Code §351 exchange, it is the partnership\'s U.S. partners — not the partnership itself — who must each file Form 926 for their proportionate share of the transferred property. Separately, transfers by U.S. persons to foreign partnerships are reported on Form 8865, not Form 926.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Penalty for Failing to File',
      },
      {
        type: 'paragraph',
        text: 'Failing to file a required Form 926 triggers a penalty of 10% of the fair market value of the transferred property, capped at $100,000 absent intentional disregard — and extends the statute of limitations on the entire tax return for that year until 3 years after the required information is eventually provided (Code §6038B(c); Code §6501(c)(8)). In practice, this means an unfiled Form 926 can leave a tax return open to audit indefinitely.',
      },
      {
        type: 'paragraph',
        text: 'Reasonable cause relief from the penalty generally requires promptly filing an amended return with the missed Form 926 once the omission is discovered — waiting to see whether the IRS opens an audit first, then filing late only in response, will generally forfeit any reasonable cause argument.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Gain Recognition and Intangible Property',
      },
      {
        type: 'paragraph',
        text: 'Beyond the reporting obligation, transferring appreciated property to a foreign corporation generally triggers gain recognition under Code §367(a)(1), subject to narrow exceptions requiring gain recognition agreements or specific tests for stock transfers (the active-trade-or-business exception was repealed by the 2017 Tax Cuts and Jobs Act). Transfers of certain intangible property are treated differently under Code §367(d): rather than immediate gain, the transferor is treated as receiving deemed annual royalty payments over the property\'s useful life (with an election available to treat the transfer as an outright sale instead). Other overlapping regimes — branch loss recapture (Code §91), overall foreign loss rules (Code §904(f)), dual consolidated loss rules (Code §1503(d)), and the anti-inversion rules (Code §7874) — may also apply and should be considered together.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example',
      },
      {
        type: 'paragraph',
        text: 'Joe, a bona fide resident of Puerto Rico, forms a Puerto Rico LLC ("PRCo") that defaults to corporation classification, and contributes $10,000 cash plus a customer list from his prior sole proprietorship. Both the cash and the customer list (intangible property under Code §367(d)(4)) must be disclosed on Form 926; because the customer list is intangible, Joe is treated as having sold it to PRCo in exchange for deemed annual royalties — if the list is worth $200,000 and an arm\'s-length royalty rate is 10%, Joe includes $20,000 in U.S. income each year as a deemed royalty for the list\'s useful life. If Joe contributes another $5,000 cash the following year, he must file another Form 926 — even though he owns 100% of PRCo and no new shares are formally issued for the contribution, the "contribution to capital" is still treated as a Code §351 exchange for an 80%+ owner under Code §367(c)(2), so the filing obligation still applies.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'The IRS\'s Puerto Rico compliance Campaign is coordinated by its Large Business and International Tax Division, whose agents are well aware of Form 926\'s importance — taxpayers selected for audit will likely be asked for this form early in the examination. An unfiled Form 926 leaves the statute of limitations on the entire return open indefinitely, and given the nature of the Campaign, penalties are likely for taxpayers who failed to file. Taxpayers should review past filings now, before an audit begins, since corrective filings after an audit starts are generally too late to avoid civil or, in the most serious cases, criminal exposure.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'IRS', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'This alert was co-authored with Caplin & Drysdale, Chartered, and originally published February 3, 2021.',
      },
      {
        type: 'paragraph',
        text: 'The IRS announced a new "Campaign" focusing on U.S. persons who have reduced their U.S. tax burden by claiming benefits under Puerto Rico\'s Act 22 — no surprise given increased interest from Congress, the Treasury Department, and the IRS in the revenue lost when U.S. taxpayers relocate to Puerto Rico. The IRS will start by gathering the names of individuals who may be audited, using returns that take Puerto Rico-specific positions, information from Hacienda through tax-sharing agreements, and possibly subpoenas to Puerto Rico-based return preparers — a draft IRS report indicated much of this groundwork had already been done.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What a Formal "Campaign" Means',
      },
      {
        type: 'paragraph',
        text: 'A formal Campaign signals a coordinated IRS effort across a narrow set of issues, often using standardized, template-based information requests and consistent settlement procedures across cases. This typically produces deep, protracted audits whose settlement timing may be driven by considerations well beyond an individual taxpayer\'s own case. Here, the IRS said it will address noncompliance through examinations, outreach, and "soft letters" (less than an audit, but more than a suggestion) to current Act 22 participants — and while the Campaign specifically references Act 22, an inquiry into an Act 22 decree holder would reasonably be expected to expand into a review of the Act 20 entities generating that person\'s income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Examiners Will Focus On',
      },
      {
        type: 'paragraph',
        text: 'Examinations under the Campaign target U.S. individuals who may be improperly excluding income subject to U.S. tax, improperly claiming bona fide Puerto Rico residency, or mischaracterizing U.S.-source income as Puerto Rican-source to avoid U.S. tax. More specifically, expect scrutiny of: whether bona fide residency was properly established under the presence, tax home, and closer connection tests; whether residency and detailed supporting records (day counts, income figures, business details, personal relationships and affiliations) have been properly maintained; whether a company was properly formed in Puerto Rico, including whether any applicable Code §367 "exit tax" was paid and Form 926 was filed; whether transactions between Puerto Rican companies and related U.S. companies satisfy U.S. transfer pricing rules; whether Puerto Rican companies have operated through a U.S. trade or business requiring Form 1120-F (even protectively); and whether a preexisting U.S. entity that migrated substantially all its assets to a Puerto Rican entity is subject to the U.S. anti-inversion rules, which could cause the IRS to treat the Puerto Rican entity as a fully taxable U.S. corporation.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Criminal Exposure, Not Just Civil',
      },
      {
        type: 'paragraph',
        text: 'The Campaign\'s tone — explicitly referencing possible tax avoidance motives — suggests the Department of Justice will not sit on the sidelines while the IRS confines itself to civil review. In October 2020, the DOJ indicted and arrested the head of BDO Puerto Rico\'s Tax Division for allegedly violating Act 20/22 rules, with the DOJ noting that "IRS Criminal Investigation will vigorously pursue any individuals and professionals that fraudulently enrich themselves by abusing government tax incentive programs" — a strong signal of further activity to come.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Taxpayers Should Do',
      },
      {
        type: 'paragraph',
        text: 'Between the BDO indictment and the IRS\'s already-compiled list of Puerto Rico tax regime beneficiaries (assembled at Congress\'s request), anyone participating in Act 20, Act 22, or the successor Act 60 program should take this as a warning that an audit could be forthcoming. Taxpayers should review their reporting positions now and, where appropriate, consider rectifying past noncompliance before being contacted by the IRS — voluntary disclosure and pre-audit remediation options are meaningfully more favorable than reacting after an examination has already begun.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'IRS'],
    content: [
      {
        type: 'paragraph',
        text: 'As the IRS Campaign in Puerto Rico kicks off, now is a good time for taxpayers to assess their past U.S. tax filings and prepare for the very real possibility of an IRS audit or soft letter. In our experience, two areas of noncompliance are overlooked or misunderstood by most Act 60 residents and companies, and are likely to be a serious focus of the Campaign: Puerto Rico residents working for their Act 60 companies while present on the U.S. mainland, and Act 60 companies engaged in a U.S. trade or business generating effectively connected income. Many owners believe that as long as they spend 183+ days in Puerto Rico and qualify as residents, they are free to work from the mainland the rest of the year without U.S. federal tax consequences. That belief is common on the island — and it is simply wrong.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Fact Pattern',
      },
      {
        type: 'paragraph',
        text: 'Joe, a U.S. citizen and bona fide resident of Puerto Rico, spends 200 days in Puerto Rico, 160 days in the U.S., and 5 days elsewhere in a year. Of his 160 U.S. days, about 80 are genuine vacation and 80 are workdays — checking emails, replying to messages, and taking business calls for his wholly owned Act 60 company, PRCo, which earns $6 million in management fees for export services. Joe draws a $300,000 salary from PRCo, and after his salary and other expenses, PRCo nets $5 million in profit.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Joe and PRCo Are Separate Taxpayers, and PRCo Is Foreign',
      },
      {
        type: 'paragraph',
        text: 'A corporation, even one wholly owned by a single shareholder, is a taxpayer separate from that shareholder (New Colonial Ice Co. v. Helvering, 292 U.S. 435 (1934)). Puerto Rico is not part of the "United States" for most tax purposes (Code §7701(a)(5), (9)), so PRCo is a foreign corporation — and foreign corporations doing business in the U.S. are generally subject to U.S. corporate income tax. Because a corporation can only act through its agents, and Joe is PRCo\'s employee, Joe working for PRCo while physically in the U.S. means PRCo itself is operating in the U.S.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Sourcing Joe's Salary and PRCo's Income",
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced to where performed (Code §§861(a)(3), 862(a)(3)), and for employees this is measured by comparing U.S. workdays to total workdays (Treas. Reg. §1.861-4(b)(2)(ii)(A), (E)). If Joe worked 250 total days and 80 from the U.S., 32% of his $300,000 salary ($96,000) is U.S.-source and not excludable under Code §933(1) — at a 37% top rate, that\'s $35,520 of individual tax Joe likely didn\'t expect. PRCo\'s own income is sourced on similar time-apportionment principles when the facts and circumstances support it (Treas. Reg. §1.861-4(b)(1)(i)) — so if Joe drives the bulk of PRCo\'s revenue, as much as 32% of PRCo\'s $5 million profit ($1.6 million) could likewise be treated as U.S.-source.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Bright-Line Rule: Services Performed in the U.S. Create a U.S. Trade or Business',
      },
      {
        type: 'paragraph',
        text: 'While it is often unclear whether a foreign corporation has enough U.S. activity to be "engaged in a U.S. trade or business," the statute is explicit for services: "the term \'trade or business within the United States\' includes the performance of personal services within the United States at any time within the taxable year" (Code §864(b)). Because Joe is performing services on PRCo\'s behalf while in the U.S., PRCo is unambiguously engaged in a U.S. trade or business — triggering U.S. corporate income tax on its U.S.-source earnings (potentially $336,000 at the 21% federal rate on the $1.6 million example above, leaving $1,264,000 after tax).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Branch Profits Tax — a Second Layer',
      },
      {
        type: 'paragraph',
        text: 'A foreign corporation\'s U.S. branch earnings are also subject to a 30% branch profits tax (Code §884(a)), a substitute for the withholding tax that would otherwise apply to dividends from a foreign-owned U.S. subsidiary. Because there is no U.S.–Puerto Rico income tax treaty to reduce this rate, the full 30% applies — an additional $379,200 on the $1,264,000 of after-tax U.S. earnings in the example.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'A Third Layer: Dividends to Joe',
      },
      {
        type: 'paragraph',
        text: 'Because more than 25% of PRCo\'s gross income is now effectively connected with a U.S. business, a proportionate share of PRCo\'s dividends to Joe (roughly 32% in the example) becomes U.S.-source and taxable (Code §861(a)(2)(B); Treas. Reg. §1.937-2(g)(1)). On PRCo\'s remaining $4,284,800 of earnings after corporate tax and branch profits tax, distributing the full amount would make $1,371,136 taxable to Joe as a U.S.-source qualified dividend at 23.8% — about $326,330 more in tax.',
      },
      {
        type: 'paragraph',
        text: 'All told, the example above produces roughly $1,077,050 in combined corporate and individual U.S. tax — meaning each of Joe\'s 80 U.S. workdays effectively cost him about $13,463 in tax, before any interest or penalties (which can run 20%–75% of the underpayment and which the IRS is expected to pursue aggressively in this Campaign).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Filing Obligations for PRCo and Joe',
      },
      {
        type: 'paragraph',
        text: 'A foreign corporation engaged in a U.S. trade or business must file Form 1120-F; if it fails to do so, the IRS can disallow all deductions and tax the company on gross rather than net income once the return is filed more than 18 months late (Code §882(c)(2); Treas. Reg. §1.882-4). It is highly advisable for an Act 60 company that believes it has no U.S. trade or business to file a protective Form 1120-F anyway — this preserves the right to deductions if the position later proves wrong, and starts the statute of limitations running on that year (which otherwise stays open indefinitely, since Code §6501(a) doesn\'t begin the clock until the return is filed). PRCo would also need to file Form 5472 alongside its 1120-F to report its salary payment to Joe as a reportable transaction with a related party — the penalty for missing this is generally $25,000.',
      },
      {
        type: 'paragraph',
        text: 'Because more than 25% of PRCo\'s gross income is now effectively connected income, Joe is also treated as a U.S. person for CFC-testing purposes, making PRCo a controlled foreign corporation (Code §957(c)(1), (a)). As a U.S. shareholder of a CFC, Joe must annually file Form 5471 (penalty generally $10,000 for failure to file) and pick up any Subpart F Income or GILTI inclusions — though the U.S.-source income itself generally isn\'t Subpart F or tested income, and as with Form 926, the statute of limitations on Joe\'s own Form 1040 doesn\'t start running until the Form 5471 is filed (Code §6501(c)(3)).',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Given the IRS Campaign and increased IRS Criminal Investigation Division activity on the island, taxpayers should assess past filings now for noncompliance and get advice on remedying potential civil or criminal exposure. For ideas on structuring U.S. work to minimize these consequences, see our companion article on how Puerto Rico companies can mitigate U.S. tax risks.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Compliance'],
    content: [
      {
        type: 'paragraph',
        text: 'This alert was co-authored with Caplin & Drysdale, Chartered, and originally published November 2, 2020.',
      },
      {
        type: 'paragraph',
        text: 'The Department of Justice indicted and arrested the head of BDO Puerto Rico\'s Tax Division for allegedly flouting the rules surrounding Puerto Rico\'s Act 20/22/60 tax incentive program — and the DOJ may now possess a list of BDO\'s Act 60 clients. What should Puerto Rico residents utilizing the Act 60 regime do now? Four areas deserve immediate attention: reassessing bona fide Puerto Rico residency; reevaluating U.S. tax positions for the Puerto Rico company itself; understanding potential penalty exposure; and, where compliance is uncertain, consulting experienced tax counsel about acting preemptively before the IRS makes first contact.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Meeting the Three-Part Residency Requirement',
      },
      {
        type: 'paragraph',
        text: 'Eligibility for Act 60 tax relief turns on whether a U.S. citizen is a bona fide resident of Puerto Rico under three tests: the presence test, the tax home test, and the closer connection test. The presence and tax home tests are relatively mechanical, resting on quantitative data like day counts and income figures; the closer connection test requires a more nuanced facts-and-circumstances analysis of qualitative factors — personal relationships, affiliations, and similar connections — that often make or break a residency dispute and require careful, up-to-date review. If the residency test isn\'t met, the U.S. may tax all of a taxpayer\'s Puerto Rico income, and the Act 60 company will likely become a controlled foreign corporation subject to current U.S. taxation under Subpart F or GILTI.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Four Cross-Border Issues to Reexamine',
      },
      {
        type: 'paragraph',
        text: 'Even for taxpayers who clearly satisfy the residency test, several cross-border issues warrant review. First, formation: transferring assets (customer lists, know-how, cash, etc.) to the new Act 60 company at formation triggers a U.S. "exit tax" under Code §367 and a Form 926 filing requirement — failing to file can result in penalties and leaves the statute of limitations open indefinitely, so an unfiled Form 926 should be filed now if discovered. Second, transfer pricing: ongoing payments between the Puerto Rico entity and a related U.S. entity (such as consulting fees) must be priced at arm\'s length, a determination that benefits from experienced transfer pricing counsel and economist support. Third, U.S. presence: an Act 60 company can become subject to U.S. tax if an owner or employee performs work for it while physically in the U.S. — even short-term presence or a single transaction can be enough, given how low and legally ambiguous the threshold for a "U.S. trade or business" is, potentially exposing the company to three layers of U.S. tax (corporate income tax, branch profits tax, and dividends tax). Fourth, inversions: if a preexisting U.S. corporation or partnership migrates substantially all of its assets to a Puerto Rico entity classified as a corporation, the anti-inversion rules can cause that Puerto Rico entity to be taxed as a U.S. corporation on its full worldwide income, with the statute of limitations remaining open if no U.S. returns were ever filed.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Assessing and Mitigating Exposure',
      },
      {
        type: 'paragraph',
        text: 'If the IRS determines a deficiency from improper residency claims, transfer pricing, unreported U.S. presence, or an inversion, standard civil penalties of 20%, 40%, or even 75% of the unpaid tax can apply, plus interest — and because certain international information forms may not have been filed, the relevant statute of limitations can remain open far longer than the standard 3 or 6 years. If a taxpayer has improperly claimed U.S. tax benefits under Act 60, it is generally not too late to correct course: the IRS\'s voluntary disclosure program requires filing six years of accurate returns and paying penalties in addition to tax and interest, but in exchange grants criminal amnesty for taxpayers who complete it. Even where voluntary disclosure isn\'t the right fit, or where an audit has already begun, engaging experienced counsel promptly remains the most important step.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'paragraph',
        text: 'In general, to be considered a bona fide resident of Puerto Rico, an individual must meet a presence test, a tax home test, and a closer connection test (Code §937(a); Treas. Reg. §1.937-1). This article focuses on the closer connection test.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Setting Up the Example',
      },
      {
        type: 'paragraph',
        text: 'Joe, a U.S. citizen, lives in Connecticut, works for a hedge fund, is married with two children, and decides to move to Puerto Rico to become a bona fide resident and access its tax benefits. Joe meets the presence test by spending more than 183 days a year in Puerto Rico, and his principal place of business is there, so he meets the tax home test as well. But since he still spends several months a year in the U.S. and retains U.S. assets and connections, he needs to separately determine whether he meets the closer connection test.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Closer Connection Test',
      },
      {
        type: 'paragraph',
        text: 'The closer connection test borrows its framework from the "closer connection exception" used elsewhere in the Code for determining tax residency (Code §7701(b)(3)(B)(ii); Treas. Reg. §301.7701(b)-2(d)). Under that framework, an individual is considered to have a closer connection to a foreign jurisdiction (here, Puerto Rico) than to the United States if he or she "has maintained more significant contacts" with that jurisdiction — a facts-and-circumstances test considering, among other things: the location of the individual\'s permanent home; the location of the individual\'s family; the location of personal belongings (cars, furniture, jewelry); the location of social, political, cultural, or religious organizations the individual is active in; where routine personal banking happens; where the individual conducts business (apart from their tax home); the jurisdiction of the individual\'s driver\'s license; where the individual votes; the residence the individual designates on official forms; and which official forms the individual has filed (Form 1078, W-8, W-9, etc.). Form 8898, required of individuals becoming Puerto Rico residents, includes a section specifically eliciting this information (Notice 2006-73).',
      },
      {
        type: 'heading',
        level: 2,
        text: "Joe's Time in the U.S.",
      },
      {
        type: 'paragraph',
        text: 'Even though time spent in the U.S. isn\'t explicitly one of the listed regulatory factors, it is a highly influential one in practice. If Joe spends 185 days in Puerto Rico and 180 in the U.S., he is likely close to the line on meeting the closer connection test at all, regardless of how the other factors come out.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Permanent Home — the Most Important Factor',
      },
      {
        type: 'paragraph',
        text: 'The location of an individual\'s permanent home is listed first in the regulation and is arguably the most important factor. If Joe keeps his Connecticut home without selling or renting it out while in Puerto Rico, that is a very significant U.S. connection. The key question is whether that home remains "available at all times, continuously, and not solely for stays of short duration" (Treas. Reg. §301.7701(b)-2(d)(2)) — for example, an in-law suite at Joe\'s parents\' house that he and his family can use whenever they want would count as a U.S. permanent home, even though he doesn\'t own it. An individual can have two permanent homes, one in Puerto Rico and one in the U.S. — but maintaining a U.S. permanent home is a serious strike against meeting the closer connection test.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Location of Family',
      },
      {
        type: 'paragraph',
        text: 'The location of an individual\'s immediate family — typically spouse and children — is the second listed factor and often the second most important. Where do Joe\'s wife and children spend their time while he is in the U.S.? Where are the children enrolled in school, and where do they go to camp? The more time Joe\'s spouse and children spend in the U.S., the more Joe himself will be treated as having significant U.S. connections. Every family situation differs — for an unmarried individual without children, the location of a dependent parent living with them could take on similar importance instead.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Personal Belongings and Other Factors',
      },
      {
        type: 'paragraph',
        text: 'The location of personal belongings is the third listed factor: if Joe and his wife left their Connecticut furniture behind and bought all-new furniture for Puerto Rico, that continuity of U.S. belongings (especially sentimental items like wedding-gift heirlooms) suggests lingering U.S. connections. The remaining factors — driver\'s license jurisdiction, voter registration, residence designated on official forms, banking location, and business activity location apart from the tax home — matter too, and Joe should obtain a Puerto Rico driver\'s license, register to vote there, and designate Puerto Rico as his residence on official documents. That said, these more easily manipulated factors tend to carry less weight with the IRS or a court than the harder-to-fake factors like where the family actually lives.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Effect of a Short Stay',
      },
      {
        type: 'paragraph',
        text: 'Although not an explicit regulatory factor, moving to Puerto Rico for only a few years before returning to the U.S. can itself suggest the connection was never that substantial — and because the IRS can generally audit up to three years after a return is filed, it will often be reviewing these facts with hindsight. An examiner may be more skeptical of someone who left after a short stay, viewing it as evidence the taxpayer was simply "taking advantage" of the tax break rather than genuinely relocating — even though the tax benefits themselves are entirely legitimate for a true bona fide resident. Similarly, quickly selling or donating Puerto Rico furniture and belongings upon departure can undercut a claim that meaningful roots were put down there.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Planning Takeaways',
      },
      {
        type: 'paragraph',
        text: 'The clearest path is to maintain only one permanent home, located in Puerto Rico, and to keep close family members there for as much of the year as possible. For anyone who continues to have meaningful U.S. contacts after moving, it is worth taking stock of daily life in Puerto Rico — genuine, regular, and well-documented interactions with the local community can be what ultimately persuades a court or examiner who might otherwise be on the fence.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Corporate Inversions', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'As combined federal, state, and local tax rates for high-income earners in many parts of the country exceed 40% (and approach or exceed 50% in states like California, New Jersey, and New York), many U.S. taxpayers look to Puerto Rico for relief — entity-level tax rates as low as 4%, with distributions from eligible companies taxed at 0%, available to any Act 60 company holding the right tax grant. But in the rush to relocate, many taxpayers overlook a provision buried in the Internal Revenue Code designed to penalize U.S. companies that leave the U.S. taxing jurisdiction: Code §7874, the corporate inversion statute. If it applies to an Act 60 company, the company is taxed at full U.S. corporate rates on its Puerto Rico earnings, and distributions its owners have been receiving tax-free in Puerto Rico remain fully subject to U.S. tax. This statute is frequently overlooked by tax and business advisors, with disastrous results.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Case Study',
      },
      {
        type: 'paragraph',
        text: 'John, a U.S. citizen living in New York, provides consulting services through his wholly owned S corporation, Johnson NY Consulting ("Johnson NY"), which generates $5.3 million in annual revenue from New York clients, nets John about $5.0 million in taxable income (salary plus pass-through income), and is his only company. Frustrated by high combined tax rates, John moves to Puerto Rico, becomes a bona fide resident, and forms a new Puerto Rican company, Johnson PR Consulting ("Johnson PR"), which qualifies for the 4% Act 60 rate. He closes Johnson NY, and Johnson PR now performs the exact same services for the exact same New York clients — with all the work now performed from Puerto Rico.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Anti-Inversion Problem',
      },
      {
        type: 'paragraph',
        text: 'John\'s advisors failed to warn him that Johnson PR faces a substantial risk of being taxed as a U.S. C corporation under the anti-inversion rules of Code §7874. If that happens, all of Johnson PR\'s income becomes subject to the 21% federal corporate rate, and its dividends to John become taxable at rates up to 23.8% — in a hypothetical four-year IRS audit of this fact pattern, corporate tax alone could reach roughly $4 million, individual tax on distributed dividends another $3.6 million, and penalties (25% or more of the tax due) an additional ~$1.9 million, pushing the effective rate as high as 50% — far from the advertised 4%. And because Johnson PR never filed U.S. tax returns, the statute of limitations never started running, leaving the IRS free to reach back as many years as it wants.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'How the Anti-Inversion Rules Work',
      },
      {
        type: 'paragraph',
        text: 'The anti-inversion rules were designed to discourage large U.S. multinationals from reincorporating abroad, but nothing in the statute limits their reach to big companies — they can apply just as readily to a single-owner consulting business. A foreign corporation is treated as a "surrogate foreign corporation" (and taxed as if domestic) if, under a plan or series of related transactions: (1) it acquires substantially all of the properties of a domestic corporation, (2) at least 80% of its stock is held by the domestic corporation\'s former shareholders by reason of their prior ownership, and (3) afterward, the expanded group including the foreign corporation lacks "substantial business activities" in the country where it was organized, relative to the group\'s total activities (Code §7874(a)(2)(B)).',
      },
      {
        type: 'paragraph',
        text: 'This framework echoes the older "liquidation-reincorporation" doctrine, where courts held that liquidating an old corporation and recontributing its operating assets to a new one — even without formally issuing new shares, under the "meaningless gesture" doctrine, when the shareholders are identical — amounted to a taxable reorganization rather than a true liquidation (Telephone Answering Service Co. v. Commr., 63 T.C. 423 (1974); Commr. v. Morgan, 288 F.2d 676 (3d Cir. 1960)). Courts have found that transferring only a company\'s operating assets — even a small fraction of its total gross value — can satisfy a "substantially all" requirement, since operating assets are what the business actually needs to run, and the same reasoning likely applies to the analogous "substantially all of the properties" language in Code §7874.',
      },
      {
        type: 'heading',
        level: 2,
        text: "Applying the Three Tests to John's Situation",
      },
      {
        type: 'paragraph',
        text: 'Because Johnson NY, a consulting business, likely has few tangible assets and mostly intangible ones (goodwill, customer relationships, know-how), and Johnson PR now uses those same operating assets, the first requirement — acquisition of substantially all of Johnson NY\'s properties — is likely met. Because John is the sole shareholder of both corporations, the "meaningless gesture" doctrine treats him as having received his Johnson PR shares by reason of his prior Johnson NY ownership, satisfying the 80% test. And because Johnson PR\'s expanded affiliated group (just Johnson PR itself, since John owns no other companies) derives none of its income from Puerto Rico-based customers — all of Johnson PR\'s clients remain in New York — it fails the 25%-group-income-in-Puerto-Rico threshold needed to show "substantial business activities" there (Treas. Reg. §1.7874-3(b), (c)). All three requirements are met: Johnson PR is a surrogate foreign corporation, taxed as a U.S. corporation on its full worldwide income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Broader Context and Takeaway',
      },
      {
        type: 'paragraph',
        text: 'If John knew (or should have known) that Johnson PR should be taxed as a U.S. corporation and willfully failed to file and pay U.S. tax, he could face potential criminal exposure under Code §7201. This is not merely a hypothetical risk: in December 2019, members of Congress sent a letter to the Secretary of the Treasury specifically flagging Acts 20 and 22 as vehicles for "significant tax avoidance by wealthy individuals" and noting that "the IRS is aware of cases" in Puerto Rico — clear evidence the IRS has been actively working these cases. The corporate inversion rules are just one of several landmines (see also Code §367(d) on intangible property transfers and Code §882(a) on U.S. trade or business income) that anyone restructuring a U.S. business into a Puerto Rico entity needs to navigate carefully, with proper planning up front rather than discovering the problem on audit.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
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
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Risk Management'],
    content: [
      {
        type: 'paragraph',
        text: 'This alert was co-authored with Caplin & Drysdale, Chartered.',
      },
      {
        type: 'paragraph',
        text: 'You moved to Puerto Rico and set up an Act 20 or Act 73 company. The company\'s income is taxed at 4% — a rate that\'s virtually impossible to match anywhere else, legally — but the cost to your personal mobility is real: you generally must spend at least 183 days a year in Puerto Rico. The last thing you want is to spend all that time, possibly away from your family, and still not achieve the reduced rate. For many Puerto Rico companies, the biggest threat to the 4% rate is the IRS treating the company as doing business in the United States and taxing it accordingly — which can happen simply because you personally spend time on company matters while in the U.S. (and that same activity can make your Puerto Rico wages subject to U.S. tax too).',
      },
      {
        type: 'paragraph',
        text: 'The results can be disastrous: the IRS can disallow deductions and tax the company\'s gross revenue at 21%; if the company leaves no funds in the U.S., an additional 30% branch profits tax applies; and dividends the company eventually pays may be treated as partly U.S.-source and taxed again. All of this sits on top of potential penalties, which can be criminal in the worst cases. The good news is there are real solutions — U.S. activities can be structured and priced to appropriately minimize U.S. tax exposure. This article focuses on Puerto Rico operations earning services income (such as hedge fund advisors); the risks and solutions differ by fact pattern and require careful legal analysis.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'When Will the IRS Tax Your Puerto Rico Company?',
      },
      {
        type: 'paragraph',
        text: 'The IRS treats a Puerto Rico company as a foreign corporation (Code §7701(a)(4), (5), (10)), and foreign corporations are subject to U.S. tax if engaged in a U.S. trade or business (Code §882(a)) — which occurs whenever the corporation\'s employees perform services in the U.S. (Code §864(b)). The bar for what counts as a "trade or business" is both low and uncertain: even short-term presence of an employee (including the owner) may be enough, a single transaction can qualify if significant relative to total activity, and the presence of an agent or independent contractor may suffice (Rev. Rul. 70-424; De Amodio v. Commr., 34 T.C. 894 (1960)). A few days a year of U.S. presence for a services company probably does not create a trade or business — but our experience is that many Puerto Rico company owners spend far more time than that acting for the company while in the U.S.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Three Layers of U.S. Tax',
      },
      {
        type: 'paragraph',
        text: 'If a Puerto Rico company is found to have a U.S. trade or business, up to three layers of U.S. tax can apply. First, corporate income tax on income "effectively connected" with the U.S. business (often apportioned based on time spent in the U.S.), at 21% plus state and local tax — and if the company never files U.S. returns, the IRS can disallow deductions entirely and tax gross U.S. revenue at that rate. Second, a 30% branch profits tax (Code §884(a)), sometimes called the "dividend equivalent amount," which typically applies because the Puerto Rico company\'s funds are never actually moved to a U.S. branch but instead stay in Puerto Rico. Third, a dividends tax: if U.S. branch income exceeds roughly 20% of the company\'s gross income, a portion of dividends paid to the owner becomes taxable in the U.S.; and if branch income exceeds 25% of gross income, a bona fide Puerto Rico resident owner may be treated as a U.S. person for CFC purposes, making the company a controlled foreign corporation subject to current GILTI and Subpart F taxation on the owner\'s share of certain income (with some relief potentially available to bona fide Puerto Rico residents under the GILTI regime specifically).',
      },
      {
        type: 'paragraph',
        text: 'On top of the corporate-level exposure, the IRS may also tax an owner\'s wage income for services performed while in the United States, again typically apportioned on a time basis. Penalties for all of this can run 20%, 40%, or even 75% of the underpayment, with criminal penalties (including jail time) possible for willful failures to file and pay.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Potential Solutions',
      },
      {
        type: 'paragraph',
        text: 'The cleanest solution is simply staying in Puerto Rico and off the mainland — but few owners can realistically do that. The next best option, and a structure we frequently recommend and implement, is forming a separate U.S. pass-through entity that employs the owner and any staff for the time they work from the mainland, with that U.S. entity contracting with the Puerto Rico company to provide services. Done properly, this structure can avoid the corporate tax, branch profits tax, and dividends tax "trifecta" described above. The tradeoff is that the U.S. entity\'s income becomes subject to ordinary U.S. tax (up to 37% plus state and local) — but that U.S.-taxed income need not be based purely on relative time spent in each location; an intercompany agreement can instead reflect the relative assets, risks, and functions each entity contributes, supported by a transfer pricing study using accepted pricing conventions, to appropriately minimize the U.S.-taxed share.',
      },
      {
        type: 'paragraph',
        text: 'Short of restructuring, a Puerto Rico company can also file a protective Form 1120-F (reporting zero or minimal income) to preserve its ability to claim deductions and avoid or mitigate penalties if it is later determined that a U.S. trade or business did exist — though this alone doesn\'t eliminate potential U.S. tax exposure the way a proper U.S. entity structure can.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'If you and your Puerto Rico company are operating in the U.S. at all, ignoring the U.S. tax consequences isn\'t a viable option — the downside is too severe, and workable solutions that typically produce only modest additional tax are readily available with proper planning.',
      },
      {
        type: 'disclaimer',
        text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
      },
    ],
  }),
];

export const articleSlugs = articles.map((a) => a.slug);
