import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-16 mx-5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        className="bg-gray-900/30 backdrop-blur-md p-8 rounded-xl shadow-xl text-gray-300 max-w-lg mx-auto border border-gray-800/20 relative overflow-hidden"
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-4">📩 Get in Touch</h2>
        <p className="text-gray-400 text-center mb-6">Have a question or want to collaborate? Drop me a message!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
          <textarea
            required
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-orange-500 hover:brightness-110 text-white font-bold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/80 p-6 rounded-lg shadow-xl text-center"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">🎉 Thank You!</h2>
              <p className="text-gray-300 mb-4">Your message has been sent successfully. I'll get back to you soon!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:brightness-110 text-white font-bold py-2 px-6 rounded-lg transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
