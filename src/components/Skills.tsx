import { motion } from "framer-motion";
import { FaReact, FaPython, FaDatabase, FaAws } from "react-icons/fa"; // Import icons

const skills = [
  {
    title: "🖥 Frontend",
    tech: "React.js, JavaScript, HTML, CSS, Tailwind CSS",
    icon: <FaReact className="text-blue-400 text-5xl mb-3" />,
  },
  {
    title: "⚙️ Backend",
    tech: "Python, Django, REST APIs",
    icon: <FaPython className="text-yellow-400 text-5xl mb-3" />,
  },
  {
    title: "🗄 Databases",
    tech: "PostgreSQL, MySQL, SQLite",
    icon: <FaDatabase className="text-green-400 text-5xl mb-3" />,
  },
  {
    title: "☁ DevOps",
    tech: "AWS, Git",
    icon: <FaAws className="text-orange-400 text-5xl mb-3" />,
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-40 mb-40 px-6"
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
        🔧 Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              rotateX: 10,
              rotateY: 10,
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gray-900/50 p-6 rounded-xl text-center shadow-lg backdrop-blur-md transition-transform duration-300 hover:shadow-indigo-500/50 hover:backdrop-blur-lg"
          >
            {/* Floating 3D Icon */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              {skill.icon}
            </motion.div>

            <h3 className="text-indigo-400 font-semibold text-lg mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-300">{skill.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
