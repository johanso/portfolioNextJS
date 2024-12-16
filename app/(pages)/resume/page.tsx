import { Metadata } from 'next';
import { metadata as seoMetadata } from '../../data/metadata';
import { BoxInfoText, Title } from "../../components";
import { resumeData } from "../../data/resume";

export const generateMetadata = (): Metadata => {
  return {
    title: seoMetadata.resume.title,
    description: seoMetadata.resume.description,
    keywords: seoMetadata.resume.keywords,
    openGraph: {
      title: seoMetadata.resume.openGraph?.title,
      description: seoMetadata.resume.openGraph?.description,
      images: seoMetadata.resume.openGraph?.image ? [{ url: seoMetadata.resume.openGraph.image }] : [],
    },
  };
};

export default function ResumePage() {
  return (
    <section className="container m-auto pt-24 pb-4">
      <Title text={resumeData.title} />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        {resumeData.introduction}
      </p>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">
          {resumeData.sections.experience.title}{" "}
          <span className="text-primary">
            {resumeData.sections.experience.highlightedWord}
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {resumeData.sections.experience.items.map((item, index) => (
            <BoxInfoText key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">
          {resumeData.sections.education.title}{" "}
          <span className="text-primary">
            {resumeData.sections.education.highlightedWord}
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {resumeData.sections.education.items.map((item, index) => (
            <BoxInfoText key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-12">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center">
          {resumeData.sections.certifications.title}
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {resumeData.sections.certifications.items.map((item, index) => (
            <BoxInfoText key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
