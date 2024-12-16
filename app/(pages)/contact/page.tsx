import Link from "next/link";
import { Metadata } from 'next';
import { metadata as seoMetadata } from '../../data/metadata';
import { Title } from "../../components";
import { contactData } from "../../data/contact";


export const generateMetadata = (): Metadata => {
  return {
    title: seoMetadata.contact.title,
    description: seoMetadata.contact.description,
    keywords: seoMetadata.contact.keywords,
    openGraph: {
      title: seoMetadata.contact.openGraph?.title,
      description: seoMetadata.contact.openGraph?.description,
      images: seoMetadata.contact.openGraph?.image ? [{ url: seoMetadata.contact.openGraph.image }] : [],
    },
  };
};

export default function ContactPage() {
  return (
    <section className="container m-auto pt-24 pb-4">
      <Title text={contactData.title} />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        {contactData.introduction}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        {
          contactData.sectionLinks.map((sectionLink, index) => (
            <Link 
              href={sectionLink.url} 
              target="_blank" 
              className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
              key={index}
              rel="noopener noreferrer">
              <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
                {sectionLink.icon}
              </div>
              <h3 className="text-black font-semibold mt-3">{sectionLink.text}</h3>
            </Link>
          ))
        }
      </div>
    </section>
  );
}
