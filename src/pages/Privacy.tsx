import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <NavigationRail />
      <main className="lg:content-offset pt-16 lg:pt-0">
        <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-4xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <div className="h-px bg-border mb-10" />

          <div className="space-y-8 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            {/* Intro */}
            <p>
              At Apaluma, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and disclose your information as described in this Privacy Policy.
            </p>
            <p>
              Remember that your use of Apaluma's Services is at all times subject to our{" "}
              <a href="/terms" className="text-primary hover:text-foreground transition-colors underline underline-offset-2">Terms of Use</a>,
              which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.
            </p>
            <p>
              As we continually work to improve our Services, we may need to change this Privacy Policy from time to time. We will alert you of material changes by placing a notice on the Apaluma website, by sending you an email and/or by some other means. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes.
            </p>

            {/* TOC */}
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <p className="font-display text-xs text-muted-foreground tracking-widest mb-4">TABLE OF CONTENTS</p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm">
                {[
                  ["#what-this-covers", "What this Privacy Policy Covers"],
                  ["#personal-data", "Personal Data"],
                  ["#commercial-purposes", "Our Commercial or Business Purposes for Collecting Personal Data"],
                  ["#other-purposes", "Other Permitted Purposes for Processing Personal Data"],
                  ["#sources", "Categories of Sources of Personal Data"],
                  ["#how-we-disclose", "How We Disclose Your Personal Data"],
                  ["#tracking-tools", "Tracking Tools and Opt-Out"],
                  ["#data-security", "Data Security"],
                  ["#children-data", "Personal Data of Children"],
                  ["#colorado-rights", "Colorado Resident Rights"],
                  ["#exercising-rights", "Exercising Your Rights under Colorado Privacy Laws"],
                  ["#other-state-rights", "Other State Law Privacy Rights"],
                  ["#contact", "Contact Information"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-primary hover:text-foreground transition-colors underline-offset-2 hover:underline">{label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <PolicySection id="what-this-covers" title="What this Privacy Policy Covers">
              <p>
                This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. "Personal Data" means any information that identifies or relates to a particular individual and also includes information referred to as "personally identifiable information" or "personal information" under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don't own or control or people we don't manage.
              </p>
            </PolicySection>

            <PolicySection id="personal-data" title="Personal Data">
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3">Categories of Personal Data We Collect</h3>
              <p className="mb-4">This chart details the categories of Personal Data that we collect and have collected over the past 12 months:</p>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-3 font-display text-foreground font-semibold">Category</th>
                      <th className="text-left py-3 px-3 font-display text-foreground font-semibold">Purpose</th>
                      <th className="text-left py-3 px-3 font-display text-foreground font-semibold">Third Parties</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Profile or Contact Data (name, email, phone, address)", "Providing, Customizing & Improving Services; Marketing; Corresponding", "Service Providers"],
                      ["Payment Data (card info, billing address, billing email)", "Providing, Customizing & Improving Services; Marketing; Corresponding", "Service Providers (payment processor)"],
                      ["Consumer Demographic Data (zip code)", "Providing, Customizing & Improving Services; Marketing; Corresponding", "Service Providers"],
                      ["Geolocation Data (IP-based location, GPS)", "Providing, Customizing & Improving Services; Marketing; Corresponding", "Service Providers"],
                      ["Sensory Data (photos, videos, recordings)", "Providing, Customizing & Improving Services; Marketing; Corresponding", "Service Providers"],
                      ["Sensitive Data (precise geolocation)", "Providing, Customizing & Improving Services; Corresponding", "Service Providers"],
                    ].map(([cat, purpose, parties], i) => (
                      <tr key={i}>
                        <td className="py-3 px-3 font-medium text-foreground">{cat}</td>
                        <td className="py-3 px-3">{purpose}</td>
                        <td className="py-3 px-3">{parties}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PolicySection>

            <PolicySection id="commercial-purposes" title="Our Commercial or Business Purposes for Collecting Personal Data">
              <PolicySubsection title="Providing, Customizing and Improving the Services">
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li>Creating and managing your account or other user profiles.</li>
                  <li>Processing orders or other transactions; billing.</li>
                  <li>Providing you with the products, services or information you request.</li>
                  <li>Meeting or fulfilling the reason you provided the information to us.</li>
                  <li>Providing support and assistance for the Services.</li>
                  <li>Improving the Services, including testing, research, internal analytics and product development.</li>
                  <li>Personalizing the Services, website content and communications based on your preferences.</li>
                  <li>Doing fraud protection, security and debugging.</li>
                  <li>Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as the Colorado Privacy Act (the "CPA").</li>
                </ul>
              </PolicySubsection>
              <PolicySubsection title="Marketing the Services">
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li>Marketing and selling the Services.</li>
                </ul>
              </PolicySubsection>
              <PolicySubsection title="Corresponding with You">
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li>Responding to correspondence that we receive from you, contacting you when necessary or requested, and sending you information about Apaluma or the Services.</li>
                </ul>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="other-purposes" title="Other Permitted Purposes for Processing Personal Data">
              <p>
                In addition, each of the above referenced categories of Personal Data may be collected, used, and disclosed with the government, including law enforcement, or other parties to meet certain legal requirements and enforcing legal terms including: fulfilling our legal obligations under applicable law, regulation, court order or other legal process; protecting the rights, property or safety of you, Apaluma or another party; enforcing any agreements with you; responding to claims that any posting or other content violates third-party rights; and resolving disputes.
              </p>
              <p className="mt-3">
                We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated or incompatible purposes without providing you notice or obtaining your consent.
              </p>
            </PolicySection>

            <PolicySection id="sources" title="Categories of Sources of Personal Data">
              <p className="mb-3">We collect Personal Data about you from the following categories of sources:</p>
              <PolicySubsection title="You">
                <p className="mb-2">When you provide such information directly to us:</p>
                <ul className="list-disc list-outside pl-5 space-y-1.5 mb-3">
                  <li>When you create an account or use our interactive tools and Services.</li>
                  <li>When you voluntarily provide information in free-form text boxes through the Services or through responses to surveys or questionnaires.</li>
                  <li>When you send us an email or otherwise contact us.</li>
                </ul>
                <p className="mb-2">When you use the Services and such information is collected automatically:</p>
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li>Through Cookies (defined in the "Tracking Tools and Opt-Out" section below).</li>
                  <li>If you download our mobile application or use a location-enabled browser, we may receive information about your location and mobile device.</li>
                  <li>If you download and install certain applications and software we make available, we may receive and collect information transmitted from your computing device for the purpose of providing you the relevant Services.</li>
                </ul>
              </PolicySubsection>
              <PolicySubsection title="Public Records">
                <p>From the government.</p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="how-we-disclose" title="How We Disclose Your Personal Data">
              <p className="mb-4">
                We disclose your Personal Data to the categories of service providers and other parties listed in this section. Depending on state laws that may be applicable to you, some of these disclosures may constitute a "sale" of your Personal Data.
              </p>
              <PolicySubsection title="Service Providers">
                <p className="mb-2">These parties help us provide the Services or perform business functions on our behalf. They include:</p>
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li>Hosting, technology and communication providers.</li>
                  <li>Analytics providers for web traffic or usage of the site.</li>
                  <li>Security and fraud prevention consultants.</li>
                  <li>Support and customer service vendors.</li>
                  <li>Product fulfillment and delivery providers.</li>
                  <li>Payment processors.</li>
                </ul>
              </PolicySubsection>
              <PolicySubsection title="Legal Obligations">
                <p>We may disclose any Personal Data that we collect with third parties in conjunction with any of the activities set forth under "Other Permitted Purposes for Processing Personal Data" section above.</p>
              </PolicySubsection>
              <PolicySubsection title="Business Transfers">
                <p>All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part).</p>
              </PolicySubsection>
              <PolicySubsection title="Data that is Not Personal Data">
                <p>We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such data and disclose it with third parties for our lawful business purposes, provided that we will not disclose such data in a manner that could identify you.</p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="tracking-tools" title="Tracking Tools and Opt-Out">
              <p>
                The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs and JavaScript (collectively, "Cookies") to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, learn about our user base and operate and improve our Services.
              </p>
              <p className="mt-3">
                Please note that because of our use of Cookies, the Services do not support "Do Not Track" requests sent from a browser at this time.
              </p>
              <PolicySubsection title="Essential Cookies">
                <p>Essential Cookies are required for providing you with features or services that you have requested. Disabling these Cookies may make certain features and services unavailable.</p>
              </PolicySubsection>
              <PolicySubsection title="Performance / Analytical Cookies">
                <p className="mb-2">
                  Performance/Analytical Cookies allow us to understand how visitors use our Services. For example, Google LLC ("Google") uses cookies in connection with its Google Analytics services. You have the option to opt-out of Google's use of Cookies by visiting the{" "}
                  <PolicyLink href="http://www.google.com/privacy_ads.html">Google advertising opt-out page</PolicyLink> or the{" "}
                  <PolicyLink href="https://tools.google.com/dlpage/gaoptout/">Google Analytics Opt-out Browser Add-on</PolicyLink>.
                </p>
                <p>
                  You can decide whether or not to accept Cookies through your internet browser's settings. To find out more about Cookies generally, please visit{" "}
                  <PolicyLink href="http://www.allaboutcookies.org/">allaboutcookies.org</PolicyLink>.
                </p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="data-security" title="Data Security">
              <p>
                We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure.
              </p>
              <PolicySubsection title="Data Retention">
                <p>
                  We retain Personal Data about you for as long as necessary to provide you with our Services or to perform our business or commercial purposes for collecting your Personal Data. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law.
                </p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="children-data" title="Personal Data of Children">
              <p>
                We do not knowingly collect or solicit Personal Data from children under 16 years of age. If we learn we have collected Personal Data from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 may have provided Personal Data to us, please contact us at{" "}
                <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink>.
              </p>
            </PolicySection>

            <PolicySection id="colorado-rights" title="Colorado Resident Rights">
              <p className="mb-4">
                If you are a Colorado resident, you have the rights set forth under the Colorado Privacy Act ("CPA"). If there are any conflicts between this section and any other provision of this Privacy Policy, the portion that is more protective of Personal Data shall control. Questions? Contact us at{" "}
                <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink>.
              </p>
              <div className="space-y-4">
                {[
                  ["Access and Portability", "You have the right to request confirmation of whether or not we are processing your Personal Data and to access and request a copy in a machine-readable format, twice within a calendar year."],
                  ["Correction", "You have the right to correct inaccuracies in your Personal Data."],
                  ["Deletion", "You have the right to delete Personal Data concerning you."],
                  ["Personal Data Sales Opt-Out", "We do not currently sell or process for the purposes of targeted advertising your Personal Data as defined under the CPA."],
                  ["Profiling Opt-Out", "We do not process your Personal Data for \"Profiling\" to make \"Decisions\" under the CPA."],
                  ["We Will Not Discriminate Against You", "We will not process your personal data in violation of state and federal laws that prohibit unlawful discrimination against consumers."],
                ].map(([subtitle, text]) => (
                  <div key={subtitle} className="border-l-2 border-border pl-4">
                    <p className="font-display text-sm font-semibold text-foreground mb-1">{subtitle}</p>
                    <p className="text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection id="exercising-rights" title="Exercising Your Rights under Colorado Privacy Laws">
              <p className="mb-3">
                To exercise the rights described in this Privacy Policy, you or your Authorized Agent must send us a request that (1) provides sufficient information to verify your identity, and (2) describes your request in sufficient detail. We will respond within the time period required by applicable law.
              </p>
              <PolicySubsection title="Request to Access, Delete, or Correct">
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li><strong>Email:</strong> <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink></li>
                  <li><strong>Call:</strong> <PolicyLink href="tel:+18772725862">(877) 272-5862</PolicyLink></li>
                </ul>
              </PolicySubsection>
              <PolicySubsection title="Appealing a Denial">
                <p className="mb-2">If we refuse to take action on your request, you may appeal our decision:</p>
                <ul className="list-disc list-outside pl-5 space-y-1.5">
                  <li><strong>Email:</strong> <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink> (title must include "Appeal")</li>
                  <li><strong>Call:</strong> <PolicyLink href="tel:+18772725862">(877) 272-5862</PolicyLink></li>
                </ul>
                <p className="mt-2">
                  If we deny your appeal, you have the right to contact the Attorney General of{" "}
                  <PolicyLink href="http://www.coag.gov/resources/colorado-privacy-act/">Colorado</PolicyLink>.
                </p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="other-state-rights" title="Other State Law Privacy Rights">
              <PolicySubsection title="California Resident Rights">
                <p>
                  Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties' direct marketing purposes. To submit such a request, contact us at{" "}
                  <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink>.
                  Our Services do not support Do Not Track requests at this time. Learn more at{" "}
                  <PolicyLink href="http://www.allaboutdnt.com/">allaboutdnt.com</PolicyLink>.
                </p>
              </PolicySubsection>
              <PolicySubsection title="Nevada Resident Rights">
                <p>We do not currently sell your Personal Data as sales are defined in Nevada Revised Statutes Chapter 603A.</p>
              </PolicySubsection>
            </PolicySection>

            <PolicySection id="contact" title="Contact Information">
              <p className="mb-4">If you have any questions or comments about this Privacy Policy, please do not hesitate to contact us:</p>
              <div className="bg-muted/30 border border-border rounded-lg p-5 space-y-2 text-sm">
                <p><strong className="text-foreground">Phone:</strong> <PolicyLink href="tel:+18772725862">(877) 272-5862</PolicyLink></p>
                <p><strong className="text-foreground">Web:</strong> <PolicyLink href="https://www.apaluma.com">www.apaluma.com</PolicyLink></p>
                <p><strong className="text-foreground">Email:</strong> <PolicyLink href="mailto:support@apaluma.com">support@apaluma.com</PolicyLink></p>
                <p><strong className="text-foreground">Address:</strong> 300 Menaul Blvd. NW, Ste. A#248, Albuquerque, New Mexico 87107</p>
              </div>
            </PolicySection>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

const PolicySection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <div id={id} className="scroll-mt-24">
    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">{title}</h2>
    {children}
  </div>
);

const PolicySubsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-2">{title}</h4>
    {children}
  </div>
);

const PolicyLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="text-primary hover:text-foreground transition-colors underline underline-offset-2"
  >
    {children}
  </a>
);

export default Privacy;
