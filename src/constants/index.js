import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  habitat_logo,
  MK_logo,
  bootstrap_logo,
  tesla,
  shopify,
  project1,
  project5,
  project4,
  carrent,
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
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Next js",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap_logo,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MattsenKumar LLC.",
    icon: MK_logo,
    iconBg: "#FFFFFF",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrating APIs and Data Handling: I have handled data fetching and integration by using tools like Axios or the built-in fetch API.",
      "I also process and manage the data received from APIs to display it in the user interface in interactive way using fusion-charts.",
    ],
  },
  {
    title: "UI UX Designer",
    company_name: "Habitat For Humanity Trust",
    icon: habitat_logo,
    iconBg: "#FFFFFF",
    date: "July 2022 - August 2022",
    points: [
      " Creating unique and memorable logos that represent a brand’s identity and values",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      " Creating visually appealing and user-friendly interfaces for websites and mobile applications",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "He is one of the most hardworking and skillful developers I have had the privilege of working with.",
    name: "Deepak Verma",
    designation: "Sr. React Developer",
    company: "MattsenKumar LLC",
    //  image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He is currently serving as an intern with us, but his dedication and hard work have consistently demonstrated the skills and quality of a seasoned developer.",
    name: "Sonu Kumar",
    designation: "Maneger",
    company: "MattsenKumar LLC",
    //  image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He is an exceptionally diligent candidate who consistently completes tasks on time while maintaining high-quality standards.",
    name: " Ram Prakash Agarwal",
    designation: "Maneger",
    company: "Habitat For Humanity Trust",
    //  image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Complete responsive E-commerce digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://shadwar123.github.io/E-commerce-Website/",
  },
  {
    name: "Movix Streaming Palatform",
    description:
      "A streaming platform that delivers real-time or on-demand multimedia content over the internet. Users can watch movies, TV shows, music, and more without downloading files. This palatform show IMDB ratings of movies there characters and recommend new movies with real time data from APIs.",
    tags: [
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://movix-taupe-three.vercel.app/",
  },
  {
    name: "trueSocial (Social media without fake news)",
    description:
      "This Social media application is free of fake news , posts my using the power of machine learning. It has all the basic features of social media app like creating post, like-unlike, follow-unfollow. For specific post it gives idea how much the post is correct.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "Neural Netwok Model",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/shadwar123/True-Social",
  },
];

export { services, technologies, experiences, testimonials, projects };
