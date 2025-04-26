import { motion } from "framer-motion";
import { doctors } from "@/data/doctors";
import { Linkedin, Twitter, Mail } from "lucide-react";

const DoctorCard = ({ doctor, index }: { doctor: typeof doctors[0]; index: number }) => {
  return (
    <motion.div 
      className="doctor-card bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
        <p className="text-primary font-medium mb-3">{doctor.title}</p>
        <p className="text-gray-600 mb-4">{doctor.description}</p>
        <div className="flex space-x-3 text-gray-500">
          {doctor.socialLinks.linkedin && (
            <a href={doctor.socialLinks.linkedin} className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {doctor.socialLinks.twitter && (
            <a href={doctor.socialLinks.twitter} className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {doctor.socialLinks.email && (
            <a href={doctor.socialLinks.email} className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our <span className="text-primary">Dental Experts</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our team of experienced dentists is committed to providing you with the highest quality of dental care.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
