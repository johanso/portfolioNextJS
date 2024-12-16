import React from "react";
import { ContactContent } from "../interfaces/contact";
import { IconLinkedin, IconGithub, IconYoutube, IconEnvelope } from "../icons";

export const contactData: ContactContent = {
  title: "Get In Touch",
  introduction: "Hi there 👋, thanks for stopping by! I'd love to hear from you—whether you have a question, a project in mind, or just want to say hello. Feel free to reach out through any of the following channels:",
  sectionLinks: [
    {
      url: "https://github.com/edwin-tantawi",
      icon: React.createElement(IconEnvelope, { size: 22 }),
      text: "Email",
    },
    {
      url: "https://github.com/edwin-tantawi",
      icon: React.createElement(IconLinkedin, { size: 22 }),
      text: "Linkedin",
    },
    {
      url: "https://github.com/edwin-tantawi",
      icon: React.createElement(IconYoutube, { size: 22 }),
      text: "Youtube",
    },
    {
      url: "https://github.com/edwin-tantawi",
      icon: React.createElement(IconGithub, { size: 22 }),
      text: "Github",
    },
  ],
}