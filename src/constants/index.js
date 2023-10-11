import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  aws,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  airforce,
  meta,
  starbucks,
  apex,
  codeup,
  tesla,
  shopify,
  carrent,
  unity,
  weather,
  cloud,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "System Administrator",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Codup LLC",
    icon: codeup,
    iconBg: "#FFFFFF",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cloud Engineer",
    company_name: "Apex Systems",
    icon: apex,
    iconBg: "#43546a",
    date: "August 2022  - April 2023",
    points: [
      "Implemented AWS user provisioning for EKS administration using Terraform, enabling fine-tuned control with distinct roles for Admin and Basic users.",
      "Orchestrated the deployment of EKS workloads on AWS Fargate through automated infrastructure provisioning using Terraform, streamlining resource allocation and enhancing operational efficiency.",
      "Designed a resilient AWS Virtual Private Cloud (VPC) with a 3-Tier architecture, leveraging Terraform to automate the infrastructure provisioning process, ensuring secure isolation of network tiers and efficient resource management",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Administrator",
    company_name: "United States Air Force",
    icon: airforce,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - August 2022",
    points: [
      "Proficient in delivering Identity, Credential, and Access Management (ICAM) services for Department of Defense (DoD) personnel, utilizing DISA Purebred Solution, BlackBerry UEM, PKI/E Tools, MFA, and ECA for secure website and application access. Proficient in analyzing ICAM data flow charts to ensure interoperability across the DoD enterprise.",
      "Collaborated alongside team and third parties to assign the correct permissions to users utilizing RBAC methods and greatest privilege.",
      "Worked as subject matter expert for implementation of BlackBerry UEM servers providing systems troubleshooting, configuration and keep-up of systems administration via user set-up and security protocols for over 2k DoD personnel maintaining full capabilities of UEM server",
      "Oversaw training of 27 Cyber Security Admins using Sharepoint and step by step solutions to expedite competency",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "UpliftUnity",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: unity,
    source_code_link: "https://github.com/KAR-Uplift-Unity/Uplift",
  },
  {
    name: "Weather App",
    description:
      "Weather App created using React JS, here we get the current Weather data using API from OpenWeatherMap and display the weather information like Temperature,  Weather condition, Humidity and Wind Speed according to the city in this Weather app",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/JemalKnowles1/weather-app",
  },
  {
    name: "AWS Cloud Infrastructure as Code Demos",
    description:
      "Through a series of Terraform and Kubernetes-based demonstrations, I've effectively showcased my profiecency in Infrastructure as Code (IaC). Notable examples of my work encompass the precision in provisioning IAM users with distinct administrative roles, precisely defined and managed through Terraform configurations. Additionally, I've implemented Kubernetes Horizontal and Vertical Pod Autoscaling using Terraform.",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://github.com/JemalKnowles1/terraform-on-aws-eks",
  },
];

export { services, technologies, experiences, testimonials, projects };