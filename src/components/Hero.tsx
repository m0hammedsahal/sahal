import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hey there! I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FF4500]">
              Sahal
            </span>
          </motion.h1>
          <motion.div
            className="text-2xl md:text-4xl font-semibold text-[#FF4500] mb-4 h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                'Python Full Stack Developer',
                2000,
                'Django Expert',
                2000,
                'React Developer',
                2000,
                'WordPress Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          {/* Introduction */}
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm a passionate and results-driven Full Stack Developer specializing in Python, Django, React.js, and PostgreSQL. 
            I build scalable, high-performance web applications that provide seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-x-4 mb-16"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#DAA520] to-[#FF4500] text-white rounded-full hover:from-[#FF6347] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 group mt-5"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/assets/resume.pdf"
              className="inline-flex items-center px-8 py-3 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
