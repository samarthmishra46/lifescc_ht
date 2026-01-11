import { CTAForm } from './CTAForm';

export function FinalCTA() {
  return (
    <section className="bg-[#fff18a] py-16 md:py-24">
      <div className="section-container pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Your Hair Transformation Starts With a Single Decision
          </h2>

          <div className="text-xl md:text-2xl mb-12 space-y-4 leading-relaxed text-black" style={{ fontFamily: 'Georgia, serif' }}>
            <p>You've waited long enough.</p>
            <p>You deserve hair that looks natural, feels fuller, and restores your confidence.</p>
          </div>

          <div className="max-w-md mx-auto">
            <CTAForm
              sourceSection="final-cta"
              buttonText="Begin My Hair Transformation"
              variant="primary"
            />

           
          </div>
        </div>
      </div>
       <div className="border-t border-black "></div>
    </section>
    
  );
}
