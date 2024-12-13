"use client";
import { motion } from "framer-motion";
import { Tabs, Title } from "../../components";
import { IconHome } from "@/app/icons";

const tabs = [
  {
    id: 'personal',
    label: 'Personal',
    icon: <IconHome size={18} />,
    content: <div>Contenido de proyectos personales...</div>
  },
  {
    id: 'company',
    label: 'Empresa',
    icon: <IconHome size={18} />,
    content: <div>Contenido de trabajos en empresa...</div>
  }
];

export default function WorksPage() {
  return (
    <motion.div
      className="container m-auto pt-24 pb-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Title text="My Projects" />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        Welcome to my project showcase! Here you'll find a collection of my work as a Frontend UI Developer. Each project demonstrates my commitment to creating engaging, user-friendly experiences through clean design and efficient code.
      </p>

      <div className="mb-12">
        <Tabs tabs={tabs} defaultTab="personal" />
      </div>

      </motion.div>
  )
}
