import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Modern Minimalist Living Room",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3",
      description: "A clean, minimalist design focusing on essential elements and natural light."
    },
    {
      title: "Luxury Master Bedroom",
      category: "residential",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      description: "Elegant master bedroom design with custom lighting and furniture."
    },
    {
      title: "Contemporary Office Space",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Modern office design promoting productivity and collaboration."
    },
    {
      title: "Boutique Restaurant Interior",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77",
      description: "Atmospheric restaurant design with custom lighting and seating."
    },
    {
      title: "Urban Loft Kitchen",
      category: "kitchen",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1",
      description: "Industrial-style kitchen with modern appliances and clean lines."
    },
    {
      title: "Spa-Like Bathroom",
      category: "bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
      description: "Luxurious bathroom design with high-end fixtures and natural materials."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our collection of thoughtfully designed spaces that showcase our commitment to excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category.id
                    ? 'bg-amber-400 text-black'
                    : 'bg-black/30 text-white hover:bg-black/50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-amber-400 rounded-full text-black"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;