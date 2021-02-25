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
    y: 20,
    opacity: 0,
    transition: { duration: 0.5},
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5},
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

Animation.Children = ({ children, ...restProps }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...restProps}
    >
      {children}
    </motion.div>
  );
};
