'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { BoxInfoText, Title } from '../components';
import { IconBoundingBox, IconCodeSlash, IconDevicesPhone, IconWordpress } from '../icons';

export default function AboutPage() {
  return (
    <motion.div 
      className='container m-auto'
      animate={{ opacity: 1 }} 
      initial={{ opacity: 0 }}>

      <Title text="About Me" />

      <p className='font-[family-name:var(--font-inter)] font-normal mb-4'>
        <strong className='font-bold mb-1 block tracking-wide'>Hello! I’m Johan Ricardo.</strong>
        A web designer and developer focused on creating outstanding user experiences. With a background in graphic design and coding skills, I'm here to turn your web visions into reality. Let's chat!
      </p>
      <h3 className="text-md font-semibold tracking-wide text-black mb-4">Is there anything I can do for you?</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        <BoxInfoText 
          title="UI Design" 
          icon={<IconBoundingBox size={28} />}
          text="Design are at the heart of my work. I'm passionate about creating interfaces that are both aesthetically pleasing and highly functional."   />
        <BoxInfoText 
          title="Frontend Development" 
          icon={<IconCodeSlash size={28} />}
          text="I specialize in crafting engaging user interfaces. From design concepts to coding with HTML, CSS, JavaScript and frameworks."  />
        <BoxInfoText 
          title="Responsive Design" 
          icon={<IconDevicesPhone size={28} />}
          text="Develop a good Frontend design for mobile, tablet, desktop and all screen devices"  />
        <BoxInfoText 
          title="WordPress Development" 
          icon={<IconWordpress size={28} />}
          text="WordPress is my playground when it comes to web development. I excel in customizing, optimizing, and extending WordPress websites."  />
      </div>

      <div className='grid grid-cols-1 gap-4 mt-10'>
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">Skill's &amp;<span className="text-primary"> Technology</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-4">
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-html5.svg"
              width={30}
              height={30}
              alt="HTML 5"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">HTML 5</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-css3.svg"
              width={30}
              height={30}
              alt="CSS 3"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">CSS 3</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-javascript.svg"
              width={30}
              height={30}
              alt="Javascript"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Javascript</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-typescript.svg"
              width={30}
              height={30}
              alt="Typescript"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Javascript</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-sass.svg"
              width={30}
              height={30}
              alt="Sass"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Sass</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-tailwindcss.svg"
              width={30}
              height={30}
              alt="TailwindCss"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">TailwindCss</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image 
              src="/images/skill-webpack.svg"
              width={30}
              height={30}
              alt="Webpack 5"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Webpack 5</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-reactjs.svg"
              width={30}
              height={30}
              alt="React JS"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">React JS</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-nextjs.svg"
              width={30}
              height={30}
              alt="Next JS"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Next JS</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-figma.svg"
              width={30}
              height={30}
              alt="Figma"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Figma</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-wordpress.svg"
              width={30}
              height={30}
              alt="Wordpress"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Wordpress</h3>
          </div>
          <div className="flex items-center px-3 py-3 border rounded-lg bg-white border-light-gray">
            <Image
              src="/images/skill-git.svg"
              width={30}
              height={30}
              alt="Git"
              loading='lazy'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <h3 className="ml-2 text-xs font-medium text-black md:text-sm md:ml-3">Git</h3>
          </div>
        </div>
      </div>

    </motion.div>
  );
};
