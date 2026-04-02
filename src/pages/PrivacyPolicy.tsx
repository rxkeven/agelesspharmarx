import { Shield, Lock, Eye, Mail, Phone, FileText, AlertCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F8F8F8]">
      <header className="relative z-50 border-b border-[#d4af37]/20 bg-[#0a0a0a]/95 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/">
            <Logo className="h-10" />
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#d4af37]">Privacy Policy</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Privacy <span className="text-[#d4af37]">Policy</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />

          <p className="text-lg text-[#E5E5E5]">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Section
            icon={FileText}
            title="Introduction"
            content={
              <p>
                Ageless Pharma RX ("we," "our," or "us") is committed to protecting your privacy and maintaining the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
            }
          />

          <Section
            icon={Eye}
            title="Information We Collect"
            content={
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Personal Information</h4>
                  <p className="mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Professional credentials and licensing information</li>
                    <li>Business information for healthcare providers and clinics</li>
                    <li>Payment and billing information</li>
                    <li>Health information necessary for prescriptions and treatments</li>
                    <li>Communications with our customer support team</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Automatically Collected Information</h4>
                  <p className="mb-2">When you access our website or use our services, we may automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, clickstream data)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location data (with your permission)</li>
                  </ul>
                </div>
              </div>
            }
          />

          <Section
            icon={Lock}
            title="How We Use Your Information"
            content={
              <div className="space-y-3">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>To provide, maintain, and improve our pharmaceutical services</li>
                  <li>To process prescriptions and deliver peptide therapies</li>
                  <li>To communicate with you about orders, services, and updates</li>
                  <li>To verify credentials and maintain compliance with healthcare regulations</li>
                  <li>To process payments and prevent fraudulent transactions</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To personalize your experience and improve our services</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To send marketing communications (with your consent)</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={Phone}
            title="Mobile Information Sharing"
            content={
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-[#d4af37]/30">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-[#d4af37] text-lg">Important Notice</h4>
                </div>
                <p className="text-[#E5E5E5] leading-relaxed">
                  We respect your privacy. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            }
          />

          <Section
            icon={Shield}
            title="Information Sharing and Disclosure"
            content={
              <div className="space-y-4">
                <p>We may share your information in the following circumstances:</p>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Service Providers</h4>
                  <p className="text-[#E5E5E5]">
                    We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, shipping partners, technology providers, and compliance consultants. These parties are contractually obligated to protect your information and use it only for authorized purposes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Healthcare Providers</h4>
                  <p className="text-[#E5E5E5]">
                    We may share necessary information with prescribing physicians and healthcare providers involved in your care, as required for proper medical treatment and prescription fulfillment.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Legal Requirements</h4>
                  <p className="text-[#E5E5E5]">
                    We may disclose information when required by law, regulation, legal process, or governmental request, or to protect our rights, property, safety, or that of others.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Business Transfers</h4>
                  <p className="text-[#E5E5E5]">
                    In the event of a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the acquiring entity, subject to the same privacy protections.
                  </p>
                </div>
              </div>
            }
          />

          <Section
            icon={Lock}
            title="Data Security"
            content={
              <div className="space-y-3">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Compliance with HIPAA and other healthcare privacy regulations</li>
                  <li>Secure storage in GMP-compliant facilities</li>
                </ul>
                <p className="text-[#E5E5E5] italic mt-4">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-leading standards.
                </p>
              </div>
            }
          />

          <Section
            icon={FileText}
            title="Your Privacy Rights"
            content={
              <div className="space-y-3">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Receive your information in a structured, machine-readable format</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Restriction:</strong> Request limitation on how we process your information</li>
                  <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.
                </p>
              </div>
            }
          />

          <Section
            icon={Eye}
            title="Cookies and Tracking Technologies"
            content={
              <div className="space-y-3">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Analyze traffic and user behavior</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </div>
            }
          />

          <Section
            icon={Shield}
            title="Third-Party Links"
            content={
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            }
          />

          <Section
            icon={FileText}
            title="Children's Privacy"
            content={
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take appropriate steps to delete such information.
              </p>
            }
          />

          <Section
            icon={AlertCircle}
            title="Changes to This Privacy Policy"
            content={
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            }
          />

          <Section
            icon={Mail}
            title="Contact Us"
            content={
              <div className="space-y-4">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-[#d4af37]/20">
                  <h4 className="font-semibold text-[#d4af37] mb-4">Ageless Pharma RX</h4>
                  <div className="space-y-2 text-[#E5E5E5]">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                      <span>Email: privacy@agelesspharmarx.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#d4af37]" />
                      <span>Phone: Available 24/7 for support</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#E5E5E5]/80">
                    We are committed to addressing your privacy concerns promptly and transparently. Our dedicated support team is available to assist you with any questions or requests.
                  </p>
                </div>
              </div>
            }
          />

          <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-8 border border-[#d4af37]/20">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-[#d4af37] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#d4af37]">Our Privacy Commitment</h3>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    At Ageless Pharma RX, integrity is our backbone. We are committed to maintaining the highest standards of privacy protection and data security. Your trust is paramount, and we work diligently to safeguard your personal information while providing pharmaceutical excellence and luxury service. Our privacy practices reflect our core values of transparency, security, and respect for your rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0a0a] rounded-lg font-semibold transition-all duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>

      <footer className="border-t border-[#d4af37]/20 bg-[#0a0a0a] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <p className="text-[#E5E5E5] font-medium text-lg">
              Ageless Pharma RX <span className="text-[#d4af37]">•</span> Created by Ageless Future
            </p>
            <p className="text-sm text-[#E5E5E5]/60 italic max-w-2xl mx-auto">
              This is the new world of peptides. Ageless Pharma RX is shaping it.
            </p>
            <div className="pt-4 text-xs text-[#E5E5E5]/40">
              <p>Integrity is our backbone. Innovation is our method.</p>
              <p>Luxury is our aesthetic. Hospitality is our culture.</p>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-sm text-[#E5E5E5]/60">
                Contact us: <a href="mailto:info@agelesspharmarx.com" className="text-[#d4af37] hover:text-[#b8941f] transition-colors">info@agelesspharmarx.com</a>
              </p>
              <p className="text-sm text-[#E5E5E5]/60">
                For help call: <a href="tel:972-292-9833" className="text-[#d4af37] hover:text-[#b8941f] transition-colors">972-292-9833</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  content
}: {
  icon: any;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-8 border border-[#d4af37]/20">
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#d4af37]" />
        </div>
        <h2 className="text-2xl font-bold text-[#F8F8F8] mt-2">{title}</h2>
      </div>
      <div className="text-[#E5E5E5] leading-relaxed">
        {content}
      </div>
    </div>
  );
}
