import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Track mouse position for custom cursor effects
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Custom cursor variants
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    input: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(255, 165, 0, 0.3)",
      mixBlendMode: "difference"
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference"
    }
  };

  // Floating particles for background
  const particles = Array(15).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 10
  }));

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.8 }}
      />

      {/* Animated floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full border border-orange-300/20"
          initial={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.1
          }}
          animate={{
            y: [0, -30, 30, -50, 0],
            x: [0, 30, -20, 40, 0],
            opacity: [0.1, 0.3, 0.2, 0.4, 0.1],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main contact container with unique design - INCREASED WIDTH */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-4xl w-full z-10" // Increased from max-w-md to max-w-4xl
      >
        {/* Diagonal split design with animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                  "linear-gradient(225deg, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                  "linear-gradient(315deg, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                  "linear-gradient(45deg, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.1) 100%)",
                  "linear-gradient(135deg, rgba(255,165,0,0.1) 0%, rgba(255,215,0,0.1) 100%)"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "conic-gradient(from 0deg, transparent, rgba(255,165,0,0.4), transparent, transparent)" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0.5 rounded-2xl bg-gray-900" />
        </motion.div>

        {/* Content container */}
        <div className="relative z-10 p-10"> {/* Increased padding */}
          {/* Two-column layout for wider design */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left column - Heading and intro */}
            <motion.div 
              className="md:w-1/3 mb-10 md:mb-0 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "5rem" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute left-0 top-0 w-0.5 bg-orange-500"
              />
              
              <h2 className="text-4xl font-bold text-white pl-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="block"
                >
                  Let's
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-orange-500"
                >
                  Connect
                </motion.span>
              </h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-gray-400 mt-4 pl-4"
              >
                Share your thoughts or project ideas with us. We're excited to hear from you and discuss how we can work together.
              </motion.p>

              {/* Added decorative elements for wider design */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent mt-8 ml-4"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="mt-10 ml-4 flex items-center gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">✉</span>
                <span className="text-gray-400">sahald369@gmail.com</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="mt-4 ml-4 flex items-center gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">📱</span>
                <span className="text-gray-400">+91 9061663036</span>
              </motion.div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email in a row for wider layout */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Name field with animated border */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="relative md:w-1/2"
                    onMouseEnter={() => {
                      setActiveField("name");
                      setCursorVariant("input");
                    }}
                    onMouseLeave={() => {
                      setActiveField(null);
                      setCursorVariant("default");
                    }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: activeField === "name" 
                          ? "0 0 0 2px rgba(255,165,0,0.5)" 
                          : "0 0 0 1px rgba(255,165,0,0)"
                      }}
                      className="w-full h-14 rounded-md overflow-hidden relative"
                    >
                      <input
                        required
                        type="text"
                        placeholder=" "
                        className="peer w-full h-full pt-4 px-4 text-white bg-gray-800/30 outline-none border-b border-orange-500/30 transition-all"
                      />
                      <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:top-1 peer-focus:text-orange-400 peer-valid:text-xs peer-valid:top-1 peer-valid:text-orange-400">
                        Your Name
                      </label>
                    </motion.div>
                  </motion.div>

                  {/* Email field with animated label */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="relative md:w-1/2"
                    onMouseEnter={() => {
                      setActiveField("email");
                      setCursorVariant("input");
                    }}
                    onMouseLeave={() => {
                      setActiveField(null);
                      setCursorVariant("default");
                    }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: activeField === "email" 
                          ? "0 0 0 2px rgba(255,165,0,0.5)" 
                          : "0 0 0 1px rgba(255,165,0,0)"
                      }}
                      className="w-full h-14 rounded-md overflow-hidden relative"
                    >
                      <input
                        required
                        type="email"
                        placeholder=" "
                        className="peer w-full h-full pt-4 px-4 text-white bg-gray-800/30 outline-none border-b border-orange-500/30 transition-all"
                      />
                      <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:top-1 peer-focus:text-orange-400 peer-valid:text-xs peer-valid:top-1 peer-valid:text-orange-400">
                        Your Email
                      </label>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Subject field - new addition for wider layout */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveField("subject");
                    setCursorVariant("input");
                  }}
                  onMouseLeave={() => {
                    setActiveField(null);
                    setCursorVariant("default");
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: activeField === "subject" 
                        ? "0 0 0 2px rgba(255,165,0,0.5)" 
                        : "0 0 0 1px rgba(255,165,0,0)"
                    }}
                    className="w-full h-14 rounded-md overflow-hidden relative"
                  >
                    <input
                      type="text"
                      placeholder=" "
                      className="peer w-full h-full pt-4 px-4 text-white bg-gray-800/30 outline-none border-b border-orange-500/30 transition-all"
                    />
                    <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:top-1 peer-focus:text-orange-400 peer-valid:text-xs peer-valid:top-1 peer-valid:text-orange-400">
                      Subject (Optional)
                    </label>
                  </motion.div>
                </motion.div>

                {/* Message field with expanding border */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveField("message");
                    setCursorVariant("input");
                  }}
                  onMouseLeave={() => {
                    setActiveField(null);
                    setCursorVariant("default");
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: activeField === "message" 
                        ? "0 0 0 2px rgba(255,165,0,0.5)" 
                        : "0 0 0 1px rgba(255,165,0,0)"
                    }}
                    className="w-full rounded-md overflow-hidden relative"
                  >
                    <textarea
                      required
                      placeholder=" "
                      rows="5"
                      className="peer w-full pt-6 px-4 text-white bg-gray-800/30 outline-none border-b border-orange-500/30 transition-all"
                    ></textarea>
                    <label className="absolute left-4 top-4 text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:top-1 peer-focus:text-orange-400 peer-valid:text-xs peer-valid:top-1 peer-valid:text-orange-400">
                      Your Message
                    </label>
                  </motion.div>
                </motion.div>

                {/* Unique animated submit button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="mt-8"
                >
                  <motion.button
                    type="submit"
                    className="w-full h-14 relative text-white font-medium overflow-hidden group"
                    whileHover="hover"
                  >
                    {/* Button background layers */}
                    <motion.div 
                      className="absolute inset-0 bg-orange-600 skew-x-12 -translate-x-full z-0"
                      variants={{
                        hover: { translateX: 0, transition: { duration: 0.4 } }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-orange-500 skew-x-12 -translate-x-full z-10"
                      variants={{
                        hover: { translateX: 0, transition: { duration: 0.3, delay: 0.05 } }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-yellow-500 skew-x-12 -translate-x-full z-20"
                      variants={{
                        hover: { translateX: 0, transition: { duration: 0.2, delay: 0.1 } }
                      }}
                    />
                    
                    {/* Button content with masked effect */}
                    <div className="relative flex items-center justify-center w-full h-full bg-gray-800 z-30 overflow-hidden">
                      <motion.span 
                        className="relative z-10 mix-blend-difference font-bold tracking-wide"
                        variants={{
                          hover: { letterSpacing: "0.2em", transition: { duration: 0.3 } }
                        }}
                      >
                        SEND MESSAGE
                      </motion.span>
                      <motion.div 
                        className="absolute inset-0 bg-yellow-500 skew-x-12 -translate-x-full"
                        variants={{
                          hover: { translateX: 0, transition: { duration: 0.3 } }
                        }}
                      />
                    </div>
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Creative success modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsSubmitted(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <motion.div
              initial={{ scale: 0.8, y: 30, rotateX: 40 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 30, rotateX: 40 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative bg-gray-900 shadow-2xl p-8 max-w-md w-full mx-4 overflow-hidden rounded-lg border border-orange-500/20"
            >
              {/* Success icon with animated rings */}
              <div className="relative flex justify-center my-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-2xl"
                >
                  ✓
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 0.6, 0] }}
                  transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-20 h-20 rounded-full border border-orange-500"
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.7, 1.2], opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-20 h-20 rounded-full border border-orange-500"
                />
              </div>
              
              {/* Success message */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-white text-center"
              >
                Message Sent
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 mt-2 text-center"
              >
                Thanks for reaching out! I'll get back to you shortly.
              </motion.p>
              
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-medium rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Close
              </motion.button>
              
              {/* Diagonal line decorations */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-0 right-0 w-0.5 bg-gradient-to-b from-orange-500 to-transparent"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
