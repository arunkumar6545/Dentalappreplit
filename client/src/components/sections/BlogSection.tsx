import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  return (
    <motion.div 
      className="blog-card bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
          <span className="text-xs text-white bg-primary px-2 py-1 rounded-full">{post.category}</span>
          <span className="text-gray-500 text-xs sm:text-sm">{post.date}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{post.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">{post.description}</p>
        <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm sm:text-base mt-auto">
          Read More
          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Dental Care <span className="text-primary">Blog</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest tips and information about dental health and care.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="px-6 py-2 sm:py-3 rounded-md w-full sm:w-auto">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
