import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      description: "A fully functional e-commerce website with secure authentication, product management, cart system, and payment integration.",
      tech: ["Django", "React.js", "PostgreSQL", "Stripe API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Blogging Platform",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
      description: "A modern blogging site with rich text editing and engagement features.",
      tech: ["Django", "React.js", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Chat App",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=1000",
      description: "WebSocket-based messaging app with real-time features.",
      tech: ["Django Channels", "React.js", "WebSockets"],
      github: "#",
      demo: "#"
    }
  ];

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
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my featured projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-indigo-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center space-x-2 text-white bg-indigo-600/20 px-4 py-2 rounded-lg hover:bg-indigo-600/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex items-center space-x-2 text-white bg-purple-600/20 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;