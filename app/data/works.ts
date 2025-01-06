import React from 'react';
import { WorksContent } from '../interfaces/works';
import { IconOneFill, IconTwoFill } from "../icons";

export const worksData: WorksContent = {
  title: "My Projects",
  introduction: "Welcome to my project showcase! Here you'll find a collection of my work as a Frontend UI Developer. Each project demonstrates my commitment to creating engaging, user-friendly experiences through clean design and efficient code.",
  defaultTab: "personal",
  tabs: [
    {
      id: 'personal',
      label: 'Personal Projects',
      icon: React.createElement(IconOneFill, { size: 18 }),
      type: 'personal'
    },
    {
      id: 'professional',
      label: 'Corporate Projects (Employee)',
      icon: React.createElement(IconTwoFill, { size: 18 }),
      type: 'professional'
    }
  ],
  projects: [
    {
      id: "1",
      title: "Conceptos en Aluminio",
      description: "I built this website from scratch using Next.js and Tailwind CSS, focusing on responsive design and custom components.",
      technologies: ["Nextjs", "Tailwind"],
      image: "https://res.cloudinary.com/dcplixyte/image/upload/v1735585351/porfolio/yexl4hrmgcsxfehik2qg.jpg",
      type: "personal",
      demo: "https://conceptosenaluminio.com/",
      github: "https://github.com/johanso/aluminiotheme",
      period: "2023"
    },
    {
      id: "2",
      title: "JS Codez",
      description: "In this project, I created the theme from scratch using WordPress for publishing articles and tutorials about JavaScript.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dcplixyte/image/upload/v1735583187/porfolio/hqzoesslran93utyskmr.jpg",
      type: "personal",
      demo: "https://jscodez.com/",
      github: "https://github.com/johanso/jscodez",
      period: "2024"
    },
    {
      id: "3",
      title: "X (Tweeter) Clone",
      description: "Twitter/X clone built with Next.js 15, React 19, TypeScript, and Tailwind CSS. UI Features a responsive design.",
      technologies: ["Nextjs", "TypeScript", "Tailwind CSS", "ImageKit"],
      image: "https://res.cloudinary.com/dcplixyte/image/upload/v1736189129/porfolio/prj0echepureagdq4ghz.jpg",
      type: "personal",
      demo: "https://ui-clone-x.vercel.app/",
      github: "https://github.com/johanso/ui-clone-x",
      period: "2024"
    },




    {
      id: "99222",
      title: "57 Ocean Miami",
      description: "Redesigned the website, developing reusable components and completing the front-end layout.",
      technologies: ["Sass", "React", "Node.js"],
      image: "https://res.cloudinary.com/dcplixyte/image/upload/v1735601877/porfolio/spf0hhbzzsfhpgyjbckh.jpg",
      type: "professional",
      company: "Million And Up",
      period: "2023"
    },
    {
      id: "202104",
      title: "Million And Up",
      description: "Redesigned the website, developing reusable components and completing the front-end layout.",
      technologies: ["Sass", "React", "Node.js"],
      image: "https://res.cloudinary.com/dcplixyte/image/upload/v1697817540/porfolio/million-web-1_hlmgqz.jpg",
      type: "professional",
      company: "Million And Up",
      period: "2022"
    },
    {
      id: "202103",
      title: "Top Projects",
      description: "Developed the layout and components for the Top Projects South Florida portal.",
      technologies: ["Sass", "React", "Node.js"],
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697817444/porfolio/top-projects-1_kkcxs0.jpg',      type: "professional",
      company: "Million And Up",
      period: "2021"
    },
    {
      id: "202102",
      title: "Artistic Vita",
      description: "Designed and developed visual components for Artistic Projects Site.",
      technologies: ["Sass", "React", "Node.js"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697817132/porfolio/artistic-1_adomlr.jpg',
      company: "Million And Up",
      period: "2021"
    },
    {
      id: "202101",
      title: "Realtors",
      description: "Developed and designed the website for Realtors Luis and Cata.",
      technologies: ["Sass", "React", "Node.js"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697817227/porfolio/realtors-luis-cata-1_tiblqt.jpg',
      company: "Million And Up",
      period: "2021"
    },
    {
      id: "201902",
      title: "Inversiones Bancolombia",
      description: "Contributed to the design, layout, and development of an interactive dashboard.",
      technologies: ["Adobe XD", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697815061/porfolio/dashboard-inversiones-1_ot9gnp.jpg',
      company: "Cinte (IBM)",
      period: "2019"
    },
    {
      id: "201901",
      title: "Inversiones Bancolombia",
      description: "Participated in the design, layout, and development of a corporate dashboard.",
      technologies: ["Adobe XD", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697815154/porfolio/dashboard-inversiones-2_b6oypb.jpg',
      company: "Cinte (IBM)",
      period: "2019"
    },
    {
      id: "201804",
      title: "Pallomaro",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814495/porfolio/pallomaro-redisenio_dwuorz.jpg',
      company: "E-solutions",
      period: "2018"
    },
    {
      id: "201803",
      title: "Hercules",
      description: "Redesigned the website using WordPress as the CMS.",
      technologies: ["Photoshop", "HTML", "Sass", "WordPress"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814410/porfolio/home-hercules_ezuqrg.jpg',
      company: "E-solutions",
      period: "2018"
    },
    {
      id: "201801",
      title: "Siesa Landing",
      description: "Redesigned and developed the landing page with a focus on responsive design and interactive elements.",
      technologies: ["Photoshop", "HTML", "Sass", "JavaScript"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814714/porfolio/Mailing-Facturacion-electronica_ewyi4b.jpg',
      company: "E-solutions",
      period: "2018"
    },
    {
      id: "201704",
      title: "PlusDent",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814118/porfolio/home-plussdent_vca0aa.jpg',
      company: "E-solutions",
      period: "2017"
    },
    {
      id: "201703",
      title: "Redox",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814118/porfolio/home-redox_vcr81a.jpg',
      company: "E-solutions",
      period: "2017"
    },
    {
      id: "201702",
      title: "Mi Corral",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814117/porfolio/home-micorral_u64qva.jpg',
      company: "E-solutions",
      period: "2017"
    },
    {
      id: "201701",
      title: "Oben",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697814117/porfolio/home-oben_kxvrew.jpg',
      company: "E-solutions",
      period: "2017"
    },
    {
      id: "201606",
      title: "Cali Tienda Virtual",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697813060/porfolio/home-dptcali_nrdsbx.jpg',
      company: "E-solutions",
      period: "2016"
    },
    {
      id: "201605",
      title: "Elek",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697812942/porfolio/home-elek_cgk0sl.jpg',
      company: "E-solutions",
      period: "2016"
    },
    {
      id: "201604",
      title: "FerreMaster",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697812808/porfolio/home-ferremaster_fimxx0.jpg',
      company: "E-solutions",
      period: "2016"
    },
    {
      id: "201603",
      title: "Grupo Giraldo",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697812753/porfolio/home-grupogiraldo_znatt9.jpg',
      company: "E-solutions",
      period: "2016"
    },
    {
      id: "201602",
      title: "Alimentos Toning",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697812577/porfolio/Home-final-toning_vicliz.jpg',
      company: "E-solutions",
      period: "2016"
    },
    {
      id: "201601",
      title: "Artemisa",
      description: "Designed the prototype and developed the layout for the B2B application.",
      technologies: ["Photoshop", "HTML", "Sass", "Angular"],
      type: "professional",
      image: 'https://res.cloudinary.com/dcplixyte/image/upload/v1697812502/porfolio/home-artemisa_pimgav.jpg',
      company: "E-solutions",
      period: "2016"
    }
    
  ]
};