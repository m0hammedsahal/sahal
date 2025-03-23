import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, Code, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Food Delivery App",
    description: "A multi-restaurant food ordering platform with real-time order tracking.",
    tech: ["Django", "React.js", "PostgreSQL"],
    features: [
      "Multiple restaurant support",
      "Real-time order tracking",
      "Discount & coupon system",
      "Secure payment integration",
    ],
    live: "https://github.com/m0hammedsahal/restorant",
    code: "https://github.com/m0hammedsahal/restorant",
    color: "#DAA520"
  },
  {
    "title": "Blogging Platform",
    "description": "A modern blogging site with rich text editing and engagement features.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Rich text editor",
      "Comment & Like system",
      "SEO-optimized content",
      "User authentication"
    ],
    "live": "https://github.com/m0hammedsahal/blogger",
    "code": "https://github.com/m0hammedsahal/blogger",
    "color": "#8B0000"
  },
  {
    "title": "Job Portal",
    "description": "A job listing platform where users can find and post job opportunities.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Job posting & application system",
      "Resume upload & profile management",
      "Search & filter job listings",
      "Employer dashboard"
    ],
    "live": "https://github.com/m0hammedsahal/job-portal",
    "code": "https://github.com/m0hammedsahal/job-portal",
    "color": "#FF4500"
  },
  {
    "title": "Property Marketplace",
    "description": "A real estate platform for buying, selling, and renting properties.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Property listing & search",
      "Renting & buying options",
      "User reviews & ratings",
      "Secure booking system"
    ],
    "live": "https://github.com/m0hammedsahal/renex-backent",
    "code": "https://github.com/m0hammedsahal/renex-backent",
    "color": "#118AB2"
  },
  {
    "title": "Mobile Sales E-commerce",
    "description": "An online store for buying and selling smartphones with secure payment options.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Product listing & filtering",
      "Cart & checkout system",
      "User authentication",
      "Order history & tracking"
    ],
    "live": "",
    "code": "",
    "color": "#8C5E2D"
  },
  {
    "title": "LuxuryBite",
    "description": "An e-commerce platform for gourmet food products with a premium user experience.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Gourmet product listings",
      "Subscription-based purchases",
      "Secure payment gateway",
      "User reviews & ratings"
    ],
    "live": "https://github.com/m0hammedsahal/LuxuryBite",
    "code": "https://github.com/m0hammedsahal/LuxuryBite",
    "color": "#F5F5DC"
  },
  {
    "title": "Interior Design Website",
    "description": "A showcase platform for an interior design company with project galleries and client testimonials.",
    "tech": ["Django", "Tailwind CSS"],
    "features": [
      "Project portfolio showcase",
      "Contact & inquiry forms",
      "Client testimonials",
      "Responsive design"
    ],
    "live": "https://m0hammedsahal.github.io/zain-interiour/",
    "code": "https://m0hammedsahal.github.io/zain-front-end/",
    "color": "#355E3B"
  },
  {
    "title": "To-Do List App",
    "description": "A simple task management app with an intuitive UI for managing daily tasks.",
    "tech": ["React.js"],
    "features": [
      "Add, edit & delete tasks",
      "Task completion tracking",
      "Local storage support",
      "Minimalist UI"
    ],
    "live": "https://github.com/m0hammedsahal/To-Do-with-React",
    "code": "https://github.com/m0hammedsahal/To-Do-with-React",
    "color": "#8B0000"
  },
  {
    "title": "Amazon Clone",
    "description": "A full-fledged e-commerce platform inspired by Amazon with user authentication and cart functionality.",
    "tech": ["Django", "React.js", "PostgreSQL"],
    "features": [
      "Product listings & categories",
      "Shopping cart & checkout",
      "Secure user authentication",
      "Order history & tracking"
    ],
    "live": "https://github.com/m0hammedsahal/Amazone-clone-",
    "code": "",
    "color": "#FB8500"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Animate background particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 20 + 10
      });
    }
    return particles;
  };

  const [particles] = useState(generateParticles());

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  // Update particle color based on active slide
  useEffect(() => {
    const activeColor = projects[activeIndex]?.color || "#FF4500";
    document.documentElement.style.setProperty('--active-project-color', activeColor);
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center w-screen mt-24 pt-10 pb-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #111827 0%)" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-20"
            initial={{ 
              left: `${particle.x}%`, 
              top: `${particle.y}%`, 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              background: "var(--active-project-color, #FF4500)"
            }}
            animate={{ 
              left: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${(particle.x - 10) % 100}%`, `${particle.x}%`],
              top: [`${particle.y}%`, `${(particle.y - 15) % 100}%`, `${(particle.y + 10) % 100}%`, `${particle.y}%`],
              scale: [1, 1.5, 0.8, 1],
              opacity: [0.2, 0.5, 0.3, 0.2]
            }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
  
      {/* Glowing accent line */}
      <motion.div 
        className="absolute w-full h-1 top-0 left-0"
        style={{ background: "var(--active-project-color, #FF4500)" }}
        initial={{ opacity: 0.3, scaleX: 0 }}
        animate={{ opacity: 0.7, scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
  
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-12"
        >
          <motion.h2 
  className="text-4xl font-bold mb-3 inline-block relative"
  style={{ color: "var(--active-project-color, #FF4500)" }}
>
  Featured Projects
</motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my most significant web development projects showcasing my technical skills.
          </p>
        </motion.div>
  
        {/* Swiper Component */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]} // Removed Navigation
          className="w-full py-10"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-72 md:w-96">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                onClick={() => handleProjectClick(project)}
                className="rounded-xl overflow-hidden transform transition-all cursor-pointer group"
                style={{ 
                  background: `linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 10px ${project.color}40`
                }}
              >
                {/* Top colorful border */}
                <div className="h-2" style={{ background: project.color }} />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[--active-project-color] transition-colors duration-300">{project.title}</h3>
                    <motion.div
                      animate={{ rotate: isHovering ? 360 : 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <Star className="w-6 h-6" style={{ color: project.color }} />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-left" style={{ color: project.color }}>Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-left">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 text-xs flex items-start">
                          <span className="inline-block w-2 h-2 mt-1 mr-1 rounded-full" style={{ background: project.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-start">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{ 
                          background: `${project.color}20`, 
                          color: project.color 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-5 flex space-x-6 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a
                      href={project.code}
                      className="flex items-center text-sm group/link"
                      onClick={(e) => project.code ? e.stopPropagation() : e.preventDefault()}
                      style={{ color: project.code ? project.color : 'gray' }}
                    >
                      <Code className="w-4 h-4 mr-1 transition-transform group-hover/link:rotate-12" />
                      <span className="relative overflow-hidden">
                        Code
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-px"
                          style={{ background: project.color }}
                          initial={{ scaleX: 0, originX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-sm group/link"
                      onClick={(e) => project.live ? e.stopPropagation() : e.preventDefault()}
                      style={{ color: project.live ? project.color : 'gray' }}
                    >
                      <Eye className="w-4 h-4 mr-1 transition-transform group-hover/link:scale-110" />
                      <span className="relative overflow-hidden">
                        Live Demo
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-px"
                          style={{ background: project.color }}
                          initial={{ scaleX: 0, originX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Expanded Project View */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-10"
              style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.85)" }}
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  background: "linear-gradient(145deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)"
                }}
              >
                {/* Top colorful border */}
                <div className="h-2" style={{ background: selectedProject.color }} />
                
                {/* Project content */}
                <div className="p-8 md:p-10">
                  {/* Close button */}
                  <motion.button
                    onClick={handleClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ background: `${selectedProject.color}20` }}
                  >
                    <span className="text-white text-lg">✕</span>
                  </motion.button>
  
                  {/* Header with title and floating elements */}
                  <div className="relative mb-6">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold mb-1" style={{ color: selectedProject.color }}>{selectedProject.title}</h3>
                      <p className="text-gray-300 text-lg">{selectedProject.description}</p>
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-16 h-16 opacity-10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full border-4 rounded-full" style={{ borderColor: selectedProject.color }}></div>
                    </motion.div>
                  </div>
  
                  {/* Content in two columns for larger screens */}
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                    <motion.div 
                      className="w-full md:w-7/12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-xl font-semibold mb-4" style={{ color: selectedProject.color }}>Key Features</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <motion.div 
                                className="w-3 h-3 rounded-sm mr-3"
                                style={{ background: selectedProject.color }}
                                animate={{ rotate: [0, 180, 0] }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 5 }}
                              />
                            </div>
                            <p className="text-gray-200">{feature}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
  
                    <motion.div 
                      className="w-full md:w-5/12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-xl font-semibold mb-4" style={{ color: selectedProject.color }}>Technologies</h4>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {selectedProject.tech.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="px-4 py-2 rounded-lg text-sm"
                            style={{ 
                              background: `${selectedProject.color}20`,
                              color: selectedProject.color,
                              boxShadow: `0 0 10px ${selectedProject.color}30`
                            }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
  
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={selectedProject.code}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center px-6 py-3 rounded-lg"
                          style={{ 
                            background: selectedProject.code ? selectedProject.color : 'rgba(100,100,100,0.2)',
                            color: selectedProject.code ? '#111827' : 'gray' 
                          }}
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </motion.a>
                        <motion.a
                          href={selectedProject.live}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center px-6 py-3 rounded-lg"
                          style={{ 
                            border: `2px solid ${selectedProject.live ? selectedProject.color : 'rgba(100,100,100,0.2)'}`,
                            color: selectedProject.live ? selectedProject.color : 'gray' 
                          }}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;