"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '../interfaces/works';
import { IconCloseLg, IconExpand } from '../icons';

interface LightboxProps {
  project: Project;
}

export const ImageLightbox = ({ project }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 bg-white w-12 h-12 flex items-center justify-center rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-gray-100"
      >
        <IconExpand size={16} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500">
                Technologies: {project.technologies.join(', ')}
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
            >
              <IconCloseLg size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};