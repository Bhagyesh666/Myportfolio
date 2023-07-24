/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Bhagyesh",
  logo_name: "BS",
  nickname: "Bhagyesh666",
  full_name: "Bhagyesh Shinkar",
  subTitle: "Full Stack Developer, Mern Stack Developer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1_jLFbjwWYbXWKPSSWaSxNxM_tkWjTGmt/view?usp=sharing",
  mail: "mailto:bhagyeshshinkar37@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Bhagyesh666",
  linkedin: "https://www.linkedin.com/in/bhagyesh-shinkar-74a489221/",
  gmail: "bhagyeshshinkar37@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/ShinkarBha65697",
  instagram: "https://www.instagram.com/bhagyesh_shinkar_24/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "MERN Stack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#6863A6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Mumbai",
      subtitle: "Bachelors in Applied Information technology",
      logo_path: "MU.png",
      alt_name: "MU",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://mu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Begineer Certificate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.edureka.co/certificates/mycertificate/7c2344fce45a26d0e4c20d8d575d6b7e",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Great Learning",
      subtitle: "React Js Tutorial",
      logo_path: "gl.png",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/52045/certificate",
      alt_name: "GL",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Bharat Intern",
          company_url: "https://bharatintern.live/vip.html",
          logo_path: "BI.png",
          duration: "Jun 2023 - Ongoing",
          location: "Remote",
          description:
            "Collaborated with a distributed team of developers, designers, and project managers to deliver high-quality and efficient software solutions.",
          color: "#f10000",
        },
        {
          title: "Web Developer",
          company: "Oasis Infobyte",
          company_url: "https://oasisinfobyte.com/",
          logo_path: "OI.png",
          duration: "Jan 2023 - Feb 2021",
          location: "Remote",
          description:
            "Assisted in the design and development of responsive and user-friendly websites. Contributed to the maintenance and improvement of existing websites.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Organizing Head",
          company: "Hackathon Committee",
          company_url: "https://vcet-hackathon.web.app/",
          logo_path: "VH.png",
          duration: "Aug 2022 - Mar 2023",
          location: "VCET",
          description:
            "Oversaw all aspects of event planning, including logistics, budgeting, and scheduling Collaborated with sponsors, mentors, and judges to secure their participation and support.",
          color: "#4285F4",
        },
        {
          title: "Google Cloud Community Day Mumbai",
          company: "Google Developer Group",
          company_url:
            "https://gdg.community.dev/events/details/google-gdg-cloud-mumbai-presents-google-cloud-community-days-2023-mumbai/",
          logo_path: "GD.png",
          duration: "Apr 2023",
          location: "Mumbai",
          description:
            "Participating in Google Cloud Community Day 2023 was an enriching experience that expanded my knowledge of cloud technologies. I learned about cutting-edge tools, gained insights into best practices, and explored the possibilities of cloud computing in diverse industries.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "I1.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    // {
    //   name: "Journalify",
    //   url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
    //   description:
    //     "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    {
      name: "Plant Disease Prediction",
      url: "https://github.com/Bhagyesh666/plant_disease",
      description:
        "The proposed system is a web-app solution for automatic detection and classification of plant leaf disease",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "myPortfolio",
      url: "",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Travelogue Social Media App",
      url: "https://travelogue-seven.vercel.app/posts",
      description:
        "The app was very popular in the visually impaired community as it helped them describe the world around them.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ExpressJS",
          iconifyClass: "logos-express",
        },
      ],
    },
    {
      name: "Library Management System",
      url: "",
      description:
        "It supports user signup, login, logout, search, books, add books and CRUD operations",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      name: "Hotel Management System",
      url: "",
      description:
        "Collaborated with hotel managers and staff to gather requirements, conduct user testing and iteratively improve the system based on feedback",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
