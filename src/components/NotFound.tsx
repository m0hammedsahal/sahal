import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center pt-20 text-white"
    >
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="h-80 w-80">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Text
          color="hotpink"
          fontSize={2}
          position={[0, 0, 0]}
          font="/fonts/Roboto-Black.ttf"
        >
          404
        </Text>
      </Canvas>

      {/* Message */}
      <h2 className="text-3xl font-bold mt-6 text-[#DAA520]">Page Not Found</h2>
      <p className="text-gray-300 mt-2">Oops! The page you're looking for doesn't exist.</p>

      {/* Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-[#FF4500] rounded-lg shadow-lg text-white font-semibold hover:bg-[#FF4500] transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};


export default NotFound;
