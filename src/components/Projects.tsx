
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState } from "react";


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
    "code": "https://github.com/m0hammedsahal/blogger"
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
    "code": "https://github.com/m0hammedsahal/job-portal"
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
    "code": "https://github.com/m0hammedsahal/renex-backent"
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
    "code": ""
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
    "code": "https://github.com/m0hammedsahal/LuxuryBite"
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
    "code": "https://github.com/m0hammedsahal/zain-interiour"
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
    "code": "https://github.com/m0hammedsahal/To-Do-with-React"
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
    "code": ""
  }
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center w-screen mt-24 bg-gray-600/10 pt-10 pb-5"
    >
      <h2 className="text-3xl font-bold text-white mb-5">Featured Projects</h2>

      {/* Swiper Component */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full py-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="w-64 md:w-80">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 10px 30px rgba(255, 200, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
              className="backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="mb-3">
                <h4 className="text-[#FF4500] font-semibold mb-1 text-sm">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300 text-xs">
                  {project.features.map((feature, i) => (
                    <li key={i} className="mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-yellow-900/50 text-[#DAA520] rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex space-x-4 justify-center">
                <a
                  href={project.code}
                  className="text-[#FF4500] hover:text-[#DAA520] flex items-center text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 mr-1" /> Code
                </a>
                <a
                  href={project.live}
                  className="text-[#FF4500] hover:text-[#DAA520] flex items-center text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Expanded Project View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-50 p-6"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: -50, opacity: 0, rotateX: 45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -50, opacity: 0, rotateX: 45 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="bg-gray-800 rounded-lg p-8 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-300 hover:text-[#FF4500]"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="mb-6">
                <h4 className="text-[#FF4500] font-semibold mb-2 text-lg">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow-900/50 text-[#DAA520] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.code}
                  className="text-[#FF4500] hover:text-[#DAA520] flex items-center text-sm"
                >
                  <Github className="w-5 h-5 mr-1" /> View Code
                </a>
                <a
                  href={selectedProject.live}
                  className="text-[#FF4500] hover:text-[#DAA520] flex items-center text-sm"
                >
                  <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;