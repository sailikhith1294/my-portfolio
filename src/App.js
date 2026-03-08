
import { useState, useEffect } from 'react';
import { FaPython, FaCertificate, FaTrophy, FaRocket, FaGamepad } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp, FaCode, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import profile from './pic.png';


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: darkMode ? "#0f0f0f" : "#f8fafc" },
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
      links: { enable: true, color: darkMode ? "#00ffff" : "#0891b2" },
      color: { value: darkMode ? "#00ffff" : "#0891b2" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl mb-6"
          >
            <span className="inline-block text-cyan-400 animate-pulse">⚡</span>
          </motion.div>
          <motion.div 
            className="text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Loading Portfolio...
          </motion.div>
          <div className="flex justify-center space-x-2">
            <motion.div 
              className="w-4 h-4 bg-cyan-400 rounded-full"
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-4 h-4 bg-cyan-400 rounded-full"
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div 
              className="w-4 h-4 bg-cyan-400 rounded-full"
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    );
  }

  const blogs = [
    {
      title: "5 React Tricks You Probably Didn’t Know",
      summary: "Discover powerful but lesser-known tricks in React to optimize your apps.",
      link: "https://medium.com/@likhithgolagani1294/5-react-tricks-you-probably-didnt-know-ec39d262fcf8"
    },
    {
      title: "Getting Started with OpenCV in Python",
      summary: "A beginner-friendly guide to implementing computer vision using Python and OpenCV.",
      link: "https://medium.com/@likhithgolagani1294/getting-started-with-opencv-in-python-1a83f9225c82"
    }
  ];

  const projects = [
    {
      name: "Capstone Management Hub",
      description: "Built a secure, full-stack role-based platform for managing academic capstone projects with multi-user collaboration, real-time submissions, evaluations, and administrative oversight. Gained expertise in RBAC, RESTful API design, Docker containerization, CI/CD with Jenkins, and building scalable full-stack applications.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Docker", "Jenkins CI/CD"],
      link: "https://github.com/sailikhith1294"
    },
    {
      name: "DearDiary – AI-powered Personal Diary Platform",
      description: "Built a secure full-stack diary app with dual writing modes—manual and AI-assisted—using Gemini AI. Enabled authentication, 100% CRUD functionality, and protected routes for over 50 active test users. Improved user interaction flow and reduced API response time by 30% through backend optimization.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini AI API"],
      link: "https://github.com/sailikhith1294"
    },
    {
      name: "Rail Madad – AI-Driven Automation for Efficient Complaint Resolution",
      description: "Successfully automated 85% of complaint resolution processes, significantly reducing resolution time by 40%, improving operational efficiency, and enhancing accuracy. Gained expertise in AI-driven automation, cloud deployment, and database management.",
      tech: ["Python", "Node.js", "React.js", "HTML", "CSS", "MySQL", "AWS", "Google Cloud"],
      link: "https://github.com/sailikhith1294"
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner – GeeksforGeeks",
      icon: <SiMicrosoftazure />
    },
    {
      name: "Full-Stack Development using MERN – CipherSchools",
      icon: <FaCode />
    },
    {
      name: "SQL for Data Science – Great Learning",
      icon: <FaPython />
    },
    {
      name: "Understanding Cloud Fundamentals – LinkedIn Learning",
      icon: <FaCertificate />
    }
  ];

  const achievements = [
    {
      title: "Startup Funding – EasyCabs",
      description: "Led a team of 5 developers to secure ₹1,00,000 in funding for EasyCabs, a ride-sharing solution.",
      icon: <FaRocket />
    },
    {
      title: "Smart India Hackathon 2024 – Participant",
      description: "Participated in Smart India Hackathon 2024 and developed Rail Madad, an AI-driven system for efficient complaint resolution.",
      icon: <FaTrophy />
    },
    {
      title: "Event Manager – Gaming Tournament",
      description: "Managed a gaming event with 100+ participants, ensuring a 30% increase in engagement.",
      icon: <FaGamepad />
    }
  ];

  const hoverVariants = {
    hover: { 
      scale: 1.05, 
      rotateX: 10, 
      rotateY: 10, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      } 
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-gray-900'} transition-all duration-500 min-h-screen scroll-smooth font-sans relative`}>

          <Particles init={particlesInit} options={particlesOptions} />

      <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-black/40 border-gray-700' : 'bg-white/40 border-gray-300'} px-4 md:px-6 py-4 flex flex-wrap justify-between items-center shadow-xl border-b transition-colors`}>
        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={`text-xl md:text-2xl font-bold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Sai Likhith Golagani
        </motion.h1>
        <motion.div className="hidden lg:flex space-x-4 text-sm font-medium items-center" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <a href="#about" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>About</a>
          <a href="#projects" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Projects</a>
          <a href="#skills" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Skills</a>
          <a href="#certificates" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Certificates</a>
          <a href="#achievements" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Achievements</a>
          <a href="#blogs" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Blogs</a>
          <a href="#education" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Education</a>
          <a href="#contact" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition text-white shadow-lg font-semibold">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </motion.div>
        <button onClick={() => setDarkMode(!darkMode)} className="lg:hidden bg-gradient-to-r from-cyan-500 to-cyan-600 px-3 py-1.5 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition text-white shadow-md text-sm">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <motion.section
  className="pt-36 pb-16 text-center relative overflow-hidden"
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  variants={sectionVariants}
>
  <motion.div 
    className="absolute inset-0 opacity-30"
    initial={{ backgroundPosition: "0% 50%" }}
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    style={{
      background: darkMode 
        ? 'linear-gradient(45deg, #0891b2, #06b6d4, #22d3ee, #06b6d4, #0891b2)'
        : 'linear-gradient(45deg, #e0f2fe, #bae6fd, #7dd3fc, #bae6fd, #e0f2fe)',
      backgroundSize: '200% 200%',
      filter: 'blur(40px)'
    }}
  />
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
    <motion.div
      variants={floatingVariants}
      initial="initial"
      animate="animate"
    >
      <motion.img
        src={profile}
        alt="Profile Picture"
        className={`w-32 h-32 md:w-44 md:h-44 rounded-full border-4 ${darkMode ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]' : 'border-cyan-600 shadow-[0_0_30px_rgba(8,145,178,0.5)]'} cursor-pointer object-cover relative`}
        whileHover={{
          scale: 1.15,
          rotate: [0, 5, -5, 0],
          transition: { type: "spring", stiffness: 300 }
        }}
        initial={{ opacity: 0, scale: 0.6, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
    <div className="text-center md:text-left">
      <h1 className={`text-5xl md:text-7xl font-extrabold mb-2 leading-tight tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Hi, I'm{" "}
        <motion.span
          className={`inline-block ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} glow-text`}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ rotateX: 15, rotateY: 10, scale: 1.1 }}
        >
          Sai Likhith
        </motion.span>
      </h1>
      <p className={`text-lg md:text-2xl mt-4 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} font-medium`}>
        <span className="typewriter-loop">
          Full Stack Developer | Tech Enthusiast | Problem Solver
        </span>
      </p>
      
<a
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
>
  📄 View Resume
</a>


    </div>
  </div>
</motion.section>


      <motion.section 
        id="about" 
        className="px-6 pt-10 pb-20 text-center relative overflow-hidden"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} relative z-10`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className={`w-24 h-1 mx-auto mb-6 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'} relative z-10`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        <motion.p 
          className={`text-base md:text-lg max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
  I'm <span className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-semibold`}>Sai Likhith Golagani</span> from Rajahmundry, Andhra Pradesh. I aim to leverage my skills in full-stack development and AI to build smart, user-centric solutions. I'm driven by innovation and continuous learning, and I seek to contribute meaningfully to impactful tech teams.<br /><br />
  
  With expertise in React.js, Node.js, Express.js, MongoDB, and modern DevOps tools like Docker and Jenkins, I build scalable, secure applications. I've led technical teams, participated in national-level hackathons like Smart India Hackathon 2024, and helped secure funding for a startup.<br /><br />
  
  My journey is fueled by curiosity, creativity, and a love for solving real-world problems with code. I believe in learning by building, growing through collaboration, and staying resilient through challenges.
</motion.p>

      </motion.section>

      <motion.section 
        id="projects" 
        className="px-6 py-20 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`group ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-300'} backdrop-blur-sm p-6 rounded-2xl border shadow-lg text-left hover:shadow-2xl transition-all relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: darkMode 
                  ? '0 20px 50px rgba(34, 211, 238, 0.3)' 
                  : '0 20px 50px rgba(8, 145, 178, 0.3)'
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${darkMode ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600' : 'bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-cyan-600'} animate-pulse`} />
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-3 group-hover:text-cyan-400 transition-colors`}>{project.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 line-clamp-4`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} text-sm font-semibold inline-flex items-center transition group-hover:translate-x-1`}>
                View Code <FaExternalLinkAlt className="ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="px-6 py-20 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div 
          className="max-w-6xl mx-auto text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Languages</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>C</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>C++</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Python</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>JavaScript</motion.span>
            </div>
          </motion.div>
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Web Development</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>HTML</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>CSS</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>React.js</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Node.js</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Express.js</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>JWT Authentication</motion.span>
            </div>
          </motion.div>
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Databases</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>SQL Server</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>MySQL</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>MongoDB</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>PostgreSQL</motion.span>
            </div>
          </motion.div>
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Git</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>GitHub</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Docker</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Docker Compose</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Jenkins CI/CD</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Render</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Vercel</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Netlify</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Postman</motion.span>
            </div>
          </motion.div>
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Computer Vision</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>OpenCV</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Haar Cascade</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Real-time Image Processing</motion.span>
            </div>
          </motion.div>
          <motion.div 
            className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4 relative z-10`}>Soft Skills</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Problem-Solving</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Team Collaboration</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Project Coordination</motion.span>
              <motion.span whileHover={{ scale: 1.1, y: -3 }} className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium cursor-pointer`}>Resilience</motion.span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
  id="certificates"
  className="px-6 py-20 text-center"
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
>
  <motion.h2 
    className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    Certificates
  </motion.h2>
  <motion.div
    className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  />
  <motion.div 
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {certificates.map((certificate, idx) => (
      <motion.div
        key={idx}
        className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl shadow-lg text-left flex items-start gap-4 hover:shadow-2xl transition-all relative overflow-hidden`}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          rotateY: 5,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        <div className={`absolute top-0 right-0 w-20 h-20 ${darkMode ? 'bg-cyan-400/10' : 'bg-cyan-600/10'} rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`} />
        <motion.div 
          className={`text-3xl ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} relative z-10`}
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          {certificate.icon}
        </motion.div>
        <h3 className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} relative z-10`}>{certificate.name}</h3>
      </motion.div>
    ))}
  </motion.div>
</motion.section>
<motion.section
  id="achievements"
  className="px-6 py-20 text-center"
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true, amount: 0.2 }}
  variants={sectionVariants}
>
  <motion.h2 
    className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Achievements
  </motion.h2>
  <motion.div
    className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  />
  <motion.div 
    className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {achievements.map((item, idx) => (
      <motion.div
        key={idx}
        className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition-all relative overflow-hidden`}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          boxShadow: darkMode 
            ? '0 25px 50px rgba(34, 211, 238, 0.3)' 
            : '0 25px 50px rgba(8, 145, 178, 0.3)'
        }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/0 to-blue-500/0' : 'bg-gradient-to-br from-cyan-600/0 to-blue-600/0'} group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500`} />
        <motion.div 
          className={`text-4xl ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} relative z-10`}
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {item.icon}
        </motion.div>
        <div className="relative z-10">
          <h3 className={`text-lg font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>{item.title}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

      <motion.section 
        id="blogs" 
        className="px-6 py-20"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          My Blogs
        </motion.h2>
        <motion.div
          className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl shadow-lg border hover:shadow-2xl transition-all relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: darkMode 
                  ? '0 20px 50px rgba(34, 211, 238, 0.3)' 
                  : '0 20px 50px rgba(8, 145, 178, 0.3)'
              }}
            >
              <div className={`absolute bottom-0 left-0 h-1 w-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} group-hover:text-cyan-400 transition-colors`}>{blog.title}</h3>
              <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{blog.summary}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform`}>
                Read Blog <FaExternalLinkAlt className="ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      


      <motion.section 
        id="education" 
        className="px-6 py-20 text-center"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
  <motion.h2 
    className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Education
  </motion.h2>
  <motion.div
    className={`w-24 h-1 mx-auto mb-10 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'}`}
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  />
  <motion.div 
    className="space-y-6 max-w-4xl mx-auto text-left relative"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Timeline line */}
    <div className={`absolute left-8 top-0 bottom-0 w-1 ${darkMode ? 'bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600' : 'bg-gradient-to-b from-cyan-600 via-blue-700 to-purple-800'} hidden md:block`} />
    
    <motion.div 
      className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative md:ml-16 overflow-hidden`}
      variants={itemVariants}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${darkMode ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-gradient-to-b from-cyan-600 to-blue-700'} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
      <div className={`absolute -left-16 top-8 w-8 h-8 ${darkMode ? 'bg-cyan-400' : 'bg-cyan-600'} rounded-full border-4 ${darkMode ? 'border-gray-900' : 'border-gray-100'} hidden md:block group-hover:scale-125 transition-transform`} />
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Lovely Professional University</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Bachelor of Technology in Computer Science & Engineering</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>Aug 2022 - Present | CGPA: 7.54</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Jalandhar, Punjab</p>
    </motion.div>
    <motion.div 
      className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative md:ml-16 overflow-hidden`}
      variants={itemVariants}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${darkMode ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-gradient-to-b from-cyan-600 to-blue-700'} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
      <div className={`absolute -left-16 top-8 w-8 h-8 ${darkMode ? 'bg-blue-500' : 'bg-blue-700'} rounded-full border-4 ${darkMode ? 'border-gray-900' : 'border-gray-100'} hidden md:block group-hover:scale-125 transition-transform`} />
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Tirumala College</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Intermediate (12th) - MPC</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>2020 - 2022 | Percentage: 92%</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Rajahmundry, Andhra Pradesh</p>
    </motion.div>
    <motion.div 
      className={`group p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-2xl transition-all relative md:ml-16 overflow-hidden`}
      variants={itemVariants}
      whileHover={{ x: 10, scale: 1.02 }}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${darkMode ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-gradient-to-b from-cyan-600 to-blue-700'} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
      <div className={`absolute -left-16 top-8 w-8 h-8 ${darkMode ? 'bg-purple-600' : 'bg-purple-800'} rounded-full border-4 ${darkMode ? 'border-gray-900' : 'border-gray-100'} hidden md:block group-hover:scale-125 transition-transform`} />
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Oakwood School</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Secondary Education (10th)</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>2019 - 2020 | Percentage: 90%</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Rajahmundry, Andhra Pradesh</p>
    </motion.div>
  </motion.div>
</motion.section>


      <motion.section 
        id="contact" 
        className="px-6 py-20 text-center relative overflow-hidden"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{
            background: darkMode 
              ? 'radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)' 
              : 'radial-gradient(circle at 50% 50%, #0891b2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2563eb 0%, transparent 50%)'
          }}
        />
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} relative z-10`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className={`w-24 h-1 mx-auto mb-8 rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-700'} relative z-10`}
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className={`text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto relative z-10`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Feel free to reach out to me via social media, email, or phone. I'm always open to discussing new projects, creative ideas, or opportunities!
        </motion.p>
        <div className="space-y-6 max-w-2xl mx-auto relative z-10">
          <motion.div 
            className="flex justify-center space-x-8 text-4xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/sailikhith1294" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} 
              title="GitHub" 
              aria-label="GitHub Profile"
              variants={itemVariants}
              whileHover={{ y: -10, rotate: [0, -5, 5, 0] }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/likhith-golagani/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} 
              title="LinkedIn" 
              aria-label="LinkedIn Profile"
              variants={itemVariants}
              whileHover={{ y: -10, rotate: [0, -5, 5, 0] }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:likhithgolagani1294@gmail.com" 
              className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} 
              title="Email" 
              aria-label="Send Email"
              variants={itemVariants}
              whileHover={{ y: -10, rotate: [0, -5, 5, 0] }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
          <motion.div 
            className={`group ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl p-6 shadow-lg space-y-3 hover:shadow-2xl transition-all relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${darkMode ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-cyan-600 to-blue-800'}`} />
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Email:</strong> 
              <a href="mailto:likhithgolagani1294@gmail.com" className={`ml-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} hover:underline font-medium`}>likhithgolagani1294@gmail.com</a>
            </p>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Phone:</strong> 
              <a href="tel:+918179785050" className={`ml-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} hover:underline font-medium`}>+91 8179785050</a>
            </p>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Location:</strong> 
              <span className="ml-2">Rajahmundry, Andhra Pradesh 533103, India</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl z-50 transform hover:scale-110 transition-all"
          whileHover={{ y: -5 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </div>
  );
}
