import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the message to a form handler
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact <span className="text-primary">Us</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions or need more information? Reach out to us using any of the methods below.</p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact-subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="px-6 py-3 rounded-md"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-600">123 Dental Avenue, Suite 101<br/>Healthville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@brightsmile.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 h-80 rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* This would be a real Google Map in production */}
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-primary h-10 w-10 mx-auto mb-3" />
              <p className="text-gray-600">Google Map would be embedded here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
