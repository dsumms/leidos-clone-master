import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <NavigationRail />
      <main className="lg:content-offset pt-16 lg:pt-0">
        <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-4xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Terms of Use
          </h1>
          <div className="h-px bg-border mb-10" />

          <div className="space-y-8 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Welcome to Apaluma. Please read on to learn the rules and restrictions that govern your use of our website(s), products, services and applications (the "Services").
            </p>
            <p>
              <strong className="text-foreground">Note:</strong> If you are an enterprise user, you may have a separate written enterprise customer agreement (an "Enterprise Agreement") with us in connection with your use of the Services, which shall control in the event of any conflict between such Enterprise Agreement and these Terms (defined below).
            </p>
            <p>
              If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at:
            </p>
            <div className="bg-muted/30 border border-border rounded-lg p-5 space-y-2 text-sm">
              <p><strong className="text-foreground">Email:</strong> <TermsLink href="mailto:support@apaluma.com">support@apaluma.com</TermsLink></p>
              <p><strong className="text-foreground">Phone:</strong> <TermsLink href="tel:+18772725862">(877) 272-5862</TermsLink></p>
              <p><strong className="text-foreground">Address:</strong> 300 Menaul Blvd NW, Ste. A#248, Albuquerque, New Mexico 87107</p>
            </div>

            {/* TOC */}
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">TABLE OF CONTENTS</p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm">
                {[
                  ["#legal-notice", "Important Legal Notice"],
                  ["#critical", "Critical Information"],
                  ["#changes-services", "Will Apaluma ever change the Services?"],
                  ["#changes-terms", "Will Apaluma ever change these Terms?"],
                  ["#privacy", "What about my privacy?"],
                  ["#coppa", "Children's Online Privacy Protection Act"],
                  ["#basics", "What are the basics of using Apaluma?"],
                  ["#messaging", "What about messaging?"],
                  ["#restrictions", "Are there restrictions in how I can use the Services?"],
                  ["#rights", "What are my rights in the Services?"],
                  ["#responsibility", "Who is responsible for what I see and do on the Services?"],
                  ["#cost", "Do the Services cost anything?"],
                  ["#stopping", "What if I want to stop using the Services?"],
                  ["#mobile", "What about Mobile Applications?"],
                  ["#apple", "Apple App Store"],
                  ["#disclaimers", "Warranty Disclaimer, Limitation of Liability, Indemnity"],
                  ["#arbitration", "Arbitration Agreement"],
                  ["#misc", "Miscellaneous"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-primary hover:text-foreground transition-colors underline-offset-2 hover:underline">{label}</a>
                  </li>
                ))}
              </ol>
            </div>

            <TermsSection id="legal-notice" title="Important Legal Notice">
              <p>
                These Terms of Use (the "Terms") are a binding contract between you and <strong className="text-foreground">APALUMA, INC.</strong> ("Apaluma," "we" and "us"). You represent and warrant that you are an individual of legal age to form a binding contract (or if not, you've received your parent's or guardian's permission to use the Services and have gotten your parent or guardian to agree to these Terms on your behalf).
              </p>
              <p className="mt-4">
                Your use of the Services in any way means that you agree to all these Terms, and these Terms will remain in effect while you use the Services. If you're agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization's or entity's behalf and bind them to these Terms.
              </p>
              <p className="mt-4">
                These Terms include the provisions in this document as well as those in the <TermsLink href="/privacy">Privacy Policy</TermsLink>. Your use of or participation in certain Services may also be subject to additional policies, rules and/or conditions ("Additional Terms"), which are incorporated herein by reference.
              </p>
            </TermsSection>

            <TermsSection id="critical" title="Critical Information">
              <p>
                Please read these Terms carefully. They cover important information about Services provided to you and any charges, taxes, and fees we bill you. These Terms include information about future changes to these Terms, automatic renewals, limitations of liability, a class action waiver and resolution of disputes by arbitration instead of in court.
              </p>
              <p className="mt-4">
                Please note that your use of and access to our services are subject to the following terms; if you do not agree to all of the following, you may not use or access the services in any manner.
              </p>
              <TermsSubsection title="ARBITRATION NOTICE AND CLASS ACTION WAIVER:">
                <p>
                  EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION AGREEMENT SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                </p>
              </TermsSubsection>
            </TermsSection>

            <TermsSection id="changes-services" title="Will Apaluma ever change the Services?">
              <p>
                We're always trying to improve our Services, so they may change over time. We may suspend or discontinue any part of the Services, or we may introduce new features or impose limits on certain features or restrict access to parts or all of the Services.
              </p>
            </TermsSection>

            <TermsSection id="changes-terms" title="Will Apaluma ever change these Terms?">
              <p>
                These Terms may need to change along with our Services. We reserve the right to change the Terms at any time, but if we do, we will place a notice on our site located at apaluma.com, send you an email, and/or notify you by some other means.
              </p>
              <p className="mt-4">
                If you don't agree with the new Terms, you are free to reject them; unfortunately, that means you will no longer be able to use the Services. If you use the Services in any way after a change to the Terms is effective, that means you agree to all of the changes.
              </p>
              <p className="mt-4">
                Except for changes by us as described here, no other amendment or modification of these Terms will be effective unless in writing and signed by both you and us.
              </p>
            </TermsSection>

            <TermsSection id="privacy" title="What about my privacy?">
              <p>
                Apaluma takes the privacy of its users very seriously. For the current Apaluma Privacy Policy, please see our <TermsLink href="/privacy">Privacy Policy</TermsLink>.
              </p>
            </TermsSection>

            <TermsSection id="coppa" title="Children's Online Privacy Protection Act">
              <p>
                The Children's Online Privacy Protection Act ("COPPA") requires that online service providers obtain parental consent before they knowingly collect personally identifiable information online from children who are under 13 years of age. We do not knowingly collect or solicit personally identifiable information from children under 16 years of age; if you are a child under 16 years of age, please do not attempt to register for or otherwise use the Services or send us any personal information.
              </p>
              <p className="mt-4">
                If we learn we have collected personal information from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided us personal information, please contact us at <TermsLink href="mailto:support@apaluma.com">support@apaluma.com</TermsLink>.
              </p>
            </TermsSection>

            <TermsSection id="basics" title="What are the basics of using Apaluma?">
              <p>
                You may be required to sign up for an account, select a password and user name ("Apaluma User ID"), and provide us with certain information or data, such as your contact information. You promise to provide us with accurate, complete, and updated registration information about yourself. You may not select as your Apaluma User ID a name that you do not have the right to use, or another person's name with the intent to impersonate that person. You may not transfer your account to anyone else without our prior written permission.
              </p>
              <p className="mt-4">
                Additionally, you may be able to access certain parts or features of the Services by using your account credentials from other services (each, a "Third Party Account"), such as those offered by Google. By using the Services through a Third Party Account, you permit us to access certain information from such account for use by the Services. You are ultimately in control of how much information is accessible to us and may exercise such control by adjusting your privacy settings on your Third Party Account.
              </p>
              <p className="mt-4">
                You will only use the Services for your own internal, personal, non-commercial use, and not on behalf of or for the benefit of any third party, and only in a manner that complies with all laws that apply to you. If your use of the Services is prohibited by applicable laws, then you aren't authorized to use the Services. We can't and won't be responsible for your using the Services in a way that breaks the law.
              </p>
              <p className="mt-4">
                You will not share your Apaluma User ID, account or password with anyone, and you must protect the security of your Apaluma User ID, account, password and any other access tools or credentials. You're responsible for any activity associated with your Apaluma User ID and account.
              </p>
            </TermsSection>

            <TermsSection id="messaging" title="What about messaging?">
              <p>
                As part of the Services, you may receive communications through the Services, including messages that Apaluma sends you (for example, via email or SMS). When signing up for the Services, you will receive a welcome message and instructions on how to stop receiving messages. By signing up for the Services and providing us with your wireless number, you confirm that you want Apaluma to send you information that we think may be of interest to you, which may include Apaluma using automated dialing technology to text you at the wireless number you provided, and you agree to receive communications from Apaluma, and you represent and warrant that each person you register for the Services or for whom you provide a wireless phone number has consented to receive communications from Apaluma. You agree to indemnify and hold Apaluma harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys' fees) arising from or in any way related to your breach of the foregoing.
              </p>
            </TermsSection>

            <TermsSection id="restrictions" title="Are there restrictions in how I can use the Services?">
              <p>
                You represent, warrant, and agree that you will not provide or contribute anything, including any Content (as that term is defined below), to the Services, or otherwise use or interact with the Services, in a manner that:
              </p>
              <ol className="list-[lower-alpha] list-outside ml-6 mt-4 space-y-2">
                <li>infringes or violates the intellectual property rights or any other rights of anyone else (including Apaluma);</li>
                <li>violates any law or regulation, including, without limitation, any applicable export control laws, privacy laws or any other purpose not reasonably intended by Apaluma;</li>
                <li>is dangerous, harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;</li>
                <li>jeopardizes the security of your Apaluma User ID, account or anyone else's (such as allowing someone else to log in to the Services as you);</li>
                <li>attempts, in any manner, to obtain the password, account, or other security information from any other user;</li>
                <li>violates the security of any computer network, or cracks any passwords or security encryption codes;</li>
                <li>runs Maillist, Listserv, any form of auto-responder or "spam" on the Services, or any processes that run or are activated while you are not logged into the Services, or that otherwise interfere with the proper working of the Services (including by placing an unreasonable load on the Services' infrastructure);</li>
                <li>"crawls," "scrapes," or "spiders" any page, data, or portion of or relating to the Services or Content (through use of manual or automated means);</li>
                <li>copies or stores any significant portion of the Content; or</li>
                <li>decompiles, reverse engineers, or otherwise attempts to obtain the source code or underlying ideas or information of or relating to the Services.</li>
              </ol>
              <p className="mt-4">
                A violation of any of the foregoing is grounds for termination of your right to use or access the Services.
              </p>
            </TermsSection>

            <TermsSection id="rights" title="What are my rights in the Services?">
              <p>
                The materials displayed or performed or available on or through the Services, including, but not limited to, text, graphics, data, articles, photos, images, illustrations and so forth (all of the foregoing, the "Content") are protected by copyright and/or other intellectual property laws. You promise to abide by all copyright notices, trademark rules, information, and restrictions contained in any Content you access through the Services, and you won't use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose any Content not owned by you, (i) without the prior consent of the owner of that Content or (ii) in a way that violates someone else's (including Apaluma's) rights.
              </p>
              <p className="mt-4">
                Subject to these Terms, we grant each user of the Services a worldwide, non-exclusive, non-sublicensable and non-transferable license to use (i.e., to download and display locally) Content solely for purposes of using the Services. Use, reproduction, modification, distribution or storage of any Content for any purpose other than using the Services is expressly prohibited without prior written permission from us. You understand that Apaluma owns the Services. You won't modify, publish, transmit, participate in the transfer or sale of, reproduce (except as expressly provided in this Section), create derivative works based on, or otherwise exploit any of the Services. The Services may allow you to copy or download certain Content, but please remember that even where these functionalities exist, all the restrictions in this section still apply.
              </p>
              <p className="mt-4">
                We reserve the right to remove any Content from the Services at any time, for any reason (including, but not limited to, if someone alleges you contributed that Content in violation of these Terms), in our sole discretion, and without notice.
              </p>
            </TermsSection>

            <TermsSection id="responsibility" title="Who is responsible for what I see and do on the Services?">
              <p>
                Any information or Content publicly posted or privately transmitted through the Services is the sole responsibility of the person from whom such Content originated, and you access all such information and Content at your own risk, and we aren't liable for any errors or omissions in that information or Content or for any damages or loss you might suffer in connection with it. We cannot control and have no duty to take any action regarding how you may interpret and use the Content or what actions you may take as a result of having been exposed to the Content, and you hereby release us from all liability for you having acquired or not acquired Content through the Services. We can't guarantee the identity of any users with whom you interact in using the Services and are not responsible for which users gain access to the Services.
              </p>
              <p className="mt-4">
                You are responsible for all Content you contribute, in any manner, to the Services, and you represent and warrant you have all rights necessary to do so, in the manner in which you contribute it.
              </p>
              <p className="mt-4">
                The Services may contain links or connections to third-party websites or services that are not owned or controlled by Apaluma. When you access third-party websites or use third-party services, you accept that there are risks in doing so, and that Apaluma is not responsible for such risks.
              </p>
              <p className="mt-4">
                Apaluma has no control over, and assumes no responsibility for, the content, accuracy, privacy policies, or practices of or opinions expressed in any third-party websites or by any third party that you interact with through the Services. In addition, Apaluma will not and cannot monitor, verify, censor or edit the content of any third-party site or service. We encourage you to be aware when you leave the Services and to read the terms and conditions and privacy policy of each third-party website or service that you visit or utilize. By using the Services, you release and hold us harmless from any and all liability arising from your use of any third-party website or service.
              </p>
              <p className="mt-4">
                Your interactions with organizations and/or individuals found on or through the Services, including payment and delivery of goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such organizations and/or individuals. You should make whatever investigation you feel necessary or appropriate before proceeding with any online or offline transaction with any of these third parties. You agree that Apaluma shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings.
              </p>
              <p className="mt-4">
                If there is a dispute between participants on this site or Services, or between users and any third party, you agree that Apaluma is under no obligation to become involved. In the event that you have a dispute with one or more other users, you release Apaluma, its directors, officers, employees, agents, and successors from claims, demands, and damages of every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes and/or our Services.
              </p>
              <p className="mt-4">
                You shall and hereby do waive California Civil Code Section 1542 or any similar law of any jurisdiction, which says in substance: "A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."
              </p>
            </TermsSection>

            <TermsSection id="cost" title="Do the Services cost anything?">
              <p>
                If you are an enterprise user, certain Services may be subject to payments now or in the future as set forth in a separate Enterprise Agreement with us. If you are using a free version of the Services, we will notify you before any Services you are then using begin carrying a fee, and if you wish to continue using such Services, you must pay all applicable fees for such Services.
              </p>
              <p className="mt-4">
                Note that if you elect to receive text messages through the Services, data and message rates may apply. Any and all such charges, fees or costs are your sole responsibility. You should consult with your wireless carrier to determine what rates, charges, fees or costs may apply to your use of the Services.
              </p>
            </TermsSection>

            <TermsSection id="stopping" title="What if I want to stop using the Services?">
              <p>
                You're free to do that at any time by contacting us at <TermsLink href="mailto:support@apaluma.com">support@apaluma.com</TermsLink>; please refer to our <TermsLink href="/privacy">Privacy Policy</TermsLink>, as well as the licenses above, to understand how we treat information you provide to us after you have stopped using our Services.
              </p>
              <p className="mt-4">
                Apaluma is also free to terminate (or suspend access to) your use of the Services or your account for any reason in our discretion, including your breach of these Terms. Apaluma has the sole right to decide whether you are in violation of any of the restrictions set forth in these Terms.
              </p>
              <p className="mt-4">
                <strong className="text-foreground">Important:</strong> Account termination may result in destruction of any Content associated with your account, so keep that in mind before you decide to terminate your account.
              </p>
              <p className="mt-4">
                If you have deleted your account by mistake, contact us immediately at <TermsLink href="mailto:support@apaluma.com">support@apaluma.com</TermsLink> – we will try to help, but unfortunately, we can't promise that we can recover or restore anything.
              </p>
              <p className="mt-4">
                Provisions that, by their nature, should survive termination of these Terms shall survive termination. By way of example, all of the following will survive termination: any obligation you have to pay us or indemnify us, any limitations on our liability, any terms regarding ownership or intellectual property rights, and terms regarding disputes between us, including without limitation the arbitration agreement.
              </p>
            </TermsSection>

            <TermsSection id="mobile" title="What about Mobile Applications?">
              <p>
                Unless otherwise set forth in an applicable Enterprise Agreement, you acknowledge and agree that the availability of our mobile application is dependent on the third party stores from which you download the application, e.g., the App Store from Apple or the Android app market from Google (each an "App Store"). Each App Store may have its own terms and conditions to which you must agree before downloading mobile applications from such store, including the specific terms relating to Apple App Store set forth below. You agree to comply with, and your license to use our application is conditioned upon your compliance with, such App Store terms and conditions. To the extent such other terms and conditions from such App Store are less restrictive than, or otherwise conflict with, the terms and conditions of these Terms of Use, the more restrictive or conflicting terms and conditions in these Terms of Use apply.
              </p>
            </TermsSection>

            <TermsSection id="apple" title="I use the Apaluma App available via the Apple App Store – should I know anything about that?">
              <p>
                These Terms apply to your use of all the Services, including our iOS applications (the "Application") available via the Apple, Inc. ("Apple") App Store, but the following additional terms also apply to the Application:
              </p>
              <ol className="list-[lower-alpha] list-outside ml-6 mt-4 space-y-2">
                <li>Both you and Apaluma acknowledge that the Terms are concluded between you and Apaluma only, and not with Apple, and that Apple is not responsible for the Application or the Content;</li>
                <li>The Application is licensed to you on a limited, non-exclusive, non-transferrable, non-sublicensable basis, solely to be used in connection with the Services for your private, personal, non-commercial use, subject to all the terms and conditions of these Terms as they are applicable to the Services;</li>
                <li>You will only use the Application in connection with an Apple device that you own or control;</li>
                <li>You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Application;</li>
                <li>In the event of any failure of the Application to conform to any applicable warranty, including those implied by law, you may notify Apple of such failure; upon notification, Apple's sole warranty obligation to you will be to refund to you the purchase price, if any, of the Application;</li>
                <li>You acknowledge and agree that Apaluma, and not Apple, is responsible for addressing any claims you or any third party may have in relation to the Application;</li>
                <li>You acknowledge and agree that, in the event of any third-party claim that the Application or your possession and use of the Application infringes that third party's intellectual property rights, Apaluma, and not Apple, will be responsible for the investigation, defense, settlement and discharge of any such infringement claim;</li>
                <li>You represent and warrant that you are not located in a country subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country, and that you are not listed on any U.S. Government list of prohibited or restricted parties;</li>
                <li>Both you and Apaluma acknowledge and agree that, in your use of the Application, you will comply with any applicable third-party terms of agreement which may affect or be affected by such use; and</li>
                <li>Both you and Apaluma acknowledge and agree that Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and that upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as the third-party beneficiary hereof.</li>
                <li>In the event you use the Application to provide you with real-time route guidance, YOUR USE OF THIS REAL-TIME ROUTE GUIDANCE APPLICATION IS AT YOUR SOLE RISK. LOCATION DATA MAY NOT BE ACCURATE.</li>
              </ol>
            </TermsSection>

            <TermsSection id="disclaimers" title="What else do I need to know?">
              <TermsSubsection title="Warranty Disclaimer">
                <p>
                  Apaluma and its licensors, suppliers, partners, parent, subsidiaries or affiliated entities, and each of their respective officers, directors, members, employees, consultants, contract employees, representatives and agents, and each of their respective successors and assigns (Apaluma and all such parties together, the "Apaluma Parties") make no representations or warranties concerning the Services, including without limitation regarding any Content contained in or accessed through the Services, and the Apaluma Parties will not be responsible or liable for the accuracy, copyright compliance, legality, or decency of material contained in or accessed through the Services or any claims, actions, suits procedures, costs, expenses, damages or liabilities arising out of use of, or in any way related to your participation in, the Services. The Apaluma Parties make no representations or warranties regarding suggestions or recommendations of services or products offered or purchased through or in connection with the Services.
                </p>
                <p className="mt-4">
                  THE SERVICES AND CONTENT ARE PROVIDED BY APALUMA (AND ITS LICENSORS AND SUPPLIERS) ON AN "AS-IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                </p>
              </TermsSubsection>
              <TermsSubsection title="Limitation of Liability">
                <p>
                  TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL ANY OF THE APALUMA PARTIES BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, (B) ANY SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) ONE-HUNDRED ($100) DOLLARS OR (II) THE AMOUNTS PAID AND/OR PAYABLE BY YOU TO APALUMA IN CONNECTION WITH THE SERVICES IN THE TWELVE (12) MONTH PERIOD PRECEDING THIS APPLICABLE CLAIM OR (D) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL OR CERTAIN OTHER DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.
                </p>
              </TermsSubsection>
              <TermsSubsection title="Indemnity">
                <p>
                  To the fullest extent allowed by applicable law or to the extent not provided in any other agreement concerning the Services between You and Apaluma, You agree to indemnify and hold the Apaluma Parties harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys' fees) arising from or in any way related to any claims relating to (a) your use of the Services (including any actions taken by a third party using your account), and (b) your violation of these Terms. In the event of such a claim, suit, or action ("Claim"), we will attempt to provide notice of the Claim to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).
                </p>
              </TermsSubsection>
              <TermsSubsection title="Assignment">
                <p>
                  You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your Services account, in any way (by operation of law or otherwise) without Apaluma's prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations without consent.
                </p>
              </TermsSubsection>
              <TermsSubsection title="Choice of Law">
                <p>
                  These Terms are governed by and will be construed under the Federal Arbitration Act, applicable federal law, and the laws of the State of Delaware, without regard to the conflicts of laws provisions thereof.
                </p>
              </TermsSubsection>
            </TermsSection>

            <TermsSection id="arbitration" title="Arbitration Agreement">
              <p>
                Please read the following ARBITRATION AGREEMENT carefully because it requires you to arbitrate certain disputes and claims with Apaluma and limits the manner in which you can seek relief from Apaluma. Both you and Apaluma acknowledge and agree that for the purposes of any dispute arising out of or relating to the subject matter of these Terms, Apaluma's officers, directors, employees and independent contractors ("Personnel") are third-party beneficiaries of these Terms, and that upon your acceptance of these Terms, Personnel will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as the third-party beneficiary hereof.
              </p>
              <TermsSubsection title="(a) Arbitration Rules; Applicability of Arbitration Agreement">
                <p>
                  The parties shall use their best efforts to settle any dispute, claim, question, or disagreement arising out of or relating to the subject matter of these Terms directly through good-faith negotiations, which shall be a precondition to either party initiating arbitration. If such negotiations do not resolve the dispute, it shall be finally settled by binding arbitration in Bernalillo County, New Mexico. The arbitration will proceed in the English language, in accordance with the JAMS Streamlined Arbitration Rules and Procedures (the "Rules") then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes. The arbitrator shall be selected from the appropriate list of JAMS arbitrators in accordance with such Rules. Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(b) Costs of Arbitration">
                <p>
                  The Rules will govern payment of all arbitration fees. Apaluma will pay all arbitration fees for claims less than seventy-five thousand ($75,000) dollars. Apaluma will not seek its attorneys' fees and costs in arbitration unless the arbitrator determines that your claim is frivolous.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(c) Small Claims Court; Infringement">
                <p>
                  Either you or Apaluma may assert claims, if they qualify, in small claims court in Bernalillo County, New Mexico or any United States county where you live or work. Furthermore, notwithstanding the foregoing obligation to arbitrate disputes, each party shall have the right to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction, to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents or other intellectual property rights.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(d) Waiver of Jury Trial">
                <p>
                  YOU AND APALUMA WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR JURY.
                </p>
                <p className="mt-4">
                  You and Apaluma are instead choosing to have claims and disputes resolved by arbitration. Arbitration procedures are typically more limited, more efficient, and less costly than rules applicable in court and are subject to very limited review by a court. In any litigation between you and Apaluma over whether to vacate or enforce an arbitration award, YOU AND APALUMA WAIVE ALL RIGHTS TO A JURY TRIAL, and elect instead to have the dispute be resolved by a judge.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(e) Waiver of Class or Consolidated Actions">
                <p>
                  ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS. CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.
                </p>
                <p className="mt-4">
                  If however, this waiver of class or consolidated actions is deemed invalid or unenforceable, neither you nor Apaluma is entitled to arbitration; instead all claims and disputes will be resolved in a court as set forth in (g) below.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(f) Opt-out">
                <p>
                  You have the right to opt out of the provisions of this Section by sending written notice of your decision to opt out to the following address: <strong className="text-foreground">300 Menaul Blvd NW, Ste. A#248, Albuquerque, New Mexico 87107</strong> postmarked within thirty (30) days of first accepting these Terms. You must include (i) your name and residence address, (ii) the email address and/or telephone number associated with your account, and (iii) a clear statement that you want to opt out of these Terms' arbitration agreement.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(g) Exclusive Venue">
                <p>
                  If you send the opt-out notice in (f), and/or in any circumstances where the foregoing arbitration agreement permits either you or Apaluma to litigate any dispute arising out of or relating to the subject matter of these Terms in court, then the foregoing arbitration agreement will not apply to either party, and both you and Apaluma agree that any judicial proceeding (other than small claims actions) will be brought in the state or federal courts located in, respectively, Bernalillo County, New Mexico, or the federal district in which that county falls.
                </p>
              </TermsSubsection>
              <TermsSubsection title="(h) Severability">
                <p>
                  If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration Agreement section will be null and void. This arbitration agreement will survive the termination of your relationship with Apaluma.
                </p>
              </TermsSubsection>
            </TermsSection>

            <TermsSection id="misc" title="Miscellaneous">
              <p>
                You will be responsible for paying, withholding, filing, and reporting all taxes, duties, and other governmental assessments associated with your activity in connection with the Services, provided that the Apaluma may, in its sole discretion, do any of the foregoing on your behalf or for itself as it sees fit. The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. If any provision of these Terms are found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable.
              </p>
              <p className="mt-4">
                You and Apaluma agree that these Terms are the complete and exclusive statement of the mutual understanding between you and Apaluma, and that these Terms supersede and cancel all previous written and oral agreements, communications and other understandings relating to the subject matter of these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of Apaluma, and you do not have any authority of any kind to bind Apaluma in any respect whatsoever.
              </p>
              <p className="mt-4">
                Except as expressly set forth in the sections above regarding the Apple Application and the arbitration agreement, you and Apaluma agree there are no third-party beneficiaries intended under these Terms.
              </p>
            </TermsSection>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

const TermsSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <div id={id} className="scroll-mt-24">
    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">{title}</h2>
    {children}
  </div>
);

const TermsSubsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-2">{title}</h4>
    {children}
  </div>
);

const TermsLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="text-primary hover:text-foreground transition-colors underline underline-offset-2"
  >
    {children}
  </a>
);

export default Terms;
