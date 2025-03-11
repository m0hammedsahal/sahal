import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Background3D from '../components/Background3D';

const Home = () => {
  const stats = [
    { icon: <Star className="w-6 h-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '200+', label: 'Happy Clients' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '500+', label: 'Projects Completed' },
  ];

  const featuredProjects = [
    {
      title: 'Modern Minimalist Living',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
    },
    {
      title: 'Luxury Office Space',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    },
    {
      title: 'Contemporary Kitchen',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Background3D />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-amber-400/30 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Space with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 animate-gradient">
                Elegant Design
              </span>
            </h1>

            <div className="h-12 mb-8">
              <TypeAnimation
                sequence={[
                  'Modern Interior Solutions',
                  2000,
                  'Luxury Living Spaces',
                  2000,
                  'Professional Design Services',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-amber-400"
              />
            </div>

            <p className="text-xl text-gray-300 mb-8">
              We create stunning interior designs that reflect your style and enhance your living experience.
              From concept to completion, we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-amber-400 text-black rounded-full font-medium hover:bg-amber-300 transition-colors flex items-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-amber-400/20 text-white rounded-full hover:border-amber-400/40 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-amber-400/10"
                >
                  <div className="text-amber-400 mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300">Discover our latest interior design transformations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
                    <p className="text-amber-400">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-400/10 text-amber-400 rounded-full hover:bg-amber-400/20 transition-colors inline-flex items-center"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;