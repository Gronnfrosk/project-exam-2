import React from "react";
import { Outlet } from "react-router-dom";
import { CollapsibleNavbar } from "./navbar";
import Footer from "./footer";
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../config/animation-config';
import { ScrollToTopButton } from "../components/buttons/scroll-top"

export default function GlobalLayout() {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
      <CollapsibleNavbar />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
      </motion.div>
  );
}
