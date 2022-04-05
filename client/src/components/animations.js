import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, isValidMotionProp, useAnimation } from "framer-motion";

export const FadeUpBox = ({ children, delay = 0 }) => {
  const played = useRef(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && !played.current) {
      controls.start("visible");
      played.current = true;
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, delay }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};
