import Image from "next/image";
import Link from "next/link";
import { IconGithub, IconLink } from "../icons";
import { ProjectSectionProps } from "../interfaces/works";
import { worksData } from "../data/works";

export const ProjectSection = ({ type }: ProjectSectionProps) => {

  const filteredProjects = worksData.projects.filter(project => project.type === type);

  return (
    <>
      {filteredProjects.map(project => (
        <article 
          key={project.id} 
          className="bg-white border border-light-gray rounded-lg text-center overflow-hidden"
        >
          <div className="my-2 mx-4">
            {project.demo ? (
              <Link 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-primary">
                  {project.title}
                </h3>
              </Link>
            ) : (
              <h3 className="text-black text-base lg:text-lg font-semibold">
                {project.title}
              </h3>
            )}
            <p className="text-gray text-xs mb-1">
              [ {project.technologies.join(", ")} ]
            </p>
            <p className="text-gray text-xs">
              {project.description}
            </p>
            {
              project.company && project.period && (
              <p className="text-black text-sm font-medium mt-2">
                {project.company} - {project.period}	
              </p>
              )
            }
          </div>

          <div className={`shadow-xl relative h-[180px] ${(project.demo || project.github) ? 'group' : ''}`}>
            <Image 
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover object-top transition duration-300 transform`}
              priority={false}
            />
            {(project.demo || project.github) && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.demo && (
                  <Link 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white w-12 h-12 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100"
                  >
                    <IconLink size={16} />
                  </Link>
                )}
                {project.github && (
                  <Link 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white w-12 h-12 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100"
                  >
                    <IconGithub size={20} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </>
  );
};
