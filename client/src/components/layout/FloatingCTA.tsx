import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = bookingSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={scrollToBooking}
        className="bg-accent text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300"
        aria-label="Book Appointment"
      >
        <CalendarCheck className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FloatingCTA;
