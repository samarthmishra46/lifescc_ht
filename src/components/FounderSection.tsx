import { CTAForm } from './CTAForm';

export function FounderSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-neutral-bg rounded-card overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqyizevct/image/upload/c_crop,w_1358,h_1450,x_42,y_161/v1767811201/6203693d-e016-4fb5-a493-aff42702471b_ulwoks.jpg"
                  alt="Dr. Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <div className="text-3xl font-serif text-neutral-border mb-4">~Signature~</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-text mb-2">
                Dr. [Founder Name]
              </h3>
              <p className="text-lg text-neutral-text-secondary mb-6">
                Founder, Lifescc<br />
                Doctor-led Hair Restoration Clinics
              </p>
              <blockquote className="text-xl md:text-2xl text-neutral-text italic border-l-4 border-primary-500 pl-6">
                "Hair loss is never the same for two people. Our responsibility is to understand the cause before offering a solution."
              </blockquote>
            </div>
          </div>

          <div className="mt-16">
            <CTAForm sourceSection="founder" />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Root-cause diagnosis',
    description: 'Identifying why hair loss is happening through comprehensive analysis',
  },
  {
    title: 'Scalp and follicle correction',
    description: 'Treating scalp conditions and strengthening hair follicles',
  },
  {
    title: 'Hair regrowth stimulation',
    description: 'Advanced treatments to activate dormant follicles and promote growth',
  },
  {
    title: 'Advanced hair transplantation',
    description: 'Precision FUE transplantation when required for permanent restoration',
  },
];

export function HowLifesccHelps() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-6">
              So how does LIFESCC actually help?
            </h2>
            <p className="text-xl md:text-2xl text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
              At LIFESCC, hair restoration is not treated as a cosmetic fix or one-time procedure.
            </p>
            <p className="text-xl md:text-2xl text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
              We focus on correcting why hair loss is happening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <h3 className="text-2xl font-semibold text-neutral-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-text-secondary text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl text-neutral-text-secondary max-w-3xl mx-auto">
              Everything is personalised. Nothing is rushed. Nothing is unnecessary.
            </p>
            <p className="text-lg text-neutral-text max-w-3xl mx-auto font-medium">
              To do this effectively, LIFESCC uses two complementary hair restoration programs that work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
