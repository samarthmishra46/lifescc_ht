import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    age: 34,
    city: 'Bangalore',
    rating: 5,
    testimonial: 'I was losing hair rapidly and felt helpless. At LIFESCC, doctors explained the real cause instead of selling random treatments. Within weeks, hair fall reduced drastically and new growth started.',
    beforeImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=After',
  },
  {
    name: 'Vikram Reddy',
    age: 42,
    city: 'Hyderabad',
    rating: 5,
    testimonial: 'After trying countless products and treatments, I had almost given up. The FUE transplant at LIFESCC gave me natural-looking results. My hairline looks exactly like it did 10 years ago.',
    beforeImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=After',
  },
  {
    name: 'Suresh Kumar',
    age: 38,
    city: 'Chennai',
    rating: 5,
    testimonial: 'The doctors at LIFESCC identified my scalp condition that others had missed. The treatment plan was personalized and I started seeing new hair growth within the first month.',
    beforeImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=After',
  },
  {
    name: 'Anil Menon',
    age: 45,
    city: 'Coimbatore',
    rating: 5,
    testimonial: 'I was skeptical about hair restoration, but LIFESCC\'s doctor-led approach gave me confidence. The results speak for themselves — fuller, healthier hair that looks completely natural.',
    beforeImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=After',
  },
  {
    name: 'Pradeep Nair',
    age: 36,
    city: 'Bangalore',
    rating: 5,
    testimonial: 'My receding hairline was affecting my confidence. The hair regrowth program not only stopped the hair fall but also brought back density I thought was lost forever.',
    beforeImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/160x192/e5e7eb/6b7280?text=After',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-text mb-4">
              Real People. Real Results.
            </h2>
          </div>

          <div className="relative">
            {/* Main Card */}
            <div className="card bg-gradient-soft shadow-soft-lg">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Before/After Images */}
                <div className="flex gap-6 mx-auto md:mx-0">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-neutral-border to-neutral-light rounded-xl overflow-hidden border-2 border-neutral-border">
                      <img 
                        src={currentTestimonial.beforeImage} 
                        alt={`${currentTestimonial.name} before`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-neutral-text-secondary text-center mt-2 font-medium">Before</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-neutral-border to-neutral-light rounded-xl overflow-hidden border-2 border-neutral-border">
                      <img 
                        src={currentTestimonial.afterImage} 
                        alt={`${currentTestimonial.name} after`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-neutral-text-secondary text-center mt-2 font-medium">After</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#ffff00] text-[#7d7d01]" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-neutral-text mb-6 leading-relaxed italic">
                    "{currentTestimonial.testimonial}"
                  </p>

                  <div className="border-t-2 border-primary-200 pt-4">
                    <p className="text-xl font-bold text-neutral-text">
                      {currentTestimonial.name}, {currentTestimonial.age}
                    </p>
                    <p className="text-neutral-text-secondary">{currentTestimonial.city}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-soft hover:bg-neutral-light transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-text-secondary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-soft hover:bg-neutral-light transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-neutral-text-secondary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-neutral-border hover:bg-neutral-text-secondary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
