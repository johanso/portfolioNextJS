// data/about.ts
import { AboutContent } from "../interfaces/about";
import {
  IconBoundingBox,
  IconCodeSlash,
  IconDevicesPhone,
  IconWordpress,
} from "../icons";
import React from "react";

export const aboutData: AboutContent = {
  title: "About Me",
  introduction: {
    greeting: "Hi there! I'm Johan Ricardo.",
    description:
      "A Colombian web designer and frontend developer with a passion for crafting seamless and visually stunning user experiences. With a strong background in graphic design and hands-on coding expertise.",
    callToAction:
      "Whether you need a fresh website, a UI overhaul, or just a quick chat about your next big project—I'm here for it. Let's make something awesome together!",
  },
  servicesTitle: "Is there anything I can do for you?",
  services: [
    {
      title: "UI Design",
      icon: React.createElement(IconBoundingBox, { size: 28 }),
      text: "Design is at the core of what I do. I'm driven by a passion for crafting interfaces that are not only visually stunning but also intuitive and user-friendly.",
    },
    {
      title: "Frontend Development",
      icon: React.createElement(IconCodeSlash, { size: 28 }),
      text: "I bring designs to life by building engaging user interfaces with clean, efficient code. From HTML, CSS, and JavaScript to modern frameworks, I make ideas functional and interactive.",
    },
    {
      title: "Responsive Design",
      icon: React.createElement(IconDevicesPhone, { size: 28 }),
      text: "I ensure your website looks and works perfectly on any device—whether it's a mobile phone, tablet, or desktop. Great design should shine everywhere.",
    },
    {
      title: "WordPress Development",
      icon: React.createElement(IconWordpress, { size: 28 }),
      text: "WordPress is my go-to toolkit for web development. I specialize in creating tailored, optimized, and fully customized WordPress sites that stand out.",
    },
  ],
  skills: {
    title: "Skill's &",
    highlightedWord: "Technology",
    items: [
      {
        imageSrc: "/images/skill-html5.svg",
        skillName: "HTML 5",
        imageAlt: "HTML 5 Logo",
      },
      {
        imageSrc: "/images/skill-css3.svg",
        skillName: "CSS 3",
        imageAlt: "CSS 3 Logo",
      },
      {
        imageSrc: "/images/skill-sass.svg",
        skillName: "Sass",
        imageAlt: "Sass Logo",
      },
      {
        imageSrc: "/images/skill-typescript.svg",
        skillName: "TypeScript",
        imageAlt: "TypeScript Logo",
      },
      {
        imageSrc: "/images/skill-tailwindcss.svg",
        skillName: "Tailwind",
        imageAlt: "Tailwind Logo",
      },
      {
        imageSrc: "/images/skill-javascript.svg",
        skillName: "JavaScript",
        imageAlt: "JavaScript Logo",
      },
      {
        imageSrc: "/images/skill-reactjs.svg",
        skillName: "React",
        imageAlt: "React Logo",
      },
      {
        imageSrc: "/images/skill-nextjs.svg",
        skillName: "Next.js",
        imageAlt: "Next.js Logo",
      },
      {
        imageSrc: "/images/skill-webpack.svg",
        skillName: "Webpack 5",
        imageAlt: "Webpack 5 Logo",
      },
      {
        imageSrc: "/images/skill-wordpress.svg",
        skillName: "WordPress",
        imageAlt: "WordPress Logo",
      },
      {
        imageSrc: "/images/skill-figma.svg",
        skillName: "Figma",
        imageAlt: "Figma Logo",
      },
      {
        imageSrc: "/images/skill-git.svg",
        skillName: "Git",
        imageAlt: "Git Logo",
      },
    ],
  },
};
