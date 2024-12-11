"use client";
import { motion } from "framer-motion";
import { BoxInfoText, SkillCard, Title } from "../components";
import {
  IconBoundingBox,
  IconCodeSlash,
  IconDevicesPhone,
  IconWordpress,
} from "../icons";

export default function AboutPage() {
  return (
    <motion.div
      className="container m-auto pt-24 pb-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Title text="About Me" />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-4">
        <strong className="font-bold mb-1 block tracking-wide">
          Hello! I&apos;m Johan Ricardo.
        </strong>
        A web designer and developer focused on creating outstanding user
        experiences. With a background in graphic design and coding skills,
        I&apos;m here to turn your web visions into reality. Let&apos;s chat!
      </p>
      
      <h3 className="text-md font-semibold tracking-wide text-black mb-4">
        Is there anything I can do for you?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <BoxInfoText
          title="UI Design"
          icon={<IconBoundingBox size={28} />}
          text="Design are at the heart of my work. I&apos;m passionate about creating interfaces that are both aesthetically pleasing and highly functional."
        />
        <BoxInfoText
          title="Frontend Development"
          icon={<IconCodeSlash size={28} />}
          text="I specialize in crafting engaging user interfaces. From design concepts to coding with HTML, CSS, JavaScript and frameworks."
        />
        <BoxInfoText
          title="Responsive Design"
          icon={<IconDevicesPhone size={28} />}
          text="Develop a good Frontend design for mobile, tablet, desktop and all screen devices"
        />
        <BoxInfoText
          title="WordPress Development"
          icon={<IconWordpress size={28} />}
          text="WordPress is my playground when it comes to web development. I excel in customizing, optimizing, and extending WordPress websites."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
          Skill&apos;s &amp;<span className="text-primary"> Technology</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-4">
          <SkillCard 
            imageSrc="/images/skill-html5.svg"
            skillName="HTML 5"
            imageAlt="HTML 5 Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-css3.svg"
            skillName="CSS 3"
            imageAlt="CSS 3 Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-javascript.svg"
            skillName="Javascript"
            imageAlt="Javascript Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-typescript.svg"
            skillName="Typescript"
            imageAlt="Typescript Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-sass.svg"
            skillName="Sass"
            imageAlt="Sass Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-tailwindcss.svg"
            skillName="Tailwind"
            imageAlt="Tailwind Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-webpack.svg"
            skillName="Webpack 5"
            imageAlt="Webpack 5 Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-reactjs.svg"
            skillName="React JS"
            imageAlt="React JS Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-nextjs.svg"
            skillName="Next JS"
            imageAlt="Next JS Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-figma.svg"
            skillName="Figma"
            imageAlt="Figma Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-wordpress.svg"
            skillName="Wordpress"
            imageAlt="Wordpress Logo"
          />
          <SkillCard 
            imageSrc="/images/skill-git.svg"
            skillName="Git"
            imageAlt="Git Logo"
          />

        </div>
      </div>
    </motion.div>
  );
}
