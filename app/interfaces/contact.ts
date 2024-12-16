
export interface ContactBoxLink {
  url: string;
  icon: React.ReactElement;
  text: string;
}

export interface ContactContent {
  title: string;
  introduction: string;
  sectionLinks: ContactBoxLink[];
}