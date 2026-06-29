import { Check, Shield, Award, Sparkles, Package, Users, Globe, Smartphone, Bell, Activity, Heart, Box, QrCode, Snowflake, Clock, FileCheck } from 'lucide-react';
import { DNAHelix, MoleculeIcon, GeometricPattern, PeptideChain, FloatingParticles } from '../components/VisualElements';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#F8F8F8]">
      <header className="relative z-50 border-b border-[#d4af37]/20 bg-[#0a0a0a]/95 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Logo className="h-10" />
        </div>
      </header>

      <div className="relative overflow-hidden">
        <GeometricPattern />
        <FloatingParticles />
        <DNAHelix />
        <MoleculeIcon />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  This is the New World of{' '}
                  <span className="text-[#d4af37]">Peptides</span>
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-transparent" />

                <p className="text-xl lg:text-2xl font-light leading-relaxed text-[#E5E5E5]">
                  Ageless Pharma RX is shaping it. Where pharmaceutical purity meets luxury packaging,
                  technology integration, and concierge-level hospitality.
                </p>

                <p className="text-lg text-[#d4af37] font-medium italic">
                  Performance begins with certainty.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <StatBadge icon={FileCheck} label="503A Licensed" />
                <StatBadge icon={Shield} label="GMP Compliant" />
                <StatBadge icon={Award} label="FDA Registered" />
                <StatBadge icon={Snowflake} label="Cold Chain Secure" />
                <StatBadge icon={Clock} label="24/7 Support" />
              </div>
            </div>

            <div id="partner-section" className="lg:pl-8 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/20 to-transparent blur-2xl rounded-3xl" />

              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-[#d4af37]/20 shadow-2xl shadow-[#d4af37]/10 hover:shadow-[#d4af37]/20 transition-all duration-500">
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-semibold text-[#d4af37]">Partner With Excellence</h3>
                  <p className="text-[#E5E5E5] leading-relaxed">
                    Discover how Ageless Pharma RX elevates your practice with pharmaceutical-grade peptides,
                    cutting-edge technology, and unmatched hospitality. Join the clinicians who refuse to compromise
                    on quality, transparency, or patient experience.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="flex items-center space-x-2 text-sm text-[#d4af37]">
                      <Check className="w-4 h-4" />
                      <span>GMP Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#d4af37]">
                      <Check className="w-4 h-4" />
                      <span>Dedicated Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-[#d4af37]">
                      <Check className="w-4 h-4" />
                      <span>Tech Integration</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0a0a]/80 rounded-xl border border-[#d4af37]/10 overflow-hidden" style={{ height: '520px' }}>
                  <div dangerouslySetInnerHTML={{
                    __html: `<iframe
    src="https://api.leadconnectorhq.com/widget/form/iUNCAf8qZtHWXdzH9fk6"
    style="width:100%;height:100%;border:none;border-radius:3px;margin-top:-40px"
    id="inline-iUNCAf8qZtHWXdzH9fk6"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Ageless Pharma RX"
    data-height="520"
    data-layout-iframe-id="inline-iUNCAf8qZtHWXdzH9fk6"
    data-form-id="iUNCAf8qZtHWXdzH9fk6"
    title="Ageless Pharma RX"
        >
</iframe>`
                  }} />
                </div>

                <p className="text-xs text-[#E5E5E5]/40 italic mt-4 leading-relaxed">
                  By submitting your mobile number, you agree to receive recurring account notifications and promotional messages from Ageless Pharma Rx. Text message & data rates may apply. Message frequency may vary. You can opt-out any time by replying STOP. Click{' '}
                  <Link to="/privacy.html" className="text-[#d4af37] hover:text-[#b8941f] transition-colors">
                    HERE
                  </Link>
                  {' '}to see our Privacy Policy. For HELP call 972-292-9833.
                </p>
              </div>
            </div>
          </section>

          <div className="mb-32">
            <PeptideChain />
          </div>

          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
                Our Four <span className="text-[#d4af37]">Pillars</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
              <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto">
                The foundation of everything we do at Ageless Pharma RX
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <PillarCard
                icon={Shield}
                title="Integrity"
                subtitle="Our Backbone"
                features={[
                  "GMP-compliant sterile manufacturing",
                  "Third-party sterility testing",
                  "Transparent COAs with every batch",
                  "Regulatory alignment, no shortcuts"
                ]}
              />
              <PillarCard
                icon={Sparkles}
                title="Innovation"
                subtitle="Our Method"
                features={[
                  "Tech-integrated peptide delivery",
                  "Predictive dosing through app ecosystems",
                  "Continuous upgrades and improvements",
                  "Evidence-based educational systems"
                ]}
              />
              <PillarCard
                icon={Package}
                title="Luxury"
                subtitle="Our Aesthetic"
                features={[
                  "Premium packaging with blister seals",
                  "Serialized QR authentication",
                  "Velvet-matte boxes with magnet closures",
                  "Apple-grade unboxing experiences"
                ]}
              />
              <PillarCard
                icon={Heart}
                title="Hospitality"
                subtitle="Our Culture"
                features={[
                  "Dedicated clinician success managers",
                  "24/7 live support for ordering",
                  "Proactive outreach and follow-ups",
                  "Relationship-first, always"
                ]}
              />
            </div>
          </section>

          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#d4af37]/10 to-transparent blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#202020] rounded-3xl p-12 border border-[#d4af37]/20">
                  <div className="grid grid-cols-2 gap-6">
                    <MetricCard number="99.9%" label="Purity Standards" />
                    <MetricCard number="24/7" label="Support Access" />
                    <MetricCard number="<2°C" label="Temp Control" />
                    <MetricCard number="100%" label="COA Coverage" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-semibold">
                  Precision at <span className="text-[#d4af37]">Every Step</span>
                </h2>
                <p className="text-lg text-[#E5E5E5] leading-relaxed">
                  From compounding to delivery, every touchpoint is designed for excellence.
                  Our pharmaceutical-grade processes ensure your patients receive peptides that
                  meet the highest standards of quality and efficacy.
                </p>
                <div className="space-y-4 pt-4">
                  <FeaturePoint text="Third-party tested for purity and potency" />
                  <FeaturePoint text="Sterile compounding in certified clean rooms" />
                  <FeaturePoint text="Real-time temperature monitoring during transit" />
                  <FeaturePoint text="Dedicated clinician success team" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full">
                  <Smartphone className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-medium text-[#d4af37]">Technology Integration</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold">
                  The <span className="text-[#d4af37]">Ageless Future App</span>
                </h2>
                <p className="text-lg text-[#E5E5E5] leading-relaxed">
                  Where pharmacy meets technology. Seamlessly manage prescriptions, track protocols,
                  and provide elevated patient care through our comprehensive digital platform.
                </p>
                <div className="space-y-4 pt-4">
                  <AppFeature icon={Users} text="Prescribing portal for clinicians (coming soon)" />
                  <AppFeature icon={Bell} text="Refill automation engine" />
                  <AppFeature icon={Activity} text="Protocol tracking with biomarkers" />
                  <AppFeature icon={Clock} text="Retention machine with 90-day arcs" />
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#d4af37]/20 to-transparent blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-12 border border-[#d4af37]/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <AppMetric icon={Users} label="Clinician Portal" />
                    <AppMetric icon={Activity} label="Protocol Tracking" />
                    <AppMetric icon={Bell} label="Auto-Refills" />
                    <AppMetric icon={Smartphone} label="Patient App" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
                Where <span className="text-[#d4af37]">Luxury</span> Meets Pharmaceutical Excellence
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
              <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto">
                Premium packaging engineered like Apple unboxing meets pharmaceutical regulation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <LuxuryFeature
                icon={Box}
                title="Starview Blister Packaging"
                description="Metallic foil seals protecting pharmaceutical-grade peptides with visual elegance"
              />
              <LuxuryFeature
                icon={QrCode}
                title="Serialized Authentication"
                description="QR codes for instant verification, batch tracking, and complete transparency"
              />
              <LuxuryFeature
                icon={Package}
                title="Velvet-Matte Presentation"
                description="Magnet-closure boxes in matte-black with metallic gold accents"
              />
            </div>

            <div className="mt-16 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/10 to-transparent blur-3xl rounded-3xl" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-12 border border-[#d4af37]/20">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Snowflake className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cold-Chain Protected</h3>
                    <p className="text-[#E5E5E5]">Engineered like high-end skincare with real-time temperature monitoring</p>
                  </div>
                  <div>
                    <Box className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Premium Unboxing</h3>
                    <p className="text-[#E5E5E5]">Every detail designed to create a memorable luxury experience</p>
                  </div>
                  <div>
                    <Globe className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Concierge Shipping</h3>
                    <p className="text-[#E5E5E5]">White-glove delivery with tracking and personal support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/20 to-transparent blur-2xl rounded-3xl" />

                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-12 border border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/10 backdrop-blur-sm">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-semibold">
                      Join the <span className="text-[#d4af37]">Peptide Revolution</span>
                    </h2>
                    <p className="text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto">
                      We will lead the peptide revolution out of research obscurity and into mainstream longevity medicine.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          document.getElementById('partner-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group px-8 py-4 bg-[#d4af37] hover:bg-[#b8941f] text-[#0a0a0a] rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#d4af37]/30 transform hover:-translate-y-0.5"
                      >
                        <span className="flex items-center space-x-2">
                          <span>Register Your Clinic</span>
                          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-[#d4af37]/20 bg-[#0a0a0a]">
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
            <div className="pt-2 flex items-center justify-center space-x-2">
              <Link to="/terms.html" className="text-xs text-[#d4af37] hover:text-[#b8941f] transition-colors">
                Terms and Conditions
              </Link>
              <span className="text-xs text-[#E5E5E5]/40">|</span>
              <Link to="/privacy.html" className="text-xs text-[#d4af37] hover:text-[#b8941f] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 bg-[#2a2a2a] border border-[#d4af37]/20 rounded-lg">
      <Icon className="w-4 h-4 text-[#d4af37]" />
      <span className="text-sm font-medium text-[#E5E5E5]">{label}</span>
    </div>
  );
}

function MetricCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 bg-[#202020]/50 rounded-xl border border-[#d4af37]/10">
      <div className="text-3xl font-bold text-[#d4af37] mb-2">{number}</div>
      <div className="text-sm text-[#E5E5E5]">{label}</div>
    </div>
  );
}

function FeaturePoint({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
      <span className="text-[#E5E5E5]">{text}</span>
    </div>
  );
}

function PillarCard({
  icon: Icon,
  title,
  subtitle,
  features
}: {
  icon: any;
  title: string;
  subtitle: string;
  features: string[];
}) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300">
            <Icon className="w-7 h-7 text-[#d4af37]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#F8F8F8] group-hover:text-[#d4af37] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-[#d4af37] font-medium">{subtitle}</p>
          </div>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span className="text-[#E5E5E5]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AppFeature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#d4af37]" />
      </div>
      <span className="text-[#E5E5E5]">{text}</span>
    </div>
  );
}

function AppMetric({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="text-center p-6 bg-[#0a0a0a]/50 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300">
      <Icon className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
      <div className="text-sm font-medium text-[#E5E5E5]">{label}</div>
    </div>
  );
}

function LuxuryFeature({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-8 border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#d4af37]/10 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="relative space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300 mx-auto">
          <Icon className="w-6 h-6 text-[#d4af37]" />
        </div>
        <h3 className="text-xl font-semibold text-center text-[#F8F8F8] group-hover:text-[#d4af37] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#E5E5E5] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
