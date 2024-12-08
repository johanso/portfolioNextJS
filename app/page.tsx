'use client';
import { Hero} from "./components";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div  className="grid" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Hero />
      <main className="flex flex-col gap-8 sm:items-start">
      </main>
    </motion.div>
  );
}
