"use client";
import { motion } from "framer-motion";
import { BoxInfoText, Title } from "../components";

export default function ResumePage() {
  return (
    <motion.div
      className="container m-auto pt-24 pb-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Title text="Resume Details" />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        Explore  my expertise, academic achievements, and the certifications that highlight my professional journey.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
          Professional <span className="text-primary"> Experience</span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <BoxInfoText
            title="Million and Up"
            subtitle="[Senior UI Designer / Dev]"
            years="2021 - Present"
            text="In my last role, I spearheaded website development and CRM maintenance. I leveraged React and TypeScript to craft essential UI components."
          />
          <BoxInfoText
            title="Exsis Digital Angels"
            subtitle="[Frontend UI]"
            years="2020 - 2021"
            text="In this role, I specialized in creating interactive UI components with React and TypeScript, ensuring high-quality design and functionality."
          />
          <BoxInfoText
            title="Soluciones Bolívar"
            subtitle="[Frontend UI Dev]"
            years="2019 - 2020"
            text="As a Frontend UI designer in my third position, I excelled in crafting pixel-perfect web interfaces, collaborating closely with developers."
          />
          <BoxInfoText
            title="Grupo CINTE"
            subtitle="[Frontend UI Dev]"
            years="2018 - 2019"
            text="In my time at the second company, I enhanced the UI, focusing on user-friendly navigation, clean layouts, and mobile responsiveness."
          />
          <BoxInfoText
            title="E-solutions"
            subtitle="[UI/UX Frontend Dev]"
            years="2013 - 2018"
            text="In my initial role, I designed visually appealing, responsive web interfaces, collaborating across teams for seamless user experiences."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
          Educational <span className="text-primary"> Background</span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <BoxInfoText
            title="Servicio Nacional Aprendizaje"
            subtitle="Colombia"
            years="2007 - 2009"
            text="Multimedia Design and Development Technologist"
          />
          <BoxInfoText
            title="system Center"
            subtitle="Colombia"
            years="2006 - 2007"
            text="Graphic Design"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <BoxInfoText
            title="Meta"
            subtitle="Online"
            years="2023"
            text="Meta Front-End Developer"
          />
          <BoxInfoText
            title="Google"
            years="2021"
            subtitle="Online"
            text="Foundations of User Experience (UX) Design"
          />
          <BoxInfoText
            title="Google Actívate"
            years="2019"
            subtitle="Online"
            text="Desarrollo Web I, II"
          />
          <BoxInfoText
            title="IBM"
            years="2019"
            subtitle="Online"
            text="Enterprise Design Thinking Practitioner"
          />
        </div>
      </div>
    </motion.div>
  )
}
