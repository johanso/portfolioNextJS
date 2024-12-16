import { ReactNode } from "react";

export type TabId = 'personal' | 'company' | 'professional';

export interface Tab {
  id: TabId;
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: TabId;
  className?: string;
}