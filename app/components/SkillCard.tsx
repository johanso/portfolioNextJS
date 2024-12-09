import Image from 'next/image';

interface SkillCardProps {
  imageSrc: string;
  skillName: string;
  imageAlt?: string;
}

export const SkillCard = ({ 
  imageSrc, 
  skillName, 
  imageAlt 
}: SkillCardProps) => {
  return (
    <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
      <Image
        src={imageSrc}
        width={30}
        height={30}
        alt={imageAlt || skillName}
        loading="lazy"
        className="w-6 h-6 md:w-8 md:h-8"
      />
      <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">
        {skillName}
      </h3>
    </div>
  );
};