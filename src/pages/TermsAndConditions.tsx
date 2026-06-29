import { FileText, Scale, AlertTriangle, Shield, Users, Globe, Bell, Check } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export function TermsAndConditions() {
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
            <Scale className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#d4af37]">Terms and Conditions</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Terms and <span className="text-[#d4af37]">Conditions</span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />

          <p className="text-lg text-[#E5E5E5]">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Section
            icon={FileText}
            title="Acceptance of Terms"
            content={
              <div className="space-y-3">
                <p>
                  Welcome to Ageless Pharma RX. By accessing or using our website ("Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Site.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Ageless Pharma RX ("we," "us," or "our"). We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
                </p>
              </div>
            }
          />

          <Section
            icon={Globe}
            title="Use of Website"
            content={
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Permitted Use</h4>
                  <p className="mb-2">You may use our Site for lawful purposes only. You agree to use the Site in accordance with these Terms and all applicable laws and regulations.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#d4af37] mb-2">Prohibited Activities</h4>
                  <p className="mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                    <li>Use the Site for any illegal or unauthorized purpose</li>
                    <li>Violate any local, state, national, or international law</li>
                    <li>Transmit any harmful code, viruses, or malicious software</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the Site or servers</li>
                    <li>Collect or harvest personal information from other users</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Use automated systems to access the Site without permission</li>
                  </ul>
                </div>
              </div>
            }
          />

          <Section
            icon={Users}
            title="Interest List and Communications"
            content={
              <div className="space-y-3">
                <p>
                  By submitting your information through our interest list opt-in form, you agree to receive communications from Ageless Pharma RX. This may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>Account notifications and service updates</li>
                  <li>Promotional messages and marketing materials</li>
                  <li>Educational content about peptide therapies</li>
                  <li>Information about products and services</li>
                </ul>
                <p className="mt-4">
                  You may opt out of receiving promotional communications at any time by replying STOP to text messages, clicking unsubscribe links in emails, or contacting us directly. Text message and data rates may apply. Message frequency may vary.
                </p>
              </div>
            }
          />

          <Section
            icon={Shield}
            title="Intellectual Property Rights"
            content={
              <div className="space-y-3">
                <p>
                  All content on this Site, including but not limited to text, graphics, logos, images, videos, software, and design elements, is the property of Ageless Pharma RX or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without prior written consent from Ageless Pharma RX, except as follows:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>You may print or download one copy for your personal, non-commercial use</li>
                  <li>If we provide social media features, you may share content as enabled by such features</li>
                </ul>
              </div>
            }
          />

          <Section
            icon={AlertTriangle}
            title="Medical Disclaimer"
            content={
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-[#d4af37]/30">
                <div className="flex items-start space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-[#d4af37] text-lg">Important Medical Notice</h4>
                </div>
                <div className="space-y-3 text-[#E5E5E5] leading-relaxed">
                  <p>
                    The information provided on this Site is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
                  </p>
                  <p>
                    The products and services offered by Ageless Pharma RX require a valid prescription from a licensed healthcare provider. We do not provide medical advice, diagnose conditions, or prescribe treatments.
                  </p>
                  <p>
                    Never disregard professional medical advice or delay in seeking it because of something you have read on this Site. If you think you may have a medical emergency, call your doctor or emergency services immediately.
                  </p>
                </div>
              </div>
            }
          />

          <Section
            icon={Scale}
            title="Limitation of Liability"
            content={
              <div className="space-y-3">
                <p>
                  To the fullest extent permitted by applicable law, Ageless Pharma RX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>Your access to or use of or inability to access or use the Site</li>
                  <li>Any conduct or content of any third party on the Site</li>
                  <li>Any content obtained from the Site</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="mt-4">
                  In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount you have paid to us in the past twelve (12) months, or one hundred dollars ($100), whichever is greater.
                </p>
              </div>
            }
          />

          <Section
            icon={FileText}
            title="Disclaimer of Warranties"
            content={
              <div className="space-y-3">
                <p>
                  THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#E5E5E5] ml-4">
                  <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties that the Site will be uninterrupted, error-free, or secure</li>
                  <li>Warranties regarding the accuracy or reliability of any information</li>
                  <li>Warranties that defects will be corrected</li>
                </ul>
                <p className="mt-4">
                  We do not warrant that the Site or any content will be free of viruses or other harmful components. You assume all risk and responsibility for your use of the Site.
                </p>
              </div>
            }
          />

          <Section
            icon={Check}
            title="Indemnification"
            content={
              <p>
                You agree to defend, indemnify, and hold harmless Ageless Pharma RX, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>
            }
          />

          <Section
            icon={Globe}
            title="Governing Law and Jurisdiction"
            content={
              <div className="space-y-3">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Ageless Pharma RX is located, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from or relating to these Terms or your use of the Site shall be resolved exclusively in the courts located in our jurisdiction, and you consent to the personal jurisdiction of such courts.
                </p>
              </div>
            }
          />

          <Section
            icon={Bell}
            title="Changes to Terms"
            content={
              <p>
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            }
          />

          <Section
            icon={Scale}
            title="Severability"
            content={
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired in any way. The invalid provision shall be replaced with a valid provision that most closely approximates the intent and economic effect of the invalid provision.
              </p>
            }
          />

          <Section
            icon={FileText}
            title="Entire Agreement"
            content={
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published by us on the Site, constitute the entire agreement between you and Ageless Pharma RX concerning your use of the Site and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written.
              </p>
            }
          />

          <Section
            icon={Users}
            title="Contact Information"
            content={
              <div className="space-y-4">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 border border-[#d4af37]/20">
                  <h4 className="font-semibold text-[#d4af37] mb-4">Ageless Pharma RX</h4>
                  <div className="space-y-2 text-[#E5E5E5]">
                    <p>Email: support@agelesspharmarx.com</p>
                    <p>Phone: Available 24/7 for support</p>
                  </div>
                  <p className="mt-4 text-sm text-[#E5E5E5]/80">
                    Our dedicated support team is committed to addressing your questions and concerns promptly.
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
                  <h3 className="text-xl font-semibold mb-3 text-[#d4af37]">Our Commitment to Excellence</h3>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    At Ageless Pharma RX, integrity is our backbone. These Terms and Conditions reflect our commitment to transparency, professionalism, and the highest standards of pharmaceutical excellence. We are dedicated to building lasting relationships with our partners based on trust, quality, and exceptional service.
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
