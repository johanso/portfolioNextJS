// interfaces/resume.ts
export interface ResumeSection {
  title: string;
  highlightedWord?: string;
  items: ResumeItem[];
}

export interface ResumeItem {
  title: string;
  subtitle?: string;
  years?: string;
  text: string;
  url?: string;
  custonClass?: string;
}

export interface ResumeContent {
  title: string;
  introduction: string;
  sections: {
    experience: ResumeSection;
    education: ResumeSection;
    certifications: ResumeSection;
  };
}