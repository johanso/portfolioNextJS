'use client';
import { Hero} from "./components";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div  
      className="grid bg-hero-pattern bg-no-repeat bg-center h-svh" 
      animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Hero />
    </motion.div>
  );
}
