import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the "Thank You" section
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative py-20 mt-20 mx-10"
    >
      {/* Floating Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
        className="bg-gray-900/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-gray-300 max-w-3xl mx-auto px-10 border border-gray-800/20 relative overflow-hidden"
      >
        {/* Gradient Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-500/10 rounded-2xl -z-10"
        />

        {/* Title and Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl font-bold text-white mb-4 text-center"
        >
          📩 Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 text-lg text-center mb-6"
        >
          Have a question or want to collaborate? Drop me a message!
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none border border-gray-700/50 transition-all"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none border border-gray-700/50 transition-all"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <textarea
              required
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800/50 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none border border-gray-700/50 transition-all"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white font-bold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-500/10 blur-3xl -z-10"
      />

      {/* Thank You Section */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">🎉 Thank You!</h2>
              <p className="text-gray-300 text-lg mb-6">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-white font-bold py-2 px-6 rounded-lg transition-all"
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