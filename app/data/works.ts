import React from 'react';
import { WorksContent } from '../interfaces/works';
import { IconHome } from "../icons";

export const worksData: WorksContent = {
  title: "My Projects",
  introduction: "Welcome to my project showcase! Here you'll find a collection of my work as a Frontend UI Developer. Each project demonstrates my commitment to creating engaging, user-friendly experiences through clean design and efficient code.",
  defaultTab: "personal",
  tabs: [
    {
      id: 'personal',
      label: 'Personal Projects',
      icon: React.createElement(IconHome, { size: 18 }),
      type: 'personal'
    },
    {
      id: 'company',
      label: 'Clones & Practice',
      icon: React.createElement(IconHome, { size: 18 }),
      type: 'company'
    },
    {
      id: 'professional',
      label: 'Professional Work',
      icon: React.createElement(IconHome, { size: 18 }),
      type: 'professional'
    }
  ],
  projects: [
    {
      id: "1",
      title: "Twitter Cloneff",
      description: "Una réplica funcional de Twitter usando Next.js y Firebase",
      technologies: ["React", "Firebase", "Tailwind"],
      image: "/images/projects_netflix-clone.webp",
      type: "personal",
      github: "https://github.com/tuuser/twitter-clone",
      demo: "https://twitter-clone.demo"
    },
    {
      id: "2",
      title: "Dashboard Analytics",
      description: "Dashboard para visualización de métricas empresariales",
      technologies: ["React", "TypeScript", "D3.js"],
      image: "/images/projects_netflix-clone.webp",
      type: "company",
      company: "TechCorp",
      period: "2023 - 2024"
    },
  ]
};