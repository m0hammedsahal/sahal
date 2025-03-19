import React from "react";
import { motion } from "framer-motion";

const HeroLoader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#1a1a1a" }}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        style={{ fontSize: "3rem", fontWeight: "bold", color: "#4facfe" }}
      >
        Loading...
      </motion.h1>
    </div>
  );
};

export default HeroLoader;
