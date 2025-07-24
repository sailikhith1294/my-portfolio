import { useState, useEffect } from "react";
import {
  FaPython,
  FaGraduationCap,
  FaCertificate,
  FaClock,
} from "react-icons/fa";
import {
  SiAmazonaws, SiMongodb, SiMysql, SiLinkedin,
} from "react-icons/si";
import {
  FaUsers,
  FaTrophy,
  FaRocket,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "./pic.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiCplusplus,
  SiAutodesk,
  SiExpress,
  SiJsonwebtokens,
  SiOpenai,
  SiPostman,
  SiPhp,
} from "react-icons/si";
import {
  MdGroups,
  MdPsychologyAlt,
  MdManageAccounts,
  MdSecurity,
} from "react-icons/md";
import { HashRouter } from "react-router-dom";

import { FaRegLightbulb } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: darkMode ? "#0f0f0f" : "#ffffff" },
    particles: {
      number: { value: 50 },
      size: { value: 4 },
      move: { enable: true, speed: 1 },
      links: { enable: true, color: "#00ffff" },
      color: { value: "#00ffff" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl animate-pulse">
        Fetching bits and bytes..
      </div>
    );
  }

  const blogs = [
    {
      title: "5 React Tricks You Probably Didn’t Know",
      summary:
        "Discover powerful but lesser-known tricks in React to optimize your apps.",
      link: "https://medium.com/@likhithgolagani1294/5-react-tricks-you-probably-didnt-know-ec39d262fcf8",
    },
    {
      title: "Getting Started with OpenCV in Python",
      summary:
        "A beginner-friendly guide to implementing computer vision using Python and OpenCV.",
      link: "https://medium.com/@likhithgolagani1294/getting-started-with-opencv-in-python-1a83f9225c82",
    },
  ];

  const projects = [
    {
      name: "DearDiary – AI-Powered Diary",
      description:
        "A full-stack personal diary app with AI-assisted and manual writing modes, including user authentication and CRUD operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API"],
      link: "https://github.com/sailikhith1294/Dear-Diary",
    },
    {
      name: "Email Verification & GitHub Timeline System",
      description:
        "A PHP-based email verification system with GitHub timeline email notifications using CRON jobs, without any database.",
      tech: ["PHP", "GitHub API", "CRON Jobs", "HTML", "Email"],
      link: "https://github.com/sailikhith1294/php-email-verification-system",
    },
    {
      name: "RedBus Clone",
      description:
        "A full-stack clone of the RedBus platform allowing users to search and book bus tickets.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/sailikhith1294/redbus",
    },
    {
      name: "Blogging App Frontend",
      description:
        "Frontend of a full-featured blogging platform with authentication and rich text editing.",
      tech: ["React", "Tailwind CSS", "REST API"],
      link: "https://github.com/sailikhith1294/Blogging-app-front-end",
    },
    {
      name: "Rail Madad – AI-Driven Complaint Automation",
      description:
        "Automated 85% of complaint resolution processes, reducing resolution time by 40% and enhancing accuracy and efficiency.",
      tech: [
        "Python",
        "Node.js",
        "React.js",
        "HTML",
        "CSS",
        "MySQL",
        "AWS",
        "Google Cloud",
      ],
      link: "https://github.com/sailikhith1294?tab=repositories", // or your GitHub/demo link
    },

    {
      name: "Face & Eye Detector",
      description:
        "Python application using OpenCV to detect human faces and eyes in real time.",
      tech: ["Python", "OpenCV"],
      link: "https://github.com/sailikhith1294/Python-code-for-face-eye-detector",
    },
  ];

