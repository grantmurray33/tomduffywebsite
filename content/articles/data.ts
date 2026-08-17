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
    description: 'How long the IRS may examine U.S. tax returns for bona fide residents of Puerto Rico, including extensions tied to international disclosure forms.',
    publishedAt: '2025-08-24',
    excerpt: 'Over the past 12 years, during seminars, speaking engagements, and in prospective client meetings regarding Puerto Rico’s Act 60 program, a question that we receive quite often is: “How long do I need to be concerned about the IRS examining my US tax return?” Since it is such a popular topic, it is going to be the subject of this article. The answer, as with most issues, is multi-pronged and…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Statute-of-Limitations-and-WSLA-for-BRPR-Article.pdf',
    relatedSlugs: [
      'requirements-puerto-rico-residents',
      'us-tax-form-926-act-60',
      'bona-fide-residency-in-puerto-rico-presence-test'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Statute of Limitations', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Over the past 12 years, during seminars, speaking engagements, and in prospective client meetings regarding Puerto Rico’s Act 60 program, a question that we receive quite often is: “How long do I need to be concerned about the IRS examining my US tax return?” Since it is such a popular topic, it is going to be the subject of this article. The answer, as with most issues, is multi-pronged and fact specific. As a reminder, we are not attorneys and nothing in this article can be construed as legal advice. This is an important disclaimer because the answer to this question often requires an analysis of both civil and criminal rules. This article discusses those time limits and introduces some issues that the reader may want to discuss with their legal counsel.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Importance of Statutes of Limitations',
      },
      {
        type: 'paragraph',
        text: 'In Rothensies v. Electric Storage Battery Co.,the Supreme Court stressed the importance of a statute of limitations, stating:',
      },
      {
        type: 'paragraph',
        text: 'It * * * would be all but intolerable * * * to have an income tax system under which there never would come a day of final settlement and which required both the taxpayer and the Government to stand ready forever and a day to produce vouchers, prove events, establish values and recall details of all that goes into an income tax contest. Hence, a statute of limitation is an almost indispensable element of fairness as well as of practical administration of an income tax policy.',
      },
      {
        type: 'paragraph',
        text: '* * * Statutes of limitation * * * are designed to promote justice by preventing surprises through the revival of claims that have been allowed to slumber until evidence has been lost, memories have faded, and witnesses have disappeared. The theory is that even if one has a just claim it is unjust not to put the adversary on notice to defend within the period of limitation and that the right to be free of stale claims in time comes to prevail over the right to prosecute them. [Internal quotations omitted]',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Statute of Limitations',
      },
      {
        type: 'paragraph',
        text: 'A statute of limitations is the time period established by law during which the government can review, analyze, and resolve tax-related issues. When the statutory period expires, the IRS can no longer assess or collect additional tax, or allow taxpayers to claim a refund.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'General Rules (3 Years or No Limit)',
      },
      {
        type: 'paragraph',
        text: 'In general, the assessment of a deficiency in tax must be made within 3 years of the taxpayer’s filing of his or her return. However, there is no limit on the time to assess tax if the IRS proves fraud or if the taxpayer does not file a return. If a taxpayer files a late return, the statute of limitations ends 3 years after the filing of the late return.',
      },
      {
        type: 'paragraph',
        text: 'The limitations period is extended to 6 years in three circumstances discussed below.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Substantial Omission of Gross Income (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'The limitations period is extended to 6 years when a taxpayer omits from gross income an amount that exceeds 25% of the gross income required to be shown on the taxpayer’s return. However, an amount is not considered omitted from gross income if the amount is “disclosed in the return, or in a statement attached to the return, in a manner adequate to apprise the [IRS] of the nature and amount of such item.”',
      },
      {
        type: 'paragraph',
        text: 'This 25% omission from gross income rule is particularly relevant to bona fide residents of Puerto Rico because is it normal for bona fide residents of Puerto Rico to exclude Puerto Rican-source income from their US tax returns.',
      },
      {
        type: 'paragraph',
        text: 'Example 1: Tony is a bona fide resident of Puerto Rico. Tony’s worldwide gross income is $40,000,000, with $30,000,000 being Puerto Rican-source income and $10,000,000 being US-source income. The $30,000,000 of Puerto Rican-source income can be excluded from Tony’s US tax return. Therefore, Tony’s US tax return is only required to show $10,000,000 of gross income.',
      },
      {
        type: 'paragraph',
        text: 'If it is later determined that $12,000,000 of the $30,000,000 is more properly characterized as US-source income, Tony will have excluded 54.5% ($12,000,000 /$22,000,000) of the gross income required to be shown on his return, and the statute of limitations will be extended to 6 years. That is, unless Tony disclosed in his return, or in a statement attached to his return, the nature and amount of the $12,000,000. If Tony had attached such a statement, the $12,000,000 would likely not be considered omitted from his gross income, and the 6-year statute of limitations would likely not apply.',
      },
      {
        type: 'paragraph',
        text: 'To avoid the potential 6-year statute of limitations, bona fide residents of Puerto Rico should be sure to disclose on their US tax returns the nature and amount of any income that will be excluded from US gross income.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Omission of Income from Foreign Financial Assets (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'IRS Form 8938, Statement of Foreign Financial Assets, requires certain taxpayers to disclose information about foreign financial assets. If a taxpayer improperly omits more than $5,000 from gross income, where the omitted amount is attributable to foreign financial assets, the limitations period on assessment is extended to 6 years. This rule applies regardless of whether or not the taxpayer is required to file Form 8938.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Omission of Subpart F Income or GILTI Inclusions (6 Years)',
      },
      {
        type: 'paragraph',
        text: 'US shareholders of controlled foreign corporations (“CFCs”) are often required to include Subpart F Income and/or global intangible low-taxed income (“GILTI”) inclusions in their gross income. If such a US shareholder omits from his or her gross income Subpart F Income or GILTI inclusions that are required to be shown on his or her return, the limitations period on assessment is extended to 6 years.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Failure to Include International Disclosure Forms (Until 3 Years After the Forms Are Filed)',
      },
      {
        type: 'paragraph',
        text: 'An important rule for bona fide residents of Puerto Rico relates to an extension of the statute of limitations for failure to file certain international disclosure forms. Bona fide residents of Puerto Rico often miss filing certain of these forms, which can keep the statute of limitations open indefinitely.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The international disclosure forms captured by this rule include:',
      },
      {
        type: 'list',
        items: [
          'Form 5471, Information Return of U.S. Persons With Respect to Certain Foreign Corporations,',
          'Form 8621, Return by a Shareholder of a Passive Foreign Investment Company or Qualified Electing Fund,',
          'Form 926, Return by a U.S. Transferor of Property to a Foreign Corporation,',
          'Form 8865, Return of U.S. Persons With Respect to Certain Foreign Partnerships,',
          'Form 8938, Statement of Foreign Financial Assets,',
          'Form 3520, Annual Return To Report Transactions With Foreign Trusts and Receipt of Certain Foreign Gifts, and',
          'Form 3520-A, Annual Information Return of Foreign Trust With a U.S. Owner.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Bona fide residents of Puerto Rico often do not realize that they may need to file Form 926.',
      },
      {
        type: 'paragraph',
        text: 'Example 2: Grace is a US citizen who became a bona fide resident of Puerto Rico in 2021. In 2021, Grace formed an Act 60 company (“PRCo”) in Puerto Rico. PRCo is wholly-owned by Grace, and it is classified as a corporation for US tax purposes. As part of the 2021 formation of PRCo, Grace contributed $100 as equity into PRCo. However, Grace was not advised that she needed to file Form 926 with respect to the transfer of the $100 to PRCo. The statute of limitations for Grace’s 2021 tax return will remain open until 3 years after she files Form 926. If she never files Form 926 for 2021, then the statute of limitations for that year will remain open forever.',
      },
      {
        type: 'paragraph',
        text: 'Grace’s failure to file Form 926 for 2021 does not only extend the assessment period with respect to PRCo or Form 926. Instead, the extended period applies to her entire tax return for 2021. See our article that discusses the Form 926 filing requirements for residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Complicated rules apply to determine whether Forms 5471 are required for Puerto Rican entities owned by bona fide residents of Puerto Rico. If one or more Forms 5471 are missed for a particular year, the statute of limitations for that year will remain open until 3 years after the Forms 5471 are filed.',
      },
      {
        type: 'paragraph',
        text: 'Example 3: In 2024, Joe is a bona fide resident of Puerto Rico. Joe owns 100% of USCo, a US C corporation and 100% of PRCo, a Puerto Rican limited liability company that is classified as a corporation for US tax purposes. In 2024, USCo paid a management fee of $10 million to PRCo. The primary justification for the amount of the management fee is the expertise provided by Joe (through PRCo).',
      },
      {
        type: 'paragraph',
        text: 'In 2024 (and for the past few years), Joe spent 40% of his time in the US. During his time in the US, Joe performed his normal duties on behalf of PRCo. Accordingly, up to 40% of PRCo’s gross income is US-source income and is effectively connected with the conduct of a trade or business in the US. For multiple reasons, Joe is required to file Form 5471. First, PRCo is a controlled foreign corporation (“CFC”), and Joe is a US shareholder with respect to the CFC. US shareholders that control CFCs must file Form 5471 as Category 4 and 5 filers. Second, PRCo will not meet the 80% test in Treas. Reg. §1.937-2(g)(1)(ii)(A), meaning that Joe will be considered a US person who controls PRCo.',
      },
      {
        type: 'paragraph',
        text: 'If Joe fails to file Form 5471 for 2024, the statute of limitations will remain open until 3 years after he files the form.',
      },
      {
        type: 'paragraph',
        text: 'Certain aspects of the passive foreign investment company (“PFIC”) rules do not apply to bona fide residents of Puerto Rico. However, there are no exceptions to the annual filing requirements with respect to PFICs for bona fide residents of Puerto Rico. Therefore, Form 8621 may be required for a bona fide resident of Puerto Rico even if no US tax is due with respect to the PFIC.',
      },
      {
        type: 'paragraph',
        text: 'Example 4: In 2023, Kevin is a bona fide resident of Puerto Rico. Kevin owns 100% of PRCo, a Puerto Rican limited liability company that is classified as a corporation for US tax purposes. PRCo owns Kevin’s principal residence in Puerto Rico that was purchased several years ago for $5 million. Although PRCo is not a CFC, Kevin was advised that he needed to annually file Form 5471 for PRCo. Therefore, Kevin timely filed Form 5471 for PRCo in 2023. However, Kevin’s US tax advisor did not realize that his residence held by PRCo is a passive asset because it is an asset that does not give rise to any income. Because more than 50% of PRCo’s assets are passive assets, PRCo is considered a PFIC. Kevin is required to annually file Form 8621 for PRCo. Kevin was unaware of this requirement, and he did not file Form 8621 for 2023.',
      },
      {
        type: 'paragraph',
        text: 'The statute of limitations for Kevin’s 2023 tax return will remain open until 3 years after he files Form 8621. If he never files a 2023 Form 8621, then the statute of limitations for that year will remain open forever. Similar to Grace above, the extended period applies to Kevin’s entire tax return and is not limited to adjustments related to PRCo.',
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
        text: 'What begins as a civil audit can escalate into a criminal investigation if the IRS auditor uncovers “firm indications of fraud”. In such instances, the case is referred to the IRS Criminal Investigation division (“IRS CI”) which employs special agents to investigate potential criminal violations of the Internal Revenue Code. The IRS Manual provides notable commentary and instruction on the issues. Specifically, it provides:',
      },
      {
        type: 'paragraph',
        text: 'Avoidance of taxes is not a criminal offense. Any attempt to reduce, avoid, minimize, or alleviate taxes by legitimate means is permissible. The distinction between avoidance and evasion is fine, yet definite. One who avoids tax does not conceal or misrepresent. He/she shapes events to reduce or eliminate tax liability and, upon the happening of the events, makes a complete disclosure. Evasion, on the other hand, involves deceit, subterfuge, camouflage, concealment, some attempt to color or obscure events or to make things seem other than they are. For example, the creation of a bona fide partnership to reduce the tax liability of a business by dividing the income among several individual partners is tax avoidance. However, the facts of a particular investigation may show that an alleged partnership was not, in fact, established and that one or more of the alleged partners secretly returned his/her share of the profits to the real owner of the business, who, in turn, did not report this income. This would be an instance of attempted evasion.',
      },
      {
        type: 'paragraph',
        text: 'Separate statutes of limitations apply to federal tax crimes. The IRS Manual describes the statutes of limitations applicable to various types of potential federal tax crimes, as follows:',
      },
      {
        type: 'list',
        items: [
          'Code §6531 provides a three-year statute of limitations for most criminal offenses arising under the internal revenue laws.',
          'Code §7201 (evasion of tax or payment)',
          'Code §7202 (failure to collect, account for or pay over tax)',
          'Part of Code §7203 (failure to pay tax; failure to file certain returns)',
          'Code §7206(1) (filing false return)',
          'Code §7206(2) (aiding or assisting in preparation of false return)',
          'Code §7207 (delivering or disclosing false document)',
          'Code §7212(a) (attempting to interfere with the administration of the internal revenue laws)',
          '18 U.S.C. §371 (conspiracy to commit tax evasion; conspiracy to defraud the internal revenue service).',
        ],
      },
      {
        type: 'paragraph',
        text: 'If IRS CI does receive a referral, it would stand to reason that the applicable statute of limitations is a critical, if not watershed, component for IRS CI to consider when investigating potential tax crimes. The IRS Manual contains a comprehensive overview of the applicable statutes of limitations as it relates to tax offenses and even provides examples, as follows:',
      },
      {
        type: 'paragraph',
        text: 'Generally, the statute of limitations begins to run on the day the offense is completed. For example, if a false income tax return were filed on April 20, 2021, the statute of limitations would begin to run on April 20, 2021, and, provided there were no circumstances to toll the statute, it would expire on April 20, 2027. Once the statute of limitations expired, prosecution would be barred.',
      },
      {
        type: 'paragraph',
        text: 'The specific elements of the offense at issue must be examined to determine when the offense is completed. As illustrated below, different events “complete” different offenses:',
      },
      {
        type: 'list',
        items: [
          'Filing a false return: In general, the offense is complete on the day the return is filed. However, if the return is filed early, the offense is complete on the statutory due date, which is provided by 26 USC 6072 (but see below). If the return is filed late, the offense is complete on the day the return is received by the IRS Campus. If an extension of time to file has been granted, the offense is complete when the return is filed, regardless of whether it is filed before or after the extension date.',
          'Failure to file a tax return: The offense is complete on the date the return is due. If a defendant has obtained an extension of time to file a tax return, there is no duty to file until the extension date. The extension date applies only if the extension is valid (see 26 USC 6081 and the regulations thereunder for the required procedures). An extension of time to file does not extend the time for payment of tax due on the return. Therefore, a request for an extension is only valid when accompanied by payment of the taxpayer’s estimated tax liability.',
          'Tax evasion: The general rule is that the offense is complete on the date the last affirmative act took place or the statutory due date of the return, whichever is later. For example, the affirmative act of evasion may be a false statement made to collection agents after the return is filed. In such a case, the offense would be complete at the time the false statement was made.',
          'Conspiracy: The offense is complete on the date of the last overt act proved. This last overt act may be performed by any member of the conspiracy and must be in furtherance of the object of the conspiracy.',
        ],
      },
      {
        type: 'paragraph',
        text: 'According to the IRS Manual, IRS CI and the Department of Justice Tax Division (“DOJ”) will examine the facts and circumstances of the taxpayer’s situation and determine the appropriate statute of limitations period.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Suspension of the Statute of Limitations',
      },
      {
        type: 'paragraph',
        text: 'Based on the analysis above, most taxpayers would generally breathe a huge sigh of relief when they arrive at the end of the 6-year period. Assuming the IRS has not alleged any indication of fraud, tax practitioners have historically relied upon the 6-year period to mark the end of potential audit activity and liability. However, more than once in the past few years, we have heard discussion about the rarely used Wartime Suspension of Limitations Act that can effectively extend the statute of limitations indefinitely for tax offenses. While we generally limit our commentary to civil tax issues, and do not provide any legal advice or analysis, it is worth including a brief discussion of a potential tool that the DOJ might attempt to utilize against unsuspecting taxpayers in order to extend the 6-year statute of limitations period.',
      },
      {
        type: 'paragraph',
        text: 'As usual, we will use an example to help illustrate the point, as we understand it. Please note we are not attorneys and cannot provide legal advice. The following is solely for discussion purposes and to highlight an issue that may be of interest to taxpayers and their legal advisors.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example:',
      },
      {
        type: 'paragraph',
        text: 'Theo and Marlene moved to Puerto Rico in 2013. They traveled back and forth to the US quite a bit in 2014 to attend parties, vacation, and celebrate the sale of Theo’s company with family and friends. Soon thereafter, they discovered they did not meet the presence test to qualify as residents of Puerto Rico in 2014. After discussing the tax implications and realizing how much additional tax liability they would potentially incur, Theo and Marlene decided to falsify their travel docs and calendar entries to make it look like they were in Puerto Rico more than 183 days. They tell their tax preparer that they spent 185 days in Puerto Rico in order to pass the presence test. They file their 2014 US tax return on October 15, 2015 and exclude a significant amount of PR-source income from their US tax return.',
      },
      {
        type: 'paragraph',
        text: 'In 2020, they moved back to South Florida to be closer to their aging parents. On October 15, 2021, Theo and Marlene enjoy a celebratory dinner to commemorate the end of the 6-year statute of limitations period for their 2014 federal tax return. They were never contacted or audited by the IRS criminal or civil division and feel a tremendous relief that any future inquiry of the 2014 return would be prohibited due to the expiration of the statute of limitation period.',
      },
      {
        type: 'paragraph',
        text: 'On May 1, 2023, the IRS opens a civil audit on Theo and Marlene’s 2020 federal tax return which was filed on Oct 15, 2021. Due to some irregularities in connection with their claimed business deductions, IRS civil refers the exam to IRS CI. On March 17, 2025, IRS CI determines that there was no evidence of criminal tax activity on the 2020 federal tax return. However, based on documentation uncovered and interviews of various parties performed in the course of their investigation, IRS CI believes that Theo and Marlene committed various tax crimes in connection with their residency declaration on their 2014 federal tax return. Prosecutors threaten to charge Theo and Marlene with various tax offenses, including tax evasion, filing a false tax return, and conspiracy to commit offense or defraud the United States.',
      },
      {
        type: 'paragraph',
        text: 'QUESTION: Can IRS CI/DOJ investigate and prosecute Theo and Marlene for falsifying their residency in 2014 and will they?',
      },
      {
        type: 'paragraph',
        text: 'SHORT ANSWER: Based on existing authority, yes, they can, and they might.',
      },
      {
        type: 'paragraph',
        text: 'ANALYSIS: As discussed above, the statute of limitations for most tax crimes is 6 years. If more than 6 years have lapsed since the alleged fraud, a prosecution would likely be barred. However, if the prosecutor invokes the Wartime Suspension of Limitations Act, the prosecution may be allowed to proceed.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Wartime Suspension of Limitations Act (WSLA) provides:',
      },
      {
        type: 'paragraph',
        text: 'When the United States is at war or Congress has enacted a specific authorization for the use of the Armed Forces, as described in section 5(b) of the War Powers Resolution (50 U.S.C. Sec. 1544(b)), the running of any statute of limitations applicable to any offense (1) involving fraud or attempted fraud against the United States or any agency thereof in any manner, whether by conspiracy or not, …. shall be suspended until five years after the termination of hostilities as proclaimed by Presidential proclamation, with notice to Congress, or by a concurrent resolution of Congress.',
      },
      {
        type: 'paragraph',
        text: 'In essence, the WSLA suspends or tolls the statute of limitations with respect to any offense involving fraud or attempted fraud against the United States or any agency when the nation is “at war”, thereby extending the time for bringing charges. The suspension ends five years after the President proclaims the end of hostilities (with notice to Congress) or Congress passes a concurrent resolution. The WSLA was amended in 2008 to extend the suspension period from 3 to 5 years, make the provisions applicable to an authorization for the use of Armed Forces instead of only a ‘declared war’, and require a presidential proclamation, with notice to Congress, to signal the end of hostilities and thus end the suspension of the statute of limitations. Various courts have analyzed the application of the WSLA in connection with tax-related offenses. A discussion of a few of those cases follows.',
      },
      {
        type: 'paragraph',
        text: 'In Daugerdas v. United States, a CPA/lawyer was found to be the mastermind behind a decade-long scheme to defraud the IRS by designing, marketing, and implementing fraudulent tax shelters for wealthy clients. The tax shelters were designed as “cookie-cutter products” intended to eliminate or reduce large tax liabilities. The court determined that Daugerdas and his co-conspirators created fraudulent documents and backdated transactions to deceive the IRS about the true nature of these shelters. Daugerdas challenged his conviction using various arguments, one of which was based on the expiration of the statute of limitations. In upholding his conviction, on that point, the court held that authorizations for military force in Afghanistan and Iraq in 2001 and 2002, respectively, met the WSLA criteria, and suspended the statute of limitations for conspiracy to defraud the U.S. in tax matters and mail fraud charges. Daugerdas received a 15-year prison sentence and was ordered to forfeit $164.7 million in illegal proceeds and pay $371 million in restitution to the IRS. The WSLA’s role in this criminal prosecution was crucial as the government relied on its tolling provisions to extend the statute of limitations for the conspiracy to defraud the United States and related charges, including mail fraud.',
      },
      {
        type: 'paragraph',
        text: 'In another case, US v. David Wellington et al, the government invoked the WSLA in a matter involving a taxpayer charged with conspiracy to commit tax evasion and defraud the United States. Wellington attempted to have the case dismissed due to the expiration of the applicable 6-year statute of limitations. In response, the government successfully argued:',
      },
      {
        type: 'paragraph',
        text: 'In 2001, Congress authorized “the use of the Armed Forces” in response to the terrorist attacks of September 11, 2001….The following year, Congress authorized the President to use military force to “defend the national security of the United States against the continuing threat posed by Iraq” and “enforce all relevant United Nations Security Council resolutions regarding Iraq.”.…These Authorizations have never been repealed, and no Presidential proclamation has declared the termination of hostilities….The WSLA applies to “all frauds against the United States, including those unrelated to the war,” and therefore applies to Count 1 of the indictment, which alleges a conspiracy to defraud the United States. [Internal citations omitted.]',
      },
      {
        type: 'paragraph',
        text: 'Appeals courts in both the 1st and 11th federal circuits have found that t WSLA suspends the statute of limitations based on the authorizations for use of military force after the September 11th attacks and the 2003 Iraq war. It is worth noting that those authorizations are still in effect today as they have not been repealed or revoked. To further solidify the applicability of the WSLA, the 9th circuit has explicitly held that for offenses involving fraud against the US or',
      },
      {
        type: 'paragraph',
        text: 'offenses involving property of the US, there is no requirement of a nexus to Congress’s authorization of use of military force in order for the WSLA to apply.',
      },
      {
        type: 'paragraph',
        text: 'Some tax practitioners have advocated for changes to the way the government utilizes the WSLA, overtly acknowledging its applicability to tax offenses. Specifically, in 2021, the American Bar Association Tax Section, chaired by a former DOJ Tax prosecutor, suggested that it was a high priority for the government to issue guidance making it clear that IRS CI will not recommend prosecution for charges that otherwise would be untimely except through the operation of the WSLA. The ABA noted that this guidance is needed to avoid the potentially unlimited statute of limitations in cases involving tax offenses because, if the suspension is applicable, crimes more than two decades old could be recommended and prosecuted. The characterization of this guidance as a “high priority” item by a former DOJ Tax official is intriguing. However, the Wellington case was decided after that request from the ABA and nothing appears to have changed in the DOJ Criminal Tax Manual as a result. It is still silent on the issue.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Lack of Congressional Action since 2008',
      },
      {
        type: 'paragraph',
        text: 'The absence of legislative changes to the WSLA limiting its application to specific crimes might embolden prosecutors to employ it as a tool to suspend the statute of limitations applicable to tax offenses. Congress amended the WSLA in 2008 through the Wartime Enforcement of Fraud Act, extending the statute of limitations suspension period from three years to five years, and expanded the war-time circumstances under which the WSLA applies. There was no attempt to limit or proscribe the use of the WSLA with respect to certain types of charges, such as tax offenses. In fact, the 9th Circuit court, in Nishiie, specifically acknowledged that the WSLA might result in a multiple-decades long suspension of the statute of limitations absent Congressional action:',
      },
      {
        type: 'paragraph',
        text: 'Indeed, Congress has seemingly blessed this lengthy tolling even given the modern expansion of the WSLA’s war powers. When Congress amended the WSLA in 2008, Congress changed the WSLA’s triggering event, providing that suspension of the running of any applicable statute of limitations was available not only “[w]hen the United States is at war” but also when Congress has enacted a specific authorization for the “use of the Armed Forces.” Congress also extended the suspension period from three to five years. Pub. L. 110-417, § 855, 122 Stat. 4545 (2008).*** Readily apparent from the WSLA’s amendment history is that Congress is fully capable of changing course and cabining the reach of any statute of limitations if it decides public policy warrants such a change.',
      },
      {
        type: 'paragraph',
        text: 'Absent any changes to the substantive scope of the WSLA by Congress, or any mention of the WSLA in the IRS Criminal Manual or DOJ Criminal Tax Manual limiting its applicability, is it reasonable to assume that a prosecutor might successfully invoke the WSLA in their case against Theo and Marlene?',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'In general, the statute of limitations for the IRS to assess additional taxes is generally 3 years from the date of filing a tax return, or 6 years in the case of a ‘gross omission’. However, the statute of limitations is unlimited if the IRS can prove civil fraud or if no tax return was filed. If the DOJ decides to prosecute a taxpayer for tax offenses, the statute of limitations could potentially extend many more years if the WSLA applies to suspend the statute of limitations.',
      },
      {
        type: 'paragraph',
        text: 'Theo and Marlene, in our example above, would be wise to contact competent criminal defense attorneys to discuss their particular facts and circumstances. If the prosecutor successfully utilizes the WSLA, the 6-year statute of limitations might not be a bar to prosecution of their tax offenses in 2015.',
      },
      {
        type: 'paragraph',
        text: 'As always, we strongly encourage all taxpayers who are contacted by the IRS to engage a competent legal team to perform a review of their facts and applicable statutes of limitations, including a careful review of the potential impact of the WSLA, particularly in the 1st, 9th, and 11th Circuits.',
      },
    ],
  }),
  defineArticle({
    slug: 'bona-fide-residency-in-puerto-rico-presence-test',
    title: 'The "Presence Test" for Bona Fide Residency in Puerto Rico',
    description: 'An analysis of the presence test for bona fide residency in Puerto Rico under U.S. tax rules.',
    publishedAt: '2025-01-20',
    excerpt: 'As we have discussed in previous articles, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test. In this article we will focus on the presence test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Presence-Test-for-PR-Residents-Article-Jan-2025.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Bona Fide Resident of Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'As we have discussed in previous articles, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test. In this article we will focus on the presence test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Presence Test',
      },
      {
        type: 'heading',
        level: 3,
        text: 'There are five alternative ways to meet the presence test. The five ways include:',
      },
      {
        type: 'list',
        items: [
          'Be present in Puerto Rico for at least 183 days during the taxable year (“183 Day Rule”);',
          'Be present in Puerto Rico for at least 549 days during the three-year period consisting of the taxable year and the two immediately preceding taxable years, and',
          'Be present in Puerto Rico for at least 60 days during each of the three taxable years;',
          'Be present in the U.S. for no more than 90 days during the taxable year (“90 Day Rule”);',
          'Have earned income in the U.S. during the taxable year less than $3,000, and',
          'Be present in Puerto Rico for more days during the taxable year than in the U.S.; or',
        ],
      },
      {
        type: 'list',
        items: [
          'Have no significant connection to the U.S. during the taxable year (“No Significant U.S. Connection Rule”).',
        ],
      },
      {
        type: 'paragraph',
        text: 'An individual only needs to meet one of the five alternative ways in order to meet the presence test.',
      },
      {
        type: 'paragraph',
        text: 'Below are examples of different fact patterns discussing when an individual meets one or more of the presence test rules. Although these examples demonstrate when an individual can meet the presence test, they are not representative of when an individual qualifies as a bona fide resident of Puerto Rico. It is important to remember that, in addition to meeting the presence test, individuals must also meet the tax home test and the closer connection test. For our prior article discussing the closer connection test, click here.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'David Lives in Israel & Annually Vacations in Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'David is a U.S. citizen who lives and works in Israel. David has no home in the U.S. He is single and has no children. David is not registered to vote in U.S. elections.',
      },
      {
        type: 'paragraph',
        text: 'Once a year, David visits Puerto Rico for ten days around Hannukah. David stays in a hotel in San Juan when he visits. Other than his annual Hannukah visits to Puerto Rico, David has no connection to Puerto Rico. David does not visit the U.S. at all during the year.',
      },
      {
        type: 'paragraph',
        text: 'David does not meet the 183 Day Rule because he only spends 10 days in Puerto Rico each year. David does not meet the 549 Day Rule because he only spends 30 days in Puerto Rico each three-year period.',
      },
      {
        type: 'paragraph',
        text: 'David meets the 90 Day Rule because he was not in the U.S. for more than 90 days in the taxable year. David also meets the Earned Income Rule because he had no earned income from the U.S. during the taxable year and he was present in Puerto Rico for more days during the taxable year than he was present in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'David would have a significant connection to the U.S. if: (A) he has a permanent home in the U.S., (B) he is registered to vote in any political subdivision of the U.S.; or (C) he has a spouse or minor child whose abode is in the U.S. David has no home in the U.S. David is not registered to vote. David is not married, and he has no children. Consequently, David has no significant connection to the U.S. as defined under the No Significant U.S. Connection Rule.',
      },
      {
        type: 'paragraph',
        text: 'David clearly meets the presence test. In fact, he meets three of the five alternative ways to qualify for the presence test. He only needs to meet one of the ways, and he qualifies for three.',
      },
      {
        type: 'paragraph',
        text: 'Whether David would meet the tax home test [he does not] or the closer connection test [he does not] are separate questions that we do not discuss in this article.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Ken Cruises the World on His Yacht',
      },
      {
        type: 'paragraph',
        text: 'Ken is a U.S. citizen. A few years ago, Ken sold his Internet startup company for $500 million. Now Ken spends most of his time on his yacht. Ken no longer has a job. His time is spent managing his investments. His wife lives with him, mostly on the yacht. Ken has three grown children who live in California. Ken has a home in New York and a home in California.',
      },
      {
        type: 'paragraph',
        text: 'During each year, Ken spends 30 days in the U.S., and he spends 31 days in Puerto Rico. Ken cruises around the world on his yacht during the remaining 304 days of each year.',
      },
      {
        type: 'paragraph',
        text: 'Ken does not meet the 183 Day Rule because he only spends 31 days in Puerto Rico each year. Ken does not meet the 549 Day Rule because he only spends 93 days in Puerto Rico each three-year period.',
      },
      {
        type: 'paragraph',
        text: 'Ken meets the 90 Day Rule because he was not in the U.S. for more than 90 days in the taxable year. Ken also meets the Earned Income Rule because he had no earned income from the U.S. during the taxable year and he was present in Puerto Rico for more days during the taxable year than he was present in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Ken does not meet the No Significant U.S. Connection Rule because he has two homes in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'In summary, Ken meets two of the five alternative ways to qualify for the presence test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Julie Has Been Spending More Time in the U.S. Recently',
      },
      {
        type: 'paragraph',
        text: 'Julie is a U.S. citizen. In 2022, Julie spent 365 days in Puerto Rico. In 2023, Julie spent 124 days in Puerto Rico and the rest of the days in the U.S. In 2024, Julie spent 60 days in Puerto Rico and the rest of the days in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'For 2024, Julie meets the 549 Day Rule. That is, for the three-year period from 2022 to 2024, Julie was present in Puerto Rico for 549 days, and she was present in Puerto Rico for at least 60 days each of the years from 2022 to 2024. Consequently, Julie meets the presence test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'José Attends University in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'José is a U.S. citizen who was born in Puerto Rico. Up to the age of 18, José never left Puerto Rico. After graduating high school in Puerto Rico, José began attending university in New York. During 2024, José’s second year in college, he spent 320 days in the U.S. The university that José attends closes down during the summer. José returned to Puerto Rico for 45 days during the summer of 2024. José did not work at all during 2024. José is not registered to vote.',
      },
      {
        type: 'paragraph',
        text: 'José does not meet the 183 Day Rule because he did not spend at least 183 days in Puerto Rico during 2024. José does not meet the 549 Day Rule because he did not spend at least 60 days in Puerto Rico during 2024.',
      },
      {
        type: 'paragraph',
        text: 'José meets the 90 Day Rule because his days of presence in the U.S. as a student are not counted as days of presence in the U.S.[1] José meets the Earned Income Rule because he had no earned income in the U.S. during 2024 and he spent more days in Puerto Rico (45) than in the U.S. (none of his student days are treated as U.S. day. Lastly, José meets the No Significant U.S. Connection Rule because: (i) he does not have a permanent home in the U.S., (ii) he is not registered to vote in any political subdivision of the U.S., and (iii) he does not have a spouse or minor children with an abode in the U.S. Therefore, José meets three of the five alternative ways of meeting the presence test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Phil and Dorothy’s Foreign Travel',
      },
      {
        type: 'paragraph',
        text: 'Phil and Dorothy are U.S. citizens. They moved to Puerto Rico in 2023. In 2024, they spent 140 days in the U.S., 155 days in Puerto Rico, and 70 days in Europe.',
      },
      {
        type: 'paragraph',
        text: 'Although Phil and Dorothy only spent 155 days in Puerto Rico in 2024, for purposes of the 183 Day Rule they are considered as present in Puerto Rico for up to 30 days that they spend outside',
      },
      {
        type: 'paragraph',
        text: 'of the U.S. and Puerto Rico. This special 30-day rule only applies if Phil and Dorothy spent more days in Puerto Rico than in the U.S. (without including the extra 30 days). Without considering the extra 30 days, Phil and Dorothy spent 155 days in Puerto Rico and 140 days in the U.S. Because they spent more days in Puerto Rico than in the U.S., they are allowed to count up to 30 of the 70 days in Europe as days in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'For 2024, Phil and Dorothy are treated as present in Puerto Rico for 185 days (155 + 30). Therefore, Phil and Dorothy meet the 183 Day Rule, and they meet the presence test for 2024.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Beth’s First Year in Puerto Rico (But a Hurricane Hit)',
      },
      {
        type: 'paragraph',
        text: 'Beth moved from California to Puerto Rico on June 22, 2024. She anticipated remaining in Puerto Rico for 192 days from June 22, 2024 to December 31, 2024. Thus, Beth’s plan was to meet the presence test in 2024 by meeting the 183 Day Rule.',
      },
      {
        type: 'paragraph',
        text: 'Ernesto, a powerful tropical storm, was forecast to hit Puerto Rico on August 13, 2024. Concerned about her physical safety, Beth booked a flight to leave Puerto Rico on August 12, 2024. Beth returned to Puerto Rico on August 22, 2024, when she felt it was safe to return. She remained in Puerto Rico for the rest of 2024. A FEMA notice of a Presidential declaration of a major disaster was issued in the Federal Register for Ernesto with an “incident period” of August 13, 2024 to August 16, 2024.',
      },
      {
        type: 'paragraph',
        text: 'An individual is considered to be present in Puerto Rico on any day the individual is outside Puerto Rico because she leaves or is unable to return to Puerto Rico during any 14-day period within which a major disaster occurs in Puerto Rico and for which a FEMA notice of a Presidential declaration of a major disaster is issued in the Federal Register.',
      },
      {
        type: 'paragraph',
        text: 'Beth was physically present in Puerto Rico for only 182 days during 2024. However, all 10 days Beth was outside of Puerto Rico were within 14 days of the disaster incident period. Thus, Beth is considered to be present in Puerto Rico for all 10 days she was away. Since Beth was present',
      },
      {
        type: 'paragraph',
        text: 'in, or considered present in, Puerto Rico for 192 days during 2024, Beth meets the 183 Day Rule, and she meets the presence test for 2024.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Jane’s First Year in Puerto Rico (But Caught COVID-19 While Visiting the U.S.)',
      },
      {
        type: 'paragraph',
        text: 'Jane moved from Florida to Puerto Rico on June 8, 2024. On November 26, 2024, she flew to Florida to visit family for the Thanksgiving Holiday. She planned to return to Puerto Rico on Monday, November 30, 2024. She expected she would meet the 183 Day Rule because she expected she would be in Puerto Rico for 202 days in 2024.',
      },
      {
        type: 'paragraph',
        text: 'Unfortunately, Jane caught COVID-19 while she was visiting her family. On November 28, 2024, Jane was hospitalized due to her illness. She remained in the hospital for 30 days. She was released on December 28, 2024, and she flew back to Puerto Rico on December 29, 2024.',
      },
      {
        type: 'paragraph',
        text: 'An individual is considered to be present in Puerto Rico on any day the individual is outside Puerto Rico to receive qualifying medical treatment. Qualifying medical treatment includes inpatient care in a hospital.',
      },
      {
        type: 'paragraph',
        text: 'Jane was physically present in Puerto Rico for only 172 days during 2024. However, all 30 days Jane was in the hospital due to COVID-19 are considered as days present in Puerto Rico. Since Jane was present in, or considered present in, Puerto Rico for 202 days during 2024, Jane meets the 183 Day Rule, and she meets the presence test for 2024.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Summary',
      },
      {
        type: 'paragraph',
        text: 'As these examples demonstrate, there are multiple ways to meet the presence test. However, as mentioned earlier, it is important to remember that the presence test is only one of three tests. An individual must also meet the tax home test and the closer connection test in order to be considered a bona fide resident of Puerto Rico. In addition, it is equally important to remember that only Puerto Rico source income qualifies for the exclusion from U.S. tax. Spending time working outside of Puerto Rico can result in myriad unintended adverse U.S. tax consequences. For our prior article discussing the U.S. tax issues when working from the U.S., click here. For our prior article discussing the U.S. tax issues when working from a foreign country, click here.',
      },
    ],
  }),
  defineArticle({
    slug: 'after-puerto-rico-expatriation',
    title: 'After Puerto Rico: Is Expatriation Worth Considering?',
    description: 'Tax considerations for Act 60 participants who may consider renouncing U.S. citizenship after leaving Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt: 'For some Act 60 participants, growing old in Puerto Rico is not a realistic part of the long-term plan. Few people relish the thought of returning to the mainland U.S. tax system after enjoying the enviable Act 60 tax benefits. In some instances, a return to the mainland U.S. tax regime is simply unimaginable, and quite a few individuals explore renouncing their U.S. citizenship.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/After-PR-Is-Expatriation-Worth-Considering.pdf',
    relatedSlugs: [
      'final-year-in-puerto-rico',
      'bona-fide-resident-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Expatriation', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'For some Act 60 participants, growing old in Puerto Rico is not a realistic part of the long-term plan. Few people relish the thought of returning to the mainland U.S. tax system after enjoying the enviable Act 60 tax benefits. In some instances, a return to the mainland U.S. tax regime is simply unimaginable, and quite a few individuals explore renouncing their U.S. citizenship.',
      },
      {
        type: 'paragraph',
        text: 'Anticipating that U.S. citizens and long-term green card holders would attempt to minimize their U.S. tax liability by renouncing their U.S. citizenship or abandoning their green card (“expatriating”), Congress established an exit tax regime. Under the exit tax regime, an expatriate, assuming they meet certain financial thresholds, is treated as having sold their worldwide assets for fair market value on the day prior to expatriating. This “deemed sale” or “mark-to-market” regime dissuades many high net-worth taxpayers from expatriating, since most of these taxpayers have much of their wealth tied up in non-liquid assets, and liquidating some of those assets to pay the tax bill is often too onerous and expensive.',
      },
      {
        type: 'paragraph',
        text: 'Although the exit tax regime is often sufficiently oppressive to dissuade most taxpayers from consummating expatriation, there are very unique opportunities for Act 60 participants who have been bona fide residents of Puerto Rico for more than ten years. Many practitioners are not aware of these auspicious opportunities and others consider them almost too good to be true. However, for a select group of taxpayers whose time in Puerto Rico has run its course, expatriation might be worth considering.',
      },
      {
        type: 'paragraph',
        text: 'The example below provides an illustration of how these rules apply. We include a ‘Background’ of a hypothetical taxpayer followed by an ‘Issues’ section describing the types of issues commonly encountered. The first part of the analysis, the ‘Summary Conclusions’ section, includes short form answers to the Issues for the casual reader. The second part, ‘Discussion’ section, provides a more detailed, technical analysis of the Issues, as well as planning opportunities for those who might consider expatriation as a next step.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane are U.S. citizens who are bona fide residents of Puerto Rico. Both Jack and Diane were granted Act 22 tax decrees (now referred to as Act 60) by the government of Puerto Rico. They relocated to Puerto Rico from California and have been living in Puerto Rico for the last 11 years. They are in their 50s, have been married over 30 years, and their kids are grown and live in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane’s parents were both from Ireland. As a result, they both have been able to obtain Irish citizenship. They are now dual Irish citizens and U.S. citizens. They have always wanted to live in Europe and travel the world. It has been something they have talked about for many years.',
      },
      {
        type: 'paragraph',
        text: 'After spending 11 years in Puerto Rico, they have become accustomed to very low tax rates. Leaving Puerto Rico, giving up Puerto Rican residency status, and going back to normal combined federal and state tax rates, which can exceed 50%, is something that does not appeal to them. They are thinking of renouncing their U.S. citizenship.',
      },
      {
        type: 'paragraph',
        text: 'They have discussed at length with their U.S. immigration lawyer the various immigration drawbacks of renouncing their U.S. citizenship. As just one example, their immigration lawyer has advised them that they may be refused entry back into the United States if the reason they renounced their U.S. citizenship was to avoid paying U.S. income taxes. After being fully advised of all the immigration concerns with renouncing their U.S. citizenship, they are still considering renunciation.',
      },
      {
        type: 'paragraph',
        text: 'Their plan is to purchase a home in Switzerland. They have discussed with a Swiss tax advisor the requirements to be taxed in Switzerland under the special “forfait” tax regime.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo and PRCo',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane own 100% of a U.S. C corporation (“USCo”) and 100% of a Puerto Rican entity (“PRCo”). USCo was established 30 years ago and operates a profitable business in the U.S. For each of the last 11 years, USCo has paid a management consulting fee to PRCo of approximately $10 million. PRCo is a Puerto Rican LLC that is classified as a corporation for U.S. tax purposes and holds an Act 20 (now referred to as Act 60) Export Services tax decree. The Act 20 decree affords PRCo a 4% corporate tax rate with dividends received by the shareholders fully exempt from Puerto Rico tax.',
      },
      {
        type: 'paragraph',
        text: 'Prior to renouncing their U.S. citizenship, Jack and Diane anticipate selling the stock of USCo to a long-term employee who has overseen the U.S. operations since inception. The sale will be for $70 million. The employee does not have the cash to buy USCo outright, so he will issue a promissory note to Jack and Diane, which will be payable with interest, over 10 years. Jack and Diane will elect out of the installment method and recognize the entire gain in the year of the sale. Jack and Diane’s tax basis in the shares of USCo is $10 million.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane will continue to do some consulting for USCo after the sale, but it will be limited in scope. Post renunciation, they anticipate earning roughly $2 million a year in consulting fees from USCo.',
      },
      {
        type: 'paragraph',
        text: 'PRCo generally distributes its profits as dividends to Jack and Diane. After distributions, PRCo has little value.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Other Material Assets',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane each own 50% of a U.S. limited liability company (“US LLC”). US LLC is classified as a partnership and owns U.S. real estate with a tax basis of $20 million and a fair market value of $50 million. US LLC has no debt, and Jack and Diane’s tax basis in US LLC is $20 million. The U.S. real estate generates roughly $2 million of rental income for the couple. To simplify the analysis below, it is assumed that US LLC holds no assets that would be unrealized receivables or inventory items as defined in Code §751.',
      },
      {
        type: 'paragraph',
        text: 'All section references are to the Internal Revenue Code of 1986, as amended (the “Code”) and the regulations promulgated thereunder.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane own a home in Puerto Rico with a tax basis of $5 million and a fair market value of $9 million. After moving to Switzerland, they do not plan to ever return to Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane have various brokerage accounts which hold U.S. equities. The U.S. equities are regularly traded on the New York Stock Exchange or the Nasdaq. The fair market value of the brokerage accounts is $60 million, and their tax cost is $40 million.',
      },
      {
        type: 'paragraph',
        text: 'Jack has a 401k that holds assets worth $3 million. Jack has a zero-tax basis in the 401k.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The following is a summary of Jack and Diane’s material assets:',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Description Tax Basis FMV Gain',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo (C corp) $10,000,000 $70,000,000 $60,000,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'US LLC (P’ship) $20,000,000 $50,000,000 $30,000,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Puerto Rican home $5,000,000 $9,000,000 $4,000,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. equities $40,000,000 $60,000,000 $20,000,000',
      },
      {
        type: 'paragraph',
        text: '401k $0,000,000 $3,000,000 $3,000,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Total $75,000,000 $192,000,000 $117,000,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Issues',
      },
      {
        type: 'list',
        items: [
          'If Jack and Diane renounce their U.S. citizenship, will they be subject to the U.S. mark-to-market regime?',
          'Can bona fide residents of Puerto Rico generally exclude Puerto Rican-source income from their U.S. taxable income?',
          'If some of Jack and Diane’s property was owned by them prior to becoming bona fide residents of Puerto Rico, do the special former U.S. resident rules apply?',
          'If Jack and Diane move to Switzerland and renounce their U.S. citizenship at a U.S. embassy in Switzerland, is it likely that they would be considered bona fide residents of Puerto Rico at that time?',
          'If Jack and Diane sell USCo while they are bona fide residents of Puerto Rico, should gain on the sale be Puerto Rican-source income?',
          'Is it possible for Jack and Diane to trigger gain recognition on other assets prior to termination of their residency in Puerto Rico?',
          'Should gains recognized by Jack and Diane on their Puerto Rican home and on the U.S. equities be Puerto Rican-source income while they are bona fide residents of Puerto Rico?',
          'If Jack and Diane were to delay the sale of the U.S. equities until after they moved to Switzerland but before they renounced their U.S. citizenship, would the gains be Puerto Rican-source income?',
          'Should Jack and Diane consider triggering gain on their Puerto Rican home prior to listing it for sale?',
          'If US LLC sells the U.S. real estate, will the gain on the real estate that flows through to Jack and Diane be Puerto Rican-source income?',
          'If Jack and Diane sell their interests in US LLC, should the gain on the sale of US LLC be Puerto Rican-source income?',
          'If Jack provides Form W-8CE to his 401k administrator within 30 days of renouncing his U.S. citizenship, will Jack be treated as having received a full distribution from his 401k on the day before he renounces?',
          'If Jack does not provide Form W-8CE to his 401k administrator within 30 days of renouncing his U.S. citizenship, will Jack be treated as having received a full distribution from his 401k on the day before he renounces?',
          'Can Jack and Diane rely on the Switzerland-U.S. Income Tax Treaty to avoid U.S. tax on the interest income they receive on the promissory note related to the sale of USCo?',
          'Will Jack and Diane be subject to U.S. tax on the consulting fee income they receive from USCo?',
          'If, after renouncing their U.S. citizenship, Jack and Diane decide to make gifts or bequests to their U.S.-citizen children, will their children be subject to a U.S. tax equal to 40% of the value of gifts or bequests?',
          'Should Jack and Diane consider gifting assets to their U.S.-citizen children prior to renouncing their U.S. citizenship?',
          'If Jack or Diane passes away while owning U.S.-situs assets, will those assets be subject to U.S. estate tax?',
          'Will Jack and Diane each be required to include Form 8854 with their U.S. tax return for the year they renounce their U.S. citizenship.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Summary Conclusions',
      },
      {
        type: 'list',
        items: [
          'If Jack and Diane renounce their U.S. citizenship, they will be treated as if they sold all of their worldwide property for fair market value on the day before renunciation.',
          'Bona fide residents of Puerto Rico can generally exclude Puerto Rican-source income from their U.S. taxable income.',
          'The special former U.S. resident rules only apply for a 10-year period. Because Jack and Diane have been bona fide residents of Puerto Rico for more than 10 years, the special former U.S. resident rules do not apply.',
          'If Jack and Diane move to Switzerland and renounce their U.S. citizenship at a U.S. embassy in Switzerland, it is likely that they would no longer be considered bona fide residents of Puerto Rico. Because they would no longer be bona fide residents of Puerto Rico, they would not be able to exclude the mark-to-market gain recognized on the day before renunciation.',
          'As long as the sale takes place after 10 years in Puerto Rico and before Jack and Diane cease to be bona fide residents of Puerto Rico, the gain on the sale of USCo should be Puerto Rican-source income. By electing out of the installment method, the full amount of the gain should be recognized while Jack and Diane are bona fide residents of Puerto Rico.',
          'There are multiple options for Jack and Diane to trigger gain recognition on other assets prior to termination of their residency in Puerto Rico. Some of the options for triggering gain include: (1) selling assets to unrelated parties for fair market value consideration, (2) contributing assets to a U.S. corporation in exchange for nonqualified preferred stock, or (3) contributing assets to a foreign corporation.',
          'As long as the sales takes place after 10 years in Puerto Rico and before Jack and Diane cease to be bona fide residents of Puerto Rico, the gains on their Puerto Rican home and on the U.S. equities should be Puerto Rican-source income.',
          'If Jack and Diane were to delay the sale of the U.S. equities until after they moved to Switzerland but before they renounced their U.S. citizenship, the gains would not be Puerto Rican-source income. After Jack and Diane move to Switzerland, their tax homes will be in Switzerland. Gains on sales of personal property when an individual has a tax home outside of Puerto Rico is not considered Puerto Rican-source income. To assure that Jack and Diane have a closer connection to Puerto Rico when triggering gains, it may make sense for them to not purchase a home in Switzerland or have any significant connections to Switzerland prior to triggering the gains. They might even want to trigger gains in one taxable year and move out of Puerto Rico in the following taxable year.',
          'It may make sense for Jack and Diane to trigger gain on their Puerto Rican home prior to listing it for sale. The act of listing their Puerto Rican home for sale may be a factor in determining whether Jack and Diane have moved their tax home outside of Puerto Rico. If Jack and Diane have moved their tax home outside of Puerto Rico, they would no longer be bona fide residents of Puerto Rico.',
          'If US LLC sells the U.S. real estate, the gain on the real estate that flows through to Jack and Diane will not be Puerto Rican-source income.',
          'If Jack and Diane sell their interests in US LLC, the gain on the sale of US LLC should be Puerto Rican-source income. However, if US LLC had unrealized receivables or inventory items as defined in Code §751, gains attributable to those items may or may not be U.S.-source income. Recent court cases addressing this issue have conflicted.',
          'If Jack provides Form W-8CE to his 401k administrator within 30 days of renouncing his U.S. citizenship, he will not be treated as having received a full distribution from his 401k on the day before he renounces.',
          'If Jack does not provide Form W-8CE to his 401k administrator within 30 days of renouncing his U.S. citizenship, Jack will be treated as having received a full distribution from his 401k on the day before he renounces.',
          'Jack and Diane cannot rely on the Switzerland-U.S. Income Tax Treaty to avoid U.S. tax on the interest income they receive on the promissory note related to the sale of USCo. They will not be able to rely on the treaty because they will not be considered residents of Switzerland for purposes of the treaty. However, it may be possible for Jack and Diane to avoid U.S. tax on the interest income by structuring the promissory note to qualify for the portfolio interest exception.',
          'Jack and Diane will not be subject to U.S. tax on the consulting fee income they receive from USCo. The consulting fee income will be for services performed outside the U.S. Therefore, the consulting fee income will not be U.S.-source income.',
          'If, after renouncing their U.S. citizenship, Jack and Diane decide to make gifts or bequests to their U.S.-citizen children, their children will be subject to a U.S. tax equal to 40% of the value of gifts or bequests.',
          'Jack and Diane should consider gifting assets to their U.S.-citizen children prior to renouncing their U.S. citizenship. To the extent of the gift tax exemption, such gifts would not be subject to gift tax.',
          'If Jack or Diane passes away while owning U.S.-situs assets, those assets will be subject to U.S. estate tax. The estate tax exemption for non-U.S. citizens that are not domiciled in the U.S. is only $60,000.',
          'Jack and Diane will each be required to include Form 8854 with their U.S. tax return for the year they renounce their U.S. citizenship. The penalty for failing to file Form 8854 is $10,000.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Discussion',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Expatriation Mark-to-Market Regime (Issue 1)',
      },
      {
        type: 'paragraph',
        text: 'The U.S. generally imposes a mark-to-market regime on U.S. citizens who renounce their U.S. citizenship. Under this regime, all property of the individual is treated as sold for its fair market value on the day before renunciation. To the extent deemed gains are characterized as ordinary income, the gains are taxed at graduated ordinary income tax rates up to 37%. To the extent the gains are characterized as long-term capital gain, the gains are generally taxed at graduated rates up to 20%. In addition, the gains may be subject to the 3.8% net investment income tax.',
      },
      {
        type: 'paragraph',
        text: 'The amount of the gain is reduced (but not to below zero) by an exclusion amount, which is annually adjusted for inflation. For the calendar year 2024, the exclusion amount is $866,000. A taxpayer may elect to defer payment of tax attributable to property deemed sold.',
      },
      {
        type: 'paragraph',
        text: 'The mark-to-market regime does not apply to deferred compensation items, specified tax deferred accounts, and interests in non-grantor trusts of which the individual was a beneficiary on the day before renunciation.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane will be subject to the special expatriation rules in Code §877A. Consequently, they will be deemed to have sold their worldwide assets for fair market value on the day before their renunciation. In addition, their 401k is a deferred compensation item that will be subject to special rules (discussed below).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Taxation of Bona Fide Residents of Puerto Rico (Issue 2)',
      },
      {
        type: 'paragraph',
        text: 'U.S. citizens who are bona fide residents of Puerto Rico are generally subject to U.S. income tax on their worldwide income. However, bona fide residents of Puerto Rico can exclude Puerto Rican-source gross income from their total gross income. This exclusion applies only to income “derived from sources within Puerto Rico”.',
      },
      {
        type: 'paragraph',
        text: 'If Jack and Diane recognize gains that are Puerto Rican-source gains while they are bona fide residents of Puerto Rico, they can exclude those gains from their U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Former U.S. Resident Sourcing Rule (Issue 3)',
      },
      {
        type: 'paragraph',
        text: 'Special sourcing rules apply to gains from dispositions of certain investment property (for example, stocks, bonds, debt instruments, cryptocurrency, diamonds, gold, etc.) owned prior to',
      },
      {
        type: 'paragraph',
        text: 'becoming a bona fide resident of Puerto Rico. Under these special rules, gains from dispositions of the specified property within 10 years after becoming a bona fide resident of Puerto Rico generally are treated as non-Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane have been bona fide residents of Puerto Rico for more than 10 years. Therefore, the special former U.S. resident sourcing rules should not apply to them.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Termination of Residency in Puerto Rico (Issue 4)',
      },
      {
        type: 'paragraph',
        text: 'An individual must meet the “tax home” requirement to be a bona fide resident of Puerto Rico. An individual’s tax home is considered to be located at the individual’s regular or principal (if more than one regular) place of business. If the individual has no regular or principal place of business because of the nature of the business, or because the individual is not engaged in carrying on any trade or business within the meaning of Code §162(a), then the individual’s tax home is the individual’s regular place of abode in a real and substantial sense.',
      },
      {
        type: 'paragraph',
        text: 'In general, to meet the tax home test the individual must “not have a tax home outside [Puerto Rico] during any part of the taxable year.” [Emphasis added] However, a special “year of move” rule applies to “an individual who * * * ceases to be a bona fide resident of [Puerto Rico] during a taxable year.”',
      },
      {
        type: 'paragraph',
        text: 'A U.S. citizen who has been a bona fide resident of Puerto Rico for at least two years and who ceases to be a bona fide resident of Puerto Rico during the year, is considered a bona fide resident of Puerto Rico for the portion of the year that he or she has a closer connection to Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane will be U.S. citizens until they move to Switzerland and renounce their U.S. citizenship. They were bona fide residents of Puerto Rico for at least the two taxable years',
      },
      {
        type: 'paragraph',
        text: 'immediately preceding their year of move. They will cease to have tax homes in Puerto Rico in their year of move, and they will have a closer connection to Puerto Rico in their year of move before ceasing to have a tax home in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'The exact date that Jack and Diane move their tax home (their principal place(s) of business) to Switzerland and have a closer connection to Switzerland may or may not be easy to determine, depending on the circumstances. However, once they purchase a home in Switzerland and move there, it seems clear that they will at that point have moved their tax home(s) to Switzerland and have a closer connection to Switzerland.',
      },
      {
        type: 'paragraph',
        text: 'Anecdotally, we have heard that it may be months before an appointment is available with a U.S. embassy to renounce U.S citizenship. If Jack and Diane are living in Switzerland for months before they are able to renounce their U.S. citizenship, it seems clear that the day prior to renunciation (the day that gain is recognized under the mark-to-market regime) they will no longer be bona fide residents of Puerto Rico. It should be noted that to renounce U.S. citizenship, a U.S. citizen must appear in person before a U.S. consular or diplomatic officer in a foreign county.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of Gain on Sale of USCo (Issue 5)',
      },
      {
        type: 'paragraph',
        text: 'Gain from the sale of personal property, other than inventory, is generally sourced to the residence of the seller. Typically, a U.S. citizen individual will not be considered a nonresident for purposes of Code §865(g) unless a foreign income tax of at least 10% is actually paid on the gain. However, this 10% foreign income tax requirement does not apply to bona fide residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Gain recognized by Jack and Diane on the sale of USCo will be gain on a sale of personal property. Jack and Diane will be bona fide residents of Puerto Rico at the time of the sale. Jack and Diane will elect out of the installment method. Consequently, Jack and Diane will recognize the full amount of the gain at the time of the sale. As long as the sale takes place after 10 years in Puerto Rico and before Jack and Diane cease to be bona fide residents of Puerto Rico, the gain on the sale of USCo should be Puerto Rican-source income and not subject to U.S. tax.',
      },
      {
        type: 'paragraph',
        text: 'Although the entire gain should escape U.S. tax, a 5% Puerto Rican tax would apply to the portion of gain attributable to appreciation of the assets before moving to Puerto Rico. This 5% Puerto Rican tax applies when the appreciated assets are sold more than 10 years after moving to Puerto Rico but before 2036.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Early Triggering Gain Recognition (Issue 6)',
      },
      {
        type: 'paragraph',
        text: 'Sale: The simplest approach for Jack and Diane to recognize gain on their assets is for them to sell the assets at fair market value in a bona fide sale to unrelated parties. If a sale of an asset to an unrelated party is not feasible, a contribution of the asset to a U.S. corporation or to a foreign corporation may trigger gain.',
      },
      {
        type: 'paragraph',
        text: 'U.S. Corporation: Code §351 generally provides for nonrecognition of gain or loss on transfers of property to a corporation in exchange for stock of that corporation if the transferor (or transferors) is in control of the corporation immediately following the transfer. However, if a taxpayer contributes property to a corporation in exchange for nonqualified preferred stock, the nonqualified preferred stock will be treated as boot and generate gain. Nonqualified preferred stock is debt-like preferred stock that is treated as taxable consideration for purposes of Code §351.',
      },
      {
        type: 'paragraph',
        text: 'Foreign Corporation: Code §367(a) generally requires gains to be recognized on contributions of property to foreign corporations. Therefore, if Jack and Diane were to contribute property to a foreign corporation, gain would generally be recognized on the transfer. However, a transfer of a U.S. corporation or a U.S. partnership to a foreign corporations can cause the foreign corporation to be treated as a U.S. corporation under the anti-inversion rules. A contribution to a foreign corporation that is treated as a U.S. corporation generally would not trigger gain recognition. Therefore, Jack and Diane may not want to attempt to trigger gain on USCo or US LLC by transferring the shares or membership interests in these entities to a foreign corporation.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of Gains on Puerto Rican Home and U.S. Equities (Issues 7 & 8)',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of real estate are sourced to the location of the real estate. Jack and Diane’s Puerto Rican home is located in Puerto Rico. Therefore, gain on sale of the Puerto Rican home should be Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'As described above, gain from the sale of personal property, other than inventory, is generally sourced to the residence of the seller. The U.S. equities are personal property. Consequently, gain recognized on the U.S. equities while Jack and Diane are bona fide residents of Puerto Rico should be Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane are considered residents of Puerto Rico for sourcing purposes only while their tax homes are in Puerto Rico. If Jack and Diane were to delay the sale of the U.S. equities until after they moved to Switzerland but before they renounced their U.S. citizenship, they likely would have moved their tax homes to Switzerland before the sale. Gain on a sale of the U.S. equities with a tax home in Switzerland (or a closer connection to Switzerland) could not be excluded from their U.S. taxable income. Therefore, Jack and Diane should not delay the sale (or other gain recognition) of the U.S. equities until after they move to Switzerland.',
      },
      {
        type: 'paragraph',
        text: 'As discussed above under Issue 6, a 5% Puerto Rican tax will apply to pre-residency appreciation.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Early Triggering of Gain on Puerto Rican Home (Issue 9)',
      },
      {
        type: 'paragraph',
        text: 'It may make sense for Jack and Diane to trigger gain on their Puerto Rican home prior to listing it for sale. The act of listing their Puerto Rican home for sale may be a factor in determining whether Jack and Diane have moved their tax home outside of Puerto Rico or whether they',
      },
      {
        type: 'paragraph',
        text: 'have a closer connection to Switzerland, as compared to Puerto Rico. If Jack and Diane have moved their tax home outside of Puerto Rico or if they have a closer connection to Switzerland, they would no longer be bona fide residents of Puerto Rico. Thus, Jack and Diane should consider triggering gain on their Puerto Rican home prior to listing it for sale.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gain on U.S. Real Estate Sold by US LLC (Issue 10)',
      },
      {
        type: 'paragraph',
        text: 'A partnership is not taxed at the partnership level. Instead, the responsibility for the payment of taxes passes through to the partners, who pay the tax liability in proportion to each partner’s share.',
      },
      {
        type: 'paragraph',
        text: 'Income of the partnership that could affect the tax liability of a partner must be separately stated. The character of any income passed through to a partner is determined as if the income were realized directly from the same source as it was realized by the partnership. Thus, the general rule is that the source of the income is determined at the partnership level.',
      },
      {
        type: 'paragraph',
        text: 'A special sourcing rule applies to sales of personal property by a partnership, but that special rule would not apply to US LLC selling its U.S. real estate. As described above, gains on sales of real estate are sourced to the location of the real estate. Because the real estate owned by US LLC is located in the United States, if US LLC were to sell its U.S. real estate, the gain on the sale would be U.S.-source income. Because the gain would not be Puerto Rican-source income, it could not be excluded from Jack and Diane’s U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gain on Sale of US LLC (Issue 11)',
      },
      {
        type: 'paragraph',
        text: 'Gain on the sale of a partnership interest is gain on the sale of personal property. As described above, gain from the sale of personal property, other than inventory, is generally sourced to the residence of the seller. If Jack and Diane sell their interest in US LLC while they are bona fide residents of Puerto Rico, the general rule is that the gain will be Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'As indicated, US LLC owns U.S. real estate. If a nonresident alien or a foreign corporation sells an interest in a partnership where the partnership owns U.S. real estate, a special rule applies to look through the partnership and to treat a proportionate amount of the sale of the partnership interest as a sale of the U.S. real estate. Jack and Diane are not nonresident aliens or foreign corporations. Therefore, this special rule does not apply to them',
      },
      {
        type: 'paragraph',
        text: 'Another special rule applies where a nonresident alien or a foreign corporation sells an interest in a partnership which is engaged in a U.S. trade or business. Again, because Jack and Diane are not nonresident aliens or foreign corporations, this special rule also does not apply to them.',
      },
      {
        type: 'paragraph',
        text: 'A bona fide resident of Puerto Rico is generally treated as a nonresident for purposes of sourcing under Code §865. Code §865(e)(2)(A) contains a special rule for gains attributable to a U.S. office or fixed place of business of a nonresident. Although a U.S. office or fixed place of business of US LLC would likely be attributed to Jack and Diane for this purpose, gain recognized by Jack and Diane on a sale of the partnership interest would not be the type of income regularly earned by the U.S. office or fixed place of business. Therefore, gain recognized by Jack and Diane should not be attributable to a U.S. office or fixed place of business and should not be U.S.-source income under the special rule in Code §865(e).',
      },
      {
        type: 'paragraph',
        text: 'In general, the sale of a partnership interest is treated as a sale of a capital asset and results in capital gain or loss. There is an exception that requires taxpayers to report the sale of a partnership interest as resulting in ordinary income or loss if the partnership holds unrealized receivables or inventory items. In Rawat v. Commr., the Tax Court held that the partnership “aggregate” rule in Code §751 (which recharacterizes gain as ordinary income) requires the selling partner to be treated as selling an interest in the partnership assets for sourcing purposes.',
      },
      {
        type: 'paragraph',
        text: 'However, the D.C Circuit recently reversed the Tax Court, holding that Code §751 merely changes the character of the income from capital gain to ordinary income and does not affect the source of that income. Under Golsen v. Commr., the Tax Court follows the law as stated by the Court of Appeals in the circuit to which the case is appealable. Taxpayers resident in Puerto Rico appeal Tax Court cases to the First Circuit. It remains to be seen whether the Tax Court will reverse its own precedent and follow the holding in the D.C. Circuit or whether the Tax Court will follow its precedent for cases appealable to other circuits.',
      },
      {
        type: 'paragraph',
        text: 'To simplify our analysis, we have assumed that US LLC has no unrealized receivables or inventory items. Under this assumption, Jack and Diane should not be treated as having sold any of the assets of US LLC for sourcing purposes. However, in a real-world situation, it would be necessary to determine what portion, if any, of the assets of US LLC were unrealized receivables or inventory items.',
      },
      {
        type: 'paragraph',
        text: 'Code §937(b) and Treas. Reg. §1.937-2 provide special rules to determine whether income is from sources within a U.S. possession (such as Puerto Rico). Treas. Reg. §1.937-2(c)(1) provides in part:',
      },
      {
        type: 'paragraph',
        text: '* * * [I]ncome from sources within [Puerto Rico] will not include any item of income determined under the rules of sections 861 through 865 and the regulations under those provisions to be—',
      },
      {
        type: 'paragraph',
        text: '(i) From sources within the United States; or',
      },
      {
        type: 'paragraph',
        text: '(ii) Effectively connected with the conduct of a trade or business within the United States.',
      },
      {
        type: 'paragraph',
        text: 'As described above, the general rule is that gain on the sale of US LLC is likely Puerto Rican-source income and no exceptions to the general rule apply. Thus, Treas. Reg. §1.937-2(c)(1)(i) should not be of concern.',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.937-2(c)(1)(ii) applies to income effectively connected with a U.S. trade or business. In general, only U.S. source income is effectively connected with a U.S. trade or business. As described above, gain recognized by Jack and Diane on a sale of their partnership interests in US LLC should not be U.S. source income. Consequently, such gain should not be effectively connected with a U.S. trade or business.',
      },
      {
        type: 'paragraph',
        text: 'As discussed above under Issue 6, a 5% Puerto Rican tax will apply to pre-residency appreciation.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Treatment of Jack’s 401k (Issues 12 & 13)',
      },
      {
        type: 'paragraph',
        text: 'Jack’s 401k is not subject to the mark-to-market regime because it is a deferred compensation item. Eligible deferred compensation items are subject to a flat 30% tax at the time of distribution. Other deferred compensation items (“ineligible deferred compensation items”) are treated as being distributed on the day before renouncing.',
      },
      {
        type: 'paragraph',
        text: 'An eligible deferred compensation item generally means a deferred compensation item where the individual provides a Form W-8CE, Notice of Expatriation and Waiver of Treaty Benefits, to the 401k administrator within 30 days of renunciation. The individual must also make an irrevocable election on Form 8854, Initial and Annual Expatriation Information Statement, to waive any right to claim any withholding reduction under any treaty with respect to the item. The individual must also annually file Form 8854 to certify that no distributions have been received from his or her eligible deferred compensation item(s) or to report the distributions received.',
      },
      {
        type: 'paragraph',
        text: 'If Jack wants to avoid being taxed as if he received a distribution of his entire 401k on the day before he renounces his U.S. citizenship, he should provide Form W-8CE to his 401k administrator',
      },
      {
        type: 'paragraph',
        text: 'within 30 days of his renunciation, and he should file Form 8854 electing to waive any treaty claim.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Tax on Interest Income (Issue 14)',
      },
      {
        type: 'paragraph',
        text: 'After Jack and Diane renounce their U.S. citizenship, they will be nonresident aliens (“NRAs”). In general, foreign individuals who derive fixed and determinable annual and periodical income from U.S. sources – items such as dividends, royalties, interest, and compensation – are subject to a 30% tax on the gross amount of such income.',
      },
      {
        type: 'paragraph',
        text: 'The tax is imposed on the gross amount paid and no reduction in the tax base is allowed for any deductible expenses. The tax is generally collected by the person in the U.S. that makes the payment.',
      },
      {
        type: 'paragraph',
        text: 'Tax treaties often reduce the 30% rate of tax, and the U.S. has an income tax treaty with Switzerland (the “Treaty”). However, Jack and Diane will not qualify for treaty relief because they will be taxed in Switzerland under the special “forfait” tax regime. To qualify for benefits under the Treaty, Jack and Diane must be considered residents of Switzerland. Jack and Diane will not be considered residents of Switzerland because they will elect to not be subject to the generally imposed income taxes in Switzerland.',
      },
      {
        type: 'paragraph',
        text: 'Although Jack and Diane may not be able to rely on the Treaty to avoid U.S. tax on the interest income, it may be possible to structure the promissory note to qualify for the portfolio interest exception. To meet this exception, the promissory note would need to be in registered form and Jack and Diane would need to provide W-8BEN, Certificate of Status of Beneficial Owner for United States Tax Withholding and Reporting (Entities), to the borrower.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Tax on Consulting Income (Issue 15)',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane will perform consulting services for USCo after they sell USCo and move to Switzerland. They will perform all of the services while they are located in Switzerland. Jack and Diane will be NRAs. As described above foreign individuals who derive fixed and determinable annual and periodical income from U.S. sources are subject to a 30% tax on the gross amount of such income.',
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced to where the services are performed, without regard to the location of the payor, the residence of the taxpayer, the place of contracting, or the place of payment. Because Jack and Diane will perform all of the consulting services from Switzerland, all of the income will be foreign-source income. None of the income will be U.S. source income. Because, the U.S. 30% withholding tax only applies to U.S. source income, the withholding tax should not apply to the consulting income received by Jack and Diane.',
      },
      {
        type: 'paragraph',
        text: 'After renouncing their U.S. citizenship, Jack and Diane should each provide Form W-8BEN, Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding and Reporting (Individuals), to USCo. By signing Form W-8BEN, Jack and Diane will be certifying that they are not U.S. persons and that the income is not effectively connected with a U.S. trade or business.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Post-Renunciation Gifts & Bequests (Issue 16)',
      },
      {
        type: 'paragraph',
        text: 'In 2008, Congress enacted Code §2801, which imposes a tax on the fair market value of gifts and bequests received by a U.S. citizen or resident from a covered expatriate. The taxable amount is reduced by the annual gift tax exclusion (currently $18,000). The tax rate is the highest rate specified in Code §2001(c) (currently 40%).',
      },
      {
        type: 'paragraph',
        text: 'The U.S. citizen or resident receiving the gift or bequest is liable for payment of the tax. The amount of the tax under Code §2801 can be reduced by foreign gift or estate taxes imposed.',
      },
      {
        type: 'paragraph',
        text: 'Notice 2009-85 provides that satisfaction of the reporting and tax obligations under Code §2801 is deferred, pending the issuance of separate guidance by the IRS. In 2015, the IRS issued proposed regulations under Code §2801. However, those regulations have not yet been finalized.',
      },
      {
        type: 'paragraph',
        text: 'If Jack and Diane make taxable gifts or bequests to their U.S.-citizen children after they have renounced their U.S. citizenship those gifts or bequests will be subject to the 40% tax. Even though the obligation to report and pay the tax has been deferred, it has not been waived. The tax imposed under Code §2801 will be reported on Form 708 (which does not yet exist). The preamble to the 2015 proposed regulations states:',
      },
      {
        type: 'paragraph',
        text: 'The IRS intends to issue Form 708 * * *. The IRS will provide the due date for filing * * * and for payment of the * * * tax liability in the final regulations. * * * U.S. recipients will be given a reasonable period of time after the date the final regulations are published * * * to file the Form 708 and to pay the section 2801 tax on covered gifts and covered bequests received on or after June 17, 2008, and before the date of publication of the final regulations in the Federal Register. Interest will not accrue on the section 2801 tax liability for any taxable years until the due date for payment, as specified in the final regulations, has passed.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pre-Renunciation Gifts & Bequests (Issue 17)',
      },
      {
        type: 'paragraph',
        text: 'The U.S. imposes an estate tax on the taxable estate of U.S. citizens. The estate tax is imposed on the estate of the decedent and generally is based on the fair market value of the property passing at death. The taxable estate generally equals the worldwide gross estate less certain allowable deductions, including a marital deduction for certain bequests to the surviving spouse of the decedent and a deduction for certain bequests to charities.',
      },
      {
        type: 'paragraph',
        text: 'U.S. gift and estate taxes are unified such that a single graduated rate schedule and exemption apply to an individual’s cumulative taxable gifts and bequests. A unified credit of $5,389,800 (for 2024) is available to U.S. citizens with respect to taxable transfers by gift or at death. This credit effectively exempts a total of $13.61 million (for 2024) in cumulative taxable transfers from the gift tax or the estate tax.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane are currently U.S. citizens. If they were to now gift assets to their U.S.-citizen children, they could utilize their gift/estate tax exemptions. Pre-renunciation gifts below the exemption amount would allow their children to avoid the Code §2801 tax as well as for Jack and Diane to avoid U.S. gift or estate tax.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Estate & Gift Tax (Issue 18)',
      },
      {
        type: 'paragraph',
        text: 'After Jack and Diane renounce their U.S. citizenship, they will only be subject to U.S. gift and estate tax on U.S.-situs property. However, their estate tax exemption will be reduced to $60,000.',
      },
      {
        type: 'paragraph',
        text: 'A discussion of the U.S. estate and gift tax rules for non-U.S. citizens is beyond the scope of this article. It is important to note, however, that shares of stock of U.S. corporations are deemed to be U.S.-situated assets. Thus, if Jack or Diane passes away owning U.S. equities, those equities would generally be subject to U.S. estate tax.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 8854 (Issue 19)',
      },
      {
        type: 'paragraph',
        text: 'Individuals subject to the mark-to-market regime under Code §877A must file Form 8854, Initial and Annual Expatriation Information Statement. The penalty for failing to file Form 8854 is $10,000.',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane should each file Form 8854 for the year they renounce their U.S. citizenship.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Jack and Diane have many things to think about. If Jack and Diane were not 10-year residents of Puerto Rico and expatriated, they would owe U.S. exit tax on roughly $114,000,000 of deemed gain under the mark-to-market regime. This would result in a federal tax bill in the range of $25-$40 million ($114,000,000 * 20%-40.8%). However, because they are in the unique position of being 10+ year residents of Puerto Rico with Act 60 benefits, they have some truly unique tax planning opportunities available to them to almost fully eliminate their federal tax bill, in the event they decide to expatriate.',
      },
      {
        type: 'paragraph',
        text: 'The focus of this discussion has been on the U.S. tax rules related to Jack and Diane’s potential renunciation of their U.S. citizenship. However, before deciding to renounce, Jack and Diane should have extensive discussions with an immigration attorney.',
      },
    ],
  }),
  defineArticle({
    slug: 'pre-move-transfer-property-partnership',
    title: 'Pre-Move Transfer Of Property To A Partnership',
    description: 'Tax planning considerations when transferring appreciated property to a partnership before a move to Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt: 'Amy is a U.S. citizen who lives in the United States. Amy owns shares of marketable stock (the “SHARES”) that have appreciated in value. The SHARES have a value of $22,000,000, and Amy’s basis in the SHARES is $2,000,000. If Amy were to sell the shares, she would recognize a gain of $20,000,000.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Pre-move-transfer-of-property-to-a-partnership-FINAL.pdf',
    relatedSlugs: [
      'puerto-rico-tax-structure',
      'corporate-inversions'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Entity Structuring'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Amy is a U.S. citizen who lives in the United States. Amy owns shares of marketable stock (the “SHARES”) that have appreciated in value. The SHARES have a value of $22,000,000, and Amy’s basis in the SHARES is $2,000,000. If Amy were to sell the shares, she would recognize a gain of $20,000,000.',
      },
      {
        type: 'paragraph',
        text: 'Amy would like to sell the SHARES, but she doesn’t want to pay U.S. tax on the gain. Amy recently came across the Puerto Rico Act 60 program which allows qualifying individuals to apply for a tax decree that provides for a 0% tax rate on Puerto Rico source capital gains, dividends and interest income.',
      },
      {
        type: 'paragraph',
        text: 'Amy is considering moving to Puerto Rico and becoming a bona fide resident of Puerto Rico. Amy understands that certain Puerto Rican source income can be excluded from U.S. taxable income. However, she also understands that if she sells the SHARES soon after she becomes a bona fide resident of Puerto Rico, most or all of the gain will not be considered Puerto Rican source income, and therefore cannot be excluded from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Amy has heard that gains on sales by partnerships flow through to their partners and are sourced at the partner level. Prior to her move the Puerto Rico, Amy wants to create a new partnership (the “PARTNERSHIP”) between her and her wholly owned corporation. She will contribute the SHARES into the PARTNERSHIP for a 99% interest in the PARTNERSHIP. Amy will then become a bona fide resident of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'In her second year after becoming a bona fide resident of Puerto Rico, Amy will cause the PARTNERSHIP to sell the SHARES. The gain recognized by the PARTNERSHIP on the sale of the SHARES will flow through to Amy and be taxed to her. However, she is hopeful that that gain will be sourced to Puerto Rico, and that the gain can be entirely excluded from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Can Amy Exclude the Gain?',
      },
      {
        type: 'paragraph',
        text: 'No. Amy cannot exclude any of the gain.',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of personal property recognized by partnerships are generally sourced at the partner level. Code §865(i)(5). Gains from sales of personal property are generally sourced on the basis of the residence of the seller. Code §865(a). Amy will be a resident of Puerto Rico. So why can’t Amy claim that the gain on the sale of the SHARES by the PARTNERSHIP are Puerto Rican-source income?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Special Anti-Abuse Sourcing Rules',
      },
      {
        type: 'paragraph',
        text: 'Special rules apply to gains from dispositions of certain investment property (for example, stocks, bonds, debt instruments, diamonds, gold, cryptocurrencies, etc.) owned prior to becoming a bona fide resident of Puerto Rico. Treas. Reg. §1.937-2(f)(1). Under these special rules, gains from dispositions of the property within 10 years after becoming a bona fide resident of Puerto Rico generally are treated as non-Puerto Rican-source income. Id.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Treas. Reg. §1.937-2(f)(1)(i) provides in part:',
      },
      {
        type: 'paragraph',
        text: 'Except to the extent an election is made under paragraph (f)(1)(vi) of this section, income from sources within the relevant possession will not include gains from the disposition of property described in paragraph (f)(1)(ii) of this section by an individual described in paragraph (f)(1)(iii) of this section. * * *',
      },
      {
        type: 'paragraph',
        text: 'The election under (f)(1)(vi) allows for a portion of the gain to be Puerto Rican-source income. Amy wants to argue that the full amount of the gain is Puerto Rican-source income. Consequently, Amy will not be making an election under (f)(1)(vi).',
      },
      {
        type: 'paragraph',
        text: 'Are the SHARES Property Described In (f)(1)(ii)?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Yes, the SHARES are property described in (f)(1)(ii). Treas. Reg. §1.937-2(f)(1)(ii) provides:',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Property is described in this paragraph (f)(1)(ii) when the following conditions are satisfied –',
      },
      {
        type: 'paragraph',
        text: '(A) The property is of a kind described in section 731(c)(3)(C)(i) or 954(c)(1)(B); and',
      },
      {
        type: 'paragraph',
        text: '(B) The property was owned by the individual before such individual became a bona fide resident of the relevant possession.',
      },
      {
        type: 'paragraph',
        text: 'Shares of stock of a corporation are property described in Code §954(c)(1)(B) (“property * * * which gives rise to [dividend] income * * *.”). Thus, the SHARES are property of a kind described in Code §954(c)(1)(B). In addition, the SHARES were owned by Amy before she became a bona fide resident of Puerto Rico. Consequently, the SHARES are property described in (f)(1)(ii).',
      },
      {
        type: 'paragraph',
        text: 'Will Amy Be An Individual Described In (f)(1)(iii)?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Yes, Amy will be an individual described in (f)(1)(iii). Treas. Reg. §1.937-2(f)(1)(iii) provides:',
      },
      {
        type: 'paragraph',
        text: 'An individual is described in this paragraph (f)(1)(iii) when the following conditions are satisfied –',
      },
      {
        type: 'paragraph',
        text: '(A) For the taxable year for which the source of the gain must be determined, the individual is a bona fide resident of the relevant possession; and',
      },
      {
        type: 'paragraph',
        text: '(B) For any of the 10 years preceding such year, the individual was a citizen or resident of the United States (other than a bona fide resident of the relevant possession).',
      },
      {
        type: 'paragraph',
        text: 'In her second year after becoming a bona fide resident of Puerto Rico, Amy will cause the PARTNERSHIP to sell the SHARES. During this year, Amy will be a bona fide resident of Puerto Rico. In addition, for 8 of the 10 years preceding this year, Amy will have been a citizen or resident of the United States (other than a bona fide resident of Puerto Rico). Consequently, in the year that the SHARES are sold, Amy will be an individual described in (f)(1)(iii).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Amy is determining the source of the gain on the disposition of the SHARES. It was the partnership that sold the SHARES. However, under the partnership sourcing rules, the gain on the sale of the SHARES is determined at Amy’s level, and not at the PARTNERSHIP level. Amy used to own the SHARES. Therefore, the SHARES are property described in (f)(1)(ii). Amy will be an individual described in (f)(1)(iii). Consequently, the gain from the disposition of the SHARES will not be Puerto Rican-source income and cannot be excluded from Amy’s U.S. taxable income.',
      },
    ],
  }),
  defineArticle({
    slug: 'rule-for-year-of-move-puerto-rico',
    title: 'Three Year Residency Requirement For Year of Move To/From Puerto Rico',
    description: 'The three-year residency requirement applicable in the year of moving to or from Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt: 'To qualify as a bona fide resident of Puerto Rico, an individual generally must meet a presence test, a tax home test, and a closer connection test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Three-Year-Residency-Rule-For-Year-of-Move-PR.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Bona Fide Resident General Rules',
      },
      {
        type: 'paragraph',
        text: 'To qualify as a bona fide resident of Puerto Rico, an individual generally must meet a presence test, a tax home test, and a closer connection test.',
      },
      {
        type: 'paragraph',
        text: 'The presence test generally requires that the individual be present in Puerto Rico for at least 183 days during the year. The tax home test generally requires that the individual not have a tax home outside Puerto Rico during any part of the taxable year. The closer connection test generally requires that the individual not have a closer connection to the United States or a foreign country than to Puerto Rico during any part of the taxable year.',
      },
      {
        type: 'paragraph',
        text: 'In the year an individual moves to Puerto Rico, the individual cannot be treated as a bona fide resident of Puerto Rico under these general rules. This is because for part of the year the individual did not have a tax home in Puerto Rico and for part of the year the individual did not have a closer connection to Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Thus, under these general rules, even if an individual who moved to Puerto Rico in January 2021 and spent more than 330 days in Puerto Rico in 2021 would not be treated as a bona fide resident of Puerto Rico for 2021.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Special Rule for Year of Move To Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.937-1(f)(1) provides a special rule for the year an individual moves to Puerto Rico. This special rule waives the requirement that the individual meet the tax home test and the closer connection test for the entire year. However, three requirements must be met to qualify for this special rule.',
      },
      {
        type: 'paragraph',
        text: 'First, the individual must not have been a bona fide resident of Puerto Rico for the 3 taxable years preceding the year of the move to Puerto Rico. Second, the individual must meet the tax home requirement and the closer connection requirement for the last 183 days of the taxable',
      },
      {
        type: 'paragraph',
        text: 'year of the change of residence. And third, the individual must be a bona fide resident of Puerto Rico “[f]or each of the 3 taxable years immediately following” the year of the move to Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example:',
      },
      {
        type: 'paragraph',
        text: 'Rich is a US citizen. Rich moved to Puerto Rico in May of 2021. Rich spent more than 183 days in Puerto Rico in 2021. Rich was not a bona fide resident of Puerto Rico for any of the 3 taxable years immediately preceding 2021. Rich met the tax home requirement and the closer connection requirement for the last 183 days of 2021.',
      },
      {
        type: 'paragraph',
        text: 'As long as Rich is a bona fide resident of Puerto Rico for each of the 3 taxable years immediately following 2021, then Rich can be treated as a bona fide resident of Puerto Rico for 2021.',
      },
      {
        type: 'paragraph',
        text: 'If Rich is a bona fide resident of Puerto Rico for 2022-2024 and the ceases to be a bona fide resident of Puerto Rico in 2025, then he should be treated as a bona fide resident of Puerto Rico for 2021.',
      },
      {
        type: 'paragraph',
        text: 'However, if Rich were to return to the U.S. in 2024 (instead of 2025), a question arises as to whether he would be treated as a bona fide resident of Puerto Rico for each of the 3 taxable years immediately following 2021.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Special Rule for Year of Move From Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Not only are there special rules for the year of the move to Puerto Rico, but there are also special rules for the year of the move from Puerto Rico. Generally, an individual is a bona fide resident of Puerto Rico for part of the year of the move, if certain requirements are met.',
      },
      {
        type: 'paragraph',
        text: 'If Rich moves back to the U.S. in 2024, he may be a bona fide resident of Puerto Rico for part of 2024.',
      },
      {
        type: 'paragraph',
        text: 'If Rich is a bona fide resident of Puerto Rico for part of 2024, has he been a bona fide resident of Puerto Rico “[f]or each of the 3 taxable years immediately following” 2021?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'One way to restate the question more narrowly would be:',
      },
      {
        type: 'paragraph',
        text: 'Was Rich a bona fide resident of Puerto Rico for the taxable year 2024?',
      },
      {
        type: 'paragraph',
        text: 'A reference to “the” taxable year would seem to imply the “full” taxable year. Under this reading, Rich would need to remain a bona fide resident of Puerto Rico until 2025 in order to be treated as a bona fide resident of Puerto Rico for 2021.',
      },
      {
        type: 'paragraph',
        text: 'There may be an argument that Rich would meet the 3-year requirement even if he ceases to be a bona fide resident of Puerto Rico in 2024. If Rich is a bona fide resident of Puerto Rico for [part of] the 2024 taxable year, then it is arguable that he is a bona fide resident of Puerto Rico for “the” 2024 taxable year. Treas. Reg. §1.937-1(f)(1)(iii) does not specify the “full” taxable year. Instead, the regulation merely refers to “the 3 taxable years”. The failure of the regulation to specify full taxable years may leave an opening for Rich to argue that he only needs to be a bona fide resident of Puerto Rico for part of 2024.',
      },
      {
        type: 'paragraph',
        text: 'However, because the law in this area is not clear, we would highly recommend that Rich remain a bona fide resident of Puerto Rico throughout the entire 2024 year, and not terminate his status as a bona fide resident of Puerto Rico until sometime in 2025.',
      },
    ],
  }),
  defineArticle({
    slug: 'living-trusts-bona-fide-residents-puerto-rico',
    title: 'Living Trusts for Bona Fide Residents of Puerto Rico – Is Your Living Trust a Foreign Trust for U.S. Tax Purposes?',
    description: 'Whether a U.S. living trust may be treated as a foreign trust for U.S. tax purposes for bona fide residents of Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt: 'Individuals who move to Puerto Rico to avail themselves of Act 60 benefits often hold their assets through a living trust. Holding assets through a U.S. living trust may raise complex U.S. tax issues for bona fide residents of Puerto Rico.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Living-Trust-PR-Act-60-Article.pdf',
    relatedSlugs: [
      'fica-taxes-bona-resident-puerto-rico',
      'requirements-puerto-rico-residents'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Trusts', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Individuals who move to Puerto Rico to avail themselves of Act 60 benefits often hold their assets through a living trust. Holding assets through a U.S. living trust may raise complex U.S. tax issues for bona fide residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'This article discusses whether the IRS will treat a U.S. living trust of a bona fide resident of Puerto Rico as a “foreign trust” under U.S. tax principles. Foreign trusts are subject to multiple layers of U.S. tax filing requirements with hefty penalties for failing to comply with those requirements.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Beth is a U.S. citizen who lives in California. Years ago, Beth created a trust in California (the “Living Trust”). She transferred $20 million of her assets into the Living Trust. The primary purpose of creating the Living Trust was to avoid the California probate process. However, she also enjoys the other benefits of the Living Trust which include privacy, asset protection, and estate tax planning.',
      },
      {
        type: 'paragraph',
        text: 'Beth is both the settlor and the sole trustee of the Living Trust. The trust document provides that Beth reserves the right to revoke or amend the Living Trust at any time during her lifetime. Thus, the Living Trust is a “revocable” trust. The Living Trust does not have an automatic migration provision.',
      },
      {
        type: 'paragraph',
        text: 'Years after forming the Living Trust, Beth moves to Puerto Rico and becomes a bona fide resident of Puerto Rico. She now administers the Living Trust from her home in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Living Trust Is a Grantor Trust',
      },
      {
        type: 'paragraph',
        text: 'Code §671 provides rules for trusts that are often referred to as “grantor trusts”. A grantor of a trust is treated as the owner of all or a portion of the income of a trust. A grantor who is treated as the owner of the entire trust under Code §671 is treated as the owner of all of the income of the trust, and for certain purposes is treated as the owner of the assets of the trust.',
      },
      {
        type: 'paragraph',
        text: 'A grantor is treated as the owner of a trust if she has the power to revoke the trust. Here, Beth is the sole grantor of the Living Trust, and she has the power to revoke the Living Trust. Therefore, the Living Trust is a grantor trust with respect to Beth, and the income earned by the Living Trust is taxable directly to Beth.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Tax Filings for U.S. Grantor Trusts',
      },
      {
        type: 'paragraph',
        text: 'Income of a grantor trust is generally not reported on Form 1041. Instead, the income is generally shown on a separate statement attached to Form 1041. In this case, the grantor trust only files a blank return with a statement that shows the income of the trust that is attributable to the grantor.',
      },
      {
        type: 'paragraph',
        text: 'As an alternative, the trustee does not need to file any type of return if the entirety of the trust is owned by one grantor, provided that the trustee furnishes certain information to payors, and furnishes to the grantor a statement that:',
      },
      {
        type: 'paragraph',
        text: '(1) shows all items of income, deduction, and credit of the trust for the taxable year;',
      },
      {
        type: 'paragraph',
        text: '(2) identifies the payor of each item of income;',
      },
      {
        type: 'paragraph',
        text: '(3) provides information necessary to take the items into account in computing the grantor’s taxable income; and',
      },
      {
        type: 'paragraph',
        text: '(4) informs the grantor that the items of income, deduction, and credit must be included in computing the taxable income and credits of the grantor on the grantor’s income tax return.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Tax Filings for FOREIGN Grantor Trusts',
      },
      {
        type: 'list',
        items: [
          'Trust Owner',
        ],
      },
      {
        type: 'paragraph',
        text: 'Each U.S. person who is treated as the owner of any portion of a foreign trust under the grantor trust rules of Code §§671 through 679 is responsible for ensuring that the trust annually “makes a return * * * which sets forth a full and complete accounting of all trust activities and operations for the year, the name of the U.S. agent for the trust, and such other information as the Secretary may prescribe.” This prescribed information is provided by filing Form 3520-A.',
      },
      {
        type: 'list',
        items: [
          'Trust Beneficiary',
        ],
      },
      {
        type: 'paragraph',
        text: 'In addition, any U.S. person who is a beneficiary of a foreign trust and receives a distribution from that foreign trust must file an information return that includes the name of the trust, the aggregate amount of the distribution received from the trust during the taxable year, and such other information as the Secretary may prescribe. This reporting requirement is satisfied when the U.S. beneficiary files Form 3520.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Trusts As Domestic or Foreign',
      },
      {
        type: 'paragraph',
        text: 'A foreign trust is “any trust other than a trust [that is a] United States person”. Stated another way, a foreign trust is any trust that is not a domestic trust.',
      },
      {
        type: 'paragraph',
        text: 'The statute and regulations provide a two-factor test to determine whether a trust is domestic or foreign. A trust is domestic if:',
      },
      {
        type: 'paragraph',
        text: '(1) “[a] court within the United States is able to exercise primary supervision over the administration of the trust” (the “Court Test”) and',
      },
      {
        type: 'paragraph',
        text: '(2) “[o]ne or more United States persons have the authority to control all substantial decisions of the trust” (the “Control Test”).',
      },
      {
        type: 'paragraph',
        text: 'If the trust fails to satisfy either the Court Test or the Control Test, the trust will be deemed a foreign trust for federal tax purposes.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Court Test',
      },
      {
        type: 'paragraph',
        text: 'There are two ways to meet the Court Test. The first is a Safe Harbor. The second is the General Rule.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Safe Harbor',
      },
      {
        type: 'paragraph',
        text: 'Under the Safe harbor, a trust satisfies the Court Test if the governing document does not direct that the trust be administered outside of the U.S., the trust in fact is administered exclusively in the U.S., and the trust is not subject to an automatic migration provision that would move it outside the U.S. if a U.S. court were to attempt to assert jurisdiction.',
      },
      {
        type: 'paragraph',
        text: '“Administration” of a trust means the carrying out of the duties imposed by the terms of the trust instrument and applicable law, including maintaining the books and records of the trust, filing tax returns, managing and investing the assets of the trust, defending the trust from suits by creditors, and determining the amount and timing of distributions.',
      },
      {
        type: 'paragraph',
        text: 'For purposes of the Court Test, the U.S. includes only the 50 States and the District of Columbia. Accordingly, a court within Puerto Rico is not a court within the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Beth administers the Living Trust from her home in Puerto Rico. This means that the Living Trust is not administered exclusively in the U.S. Thus, the Living Trust does not meet the Court Test Safe Harbor.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Court Test – General Rule',
      },
      {
        type: 'paragraph',
        text: 'If the Court Test’s Safe Harbor does not apply, the next step is to determine whether the General Rule is met. As described above, the General Rule is met if a court within the U.S. is able to exercise primary supervision over the administration of the trust. The term “is able to exercise” means that a court has or would have the authority under applicable law to render orders or judgments resolving issues concerning administration of the trust. The term “primary supervision” means that a court has or would have the authority to determine substantially all issues regarding the administration of the entire trust. A court may have primary supervision notwithstanding the fact that another court has jurisdiction over a trustee, a beneficiary, or trust property.',
      },
      {
        type: 'paragraph',
        text: 'The regulations also provide that if both a U.S. court and a foreign court are able to exercise primary supervision over the administration of the trust, the trust meets the Court Test.',
      },
      {
        type: 'paragraph',
        text: 'If a trust is administered from Puerto Rico, the regulations do not provide clear guidance as to whether a U.S. court would be able to exercise primary supervision over the administration of the trust, or whether a Puerto Rican court would be able to exercise primary supervision over the administration of the trust. Some of the factors that a court might consider in this determination include:',
      },
      {
        type: 'list',
        items: [
          'Where was the trust formed?',
          'Where does the trustee reside and make decisions related to the trust?',
          'Where is the trust’s real or personal property located?',
          'Where are the trust’s beneficiaries located?',
          'Do the trust organizing documents indicate which country’s laws apply to the trust?',
          'Do the trust’s organizing documents indicate where disputes should be resolved?',
        ],
      },
      {
        type: 'paragraph',
        text: 'The regulations provide that, in the case of a trust other than a testamentary trust, if the fiduciaries and/or beneficiaries take steps with a court within the U.S. that cause the administration of the trust to be subject to the primary supervision of the court, the trust meets the Court Test. Thus, if Beth takes steps with a court within the U.S. that cause the administration of the Living Trust to be subject to the primary supervision of a U.S. court, then the Living Trust should meet the Court Test. However, the regulations do not identify which steps Beth needs to take to cause the Living Trust to be subject to the primary supervision of a U.S. court.',
      },
      {
        type: 'paragraph',
        text: 'In the absence of any guidance regarding the factors a U.S. court or a Puerto Rican court would use to determine whether the court can exercise primary supervision over the administration of the trust, Beth should obtain legal advice from her U.S. tax counsel to determine whether the Living Trust would meet the Court Test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Control Test',
      },
      {
        type: 'paragraph',
        text: 'As described above, the Control Test is met if one or more U.S. persons have the authority to control all substantial decisions of the trust. Beth is a U.S. citizen; therefore, Beth is a U.S. person. Beth has the authority to control all substantial decisions of the Living Trust. Consequently, the Living Trust should meet the Control Test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Status of the Living Trust as a Foreign Trust',
      },
      {
        type: 'paragraph',
        text: 'Because it meets the Control Test, the status of the Living Trust as a foreign trust will ultimately depend on whether it meets the Court Test. Beth will need her U.S. tax counsel to consider her facts and circumstances and make a determination on the Living Trust’s status.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Potential Penalties If a Foreign Trust',
      },
      {
        type: 'paragraph',
        text: 'If the Living Trust is a foreign trust, failure to timely file Form 3520, or to fully disclose all required information, results in a penalty equal to the greater of $10,000 or 35% of the gross reportable amount. The “gross reportable amount” is “the gross value of the property involved in the event (determined as of the date of the event).”',
      },
      {
        type: 'paragraph',
        text: 'One “event” that requires disclosure on Form 3520 is the transfer of money or property to a foreign trust by a U.S. person. A domestic trust that becomes a foreign trust is deemed to have made a transfer of all its assets to a foreign trust.',
      },
      {
        type: 'paragraph',
        text: 'While Beth lived in the U.S., the Living Trust was a domestic trust. If moving to Puerto Rico and administering the trust from Puerto Rico caused the Living Trust to become a foreign trust, Beth would need to disclose the deemed transfer of assets from the Living Trust as a domestic trust to the Living Trust as a foreign trust. If the value of the property on that date was $20 million, the penalty to Beth for failing to file Form 3520 would be $7 million (35% x $20,000,000).',
      },
      {
        type: 'paragraph',
        text: 'A U.S. person who receives a distribution from a foreign trust generally must report the receipt of that distribution on Form 3520. Failure to report the receipt of the distribution on Form 3520 results in a 35% penalty on the gross amount of the distribution. Thus, if the Living Trust is a foreign trust and Beth removes assets from the Living Trust, failure to report those distributions on Form 3520 could result in significant penalties.',
      },
      {
        type: 'paragraph',
        text: 'Failure to file Form 3520-A results in a penalty equal to the greater of $10,000 or 5% of the gross reportable amount.” The “gross reportable amount” is “the gross value of the portion of the trust’s assets at the close of the year treated as owned by the U.S. person.”',
      },
      {
        type: 'paragraph',
        text: 'If the Living Trust was a foreign trust and if the value of the Living Trust’s assets at the end of each year was $20 million, the penalty to Beth for failing to file Form 3520-A would be $1 million (5% x $20,000,000) each year.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Summary',
      },
      {
        type: 'paragraph',
        text: 'It is important for Beth to determine whether her move to Puerto Rico may cause the Living Trust to become a foreign trust. If the Living Trust were to become a foreign trust, she would be subject to Form 3520 and Form 3520-A reporting requirements, with very substantial penalties for failing to file those forms. Failing to file these returns would also keep the statute of limitations open indefinitely on the IRS’s ability to examine the returns and assess penalties.',
      },
    ],
  }),
  defineArticle({
    slug: 'fica-taxes-bona-resident-puerto-rico',
    title: 'FICA Taxes for Bona Fide Residents of Puerto Rico',
    description: 'FICA tax considerations for bona fide residents of Puerto Rico who own Puerto Rican entities.',
    publishedAt: '2024-06-22',
    excerpt: 'Katy is a U.S. citizen who is a bona fide resident of Puerto Rico. Katy owns 100% of a Puerto Rican LLC (“PRLLC”). PRLLC is classified as a corporation for both Puerto Rican and U.S. tax purposes.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/FICA-Taxes-for-Bona-Fide-Residents-of-Puerto-Rico.pdf',
    relatedSlugs: [
      'us-tax-consequences-act-60'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Payroll Tax', 'Act 60'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Facts (the “Base Case”)',
      },
      {
        type: 'paragraph',
        text: 'Katy is a U.S. citizen who is a bona fide resident of Puerto Rico. Katy owns 100% of a Puerto Rican LLC (“PRLLC”). PRLLC is classified as a corporation for both Puerto Rican and U.S. tax purposes.',
      },
      {
        type: 'paragraph',
        text: 'PRLLC performs services. All of the services take place in Puerto Rico. PRLLC receives arm’s length service fee income from unrelated parties. PRLLC’s gross service revenue is $1,200,000 and its total expenses, including a salary to Katy, are $500,000.',
      },
      {
        type: 'paragraph',
        text: 'Katy’s salary is $350,000. Her salary is reasonable in relation to the services she performs and is purely for services rendered. All of the services Katy performs for PRLLC take place in Puerto Rico. Thus, all of her salary is Puerto Rican source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Income Taxes On Katy’s Salary',
      },
      {
        type: 'paragraph',
        text: 'U.S. citizens are generally taxed in the U.S. on their worldwide income. However, bona fide residents of Puerto Rico can exclude Puerto Rican-source income from their U.S. taxable income. Because Katy is a bona fide resident of Puerto Rico and because all of the services she performs for PRLLC take place in Puerto Rico, she can exclude the $350,000 salary she receives from PRLLC from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Puerto Rico itself may impose an income tax on Katy’s salary. However, such a Puerto Rican income tax is not a U.S. Federal income tax and is not collected by the U.S. Federal government. Instead, Puerto Rican income taxes are imposed by, and collected by, the Puerto Rican government.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. FICA Taxes on Katy’s Salary',
      },
      {
        type: 'paragraph',
        text: 'In general, the term “United States” when used in a geographical sense includes only the 50 states and the District of Columbia. Thus, PRLLC is not considered a domestic corporation. Instead, it is considered a foreign corporation.',
      },
      {
        type: 'paragraph',
        text: 'The term “wages” is generally defined as “all remuneration for employment.” The term “employment” is defined to include any service performed by an employee within the United States. For FICA tax purposes, the term “United States” is defined to include Puerto Rico. Therefore, for FICA tax purposes Katy’s services are performed by an employee within the United States. This means that her salary from PRLLC is considered wages, and the salary is subject to U.S. FICA tax.',
      },
      {
        type: 'paragraph',
        text: 'PRLLC would use Form 941 (PR) to report the wages and the FICA tax withheld to the IRS. PRLLC may also withhold Puerto Rican income tax from the wages. However, that Puerto Rican income tax is retained by the Puerto Rican government.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Alternative Facts',
      },
      {
        type: 'paragraph',
        text: 'Assume the same facts as above, except that for U.S. tax purposes PRLLC has elected to be classified as a disregarded entity. PRLLC continues to be classified as a corporation for Puerto Rican tax purposes.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Income Taxes On PRLLC’s Income (Under the Alternative Facts)',
      },
      {
        type: 'paragraph',
        text: 'If an entity with a single owner elects to be “disregarded as an entity separate from its owner”, then “its activities are treated in the same manner as a sole proprietorship, branch, or division of the owner.” The entity is thus treated for U.S. Federal tax purposes “as having no existence separate and distinct from” its owner.',
      },
      {
        type: 'paragraph',
        text: 'If PRLLC has elected to be taxed as a disregarded entity for U.S. tax purposes, then its income and deductions are treated as income earned by Katy and deductions incurred by Katy. Under the Base Case, Katy had salary income of $350,000 and no deductions. Under these Alternative Facts, Katy does not earn a salary. Instead, payments between Katy and PRLLC are disregarded, and Katy has gross income of $1,200,000 and related deductions of $150,000 (total deductions of $500,000 less the disregarded salary of $350,000).',
      },
      {
        type: 'paragraph',
        text: 'As described above, all of PRLLC’s gross services income was derived from services performed in Puerto Rico. Thus, all of the gross income of $1,200,000 can be excluded from Katy’s gross income under Code §933. Assuming that the $150,000 of expenses were properly allocable to the Puerto Rican-source income, then those deductions would be disallowed for U.S. tax purposes. None of the net income of $1,050,000 would be taxable to Katy.',
      },
      {
        type: 'paragraph',
        text: 'In the Base Case, Katy owed no U.S. income tax on her salary from PRLLC. Similarly, under the Alternative Facts, Katy should owe no U.S. income tax on her income earned through PRLLC.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Self-Employment Tax On PRLLC’s Income (Under the Alternative Facts)',
      },
      {
        type: 'paragraph',
        text: 'The U.S. imposes a tax on the self-employment income of every individual. Self-employment income generally means net earnings from self-employment derived by individuals other than nonresident aliens. Net earnings from self-employment means “the gross income derived by',
      },
      {
        type: 'paragraph',
        text: 'an individual from any trade or business carried on by such individual, less the deductions * * * which are attributable to such trade or business”.',
      },
      {
        type: 'paragraph',
        text: 'Because PRLLC’s activities are attributed to Katy, Katy is treated as deriving gross income from a trade or business and incurring deductions related to that trade or business. Thus, Katy has net earnings from self-employment of $1,050,000. These earnings will be subject to U.S. self-employment tax.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'FICA Taxes (Under the Alternative Facts)',
      },
      {
        type: 'paragraph',
        text: 'As described above, under the Alternative Facts PRLLC is classified as a disregarded entity for U.S. tax purposes. Therefore, payments between Katy and PRLLC are disregarded. That is, Katy is not treated as receiving any salary from PRLLC for U.S. tax purposes. Under Puerto Rican tax law, PRLLC is classified as a corporation. Thus, under Puerto Rican tax law, Katy receives a salary and can be taxed in Puerto Rico on that salary. However, when PRLLC files its U.S. payroll tax returns, it should not treat Katy as receiving a salary. Therefore, none of Katy’s income should be subject to FICA taxes under the Alternative Facts.',
      },
    ],
  }),
  defineArticle({
    slug: 'final-year-in-puerto-rico',
    title: 'Your Final Year in Puerto Rico',
    description: 'U.S. tax considerations when transitioning back to the mainland after participating in Puerto Rico\'s Act 60 program.',
    publishedAt: '2024-06-22',
    excerpt: 'Puerto Rico’s Act 60 program has seen more than five thousand U.S. taxpayers move to the island since the program’s inception in 2012 to take advantage of the once-in-a-lifetime tax benefits offered by Puerto Rico. Eventually, many of these taxpayers will return and transition back to life on the mainland.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Your-Final-Year-in-Puerto-Rico.pdf',
    relatedSlugs: [
      'after-puerto-rico-expatriation',
      'rule-for-year-of-move-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'Puerto Rico’s Act 60 program has seen more than five thousand U.S. taxpayers move to the island since the program’s inception in 2012 to take advantage of the once-in-a-lifetime tax benefits offered by Puerto Rico. Eventually, many of these taxpayers will return and transition back to life on the mainland.',
      },
      {
        type: 'paragraph',
        text: 'When an individual decides to leave Puerto Rico, many questions arise. Is the individual a bona fide resident of Puerto Rico at all during the year of the leave? Can any income earned in the year of the leave be excluded from U.S. taxable income?',
      },
      {
        type: 'paragraph',
        text: 'This article discusses a number of these questions.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Betty is a U.S. citizen who has been a bona fide resident of Puerto Rico since 2019. Betty changed her residence to Puerto Rico in May 2019. In 2023, she decided to move to New York. On August 1, 2023, she moved from Puerto Rico to New York.',
      },
      {
        type: 'paragraph',
        text: 'Betty was present in Puerto Rico every day from January 1, 2023 to August 1, 2023. Her principal place of business remained in Puerto Rico and she had a closer connection to Puerto Rico until August 1, 2023.',
      },
      {
        type: 'paragraph',
        text: 'Home: In 2020, Betty purchased a home in Puerto Rico for $2 million. Prior to her move to New York, Betty sold her home for $7 million and recognized a gain of $5 million.',
      },
      {
        type: 'paragraph',
        text: 'US Stocks: Also in 2020, Betty purchased U.S. publicly traded stocks (the “US Stocks”) for $1 million. Prior to her move to New York, Betty sold the US Stocks for $5 million and recognized a gain of $4 million. The gain on the US Stocks was not attributable to a U.S. office or other fixed place of business.',
      },
      {
        type: 'paragraph',
        text: 'PR Corp: Betty owned 100% of PRCo, a Puerto Rican limited liability company that was classified as a corporation for U.S. tax purposes. The company was granted an Act 60 export services decree in 2020. Betty was the sole member and employee of the company. PRCo operated solely in Puerto Rico and met the 80% and 50% tests in Treas. Reg. §1.937-2(g)(1)(ii). In January of 2023, PRCo paid a dividend to Betty of $3 million.',
      },
      {
        type: 'paragraph',
        text: 'Betty’s tax basis in the shares of PRCo was $100,000. On July 1, 2023, PRCo liquidated, distributing cash of $2,100,000 to Betty. As a result of the liquidation, Betty recognized a gain of $2 million.',
      },
      {
        type: 'paragraph',
        text: 'Compensation: In 2023, Betty earned a salary from PRCo of $200,000 for services performed in Puerto Rico, and she was paid all of this salary prior to August 1, 2023.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'ISSUES',
      },
      {
        type: 'list',
        items: [
          'Should Betty be a bona fide resident of Puerto Rico for any part of 2023?',
          'Should Betty be able to exclude the $5 million gain on her Puerto Rican home from her U.S. taxable income?',
          'If Betty had sold the home and recognized the $5 million gain on September 1, 2023 (after she moved to New York), would Betty have been able to exclude the $5 million gain from her U.S. taxable income?',
          'Should Betty be able to exclude the $4 million gain on the US Stocks from her U.S. taxable income?',
          'If Betty had sold the US Stocks and recognized the $4 million gain on September 1, 2023 (after she moved to New York), would Betty have been able to exclude the $4 million gain from her U.S. taxable income?',
          'Should Betty be able to exclude the PRCo $3 million dividend from her U.S. taxable income?',
          'Should Betty be able to exclude the $2 million gain on the PRCo liquidation from her U.S. taxable income?',
          'If Betty had liquidated PRCo and recognized the $2 million gain on September 1, 2023 (after she moved to New York), would Betty have been able to exclude the $2 million gain from her U.S. taxable income?',
          'Should Betty be able to exclude the $200,000 salary from her U.S. taxable income?',
          'If (i) PRCo was not liquidated until after September 1, 2023, (ii) Betty received a portion of her salary on September 1, 2023, and (iii) that salary was attributable to her services performed in Puerto Rico prior to August 1, 2023, would Betty have been able to exclude the portion of her salary received on September 1, 2023 from her U.S. taxable income?',
          'Is Betty required to file Form 8898 for 2023?',
          'If, in 2019, Betty excluded Puerto Rican-source income from her U.S. taxable income, does her 2023 move to New York jeopardize the 2019 exclusion?',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'SUMMARY CONCLUSIONS',
      },
      {
        type: 'list',
        items: [
          'Betty should be a bona fide resident of Puerto Rico up until August 1, 2023 when she moved her tax home to New York.',
          'Betty should be able to exclude the $5 million gain on her Puerto Rican home from her U.S. taxable income.',
          'If Betty had sold the home and recognized the $5 million gain on September 1, 2023, Betty likely would have been able to exclude the $5 million gain from her U.S. taxable income. The gain would be Puerto Rican-source income, and the gain likely would be attributable to Betty’s period of residence in Puerto Rico.',
          'Betty should be able to exclude the $4 million gain on the US Stocks from her U.S. taxable income.',
          'If Betty had sold the US Stocks and recognized the $4 million gain on September 1, 2023, the gain would not have been Puerto Rican-source income. Therefore, she would not have been able to exclude the $4 million gain from her U.S. taxable income.',
          'Betty should be able to exclude the PRCo $3 million dividend from her U.S. taxable income.',
          'Betty should be able to exclude the $2 million gain on the PRCo liquidation from her U.S. taxable income.',
          'If Betty had liquidated PRCo and recognized the $2 million gain on September 1, 2023, she would not have been able to exclude the $2 million gain from her U.S. taxable income.',
          'Betty should be able to exclude the $200,000 salary from her U.S. taxable income.',
          'Yes. If (i) PRCo was not liquidated until after September 1, 2023, (ii) Betty received a portion of her salary on September 1, 2023, and (iii) that salary was attributable to her services performed in Puerto Rico prior to August 1, 2023, Betty would have been able to exclude the portion of her salary received on September 1, 2023 from her U.S. taxable income.',
          'Betty is required to file Form 8898 for 2023.',
          'If, in 2019, Betty excluded Puerto Rican-source income from her U.S. taxable income, her 2023 move to New York does not jeopardize the 2019 exclusion.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'ANALYSIS',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Part Year Bona Fide Resident',
      },
      {
        type: 'paragraph',
        text: 'An individual must meet the “tax home” requirement to be a bona fide resident of Puerto Rico. In general, to meet the tax home test the individual must “not have a tax home outside [Puerto Rico] during any part of the taxable year.”(Emphasis added) However, a special rule applies to “an individual who * * * ceases to be a bona fide resident of [Puerto Rico] during a taxable year.”',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Treas. Reg. §1.937-2(f)(2)(ii) provides in part:',
      },
      {
        type: 'paragraph',
        text: 'Year of move from Puerto Rico. Notwithstanding an individual’s failure to satisfy the presence, tax home, or closer connection test * * * for the taxable year, the individual is a bona fide resident of Puerto Rico for that part of the taxable year described in paragraph (f)(2)(ii)(E) of this section if the individual—',
      },
      {
        type: 'paragraph',
        text: '(A) Is a citizen of the United States;',
      },
      {
        type: 'paragraph',
        text: '(B) Is a bona fide resident of Puerto Rico for a period of at least 2 taxable years immediately preceding the taxable year;',
      },
      {
        type: 'paragraph',
        text: '(C) Ceases to be a bona fide resident of Puerto Rico during the taxable year;',
      },
      {
        type: 'paragraph',
        text: '(D) Ceases to have a tax home in Puerto Rico during the taxable year; and',
      },
      {
        type: 'paragraph',
        text: '(E) Has a closer connection to Puerto Rico than to the United States or a foreign country throughout the part of the taxable year preceding the date on which the individual ceases to have a tax home in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'With respect to Betty:',
      },
      {
        type: 'list',
        items: [
          'She is a U.S. citizen,',
          'She was a bona fide resident of Puerto Rico for at least the two taxable years immediately preceding 2023,',
          'She ceased to be a bona fide resident of Puerto Rico in 2023,',
          'She ceased to have a tax home in Puerto Rico in 2023, and',
          'She had a closer connection to Puerto Rico in 2023 before ceasing to have a tax home in Puerto Rico.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Consequently, Betty should be a bona fide resident of Puerto Rico up until August 1, 2023, when she moved her tax home to New York.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Special Exclusion Rules for Year of Change of Residence from Puerto Rico',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Code §933 provides in part:',
      },
      {
        type: 'paragraph',
        text: 'The following items shall not be included in gross income and shall be exempt from taxation under this subtitle:',
      },
      {
        type: 'paragraph',
        text: '* * *',
      },
      {
        type: 'paragraph',
        text: '(2) Taxable year of change of residence from Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'In the case of an individual citizen of the United States who has been a bona fide resident of Puerto Rico for a period of at least 2 years before the date on which he changes his residence from Puerto Rico, income derived from sources therein * * * which is attributable to that part of such period of Puerto Rican residence before such date * * *.',
      },
      {
        type: 'paragraph',
        text: 'Under this rule, to be excludable the income must be Puerto Rican-source income and the income must be attributable to the period of Puerto Rican residence.',
      },
      {
        type: 'paragraph',
        text: 'Betty is a U.S. citizen who has been a bona fide resident of Puerto Rico for at least 2 years. Betty changed her residence from Puerto Rico to New York on August 1, 2023. Thus, Betty can exclude Puerto Rican-source income from her U.S. taxable income if the Puerto Rican-source income is attributable to the period before August 1, 2023.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale of Puerto Rican Home',
      },
      {
        type: 'paragraph',
        text: 'As described above, Betty purchased a home in Puerto Rico for $2 million in 2020. She sold that home for $7 million prior to August 1, 2023.',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of real estate are sourced to the location of the real estate. The home was located in Puerto Rico. Thus, the gain of $5 million should be Puerto Rican-source income. The gain was attributable to the time that Betty was a bona fide resident of Puerto Rico. Consequently, Betty should be able to exclude the $5 million gain from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'If Betty had sold the home and recognized the $5 million gain on September 1, 2023, the gain would still be Puerto Rican-source income. Unless something very unusual occurred between August 1, 2023 and September 1, 2023, all or nearly all of the gain should be attributable to the time that Betty was a bona fide resident of Puerto Rico. Thus, Betty would be able to exclude all or nearly all of the $5 million from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale of US Stocks',
      },
      {
        type: 'paragraph',
        text: 'As described above, Betty purchased the US Stocks in 2020 for $1 million. Prior to her move to New York, Betty sold the US Stocks for $5 million and recognized a gain of $4 million. The gain on the US Stocks was not attributable to a U.S. office or other fixed place of business.',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of personal property, such as shares of stock, are generally sourced based on the residence of the seller. Special residency rules apply for this purpose. When Betty sold the US Stocks, she had a tax home in Puerto Rico. Consequently, when Betty sold the US Stocks, she was considered a nonresident for purposes of sourcing gains on sales of personal property.',
      },
      {
        type: 'paragraph',
        text: 'Gains on sales of personal property by nonresidents that are attributable to a U.S. office or other fixed place of business are U.S.-source income. Here, the gain on the US Stocks was not attributable to a U.S. office or other fixed place of business. Consequently, the general rule of Code §865(a) will apply, and Betty should be able to exclude the $4 million gain on the US Stocks from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'The result would not be the same if Betty sold the US Stocks on September 1, 2023. As of September 1, 2023, Betty’s tax home was in New York. Because her tax home was in New York, she would not be considered a nonresident at this time. Instead, she would have been a U.S. resident. As a U.S. resident, her gain recognized would be US-source income. Because the gain would not have been Puerto Rican-source income, if Betty had sold the US Stocks on September 1, 2023, she would not have been able to exclude the $4 million gain from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo Dividends',
      },
      {
        type: 'paragraph',
        text: 'As described above, Betty owned 100% of PRCo. PRCo operated solely in Puerto Rico and met the 80% and 50% tests in Treas. Reg. §1.937-2(g)(1)(ii). In January of 2023, PRCo paid a dividend to Betty of $3 million.',
      },
      {
        type: 'paragraph',
        text: 'Because PRCo met the 80% and 50% tests in Treas. Reg. §1.937-2(g)(1)(ii), the entire amount of the dividend paid by PRCo should be Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'Because the dividend was Puerto Rican-source income and Betty was a bona fide resident of Puerto Rico at the time she received the dividend, she should be able to exclude the PRCo $3 million dividend from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo Gain on Liquidation',
      },
      {
        type: 'paragraph',
        text: 'As described above, Betty’s tax basis in the shares of PRCo was $100,000. On July 1, 2023, PRCo liquidated, distributing cash of $2,100,000 to Betty. As a result of the liquidation, Betty recognized a gain of $2 million.',
      },
      {
        type: 'paragraph',
        text: 'The gain is treated as if Betty sold her shares of PRCo stock. Gains on sales of personal property, such as shares of stock, are generally sourced based on the residence of the seller. When Betty disposed of the PRCo stock, she had a tax home in Puerto Rico. Consequently, when Betty disposed of the PRCo stock, she was considered a nonresident for purposes of sourcing gains on sales of personal property.',
      },
      {
        type: 'paragraph',
        text: 'The gain on the PRCo stock was not attributable to a U.S. office or other fixed place of business. Consequently, the general rule of Code §865(a) will apply, and Betty should be able to exclude the $2 million gain on the PRCo stock from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'The result would not be the same if Betty recognized the gain on the liquidation on September 1, 2023. As of September 1, 2023, Betty’s tax home was in New York. Because her tax home was in New York, she would not be considered a nonresident at this time. Instead, she would have been a U.S. resident. As a U.S. resident, her gain recognized would be U.S.-source income. Because the gain would not have been Puerto Rican-source income, if Betty had liquidated PRCo on September 1, 2023, she would not have been able to exclude the $2 million gain from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Puerto Rican Salary',
      },
      {
        type: 'paragraph',
        text: 'As described above, in 2023 Betty earned a salary of $200,000 for services performed in Puerto Rico, and she was paid all of this salary prior to August 1, 2023.',
      },
      {
        type: 'paragraph',
        text: 'Compensation for services performed in Puerto Rico is Puerto Rican-source income. Because the salary was Puerto Rican-source income and Betty was a bona fide resident of Puerto Rico at the time she received the salary, she should be able to exclude the $200,000 salary from her U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'If Betty had received a portion of her salary on September 1, 2023 and that salary was attributable to her services performed in Puerto Rico prior to August 1, 2023, the salary would have been Puerto Rican-source income. In addition, because the salary was attributable to the time that Betty was a bona fide resident of Puerto Rico, she would have been able to exclude the salary received on September 1, 2023 from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 8898',
      },
      {
        type: 'paragraph',
        text: 'If an individual takes the position that he or she ceases to be a bona fide resident of Puerto Rico for a taxable year, the individual is required to file Form 8898. A penalty of $1,000 is imposed for failing to file Form 8898 when required to do so.',
      },
      {
        type: 'paragraph',
        text: 'Form 8898 is not attached to Form 1040. Instead, Form 8898 is filed separately, by mailing it to the address shown in the instructions to the form.',
      },
      {
        type: 'paragraph',
        text: 'For 2023, Betty ceased to be a resident of Puerto Rico. Consequently, Betty will be required to file Form 8898 for 2023.',
      },
      {
        type: 'heading',
        level: 3,
        text: '2019 Three Year Rule Does Not Apply to Betty',
      },
      {
        type: 'paragraph',
        text: 'Betty moved to Puerto Rico in May of 2019. Even though Betty lived in Puerto Rico for only a portion of 2019, she was generally able to exclude Puerto Rican-source income she earned in 2019 from her U.S. taxable income. This “year of move” to Puerto Rico exception, however, applies only if Betty remains a bona fide resident of Puerto Rico for each of the 3 taxable years immediately following 2019.',
      },
      {
        type: 'paragraph',
        text: 'If Betty excluded Puerto Rican-source income from her U.S. taxable income in 2019, moving back to the U.S. too early would jeopardize her 2019 exclusion. Here, however, Betty remained a bona fide resident of Puerto Rico for each of the 3 taxable years immediately following 2019. Consequently, moving back to the U.S. in 2023 should not jeopardize Betty’s 2019 exclusion.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'What If Betty’s Home Were Sold In 2024?',
      },
      {
        type: 'paragraph',
        text: 'A potential issue arises if Betty had sold her Puerto Rican home in 2024, the year after she moved from Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'As described above, Code §933(2) and Treas. Reg. §1.933-1(b) provide a special rule for taxpayers moving out of Puerto Rico. Under this special rule, a taxpayer is able to exclude from their U.S. taxable income Puerto Rican-source income that is attributable to the period of Puerto Rican residence.',
      },
      {
        type: 'paragraph',
        text: 'In Rev. Rul. 68-7, the IRS held that income received in a year after the year of the move could not be excluded from U.S. taxable income, even though the income was derived from sources in Puerto Rico and was attributable to the period of Puerto Rican residence.',
      },
      {
        type: 'paragraph',
        text: 'Neither the statute nor the regulations limit the special rule to the year of the move. And it does not make sense to limit this rule to the year of the move. If an individual moves from Puerto Rico in December and receives Puerto Rican-source income in January, Rev. Rul. 68-7 would suggest that the income received just after moving out of Puerto Rico could not be excluded from U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Presumably, the IRS based its conclusion in Rev. Rul. 68-7 on the heading of Code §933(2). Code §933(2) and Treas. Reg. §1.933-1(b) both contain a heading of “Taxable year of change of residence from Puerto Rico”. This heading may suggest that the special rule only applies for the taxable year of the move. However, even though headings can a useful aid in resolving a statutory text’s ambiguity, they do no more than indicate the provisions in “a most general manner”. The Supreme Court has stated:',
      },
      {
        type: 'paragraph',
        text: 'Headings and titles are not meant to take the place of the detailed provisions of the text. Nor are they necessarily designed to be a reference guide or a synopsis. Where the text is complicated and prolific, headings and titles can do no more than indicate the provisions in a most general manner; to attempt to refer to each specific provision would often be ungainly as well as useless. As a result, matters in the text which deviate from those falling within the general pattern are frequently unreflected in the headings and titles. Factors of this type have led to the wise rule that the title of a statute and the heading of a section cannot limit the plain meaning of the text. * * * For interpretative purposes, they are of use only when they shed light on some ambiguous word or phrase. They are but tools available for the resolution of a doubt. But they cannot undo or limit that which the text makes plain.',
      },
      {
        type: 'paragraph',
        text: 'Because neither the statute nor the regulations limit the special rule in Code §933(2) to only the taxable year of the move and because the special rule is quite narrow (the excludable income is limited to Puerto Rican source income and only if that Puerto Rican-source income is attributable to the period of Puerto Rican residence), it is far from clear that income received in the year after the move cannot be excluded from income.',
      },
    ],
  }),
  defineArticle({
    slug: 'federal-tax-credit-solar-panels-puerto-rico',
    title: 'Federal Tax Credit for Solar Panels in Puerto Rico? Not So Fast.',
    description: 'Federal solar tax credit considerations for residents of Puerto Rico.',
    publishedAt: '2024-06-22',
    excerpt: 'Warm breezes, white sand, stunning sunsets. These are the images most people conjure when thinking of Puerto Rico. They often overlook the unwelcome and frequent power outages that seem to accompany every major storm and sometimes happen without explanation. The electric grid has one major power line which, if compromised, can bring down the entire power system.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Federal-Solar-Tax-Credits-for-PR-Residents.pdf',
    relatedSlugs: [
      'act-2024-bona-fide-resident-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Credits'],
    content: [
      {
        type: 'paragraph',
        text: 'Warm breezes, white sand, stunning sunsets. These are the images most people conjure when thinking of Puerto Rico. They often overlook the unwelcome and frequent power outages that seem to accompany every major storm and sometimes happen without explanation. The electric grid has one major power line which, if compromised, can bring down the entire power system.',
      },
      {
        type: 'paragraph',
        text: 'Power outages are not unique to Puerto Rico. Many residents moved from areas where solar power is popular, and generators were common, especially during a storm or natural disaster. Understandably, many residents, especially Act 60 recipients, want a backup source of power in light of these inconvenient and often extensive occurrences in their otherwise idyllic island paradise. The federal tax credit available to offset the cost of these back up power sources is often an attractive incentive to make the investment.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example',
      },
      {
        type: 'paragraph',
        text: 'Katie and Michael moved to Puerto Rico to take advantage of the Act 60 program and need a reliable power source because they work from their home. They want to utilize the federal tax credit to offset the cost of installing solar panels with a solar battery storage system at their home to ensure they have an alternative source of power in case of a power outage.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Federal Tax Credit',
      },
      {
        type: 'paragraph',
        text: 'Internal Revenue Code Section 25D allows a tax credit for qualified expenditures made by a taxpayer for residential energy efficient property. The term “qualified solar electric property expenditure” means an expenditure for property “which uses solar energy to generate electricity for use in a dwelling unit located in the United States and used as a residence by the taxpayer.”',
      },
      {
        type: 'paragraph',
        text: 'Internal Revenue Code section 7701(a)(9) provides that when used in the Internal Revenue Code, “the [t]erm ‘United States’ when used in a geographical sense includes only the States and the District of Columbia.” Code section 7701(a)(9) does not include U.S. territories in the definition of “United States.” The Code and regulations generally referred to Puerto Rico and other unincorporated territories as “possessions.” Code section 25D does not modify the definition of “United States”.',
      },
      {
        type: 'paragraph',
        text: 'Because Michael and Katie’s property is located in Puerto Rico, it is treated as not being in the United States. Consequently, no credit is available for the solar panels installed in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Even though federal tax credit is not available for the cost of the solar panels installed in a home in Puerto Rico, it can nevertheless be a helpful investment to make life that much sweeter on the island.',
      },
    ],
  }),
  defineArticle({
    slug: 'act-2024-bona-fide-resident-puerto-rico',
    title: 'The Corporate Transparency Act of 2024 and Bona Fide Residents of Puerto Rico: What You Need to Know',
    description: 'Corporate Transparency Act reporting requirements for bona fide residents of Puerto Rico and their entities.',
    publishedAt: '2024-06-22',
    excerpt: 'The Corporate Transparency Act of 2024 (CTA) is being heralded as a game changer in the fight against financial crime. Effective January 1, 2024, the CTA mandates the creation of a national database exposing the true owners of US companies and companies authorized to do business in the US, known as beneficial owners (BOs).',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Corporate-Transparency-Act-for-PR-Companies.pdf',
    relatedSlugs: [
      'requirements-puerto-rico-residents',
      'us-tax-form-926-act-60'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Corporate Transparency Act', 'Compliance'],
    content: [
      {
        type: 'paragraph',
        text: 'The Corporate Transparency Act of 2024 (CTA) is being heralded as a game changer in the fight against financial crime. Effective January 1, 2024, the CTA mandates the creation of a national database exposing the true owners of US companies and companies authorized to do business in the US, known as beneficial owners (BOs).',
      },
      {
        type: 'paragraph',
        text: 'The CTA was enacted to combat the use of shell companies for illicit purposes, such as money laundering, terrorism financing, and other illegal activities. It requires certain entities to disclose the identifying information about the people who own or control them, and the identity of certain individuals who form or register them, to the Financial Crimes Enforcement Network (FinCEN).',
      },
      {
        type: 'paragraph',
        text: 'This raises questions for US taxpayers who are bona fide residents of Puerto Rico. If you are a bona fide resident of Puerto Rico and own or control a US company, or a company registered to do business in the US, does the CTA apply to you? What if you own a Puerto Rico entity? What if you are a joint owner? If so, what do you need to file, and when?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Who Must File',
      },
      {
        type: 'paragraph',
        text: 'The CTA reporting requirements apply to Reporting Companies that are not exempt. For this purpose, a Reporting Company means “a corporation, limited liability company, or other similar entity that is— (i) created by the filing of a document with a secretary of state or a similar office under the law of a State or Indian Tribe; or (ii) formed under the law of a foreign country and registered to do business in the United States by the filing of a document with a secretary of state or a similar office under the laws of a State or Indian Tribe.”For purposes of this definition, the term ‘state’ includes the Commonwealth of Puerto Rico, and any other commonwealth, territory, or possession of the United States. Therefore, an entity formed in Puerto Rico, that is not exempt, will constitute a Reporting Company for this purpose.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Exemptions to the definition of a Reporting Company include, but are not limited to:',
      },
      {
        type: 'list',
        items: [
          'Securities reporting issuer.',
          'Money transmitting business registered with FinCEN under 31 U.S.C. 5330, and any money services business registered with FinCEN under 31 CFR 1022.380.',
          'Any broker or dealer, as those terms are defined in Sec. 3 of the Securities Exchange Act of 1934, that is registered under Sec. 15 of that Act.',
          'Any entity that is: (a) an investment company as defined in Sec. 3 of the Investment Company Act of 1940, or is an investment adviser as defined in Sec. 202 of the Investment Advisers Act of 1940, and (b) registered with the SEC under the Investment Company Act of 1940 or the Investment Advisers Act of 1940.',
          'Any investment adviser that: (a) is described in section 203(l) of the Investment Advisers Act of 1940, and (b) has filed Item 10, Schedule A, and Schedule B of Part 1A of Form ADV, or any successor thereto, with the SEC.',
          'A large operating company. This is defined as a company physically present in the US that employs more than 20 people in the US and reported gross revenue (or sales) of over $5,000,000 on the prior year’s tax return.',
        ],
      },
      {
        type: 'paragraph',
        text: 'This list is not comprehensive, and it is important to examine the requirements for exemption and apply them to the details of each entity to determine the entity’s CTA filing requirements.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Information Required to Be Reported',
      },
      {
        type: 'paragraph',
        text: 'If your entity qualifies as a Reporting Company, your entity will be required to file reports disclosing information on each BO, including name, date of birth, address, and a government-issued ID (the “CTA Report”). This information will be stored securely but accessible to law enforcement and authorized government officials. In addition, the Reporting Company must also disclose certain information about the “Company Applicants”, depending on the formation date of the Reporting Company.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Identifying the BO',
      },
      {
        type: 'heading',
        level: 3,
        text: 'A BO is any individual who, directly or indirectly:',
      },
      {
        type: 'list',
        items: [
          'Owns or controls at least 25 percent of the ownership interests of a Reporting Company; or',
          'Exercises substantial control over a Reporting Company.',
        ],
      },
      {
        type: 'paragraph',
        text: 'For this purpose, an individual has substantial control if they (1) are a senior officer; (2) have authority to appoint or remove certain officers or a majority of directors of the company; (3) are an important decision-maker; or (4) have any other form of substantial control over the Reporting Company.',
      },
      {
        type: 'paragraph',
        text: 'Understanding how the CTA affects you specifically requires careful consideration of your unique circumstances. Are you the sole owner of your company, or do you share control with others? Does your business fall under certain exemption categories, such as being publicly traded or already subject to similar reporting requirements? Who formed or registered your company? These nuances can significantly impact your filing obligations.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Timing of Filings',
      },
      {
        type: 'paragraph',
        text: 'The timing of the required filings is dependent on the formation dates of the Reporting Companies. The general rules are as follows:',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Domestic Reporting Company',
      },
      {
        type: 'list',
        items: [
          'A domestic reporting company created before January 1, 2024 must file a report not later than January 1, 2025.',
          'A domestic reporting company created on or after January 1, 2024 but before January 1, 2025 must file a report within 90 calendar days of formation.',
          'A domestic reporting company created on or after January 1, 2025 must file a report within 30 calendar days of formation.',
        ],
      },
      {
        type: 'paragraph',
        text: 'REMINDER: An entity formed in Puerto Rico constitutes a Domestic Reporting Company.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Previously Exempt Company',
      },
      {
        type: 'paragraph',
        text: 'Any entity that was once exempt and no longer meets the exemption criteria must file a report within 30 calendar days after the date that it no longer meets the criteria for any exemption.',
      },
      {
        type: 'paragraph',
        text: 'A Reporting Company will need to file updated and corrected CTA Reports if there are changes or corrections to the information filed in the initial CTA Report, by certain specified due dates. This includes a change to a BO’s name, a BO’s address, and any new BO of a Reporting Company.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Examples:',
      },
      {
        type: 'paragraph',
        text: 'Facts: As of January 1, 2024, Colin is a bona fide resident of Puerto Rico and has an Act 60 company (PR LLC). Colin is also the sole owner of 3 entities in the US (the “US Entities”) and an entity in the US that qualifies as SEC-registered investment adviser (the “Investment Adviser Entity”). All entities were formed prior to January 1, 2024.',
      },
      {
        type: 'paragraph',
        text: 'Example 1: Colin is a BO with respect to PR LLC, the US Entities and the Investment Adviser Entity. Colin, as sole owner of these entities, will need to file CTA Reports for the PR LLC and the US Entities. Colin does not need to file a CTA Report for the Investment Adviser Entity because it is exempt from the CTA requirements. These CTA Reports must be filed no later than January 1, 2025.',
      },
      {
        type: 'paragraph',
        text: 'Example 2: Same facts as above. On March 1, 2025, Colin realizes he forgot to file CTA Reports for PR LLC and the US Entities because he was busy celebrating the Chicago Bears’ Superbowl LIX victory. Colin faces escalating fines ranging from $500 to $10,000 per violation and jail time of up to two years.',
      },
      {
        type: 'paragraph',
        text: 'Example 3: Same facts as above. Colin forms a new PR LLC on June 1, 2024 (the “2024 PR LLC”) of which he is the sole owner. The 2024 PR LLC is a Reporting Company and Colin is a BO. Because the 2024 PR LLC was formed after January 1, 2024, Colin will need to file a CTA Report no later than September 1, 2024 for this entity.',
      },
      {
        type: 'paragraph',
        text: 'Example 4: Same facts as above. Colin moves to a bigger house on August 1, 2025, to accommodate his growing family. Colin will need to file an updated CTA Report with his new address for PR LLC, 2024 PR LLC, and the US Entities no later than September 1, 2025.',
      },
      {
        type: 'paragraph',
        text: 'Example 5: Same facts as above. Colin used his passport as identification for the prior filed CTA Reports. Colin’s passport is about to expire, so he gets a new one on April 1, 2025. Colin will need to file an updated CTA Report for PR LLC, 2024 PR LLC and the US Entities with Colin’s new passport information no later than May 1, 2025.',
      },
      {
        type: 'paragraph',
        text: 'These are very simple examples to provide a basic introduction to the CTA filing requirements. Most situations will be much more complex due to the ownership structure, control, and formation specifics of both the PR and US entities owned by bona fide residents of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Next Steps to Implement Now',
      },
      {
        type: 'paragraph',
        text: 'Navigating the CTA’s intricacies can be complex, so consulting with a qualified attorney is crucial. They can analyze your specific situation, determine your reporting requirements, and guide you through the filing process. Remember, failing to comply with the CTA can lead to hefty fines and potential criminal penalties. All US taxpayers who are bona fide residents of Puerto Rico should discuss the new CTA reporting requirements with their US counsel to ensure a smooth and compliant transition into this new era of corporate transparency. At a minimum, be prepared to file a CTA Report for your Puerto Rico Act 60 companies, as well as any other US entities that you own no later than January 1, 2025, and possibly earlier for newly formed entities. Also, don’t forget to update those filings if the information changes.',
      },
    ],
  }),
  defineArticle({
    slug: 'requirements-puerto-rico-residents',
    title: 'Form 5471 Filing Requirements for Residents of Puerto Rico',
    description: 'Form 5471 filing requirements for a bona fide resident of Puerto Rico with respect to a Puerto Rican corporation.',
    publishedAt: '2023-06-25',
    excerpt: 'This memorandum discusses the Form 5471 filing requirements for a bona fide resident of Puerto Rico (the “BFR of PR”) with respect to a Puerto Rican corporation (“PRCo”).',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Form-5471-Filing-Requirements-for-Residents-of-Puerto-Rico.pdf',
    relatedSlugs: [
      'us-tax-form-926-act-60',
      'statute-of-limitations'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Form 5471', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'This memorandum discusses the Form 5471 filing requirements for a bona fide resident of Puerto Rico (the “BFR of PR”) with respect to a Puerto Rican corporation (“PRCo”).',
      },
      {
        type: 'paragraph',
        text: 'It should be noted that the vast majority of Puerto Rico companies are established as LLCs. A Puerto Rico LLC that has not elected to be treated as a flow-through entity for U.S. purposes is treated as a corporation for U.S. purposes. See Treas. Reg. §301.7701-3(b)(2)(i)(B).',
      },
      {
        type: 'paragraph',
        text: 'The BFR of PR was a bona fide resident of Puerto Rico for the entire year. The BFR of PR owns 100% of PRCo.',
      },
      {
        type: 'paragraph',
        text: 'PRCo earns solely US-source income. However, PRCo is not engaged in a trade or business in the US. Further, PRCo is not engaged in a trade or business in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'There are five categories of filers for purposes of Form 5471.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Category 1 Filer',
      },
      {
        type: 'paragraph',
        text: 'Category 1 applies to Code §965 specified foreign corporations. If PRCo is a Code §965 specified foreign corporation, then Category 1 would apply.',
      },
      {
        type: 'paragraph',
        text: 'Category 5 Filer (the BFR of PR should not be treated as a US person for this category)',
      },
      {
        type: 'paragraph',
        text: 'Category 5 filer applies to US shareholders of CFCs. If the BFR of PR is not a “US shareholder” of PRCo or if PRCo is not a CFC, then the BFR of PR should not be a Category 5 filer with respect to PRCo.',
      },
      {
        type: 'paragraph',
        text: 'In order to be a US shareholder with respect to a Puerto Rican corporation, an individual must be considered a US person as defined in Code §957(c)(1) and Treas. Reg. §1.957-3(b). An individual is not considered a US person with respect to a foreign corporation created in Puerto Rico if the individual is a bona fide resident of Puerto Rico during the entire taxable year and a dividend received by the individual from the Puerto Rican corporation during the year would, for purposes of Code §933(1), be treated as income derived from sources within Puerto Rico. For this purpose, the special rules of Treas. Reg. §1.937-2(g)(1) do not apply. Treas. Reg. §1.957-3(b).',
      },
      {
        type: 'paragraph',
        text: 'Thus, for this purpose, the “normal” dividend sourcing rules under Code §861(a)(2)(B) apply. Under Code §861(a)(2)(B), all of a dividend from PRCo to the BFR of PR should be treated as income derived from sources within Puerto Rico unless 25% or more of PRCo’s gross income from all sources for the prior 3-year period (or for such part of such period as the corporation has been in existence) was effectively connected with the conduct of a trade or business within the US (“ECI”).',
      },
      {
        type: 'list',
        items: [
          'Because PRCo is not engaged in a trade or business in the US, none of PRCo’s gross income should be ECI.',
          'Because none of PRCo’s gross income should be ECI, all of a dividend from PRCo to the BFR of PR should be treated as Puerto Rican source income under Code §861(a)(2)(B).',
          'Because all of a dividend from PRCo to the BFR of PR should be treated as Puerto Rican source income under Code §861(a)(2)(B) and because the BFR of PR was a bona fide resident of Puerto Rico for the entire year, the BFR of PR should not be considered a US person as defined in Code §957(c)(1) and Treas. Reg. §1.957-3(b).',
          'Because the BFR of PR should not be considered a US person, he should not be treated as a US shareholder of PRCo. Code §951(b).',
          'Because the BFR of PR should not be treated as a US shareholder of PRCo, PRCo should not be a CFC. Code §957(a).',
          'Because the BFR of PR should not be treated as a US shareholder of PRCo and because PRCo should not be a CFC, the BFR of PR should not be a Category 5 filer with respect to PRCo.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Category 2, 3, and 4 Filers (US Person Definition for These Categories)',
      },
      {
        type: 'paragraph',
        text: 'As described above, the special rules of Treas. Reg. §1.937-2(g)(1) do not apply for purposes of determining whether the BFR of PR is treated as a US person for Category 5 filer purposes. However, the regulations define US person differently for purposes of Category 2, 3, and 4 filers.',
      },
      {
        type: 'paragraph',
        text: 'The definition of US person for purposes of Category 2 and 3 filers is found in Treas. Reg. §1.6046-1(f)(3)(ii)(A), and the definition of US person for purposes of Category 4 filers is found in Treas. Reg. §1.6038-2(d)(2)(i). Both of these regulations provide that, for an individual who is a bona fide resident of Puerto Rico, the term US person has the meaning assigned to it by Treas. Reg. §1.957-3(b) except that the rules of Treas. Reg. §1.937-2(g)(1) do apply.',
      },
      {
        type: 'paragraph',
        text: 'Thus, the BFR of PR will be treated as a US person for Category 2, 3, and 4 purposes if a dividend from PRCo to the BFR of PR would not, for purposes of Code §933(1), be treated as income derived from sources within Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo Does Not Meet the 100% Puerto Rican Sourcing Rule (PRCo Fails the 80/50 Tests)',
      },
      {
        type: 'paragraph',
        text: 'Under Treas. Reg. §1.937-2(g)(1)(ii), the entire amount of a dividend is considered Puerto Rican source if: (A) 80% or more of the gross income of the corporation over a 3-year testing period is from sources within Puerto Rico or was effectively connected with the conduct of a trade or business in Puerto Rico, and (B) 50% or more of the gross income of the corporation for the testing period was derived from the active conduct of a trade or business within Puerto Rico. Because PRCo is not engaged in the active conduct of a trade or business within Puerto Rico, this rule will not apply to PRCo.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Proportionate Dividend Sourcing Rule Applies to PRCo',
      },
      {
        type: 'paragraph',
        text: 'Under Treas. Reg. §1.937-2(g)(1)(i), only the “possessions source ratio” of dividends paid by PRCo will be treated as income from sources within Puerto Rico. The possessions source ratio is a fraction, the numerator of which is the gross income of the Puerto Rican corporation from sources within Puerto Rico for the 3-year testing period and the denominator of which is the total gross income of the corporation for the 3-year testing period. Treas. Reg. §1.937-2(g)(1)(i)(A).',
      },
      {
        type: 'paragraph',
        text: 'Under Treas. Reg. §1.937-2(g)(1)(i)(A), if PRCo only earns US-source income (or even partly earns US-source income) all or a portion of the dividend would not be Puerto Rican-source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The BFR of PR is Treated as a US Person For Category 2, 3, & 4 Purposes',
      },
      {
        type: 'paragraph',
        text: 'Because all or a portion of dividends paid by PRCo to the BFR of PR would not be Puerto Rican-source income, the BFR of PR should be treated as a US person for Category 2, 3, and 4 purposes. This means that the normal requirements to file for these categories should apply to the BFR of PR. For example, the BFR of PR is required to annually file Form 5471 as a Category 4 filer, and the BFR of PR is required to file as a Category 2 and 3 filer in a year in which he or she acquires a 10% or greater interest in PRCo.',
      },
      {
        type: 'paragraph',
        text: 'The regulations underlying these rules were promulgated in Treasury Decision 9391. The preamble to this Treasury Decision provides in part:',
      },
      {
        type: 'paragraph',
        text: 'The Treasury Department and the IRS believe that the information required under sections 6038 and 6046 is necessary for purposes of determining whether [bona fide residents of Puerto Rico] have a Federal income tax liability. Thus, the final regulations continue to apply the 80/50 conditions of Sec. 1.937-2(g)(1) when defining United States person for purposes of the information reporting requirements under sections 6038 and 6046.',
      },
      {
        type: 'paragraph',
        text: 'The language quoted above from the preamble is consistent with the interpretation that the normal Category 2, 3, and 4 filer rules apply to US citizens owning Puerto Rican corporations that do not have active trades or businesses in Puerto Rico (i.e., corporations that do not meet the 80/50 tests).',
      },
    ],
  }),
  defineArticle({
    slug: 'puerto-rico-residents-capital-losses',
    title: 'Sourcing Capital Losses Generated by a Resident of Puerto Rico',
    description: 'How capital losses are sourced for bona fide residents of Puerto Rico under Act 60.',
    publishedAt: '2023-05-14',
    excerpt: 'Individual A is a US citizen who is a bona fide resident of Puerto Rico with a tax home in Puerto Rico. Under Act 60 (formerly Act 22), capital gains recognized by Individual A are excluded from Puerto Rican taxable income.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Final-Memo-Sourcing-of-Capital-Losses-by-Residents-of-Puerto-Rico-April-19-2023.pdf',
    relatedSlugs: [
      'rules-bona-fide-residents-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Capital Gains', 'Sourcing'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Individual A is a US citizen who is a bona fide resident of Puerto Rico with a tax home in Puerto Rico. Under Act 60 (formerly Act 22), capital gains recognized by Individual A are excluded from Puerto Rican taxable income.',
      },
      {
        type: 'paragraph',
        text: 'Individual A purchases shares of stock after becoming a bona fide resident of Puerto Rico. Individual A sells the shares of stock at a loss (the “Stock Loss”) while he is a bona fide resident of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Issue',
      },
      {
        type: 'paragraph',
        text: 'Should the Stock Loss be allocated against Puerto Rican-source income or non-Puerto Rican-source income?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gains as Foreign-Source Income – 10% Foreign Tax Rule',
      },
      {
        type: 'paragraph',
        text: 'Pursuant to Code §865(a), the source of income from the sale of personal property, such as shares of stock, is determined by the seller’s residence at the time of sale. Code §865(g)(2), however, provides that gains on the sale of personal property by a US citizen or resident alien who, at the time of sale, is a resident of a foreign country are still considered US-source income, unless the person must pay a foreign income tax on the gain of at least 10%.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Symmetrical Rule for Losses',
      },
      {
        type: 'paragraph',
        text: 'When Congress enacted Code §865, it directed the Treasury Department to issue regulations governing the source of losses from the sale of personal property; see Code §865(j)(1). In its explanation of the 1986 TRA, the Joint Committee on Taxation noted that:',
      },
      {
        type: 'paragraph',
        text: '[Congress] anticipated that regulations will provide that losses from sales of personal property generally will be allocated consistently with the source of income that gains would generate but that variations of this principle may be necessary.',
      },
      {
        type: 'paragraph',
        text: 'Losses are not gross income. Therefore, losses are not sourced under the normal income sourcing rules. Instead, losses are allocated against gross income.',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.865-2(a)(1) provides the general rule that losses on stock are allocated against the type of gross income with respect to which gain from a sale of such stock would give rise in the hands of the seller. Treas. Reg. §1.865-2(a)(3)(i) provides rules for US citizens and resident aliens with a foreign tax home, and provides in part:',
      },
      {
        type: 'paragraph',
        text: '[I]n the case of loss with respect to stock that is recognized by a United States citizen or resident alien that has a tax home * * * in a foreign country, the loss shall be allocated to reduce foreign source income if a gain on the sale of the stock would have been taxable by a foreign country and the highest marginal rate of tax imposed on such gains in the foreign country is at least 10 percent.',
      },
      {
        type: 'paragraph',
        text: 'Obviously, losses are not subject to tax. The 10% tax rate is a reference to what the tax rate would have been if there had been a gain instead of a loss. Thus, the regulation provides a symmetrical rule. Losses from sales of stock are allocated against foreign-source income if the gain on the same asset would have been foreign-source income',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Exception to 10% Foreign Tax Rule for Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'For purposes of sourcing gains, Puerto Rico is considered a foreign country. Thus, absent an exception to the 10% foreign tax rule, gains from the sale of personal property by a US citizen who is a bona fide resident of Puerto Rico would be Puerto Rican-source income only if the person had to pay a Puerto Rican income tax on the gain of 10% or more.',
      },
      {
        type: 'paragraph',
        text: 'In Notice 89-40, the IRS announced its decision to waive the 10% foreign tax requirement for sales of personal property by US citizens and resident aliens who are bona fide residents of Puerto Rico. Thus, gains from sales of stock by a US citizen who is a bona fide resident of Puerto Rico are Puerto Rican-source income regardless of the Puerto Rican tax rate on those gains.',
      },
      {
        type: 'paragraph',
        text: 'Notice 89-40 only discusses the source rules for gains. The notice has no discussion of the allocation of losses.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Questions on Stock Losses Recognized by Individual A',
      },
      {
        type: 'paragraph',
        text: 'Here, Individual A is a US citizen who has a tax home in Puerto Rico. Individual A has recognized the Stock Loss. Under Treas. Reg. §1.865-2(a)(3)(i), the Stock Loss is allocated against Puerto Rican-source income if two requirements are met:',
      },
      {
        type: 'list',
        items: [
          'A gain on the sale of the stock would have been taxable in Puerto Rico, and',
          'The highest marginal rate of tax imposed on such gains in Puerto Rico is at least 10%.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A gain on the sale of the stock would have been Puerto Rican-source income. A symmetrical rule would provide that the Stock Loss should be allocated against Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'However, a literal reading of the regulation may provide other than a symmetrical rule. Should the regulation be read literally? If the gain is excluded from Puerto Rican taxable income, would the gain have been “taxable in Puerto Rico”? Even if the gain would have been subject to a zero percent tax rate, is that gain “taxable in Puerto Rico”?',
      },
      {
        type: 'paragraph',
        text: 'Because the 10% foreign tax rule does not apply to gains recognized by bona fide residents of Puerto Rico, should the 10% rule in Treas. Reg. §1.865-2(a)(3)(i) be ignored for bona fide residents of Puerto Rico? In other words, do the regulations imply a symmetrical rule?',
      },
      {
        type: 'paragraph',
        text: 'Individual A is taxed at a zero rate on capital gains because he qualifies under Puerto Rico’s Act 60. Most bona fide residents of Puerto Rico do not qualify for Act 60. These individuals may be taxed in Puerto Rico on capital gains at a rate of more than 10%. Is the required 10% rate specific to Individual A, or is it the rate that generally applies to bona fide residents of Puerto Rico?',
      },
      {
        type: 'paragraph',
        text: 'Notice 89-40 was published in 1989. The stock loss regulations were proposed in 1999 and finalized in 2001.[1] The proposed and final regulations contained a special rule for gains on certain Puerto Rican corporations (not relevant here).[2] Thus, the drafters of the regulations contemplated special rules that apply to bona fide residents of Puerto Rico. The drafters presumably were aware of the existence of Notice 89-40. Yet, no special loss allocation rule was provided for bona fide residents of Puerto Rico where the Puerto Rican tax rate would be below 10%.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Publication 570',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Page 9 of IRS Publication 570 states:',
      },
      {
        type: 'paragraph',
        text: 'If personal property is sold by a bona fide resident of a relevant territory, the gain (or loss) from the sale is treated as sourced within that territory.',
      },
      {
        type: 'paragraph',
        text: 'However, “authoritative sources of Federal tax law are in the statutes, regulations, and judicial decisions and not in such informal publications.” Zimmerman v. Commr., 71 T.C. 367 (1978).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Tentative Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Although not entirely clear, it would seem that a position could be taken that the Stock Loss recognized by Individual A could be allocated against non-Puerto Rican-source income. Possibly even the Stock Loss should be allocated against non-Puerto Rican-source income.',
      },
    ],
  }),
  defineArticle({
    slug: 'puerto-rico-tax-structure',
    title: 'Establishing a Branch in Puerto Rico: An Often Neglected Tax Structure',
    description: 'Why a Puerto Rico branch structure may be preferable to forming a new Puerto Rico LLC for Act 60 participants.',
    publishedAt: '2023-05-14',
    excerpt: 'When moving to Puerto Rico to participate in the Act 60 program, many taxpayers establish a Puerto Rico LLC to conduct operations. In our experience, this is not always the most efficient tax structure, and many times can lead to a multitude of nasty U.S. tax issues that a taxpayer and their advisor have not contemplated. Many times, having your current U.S. company establish a branch in…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Operating-as-a-Branch-in-Puerto-Rico-FINAL.pdf',
    relatedSlugs: [
      'corporate-inversions',
      'pre-move-transfer-property-partnership'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Entity Structuring', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'When moving to Puerto Rico to participate in the Act 60 program, many taxpayers establish a Puerto Rico LLC to conduct operations. In our experience, this is not always the most efficient tax structure, and many times can lead to a multitude of nasty U.S. tax issues that a taxpayer and their advisor have not contemplated. Many times, having your current U.S. company establish a branch in Puerto Rico is the optimal structure and something that should be considered.',
      },
      {
        type: 'paragraph',
        text: 'The article will use a fictional case study to explain and address the issue of establishing a branch operation in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Matt is a U.S. citizen who lives in Nevada and owns 100% of a Nevada corporation (“NevCo”). NevCo has elected to be taxed as an “S” corporation.',
      },
      {
        type: 'paragraph',
        text: 'Matt and NevCo provide consulting services. Over the years Matt and NevCo have developed software (the “Software”) that they use in providing the consulting services. Use of the Software allows Matt and NevCo to charge premium prices to clients. Thus, NevCo is very profitable.',
      },
      {
        type: 'paragraph',
        text: 'Although Matt participated in developing the Software, NevCo is the legal and beneficial owner of the Software. Matt receives a salary from NevCo in an amount that is considered reasonable compensation.',
      },
      {
        type: 'paragraph',
        text: 'Matt has heard about the potential for significant tax savings if he moves his business to Puerto Rico. He is considering becoming a bona fide resident of Puerto Rico and having the NevCo business operate from Puerto Rico. However, Matt is concerned that shutting down NevCo and opening up a new company in Puerto Rico may: (1) trigger the anti-inversion rules of Code §7874, causing the new Puerto Rican company to be taxed as a U.S. company or (2) trigger the deemed royalty rules under Code §367(d) on outbound transfers of intangible property. In addition, Matt is concerned that if he works partly from the U.S. during the year, the U.S. profits of the Puerto Rican company could be subject to triple U.S. taxation.',
      },
      {
        type: 'paragraph',
        text: 'Because of these concerns, Matt decides to keep NevCo and to have NevCo open a branch in Puerto Rico. Matt becomes a bona fide resident of Puerto Rico, and he continues to receive his salary from NevCo. However, he now works full time from Puerto Rico. The Software has also been moved to NevCo’s branch in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Definition of Branch',
      },
      {
        type: 'paragraph',
        text: `There is no single definition of the term “branch.” One definition of “foreign branch” is found in Treas. Reg. §1.367(a)-6T(g)(1), which provides in part: 
[T]he term foreign branch means an integral business operation carried on by a U.S. person outside the United States. Whether the activities of a U.S. person outside the United States constitute a foreign branch operation must be determined under all the facts and circumstances. Evidence of the existence of a foreign branch includes, but is not limited to, the existence of a separate set of books and records, and the existence of an office or other fixed place of business used by employees or officers of the U.S. person in carrying out business activities outside the United States. * * *`,
      },
      {
        type: 'heading',
        level: 3,
        text: 'General Description of the Taxation of S Corporations',
      },
      {
        type: 'paragraph',
        text: 'The First Circuit Court of Appeals in Benenson v. Commr., 887 F.3d 511, n.1 (1st Cir. 2018) had a concise summary of the taxation of C corporations and S corporations:',
      },
      {
        type: 'paragraph',
        text: 'A C corporation is a corporate entity that is required to pay taxes on the income it earns. If a C corporation decides to issue dividends to its shareholders, the shareholders must pay income tax on these dividends. This arrangement exposes shareholder dividends to double taxation – a C corporation’s income is taxed at the corporate level and the portion of the C corporation’s income that is passed on to shareholders is taxed again at the shareholder level. An S corporation, by contrast, is not taxed at the corporate level. Instead, the responsibility for the payment of taxes owed by the S corporation “passes through” to its shareholders, who pay the tax liability in proportion to each shareholder’s pro rata share of the S corporation. An S corporation avoids double taxation on dividends because S-corporation income is only taxed once – at the shareholder level.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of the Income Earned by NevCo',
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced where the services are performed, without regard to the location of the payor, the residence of the taxpayer, the place of contracting, or the place of payment.',
      },
      {
        type: 'paragraph',
        text: 'To the extent Matt and NevCo perform services in Puerto Rico, they will generate income that is Puerto Rican-source income. The source of NevCo’s income “is determined on the basis that most correctly reflects the proper source of the income under the facts and circumstances of the particular case.” In many cases, the facts and circumstances will be such that an apportionment on the time basis is acceptable. Therefore, if NevCo generates all of its income from Puerto Rican activities, all of NevCo’s income would be Puerto Rican-source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Flow Through of NevCo’s Income to Matt',
      },
      {
        type: 'paragraph',
        text: 'Because NevCo is an S corporation, all of its income will flow through to, and be taxable to, Matt. NevCo should not pay any Federal income tax.',
      },
      {
        type: 'paragraph',
        text: 'The income flowing through from NevCo to Matt will retain its character. Thus, the nature of NevCo’s income as Puerto Rican-source income will be retained when the income is included on Matt’s U.S. tax return.',
      },
      {
        type: 'paragraph',
        text: 'Income from sources within Puerto Rico is excludable from an individual’s U.S. gross income if the individual is a bona fide resident of Puerto Rico. Correspondingly, any deductions related to such excluded income are disallowed.',
      },
      {
        type: 'paragraph',
        text: 'The Forms K-1/K-3 that Matt receives from NevCo will need to identify the portion of its gross income that was earned from Puerto Rican sources. In addition, the Forms K-1/K-3 will need to identify what portion of its deductions are related to the Puerto Rican-source income. If Matt or other employees of NevCo work partially from within the U.S., then NevCo will need to perform an analysis (similar to a transfer pricing analysis) to determine the portion of its income that was earned in Puerto Rico and the portion of its income that was earned in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'If all of NevCo’s gross income is Puerto Rican-source income, then Matt can exclude all of NevCo’s gross income from his U.S. taxable income and he will not be able to claim any of NevCo’s business expenses and deductible business expenses. If only a portion of NevCo’s gross income is Puerto Rican-source income, then Matt will use the information on the Forms K-1/K-3 to determine how much of NevCo’s gross income flowing through to him can be excluded from his gross income and how much of NevCo’s expenses must be disallowed.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Matt’s Salary',
      },
      {
        type: 'paragraph',
        text: 'Matt is an employee performing services on behalf of NevCo. For employees, the general rule is that the source of compensation is determined by comparing the number of days of performance of the personal services within the U.S. to his or her total number of days of performance of personal services during the year. Thus, if Matt’s total work days during the year was 250, and he worked from the U.S. during 80 of those days, then 32% (80 / 250) of his total compensation for the year would generally be treated as U.S.-source income. Thus, Matt could not exclude 32% of his salary from U.S. taxable income under Code §933(1). Only 68% of his salary could be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 8858',
      },
      {
        type: 'paragraph',
        text: 'NevCo will be required to annually file Form 8858, Information Return of U.S. Persons With Respect to Foreign Disregarded Entities (FDEs) and Foreign Branches (FBs). On the Form 8858, NevCo will disclose the activities of its Puerto Rican branch.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Benefits of the Puerto Rican Branch Structure',
      },
      {
        type: 'paragraph',
        text: 'Under the Puerto Rican branch structure, Matt must be a bona fide resident of Puerto Rico. The branch structure allows Matt to avoid the anti-inversion rules of Code §7874 because he has not caused a foreign corporation to acquire substantially all of the assets of a domestic corporation.',
      },
      {
        type: 'paragraph',
        text: 'The deemed royalty rules of Code §367(d) are avoided because the Software has not been transferred to a foreign corporation.',
      },
      {
        type: 'paragraph',
        text: 'If Matt works partly from the U.S. during the year, NevCo’s U.S.-source profits are not subject to triple U.S. taxation. In contrast, if Matt had formed a Puerto Rican corporation and worked partly from within the U.S., the portion of the Puerto Rican corporation’s profits attributable to the U.S. activities could be subject to triple U.S. taxation (U.S. corporate income tax, U.S. branch profits tax, and U.S. individual income tax on the receipt of U.S.-source dividends).',
      },
      {
        type: 'paragraph',
        text: 'Lastly, Matt and NevCo are able to avoid various U.S. tax information reporting obligations. U.S. citizens that own certain foreign corporations are required to file Form 5471 with respect to the foreign corporation. Foreign corporations that are doing business in the U.S. generally must file Form 1120-F and Form 5472. The penalties for failing to file these forms can be substantial. By avoiding the requirement to file these forms, the risk of penalties is removed.',
      },
    ],
  }),
  defineArticle({
    slug: 'interest-expense-allocation-bona-fide-residents-of-puerto-rico',
    title: 'Interest Expense Allocation For Bona Fide Residents of Puerto Rico',
    description: 'Interest expense allocation rules applicable to bona fide residents of Puerto Rico.',
    publishedAt: '2023-03-25',
    excerpt: 'U.S. income tax is generally imposed on taxable income. Taxable income is defined as gross income minus certain deductions.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Interest-Expense-Allocation-Memo-Feb-23-2023-FINAL.pdf',
    relatedSlugs: [
      'rules-bona-fide-residents-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Deductions'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Taxable Income – Gross Income Less Expenses',
      },
      {
        type: 'paragraph',
        text: 'U.S. income tax is generally imposed on taxable income. Taxable income is defined as gross income minus certain deductions.',
      },
      {
        type: 'paragraph',
        text: 'For example, business income of an individual starts with gross income. The gross income can then be reduced by certain trade or business expenses, interest expense, losses, bad debt expense, depreciation, etc.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Exempt/Excluded Income & Related Expenses',
      },
      {
        type: 'paragraph',
        text: 'At times, U.S. tax law allows certain gross income to be excluded from taxable income. Bona fide residents of Puerto Rico can exclude gross income derived from sources within Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'When gross income is excluded from taxable income, a fundamental principle of U.S. tax law is that expenses related to that excluded income cannot be claimed as deductions. Code §265(a) provides that no deduction is allowed for expenses allocable to income that is exempt from income taxes. Code §911(d)(6) provides that no deduction is allowed to the extent the deduction is properly allocable to amounts excluded from gross income under Code §911(a).',
      },
      {
        type: 'paragraph',
        text: 'Similarly, Code §933(1) provides that a bona fide resident of Puerto Rico is not allowed deductions allocable to amounts excluded from gross income under Code §933.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Allocation of Expenses',
      },
      {
        type: 'paragraph',
        text: 'Only deductions “allocable to” amounts excluded from taxable income must be disallowed. Thus, when a taxpayer has some excluded income and some taxable income, it is necessary to perform an allocation of expenses between excluded income and taxable income.',
      },
      {
        type: 'paragraph',
        text: 'The regulations under Code §861 provide extensive rules for allocating expenses between U.S. source income and foreign source income. The Treasury Department has adopted these Code §861 expense allocation rules for multiple purposes, including for purposes of the exclusion of income under Code §933.',
      },
      {
        type: 'paragraph',
        text: 'Thus, bona fide residents of Puerto Rico who have both excluded income and taxable income must allocate expenses between those two categories of income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Interest Expense Allocations Generally',
      },
      {
        type: 'paragraph',
        text: 'The interest expense allocation rules are primarily based on the concept that money is fungible and that interest expense is attributable to all activities and property regardless of any specific purpose for incurring an obligation on which interest is paid. Following this fungibility concept, the regulations provide that interest expense is considered related to all income-producing activities and assets of the taxpayer.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Interest Expense Allocation Rules for Individuals',
      },
      {
        type: 'paragraph',
        text: 'Individuals generally allocate interest expense based on the type of interest expense incurred. Interest expense of an individual must first be put into the following categories:',
      },
      {
        type: 'list',
        items: [
          'Trade or business interest',
          'Investment interest',
          'Passive activity interest',
          'Qualified residence and personal interest.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Business interest is allocated using an asset method by reference to the individual’s business assets. Investment interest is allocated on the basis of the individual’s investment assets. Passive activity interest is allocated on the basis of the individual’s passive activity assets. Qualified residence interest is allocated under a gross income method.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Asset Method & Characterization of Assets',
      },
      {
        type: 'paragraph',
        text: 'The asset method applies to business, investment, and passive activity interests. In order to perform the necessary computations, the individual must determine the average tax basis of his or her: (i) worldwide business assets, (ii) worldwide investment assets, and (iii) worldwide passive activity assets. The average is computed on the basis of the values of assets at the beginning and end of the year.',
      },
      {
        type: 'paragraph',
        text: 'The assets are characterized according to the type of income that they generate, have generated, or may reasonably be expected to generate.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sub-Characterization of Assets (By Source)',
      },
      {
        type: 'paragraph',
        text: 'As mentioned above, the Code §861 expense allocation rules are used for multiple different purposes. Here, our focus is on bona fide residents of Puerto Rico. We are trying to determine how much otherwise deductible interest expense should be allocated to income that is excluded under Code §933. To the extent the interest expense is allocated to excluded income, it will be disallowed as a deduction.',
      },
      {
        type: 'paragraph',
        text: 'After we have determined the average tax basis of the assets in the three categories (business, investment, and passive activity), we must then subdivide those categories by the source of income:',
      },
      {
        type: 'list',
        items: [
          'Assets that generate Puerto Rican-source income, and',
          'Assets that generate non-Puerto Rican-source income',
        ],
      },
      {
        type: 'paragraph',
        text: 'Puerto Rican-source income is referred to in the regulations as the “statutory grouping” of gross income, and non-Puerto Rican-source income is referred to as the “residual grouping” of gross income.',
      },
      {
        type: 'paragraph',
        text: 'Once we know the assets that generate Puerto Rican-source and non-Puerto Rican-source income for each category, we can perform the interest expense allocation.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example – Business Interest Expense & Business Assets',
      },
      {
        type: 'paragraph',
        text: 'Fred is a bona fide resident of Puerto Rico. Fred has gross business income of $1,000 and business interest expense of $100. The gross business income from Puerto Rican sources is $500. Thus, Fred is able to exclude $500 of the gross business income from his U.S. taxable income. However, the expenses related to this income must be disallowed.',
      },
      {
        type: 'paragraph',
        text: 'Fred cannot use an income method to allocate the business interest expense. Instead, Fred must use the asset method. The average tax basis of Fred’s business assets is $10,000. The average tax basis of the business assets that generate Puerto Rican-source income is $8,000. The remaining $2,000 of business assets generate non-Puerto Rican-source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Here is the formula to allocate the business interest expense to Puerto Rican-source income:',
      },
      {
        type: 'paragraph',
        text: 'The portion of the $100 of business interest expense that is allocated to Puerto Rican-source income is computed as follows:',
      },
      {
        type: 'paragraph',
        text: 'Thus, Fred must disallow a deduction for $80 of the business interest expense. Even though only 50% of Fred’s business gross income could be excluded from U.S. taxable income, he had to disallow 80% of his business interest expense because the tax basis of his Puerto Rican business assets was 80% of the tax basis of his total business assets.',
      },
      {
        type: 'paragraph',
        text: 'If Fred has investment interest expense or passive activity interest expense, he would perform similar computations for those categories of interest expense.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Partnerships – General Partners & 10% or Greater Limited Partners (Aggregate Rule)',
      },
      {
        type: 'paragraph',
        text: 'Individuals who are general partners, and individuals who are limited partners owning 10% or more of the partnership, apply an “aggregate rule”. That is, the individuals include their share of the partnership’s interest expense and their share of the partnership’s assets in applying the interest expense allocation rules.',
      },
      {
        type: 'paragraph',
        text: 'Although the example above did not mention it, Fred was a 20% limited partner in a partnership (USPS). Because he owned more than 10% of USPS, he included his share of USPS’s business interest expense and his share of USPS’s business assets in performing the interest expense allocations.',
      },
      {
        type: 'paragraph',
        text: 'Fred’s total business interest expense was $100. This amount included his share of the business interest expense incurred by USPS. The average tax basis of Fred’s business assets was $10,000. This amount included his share of the business assets held by USPS. When USPS provided Fred his Form K-3 at the end of the year, it included all the information Fred needed to perform his interest expense allocations, including what portion of the USPS assets generated U.S.-source income and what portion generated Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'As indicated above, if Fred has investment interest expense or passive activity interest expense, he would perform similar calculations for those categories of interest expense with respect to partnerships he owns.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Partnerships – Less Than 10% Limited Partners (Entity Rule & Income Method)',
      },
      {
        type: 'paragraph',
        text: 'An individual who is a limited partner and owns less than 10% of the partnership applies an “entity rule”. In this case, the individual allocates his or her share of the partnership’s interest expense based on his or her share of the partnership gross income. Here, interest expense is not allocated using an asset method. Instead, the interest expense is allocated using an income method.',
      },
      {
        type: 'paragraph',
        text: 'Continuing the example above, let’s say that the facts are the same except that Fred also owns a 5% interest in a partnership (USLP) in which he is a limited partner. Fred’s share of business interest expense incurred by USLP is $20. USLP earns only business income. USLP earns $90 of gross income from U.S.-sources and $10 of gross income from Puerto Rican-sources.',
      },
      {
        type: 'paragraph',
        text: 'Here is the formula to allocate Fred’s portion of the USLP business interest expense to Puerto Rican-source income:',
      },
      {
        type: 'paragraph',
        text: 'Using the income method, Fred’s interest expense allocation with respect to USLP would be computed as follows:',
      },
      {
        type: 'paragraph',
        text: 'In this case, Fred will allocate $2 of his share of USLP’s business interest expense to Puerto Rican-source income, and this $2 of business interest expense will not be deductible. The remaining $18 of business interest expense that flowed through from USLP will be allowed as a deduction.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Asset Method Example Continued',
      },
      {
        type: 'paragraph',
        text: 'Although Fred’s share of the USLP business interest expense was allocated using the income method, he generally allocates business interest expense using the asset method.',
      },
      {
        type: 'paragraph',
        text: 'When performing the asset method allocation, Fred must consider his ownership in the USLP partnership as an asset. Consistent with the entity rule, Fred does not take into account his share of USLP’s gross assets. Instead, Fred takes into account his tax basis in the partnership interest. However, the tax basis must be reduced to the extent that his basis consists of liabilities taken into account under Code §752.',
      },
      {
        type: 'paragraph',
        text: 'Let’s say that Fred’s tax basis in the USLP partnership is $1,100. Fred’s basis includes his share of $500 of USLP liabilities. After reducing the basis in his partnership interest by his share of the liabilities, the “net” tax basis is $600 (1,100 – 500). It is this $600 that Fred treats as an asset in performing the asset method business interest expense allocations.',
      },
      {
        type: 'paragraph',
        text: 'If we assume that the $600 was not already included in Fred’s assets described above, then the tax basis in his worldwide business assets would be $10,600 (10,000 + 600). Fred allocates the $600 between US-source income and Puerto Rican-source income based on the gross income of USLP. Since USLP earns 90% of its gross income as U.S.-source income and 10% of its gross income as Puerto Rican-source income, only $60 (10% X 600) will be treated as a Puerto Rican asset.',
      },
      {
        type: 'paragraph',
        text: 'Again, here is the formula to allocate the business interest expense to Puerto Rican-source income using the asset method:',
      },
      {
        type: 'paragraph',
        text: 'With the addition of Fred’s interest in USLP, his asset method interest expense allocation would be computed as follows:',
      },
      {
        type: 'paragraph',
        text: 'In this case, Fred must disallow a deduction for $76 of the business interest expense.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'S Corporations',
      },
      {
        type: 'paragraph',
        text: 'For certain purposes, an S corporation is treated as a partnership. However, for purposes of Code §933, an S corporation is not considered a partnership. Therefore, a bona fide resident of Puerto Rico would not apply the partnership aggregate rule with respect to an S corporation. Instead, the individual would (1) determine his or her average tax basis in the shares of the S corporation, (2) determine the type of income earned by the S corporation (business, investment, passive activity), and (3) determine the source of income earned by the S corporation. These amounts would then be used in performing the asset method interest expense allocations.',
      },
    ],
  }),
  defineArticle({
    slug: 'errors-in-irs-publication-1321',
    title: 'Errors in IRS Publication 1321 Regarding the Allocation and Apportionment of Charitable Contributions for Residents of Puerto Rico',
    description: 'Analysis of errors in IRS Publication 1321 affecting residents of Puerto Rico.',
    publishedAt: '2023-03-25',
    excerpt: 'Bob is a U.S. citizen and bona fide resident of Puerto Rico for the entire year. This year Bob earned $24,000 from Puerto Rico sources and $96,000 from U.S. sources. All of the income earned was compensation for services. Bob itemizes deductions, and included in the itemized deductions are $5,000 of charitable deductions (cash contributions) to a U.S charity.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2023/03/Errors-in-IRS-Publication-1321.pdf',
    relatedSlugs: [
      'rules-bona-fide-residents-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Facts',
      },
      {
        type: 'paragraph',
        text: 'Bob is a U.S. citizen and bona fide resident of Puerto Rico for the entire year. This year Bob earned $24,000 from Puerto Rico sources and $96,000 from U.S. sources. All of the income earned was compensation for services. Bob itemizes deductions, and included in the itemized deductions are $5,000 of charitable deductions (cash contributions) to a U.S charity.',
      },
      {
        type: 'paragraph',
        text: 'IRS Publication 1321 indicates that Bob can only deduct $4,000 of the $5,000 on Schedule A. This is computed as $5,000 x (96,000 / 120,000).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Issue',
      },
      {
        type: 'paragraph',
        text: 'Is IRS Publication 1321 wrong? In other words, can Bob deduct the full $5,000 on Schedule A?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Yes, IRS Publication 1321 is wrong. Bob can deduct the full $5,000 on Schedule A.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Discussion',
      },
      {
        type: 'paragraph',
        text: 'Treas. Reg. §1.937-2(b) provides that unless an exception applies, the principles of Code §§861 through 865 and the regulations under those provisions are applied in determining the gross and the taxable income from sources within and without the relevant possession, in discussing the allocation and apportionment of expenses under Treas. Reg. §1.861-8, the Tax Court recently stated in Aptargroup, Inc. v. Commr.',
      },
      {
        type: 'paragraph',
        text: 'In general, expenses are allocated and apportioned on the basis of the factual relationship of the expense to gross income. Expenses are allocated to the class of gross income to which they definitely relate. Some expenses are not definitely related to a class of gross income or are related to all gross income and thus must be ratably allocated to all gross income. Next, if necessary, expenses are apportioned between the statutory and residual groupings. [footnotes and citations omitted]',
      },
      {
        type: 'paragraph',
        text: 'Thus, under Treas. Reg. §1.861-8 expenses are first allocated to a class of gross income. Then expenses are apportioned between the statutory and residual groupings within that class of gross income.',
      },
      {
        type: 'paragraph',
        text: 'Bob only earns income from services. Therefore, the only relevant class of gross income should be “compensation for services.”',
      },
      {
        type: 'paragraph',
        text: 'The gross income that can be excluded from Bob’s income under Code §933 is the statutory grouping, and all other income is the residual grouping. Only Bob’s Puerto Rican-source income can be excluded from income under Code §933. Therefore, $24,000 of Bob’s gross income (the Puerto Rico-source gross income) is in the statutory grouping. In addition, $96,000 of Bob’s gross income (the US-source gross income) is in the residual grouping.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Treas. Reg. §1.861-8(e)(12)(i) provides in full:',
      },
      {
        type: 'paragraph',
        text: 'The deduction for charitable contributions that is allowed under sections 170, 873(b)(2), and 882(c)(1)(B) is definitely related and allocable to all of the taxpayer’s gross income. The deduction allocated under this paragraph (e)(12)(I)',
      },
      {
        type: 'paragraph',
        text: 'shall be apportioned between the statutory grouping (or among the statutory groupings) of gross income and the residual grouping on the basis of the relative amounts of gross income from sources in the United States in each grouping.',
      },
      {
        type: 'paragraph',
        text: 'A review of the statute and regulations did not reveal any exceptions to the rule in Treas. Reg. §1.861-8(e)(12)(i) for bona fide residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'The apportionment for charitable contributions is based on “relative amounts.” That is, the deduction is apportioned “on the basis of the relative amounts of gross income from sources in the United States in each grouping.”',
      },
      {
        type: 'paragraph',
        text: 'None of the gross income in the statutory grouping is US-source income. In addition, all of the gross income in the residual grouping is US-source income. In calculating the amount apportioned to the statutory grouping, the formula would be $5,000 x (0 / 100). Thus, none of the charitable deductions would be apportioned to the statutory grouping of gross income.',
      },
      {
        type: 'paragraph',
        text: 'In contrast, in calculating the amount apportioned to the residual grouping, the formula would be $5,000 x (100 / 100). Thus, all of the charitable deductions would be apportioned to the residual grouping of gross income.',
      },
      {
        type: 'paragraph',
        text: 'This would mean that all $5,000 of the charitable contribution should be apportioned to the US-source income (the residual grouping). In other words, all $5,000 of the charitable contribution should be allowed as a deduction on Schedule A.',
      },
      {
        type: 'paragraph',
        text: 'This interpretation is consistent with the instructions to Schedule K-2 (“Charitable contribution deductions are apportioned solely to U.S. source gross income.”) and with Schedule K-2 itself, which only allows input for charitable contributions being allocated or apportioned against US-source income.',
      },
      {
        type: 'paragraph',
        text: 'An older version of Treas. Reg. §1.861-8 provided for the apportionment of charitable contributions between the statutory and residual groupings using a ratable apportionment on the basis of gross income (similar to the approach in IRS Publication 1321). However, in 2004, the regulation was changed “to ensure that a taxpayer is not discouraged from making a charitable contribution.”',
      },
    ],
  }),
  defineArticle({
    slug: 'us-withholding-on-payments-to-puerto-rican-entities',
    title: 'Compliance Alert: U.S. Withholding on Payments to Puerto Rican Persons/Entities & Other Information Reporting Requirements',
    description: 'U.S. withholding and information reporting on payments to Puerto Rican service providers.',
    publishedAt: '2022-06-20',
    excerpt: 'Many Puerto Rico Act 60 companies and individuals holding export service decrees receive service fees from U.S.-based companies. The U.S. companies paying these fees may be unpleasantly surprised when the IRS assesses them with a 30% tax on the total fees paid to the Puerto Rican service provider for failure to comply with U.S. information reporting and withholding requirements.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/US-Withholding-Tax-on-Payments-to-PR-Persons-and-Entities-April-22-2022-1.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Withholding', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Compliance Alert- U.S. Withholding on Payments to Puerto Rican Persons/Entities & Other Information Reporting Requirements',
      },
      {
        type: 'paragraph',
        text: 'Many Puerto Rico Act 60 companies and individuals holding export service decrees receive service fees from U.S.-based companies. The U.S. companies paying these fees may be unpleasantly surprised when the IRS assesses them with a 30% tax on the total fees paid to the Puerto Rican service provider for failure to comply with U.S. information reporting and withholding requirements.',
      },
      {
        type: 'paragraph',
        text: 'A large area of noncompliance that we see on a regular basis involves the failure by U.S. companies to obtain necessary tax reporting documentation from their Puerto Rico service providers. This documentation is crucial for the U.S companies to determine their U.S. information reporting and withholding requirements on payments to their Puerto Rico service providers. The sections of the Internal Revenue Code that deal with the information and withholding requirements for payments to non-U.S. persons are incredibly complex and confusing. This article attempts to break down, in layman’s terms, the various information reporting and withholding requirements for those U.S.-based companies or persons that pay fees to Puerto Rico-based companies or persons.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Background of a Typical Situation',
      },
      {
        type: 'paragraph',
        text: 'USCo, a U.S. C corporation, makes payments to two Puerto Rican corporations: PRCo1 and PRCo2. PRCo1 and PRCo2 are not financial institutions and are each wholly owned by bona fide residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'The payments to PRCo1 are for services that PRCo1 wholly performs in Puerto Rico. PRCo1 is not engaged in a U.S. trade or business and is not required to file a U.S. tax return.',
      },
      {
        type: 'paragraph',
        text: 'The payments to PRCo2 are for services that PRCo2 partly performs in Puerto Rico and partly performs in the U.S. PRCo2 is engaged in a U.S. trade or business and annually files Form 1120-F to pay U.S. corporate income tax and U.S. branch profits tax on its U.S. effectively connected income.',
      },
      {
        type: 'paragraph',
        text: 'USCo also makes payments to Brad, a U.S. citizen who is a bona fide resident of Puerto Rico. Brad is not an employee of USCo. Instead, Brad is an independent contractor. The payments to Brad are for services that he performs entirely in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'PRCo1, PRCo2, and Brad are not related to USCo or to each other.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 1099 Reporting of Payments for Services to U.S. Persons',
      },
      {
        type: 'paragraph',
        text: 'Code §6041(a) generally requires all persons engaged in a trade or business who make payments in the course of the trade or business to another person of various types of income of $600 or more in any year to file an information return (typically Form 1099) with the IRS setting forth the amount of the income and the name and address of the recipients of the payments.',
      },
      {
        type: 'paragraph',
        text: 'The recipient’s taxpayer identification number (“TIN”) generally must be included on the Form 1099. The payor generally requests that the recipient complete Form W-9, Request for Taxpayer Identification Number and Certification.',
      },
      {
        type: 'paragraph',
        text: 'If the recipient refuses to provide their TIN, the payor generally must backup withhold on the payments. Under current law, the backup withholding rate is 28%.',
      },
      {
        type: 'paragraph',
        text: 'Payments to foreign recipients generally do not need to be reported on Form 1099. However, payments to foreign recipients may be subject to a separate withholding and reporting regime (discussed below). PRCo1 and PRCo2 are foreign persons. Therefore, Form 1099 reporting and backup withholding would not apply to USCo’s payments to them.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo Payments to Brad',
      },
      {
        type: 'paragraph',
        text: 'Brad is a U.S. citizen. Therefore, he is a U.S. person. This means that USCo should ask Brad to complete a Form W-9.',
      },
      {
        type: 'paragraph',
        text: 'Although USCo generally reports payments to independent contractors on Form 1099, because Brad is a bona fide resident of Puerto Rico and because all of the services are performed from Puerto Rico, USCo is not required to report the payment to Brad on Form 1099. Treas. Reg. §1.6049-5(c)(5)(ii) provides:',
      },
      {
        type: 'paragraph',
        text: 'U.S. payors are not required to report on Form 1099 income that is from sources within a possession of the United States and that is exempt from taxation under section 931, 932, or 933 * * *. * * * [A] U.S. payor may treat the beneficial owner as a bona fide resident of the possession of the United States from which the income is sourced if, prior to payment of the income, the U.S. payor can reliably associate the payment with valid documentation that supports the claim of residence in the possession of the United States from which the income is sourced. * * *',
      },
      {
        type: 'paragraph',
        text: 'Because Brad is a bona fide resident of Puerto Rico and he earns the income from within Puerto Rico, the income is Puerto Rican-source income that can be excluded from Brad’s U.S. taxable income under Code §933. Thus, if USCo obtains from Brad valid documentation that supports his claim of residence in Puerto Rico and that the income is Puerto Rican-source income, then USCo does not need to report the income to Brad on Form 1099.',
      },
      {
        type: 'paragraph',
        text: 'The IRS has not issued guidance on how to obtain such documentation. A statement attached to the Form W-9 (signed under penalties of perjury) that certifies Brad is a bona fide resident of Puerto Rico and that all of the income is from services that take place in Puerto Rico should be sufficient documentation for USCo to avoid 1099 reporting of the payments.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo Payments to PRCo1',
      },
      {
        type: 'paragraph',
        text: 'Code §§1441 and 1442 generally place a duty on all persons having the control, receipt, custody, disposal, or payment of certain income items of foreign persons to withhold 30% U.S. tax on such income items. The income items include gross income from services where the services take place in the U.S. (i.e., where the income is U.S.-source income).',
      },
      {
        type: 'paragraph',
        text: 'The required rate of withholding is often reduced by income tax treaties. However, the U.S. does not have an income tax treaty with Puerto Rico. Therefore, U.S.-source income paid to a Puerto Rican corporation is generally subject to a 30% U.S. withholding tax.',
      },
      {
        type: 'paragraph',
        text: 'The payments made by USCo to PRCo1 are for services wholly performed in Puerto Rico. Consequently, all of the income that PRCo1 earns from USCo is Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'Because the payments are not U.S.-source income, as long as PRCo1 provides a Form W-8BEN-E to USCo (prior to the payment), USCo should not need to withhold on the payments it makes to PRCo1.',
      },
      {
        type: 'paragraph',
        text: 'USCo does not need to report the payments to PRCo1 on Form 1042 or 1042-S, again because the payments are not U.S.-source income.',
      },
      {
        type: 'paragraph',
        text: 'USCo does not need to withhold U.S. tax under Chapter 4 of the Internal Revenue Code as long as PRCo1 indicates on the W-8BEN-E that its Chapter 4 status (Line 5 of Form W-8BEN-E) is an “Excepted Territory NFFE.” PRCo1 is an excepted territory non-financial foreign entity (“NFFE”) because it is incorporated in Puerto Rico and it is wholly owned by bona fide residents of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo Payments to PRCo2',
      },
      {
        type: 'paragraph',
        text: 'The payments made by USCo to PRCo2 are for services partly performed in Puerto Rico and partly performed in the U.S. Here, not all of the income paid by USCo to PRCo2 is Puerto Rican-source income. Only the portion of the services income earned from activities performed in Puerto Rico is considered Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'By signing Form W-8BEN-E, PRCo2 certifies that the income being received is “not effectively connected with the conduct of a trade or business in the United States”. A portion of PRCo2’s income is U.S. effectively connected income (“ECI”). Thus, PRCo2 cannot simply provide a Form W-8BEN-E to USCo to avoid withholding.',
      },
      {
        type: 'paragraph',
        text: 'Under the regulations related to Form W-8, the Form W-8 is generally known as the “withholding certificate”, the U.S. payor is known as the “withholding agent”, and the recipient of the income is known as the “beneficial owner” of the income. These regulations contemplate providing two withholding certificates (a W-8ECI for ECI and a W-8BEN-E for non-ECI). Treas. Reg. §1.1441-1(e)(2)(i) provides in part:',
      },
      {
        type: 'paragraph',
        text: '* * * If the beneficial owner receives more than one type of payment from a single withholding agent, the beneficial owner may have to submit more than one withholding certificate to the single withholding agent for the different types of payments * * *. For example, if a beneficial owner claims that some but not all of the income it receives is effectively connected with the conduct of a trade or business in the United States, it may be required to submit two separate withholding certificates, one for income that is not effectively connected and one for income that is so connected. * * *',
      },
      {
        type: 'paragraph',
        text: 'PRCo2 is the beneficial owner. USCo is the withholding agent. Because PRCo2 is receiving more than one type of payment from USCo, PRCo2 can submit two W-8s for the different types of payments. For example, PRCo2 can provide a Form W-8ECI for the income it receives from USCo that is ECI, and PRCo2 can provide a Form W-8BEN-E for the income it receives from USCo that is not ECI.',
      },
      {
        type: 'paragraph',
        text: 'USCo would not need to withhold on the U.S.-source income that is ECI, and USCo would not need to withhold on the non-U.S. source income that is not ECI.',
      },
      {
        type: 'paragraph',
        text: 'The regulation does not indicate that two separate payments need to be made (e.g., one for ECI and one for non-ECI). However, it would make sense for PRCo2’s invoices to USCo each month to identify the portion of the invoice that relates to ECI and the portion that relates to non-ECI. This approach informs USCo as to what portion of the services were ECI and what portion of the services were not ECI.',
      },
      {
        type: 'paragraph',
        text: 'USCo needs to report the U.S.-source payments (i.e., the ECI portion) to the IRS on Forms 1042 and 1042-S.',
      },
      {
        type: 'paragraph',
        text: 'USCo does not need to withhold U.S. tax under Chapter 4 of the Internal Revenue Code as long as PRCo2 indicates on the W-8BEN-E that its Chapter 4 status (Line 5 of Form W-8BEN-E) is an “Excepted Territory NFFE.” PRCo2 is an excepted territory NFFE because it is incorporated in Puerto Rico and it is wholly owned by bona fide residents of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'USCo Is Liable for the Tax If It Fails to Withhold',
      },
      {
        type: 'paragraph',
        text: 'A taxpayer, who is required to withhold tax under Code §1441 on a payment to a foreign person, is itself liable for the tax if it fails to withhold. Thus, if USCo is required to withhold on payments to PRCo2, but USCo fails to withhold the tax, USCo will be liable for the tax itself.',
      },
      {
        type: 'paragraph',
        text: 'Not only can USCo be liable to the tax itself, but USCo can also be subject to a 25% penalty for failing to file Form 1042 and a 10% penalty for failing to deposit the tax.',
      },
    ],
  }),
  defineArticle({
    slug: 'market-sourcing',
    title: 'Sourcing of Income to California and "Economic Nexus" Consequences for Nonresidents',
    description: 'California sourcing rules and economic nexus consequences for nonresident business owners.',
    publishedAt: '2022-05-23',
    excerpt: 'When it comes to the taxation of nonresidents, the California tax agencies—the Franchise Tax Board and the Office of Tax Appeals (“OTA”)—have held that a nonresident business owner, who never set foot in California (hereafter, the “State”), owed personal income taxes to the State. This is based on application of rules that look to the place where customers receive the benefit of services, not…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Market-Sourcing-Article-Final-Draft-May-5-2022.pdf',
    relatedSlugs: [
      'rules-bona-fide-residents-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['State Tax', 'California', 'Sourcing'],
    content: [
      {
        type: 'paragraph',
        text: 'When it comes to the taxation of nonresidents, the California tax agencies—the Franchise Tax Board and the Office of Tax Appeals (“OTA”)—have held that a nonresident business owner, who never set foot in California (hereafter, the “State”), owed personal income taxes to the State. This is based on application of rules that look to the place where customers receive the benefit of services, not where services are performed. These rules differ greatly from the state sourcing rules that apply to income of employees from employment.',
      },
      {
        type: 'paragraph',
        text: 'Economic nexus—the idea that a person may owe taxes to a state even if not physically present—is not new, and California has applied this concept since 2011. This article addresses California’s sourcing rules and the economic nexus thresholds applicable to nonresident businesses and individual business owners who operate through sole proprietorships or flow-through entities, such as LLCs, partnerships, or S corporations. As we will show, a nonresident individual may have nexus and owe taxes to California if that individual generates even $1 of California‑source income under the State’s personal income tax laws.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Case Study – The Problem',
      },
      {
        type: 'paragraph',
        text: 'Max and Jane live and work in Puerto Rico. For federal tax purposes, they are bona fide residents of Puerto Rico. For California tax purposes, they are nonresidents.',
      },
      {
        type: 'paragraph',
        text: 'Max and Jane are 50/50 owners of a Puerto Rico Corporation (“PRCo”) that qualifies for Puerto Rico “Act 60” tax benefits. PRCo is an LLC that is taxed as a corporation for both U.S. and Puerto Rico tax purposes. PRCo bills its customers for the services that Max and Jane perform entirely in Puerto Rico as employees of PRCo. In 2021, PRCo generated $9 million in consulting fee income from its primary customer, who is headquartered in California.',
      },
      {
        type: 'paragraph',
        text: 'PRCo just received a notice from California, indicating that the Franchise Tax Board will be opening an audit on the company to determine whether, and how much, it owes in California taxes for income generated in 2021. Max and Jane are bewildered and simply can’t understand why California would think it can tax income from a foreign corporation that performed work solely in Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Another change in California law, effective for corporations beginning in 2011, established property, payroll, and receipts thresholds (“factor‑presence thresholds”) that would constitute “doing business” in the State under California’s Corporate Tax Code. With this amendment, the Legislature provided clear guidelines: corporations with activities exceeding these factor‑presence thresholds would be “doing business” within California.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The California factor‑presence thresholds, as first enacted and as they currently stand, are these:',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Connections with California',
      },
      {
        type: 'paragraph',
        text: '2011',
      },
      {
        type: 'paragraph',
        text: '2021',
      },
      {
        type: 'paragraph',
        text: 'To the extent a corporation’s only connections with California were the presence of California customers, the change to market sourcing, whether elected in 2011 or 2012, or required in 2013 and later years, would implicate an economic presence and consideration of the “doing business” thresholds.',
      },
      {
        type: 'paragraph',
        text: 'For example, if a taxpayer (PRCo in our example) sold its services to purchasers that “received the benefit of the services” in California, and these sales exceeded either $637,252 or 25% of a taxpayer’s total sales made everywhere, that taxpayer would be doing business in California even if the business had no other presence (no facilities, property, or employees) in the State.',
      },
      {
        type: 'list',
        items: [
          'What if PRCo Elected to be Taxed as a Partnership for U.S. Tax Purposes?',
        ],
      },
      {
        type: 'paragraph',
        text: 'The factor‑presence thresholds do not apply to all taxpayers. For example, the factor-presence thresholds do not apply to nonresident business owners (i.e., partners in partnerships or sole proprietors). That is because California places the factor‑presence thresholds to identify when corporations are “doing',
      },
      {
        type: 'paragraph',
        text: 'business” in Part 11 of the Revenue and Taxation Code (the Corporation Tax Law). But individuals are subject to tax under Part 10 of the Revenue and Taxation Code (the Personal Income Tax Law), a different taxing system using different standards.',
      },
      {
        type: 'paragraph',
        text: 'California’s market sourcing rules expand the potential for nonresident individuals, who own interests in partnerships or other flow-through entities, to have not only an economic presence in California, but a taxable economic presence in California.',
      },
      {
        type: 'list',
        items: [
          'The Economic Nexus Standard Applicable to Nonresident Individual Business Owners and the Change in Sourcing of Sales',
        ],
      },
      {
        type: 'paragraph',
        text: 'In general, businesses with either property or employees (“payroll”) within California generally have nexus under good, old-fashioned physical presence nexus. Indeed, prior to the enactment of market-sourcing rules, businesses selling services or intangibles would have had income sourced to California if income-producing activities were conducted in the State. Under the historic rules, the performance of income producing activities in California led to the sourcing of income to the State.',
      },
      {
        type: 'paragraph',
        text: 'It is the change to market sourcing applicable for most kinds of businesses in 2013 that presents traps for the unwary. For this, the OTA decision in the Appeal of Blair S. Bindley is instructive. In reviewing the California taxes owed by the nonresident independent contractor, the OTA’s analysis was as follows:',
      },
      {
        type: 'list',
        items: [
          'First, nonresident individuals are taxable to the extent of their California source income.',
          'Second, unlike the corporate tax law, the personal income tax law provides no economic nexus minimum thresholds, which means that even de minimis activities conducted entirely outside California may result in the generation of California source income.',
          'Third, the sourcing of the multistate income of nonresident individual business owners is addressed in large part by regulations enumerated under section 17951 of the Revenue and Taxation Code. To the extent income is generated from the conduct of a business, trade, or profession, the regulation addressing the method used to apportion that income is section 17951-4 of the California Code of Regulations (hereafter, “Regulation”). Under Regulation section 17951-4, the personal income tax laws apply certain corporate apportionment rules *including market sourcing* to nonresident individual business owners conducting business as sole proprietors or owners of flow-through entities.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Although the presence of services or of intangibles sourced to California under market sourcing concepts does not automatically equate to the generation of taxable income, the fact of California source income governs taxability of nonresidents. Putting these statutes together, it appears this statutory and regulatory framework assigns California the right to tax even a dollar ($1) that is California source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Case Study for PRCo – Revisited',
      },
      {
        type: 'paragraph',
        text: 'Unfortunately for PRCo, the rules on market sourcing in California have been difficult to apply.',
      },
      {
        type: 'paragraph',
        text: 'California’s implementing regulation would assign the benefit of the services to California if the “books and records kept in the normal course of business… indicate the benefit of the service” is in California.While this seems relatively straightforward, in practice very few taxpayers keep contemporaneous records that track state tax concepts such as “market sourcing” and the location where customers receive the benefit of services. In the absence of detailed records tracking this information, the regulation allows the Franchise Tax Board and taxpayers to “reasonably approximate” the location where the benefit of services was received.',
      },
      {
        type: 'paragraph',
        text: 'What this means for PRCo is that *depending on the nature of the services provided and the benefit to its customer* it is possible California may source all of the $9 million to the State. It is also possible California will source much less than $9 million to the State. But the fact that all services were performed outside California does not answer the question of taxability and taxation in California as to PRCo. If the amount of sales sourced to California exceeds either $637,252 or 25 percent of PRCo’s total sales, then California may have jurisdiction to tax PRCo.',
      },
      {
        type: 'paragraph',
        text: 'So unfortunately, as a practical matter Max and Jane will face the challenge of explaining to the Franchise Tax Board the nature of services PRCo rendered and the place where its California customer in fact received the benefit of those services.',
      },
      {
        type: 'paragraph',
        text: 'The fact that PRCo and its two members performed all services for the business in Puerto Rico, and that the income may be sourced for either federal or Puerto Rico tax purposes under very different rules, does not determine the sourcing of PRCo’s income for California tax purposes.',
      },
      {
        type: 'paragraph',
        text: 'As for Max and Jane, California law taxes income from employment differently from income from business activities. In general, California sources wage and other compensation income of employees by reference to the performance of services in the State. Since Max and Jane performed all services in Puerto Rico and none in California, they would source all their compensation as employees to Puerto Rico, for California purposes.',
      },
      {
        type: 'list',
        items: [
          'Case Study – if PRCo Elected to be Taxed as a Partnership for U.S. Tax Purposes',
        ],
      },
      {
        type: 'paragraph',
        text: 'If PRCo operated as a partnership for U.S. tax purposes, the partnership may have had a minimum tax and information reporting requirement in California if any of its sales should have been sourced to the State under its market sourcing rules. But it would be Max and Jane that would owe personal income taxes to the State of California on the flow-through income of PRCo sourced to California. And Max and Jane would pay taxes at the highest marginal rate of tax in California, which was 13.3 percent in 2021.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion and Recommendations',
      },
      {
        type: 'paragraph',
        text: 'Based on the California sourcing rules that look to the location of customer benefit or customer use, California may attempt to assert its taxing jurisdiction over nonresident corporations and nonresident individual business owners owning interests in flow-through entities, even in the absence of physical presence. Depending on the facts, nonresidents may nonetheless claim the Due Process and Commerce Clause protections, if implicated.',
      },
      {
        type: 'paragraph',
        text: 'The authors here find it strange that California’s Legislature would provide clear standards to identify when corporations are doing business yet omit reference to any similar thresholds for nonresident individual business owners. In the absence of physical presence, the “doing business” statute gives guidance on the absolute and relative amounts of sales corporations may have that constitute an economic presence within California. But for nonresident individual business owners who generate income through partnerships or other flow-through entities there is no similar minimum standard. It does not serve tax policy that the statutes and regulations in California purport to give the State jurisdiction to tax $1 of a nonresident business owner’s California source income when the in-state presence is an economic presence determined by complex rules. At a minimum, the Legislature should align the corporate and individual thresholds. If the Legislature chooses to implement different standards applicable to the determination of personal income taxes of nonresidents, the Legislature should establish thresholds that are reasonable and well understood by taxpayers and their preparers nationwide.',
      },
      {
        type: 'paragraph',
        text: 'California is certainly not alone in its use of market sourcing. As states struggle to fill budget gaps, state legislatures have rolled out market sourcing in approximately 30 states over the last ten years. As state revenue departments implement these laws, taxpayers should consider their risk and prepare for audits or correspondence audits, particularly if they have customers located in states that have adopted market sourcing rules. One of the worst things taxpayers can do is bury their heads in the sand. Being proactive is key with mitigating nasty state tax issues. It should be noted that the statute of limitations for all 50 states to assess tax does not begin to run until a taxpayer files a complete and accurate state return.',
      },
    ],
  }),
  defineArticle({
    slug: 'working-outside-of-puerto-rico-tax-consequences',
    title: 'Tax Consequences of Working Outside of Puerto Rico for Owners of Act 60 Companies',
    description: 'Tax consequences when Act 60 company owners work remotely outside of Puerto Rico, including from Europe.',
    publishedAt: '2022-04-10',
    excerpt: 'As the COVID-19 pandemic begins to wind down and various countries throughout the world begin to open up, many of us are ready to resume overseas travel. A frequent question arises in my practice regarding the tax consequences to an Act 60 owner who desires to spend a summer in Europe with his or her family and work remotely. The results are interesting and for many taxpayers, surprising. This…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Working-Outside-of-Puerto-Rico-Final-Draft-March-9-2022.pdf',
    relatedSlugs: [
      'us-tax-consequences-act-60',
      'puerto-rico-companies-mitigate-us-task-risks'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Remote Work'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Longing To Spend a Summer in Europe? Tax Consequences of Working Outside of Puerto Rico for Owners of Act 60 Companies',
      },
      {
        type: 'paragraph',
        text: 'As the COVID-19 pandemic begins to wind down and various countries throughout the world begin to open up, many of us are ready to resume overseas travel. A frequent question arises in my practice regarding the tax consequences to an Act 60 owner who desires to spend a summer in Europe with his or her family and work remotely. The results are interesting and for many taxpayers, surprising. This article will use a fictional case study to explain and address the issue of working in a foreign country as an Act 60 company owner. And it will highlight that proper planning is key to avoiding those potentially disastrous tax and legal implications.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Background',
      },
      {
        type: 'paragraph',
        text: 'Julie is a U.S. citizen who is a bona fide resident of Puerto Rico. Julie owns a Puerto Rican company (“PRCo”) that qualifies for Puerto Rican “Act 60” tax benefits. PRCo is an LLC that is taxed as a corporation for both U.S. and Puerto Rican tax purposes. Under these rules, PRCo is taxed in Puerto Rico at a 4% income tax rate, and distributions from PRCo to Julie are exempt from Puerto Rican income tax.',
      },
      {
        type: 'paragraph',
        text: 'PRCo performs services for customers outside of Puerto Rico. Julie is an employee of PRCo, and her time and effort are the driving force behind PRCo’s business operations. PRCo also has 3 other employees (the “Other Employees”), who are similarly bona fide residents of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Julie is a workaholic, and she works 7 days a week. As an employee of PRCo, Julie is paid an arm’s length salary for her services. PRCo consistently generates gross revenue of $15 million per year. After payment of all expenses, PRCo generates a consistent profit of $10 million a year. PRCo annually distributes a dividend to Julie of $10 million.',
      },
      {
        type: 'paragraph',
        text: 'Other Employees. The transfer pricing study concluded that 90% of PRCo’s revenue was attributable to Julie’s activities. In other words, it was determined that $13.5 million of the gross revenue was attributable to Julie, and that $1.5 million of the revenue was attributable to the services performed by the Other Employees.',
      },
      {
        type: 'paragraph',
        text: 'In the past, Julie and the Other Employees have spent all of their workdays in Puerto Rico. However, Julie is now considering spending her summers in France. She would continue to work for PRCo while in France.',
      },
      {
        type: 'paragraph',
        text: 'Julie is unpleasantly surprised when her U.S. tax advisor informs her that the time she spends working in France may trigger a little-known rule that causes a portion of the PRCo dividends to be taxable to her in the U.S. at qualified dividends rates, which reach as high as 23.8%.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of Services Income Earned By PRCo',
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced to where the services are performed, without regard to the location of the payor, the residence of the taxpayer, the place of contracting, or the place of payment.',
      },
      {
        type: 'paragraph',
        text: 'Up until now, Julie and the Other Employees have spent all of their workdays in Puerto Rico. Consequently, all of PRCo’s services have been performed in Puerto Rico, and all of PRCo’s gross income has been Puerto Rican-source income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of Julie’s Dividend Income from PRCo',
      },
      {
        type: 'paragraph',
        text: 'There are two dividend sourcing rules found in the Internal Revenue Code applicable to Julie and PRCo:',
      },
      {
        type: 'list',
        items: [
          'The 861/862 Dividend Sourcing Rule, and',
          'The 937 Dividend Sourcing Rule',
        ],
      },
      {
        type: 'paragraph',
        text: '861/862 Dividend Sourcing Rule',
      },
      {
        type: 'paragraph',
        text: 'The 861/862 Dividend Sourcing Rule, in the context of PRCo, is important in determining whether PRCo is a controlled foreign corporation (“CFC”). If the entire dividend from PRCo is treated as Puerto Rican-source income under the 861/862 rule, Julie is not considered a U.S. person and PRCo is therefore not considered a CFC.',
      },
      {
        type: 'paragraph',
        text: 'Under Code §§861(a)(2) and 862(a)(2), dividends paid by a foreign corporation are treated entirely as foreign-source income if less than 25% of the foreign corporation’s total gross income for the past 3 years is effectively connected with the conduct of a trade or business within the U.S. Income that is effectively connected with the conduct of a trade or business within the U.S. is generally referred to as “effectively connected income” or “ECI”.',
      },
      {
        type: 'paragraph',
        text: 'As described above, all of PRCo’s gross income is from services, and it all has been foreign-source income (i.e., Puerto Rican-source income). Because none of PRCo’s gross income has been from services performed in the U.S., none of PRCo’s gross income has been U.S.-source income.',
      },
      {
        type: 'paragraph',
        text: 'Income from services that is foreign-source income is not ECI. Therefore, none of PRCo’s gross income has been ECI. Stated another way, since less than 25% of PRCo’s gross income has been ECI, dividends paid by PRCo should be treated entirely as foreign/Puerto Rican-source income to Julie under the 861/862 Dividend Sourcing Rule.',
      },
      {
        type: 'paragraph',
        text: 'This means that Julie has not been considered a U.S. person for purposes of determining whether PRCo is a CFC, and PRCo should not be a CFC. Because PRCo is not a CFC, the Subpart F Income and GILTI rules do not apply to PRCo and Julie.',
      },
      {
        type: 'paragraph',
        text: 'The CFC status of PRCo should not change if Julie starts working in France for part of the year. All of PRCo’s gross income will continue to be earned outside the U.S., meaning that none of PRCo’s gross income will be ECI. Therefore, PRCo should continue to avoid CFC status, even if Julie will be working for part of the year in France.',
      },
      {
        type: 'paragraph',
        text: '937 Dividend Sourcing Rule',
      },
      {
        type: 'paragraph',
        text: 'The 937 Dividend Sourcing Rule is important for the purposes of determining whether Julie is able to exclude the dividends she receives from PRCo from her U.S. taxable income. Under the 937 Dividend Sourcing Rule, dividends paid by PRCo are sourced entirely to Puerto Rico if PRCo meets both an “80% Test” and a “50% Test”. The 80% and 50% Tests are performed with respect to a 3-year period, consisting of the current year and the preceding two years. This period is referred to as the “testing period”. The testing period to use for a corporation that has been in existence for less than three years is calculated using the period the corporation has been in existence.',
      },
      {
        type: 'paragraph',
        text: 'The 80% Test requires that “80 percent or more of the gross income of the corporation for the testing period was derived from sources within [Puerto Rico] * * * or was effectively connected with the conduct of a trade or business in [Puerto Rico] * * *.”',
      },
      {
        type: 'paragraph',
        text: 'The 50% Test requires that “50 percent or more of the gross income of the corporation for the testing period was derived from the active conduct of a trade or business within [Puerto Rico].”',
      },
      {
        type: 'paragraph',
        text: 'If PRCo fails either the 80% Test or the 50% Test, dividends paid by it to Julie are treated as Puerto Rican-source income only to the extent of the “possessions source ratio.” PRCo’s possessions source ratio is a fraction, the numerator of which is PRCo’s gross income from sources within Puerto Rico for the testing period and the denominator of which is PRCo’s total gross income for the testing period.',
      },
      {
        type: 'paragraph',
        text: `Thus, if PRCo fails either of these tests, only a portion of the $10 million dividends paid to Julie each year can be excluded from her U.S. taxable income. 
Source of PRCo Dividends (Under Code §937) Until Now 
Up until now, PRCo has only generated Puerto Rican-source gross income. Thus, up until now, PRCo has met both the 80% Test and the 50% Test. The entire amount of the dividends paid by PRCo to Julie have been properly excluded from Julie’s U.S. taxable income.`,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Source of PRCo Dividends (Under Code §937) After Spending Summers in France',
      },
      {
        type: 'paragraph',
        text: 'Once Julie starts to spend her summers in France, a portion of PRCo’s gross income will be earned outside of Puerto Rico. If more than 20% of PRCo’s gross income (over the 3-year testing period) is generated from Julie’s activities in France, then only a portion of the dividends from PRCo to Julie can be excluded from Julie’s gross income under Code §933.',
      },
      {
        type: 'paragraph',
        text: 'As an example, if Julie consistently spends 25% of the year in France, then 25% of PRCo’s income attributable to Julie’s activities will be generated from sources outside of Puerto Rico. As indicated above, PRCo generates a total gross income each year of $15 million, and $13.5 million of that gross income is attributable to Julie’s efforts.',
      },
      {
        type: 'paragraph',
        text: 'If Julie spends three summers in France, the total gross income earned by PRCo over the 3-year testing period will be $45 million ($15 million x 3), and the portion of PRCo’s gross income earned outside of Puerto Rico will be $10.125 million ($13.5 million x 25% x 3). In other words, the portion of PRCo’s gross income earned inside Puerto Rico will be $34.875 million ($45 million – $10.125 million). Because $34.875 million is less than 80% of $45 million (34.875 / 45 = 77.5%), PRCo will fail the 80% Test.',
      },
      {
        type: 'paragraph',
        text: 'The possession source ratio will be 77.5% (the portion of PRCo’s gross income earned inside Puerto Rico / PRCo’s total gross income during the 3-year testing period). Thus, only $7.75 million of the $10 million dividends PRCo pays to Julie will be excludable from her U.S. taxable income, and $2.25 million of the dividend will be taxable to Julie in the U.S.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Failing the 80% Test Also Triggers a Form 5471 Filing Requirement',
      },
      {
        type: 'paragraph',
        text: 'Form 5471 is required to be filed if a person falls within the definition of one or more of the “category of filers.” Category 2 and 3 filers are defined in Code §6046 and the regulations thereunder. Category 4 filers are defined in Code §6038(a)(1) and the regulations thereunder. Category 5 filers are defined in Code §6038(a)(4).',
      },
      {
        type: 'paragraph',
        text: 'As discussed above, if the entire dividend from PRCo is treated as Puerto Rican-source income under the 861/862 Dividend Sourcing Rule, Julie is not considered a U.S. person for purposes of determining whether PRCo is a CFC. However, if PRCo does not meet either the 80% Test or the 50% Test, Julie is considered a U.S. person for purposes of filing Form 5471 as a Category 2, 3, or 4 filer. Category 2 and 3 filers only need to file Form 5471 in certain years. However, Category 4 filers need to file Form 5471 annually. For each year that PRCo fails the 80% Test or the 50% Test, Julie will be required to file Form 5471 as a Category 4 filer.',
      },
      {
        type: 'paragraph',
        text: 'The penalty for failure to file Form 5471 is generally $10,000. It is also important to note that the statute of limitations for the IRS to collect tax from Julie or audit her individual tax return (Form 1040) does not begin to run until she files this form.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Puerto Rico Tax Consequences',
      },
      {
        type: 'paragraph',
        text: 'In our above example, the first two summers that Julie spends working from France will not cause her to fail the 80/50 Tests. Julie is very excited and believes she has hit a home run for tax purposes. She is planning to spend less time working in France in her 3rd year so that she can continue to pass the dreaded 80/50 Tests. Unfortunately, Julie forgot one very important detail. Although she may have found a way to legally avoid U.S. taxes on the dividends from PRCo, the income attributable to her services provided from France on behalf of PRCo likely does not qualify as “export services income” for Puerto Rico tax purposes. A plain reading of the Puerto Rico Incentive Regulations appears to indicate that working “outside of Puerto Rico” can qualify as an eligible export service, but only when specific requirements are met. Article 2031.01(a)-1 reads as follows:',
      },
      {
        type: 'paragraph',
        text: 'Julie’s choice to spend her summers working in France certainly doesn’t appear to meet these requirements. It doesn’t appear there is any legitimate business reason as to why Julie must work outside of Puerto Rico; nor does it appear that her services conducted outside of Puerto Rico would be viewed by Puerto Rico taxing authority as “incidental to the main Eligible Activity.” As of today, we are unaware of any formal guidance from the Department of Economic Development and Commerce Office for Business in Puerto Rico (“DDEC”), the Puerto Rico Treasury, or any Puerto Rico governmental agency for that matter that provides any additional insight or clarification that expands on this issue of working outside of Puerto Rico. In fact, Article 2031.01(a)-1 language cited above is included verbatim on page 1 of every Act 60 Export Services grant issued by the DDEC. It will be interesting to see if DDEC clarifies this issue with formal guidance in the near future. It is certainly needed.',
      },
      {
        type: 'paragraph',
        text: 'The 4% tax rate offered through Act 60 only applies to eligible export activities. The portion of the income generated by PRCo from services provided outside of Puerto Rico and not qualifying as eligible export activity will likely be taxed at the full Puerto Rico corporate tax rates, which are the second-highest in the world, reaching a top marginal rate of 37.5%.',
      },
      {
        type: 'paragraph',
        text: 'If Julie spends 25% of her time working from France, this means that 25% of the $13.5 million in income PRCo earns in any given year may be subject to full Puerto Rico corporate tax rates. This could result in a potential Puerto Rico corporate tax liability as high as $1,212,000. This equates to $13,466 in Puerto Rico tax for every day Julie works from France. Certainly not the tax-savings home run that Julie had in mind when planning her summer getaway.',
      },
      {
        type: 'paragraph',
        text: 'Potential U.S. Criminal Implications of Failing to Pay Tax to a Foreign Jurisdiction (i.e., Puerto Rico)',
      },
      {
        type: 'paragraph',
        text: 'In addition to the tax liability that might result from Julie’s work during her summer abroad, Julie should consider whether she is stumbling into potential criminal liabilities as a result of her tax position. While we are not attorneys, and this article is not legal advice, it is worth asking: Is Julie properly reporting and calculating the Puerto Rico corporate tax liability as a result of her remote work in France? Or is she choosing instead to play the audit lottery and assuming the Puerto Rican taxing authorities will never select her company for an audit? If Julie and her tax preparer are signing a Puerto Rico tax return under penalties of perjury, and claiming that all the income generated for the year is eligible for the reduced Puerto Rico tax rate of 4% when the facts don’t support that position, are they both at risk of potential criminal prosecution by the U.S. government if they knew the tax reporting position was not supported by the facts? It is certainly an interesting question. Some advisors might suggest (erroneously) that the IRS and the U.S. Department of Justice are not interested in the non-U.S. tax liability. The U.S. courts appear to have a different position.',
      },
      {
        type: 'paragraph',
        text: 'In Pasquantino et al. v. United States, the defendants were caught employing various individuals to smuggle large amounts of alcohol from the United States into Canada in order to evade the Canadian excise tax on alcohol. Canada’s excise tax on alcohol at the time was well in excess of the rates imposed by the U.S. They were arrested and ultimately convicted in a U.S. court of wire fraud for devising a scheme to smuggle alcohol into Canada and deprive Canada of tax revenue. Their prison sentences were substantially augmented due to the calculated tax revenue loss to the Canadian and Ontario government.',
      },
      {
        type: 'paragraph',
        text: 'The lower courts held that “a plot to defraud a foreign government of tax revenue violates the federal wire fraud statute.” On appeal, the Fourth Circuit affirmed the convictions. The Fourth Circuit also held that Canada’s right to receive tax revenue was “money or property” within the wire fraud statute’s meaning. This case made its way to the U.S. Supreme Court, where Justice Clarence Thomas wrote the opinion affirming the Fourth Circuit’s holding that defrauding a foreign government of tax revenue violates the federal wire fraud statute.',
      },
      {
        type: 'paragraph',
        text: 'Because we are not attorneys, we do not give legal advice. But based on the above, Julie should check with a licensed attorney and CPA who are familiar with the tax consequences of this situation to determine how to properly calculate and report her tax liability. It is critical that taxpayers like Julie and PRCo pay particular attention to the specific requirements for their situation and get professional advice tailored to their facts and circumstances. As demonstrated above, there can be a domino effect of seemingly unrelated and innocuous decisions (such as living abroad and working remotely), and guidance from reputable tax and legal experts is important in order to maintain compliance with the laws of the U.S., Puerto Rico and other foreign jurisdictions. In some situations, requesting clarification or interpretation of the Puerto Rico Incentive Regulations as it relates to the Taxpayer’s particular situation might be appropriate.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Planning Opportunities',
      },
      {
        type: 'paragraph',
        text: 'Before Julie books her flights for France, she should consult her tax advisors to discuss her specific situation. In addition to an analysis of the amount and type of work she plans to perform in France, she should also inquire whether it is possible to request an amendment to the Act 60 Export Services grant from DDEC to treat work performed outside of Puerto Rico as an eligible activity subject to the reduced Puerto Rico tax rate of 4%. Can a Puerto Rico tax advisor request an amendment to a tax grant to include a specific threshold number of days of remote performance of services that qualify as incidental to the main Eligible Activity described in the tax grant?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'As international travel normalizes post-COVID, the Puerto Rican and U.S. tax rules with respect to remote work are even more important and impactful. Given the IRS Campaign and recent activity arising from the IRS-Criminal Investigation Division on the island, and the DDEC’s declared intention to continue their residency audits of tax grant recipients, taxpayers should act now to assess past years’ filings for areas of noncompliance and seek appropriate tax advice on how to minimize or remedy potential civil and/or criminal exposure.',
      },
      {
        type: 'paragraph',
        text: 'Although some Act 22 individuals who received their tax grants prior to 2019 are currently going through residency correspondence audits with the DDEC, our experience indicates that it is a very straightforward and non-stressful process for those taxpayers who kept good records and met the applicable requirements. For those who have not, the failure to comply with Puerto Rico tax laws can result in Puerto Rico civil and/or criminal penalties, as well as a revocation of a tax grant by DDEC in the most egregious situations. Puerto Rico tax attorneys who are well-versed in these issues can make all the difference.',
      },
      {
        type: 'paragraph',
        text: 'Luckily for Julie, and our readers, all hope is not lost. With proper tax planning and structuring, many of these undesirable and sometimes surprising tax implications are preventable. Don’t let your relaxing summer abroad turn into a nightmare trip.',
      },
    ],
  }),
  defineArticle({
    slug: 'rules-bona-fide-residents-puerto-rico',
    title: 'Back to Basics: An Overview of Sourcing Rules for Bona Fide Residents of Puerto Rico',
    description: 'Overview of income sourcing rules for bona fide residents of Puerto Rico under IRC §933.',
    publishedAt: '2021-11-21',
    excerpt: 'To view a PDF, please click here.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Back-to-Basics-Final-Draft.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Sourcing', 'Act 60'],
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Back to Basics – An Overview of Sourcing Rules for Bona Fide Residents of Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'To view a PDF, please click here.',
      },
      {
        type: 'paragraph',
        text: 'An individual who is a bona fide resident of Puerto Rico can generally exclude from US income his or her “income derived from sources within Puerto Rico.” Because Puerto Rican-sourced income is the only income that can be excluded, it is important to understand what income is and what income is not Puerto Rican-sourced.',
      },
      {
        type: 'paragraph',
        text: 'Category-by-category rules determine the source of income. Some of the more common categories include:',
      },
      {
        type: 'list',
        items: [
          'Interest,',
          'Dividends,',
          'Compensation for personal services,',
          'Rentals and royalties,',
          'Income from the sale or exchange of real property, and',
          'Income from the sale or exchange of personal property.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Interest Income',
      },
      {
        type: 'paragraph',
        text: 'Interest income is generally derived from Puerto Rican sources if it is paid by a resident of Puerto Rico or by a Puerto Rican corporation. If a bona fide resident of Puerto Rico receives interest income from a U.S. corporation or a U.S. resident, the income will be considered U.S.-sourced income, and that income cannot be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Dividend Income',
      },
      {
        type: 'paragraph',
        text: 'Dividend income is generally derived from Puerto Rican sources if it is paid by a Puerto Rican corporation. If a bona fide resident of Puerto Rico receives dividend income from a U.S. corporation, the income will be considered U.S.-sourced income, and that income cannot be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Compensation For Personal Services',
      },
      {
        type: 'paragraph',
        text: 'Compensation for personal services is generally sourced to the place of performance of the service. Thus, compensation for personal services performed in Puerto Rico is generally treated as Puerto Rican-sourced income. Compensation for services performed both within and outside Puerto Rico is allocated between Puerto Rican and non-Puerto Rican-sources.',
      },
      {
        type: 'paragraph',
        text: 'Thus, if services are performed both within Puerto Rico and outside Puerto Rico, only a portion of the income can be excluded from U.S. taxable income.',
      },
      {
        type: 'paragraph',
        text: '(Note: Working in the U.S. on behalf of a Puerto Rican company can result in some very nasty U.S. tax consequences for the Puerto Rican company. Refer to the following article for an in-depth discussion of this issue https://tomduffycpa.com/articles/.)',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Rental & Royalty Income',
      },
      {
        type: 'paragraph',
        text: 'Rental and royalty income is generally sourced by reference to the location, or place of use, of the property. Rental and royalty income from property located or used in Puerto Rico is Puerto Rican-source income, but rental income from property located or used outside of Puerto Rico is not Puerto Rican-source income. If a bona fide resident of Puerto Rico receives rents or royalties from property used outside of Puerto Rico, the income will not be considered Puerto Rican-sourced income, and that income cannot be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale or Exchange of Real Property',
      },
      {
        type: 'paragraph',
        text: 'Income derived from the sale of Puerto Rican real estate is Puerto Rican-sourced income. In contrast, income derived from the sale of real estate outside of Puerto Rico is not Puerto Rican-source income.',
      },
      {
        type: 'paragraph',
        text: 'If a bona fide resident of Puerto Rico sells Puerto Rican real estate, gain on the real estate can be excluded from U.S. taxable income. In contrast, if a bona fide resident of Puerto Rico sells real estate outside of Puerto Rico, gain on the real estate cannot be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale or Exchange of Personal Property – Inventory',
      },
      {
        type: 'paragraph',
        text: 'Different sourcing rules apply to income from sales of personal property treated as inventory and personal property that is not treated as inventory. Inventory is generally property held for sale to customers in the ordinary course of a trade or business.',
      },
      {
        type: 'paragraph',
        text: 'Income from the sale of inventory that was manufactured by the taxpayer in Puerto Rico is generally Puerto Rican-sourced income. Income from the sale of inventory that was manufactured by the taxpayer outside of Puerto Rico is notPuerto Rican-sourced income.',
      },
      {
        type: 'paragraph',
        text: 'Income from the sale of inventory that was purchased by the taxpayer (i.e., inventory that was not manufactured by the taxpayer) is generally Puerto Rican-sourced income if title to the property transfers in Puerto Rico. On the other hand, income from the sale of inventory that was purchased by the taxpayer is generally not Puerto Rican-source income if title to the property transfers outside of Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sale or Exchange of Personal Property – Non-Inventory',
      },
      {
        type: 'paragraph',
        text: 'Subject to significant exceptions, income from the sale of personal property is generally sourced on the basis of the residence of the seller. Under this general rule, income from the sale of personal property by a bona fide resident of Puerto Rico would generally be Puerto Rican-sourced income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Appreciated/Tainted Property for First 10 Years in Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Special rules apply to gains from dispositions of certain investment property (for example, stocks, bonds, debt instruments, diamonds, gold, cryptocurrencies, etc.) owned prior to becoming a bona fide resident of Puerto Rico (“Tainted Property”).Under these special rules, gains from dispositions of Tainted Property within 10 years after becoming a bona fide resident of Puerto Rico generally are treated as not Puerto Rican-sourced income.',
      },
      {
        type: 'paragraph',
        text: 'For example, say an individual is a U.S. tax resident and owns appreciated shares of stock. If that individual becomes a bona fide resident of Puerto Rico and then sells the appreciated stock within 10 years of moving to Puerto Rico, the special rule provides that the gain generally will not be Puerto Rican-sourced income. In other words, the gain generally cannot be excluded from U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Election to Split Source of Tainted Property Gain',
      },
      {
        type: 'paragraph',
        text: 'A bona fide resident of Puerto Rico may elect to split the source of Tainted Property gain by using a mark-to-market allocation in the case of marketable securities and a time-based allocation in the case of other personal property.',
      },
      {
        type: 'paragraph',
        text: 'Under this special election, gain is allocated partly to the U.S. holding period and partly to the Puerto Rican holding period. The Puerto Rican holding period is the time the property was owned while the individual was a bona fide resident of Puerto Rico. The U.S. holding period is the time the property was owned prior to becoming a bona fide resident of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'The election is made by reporting the gain attributable to the Puerto Rican holding period on the U.S. income tax return for the year of disposition.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Marketable Securities – Mark-to-Market Allocation',
      },
      {
        type: 'paragraph',
        text: 'Marketable securities are those actively traded on an established financial market, such as stock in a publicly held corporation. The securities must be marketable throughout the individual’s entire holding period.',
      },
      {
        type: 'paragraph',
        text: 'Gain attributable to the Puerto Rican holding period is the difference in the fair market value of the security at the beginning of the Puerto Rican holding period and the fair market value of the security when it is sold. This is the gain that is treated as being from sources within Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Example 1: Assume that in 2020 Jane lived in the United States and on January 1, 2020, she paid $1,000,000 to purchase 1,000 shares of stock in a U.S. corporation listed on the New York Stock Exchange. On January 1, 2021, Jane moved to Puerto Rico and became a bona fide resident of Puerto Rico. On January 1, 2021, the closing value of the 1,000 shares of stock was $2,000,000. On January 1, 2022, while still a bona fide resident of Puerto Rico, Jane sold all of the 1,000 shares of stock for $10,000,000.',
      },
      {
        type: 'paragraph',
        text: 'Jane’s total gain on the sale would be $9,000,000. Under the mark-to-market allocation rules, Jane would allocate $1,000,000 of the gain to her U.S. holding period ($2,000,000 – $1,000,000) and she would allocate $8,000,000 of the gain to her Puerto Rican holding period ($10,000,000 – $2,000,000).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gain allocated to Gain allocated to',
      },
      {
        type: 'heading',
        level: 3,
        text: 'US holding period PR holding period Total gain',
      },
      {
        type: 'paragraph',
        text: '$1,000,000 $8,000,000 $9,000,000',
      },
      {
        type: 'paragraph',
        text: 'Thus, in Example 1, Jane would be able to exclude $8,000,000 of the gain from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Property Other Than Marketable Securities – Time-Based Allocation',
      },
      {
        type: 'paragraph',
        text: 'In the case of property other than marketable securities, the portion of gain attributable to the Puerto Rican holding period is determined by multiplying the total gain by a fraction, the numerator of which is the number of days in the Puerto Rican holding period and the denominator of which is the total number of days in the entire holding period for the property.',
      },
      {
        type: 'paragraph',
        text: 'Example 2: Assume the same facts as in Example 1, except that the property was not a marketable security. Thus, in 2020 Jane lived in the United States and on January 1, 2020, she paid $1,000,000 to purchase 1,000 shares of stock in a privately held corporation. On January 1, 2021, she moved to Puerto Rico and became a bona fide resident of Puerto Rico. On January 1, 2022, while still a bona fide resident of Puerto Rico, Jane sold all of the 1,000 shares of stock for $10,000,000.',
      },
      {
        type: 'paragraph',
        text: 'Jane owned the shares for a total of two years. She owned the shares for one year prior to becoming a bona fide resident of Puerto Rico, and she owned the shares for an additional year after becoming a bona fide resident of Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'Jane’s total gain on the sale would be $9,000,000. Under the time-based allocation rule, she would allocate $4,500,000 of the gain to her U.S. holding period ($9,000,000 x 365 / 730) and she would allocate $4,500,000 of the gain to her Puerto Rican holding period ($9,000,000 x 365 / 730).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gain allocated to Gain allocated to',
      },
      {
        type: 'heading',
        level: 3,
        text: 'US holding period PR holding period Total gain',
      },
      {
        type: 'paragraph',
        text: '$4,500,000 $4,500,000 $9,000,000',
      },
      {
        type: 'paragraph',
        text: 'Thus, in Example 2, Jane would only be able to exclude $4,500,000 of the gain from her U.S. taxable income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Income Earned Through Partnerships & S Corporations',
      },
      {
        type: 'paragraph',
        text: 'Partnerships and S corporations are generally not subject to income tax. Instead, the income of partnerships and S corporations generally flows through to, and is taxed to, the partners/shareholders.',
      },
      {
        type: 'paragraph',
        text: 'Subject to certain exceptions, the character of income that flows through to the partner or S corporation shareholder is determined as if the income were realized directly from the source for which realized by the partnership or S corporation.',
      },
      {
        type: 'paragraph',
        text: 'Where it is necessary to determine the amount or character of gross income of a partner, the partner is allocated his or her share of the gross income of the partnership. For example, a partner may be required to include his distributive share of partnership gross income in computing the amount of gross income received from sources within Puerto Rico. Similar rules apply to shareholders of S corporations.',
      },
      {
        type: 'paragraph',
        text: 'It is important to note, especially for bona fide residents of Puerto Rico, that certain sales of partnership personal property are sourced to the residence of the partner.',
      },
      {
        type: 'paragraph',
        text: 'Example 3: On January 1, 2021, Jane moved to Puerto Rico and became a bona fide resident of Puerto Rico. Jane is a partner in a U.S. partnership (“USP”) that is a trader but not a dealer in securities. On February 15, 2021, USP purchases 1,000,000 shares of stock in a U.S. company that is traded on the New York Stock Exchange. On November 1, 2022, USP sells the 1,000,000 shares of stock at a gain of $100,000,000. Jane’s partnership distributive share of the gain is $5,000,000.',
      },
      {
        type: 'paragraph',
        text: 'The $5,000,000 gain allocated to Jane is sourced based on where she is resident. Because Jane is a bona fide resident of Puerto Rico, the gain is likely Puerto Rican-sourced income and can likely be excluded from Jane’s U.S. income.',
      },
      {
        type: 'paragraph',
        text: 'An S corporation is treated as a partnership, and the shareholders of the S corporation are treated as partners, for certain foreign-sourced income purposes. Specifically, an S corporation is treated as a partnership for purposes of subparts A and F of part III, and part V, of subchapter N of Chapter 1 of the Internal Revenue Code. Importantly, the sourcing rules for bona fide residents of Puerto Rico are included in Code §937, which is in subpart D of part III of subchapter N – and notably not in subparts A or F as described above. Therefore, an S corporation is not treated as a partnership for purposes of sourcing entity-level gains on sales of personal property when sourcing income under Code §937. In other words, the special rule that sources partnership personal property gains based on the residence of the partner does not apply to gains recognized on personal property by S corporations for purposes of Code §937.',
      },
      {
        type: 'paragraph',
        text: 'Example 4: On January 1, 2021, Jane moved to Puerto Rico and became a bona fide resident of Puerto Rico. Jane is a 5% shareholder in a U.S. S corporation (“S Corp”) that is a trader but not a dealer in securities. On February 15, 2021, S Corp purchases 1,000,000 shares of stock in a U.S. company that is traded on the New York Stock Exchange. On November 1, 2022, S Corp sells the 1,000,000 shares of stock at a gain of $100,000,000. Jane’s pro rata share of the gain is $5,000,000.',
      },
      {
        type: 'paragraph',
        text: 'For purposes of computing the foreign tax credit limitation under Code §904, the gain allocated to Jane is sourced based on where she is resident. However, for purposes of excluding income under Code §§933 and 937, the gain allocated to Jane is sourced to the residence of the seller. In this case, the seller is a U.S. S corporation. Because the S corporation is a U.S. resident, the gain is US-sourced income, Code §865(a), and cannot be excluded from Jane’s U.S. income.',
      },
      {
        type: 'paragraph',
        text: 'As noted above, special rules apply to gains from dispositions of certain investment property (for example, stocks, bonds, debt instruments, diamonds, gold, cryptocurrencies, etc.) owned prior to becoming a bona fide resident of Puerto Rico. If such investment property is owned by a partnership prior to one or more of the partners becoming bona fide residents of Puerto Rico, it is not clear whether the investment property held by the partnership should be subject to the 10-year Tainted Property rules discussed above.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sourcing By Analogy',
      },
      {
        type: 'paragraph',
        text: 'It is well settled that Code §§861 through 863 and their predecessors were not intended to be all inclusive. When an item of income is not classified within the confines of the statutory scheme nor by regulation, courts have sourced the item by comparison and analogy with classes of income specified with the statutes. (See Howkins v. Commr., 49 T.C. 689 (1968), Bank of America v. U.S., 230 Cl. Ct. 679 (1982).)',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Allocation of Expenses to Puerto Rico Sourced Income',
      },
      {
        type: 'paragraph',
        text: 'Where an amount is excluded from gross income under Code §933, deductions or losses properly allocable to the excluded gross income cannot be deducted. The allocation and apportionment rules under Treas. Reg. §1.861-8 apply for purposes of determining what portion of the expenses should be allocated and apportioned against the excluded income.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Temp. Treas. Reg. §1.861-8T(c)(1) provides in part:',
      },
      {
        type: 'paragraph',
        text: 'A deduction is apportioned by attributing the deduction to gross income * * * which is [Puerto Rican source income] and to gross income * * * which is [non-Puerto Rican source income]. Such attribution must be accomplished in a manner which reflects to a reasonably close extent the factual relationship between the deduction and the grouping of gross income.',
      },
      {
        type: 'paragraph',
        text: 'That regulation provides that a taxpayer may apportion the deduction using various bases and factors, such as the following, provided the basis or factor chosen by the taxpayer reasonably reflects the factual relationship between the deduction and the grouping of gross income: 1) comparison of units sold; 2) comparison of the amount of gross sales or receipts; 3) comparison of the cost of goods sold; 4) comparison of profit contribution; 5) comparison of expenses incurred, assets used, salaries paid, space utilized, and time spent related to the activities or properties giving rise to the class of gross income; and 6) comparison of the amount of gross income.',
      },
      {
        type: 'paragraph',
        text: 'A taxpayer must furnish, if requested, information supporting the factual relationship for purposes of the apportionment of the deduction between the two groups of gross income.',
      },
      {
        type: 'paragraph',
        text: 'If a taxpayer incurs a business expense that is related to both Puerto Rican sourced income and US-sourced income, the taxpayer may choose to allocate the expense among the two groups of income based on the source of the gross income generated by the entire business. For example, if the business generates 80% of its gross income from Puerto Rican sources, then 80% of the expense would be allocable to the Puerto Rican sourced income. In this example, the 80% portion of the expense allocable against the Puerto Rican sourced income could not be deducted for US tax purposes.',
      },
      {
        type: 'paragraph',
        text: 'However, in all cases, whatever method is chosen, the method must reflect “to a reasonably close extent the factual relationship between the deduction and the grouping of gross income.”',
      },
    ],
  }),
  defineArticle({
    slug: 'us-tax-form-926-act-60',
    title: 'Form 926 – One of the Most Important U.S. Tax Forms that Most Act 60 Recipients Fail to File',
    description: 'Form 926 filing requirements when a U.S. citizen contributes property to a Puerto Rican corporation.',
    publishedAt: '2021-05-09',
    excerpt: 'If a U.S. citizen forms a Puerto Rican corporation (or a Puerto Rico LLC that is taxed as a corporation for U.S. purposes) and contributes cash to the Puerto Rican corporation, is the U.S. citizen obligated to notify the IRS?',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Form-926-Final-Version.pdf',
    relatedSlugs: [
      'requirements-puerto-rico-residents',
      'statute-of-limitations'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Form 926', 'Compliance'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Question:',
      },
      {
        type: 'paragraph',
        text: 'If a U.S. citizen forms a Puerto Rican corporation (or a Puerto Rico LLC that is taxed as a corporation for U.S. purposes) and contributes cash to the Puerto Rican corporation, is the U.S. citizen obligated to notify the IRS?',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Answer:',
      },
      {
        type: 'paragraph',
        text: 'Yes. The U.S. citizen is a U.S. person, and the Puerto Rican entity is considered a foreign corporation. Consequently, the contribution of the cash to the Puerto Rican corporation must be disclosed on Form 926.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Requirement to File Form 926',
      },
      {
        type: 'paragraph',
        text: 'Code §6038B(a)1provides that each U.S. person who transfers property to a foreign corporation in a Code §351 exchange (among other types of exchanges) must provide the IRS certain information regarding the exchange. The regulations under Code §6038B provide that the information is to be provided on Form 926, Return by a U.S. Transferor of Property to a Foreign Corporation, and that the form must be attached to, and filed by the due date (including extensions) of, the transferor’s income tax return for the year that includes the transfer.2',
      },
      {
        type: 'paragraph',
        text: 'It is not just cash transfers that must be reported on Form 926. Other types of property transferred by U.S. persons to foreign corporations in Code §351 exchanges must also be reported on Form 926.',
      },
      {
        type: 'paragraph',
        text: 'In addition, it is not just transfers qualifying under Code §351 that must be reported on Form 926. Transfers qualifying for nonrecognition under Code §§332, 354, 355, 356, and 361 must also be reported on Form 926. However, Code §351 exchanges are the most common types of transfers that must be reported on Form 926. So, the focus here is on Code §351 exchanges.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'No Exception for Puerto Rican Corporations',
      },
      {
        type: 'paragraph',
        text: 'Some IRS international information returns have special rules or exceptions for bona fide residents of Puerto Rico. For example, Puerto Rican financial assets are not included in determining the threshold amount for purposes of filing Form 8938.3 In addition, Form 5471 is not required for certain Puerto Rican corporations with active businesses in Puerto Rico and mostly Puerto Rican-sourced income.4',
      },
      {
        type: 'paragraph',
        text: 'However, neither the statute nor the regulations contain any exceptions to the requirement to file Form 926 for bona fide residents of Puerto Rico. In addition, Puerto Rican corporations are generally treated as foreign corporations. Under Code §7701(a)(4) the term “domestic”, when applied to a corporation, means created or organized in the United States or under the law of the United States or of any State. Also, Code §7701(a)(9) defines the term “United States” to include only the States and the District of Columbia. Puerto Rican corporations are generally not considered domestic corporations. Instead, they are considered foreign corporations.',
      },
      {
        type: 'paragraph',
        text: 'Consequently, the normal filing requirements with respect to Form 926 apply to bona fide residents of Puerto Rico, just as they apply to any other U.S. person transferring property to a foreign corporation.',
      },
      {
        type: 'paragraph',
        text: 'It is common to set up businesses in Puerto Rico as limited liability companies (“LLCs”). When a U.S. domestic LLC is formed and no entity classification election is made, the LLC defaults to be classified as a pass-through entity (a partnership if the entity has more than one owner and a disregarded entity if there is a single owner).5 However, when a Puerto Rican LLC is formed and no entity classification election is made, the LLC defaults to be classified as a corporation.6 A Puerto Rican LLC is an “eligible entity”, and an entity classification election can be made to treat the LLC as a partnership or a disregarded entity (depending on the number of its owners). Entity classification elections are made on Form 8832, Entity Classification Election. If a Puerto Rican LLC is treated as a pass-through entity for U.S. tax purposes, it must also be treated as a pass-through entity for Puerto Rico tax purposes.7',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Special Rule for Transfers of Cash',
      },
      {
        type: 'paragraph',
        text: 'A U.S. person that transfers cash to a foreign corporation in a Code §351 exchange must report the transfer only if: (1) immediately after the transfer such person holds (directly, indirectly, or by attribution) at least 10% of the vote or value of the foreign corporation, or (2) the amount of cash transferred by such person (or any related person) to the foreign corporation during the 12-month period ending on the date of the transfer exceeds $100,000.8',
      },
      {
        type: 'paragraph',
        text: 'Therefore, if (1) only cash is transferred, (2) less than $100,000 is transferred, and (3) the transferor owns less than 10% of the foreign corporation, no Form 926 is required.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Outbound Transfers by Partnerships',
      },
      {
        type: 'paragraph',
        text: 'When a partnership transfers property to a foreign corporation in a Code §351 exchange, it is the partners in the partnership who are treated as transferring the property to the foreign corporation.[See Treas. Reg. §§1.6038B-1(b)(1)(i) and 1.367(a)-1T(c)(3).] Consequently, if a partnership with U.S. partners forms a foreign corporation and transfers property to that foreign corporation, it is the U.S. partners in the partnership that are obligated to file Form 926. The partnership itself does not need to file Form 926. Each partner is treated as having transferred a proportionate share of the property. A U.S. person’s proportionate share of partnership property is determined under the partnership rules and principles of Code §§701 through 761.9',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Outbound Transfers to Foreign Partnerships',
      },
      {
        type: 'paragraph',
        text: 'Form 926 is not used to report transfers by U.S. persons to foreign partnerships. Instead, Form 8865 is used to report such transfers.10',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Penalty for Failing to File',
      },
      {
        type: 'paragraph',
        text: 'If a taxpayer fails to file Form 926 when required to do so, the IRS can impose a penalty equal to 10% of the fair market value of the property at the time of the transfer.11 The penalty is limited to $100,000 unless the failure to comply was due to intentional disregard. In addition, the period of limitations for assessment of tax (i.e., the IRS initiating an audit and assessing additional tax) is extended to the date that is 3 years after the date on which the information required to be reported is provided.12 Basically, this means that if you do not file this form, the IRS can open up your tax return at any time in the future for examination and the assessment of tax, interest and penalties.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Strict Requirements for Reasonable Cause Relief',
      },
      {
        type: 'paragraph',
        text: 'It is not uncommon for taxpayers to miss filing Form 926. However, if a taxpayer later realizes that Form 926 should have been filed, it is important for the taxpayer to promptly file an amended tax return with the missed Form 926 included. The prompt filing of the amended tax return is required if the taxpayer wants to claim reasonable cause to avoid penalties.13',
      },
      {
        type: 'paragraph',
        text: 'For example, say a taxpayer fails to timely file Form 926. The taxpayer later learns that the form should have been filed. The taxpayer does not at that time promptly file an amended tax return with a Form 926, but instead waits to see if they are audited by the IRS. Once the IRS audit starts, the taxpayer decides then to file the late Form 926. The regulations would prevent the taxpayer from claiming reasonable cause for the late filing in this case.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Gain Recognition on Outbound Transfers of Appreciated Property',
      },
      {
        type: 'paragraph',
        text: 'Generally, gain is recognized when a U.S. person transfers appreciated property to a foreign corporation.14 However, certain transfers of appreciated stock to a foreign corporation may not require recognition of gain.15 Under the regulations, a transfer of appreciated stock of a foreign corporation to another foreign corporation in a Code §351 exchange generally requires the transferor to enter into a “gain recognition agreement” in order to avoid immediate gain recognition.16 In addition, a transfer of appreciated stock of a domestic corporation to a foreign corporation in a Code §351 exchange generally triggers gain unless at least five separate tests are met.17',
      },
      {
        type: 'paragraph',
        text: 'The active conduct of a trade or business exception to recognizing gain on an outbound transfer of property was repealed in 2017 with the enactment of the Tax Jobs and Cuts Act.18',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Outbound Transfers of Intangible Property',
      },
      {
        type: 'paragraph',
        text: 'If the property being transferred by the U.S. person to the foreign corporation is certain intangible property, different rules apply.19 Instead of recognizing immediate gain, the U.S. person is treated as having sold the property to the foreign corporation in exchange for annual deemed royalty payments over the useful life of the property.20 However, the U.S. transferor can elect to treat the transfer as a sale instead of annually recognizing deemed royalties.21',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Various Other Rules May Apply',
      },
      {
        type: 'paragraph',
        text: 'Various other overlapping rules may also apply to a U.S. person’s transfer of property to a foreign corporation. Branch loss recapture rules may apply under Code §91; gain may be recognized under the overall foreign loss rules of Code §904(f); gain may be recognized under the dual consolidated loss rules of Code §1503(d); or the anti-inversion rules under Code §7874 may apply to cause the foreign corporation to be treated as a domestic corporation. Therefore, it is important to consider the full range of outbound transfer rules when a U.S. person transfers property to a foreign corporation.',
      },
      {
        type: 'paragraph',
        text: 'It is also important to note that “deemed” transfers to a foreign corporation can occur. For example, if (1) a foreign entity is owned by a U.S. person, (2) the foreign entity is classified as a disregarded entity, and (3) an election is made to change the classification of the foreign entity to be a corporation, then the U.S. person is deemed to have contributed all of the assets and liabilities of the entity to a foreign corporation in exchange for stock of the foreign corporation.22',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example – Forming a Puerto Rican LLC (Year 1)',
      },
      {
        type: 'paragraph',
        text: 'Joe is a bona fide resident of Puerto Rico for all of Year 1. Joe had been operating as a sole proprietorship. During Year 1, Joe forms a Puerto Rican LLC (“PRCo”). He does not make an entity classification election for PRCo, and PRCo defaults to be classified as a corporation.',
      },
      {
        type: 'paragraph',
        text: 'During Year 1, Joe contributes into PRCo cash of $10,000 and a customer list that he had been using in his sole proprietorship.',
      },
      {
        type: 'paragraph',
        text: 'Both the cash and the customer list must be disclosed on Form 926. Because the customer list is intangible property, as defined in Code §367(d)(4), Joe is treated as having sold the customer list to PRCo in exchange for annual deemed royalty payments over the useful life of the customer list.',
      },
      {
        type: 'paragraph',
        text: 'If we assume that the customer list has a value of $200,000 and that the appropriate arm’s length royalty for use of the customer list is 10%, then Joe would need to include $20,000 (10% of $200,000) in his U.S. income as a deemed royalty. The deemed royalties would continue each year for the useful life of the customer list.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example Continued– Contributing Cash to the Puerto Rican LLC in Year 2',
      },
      {
        type: 'paragraph',
        text: 'If in Year 2, Joe contributes additional cash of $5,000 into PRCo, he would need to file another Form 926 for Year 2 to disclose the cash contribution.',
      },
      {
        type: 'paragraph',
        text: 'As described above, one of the types of transfers required to be included on Form 926 is when a U.S. person transfers property to a foreign corporation in a Code §351 exchange. To qualify as a Code §351 exchange, there generally must be a transfer of property to a corporation in exchange for stock in the corporation, and the transferor or transferors must control (80%) of the corporation. See Code §351(a).',
      },
      {
        type: 'paragraph',
        text: 'A transaction where a shareholder contributes property to a corporation, but the corporation does not issue any shares in exchange for the property, is referred to as a “contribution to capital.” It is arguable that a contribution to the capital of a corporation is not a Code §351 exchange.23 However, the Tax Court and the Second Circuit have both held that the exchange requirements of Code §351 are met “where a sole stockholder transfers property to a wholly-owned corporation even though no stock or securities are issued therefor. Issuance of new stock in this situation would be a meaningless gesture.”24 Furthermore, in response to the Abegg decision, Congress enacted Code §367(c)(2), which provides:',
      },
      {
        type: 'paragraph',
        text: 'For purposes of this chapter, any transfer of property to a foreign corporation as a contribution to the capital of such corporation by one or more persons who, immediately after the transfer, own (within the meaning of section 318) stock possessing at least 80 percent of the total combined voting power of all classes of stock of such corporation entitled to vote shall be treated as an exchange of such property for stock of the foreign corporation equal in value to the fair market value of the property transferred.',
      },
      {
        type: 'paragraph',
        text: 'In Joe’s situation, he owns 100% of PRCo. Therefore, Joe owns “stock possessing at least 80 percent” of PRCo, and he is treated as having received stock in PRCo in exchange for the cash contribution. Since Joe is deemed to have received stock in PRCo in exchange for the cash, the transaction is treated as a Code §351 exchange, and Joe is required to file Form 926 in Year 2.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'As the IRS Campaign kicks off, taxpayers should note the Campaign is being coordinated by the Large Business and International Tax Division (LB&I) of the IRS. It is our experience that the LB&I division is staffed with seasoned and sophisticated revenue agents that will be very familiar with the importance of Form 926, as well as other U.S. filing issues that Act 60 companies and residents should be complying with. Those taxpayers unfortunate enough to be selected for an IRS audit will likely be asked to provide a copy of this form to the IRS at the very early stages of the IRS examination. If you have failed to file this form, the IRS will have an unlimited amount of time to spend on auditing your individual tax return (as the statute of limitations never started due to the failure to file this form). In addition, given the nature of the Campaign, we believe penalties will likely be assessed against those taxpayers who failed to file the form.',
      },
      {
        type: 'paragraph',
        text: 'Although we cannot predict whether the failure to file Form 926 will result in any referrals by IRS civil agents to the IRS criminal division, we certainly would not place it outside the realm of possibility for the most egregious cases.',
      },
      {
        type: 'paragraph',
        text: 'Taxpayers should review past filings to determine if appropriate forms were filed. In the event of noncompliance, they should consult their tax advisors to discuss potential next steps. Once an audit begins, it is normally too late to file corrective returns to avoid civil and/or criminal penalties.',
      },
    ],
  }),
  defineArticle({
    slug: 'irs-puerto-rico',
    title: 'Alert: IRS to "Campaign" into Puerto Rico; How can Taxpayers Defend?',
    description: 'The IRS campaign focused on U.S. persons claiming benefits under Puerto Rico Act 22 and related incentives.',
    publishedAt: '2021-03-07',
    excerpt: 'The IRS has announced a new “Campaign.” It will focus its attention on U.S. persons who have reduced their U.S. tax burden by claiming benefits under Puerto Rico Act 22. This comes as no surprise following recent increased interest from Congress, the Treasury Department, and the IRS on the revenue lost when U.S. taxpayers relocate to Puerto Rico.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/IRS-to-Campaign-into-Puerto-Rico-How-can-Taxpayers-Defend.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'IRS', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'The IRS has announced a new “Campaign.” It will focus its attention on U.S. persons who have reduced their U.S. tax burden by claiming benefits under Puerto Rico Act 22. This comes as no surprise following recent increased interest from Congress, the Treasury Department, and the IRS on the revenue lost when U.S. taxpayers relocate to Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'The IRS will start by gathering the names of individuals who may be audited. It may do so based on returns filed directly with the IRS that take Puerto Rico-specific positions, from Hacienda through tax sharing agreements, and possibly from subpoenas to return preparers located in Puerto Rico. In fact, we know from a recent draft IRS report1 that much of this has already happened.',
      },
      {
        type: 'paragraph',
        text: 'A formal Campaign signals a coordinated effort across the IRS to address a narrow set of issues. This often leads to a standard examination process. The IRS may adopt template-based information requests that are the same for all taxpayers. It may also adopt and follow consistent settlement procedures across cases. This means that all audits within the Campaign tend to be deep and protracted, and that the timing of settlement may be driven by considerations outside of an individual’s particular case.',
      },
      {
        type: 'paragraph',
        text: 'In this Campaign, the IRS explained that it will address noncompliance through examinations, outreach, and soft letters (which are less than an audit, but more than a suggestion) to U.S. taxpayers who currently claim benefits under Act 22. Although the Campaign only references Act 22 participants, one can reasonably expect that an IRS inquiry into an individual holding an Act 22 decree would likely expand into at least a review of the Act 20 entities which provide sources of income to such individuals.',
      },
      {
        type: 'paragraph',
        text: 'Examinations under the Campaign will target U.S. individuals who may be improperly excluding income subject to U.S. tax; who may be improperly claiming bona fide residency in Puerto Rico; or who may be incorrectly reporting U.S. source income as Puerto Rican source income in order to avoid U.S. taxation. More specifically, the IRS will undoubtedly focus on factual and legal issues commonly associated with U.S. participants in Act 22, like:',
      },
      {
        type: 'list',
        items: [
          'Whether a U.S. person properly established bona fide residency in Puerto Rico under three separate tests: (1) the presence test; (2) the tax home test; and (3) the closer connection test;',
          'Ensuring that bona fide residents of Puerto Rico have maintained their residency and detailed recordkeeping, which requires analyses of quantitative data (e.g., day counts, income figures, and business details) and qualitative data (e.g., personal relationships and affiliations);',
          'Analyzing whether a company was properly formed in Puerto Rico, including whether a participant paid any U.S. “exit” tax under U.S. Tax Code section 367 and properly filed Form 926;',
          'Reviewing on-going transactions between Puerto Rican companies and related U.S. companies to determine whether transactions satisfy U.S. transfer pricing rules;',
          'Determining whether Puerto Rican companies have operated through a “U.S. trade or business,” which could subject the company to U.S. tax, and whether Forms 1120-F (even protective ones) have been filed;',
          'Evaluating whether a preexisting U.S. entity that migrated substantially all of its assets to a Puerto Rican entity is subject to U.S. anti-“inversion” rules, allowing the IRS to treat the entity as a fully-taxable U.S. corporation; and',
          'Others.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The tone of the Campaign – i.e., specifically referencing possible tax avoidance motives – may indicate that the Department of Justice (DOJ) will not stand by while the IRS confines its review to the civil arena. As was widely publicized, on October 21, 2020, the Department of Justice indicted and arrested the head of BDO Puerto Rico’s Tax Division for allegedly violating the rules of Acts 20 and 22. The DOJ’s announcement of the indictment suggests more upcoming activity, noting “IRS Criminal Investigation will vigorously pursue any individuals and professionals that fraudulently enrich themselves by abusing government tax incentive programs.” 2',
      },
      {
        type: 'paragraph',
        text: 'The DOJ indictment, along with the fact that the IRS (at the request of Congress) has already created a list of those benefitting from Puerto Rico’s tax regimes, serves as a warning to anyone participating in Acts 20 and 22 (now Act 60) and other Puerto Rico incentive programs that an IRS audit could be forthcoming. Taxpayers should review their reporting positions and, if appropriate, consider rectifying past non-compliance now. Caplin & Drysdale has experience counseling clients through voluntary disclosures and through civil audits and criminal examinations, as well as evaluating Puerto Rico-specific U.S. tax issues. Tom Duffy has experience with Puerto Rico tax issues, and with working under Kovel to file amended returns. For more information, please contact the authors:',
      },
    ],
  }),
  defineArticle({
    slug: 'us-tax-consequences-act-60',
    title: 'U.S. Tax Consequences of Working in the U.S. on Behalf of Your Act 60 Company',
    description: 'U.S. tax consequences when Puerto Rico residents work in the U.S. on behalf of their Act 60 companies.',
    publishedAt: '2021-03-07',
    excerpt: 'As the IRS Campaign in Puerto Rico kicks off, now would be a good time for taxpayers to assess their past U.S. tax filings and prepare for the very real event of an IRS audit or soft letter. In our experience, there are two main areas of U.S. federal tax noncompliance that are overlooked or misunderstood by many, if not most, Act 601 residents and companies, that will likely be a serious focus…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Puerto-Rican-Residents-Working-From-The-US-Final-Version.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'IRS'],
    content: [
      {
        type: 'paragraph',
        text: 'As the IRS Campaign in Puerto Rico kicks off, now would be a good time for taxpayers to assess their past U.S. tax filings and prepare for the very real event of an IRS audit or soft letter. In our experience, there are two main areas of U.S. federal tax noncompliance that are overlooked or misunderstood by many, if not most, Act 601 residents and companies, that will likely be a serious focus of the IRS Campaign:',
      },
      {
        type: 'list',
        items: [
          'Puerto Rico residents working for their Act 60 companies while present in the U.S. mainland, and',
          'Act 60 companies being engaged in a U.S. trade or business and generating income that is effectively connected with such trade or business.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Many owners of Puerto Rico Act 60 companies are frequently traveling to the U.S. mainland. There seems to be a sense among some of these owners that, if they spend 183 days a year in PR and qualify as PR residents, they are free to spend the rest of their time in the U.S. mainland working on behalf of their Act 60 companies without incurring any U.S. federal tax consequences for either themselves or their Act 60 companies. We are not sure why this line of thinking is so prevalent on the island, but it is certainly erroneous.',
      },
      {
        type: 'paragraph',
        text: 'With the IRS primed and ready to identify and address these issues, we anticipate that the activity will not be limited to tax liability. In addition to the taxes, interest, and penalties that will be owed once the IRS focuses on these taxpayers and issues assessments, we believe this will be an area that may even see criminal penalties assessed in the most egregious situations. However, the good news is that for most taxpayers, it is not too late to remedy these issues, even for past years of noncompliance.',
      },
      {
        type: 'paragraph',
        text: 'The article will use a fictional case study to explain and address the issues and tax consequences of working from the U.S. mainland on behalf of your Act 60 company.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Puerto Rican Residents Working Partly in The U.S.',
      },
      {
        type: 'paragraph',
        text: 'The following example illustrates the rules related to bona fide residents of Puerto Rico working part of the year in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Joe is a U.S. citizen who is a bona fide resident of Puerto Rico. During the year Joe spent 200 days in Puerto Rico and 160 days in the U.S. The remaining 5 days were spent traveling outside the U.S. and Puerto Rico.',
      },
      {
        type: 'paragraph',
        text: 'About half of Joe’s time in the U.S. (roughly 80 days) is truly vacation time, where he is spending holidays with his family or traveling to tourist destinations. The other 80 days in the U.S., Joe works remotely from wherever he happens to be that day. For example, on the workdays, Joe checks his work emails and drafts emails replies. He also makes and receives business-related phone calls.',
      },
      {
        type: 'paragraph',
        text: 'Joe’s Puerto Rican Act 60 company (“PRCo”) receives $6 million in management fees for performing export services. Joe owns 100% of PRCo, and he is an employee of PRCo. Joe receives a salary of $300,000 from PRCo for his services. After paying Joe’s salary and other expenses, PRCo’s profit is $5 million. (Note: It should be noted that the vast majority of Act 60 companies are established as LLC’s. A Puerto Rico LLC that has not elected to be treated as a flow-through entity for U.S. purposes is treated as a corporation for U.S. purposes.)',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Joe and PRCo are Separate “Persons”',
      },
      {
        type: 'paragraph',
        text: 'Both Joe and PRCo are separate taxpayers. Generally, a corporation, including one wholly-owned by one shareholder, is a taxpayer separate and distinct from that shareholder.2',
      },
      {
        type: 'paragraph',
        text: 'Thus, both Joe and PRCo, in their separate capacities, are potentially subject to U.S. income tax. Puerto Rico is not considered part of the United States for most U.S. income tax purposes.3 4 Therefore, PRCo is treated as a foreign corporation. Generally, foreign corporations doing business in the U.S. are subject to U.S. corporate income tax.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Joe’s Activities in The U.S. are PRCo’s Activities in The U.S.',
      },
      {
        type: 'paragraph',
        text: 'A corporation can act only through its authorized agents.5 Joe is an employee of PRCo. If Joe is working for PRCo while he is in the U.S., then PRCo (through Joe) is operating in the U.S.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Performing Services in The U.S. Generates U.S.-Source Income',
      },
      {
        type: 'paragraph',
        text: 'Personal services income is sourced where the services are performed, without regard to the location of the payor, the residence of the taxpayer, the place of contracting, or the place of payment.6',
      },
      {
        type: 'paragraph',
        text: 'For employees, the general rule is that the source of compensation is determined by comparing the number of days of performance of the personal services within the U.S. to his or her total number of days of performance of personal services during the year.7 Thus, if Joe’s total workdays during the year was 250, and he worked from the U.S. during 80 of those days, then 32% (80 / 250) of his total compensation for the year would generally be treated as U.S.-source income. Thus, Joe could not exclude $96,000 (300,000 x 32%) of his salary from U.S. taxable income under Code §933(1). Only $204,000 (300,000 x 68%) of his salary could be excluded from U.S. taxable income. If we assume that Joe’s U.S.-source salary of $96,000 is taxed at the highest rate of 37%, Joe’s individual income tax on the U.S.-source salary would be $35,520.',
      },
      {
        type: 'paragraph',
        text: 'The source of PRCo’s income “is determined on the basis that most correctly reflects the proper source of the income under the facts and circumstances of the particular case.”8 In many cases, the facts and circumstances will be such that an apportionment on the time basis, similar to that described above for Joe, is acceptable.9 Therefore, if PRCo primarily generates its income from Joe’s activities, perhaps as much as 32% of PRCo’s income would be U.S.-source income. Thus, perhaps $1,600,000 (5,000,000 x 32%) of PRCo’s profits would be U.S.-source income.',
      },
      {
        type: 'paragraph',
        text: 'It is possible that Joe does not generate all of the income earned by PRCo. For example, if PRCo has a support staff of employees performing services in Puerto Rico, then perhaps less than 32% of PRCo’s income should be treated as U.S.-source income due to Joe’s activities in the U.S. In this case, an analysis would need to be performed (such as a transfer pricing analysis) to determine the portion of PRCo’s income earned by Joe as compared to the portion of PRCo’s income earned by the staff of employees. However, if the IRS were to assert that 32% of PRCo’s income was U.S.-source income, PRCo would bear the burden of proving that the IRS’s determinations are erroneous.10',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Bright-Line Test For Being Engaged In U.S. Business – Performing Services In The U.S.',
      },
      {
        type: 'paragraph',
        text: 'As a foreign corporation, PRCo is subject to U.S. corporate income tax only if it is engaged in a U.S. trade or business.11 In many circumstances, it is unclear whether a foreign corporation has sufficient activity in the U.S. to be considered engaged in a U.S. trade or business. However, with respect to services, the statute is clear:',
      },
      {
        type: 'paragraph',
        text: '[T]he term “trade or business within the United States” includes the performance of personal services within the United States at any time within the taxable year * * *. Code §864(b).',
      },
      {
        type: 'paragraph',
        text: 'Because PRCo is in the business of performing services and because Joe (PRCo’s employee) is acting on behalf of PRCo while he works from the U.S., it is clear that Joe’s activities in the U.S. would cause PRCo to be engaged in a U.S. trade or business.',
      },
      {
        type: 'paragraph',
        text: 'Because PRCo is engaged in a U.S. trade or business and has U.S.-source services income, its U.S. earnings would be subject to U.S. corporate income tax. Thus, as much as $1,600,000 (5,000,000 x 32%) of PRCo’s profits would be subject to U.S. corporate income tax. With the U.S. federal corporate income tax imposed at a rate of 21%, the federal corporate income tax would be as much as $336,000. The after-tax U.S. earnings would be $1,264,000 (1,600,000 – 336,000). State corporate income taxes may also apply.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Second Level Branch Profits Tax',
      },
      {
        type: 'paragraph',
        text: 'Not only would PRCo’s U.S. income be subject to U.S. corporate income tax, but it would also be subject to a 30% branch profits tax.',
      },
      {
        type: 'paragraph',
        text: 'To understand the branch profits tax, it is helpful to first understand how a foreign-owned U.S. corporation is taxed. The U.S. corporation is first subject to U.S. corporate income tax. Second, when dividends are paid to the foreign shareholders, the dividends are subject to a 30% U.S. withholding tax. The 30% rate may be reduced pursuant to an income tax treaty.',
      },
      {
        type: 'paragraph',
        text: 'The branch profits tax is a substitute for the 30% dividend withholding tax. It is imposed on the U.S. earnings of a foreign corporation that are shifted out of the U.S. branch. In our example, because PRCo is a foreign corporation that has U.S. earnings (due to Joe’s activities in the U.S.) the branch profits tax will apply to PRCo’s U.S. earnings. Although the rate of 30% is often reduced pursuant to income tax treaties, there is no income tax treaty between the U.S. and Puerto Rico. Therefore, the full 30% rate would apply to the U.S. earnings of PRCo.',
      },
      {
        type: 'paragraph',
        text: 'Continuing the example above, if PRCo had after-tax U.S. earnings of $1,264,000, the branch profits tax would be $379,200.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Dividends from PRCo to Joe',
      },
      {
        type: 'paragraph',
        text: 'Because more than 25% of PRCo’s gross income is effectively connected with the conduct of a U.S. business, dividends paid by PRCo to Joe will be partly U.S.-source income.12 The U.S.-sourced portion of the dividend will be based on a ratio of PRCo’s gross U.S.-sourced income and its total gross income.13 In the example above, as much as 32% of the dividend would be U.S.-source income.',
      },
      {
        type: 'paragraph',
        text: 'After the U.S. corporate income tax and the U.S. branch profits tax, PRCo’s earnings would be $4,284,800 (5,000,000 – 336,000 – 379,200). When these earnings are paid as a dividend to Joe, $1,371,136 (4,284,800 x 32%) would be U.S.-source income. If we assume that all of the earnings of PRCo ($4,284,800) are distributed to Joe in the current year, $1,371,136 of the dividend would be taxable to Joe in the U.S. Assuming a tax rate of 23.8%,14 Joe’s individual income tax on the U.S.-source dividend would be as much as $326,330 (1,371,136 x 23.8%).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Summary of Estimated U.S. Taxes',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The total estimated U.S. tax owed by PRCo and Joe would include:',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo U.S. corporate income tax $336,000',
      },
      {
        type: 'heading',
        level: 3,
        text: 'PRCo U.S. branch profits tax 379,200',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Joe U.S. income tax on salary 35,520',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Joe U.S. income tax on dividend 326,330',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Estimated total $1,077,050',
      },
      {
        type: 'paragraph',
        text: 'The total estimated combined corporate and individual income taxes would be $1,077,050. Consequently, each day that Joe worked in the U.S. cost him $13,463 ($1,077,050/80) in tax. (Note: This estimate is conservative as it does not include interest and penalties that would be assessed by the IRS. Penalties range from 20%-75% and are assessed on the total amount of underpaid tax. We anticipate the IRS to be very aggressive in imposing penalties on taxpayers in the upcoming IRS Campaign.)',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Tax Filings for PRCo',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 1120-F',
      },
      {
        type: 'paragraph',
        text: 'In general, every foreign corporation that is engaged in trade or business in the U.S. at any time during the taxable year is required to file a U.S. tax return (Form 1120-F, U.S. Income Tax Return of a Foreign Corporation)15. Thus, PRCo will be required to file Form 1120-F for the year.',
      },
      {
        type: 'paragraph',
        text: 'If PRCo is required to file a U.S. tax return but does not file, the IRS can disallow all deductions.16 Treas. Reg. §1.882-4 provides in part:',
      },
      {
        type: 'paragraph',
        text: 'A foreign corporation shall receive the benefit of the deductions and credits otherwise allowed to it with respect to the income tax, only if it timely files * * * a true and accurate return * * * for the taxable year with the conduct of a trade or business in the United States by that corporation. [Emphasis added]',
      },
      {
        type: 'paragraph',
        text: 'Thus, if PRCo does not file Form 1120-F with the IRS, it may be subject to U.S. corporate income tax on its gross income, rather than on its net income. Generally, deductions are disallowed only if the tax return is filed more than 18 months after the original due date for filing Form 1120-F.17',
      },
      {
        type: 'paragraph',
        text: 'Failing to timely file U.S. tax returns may also cause PRCo to be subject to various penalties, such as the failure to file penalty and the failure to pay penalty.18',
      },
      {
        type: 'paragraph',
        text: 'It is also important to note that the statute of limitations for the IRS to collect the tax from PRCo does not begin to run until PRCo files its U.S. tax return.19',
      },
      {
        type: 'paragraph',
        text: 'It would be highly advisable for Act 60 companies taking the position that they do not believe a U.S. tax return filing to be necessary because they were not engaged in a U.S. trade or business during the tax year to nonetheless file a protective Form 1120-F. This election protects the right to receive the benefit of the deductions and credits attributable to gross income if it is later determined after the return was filed, that the original determination was incorrect.20 More importantly, it begins the running of the statute of limitations, which limits the time period for the IRS to assess tax for that year.21',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Form 5472',
      },
      {
        type: 'paragraph',
        text: 'As a foreign corporation that is engaged in a U.S. trade or business, PRCo would be considered a “reporting corporation” for purposes of filing Form 5472, Information Return of a 25% Foreign-Owned U.S. Corporation or a Foreign Corporation Engaged in a U.S. Trade or Business 22.',
      },
      {
        type: 'paragraph',
        text: 'A “reporting corporation” must generally file Form 5472 if it had a “reportable transaction” with a foreign or domestic related party.23',
      },
      {
        type: 'paragraph',
        text: 'PRCo’s payment of a salary to Joe would be considered a reportable transaction. Consequently, PRCo would need to include a Form 5472 with the filing of its Form 1120-F. The dollar amounts of reportable transactions with foreign related parties generally must be reported in Part IV of Form 5472. Here, Joe is a U.S. person. Although the monetary transactions with Joe would not need to be reported in Part IV, Part III would need to be completed, listing Joe as the domestic-related party with which PRCo had reportable transactions during the year.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'The penalty for failing to file Form 5472 is generally $25,000.24',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Additional U.S. Tax Filings for Joe',
      },
      {
        type: 'paragraph',
        text: 'As described above, because more than 25% of PRCo’s gross income is effectively connected with the conduct of a U.S. business, dividends paid by PRCo to Joe will be partly U.S.-source income. This means that Joe will be treated as a U.S. person for purposes of testing whether PRCo is a controlled foreign corporation (“CFC”), and that PRCo will be considered a CFC (because it is owned 100% by a U.S. person).25',
      },
      {
        type: 'paragraph',
        text: 'As a U.S. shareholder of a CFC, Joe will be required to annually file Form 5471, and he will be required to pick up any Subpart F Income and/or GILTI inclusions.26 The U.S. income earned by PRCo should not be Subpart F Income or tested income (a component of GILTI).27 28 29',
      },
      {
        type: 'paragraph',
        text: 'The penalty for failure to file Form 5471 is generally $10,000.30 It is also important to note that the statute of limitations for the IRS to collect tax from Joe or audit his individual tax return (Form 1040) does not begin to run until he files this form.31',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Given the impending IRS Campaign and recent activity emanating from the IRS-Criminal Investigation Division on the island, taxpayers should act now to assess past years’ filings for areas of noncompliance and seek appropriate tax advice on how to minimize or remedy potential civil and/or criminal exposure. For ideas on how to work from the U.S. while minimizing U.S. taxes, please refer to a previous article on the topic. http://tomduffycpa.com/puerto-rico-companies-mitigate-us-task-risks/',
      },
    ],
  }),
  defineArticle({
    slug: 'act-20-22-taxpayers-asking-questions',
    title: 'Alert: Act 20/22 Taxpayers Asking Questions Following Indictment and Arrest of BDO Tax Division Head',
    description: 'Implications for Act 60 taxpayers following the DOJ indictment of BDO Puerto Rico\'s Tax Division head.',
    publishedAt: '2020-12-22',
    excerpt: 'The Department of Justice (“DOJ”) indicted and arrested the head of BDO Puerto Rico’s Tax Division for allegedly flouting rules surrounding Puerto Rico’s Act 20/22/60 tax incentive program (“Act 60”). The DOJ may now possess a list of BDO’s Act 60 clients.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Nov-2020-Act-20_22-Taxpayers-Asking-Questions-Following-Indictment-and-Arrest-of-BDO-Tax-Division-Head.pdf',
    relatedSlugs: [
      'irs-puerto-rico'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Compliance'],
    content: [
      {
        type: 'paragraph',
        text: 'The Department of Justice (“DOJ”) indicted and arrested the head of BDO Puerto Rico’s Tax Division for allegedly flouting rules surrounding Puerto Rico’s Act 20/22/60 tax incentive program (“Act 60”). The DOJ may now possess a list of BDO’s Act 60 clients.',
      },
      {
        type: 'paragraph',
        text: 'What could P.R. residents who are utilizing the Act 60 regime do now? As detailed below:',
      },
      {
        type: 'paragraph',
        text: 'P.R. Residency: Reassess whether you satisfy the three-part P.R. residency test, and understand the consequences if you do not.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'U.S. Taxation of Your P.R. Company: Reevaluate U.S. positions for your Act 60 company:',
      },
      {
        type: 'list',
        items: [
          'Did you take all required steps when you formed your Act 60 company, including filing Form 926 identifying assets transferred to the entity? If not, what penalties may apply, and will the normal time limit on IRS audits be suspended?',
          'Is your on-going transfer pricing defensible or could you face adjustments and penalties?',
          'Is your P.R. company engaged in a U.S. trade or business and what are the consequences?',
          'Will your P.R. company be taxed as a U.S. company under very technical “inversion” rules?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Defending against potential penalties: If you are uncertain about your compliance, you should consult with experienced tax counsel. Key issues are whether (and how) to act preemptively before the Internal Revenue Service (“IRS”) approaches you.',
      },
      {
        type: 'paragraph',
        text: 'Caplin & Drysdale has vast experience addressing sensitive tax compliance matters, proactively or during an IRS audit. We work closely with economists and accountants — including our co-author, Tom Duffy of Tom Duffy CPA P.C. — in a manner that retains the protections of the attorney-client privilege (specifically under “Kovel” arrangements) and allows us to move quickly. We are highly experienced in the key technical tax matters — residency, formation issues, transfer pricing, and inversion rules. Our contact information is below.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Ι. Meeting the 3-Part P.R. Residency Requirement',
      },
      {
        type: 'paragraph',
        text: 'The rules governing eligibility for federal tax relief under the Internal Revenue Code (the “U.S. Tax Code”) and tax incentives under Act 60 can be complicated, but they must be followed. Eligibility for the incentives turns on whether a U.S. citizen is a “bona fide resident” of Puerto Rico. To qualify as a bona fide Puerto Rican resident, a U.S. citizen must satisfy three tests: (1) the presence test; (2) the tax home test; and (3) the closer connection test.',
      },
      {
        type: 'paragraph',
        text: 'Though the presence and tax home tests require detailed recordkeeping, they are relatively straightforward. The required analyses generally involve quantitative, numerical data — e.g., day counts, income figures, and business details. The closer connection test, conversely, requires a more nuanced and difficult facts and circumstances analysis involving an array of qualitative data — e.g., personal relationships and affiliations. In Caplin & Drysdale’s experience, these subjective factors and analysis often make or break a residency dispute and require careful and up-to-date analysis. It is imperative that U.S. citizens claiming bona fide residency status in Puerto Rico know whether they meet these tests, and, if not, obtain advice as to how to remedy any shortcomings.',
      },
      {
        type: 'paragraph',
        text: 'If the residency test is not met, the U.S. may tax all of your P.R. income. In addition, your Act 60 company will likely be a “controlled foreign corporation,” making it subject to current U.S. income taxation under subpart F or the “GILTI” (the Global Intangible Low-Taxed Income) regime.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'ΙΙ. Analyzing Cross-Border Issues',
      },
      {
        type: 'paragraph',
        text: 'Even if taxpayers satisfy the residency test, key cross-border issues remain important, including: (1) whether the Act 60 company was properly formed; (2) whether the Act 60 company’s transfer pricing is compliant, (3) whether the Act 60 company has a U.S. presence because its owners or employees perform work for it while in the United States, and (4) whether the Act 60 company might be considered an “inverted” U.S. company and taxed on all of its income by the United States.',
      },
      {
        type: 'list',
        items: [
          'Formation. When you formed your Act 60 company, you may have transferred assets to that company, including customer lists, know-how, cash, etc. These formation transactions are subject to a U.S. “exit” tax under section 367 of the U.S. Tax Code. In addition, the transaction must be reported on Form 926. Failure to file the form may result in penalties, and, critically, causes the statute of limitations on assessment to stay open permanently, even many years after the Act 60 entity was formed. If you have not filed Form 926, you should consider doing so now.',
          'Transfer Pricing. Most Act 60 situations involve on-going transactions between the P.R. entity and a related U.S. entity, such as regular payments of consulting fees for services provided by the P.R. company to the U.S. company. Those transactions must satisfy U.S. transfer pricing rules, which require that the transactions be priced at “arm’s length.” Determining arm’s length pricing — for both formation and on-going transactions — is as much art as science and normally benefits from the involvement of transfer pricing counsel, with trained economist support. Caplin & Drysdale works with economists under “Kovel” arrangements which allow discussions to be under the umbrella of the attorney-client privilege.',
          'U.S. Presence. An Act 60 company may become subject to U.S. taxation if it engages in a “U.S. trade or business.” This may occur if an owner or employee devotes time to company matters while personally in the United States. In our experience, even short-term presence or a single transaction in the United States can be problematic as the extent of activity required in the United States for a trade or business to exist is both low and legally ambiguous. The presence of an owner or business to exist is both low and legally ambiguous. The presence of an owner or employee of an Act 60 company in the United States, therefore, may not only cause residency and personal income tax issues for that owner or employee (see above), but it may also subject the Act 60 company to not one, but three levels of U.S. tax: (1) corporate income tax, (2) branch profits tax, and (3) dividends tax. These results can be disastrous but can be defended and are avoidable with proper counsel and planning.',
          'Inversions. If a preexisting U.S. corporation or U.S. partnership migrates substantially all of its assets to a P.R. entity classified as a corporation, the “inversion” rules can be triggered. If these inversion rules apply, the P.R. entity is taxed as a U.S. corporation. U.S. corporations are subject to U.S. corporate income tax on their worldwide income. In this case, even if the P.R. entity genuinely earns income from P.R. sources, the income is subject to U.S. corporate income tax. If no U.S. corporate income tax returns have been filed, the statute of limitations remains open.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'ΙΙΙ. Assessing and Mitigating Exposure',
      },
      {
        type: 'paragraph',
        text: 'If the IRS determines a tax deficiency exists from an improper claim of P.R. residency, transfer pricing, or Act 60 company presence in the United States, or inversion, standard civil penalties, which can amount to 20%, 40%, or even 75% of the unpaid tax, and interest could apply. Because certain IRS information forms may not have been filed, statutes of limitation could remain open for far more than the standard 3 or even 6 years. If an audit occurs, counsel must be experienced in how to navigate it, fully complying with IRS information and document requests while remaining sensitive to the pressure points.',
      },
      {
        type: 'paragraph',
        text: 'Utilizing Act 60 and its predecessor was wise business planning for many. However, in the wake of DOJ’s recent action, some taxpayers are appropriately reviewing their tax positions. If a taxpayer has improperly claimed benefits under Act 60, it is not too late. Now is the appropriate time to consider a voluntary disclosure. In the IRS approved voluntary disclosure program, a taxpayer must file six years of accurate returns and pay exacting penalties in addition to tax and interest; however, taxpayers who complete the program are also granted criminal amnesty. And even if a voluntary disclosure program is not appropriate, or if the IRS has opened an audit or investigation, engage experienced counsel now.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'ΙV. Conclusion',
      },
      {
        type: 'paragraph',
        text: 'In light of recent enforcement activity, both U.S. persons residing in Puerto Rico and Act 60 companies are conducting a thorough review of their U.S. tax positions. Attorneys in Caplin & Drysdale’s International, Tax Controversy, and Private Client groups have extensive experience addressing Act 60 issues, as well as mitigating and navigating IRS examinations. Tom Duffy has experience with P.R. tax issues, and with working under Kovel to file amended returns.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'For more information, please contact the authors:',
      },
    ],
  }),
  defineArticle({
    slug: 'bona-fide-resident-puerto-rico',
    title: 'Bona Fide Resident of Puerto Rico – Closer Connection Test',
    description: 'The closer connection test for establishing bona fide residency in Puerto Rico.',
    publishedAt: '2020-12-08',
    excerpt: 'In general, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test.1In this article we will primarily focus on the closer connection test.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Bona-Fide-Residency-in-Puerto-Rico.pdf',
    relatedSlugs: [

    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Bona Fide Residency'],
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Bona Fide Resident of Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'In general, to be considered a bona fide resident of Puerto Rico, an individual must meet (i) a presence test, (ii) a tax home test, and (iii) a closer connection test.1In this article we will primarily focus on the closer connection test.',
      },
      {
        type: 'paragraph',
        text: 'Let’s start with an example of a US citizen named Joe. Joe lives in Connecticut and works for a hedge fund. Joe is married and has two children. Joe has heard about certain tax benefits of moving to Puerto Rico. Joe decides to move to Puerto Rico and become a bona fide resident of Puerto Rico so that he can take advantage of the special tax benefits there.',
      },
      {
        type: 'paragraph',
        text: 'Joe meets the presence test because he spends more than 183 days in Puerto Rico each year.2 In addition, Joe’s principal place of business is in Puerto Rico. Therefore, Joe meets the tax home test.3',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Closer Connection Test',
      },
      {
        type: 'paragraph',
        text: 'To meet the closer connection test, Joe must have a closer connection to Puerto Rico than to the U.S. or to a foreign country.4 Since Joe only spends a week or two each year traveling outside the U.S. and Puerto Rico, Joe clearly does not have a closer connection to any foreign country. However, Joe spends several months a year in the U.S. and continues to have assets and other connections to the U.S. Therefore, it is necessary for Joe to determine whether he meets the closer connection test.',
      },
      {
        type: 'paragraph',
        text: 'The closer connection test applies the principles of the “closer connection exception” under Code §7701(b)(3)(B)(ii) and Treas. Reg. §301.7701(b)-2(d).5',
      },
      {
        type: 'paragraph',
        text: 'Form 8898, Statement for Individuals Who Begin or End Bona Fide Residence in a U.S. Possession, is required for certain individuals becoming residents of Puerto Rico (or other U.S. possessions). Part III of Form 8898 is titled “Closer Connection to the United States, Foreign Country, or Possession.” This part of the form lists a number of questions that are intended to “elicit information relevant to determining whether an individual has closer connections to the United States or a foreign country than to the relevant possession for purposes of the closer connection test of §937(a).”6',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Treas. Reg. §301.7701(b)-2(d) is titled “Closer connection to a foreign country,” and provides:',
      },
      {
        type: 'paragraph',
        text: '(1) In general. For purposes of section 7701(b) and the regulations under that section, an alien individual will be considered to have a closer connection to a foreign country than the United States if the individual or the Commissioner establishes that the individual has maintained more significant contacts with the foreign country than with the United States. In determining whether an individual has maintained more significant contacts with a foreign country than the United States, the facts and circumstances to be considered include, but are not limited to the following:',
      },
      {
        type: 'paragraph',
        text: '(i) The location of the individual’s permanent home;',
      },
      {
        type: 'paragraph',
        text: '(ii) The location of the individual’s family;',
      },
      {
        type: 'paragraph',
        text: '(iii) The location of personal belongings, such as automobiles, furniture, clothing, and jewelry owned by the individual and his or her family;',
      },
      {
        type: 'paragraph',
        text: '(iv) The location of social, political, cultural, or religious organizations with which the individual has a current relationship;',
      },
      {
        type: 'paragraph',
        text: '(v) The location where the individual conducts his or her routine personal banking activities;',
      },
      {
        type: 'paragraph',
        text: '(vi) The location where the individual conducts business activities (other than those that constitute the individual’s tax home);',
      },
      {
        type: 'paragraph',
        text: '(vii) The location of the jurisdiction in which the individual holds a driver’s license;',
      },
      {
        type: 'paragraph',
        text: '(viii) The location of the jurisdiction in which the individual votes;',
      },
      {
        type: 'paragraph',
        text: '(ix) The country of residence designated by the individual on forms and documents; and',
      },
      {
        type: 'paragraph',
        text: '(x) The types of official forms and documents filed by the individual, such as Form 1078 (Certificate of Alien Claiming Residence in the United States), Form W-8 (Certificate of Foreign Status) or Form W-9 (Payer’s Request for Taxpayer Identification Number).',
      },
      {
        type: 'paragraph',
        text: '(2) Permanent home. For purposes of paragraph (d)(1)(i) of this section, it is immaterial whether a permanent home is a house, an apartment, or a furnished room. It is also immaterial whether the home is owned or rented by the alien individual. It is material, however, that the dwelling be available at all times, continuously, and not solely for stays of short duration.',
      },
      {
        type: 'paragraph',
        text: 'As indicated in the quoted regulation above, the closer connection test is a “facts and circumstances” test. The IRS and a court would look at the facts and circumstances to determine whether Joe maintained more significant contacts with the U.S. than with Puerto Rico.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Joe’s Time in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Even though Joe may meet the presence test by spending more than 183 days in Puerto Rico, and even though none of the factors listed in the regulation specifically mention time spent by the taxpayer in the U.S., a highly critical factor in assessing Joe’s contacts with the U.S. would be how much time he spends in the U.S. If Joe spends 185 days in Puerto Rico during the year and 180 days in the U.S., it would seem that Joe may be on the tipping point of not meeting the closer connection test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Permanent Home',
      },
      {
        type: 'paragraph',
        text: 'The location of an individual’s permanent home is the first listed factor in the regulation and is perhaps the most important factor.',
      },
      {
        type: 'paragraph',
        text: 'If Joe owns a home in Connecticut and does not sell it or does not rent it while he is in Puerto Rico, this could be a very significant connection to the U.S.',
      },
      {
        type: 'paragraph',
        text: 'It was mentioned above that Joe spends several months a year in the U.S. A significant question would be: Where does he stay when he is present in the U.S.? Is he in a hotel on business without his family accompanying him? Or does he stay in his former principal residence in Connecticut with his family?',
      },
      {
        type: 'paragraph',
        text: 'If the home that Joe stays in is available to him at all times, then this could be considered Joe’s permanent home in the U.S.7 For example, if Joe’s parents had an in-law suite that Joe and his family could use whenever they wanted, it would be considered a permanent home in the U.S.',
      },
      {
        type: 'paragraph',
        text: 'Lacking a permanent home in the U.S. is not, in and of itself, a requirement of meeting the closer connection test. Joe may have two permanent homes: one in the U.S. and one in Puerto Rico. However, having a permanent home in the U.S. would be a very significant strike against Joe in analyzing whether he meets the closer connection test.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Location of Family',
      },
      {
        type: 'paragraph',
        text: 'The location of an individual’s family is the second listed factor in the regulation and is perhaps the second most important factor.',
      },
      {
        type: 'paragraph',
        text: 'In our society, when an individual has a spouse and children, his or her closest family members are generally the spouse and children. It would be very important to analyze where Joe’s wife and children are throughout the year. If Joe is spending several months a year in the U.S., where are his wife and children during this time? Do they spend nearly the entire year in Puerto Rico? Or are they coming to the U.S. as much as (or even more than) Joe? Where are Joe’s children enrolled in school? Where do they go to camp? Are they regularly connecting with individuals in the U.S. or is Puerto Rico more like their home base?',
      },
      {
        type: 'paragraph',
        text: 'The more time that Joe’s spouse and children spend in the U.S., the more that Joe would be treated as having U.S. connections.',
      },
      {
        type: 'paragraph',
        text: 'Every individual’s circumstance is different. For example, if Joe were not married, did not have children, and his widowed mother lived with him in Puerto Rico, then the time that his mother spends in the U.S. would be an important factor to consider.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Location of Personal Belongings',
      },
      {
        type: 'paragraph',
        text: 'The location of personal belongings is the third listed factor in the regulation. If Joe and his wife did not move any of their furniture from their Connecticut home to Puerto Rico, but instead purchased new furniture for their Puerto Rican home, that would suggest continued connections with the U.S. The U.S. connections might be considered particularly strong if their Connecticut furniture included heirlooms or other furniture with significant sentimental attachments (furniture received as a wedding gift, etc.).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Other Factors Listed',
      },
      {
        type: 'paragraph',
        text: 'The regulations quoted above list multiple other factors. These factors are important and should be considered when trying to meet the closer connection test. For example, Joe should get a Puerto Rican driver’s license, designate Puerto Rico as his residence on official forms, and register to vote in Puerto Rico. However, one should understand that the IRS and a judge may not heavily weight factors that can be easily manipulated.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Years Spent in Puerto Rico',
      },
      {
        type: 'paragraph',
        text: 'Although not explicitly listed as a factor, if Joe moves to Puerto Rico for just a few years and then moves back to the U.S., it may suggest that Joe’s connections to Puerto Rico were not that significant. The IRS can generally audit individuals for up to three years after they have filed their tax returns.8 This “after-the-fact” review can provide the IRS with certain insights (one might say 20/20 hindsight) that are not apparent upfront.',
      },
      {
        type: 'paragraph',
        text: 'Further, if Joe moves back to the U.S. after a short number of years, an IRS auditor may feel that Joe was “taking advantage” of the tax breaks in Puerto Rico. Although the tax breaks are wholly legitimate for bona fide residents of Puerto Rico, the IRS auditor may be motivated to investigate Joe’s contacts with the U.S., hoping to torpedo Joe’s claim that he met the closer connection test. If Joe’s facts are already close to the line, having a motivated IRS auditor may be a concern.',
      },
      {
        type: 'paragraph',
        text: 'If after leaving Puerto Rico, Joe and his wife sell all of their Puerto Rican furniture or donate it to a charity, this would perhaps suggest that they did not have much of a connection to those personal belongings (as compared to furniture they may continue to own in Connecticut).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Planning to Meet the Closer Connection Test',
      },
      {
        type: 'paragraph',
        text: 'Clearly, it is advisable to only have one permanent home and to have that home in Puerto Rico. In addition, it is important for close family members to be located in Puerto Rico during as much of the year as possible.',
      },
      {
        type: 'paragraph',
        text: 'If an individual moves to Puerto Rico and wishes to claim bona fide residency in Puerto Rico, but the individual continues to have contacts with the U.S., it would be prudent for the individual to take stock of their daily activities in Puerto Rico. Recollections of genuine and meaningful interactions on a regular basis with people located in Puerto Rico may be the key to sway a judge (who is otherwise on the fence) of the strong connections the individual has with Puerto Rico.',
      },
    ],
  }),
  defineArticle({
    slug: 'corporate-inversions',
    title: 'Corporate Inversions – Is Your Puerto Rico Act 60 Company Still Subject to U.S. Tax?',
    description: 'How IRC §7874 corporate inversion rules may apply to Puerto Rico Act 60 companies.',
    publishedAt: '2020-11-05',
    excerpt: 'As the combined federal, state and local tax rates for high-income earners in many parts of the country exceed 40% (and approach or exceed 50% in states like California, New Jersey and New York), many U.S. taxpayers are looking for a less onerous tax environment in which to conduct business operations. Puerto Rico offers an attractive alternative with entity-level tax rates as low as 4%, and…',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/Anti-Inversion-Article-Oct-26-2020-Final.pdf',
    relatedSlugs: [
      'puerto-rico-tax-structure',
      'pre-move-transfer-property-partnership'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Corporate Inversions', 'Act 60'],
    content: [
      {
        type: 'paragraph',
        text: 'As the combined federal, state and local tax rates for high-income earners in many parts of the country exceed 40% (and approach or exceed 50% in states like California, New Jersey and New York), many U.S. taxpayers are looking for a less onerous tax environment in which to conduct business operations. Puerto Rico offers an attractive alternative with entity-level tax rates as low as 4%, and corresponding distributions taxed at 0% for eligible companies. This favorable tax treatment is available by obtaining a tax grant from Puerto Rico under Act 60-2019 and qualifying as an Act 60 company.1 Sadly, in a rush to relocate to Puerto Rico to take advantage of these incredible tax incentives, many taxpayers are overlooking various provisions of the Internal Revenue Code designed to impose punitive taxes against U.S. companies that leave the U.S. taxing jurisdiction and relocate offshore.',
      },
      {
        type: 'paragraph',
        text: 'Of particular importance is a serious provision buried inside the Internal Revenue Code – Section 78742, otherwise known as the Corporate Inversion Statute. This statute acts to penalize an Act 60 company, that is the product of a “corporate inversion”, by imposing full U.S. corporate tax rates on its Puerto Rico earnings. In addition, the distributions that their Puerto Rico owners have been receiving at a 0% tax rate in Puerto Rico also remain fully subject to U.S. tax. Unfortunately, the Corporate Inversion Statute is often overlooked by tax and business advisors, resulting in disastrous tax consequences.',
      },
      {
        type: 'paragraph',
        text: 'This article will use a fictional case study to explain and address the issue of corporate inversions for Act 60 companies.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Case Study',
      },
      {
        type: 'paragraph',
        text: 'John Johnson (“John”) is a U.S. citizen who lives in New York. John is a consultant who provides consulting services through his wholly owned S corporation, Johnson NY Consulting, Inc. (“Johnson NY”). John does not own any other companies.',
      },
      {
        type: 'paragraph',
        text: 'Johnson NY has annual revenue of $5.3 million from several clients located in New York. The S corporation has miscellaneous expenses of $300,000 and it pays John a salary of $200,000. John’s taxable income is $5.0 million, which is comprised of his salary of $200,000 and S corporation pass-thru income of $4.8 million.',
      },
      {
        type: 'paragraph',
        text: 'John is frustrated with the high federal, state, and city income taxes he pays. He has heard about the potential for significant tax savings if he moves his business to Puerto Rico and opens an Act 60 company.',
      },
      {
        type: 'paragraph',
        text: 'After speaking with some tax advisors, John decides to move to Puerto Rico and become a bona fide resident of Puerto Rico. He sets up a new Puerto Rican company, Johnson PR Consulting, Inc. (“Johnson PR”).3 Johnson PR qualifies for the reduced Puerto Rican tax rate (the income is taxed in Puerto Rico at a 4% tax rate).',
      },
      {
        type: 'paragraph',
        text: 'John closes his old New York corporation because he no longer needs it. Now his Puerto Rican corporation performs services for the same New York clients. The services are all performed in Puerto Rico.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Anti-Inversion Problem',
      },
      {
        type: 'paragraph',
        text: 'The advisors that moved John into this new structure failed to inform him of the substantial risk that Johnson PR will be taxed as a U.S. C corporation under the “anti-inversion” rules of Code §7874. If Johnson PR is taxed as a U.S. C corporation, then all of the income earned by Johnson PR will be subject to U.S. federal corporate income tax (21%) and dividends paid by Johnson PR will be taxed to John at federal rates up to 23.8%.',
      },
      {
        type: 'paragraph',
        text: 'For example, if Johnson PR were to be audited by the IRS four years after starting up, the U.S. corporate income tax could be $4,032,0004 and the U.S. individual income tax could be as much as $3,609,9845. The IRS may assert various penalties, such as failure to file, failure to pay tax, etc.; which would be 25% or more of the tax due, or an additional $1,910,4966. Not including interest, the effective tax rate could be as high as 50%.7 Obviously, a 50% tax rate is much higher than the promoted rate of 4%.',
      },
      {
        type: 'paragraph',
        text: 'Normally, the statute of limitations would limit the period that the IRS could go back and assess tax.8 However, because Johnson PR did not file any U.S. tax returns, the IRS could go back as many years as it wants.9',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Anti-Inversion Rules',
      },
      {
        type: 'paragraph',
        text: 'The anti-inversion rules were enacted to discourage U.S.-based multinationals from “inverting” (i.e., reincorporating the U.S. parent company outside the U.S.). However, these same rules can apply to a single U.S. corporation that reincorporates outside the U.S., even if the corporation is owned by a single individual.',
      },
      {
        type: 'paragraph',
        text: 'The anti-inversion rules will apply to Johnson PR (and it will be treated as a U.S. corporation) if it is a “surrogate foreign corporation.” A foreign corporation10 is treated as a surrogate foreign corporation if, pursuant to a plan (or a series of related transactions), three conditions are satisfied:',
      },
      {
        type: 'paragraph',
        text: '1.The foreign corporation completes the direct or indirect acquisition of substantially all of the properties held directly or indirectly by a domestic corporation,11',
      },
      {
        type: 'paragraph',
        text: '2.At least 80% of the stock of the foreign corporation is held by former shareholders of the domestic corporation by reason of holding stock in the domestic corporation,12 and',
      },
      {
        type: 'paragraph',
        text: 'After the acquisition, the expanded affiliated group that includes the foreign corporation does not have substantial business activities in the foreign country in which the foreign corporation is created or organized when compared to the total business activities of the expanded affiliated group.13',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Liquidation-Reincorporation',
      },
      {
        type: 'paragraph',
        text: 'John has liquidated his New York corporation and incorporated a Puerto Rican corporation. He operates the same business in the Puerto Rican corporation that used to be operated in the New York corporation. This fact pattern is similar to something known as the “liquidation-reincorporation” doctrine. As described below, the anti-inversion rules can have certain similarities to the liquidation-reincorporation doctrine. Therefore, a brief review of the doctrine is provided.',
      },
      {
        type: 'paragraph',
        text: 'In the past (when capital gains tax rates were lower than dividend tax rates), taxpayers would sometimes try to pull accumulated earnings out of their corporation at capital gains rates by liquidating their corporation and distributing the accumulated cash and operating assets to the shareholder(s). However, the taxpayers wanted to continue operating the business so they would recontribute the operating assets to a new corporation. The new corporation would then operate the same business.',
      },
      {
        type: 'paragraph',
        text: 'The IRS attacked this “liquidation-reincorporation” strategy by arguing that the old corporation never truly liquidated. Instead, the IRS argued that the old corporation reorganized into a new corporation. This meant that the cash retained by the shareholder(s) was taxed at the higher dividend rates and not at the reduced capital gains rates.',
      },
      {
        type: 'paragraph',
        text: 'The IRS was quite successful in making these arguments.14 One of the challenges that the IRS needed to overcome was that, to be treated as a reorganization, “substantially all of the assets” of the old corporation needed to be transferred to the new corporation.15',
      },
      {
        type: 'paragraph',
        text: 'Fortunately for the IRS, the courts generally interpreted “substantially all of the assets” to mean operating assets. For example, in Telephone Answering Service Co., Inc. v. Commr.16 The IRS was successful in arguing that a reorganization occurred where a shareholder of an old corporation transferred the old corporation’s operating assets (which represented only 15% of the gross value of all the corporation’s assets) to a new corporation.17',
      },
      {
        type: 'paragraph',
        text: 'Another challenge for the IRS in making these arguments was that the statute provided there was a reorganization “only if * * * stock * * * of the [new] corporation * * * [was] distributed” by the old corporation.18',
      },
      {
        type: 'paragraph',
        text: 'The courts again supported the IRS by developing what is known as the “meaningless gesture” doctrine. Under the meaningless gesture doctrine, where the shareholders of the old corporation are the same as the shareholders of the new corporation, there is no need to have the shares of the new corporation first issued to the old corporation and then distributed by the old corporation. Since the shareholders of both corporations are the same, it would be a meaningless gesture to have the shares first issued to the old corporation and then distributed to the shareholders of the old corporation.19',
      },
      {
        type: 'paragraph',
        text: 'Having provided a brief summary of the liquidation-reincorporation doctrine, we will now turn to the application of the anti-inversion rules to John and his two companies.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Acquisition of Substantially All of the Properties',
      },
      {
        type: 'paragraph',
        text: 'As described above, the first requirement is that the foreign corporation must complete the direct or indirect acquisition of substantially all of the properties held directly or indirectly by a domestic corporation. There is currently no guidance on the meaning of “substantially all” for purposes of Code §7874. The legislative history indicates that Congress “expect[s] that the [IRS] will issue regulations applying the term ‘substantially all’ in this context and will not be bound in this regard by interpretations of the term in other contexts under the Code.”20',
      },
      {
        type: 'paragraph',
        text: 'Even though the IRS has not yet published any guidance in this area, the phrase “substantially all of the properties” in the anti-inversion statute is quite similar to the phrase “substantially all of the assets” in the reorganization statute. As described above, in the reorganization context the courts have treated the operating assets of the old corporation as being substantially all of the assets of the old corporation. It therefore seems likely that the IRS would view the operating assets of a corporation as being substantially all of the properties of a corporation in the anti-inversion context. This would also be consistent with the policy underlying the anti-inversion statute, which is to prevent U.S. corporations from reincorporating as foreign corporations.',
      },
      {
        type: 'paragraph',
        text: 'In the facts described above, Johnson NY is in the business of consulting. Consulting companies often have very little tangible property. Instead, they may have intangible assets, such as goodwill, customer lists, processes, or knowhow.21 It would seem likely that Johnson PR uses the same operating assets that were previously used by Johnson NY. Therefore, it seems likely that the first requirement of the anti-inversion rules would be met.22',
      },
    ],
  }),
  defineArticle({
    slug: 'puerto-rico-companies-mitigate-us-task-risks',
    title: 'Tax Alert: How Puerto Rico Companies Mitigate U.S. Tax Risks',
    description: 'Strategies for Puerto Rico Act 60 companies to mitigate U.S. federal tax risks.',
    publishedAt: '2020-06-07',
    excerpt: 'To view a PDF, please click here.',
    pdfUrl:
      'https://tomduffycpa.com/wp-content/uploads/2019/09/TAX-ALERT_-How-Puerto-Rico-Companies-Mitigate-U.S.-Tax-Risks-Final.pdf',
    relatedSlugs: [
      'us-tax-consequences-act-60',
      'working-outside-of-puerto-rico-tax-consequences'
    ],
    contentStatus: 'published',
    topics: ['Puerto Rico', 'Act 60', 'Risk Management'],
    content: [
      {
        type: 'paragraph',
        text: 'To view a PDF, please click here.',
      },
      {
        type: 'paragraph',
        text: 'You moved to Puerto Rico (PR) and set up an Act 20 or Act 73 company.1 The Company’s income is taxed at 4%, a rate that’s virtually impossible to match anywhere else (legally). But the costs to your personal mobility are significant. You generally must spend at least 183 days per year in PR. The last thing you want is to spend all that time, possibly away from your family, and not achieve the reduced tax rate.',
      },
      {
        type: 'paragraph',
        text: 'For many Puerto Rico companies the biggest threat to the 4% rate is that the IRS will treat your company as doing business in the United States and attempt to tax it. This can happen, for example, if you personally spend time on company matters while in the U.S. (and this can also cause your Puerto Rico wages to be subject to U.S. tax).',
      },
      {
        type: 'paragraph',
        text: 'The results can be disastrous. The IRS can disallow deductions and tax the company’s revenue at 21%.2 If the company leaves no funds in the U.S., an additional 30% “branch profits” tax will apply. Finally, dividends eventually paid by your Puerto Rico company may be treated as partly from U.S. sources and taxed by the United States. All of this is on top of potential penalties, which can be criminal in the worst circumstances.',
      },
      {
        type: 'paragraph',
        text: 'There are solutions to all of these issues. Your U.S. activities can be structured and priced in a manner that appropriately minimizes U.S. tax. This article explains (1) when the IRS will tax your Puerto Rico company because it is doing business in the U.S.; (2) how much income the IRS may seek to tax; and (3) how appropriately to avoid or mitigate that outcome. We focus here on Puerto Rico operations that earn services income – such as hedge fund advisors. The risks and solutions differ depending on the facts and require a careful legal analysis.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'When Will the IRS Tax Your Puerto Rico Company?',
      },
      {
        type: 'paragraph',
        text: 'The IRS regards a Puerto Rico company as a “foreign” corporation.3 Foreign corporations are subject to U.S. tax if engaged in a U.S. trade or business.4 A foreign corporation is engaged in a U.S. trade or business if its employees perform services in the U.S.5',
      },
      {
        type: 'paragraph',
        text: 'The extent of services required for a trade or business to exist is both low and uncertain. Even the short- term presence of employees – including you, the proprietor – may be enough.6 Even a single transaction can constitute a business if significant relative to total activities. The presence of an agent or independent contractor may be enough.',
      },
      {
        type: 'paragraph',
        text: 'For a company that provides services, the U.S. presence of an employee for a few days a year probably does not create a trade or business. Our experience, however, is that many Puerto Rico company proprietors spend a large number of days in the U.S. and act for the company while there.',
      },
      {
        type: 'paragraph',
        text: 'Our Advice: If you spend even a small number of days in the U.S., it’s best to structure a solution and mitigate or eliminate your risks. We identify options below.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'How Will the U.S. Tax a Puerto Rico Company with a U.S. Trade or Business?',
      },
      {
        type: 'paragraph',
        text: 'If your Puerto Rico company is engaged in a U.S. trade or business, there could be three levels of U.S. tax on the company:',
      },
      {
        type: 'list',
        items: [
          'Corporate Income Tax: The U.S. will tax the company on income that is “effectively connected” with the U.S. trade or business.7 The IRS might apportion the company’s income based on your time spent in the U.S.8 The rate will be 21% plus state and local income tax. If the company fails to file U.S. returns, the IRS can penalize the company by disallowing deductions and apply the 21% rate to the company’s U.S. revenue.',
          'Branch Profits Tax: The IRS may then impose on the company a branch profits tax of 30%.9 This tax is also referred to as the “dividend equivalent amount”10 because it equates amounts returned to Puerto Rico as dividends from the U.S. operation. This tax typically applies because the Puerto Rico company’s funds are never moved to the U.S. branch, but instead remain in Puerto Rico.',
          'Dividends Tax: If the U.S. branch income exceeds certain levels (e.g., 20% of the company’s gross income), a portion of dividends paid by the Puerto Rico company to you will be subject to U.S. tax.11 In addition, if branch income exceeds 25% of the company’s gross income, a bona-fide Puerto Rico resident may now be considered a U.S. person, making the company a controlled foreign corporation (“CFC”),12 if it wasn’t previously one. This can be especially painful for shareholders of the company who are U.S. persons not resident in Puerto Rico, who will now be subject to the GILTI and Subpart F tax regimes and taxed currently on their share of certain income earned by the Puerto Rico entity.13',
        ],
      },
      {
        type: 'paragraph',
        text: 'In addition, the IRS may tax your wage income received from the Puerto Rico company for performing services while in the United States. This will generally be done on a time basis.14',
      },
      {
        type: 'paragraph',
        text: 'Penalties can be 20%, 40% or even 75% of any tax underpayment. Criminal penalties for willful failure to file and pay can include jail time and monetary penalties.',
      },
      {
        type: 'paragraph',
        text: 'The bottom line is that, if your company has a U.S. trade or business, failing to report U.S. income can be devastating on all fronts.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Potential Solutions',
      },
      {
        type: 'paragraph',
        text: 'The best solution is to stay in Puerto Rico and away from the mainland United States. But our sense is that few Puerto Rico proprietors are able to do so.',
      },
      {
        type: 'paragraph',
        text: 'Second best – and a typical structure we recommend and implement – is to form a pass-through U.S. entity that employs you and other staff when they work from the mainland. That entity should contract with the Puerto Rico company to provide services. If such an entity is formed, the trifecta listed above – corporate tax, branch profits tax and taxable dividends – likely would be avoided.',
      },
      {
        type: 'paragraph',
        text: 'The downside is that the U.S. entity’s income will be subject to U.S. tax, typically at 37% plus state and local. But the amount of U.S. income need not be based exclusively on the relative time you spend in the two locations. Instead, an inter-company agreement can spell out the relative assets, risks and functions of the Puerto Rico and U.S. companies and appropriately minimize U.S. income and tax. The pricing can be supported by a transfer pricing study (and based on accepted pricing conventions).',
      },
      {
        type: 'paragraph',
        text: 'As an alternative to restructuring, a Puerto Rico company could file a U.S. return (Form 1120-F). Depending on the circumstances, this return could be merely protective (reporting zero income) or could report positive appropriate income. This will help preserve use of deductions and avoid or mitigate penalties but could result in material U.S. income tax.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'If you and your Puerto Rico company are operating in the U.S., ignoring the U.S. tax consequences is not an option. The downside is too great and solutions – that typically produce modest additional tax – are readily available.',
      },
    ],
  }),
];

export const articleSlugs = articles.map((article) => article.slug);
