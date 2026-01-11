import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Will this work for my type of hair loss?',
    answer: 'Hair loss varies from person to person. At LIFESCC, we conduct a thorough analysis of your hair density, scalp health, follicle strength, and hair-loss pattern before recommending any treatment. This ensures the solution is tailored specifically for your condition.',
  },
  {
    question: 'Are treatments painful or surgical?',
    answer: 'Most of our hair restoration treatments are non-surgical and minimally invasive. For hair transplantation (FUE), the procedure is performed under local anaesthesia, making it virtually painless. Recovery is quick with minimal discomfort.',
  },
  {
    question: 'How soon will I see results?',
    answer: 'Many clients notice reduced hair fall within the first 4 weeks. Visible new hair growth typically begins around 8-12 weeks. For hair transplants, initial growth is visible in 3-4 months with full results in 12-18 months.',
  },
  {
    question: 'Will I need a hair transplant immediately?',
    answer: 'Not necessarily. A transplant is recommended only when non-surgical treatments are not suitable for your condition. Our doctors will first explore all non-invasive options and suggest a transplant only if it\'s the most effective solution for your case.',
  },
  {
    question: 'Will results look natural?',
    answer: 'Absolutely. Our FUE hair transplant technique involves precise, individual follicle extraction and implantation, creating a natural hairline and growth pattern. The results are undetectable and blend seamlessly with your existing hair.',
  },
  {
    question: 'Is this suitable for people above 40?',
    answer: 'Yes, our hair restoration programs are suitable for adults of all ages. In fact, many of our successful clients are above 40. Age is not a barrier — what matters is the condition of your scalp and follicle health, which we assess during consultation.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-light py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-light transition-colors"
                >
                  <span className="text-lg font-semibold text-neutral-text pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-neutral-text-secondary flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
