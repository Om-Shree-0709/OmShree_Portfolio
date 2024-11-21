import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  jyc,
  cd,
  e5r,
  p1,
  p2,
  p3,
  threejs,
  react,
  three,
  node,
  content,
  ip,
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
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.Js",
    icon: react,
  },
  {
    title: "Tailwind CSS",
    icon: three,
  },
  {
    title: "Node.Js",
    icon: node,
  },
  {
    title: "Content Creator",
    icon: content,
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
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "InternPe",
    icon: ip,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and related technologies for optimal performance.",
      "Collaborating with cross-functional teams to deliver high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "Active Member of JYC",
    company_name: "Jaypee Youth Club",
    icon: jyc,
    iconBg: "#383E56",
    date: "Sept 2022 - Present",
    points: [
      "Exploring diverse fields beyond academics.",
      "Organizing various events and activities.",
      "Developing teamwork and leadership skills.",
      "Enhancing ability to express and integrate ideas.",
      "Building confidence through participation and achievement.",
    ],
  },
  {
    title: "Content Writer",
    company_name: "Earth5R",
    icon: e5r,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Engaging with digital platforms to build and maintain a Sustainability Portfolio©.",
      "Developing domain-specific green skills using advanced technology.",
      "Using smart technology to track and promote sustainable choices.",
      "Implementing data-driven strategies to combat climate change.",
      "Leveraging mobile technology for environmental awareness and action.",
    ],
  },
  {
    title: "Mentor",
    company_name: "CodeDay",
    icon: cd,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Taught web development using HTML, CSS, and JavaScript.",
      "Instructed students in prompt engineering techniques.",
      "Guided students in creating animations using Scratch.",
      "Mentored under-served students in exploring tech careers.",
      "Facilitated hands-on learning in a welcoming environment.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: cd,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
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
  //   icon: cd,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
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
  //   icon: cd,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  //},
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
    name: "JUIT University Website",
    description:
      "Responsive college website built with React, showcasing programs, campus photos, student testimonials, a contact form, and an integrated video player.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/Om-Shree-0709/JUIT-Website",
    live_link: "https://juit-om-shree.netlify.app/",
  },
  {
    name: "Ecommerse Website",
    description:
      "E-commerce website built with HTML, CSS, JavaScript, and PHP (using XAMPP). Features include homepage, shop, blog, about, contact, registration, and cart pages.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/Om-Shree-0709/Ecommerse-Website",
    live_link: "https://ecommerce-om-shree.netlify.app/",
  },
  {
    name: "News Website",
    description:
      "Dynamic news website built with React, offering categorized news browsing through an interactive Navbar and real-time updates on current events across various topics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/",
    live_link: "https://github.com/Om-Shree-0709/News_Website",
  },
  // {
  //   name: "Market Research & Insights",
  //   description:
  //     "This project is to conduct a market research analysis on the rate of returns for online fashion purchases due to unfitting sizes or items not looking as expected.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "csv",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "data analysis",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: p4,
  //   source_code_link:
  //     "https://github.com/your_username/market-research-insights",
  //   live_link: "https://example.com",
  // },
  // {
  //   name: "Market Analysis Project",
  //   description:
  //     "This project conducts a market research analysis on consumer behavior data using Python, Pandas, and Matplotlib. The analysis includes data cleaning, visualization of consumer demographics, and purchase behavior.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "seaborn",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: p5,
  //   source_code_link:
  //     "https://github.com/Om-Shree-0709/Market-Research-Analysis-Project",
  //   live_link: "https://example.com", // Update with actual live link if available
  // },
  // {
  //   name: "MATLAB JPG Image Compressor",
  //   description:
  //     "This MATLAB program compresses JPG images based on user-specified quality. It reads an image, prompts for compression quality, and saves the compressed image in the same directory.",
  //   tags: [
  //     {
  //       name: "MATLAB",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "image processing",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: p6,
  //   source_code_link:
  //     "https://github.com/YourGithubUsername/MATLAB-JPG-Image-Compressor", // Replace with actual URL
  //   live_link: "https://example.com", // Update with actual live link if available
  // },
];

export { services, technologies, experiences, testimonials, projects };
