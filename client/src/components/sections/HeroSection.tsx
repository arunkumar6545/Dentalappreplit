import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserRound, Torus, CalendarClock } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center md:text-left relative z-10">
              Your Perfect Smile <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Begins Here</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 text-center md:text-left relative z-10">
              We are committed to providing quality dental care in a comfortable and relaxing environment. Your smile is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start relative z-10">
              <Button 
                size="xl" 
                onClick={() => scrollToSection('booking')}
                className="rounded-full w-full sm:w-auto shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Book an Appointment
              </Button>
              <Button 
                variant="outlinePrimary" 
                size="xl" 
                onClick={() => scrollToSection('services')}
                className="rounded-full w-full sm:w-auto border-2 hover:bg-primary/10 transition-all duration-300"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Dentist office with modern equipment" 
                className="rounded-2xl shadow-xl w-full h-auto max-w-md mx-auto md:max-w-none border border-white/20"
              />
              <div className="absolute inset-0 rounded-2xl shadow-inner border border-white/20"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-primary/10 group">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300">
              <UserRound className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">Expert Dentists</h3>
            <p className="text-gray-600">Our team consists of experienced dentists who are dedicated to providing the highest quality of care.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border border-secondary/10 group">
            <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300">
              <Torus className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">Comprehensive Care</h3>
            <p className="text-gray-600">From routine cleanings to advanced procedures, we offer a full range of dental services.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border border-accent/10 group">
            <div className="bg-gradient-to-br from-accent to-secondary rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300">
              <CalendarClock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Easy Appointments</h3>
            <p className="text-gray-600">Booking your dental appointment has never been easier with our online scheduling system.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
