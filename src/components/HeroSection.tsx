import { CTAForm } from './CTAForm';

export function HeroSection() {
  return (
    <section className="bg-gradient-hero pt-20 md:pt-32 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff18a] via-transparent to-[#fff18a] opacity-40" />
      
      <div className="section-container relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-text mb-6 leading-tight">
            A doctor-led hair solution program that stops hair fall and rebuilds density in just 4 weeks.
          </h1>
          <p className="text-lg md:text-xl text-neutral-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto">
            Tired of superficial fixes? LIFESCC offers a doctor-guided hair restoration journey, addressing the true cause of hair fall. Unlike others, we strengthen follicles from the core and restore natural density with personalised solutions and advanced hair transplantation for lasting results.
          </p>

          <div className="mb-6 max-w-md mx-auto">
            <CTAForm sourceSection="hero" buttonText="Book a Free Hair & Scalp Assessment" />
          </div>

          <p className="text-sm text-neutral-text-secondary">
            Free consultation · No pressure · Visit your nearest Lifescc clinic
          </p>
        </div>
      </div>
    </section>
  );
}
