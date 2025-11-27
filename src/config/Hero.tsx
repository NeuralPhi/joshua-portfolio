/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Excel from '@/components/technologies/Excel';
import Figma from '@/components/technologies/Figma';
import PowerBI from '@/components/technologies/PowerBI';
// Component mapping for skills
export const skillComponents = {
  Excel: Excel,
  Figma: Figma,
  PowerBI: PowerBI,
};

export const heroConfig = {
  // Personal Information
  name: 'Joshua',
  title: 'A Data Analyst and Aspiring Backend Engineer.',
  avatar: '/assets/joshua.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'Excel',
      href: 'https://www.microsoft.com/en-us/microsoft-365/excel',
      component: 'Excel',
    },
    {
      name: 'Figma',
      href: 'https://www.figma.com/',
      component: 'Figma',
    },
    {
      name: 'PowerBI',
      href: 'https://powerbi.microsoft.com',
      component: 'PowerBI',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/JDataCraft',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joshua-opadoja-5682592b5/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/NeuralPhi',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:opadojajoshua@gmail.com',
    icon: <Mail />,
  },
];
