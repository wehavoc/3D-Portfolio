import {
  mobile,
  frontend,
  design,
  web,
  spring,
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
  sql,
  java,
  celebal,
  internshala,
  product,
  pglife,
  admindashboard,
  weather,
  todo,
  pwu,
  threejs,
  jp,
  deepak,
  golu,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End Developer",
    icon: frontend,
  },
  {
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Design",
    icon: design,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mySQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developed a fully responsive Admin Dashboard using React.js and Tailwind CSS, featuring modern libraries for efficient administrative management",
      "Created a To-Do App with React.js, enabling users to efficiently create, manage, and track their tasks.",
      "Built a fully functional E-commerce application utilizing modern web technologies, facilitating product browsing and purchasing capabilities.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Internshala Training",
    icon: internshala,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Spearheaded the development of the PG Life project, utilizing HTML, CSS, and JavaScript for the frontend, alongside PHP for backend functionality and MySQL for database management.",
      "Designed a user-friendly platform that enables individuals to effortlessly find paying guest accommodations in their cities.",
      "Contributed significantly to the end-to-end development, ensuring seamless search functionalities for an enhanced user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Golu Kumar",
    designation: "CFO",
    company: "Raju Enterprises",
    image: golu,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Jay Prakash",
    designation: "CEO",
    company: "JPK Groups",
    image: jp,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Deepak",
    designation: "CTO",
    company: "Deepak Marble",
    image: deepak,
  },
];

const projects = [
    {
    name: "Product Management",
    description:
      "Developed a secure CRUD backend application using Java, JDBC, and Servlets with DAO layers for user and product management, including a custom authentication system with hashed passwords. Focused on secure database operations and clean, maintainable architecture.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
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
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: product,
    source_code_link: "https://github.com/wehavoc/JDBCServeletMaven",
  },
  {
    name: "PG Life",
    description:
      "I played a key role in developing PG Life, a full-stack web platform using HTML, CSS, JavaScript, PHP, and MySQL. It offers a user-friendly interface for searching and booking paying guest accommodations across cities with seamless search functionality.                                          ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    source_code_link: "https://github.com/Havoc-Ujjwal/pglifeproject",
  },
  {
    name: "Admin Dashboard",
    description:
      "Developed a responsive Admin Dashboard using React.js, Tailwind CSS, and modern libraries. The project showcases a clean and intuitive interface designed to efficiently manage administrative tasks.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "ChartJS",
        color: "pink-text-gradient",
      },
      {
        name: "Context API.",
        color: "blue-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/Havoc-Ujjwal/Admin-Dashboard",
  },
  {
    name: "Weather App",
    description:
      "Weather App is a project developed using HTML, CSS, JavaScript, and API integration. It provides users with real-time weather information in a user-friendly interface, enhancing their experience in accessing weather forecasts effortlessly. The app offers accurate weather updates.",
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
      {
        name: "API",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Havoc-Ujjwal/Weather-App",
  }
];

export { services, technologies, experiences, testimonials, projects };