const painPoints = [
  "Your hair is thinning faster than you expected",
  "Hair fall hasn't stopped despite oils, shampoos, or treatments",
  "The hairline keeps moving back",
  "Hair looks weaker, flatter, and lifeless",
  "Temporary improvement never lasts",
  "You're tired of watching hair loss progress",
];

export function PainPoints() {
  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-10">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green mt-1"></div>
                <p className="text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-neutral-text text-center font-semibold mb-8">
            If that sounds familiar, you&apos;re not alone.
          </p>

          
        </div>
      </div>
    </section>
  );
}

export function LetterSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl text-neutral-text-secondary leading-relaxed">
            <p>Most people who come to LIFESCC have already tried everything they were advised.</p>
            <p>They followed routines.</p>
            <p>They used products.</p>
            <p>They spent time, money, and effort.</p>

            <p className="pt-4">Yet hair loss continued or returned.</p>

            <p className="pt-4">This doesn't mean you didn't try hard enough.</p>
            <p>It means the root cause was never identified.</p>

            <p className="pt-4">Hair loss is rarely a surface issue.</p>
            <p>It involves follicles, scalp health, hormones, nutrition, stress, and genetics together.</p>

            <p className="pt-4 font-semibold text-neutral-text">That's why random treatments stop working.</p>

            <p className="pt-4">You deserve a solution that understands your scalp —</p>
            <p>not one that keeps asking you to experiment on it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthorityClose() {
  return (
    <section className="bg-gradient-to-br from-[#fff293] via-transparent to-[#fff7b9] text-neutral-text py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            That's why we designed the LIFESCC Hair Solutions & Hair Transplantation System
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            A medically guided approach that treats hair loss at the root by combining diagnosis, non-surgical restoration, and advanced transplantation when required. So results are not just visible — but long-lasting.
          </p>
        </div>
      </div>
    </section>
  );
}
