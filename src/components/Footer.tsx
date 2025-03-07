import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="bg-gray-900/50 backdrop-blur-md shadow-lg text-gray-300 mt-12 py-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold text-[#FF4500]">Let's Connect</h2>
        <p className="mt-2 text-sm text-gray-400">
          Feel free to reach out for collaborations or just a chat!
        </p>

        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/m0hammedsahal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4500] hover:text-[#DAA520] transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mhd-sahal-5a9b0128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF4500] hover:text-[#DAA520] transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sahald369@gmail.com"
            className="text-[#FF4500] hover:text-[#DAA520] transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <nav className="mt-4 flex justify-center space-x-6 text-sm">
          <Link to="/" className="hover:text-[#FF4500] transition">Home</Link>
          <Link to="/about" className="hover:text-[#FF4500] transition">About</Link>
          <Link to="/portfolio" className="hover:text-[#FF4500] transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-[#FF4500] transition">Contact</Link>
        </nav>

        <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Sahal. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