const certificates = [
  {
    name: "AWS Certified Cloud Practitioner – GeeksforGeeks",
    icon: <SiAmazonaws />,
  },
  {
    name: "Full-Stack Development using MERN – CipherSchools",
    icon: <SiMongodb />, // MERN-related; SiMongodb or SiJavascript
  },
  {
    name: "SQL for Data Science – Great Learning",
    icon: <SiMysql />,
  },
  {
    name: "Understanding Cloud Fundamentals – LinkedIn Learning",
    icon: <SiLinkedin />,
  },
];



  const achievements = [
    {
      title: "Startup Funding – EasyCabs",
      description:
        "Led a team of five developers to secure ₹1,00,000 in funding for EasyCabs, a ride-sharing solution.",
      icon: <FaRocket />,
    },
    {
      title: "Smart India Hackathon 2024 – Finalist",
      description:
        "Participated in SIH 2024 - Quantum Quest, leading the development of Rail Madad, an AI-driven large-scale complaint resolution system.",
      icon: <FaTrophy />,
    },
    {
      title: "Event Manager – Gaming Tournament",
      description:
        "Managed a gaming event with 100+ participants, achieving a 30% increase in engagement.",
      icon: <FaGamepad />,
    },
  ];

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.3 },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: { duration: 1 },
  };

  return (
    <div
      className={`${
        darkMode ? "bg-transparent text-white" : "bg-transparent text-black"
      } transition-all duration-500 min-h-screen scroll-smooth font-sans relative`}
    >
      <Particles init={particlesInit} options={particlesOptions} />

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 px-6 py-4 flex justify-between items-center shadow-xl border-b border-gray-700">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold tracking-wide"
        >
          Sai Likhith Golagani
        </motion.h1>
        <motion.div
          className="space-x-4 text-sm font-medium"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#certificates" className="hover:text-cyan-400 transition">
            Certificates
          </a>
          <a href="#achievements" className="hover:text-cyan-400 transition">
            Achievements
          </a>
          <a href="#blogs" className="hover:text-cyan-400 transition">
            Blogs
          </a>
          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-cyan-600 px-3 py-1.5 rounded-full hover:bg-cyan-700 transition text-white"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </motion.div>
      </nav>

      <motion.section
        className="pt-36 pb-16 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.img
            src={profile}
            alt="Bitmoj"
            className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 shadow-xl cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 },
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-2 leading-tight tracking-wide">
              Hi, I'm{" "}
              <motion.span
                className="inline-block text-cyan-400 glow-text"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ rotateX: 15, rotateY: 10, scale: 1.1 }}
              >
                Sai Likhith
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-cyan-300 font-medium">
              <span className="typewriter-loop">
                Full Stack Developer | Tech Enthusiast | Problem Solver
              </span>
            </p>

            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition shadow-lg"
            >
              View Resume
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="px-6 pt-10 pb-20 text-center"
        {...sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
          I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Sai Likhith Golagani
          </span>
          , a passionate and adaptable Full Stack Developer who thrives on
          turning ideas into scalable digital products. With a strong foundation
          in JavaScript, Python, React, Node.js, Express, MongoDB, MySQL, PHP,
          and cloud fundamentals, I enjoy crafting responsive and dynamic web
          applications that are both user-friendly and performance-optimized.
          <br />
          <br />
          I have experience building full-stack applications, AI-integrated
          tools, authentication systems, and automation solutions. I actively
          explore new technologies and development patterns while focusing on
          writing clean, maintainable, and efficient code.
          <br />
          <br />
          I've led technical teams, participated in national-level hackathons,
          contributed to event management, and helped shape startup initiatives.
          My journey is driven by curiosity, creativity, and a passion for
          solving real-world problems through technology. Whether it’s building
          solo projects or collaborating with cross-functional teams, I bring
          both technical expertise and leadership to the table.
          <br />
          <br />
          I'm a continuous learner with hands-on exposure to modern frameworks,
          cloud concepts, problem-solving, and system design. Outside of coding,
          I enjoy gaming, tech communities, and staying updated with industry
          trends.
        </p>
      </motion.section>

      <motion.section
        id="projects"
        className="px-6 py-20 text-center"
        {...sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-black/30 p-6 rounded-xl border border-gray-700 shadow-lg text-left"
              whileHover="hover"
              variants={hoverVariants}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {project.name}
              </h3>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="text-xs text-gray-400 mb-3">
                {project.tech.join(", ")}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-cyan-400 text-sm inline-flex items-center"
              >
                View Code <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="px-6 py-20 text-center"
        {...sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-lg text-gray-300 mb-6">
          Technologies I’m confident with:
        </p>
        <div className="flex justify-center flex-wrap gap-6 text-4xl text-cyan-400">
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiReact title="React" />
          <SiPython title="Python" />
          <SiCplusplus title="C++" />
          <SiMysql title="MySQL" />
          <SiAutodesk title="AutoCAD" />
          <SiPhp title="PHP" />
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express.js" />
          <SiJsonwebtokens title="JWT Auth" />
          <SiOpenai title="OpenAI API" />
          <FaClock title="CRON Jobs" />
          <SiPostman title="REST API Testing" />
          <FaEnvelope title="Email Systems" />
        </div>
      </motion.section>

      <motion.section
        id="certificates"
        className="px-6 py-20 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-8">Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((certificate, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-md text-left flex items-start gap-4"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-3xl text-cyan-400">{certificate.icon}</div>
              <h3 className="text-lg font-semibold text-cyan-300">
                {certificate.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        id="achievements"
        className="px-6 py-20 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-md flex items-start gap-4"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-3xl text-cyan-400">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="blogs" className="px-6 py-16" {...sectionVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">My Blogs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-black/30 rounded-xl shadow-lg border border-gray-700"
              whileHover="hover"
              variants={hoverVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="mb-3 text-sm text-gray-300">{blog.summary}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Read Blog
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="px-6 py-20 text-center"
        {...sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-300">
              Lovely Professional University
            </h3>
            <p className="text-sm text-gray-300">
              Bachelor of Technology in Computer Science & Engineering (2022 -
              present)
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Key Courses: Data Structures, Operating Systems, Web Development
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-300">
              Intermediate – Tirumala College
            </h3>
            <p className="text-sm text-gray-300">
              MPC – Mathematics, Physics, Chemistry (2020 - 2022)
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-300">
              Secondary Education – Oak Wood School
            </h3>
            <p className="text-sm text-gray-300">
              Completed 10th Grade with Distinction
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="px-6 py-20 text-center"
        {...sectionVariants}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-gray-300 mb-4">
          Feel free to reach out to me via social media or email!
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/sailikhith1294"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:likhithgolagani1294@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.section>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
