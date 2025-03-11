import { motion } from 'framer-motion';
import { Paintbrush, Sofa, Home, Lightbulb, Ruler, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Interior Design",
      description: "Complete interior design solutions tailored to your style and needs. We create spaces that inspire and delight.",
      features: [
        "Space Planning",
        "Color Consultation",
        "Furniture Selection",
        "Material Selection"
      ]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Furniture Design",
      description: "Custom furniture design and selection to perfectly match your space and lifestyle.",
      features: [
        "Custom Furniture",
        "Upholstery",
        "Furniture Layout",
        "Ergonomic Design"
      ]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Design",
      description: "Transform your home into a beautiful and functional living space that reflects your personality.",
      features: [
        "Room Makeovers",
        "Kitchen Design",
        "Bathroom Design",
        "Living Spaces"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance the ambiance and functionality of your space.",
      features: [
        "Ambient Lighting",
        "Task Lighting",
        "Accent Lighting",
        "Natural Light"
      ]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Space Planning",
      description: "Optimize your space for maximum efficiency and flow with our expert planning services.",
      features: [
        "Layout Design",
        "Traffic Flow",
        "Storage Solutions",
        "Space Optimization"
      ]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "3D Visualization",
      description: "See your space come to life before any work begins with our detailed 3D renderings.",
      features: [
        "3D Modeling",
        "Virtual Tours",
        "Material Preview",
        "Lighting Simulation"
      ]
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
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of interior design services to transform your space into something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-black/50 to-black/30 rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="mb-6 text-amber-400 group-hover:scale-110 transform transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;