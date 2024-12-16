export interface ServiceBox {
  title: string;
  icon: React.ReactElement;
  text: string;
}

export interface Skill {
  imageSrc: string;
  skillName: string;
  imageAlt: string;
}

export interface AboutContent {
  title: string;
  introduction: {
    greeting: string;
    description: string;
    callToAction: string;
  };
  servicesTitle: string;
  services: ServiceBox[];
  skills: {
    title: string;
    highlightedWord: string;
    items: Skill[];
  };
}