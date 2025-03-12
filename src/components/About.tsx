import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'React.js, TypeScript, JavaScript, Tailwind CSSxc ',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Python, Django, REST APIs',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Management',
      description: 'PostgreSQL, Database Design',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Full Stack Projects',
      description: 'E-commerce, Blogging Platforms',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/20 to-gray-800/20">
      <Spline scene="https://prod.spline.design/vR1as7vGY099MOEc/scene.splinecode" className="absolute " />

      <div className="container mx-auto px-6">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            I'm a passionate Full Stack Developer with expertise in Python and modern web technologies.
            I specialize in building scalable web applications using Django and React.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 flex justify-center space-x-6"
          >
            <a
              href="https://github.com/m0hammedsahal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4500] hover:text-[#DAA520] transition-transform transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhd-sahal-5a9b0128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4500] hover:text-[#DAA520] transition-transform transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="sahald369@gmail.com"
              className="text-[#FF4500] hover:text-[#DAA520] transition-transform transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotateY: 180 }}
              transition={{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 150 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-800/30 rounded-2xl hover:shadow-2xl transition-all cursor-pointer relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <motion.div
                className="flex flex-col items-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-14 h-14 bg-yellow-900 rounded-full flex items-center justify-center text-yellow-400 mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {skill.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {skill.description}
                </p>
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gray-800/30 rounded-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  More
                </h3>
                <p className="text-gray-300 text-center">
                  Click to explore my projects in this area.
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;