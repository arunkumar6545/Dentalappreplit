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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Your Perfect Smile <span className="text-primary">Begins Here</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are committed to providing quality dental care in a comfortable and relaxing environment. Your smile is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="xl" 
                onClick={() => scrollToSection('booking')}
                className="rounded-md"
              >
                Book an Appointment
              </Button>
              <Button 
                variant="outlinePrimary" 
                size="xl" 
                onClick={() => scrollToSection('services')}
                className="rounded-md"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Dentist office with modern equipment" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary text-3xl mb-4">
              <UserRound className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Dentists</h3>
            <p className="text-gray-600">Our team consists of experienced dentists who are dedicated to providing the highest quality of care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary text-3xl mb-4">
              <Torus className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Care</h3>
            <p className="text-gray-600">From routine cleanings to advanced procedures, we offer a full range of dental services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary text-3xl mb-4">
              <CalendarClock className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Appointments</h3>
            <p className="text-gray-600">Booking your dental appointment has never been easier with our online scheduling system.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
