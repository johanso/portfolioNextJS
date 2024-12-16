import { PageMetadata } from '../interfaces/metadata';

export const metadata: Record<string, PageMetadata> = {
  
  home: {
    title: "Johan Ricardo - Frontend UI Developer",
    description: "Frontend UI Developer specializing in creating engaging web experiences with React, Next.js, and modern web technologies.",
    keywords: ["Frontend Developer", "UI Developer", "React", "Next.js"],
    openGraph: {
      title: "Johan Ricardo - Frontend UI Developer",
      description: "Creating engaging web experiences",
      image: "/og-image.jpg"
    }
  },
  works: {
    title: "Projects & Portfolio - Johan Ricardo",
    description: "Explore my portfolio of frontend development projects, including personal works, professional projects, and practice implementations.",
    keywords: ["Portfolio", "Web Development", "Frontend Projects", "UI Design"],
    openGraph: {
      title: "Project Portfolio - Johan Ricardo",
      description: "Frontend Development Portfolio"
    }
  },
  about: {
    title: "About Me - Johan Ricardo",
    description: "Learn about my journey as a Frontend UI Developer, my skills, and my approach to web development.",
    keywords: ["About", "Frontend Developer", "Skills", "Experience"],
    openGraph: {
      title: "About Johan Ricardo - Frontend UI Developer",
      description: "My journey in web development"
    }
  },
  resume: {
    title: "Resume - Johan Ricardo",
    description: "Professional experience, education, and certifications in frontend development and UI design.",
    keywords: ["Resume", "Experience", "Education", "Skills", "Frontend Development"],
    openGraph: {
      title: "Professional Resume - Johan Ricardo",
      description: "Frontend Development Experience"
    }
  },
  contact: {
    title: "Contact Me - Johan Ricardo",
    description: "Get in touch with me for any inquiries or collaborations in the world of frontend development and UI design.",
    keywords: ["Contact", "Frontend Developer", "UI Designer", "Collaboration"],
    openGraph: {
      title: "Contact Johan Ricardo - Frontend UI Developer",
      description: "Get in touch with Johan Ricardo"
    }
  }
};