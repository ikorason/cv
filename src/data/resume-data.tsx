import BSTKLogo from "../images/logos/bstk.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Irfan Abulizi",
  location: "Montréal, Canada",
  locationLink: "https://www.google.com/maps/place/Montreal",
  about: "I build products with a keen eye for detail as a software developer.",
  summary:
    "I'm a software developer who enjoys coding and crafting products. Driven by a passion for continuous learning, I strive to deepen my knowledge across various aspects of software and technology. With 6 years of experience, I've been involved in extensive frontend work for enterprise web applications, while also contributing to backend development.",
  personalWebsiteUrl: "https://ikorason.dev",
  contact: {
    email: "irfanabliz914@gmail.com",
    tel: "+14388205091",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ikorason",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yilifan-abulizi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ikorason",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Bishop",
      degree: "BSc, Computer Science",
      start: "2022",
      end: "Present",
      description: [
        "Currently balancing part-time university studies with full-time work",
        "Courses include Data Structures, Algorithms, Software Engineering, and more",
      ],
    },
    {
      school: "Collège LaSalle Montréal",
      degree: "DEC, Computer Science Technology - Programming",
      start: "2015",
      end: "2018",
      description: [
        "Concentration courses include Applied Mathematics, Algorithms and Programming, Web Client Development, Databases, and more.",
        "Completed an internship @ Building Stack consisting of 255 hours, gaining practical experience in the field",
      ],
    },
  ],
  work: [
    {
      company: "Building Stack",
      link: "https://www.buildingstack.com",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: BSTKLogo,
      start: "2018",
      end: "Present",
      description: [
        "Developed and maintained enterprise web applications using cutting-edge web technologies, including React.js, TypeScript, styled-components, Redux, and Redux-saga.",
        "Utilized Redux for efficient global state management and Redux-saga for handling asynchronous API operations.",
        "Employed Styled-components and CSS-in-JS solutions for effective styling in the applications.",
        "Established custom webpack setups and tools such as Storybook for streamlined development processes.",
        "Successfully integrated third-party solutions like Paysafe and Plaid for payment processing functionalities.",
        "Implemented Test Driven Development (TDD) practices using testing libraries such as Jest, react-testing-library, and integration testing with Cypress.",
        "Implemented monitoring tools such as FullStory and Sentry for comprehensive development monitoring.",
        "Developed a web portal catering to both property management and tenants, enabling online rent payments, ticket/work order creation, time entry management, and intricate CRUD operations.",
        "Engaged in DevOps practices using Azure, ensuring effective code reviews with best practices applied.",
        "Conducted 2-week sprint planning, organized tasks, and performed task breakdowns to maintain a structured and efficient development process.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Rust",
    "C++",
    "C#",
    "SQL",
  ],
  projects: [
    {
      title: "Personal Blog",
      techStack: ["Side Project", "TypeScript", "Next.js", "MDX"],
      description: "Personal blog where I share what I've learned.",
      link: {
        label: "ikorason.dev",
        href: "https://ikorason.dev/",
      },
    },
  ],
} as const;
