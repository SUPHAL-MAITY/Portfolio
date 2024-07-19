"use client"

import React, { createContext } from 'react';
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.6,
          },
        },
      }}
    >
      <h1 className="title">Wubba Lubba Dub Dub!</h1>
    </motion.div>
  );
};

export default page;
