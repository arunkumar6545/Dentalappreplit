import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Torus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full bg-white z-50 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Torus className="text-primary h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold text-primary">Bright Smile Dental</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('home')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('services')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('doctors')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Our Doctors
          </a>
          <a 
            onClick={() => scrollToSection('testimonials')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Testimonials
          </a>
          <a 
            onClick={() => scrollToSection('blog')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Blog
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Contact
          </a>
          <Button
            variant="accent"
            onClick={() => scrollToSection('booking')}
            className="rounded-md"
          >
            Book Appointment
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`bg-white w-full shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a 
            onClick={() => scrollToSection('home')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('services')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('doctors')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Our Doctors
          </a>
          <a 
            onClick={() => scrollToSection('testimonials')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Testimonials
          </a>
          <a 
            onClick={() => scrollToSection('blog')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Blog
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground hover:text-primary font-medium transition-colors duration-300 cursor-pointer"
          >
            Contact
          </a>
          <Button
            variant="accent"
            onClick={() => scrollToSection('booking')}
            className="w-full rounded-md"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
