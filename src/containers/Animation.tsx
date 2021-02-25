import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimationVariants = {
  Children: React.FC<any>;
};

export const Animation: React.FC & AnimationVariants = ({
  children,
  ...restProps
}) => (
  <AnimatePresence exitBeforeEnter {...restProps}>
    {children}
  </AnimatePresence>
);

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

Animation.Children = ({ children, animate = "visible", ...restProps }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={animate}
      exit="exit"
      {...restProps}
      style={{ margin: 0 }}
    >
      {children}
    </motion.div>
  );
};
