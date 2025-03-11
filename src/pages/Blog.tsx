import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable Web Applications with Django and React",
      excerpt: "Learn how to create robust and scalable web applications using Django and React. We'll cover best practices, performance optimization, and deployment strategies.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Advanced PostgreSQL Optimization Techniques",
      excerpt: "Deep dive into PostgreSQL performance tuning, including indexing strategies, query optimization, and database design patterns for high-traffic applications.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Modern UI Animation Techniques with Framer Motion",
      excerpt: "Explore creative ways to add smooth animations and transitions to your React applications using Framer Motion.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000"
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
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and technical insights about web development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/40 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600/90 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;