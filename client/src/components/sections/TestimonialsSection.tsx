import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, StarHalf, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialCard = ({ 
  testimonial, 
  isActive, 
  isPrevious, 
  isNext
}: { 
  testimonial: typeof testimonials[0]; 
  isActive: boolean;
  isPrevious: boolean;
  isNext: boolean;
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  // Define different class sets based on position
  const cardClasses = isActive 
    ? "z-20 scale-110 bg-white shadow-xl border-primary border-2" 
    : isPrevious || isNext 
      ? "z-10 scale-90 bg-white/90 opacity-80 hidden sm:block" 
      : "hidden";

  return (
    <div 
      className={`testimonial-card rounded-lg p-5 sm:p-6 transition-all duration-300 ${cardClasses}`}
    >
      {isActive && (
        <div className="absolute -top-3 -left-3 bg-primary text-white p-2 rounded-full">
          <Quote className="h-5 w-5" />
        </div>
      )}
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-3 sm:mr-4"
        />
        <div>
          <h4 className="font-bold text-base sm:text-lg">{testimonial.name}</h4>
          <div className="flex text-yellow-400">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm sm:text-base">{testimonial.review}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const totalTestimonials = testimonials.length;

  // Auto rotation of testimonials every 5 seconds
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, totalTestimonials]);

  // Pause autoplay when user interacts with controls
  const handleManualNavigation = (newIndex: number) => {
    setAutoplay(false);
    setActiveIndex(newIndex);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = (activeIndex - 1 + totalTestimonials) % totalTestimonials;
    handleManualNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % totalTestimonials;
    handleManualNavigation(newIndex);
  };

  // Calculate previous and next indices
  const prevIndex = (activeIndex - 1 + totalTestimonials) % totalTestimonials;
  const nextIndex = (activeIndex + 1) % totalTestimonials;

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">What Our <span className="text-primary">Patients Say</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Read testimonials from our satisfied patients about their experiences at Bright Smile Dental.</p>
        </motion.div>

        <div className="relative">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-0 right-0 z-30 flex justify-between items-center px-2 -mt-6 sm:px-6">
            <button 
              onClick={goToPrevious}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={goToNext}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="flex justify-center items-center h-[280px] sm:h-[300px] relative py-6">
            {/* Previous Card */}
            <TestimonialCard 
              testimonial={testimonials[prevIndex]} 
              isActive={false} 
              isPrevious={true} 
              isNext={false}
            />
            
            {/* Active Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeIndex}
            >
              <TestimonialCard 
                testimonial={testimonials[activeIndex]} 
                isActive={true} 
                isPrevious={false} 
                isNext={false}
              />
            </motion.div>
            
            {/* Next Card */}
            <TestimonialCard 
              testimonial={testimonials[nextIndex]} 
              isActive={false} 
              isPrevious={false} 
              isNext={true}
            />
          </div>

          {/* Navigation Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
