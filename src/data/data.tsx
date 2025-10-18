import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Azra Javed',
  description:
    'Portfolio of Azra Javed – a passionate web developer and designer showcasing creative projects, technical expertise, and a love for building modern, responsive web experiences.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Azra Javed.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a MERN Stack Software Engineer who loves creating fast, reliable, and user-focused web applications with
        MongoDB, Express.js, React, and Node.js.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I value clean code, modern design, and smooth user experiences that make an impact.
      </p>
    </>
  ),
  actions: [
    {
      href: '/',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a passionate Mern Stack Developer who loves creating responsive, user-focused web applications. I turn complex ideas into clean, efficient, and visually engaging digital experiences. Currently expanding my skills in backend technologies like Node.js, Express.js, and MongoDB to become a full-stack developer.`,

  aboutItems: [
    {label: 'Location', text: 'Lahore, Pakistan', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Reading, and Writing', Icon: SparklesIcon},
    {label: 'Education', text: 'B.S. in Computer Science – Virtual University', Icon: AcademicCapIcon},
    {label: 'Focus', text: 'Learning and building projects with the MERN Stack', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Urdu',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 7,
      },
      {
        name: 'React.js',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Express.js',
        level: 7,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Git & GitHub',
        level: 8,
      },
      {
        name: 'VS Code',
        level: 9,
      },
      {
        name: 'Postman',
        level: 7,
      },
      {
        name: 'npm',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Trendora – Multi-Vendor E-Commerce Platform',
    description:
      'A scalable and interactive marketplace connecting customers, sellers, and admins in real-time with Stripe payments and cloud storage.',
    url: 'https://shop-trendora.vercel.app/',
    githubUrl: 'https://github.com/Azra-Javed/trendora-multivendor-ecommerce',
    image: porfolioImage1,
    techStack: ['React', 'Node.js', 'Express', 'Socket', 'MongoDB', 'Stripe', 'Cloudinary'],
  },
  {
    title: 'Sushi App',
    description:
      'Suchi is your ultimate food companion app that brings your favorite meals right to your door. Explore nearby restaurants, discover trending cuisines, and enjoy quick, reliable delivery at your fingertips.',
    url: 'https://sushi-psi-weld.vercel.app/',
    githubUrl: 'https://github.com/Azra-Javed/Sushi',
    image: porfolioImage2,
    techStack: ['html', 'css', 'Javascript'],
  },
  {
    title: 'Moshify',
    description:
      'Moshify is a sleek, responsive web hosting landing page designed to showcase hosting plans and features with a modern touch. Built with HTML, CSS, and JavaScript, it emphasizes performance, accessibility, and clean UI design. The project highlights best practices in responsive web development and front-end optimization.',
    url: 'https://moshiclone.netlify.app/',
    githubUrl: 'https://github.com/Azra-Javed/moshify',
    image: porfolioImage5,
    techStack: ['Html', 'css', 'Javascript'],
  },

  {
    title: 'Coursely | Learning management system',
    description:
      'A modern and responsive Learning Management System (LMS) built with Next.js, Sanity CMS, and Stripe. Coursely enables educators to create, manage, and sell online courses effortlessly while providing learners with an engaging and intuitive platform to study...',
    url: 'https://lms-build-delta.vercel.app/',
    githubUrl: 'https://github.com/Azra-Javed/next-lms',
    image: porfolioImage3,
    techStack: ['Next Js', 'Sanity', 'Stripe'],
  },

  {
    title: 'Shopr | eCommerce Store',
    description:
      'Shopr is a sleek e-commerce platform built with Next.js, Sanity, Stripe, and Clerk. It delivers a smooth, secure, and modern shopping experience with real-time product management and seamless checkout.',
    url: 'https://ecommerce-tau-vert.vercel.app/',
    githubUrl: 'https://github.com/Azra-Javed/next-ecommerce',
    image: porfolioImage4,
    techStack: ['Next js', 'Sanity', 'Stripe', 'Clerk'],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'Virtual University of Pakistan',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        Currently pursuing my degree in Computer Science, where I’m building a strong foundation in software
        development, algorithms, and web technologies. I’ve developed hands-on experience with HTML, CSS, JavaScript,
        and React while exploring backend tools like Node.js and MongoDB.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024 - Present',
    location: 'Personal Projects / Self-Learning',
    title: 'MERN Stack Developer',
    content: (
      <p>
        Developing full-stack web applications using the MERN stack — MongoDB, Express.js, React.js, TypeScript and
        Node.js. Building responsive, user-centric interfaces with Tailwind CSS and implementing RESTful APIs for
        dynamic data handling. Continuously enhancing problem-solving skills and gaining hands-on experience through
        real-world projects.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Peer & Mentor Impressions',
      text: 'Azra is continuously learning and experimenting with the MERN stack, showing a strong drive to improve and create meaningful projects. She takes every opportunity to learn from tutorials, documentation, and open-source examples.',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=mentor1',
    },
    {
      name: 'Learning Journey',
      text: 'Currently focusing on building full-stack projects using Next.js, Node.js, and MongoDB while exploring tools like Sanity, Stripe, and Clerk for modern app development.',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=learner1',
    },
    {
      name: 'Future Goals',
      text: 'Aiming to become a full-stack developer who not only writes code but also understands design, scalability, and user experience deeply.',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=goal1',
    },
  ],
};

/**
 * Contact sectio
 */

export const contact: ContactSection = {
  headerText: 'Get in Touch',
  description:
    'I’m always open to discussing new projects, collaborations, or learning opportunities. Feel free to reach out through any of the platforms below!',
  items: [
    {
      type: ContactType.Email,
      text: 'iamazrajaved@gmail.com',
      href: 'mailto:iamazrajaved@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lahore, Pakistan',
      href: 'https://www.google.com/maps/place/Lahore,+Pakistan',
    },
    {
      type: ContactType.Github,
      text: 'Azra-Javed',
      href: 'https://github.com/Azra-Javed',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Azra Javed',
      href: 'https://www.linkedin.com/in/azra-javed/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Azra-Javed'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: '/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/azra-javed/'},
  {label: 'Instagram', Icon: InstagramIcon, href: '/'},
  {label: 'Twitter', Icon: TwitterIcon, href: '/'},
];
