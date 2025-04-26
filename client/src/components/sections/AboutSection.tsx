import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern dental clinic" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About Our <span className="text-primary">Dental Practice</span></h2>
            <p className="text-gray-600 mb-4">
              For over 15 years, Bright Smile Dental has been a leading provider of dental services in our community. 
              We combine modern technology with compassionate care to ensure the best experience for our patients.
            </p>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art facility is designed to make your visit as comfortable as possible, 
              while our skilled team works to give you the healthy, beautiful smile you deserve.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Check className="text-secondary mr-2 h-5 w-5" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center">
                <Check className="text-secondary mr-2 h-5 w-5" />
                <span>Gentle Care</span>
              </div>
              <div className="flex items-center">
                <Check className="text-secondary mr-2 h-5 w-5" />
                <span>Family Friendly</span>
              </div>
              <div className="flex items-center">
                <Check className="text-secondary mr-2 h-5 w-5" />
                <span>Affordable Plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
