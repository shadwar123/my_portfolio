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
  project2,
  project3,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
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
    date: "July 2021 - August 2022",
    points: [
      " Creating unique and memorable logos that represent a brand’s identity and values",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      " Creating visually appealing and user-friendly interfaces for websites and mobile applications",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "E Commerce",
    description:
      "Complete responsive E-commerce digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections.",
    tags: [
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
    image: project3,
    source_code_link: "https://shadwar123.github.io/dating-website/",
  },
  {
    name: "Tindog",
    description:
      "A Dating Website for Dogs.It does for pets what dating sites do for human beings. Those looking for that special someone for their pet have to feed in their dog's age, gender and breed, and upload a picture of their cute, furry companion.",
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
    image: project2,
    source_code_link: "https://shadwar123.github.io/dating-website/",
  },
];

export { services, technologies, experiences, testimonials, projects };
