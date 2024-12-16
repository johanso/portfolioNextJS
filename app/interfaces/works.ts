// interfaces/works.ts
import { ReactNode } from 'react';

export type ProjectType = 'personal' | 'company' | 'professional';

export interface WorkTab {
  id: ProjectType;
  label: string;
  icon: ReactNode;
  type: ProjectType;
}

export interface TabWithContent extends WorkTab {
  content: ReactNode;
}

export interface ProjectSectionProps {
  type: ProjectType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  type: ProjectType;
  github?: string;
  demo?: string;
  company?: string;
  period?: string;
}

export interface WorksContent {
  title: string;
  introduction: string;
  tabs: WorkTab[];
  defaultTab: ProjectType;
  projects: Project[];
}