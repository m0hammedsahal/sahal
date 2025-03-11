import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const glitchAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const numberAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={glitchAnimation}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.h1
            variants={numberAnimation}
            initial="initial"
            animate="animate"
            className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-none mb-8"
          >
            404
          </motion.h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-40 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;