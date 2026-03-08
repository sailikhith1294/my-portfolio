
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
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-cyan-900 text-white">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 animate-pulse">Loading Portfolio...</div>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
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
    hover: { scale: 1.05, rotateX: 10, rotateY: 10, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    initial: { opacity: 0, rotateX: -90 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: { duration: 1 }
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
  className="pt-36 pb-16 text-center"
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  variants={sectionVariants}
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <motion.img
      src={profile}
      alt="Profile Picture"
      className={`w-32 h-32 md:w-44 md:h-44 rounded-full border-4 ${darkMode ? 'border-cyan-400' : 'border-cyan-600'} shadow-2xl cursor-pointer object-cover`}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { type: "spring", stiffness: 300 }
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
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


      <motion.section id="about" className="px-6 pt-10 pb-20 text-center" {...sectionVariants}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        
        <p className={`text-base md:text-lg max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
  I'm <span className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-semibold`}>Sai Likhith Golagani</span> from Rajahmundry, Andhra Pradesh. I aim to leverage my skills in full-stack development and AI to build smart, user-centric solutions. I'm driven by innovation and continuous learning, and I seek to contribute meaningfully to impactful tech teams.<br /><br />
  
  With expertise in React.js, Node.js, Express.js, MongoDB, and modern DevOps tools like Docker and Jenkins, I build scalable, secure applications. I've led technical teams, participated in national-level hackathons like Smart India Hackathon 2024, and helped secure funding for a startup.<br /><br />
  
  My journey is fueled by curiosity, creativity, and a love for solving real-world problems with code. I believe in learning by building, growing through collaboration, and staying resilient through challenges.
</p>

      </motion.section>

      <motion.section id="projects" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-300'} backdrop-blur-sm p-6 rounded-2xl border shadow-lg text-left hover:shadow-2xl transition-shadow`}
              whileHover="hover"
              variants={hoverVariants}
            >
              <h3 className={`text-lg md:text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-3`}>{project.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 line-clamp-4`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'}`}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} text-sm font-semibold inline-flex items-center transition`}>View Code <FaExternalLinkAlt className="ml-2" /></a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
        <div className="max-w-6xl mx-auto text-left space-y-6">
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>C</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>C++</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Python</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>JavaScript</span>
            </div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Web Development</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>HTML</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>CSS</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>React.js</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Node.js</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Express.js</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>JWT Authentication</span>
            </div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Databases</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>SQL Server</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>MySQL</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>MongoDB</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>PostgreSQL</span>
            </div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Git</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>GitHub</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Docker</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Docker Compose</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Jenkins CI/CD</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Render</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Vercel</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Netlify</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Postman</span>
            </div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Computer Vision</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>OpenCV</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Haar Cascade</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Real-time Image Processing</span>
            </div>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-4`}>Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Problem-Solving</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Team Collaboration</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Project Coordination</span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'} rounded-lg font-medium`}>Resilience</span>
            </div>
          </div>
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
  <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certificates</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {certificates.map((certificate, idx) => (
      <motion.div
        key={idx}
        className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl shadow-lg text-left flex items-start gap-4 hover:shadow-xl transition-shadow`}
        whileHover={{ scale: 1.03 }}
      >
        <div className={`text-3xl ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{certificate.icon}</div>
        <h3 className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{certificate.name}</h3>
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
  <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h2>
  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
    {achievements.map((item, idx) => (
      <motion.div
        key={idx}
        className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow`}
        whileHover={{ scale: 1.03 }}
      >
        <div className={`text-4xl ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>{item.icon}</div>
        <div>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>{item.title}</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

      <motion.section id="blogs" className="px-6 py-20" {...sectionVariants}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Blogs</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl shadow-lg border hover:shadow-xl transition-shadow`}
              whileHover="hover"
              variants={hoverVariants}
            >
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>{blog.title}</h3>
              <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{blog.summary}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} font-semibold hover:underline inline-flex items-center`}>
                Read Blog <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      


      <motion.section id="education" className="px-6 py-20 text-center" {...sectionVariants}>
  <h2 className={`text-4xl md:text-5xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
  <div className="space-y-6 max-w-4xl mx-auto text-left">
    <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-shadow`}>
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Lovely Professional University</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Bachelor of Technology in Computer Science & Engineering</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>Aug 2022 - Present | CGPA: 7.54</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Jalandhar, Punjab</p>
    </div>
    <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-shadow`}>
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Tirumala College</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Intermediate (12th) - MPC</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>2020 - 2022 | Percentage: 92%</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Rajahmundry, Andhra Pradesh</p>
    </div>
    <div className={`p-6 ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm rounded-2xl border shadow-lg hover:shadow-xl transition-shadow`}>
      <h3 className={`text-xl font-bold ${darkMode ? 'text-cyan-300' : 'text-cyan-700'} mb-2`}>Oakwood School</h3>
      <p className={`text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Secondary Education (10th)</p>
      <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium mt-2`}>2019 - 2020 | Percentage: 90%</p>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Rajahmundry, Andhra Pradesh</p>
    </div>
  </div>
</motion.section>


      <motion.section id="contact" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
        <p className={`text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}>Feel free to reach out to me via social media, email, or phone. I'm always open to discussing new projects, creative ideas, or opportunities!</p>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="flex justify-center space-x-8 text-4xl">
            <a href="https://github.com/sailikhith1294" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} title="GitHub" aria-label="GitHub Profile">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/likhith-golagani/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} title="LinkedIn" aria-label="LinkedIn Profile">
              <FaLinkedin />
            </a>
            <a href="mailto:likhithgolagani1294@gmail.com" className={`${darkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition-all transform hover:scale-110`} title="Email" aria-label="Send Email">
              <FaEnvelope />
            </a>
          </div>
          <div className={`${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white/90 border-gray-300'} backdrop-blur-sm border rounded-2xl p-6 shadow-lg space-y-3`}>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Email:</strong> 
              <a href="mailto:likhithgolagani1294@gmail.com" className={`ml-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} hover:underline font-medium`}>likhithgolagani1294@gmail.com</a>
            </p>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Phone:</strong> 
              <a href="tel:+918179785050" className={`ml-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} hover:underline font-medium`}>+91 8179785050</a>
            </p>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Location:</strong> 
              <span className="ml-2">Rajahmundry, Andhra Pradesh 533103, India</span>
            </p>
          </div>
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
