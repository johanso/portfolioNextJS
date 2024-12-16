import { Metadata } from 'next';
import { metadata as seoMetadata } from '../../data/metadata';
import { ProjectSection, Tabs, Title } from "../../components";
import { worksData } from "../../data/works";
import { TabWithContent } from "@/app/interfaces/works";

export const generateMetadata = (): Metadata => {
  return {
    title: seoMetadata.works.title,
    description: seoMetadata.works.description,
    keywords: seoMetadata.works.keywords,
    openGraph: {
      title: seoMetadata.works.openGraph?.title,
      description: seoMetadata.works.openGraph?.description,
      images: seoMetadata.works.openGraph?.image ? [{ url: seoMetadata.works.openGraph.image }] : [],
    },
  };
};

export default function WorksPage() {
  const tabsWithContent: TabWithContent[] = worksData.tabs.map(tab => ({
    ...tab,
    content: <ProjectSection type={tab.type} />
  }));

  return (
    <section className="container m-auto pt-24 pb-4">
      <Title text={worksData.title} />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        {worksData.introduction}
      </p>

      <div className="mb-12">
        <Tabs tabs={tabsWithContent} defaultTab={worksData.defaultTab}  />
      </div>

    </section>
  )
}
