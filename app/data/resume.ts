// data/resume.ts
import { ResumeContent } from '../interfaces/resume';

export const resumeData: ResumeContent = {
  title: "Resume Details",
  introduction: "Explore my expertise, academic achievements, and the certifications that highlight my professional journey.",
  sections: {
    experience: {
      title: "Professional",
      highlightedWord: "Experience",
      items: [
        {
          title: "Million and Up",
          subtitle: "[Senior UI Designer / Dev]",
          years: "2021 - Present",
          text: "Led website development and CRM maintenance using React and TypeScript. Designed and implemented essential UI components that enhanced functionality and user experience.",
          custonClass: "timeline"
        },
        {
          title: "Exsis Digital Angels",
          subtitle: "[Frontend UI]",
          years: "2020 - 2021",
          text: "Developed interactive UI components with React and TypeScript, focusing on high-quality design and seamless functionality.",
          custonClass: "timeline"
        },
        {
          title: "Soluciones Bolívar",
          subtitle: "[Frontend UI Dev]",
          years: "2019 - 2020",
          text: "Created pixel-perfect web interfaces while collaborating closely with developers to ensure consistency and responsiveness.",
          custonClass: "timeline"
        },
        {
          title: "Grupo CINTE",
          subtitle: "[Frontend UI Dev]",
          years: "2018 - 2019",
          text: "Improved UI/UX with user-friendly navigation, clean layouts, and fully responsive designs.",
          custonClass: "timeline"
        },
        {
          title: "E-solutions",
          subtitle: "[UI/UX Frontend Dev]",
          years: "2013 - 2018",
          text: "Designed and implemented visually appealing, responsive web interfaces, contributing to cross-functional teams to deliver exceptional user experiences.",
          custonClass: "timeline"
        }
      ]
    },
    
    education: {
      title: "Educational",
      highlightedWord: "Background",
      items: [
        {
          title: "Servicio Nacional Aprendizaje",
          subtitle: "Colombia",
          years: "2007 - 2009",
          text: "Multimedia Design and Development Technologist",
          custonClass: "timeline"
        },
        {
          title: "System Center",
          subtitle: "Colombia",
          years: "2006 - 2007",
          text: "Graphic Design",
          custonClass: "timeline"
        }
      ]
    },
    
    certifications: {
      title: "Certifications",
      items: [
        {
          title: "Meta Front-End Developer",
          subtitle: "Online",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/X3LWV5G4C5MT",
          years: "(2023)",
          text: "Meta",
          custonClass: "timeline"
        },
        {
          title: "Foundations of User Experience (UX) Design",
          years: "(2021)",
          url: "https://www.coursera.org/account/accomplishments/verify/JAY6JM3ECCNN",
          subtitle: "Online",
          text: "Google",
          custonClass: "timeline"
        },
        {
          title: "Desarrollo Web I, II",
          years: "(2019)",
          url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
          subtitle: "Online",
          text: "Google Actívate",
          custonClass: "timeline"
        },
        {
          title: "Enterprise Design Thinking Practitioner",
          years: "(2019)",
          url: "https://www.youracclaim.com/badges/b07839ab-c9af-46a2-873e-d061acef007e/linked_in_profile",
          subtitle: "Online",
          text: "IBM",
          custonClass: "timeline"
        }
      ]
    }
  }
};