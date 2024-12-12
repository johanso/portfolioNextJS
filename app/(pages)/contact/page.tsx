"use client";
import { motion } from "framer-motion";
import { Title } from "../../components";

export default function ContactPage() {
  return (
    <motion.div
      className="container m-auto pt-24 pb-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Title text="Get In Touch" />

      <p className="font-[family-name:var(--font-inter)] font-normal mb-12">
        Hello👋, thanks for taking the time to reach out. How can I help you
        today? <br />
        You can contact me through any of the following methods.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        <a
          href="https://www.linkedin.com/in/edwin-tantawi-909138193"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
            <i className="fab fa-linkedin-in text-xl"></i>
          </div>
          <h3 className="text-black font-semibold mt-3">Linkedin</h3>
          <p className="text-gray text-xs md:text-sm">Edwin Tantawi</p>
        </a>
        <a
          href="https://github.com/edwintantawi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
            <i className="fab fa-github text-xl"></i>
          </div>
          <h3 className="text-black font-semibold mt-3">Github</h3>
          <p className="text-gray text-xs md:text-sm">edwintantawi</p>
        </a>
        <a
          href="mailto:edwintantawi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
            <i className="far fa-envelope text-xl"></i>
          </div>
          <h3 className="text-black font-semibold mt-3">Gmail</h3>
          <p className="text-gray text-xs md:text-sm">edwintantawi@gmail.com</p>
        </a>
        <a
          href="https://www.google.com/maps/place/Medan,+Medan+City,+North+Sumatra/@3.6422838,98.5994534,12z/data=!3m1!4b1!4m5!3m4!1s0x303131cc1c3eb2fd:0x23d431c8a6908262!8m2!3d3.5951956!4d98.6722227"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
        >
          <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
            <i className="far fa-compass text-xl"></i>
          </div>
          <h3 className="text-black font-semibold mt-3">Location</h3>
          <p className="text-gray text-xs md:text-sm">Medan, Indonesia</p>
        </a>
      </div>
    </motion.div>
  );
}
