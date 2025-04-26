import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Torus, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed w-full bg-background/90 backdrop-blur-sm z-50 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <Torus className="text-primary h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Bright Smile Dental</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
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
          <button
            aria-label="Toggle dark mode"
            type="button"
            className="rounded-full p-2 bg-background/20 backdrop-blur-sm text-foreground hover:bg-background/40 transition-colors duration-200"
            onClick={toggleTheme}
          >
            {mounted && (theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            ))}
          </button>
          <Button
            variant="accent"
            onClick={() => scrollToSection('booking')}
            className="rounded-full px-6"
          >
            Book Appointment
          </Button>
        </nav>
        
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            type="button"
            className="rounded-full p-2 bg-background/20 backdrop-blur-sm text-foreground hover:bg-background/40 transition-colors duration-200"
            onClick={toggleTheme}
          >
            {mounted && (theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            ))}
          </button>
          <button 
            className="text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`bg-background/95 backdrop-blur-sm w-full shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
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
          <Button
            variant="accent"
            onClick={() => scrollToSection('booking')}
            className="w-full rounded-full py-2"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
