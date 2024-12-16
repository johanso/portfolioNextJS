import { Metadata } from 'next';
import { metadata as seoMetadata } from '../../data/metadata';
import { BoxInfoText, SkillCard, Title } from "../../components";
import { aboutData } from "../../data/about";

export const generateMetadata = (): Metadata => {
  return {
    title: seoMetadata.about.title,
    description: seoMetadata.about.description,
    keywords: seoMetadata.about.keywords,
    openGraph: {
      title: seoMetadata.about.openGraph?.title,
      description: seoMetadata.about.openGraph?.description,
      images: seoMetadata.about.openGraph?.image ? [{ url: seoMetadata.about.openGraph.image }] : [],
    },
  };
};

export default function AboutPage() {
  return (
    <section className="container m-auto pt-24 pb-4">
      <Title text={aboutData.title} />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-6">
        <strong className="font-bold mb-1 block tracking-wide">
          {aboutData.introduction.greeting}
        </strong>
        {aboutData.introduction.description}
      </p>

      <p className="font-[family-name:var(--font-inter)] font-normal mb-6">
        {aboutData.introduction.callToAction}
      </p>

      <h3 className="text-md font-semibold tracking-wide text-black mb-6">
        {aboutData.servicesTitle}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {aboutData.services.map((service, index) => (
          <BoxInfoText
            key={index}
            title={service.title}
            text={service.text}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">
        {aboutData.skills.title}<span className="text-primary"> {aboutData.skills.highlightedWord}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-4">
          {aboutData.skills.items.map((skill, index) => (
            <SkillCard
              key={index}
              imageSrc={skill.imageSrc}
              skillName={skill.skillName}
              imageAlt={skill.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
