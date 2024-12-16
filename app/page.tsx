import { Metadata } from 'next';
import { metadata as seoMetadata } from './data/metadata';
import { Hero} from "./components";

export const generateMetadata = (): Metadata => {
  return {
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    keywords: seoMetadata.home.keywords,
    openGraph: {
      title: seoMetadata.home.openGraph?.title,
      description: seoMetadata.home.openGraph?.description,
      images: seoMetadata.home.openGraph?.image ? [{ url: seoMetadata.home.openGraph.image }] : [],
    },
  };
};

export default function Home() {
  return (
    <section className="grid bg-hero-pattern bg-no-repeat bg-center h-svh">
      <Hero />
    </section>
  );
}
