
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
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl animate-pulse">
        Fetching bits and bytes..
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
    <div className={`${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-black'} transition-all duration-500 min-h-screen scroll-smooth font-sans relative`}>

          <Particles init={particlesInit} options={particlesOptions} />

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 px-6 py-4 flex justify-between items-center shadow-xl border-b border-gray-700">
        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold tracking-wide">
          Sai Likhith Golagani
        </motion.h1>
        <motion.div className="space-x-4 text-sm font-medium" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#certificates" className="hover:text-cyan-400 transition">Certificates</a>
          <a href="#achievements" className="hover:text-cyan-400 transition">Achievements</a>
          <a href="#blogs" className="hover:text-cyan-400 transition">Blogs</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>

          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-cyan-600 px-3 py-1.5 rounded-full hover:bg-cyan-700 transition text-white">
            {darkMode ? 'Light' : 'Dark'} Mode
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
        transition: { type: "spring", stiffness: 300 }
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


      <motion.section id="about" className="px-6 pt-10 pb-20 text-center" {...sectionVariants}>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
  I'm <span className="text-cyan-400 font-semibold">Sai Likhith Golagani</span> from Rajahmundry, Andhra Pradesh. I aim to leverage my skills in full-stack development and AI to build smart, user-centric solutions. I'm driven by innovation and continuous learning, and I seek to contribute meaningfully to impactful tech teams.<br /><br />
  
  With expertise in React.js, Node.js, Express.js, MongoDB, and modern DevOps tools like Docker and Jenkins, I build scalable, secure applications. I've led technical teams, participated in national-level hackathons like Smart India Hackathon 2024, and helped secure funding for a startup.<br /><br />
  
  My journey is fueled by curiosity, creativity, and a love for solving real-world problems with code. I believe in learning by building, growing through collaboration, and staying resilient through challenges.
</p>

      </motion.section>

      <motion.section id="projects" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-black/30 p-6 rounded-xl border border-gray-700 shadow-lg text-left"
              whileHover="hover"
              variants={hoverVariants}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.name}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="text-xs text-gray-400 mb-3">{project.tech.join(', ')}</div>
              <a href={project.link} target="_blank" className="text-cyan-400 text-sm inline-flex items-center">View Code <FaExternalLinkAlt className="ml-2" /></a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">C</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">C++</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Python</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">JavaScript</span>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Web Development</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">HTML</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">CSS</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">React.js</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Node.js</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Express.js</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">JWT Authentication</span>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Databases</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">SQL Server</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">MySQL</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">MongoDB</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">PostgreSQL</span>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Git</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">GitHub</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Docker</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Docker Compose</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Jenkins CI/CD</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Render</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Vercel</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Netlify</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Postman</span>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Computer Vision</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">OpenCV</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Haar Cascade</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Real-time Image Processing</span>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Problem-Solving</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Team Collaboration</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Project Coordination</span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-lg">Resilience</span>
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
  <h2 className="text-3xl font-bold mb-8">Certificates</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {certificates.map((certificate, idx) => (
      <motion.div
        key={idx}
        className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-md text-left flex items-start gap-4"
        whileHover={{ scale: 1.03 }}
      >
        <div className="text-3xl text-cyan-400">{certificate.icon}</div>
        <h3 className="text-lg font-semibold text-cyan-300">{certificate.name}</h3>
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
          <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
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
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Read Blog
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      


      <motion.section id="education" className="px-6 py-20 text-center" {...sectionVariants}>
  <h2 className="text-3xl font-bold mb-8">Education</h2>
  <div className="space-y-6 max-w-3xl mx-auto text-left">
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
      <h3 className="text-xl font-semibold text-cyan-300">Lovely Professional University</h3>
      <p className="text-sm text-gray-300">Bachelor of Technology in Computer Science & Engineering</p>
      <p className="text-sm text-cyan-400 mt-1">Aug 2022 - Present | CGPA: 7.54</p>
      <p className="text-sm text-gray-400 mt-2">Jalandhar, Punjab</p>
    </div>
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
      <h3 className="text-xl font-semibold text-cyan-300">Tirumala College</h3>
      <p className="text-sm text-gray-300">Intermediate (12th) - MPC</p>
      <p className="text-sm text-cyan-400 mt-1">2020 - 2022 | Percentage: 92%</p>
      <p className="text-sm text-gray-400 mt-2">Rajahmundry, Andhra Pradesh</p>
    </div>
    <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
      <h3 className="text-xl font-semibold text-cyan-300">Oakwood School</h3>
      <p className="text-sm text-gray-300">Secondary Education (10th)</p>
      <p className="text-sm text-cyan-400 mt-1">2019 - 2020 | Percentage: 90%</p>
      <p className="text-sm text-gray-400 mt-2">Rajahmundry, Andhra Pradesh</p>
    </div>
  </div>
</motion.section>


      <motion.section id="contact" className="px-6 py-20 text-center" {...sectionVariants}>
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-gray-300 mb-4">Feel free to reach out to me via social media, email, or phone!</p>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="https://github.com/sailikhith1294" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/likhith-golagani/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" title="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:likhityhgolagani1294@gmail.com" className="hover:text-cyan-400 transition" title="Email"><FaEnvelope /></a>
          </div>
          <div className="text-gray-300 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:likhityhgolagani1294@gmail.com" className="text-cyan-400 hover:underline">likhityhgolagani1294@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918179785050" className="text-cyan-400 hover:underline">+91 8179785050</a></p>
            <p><strong>Location:</strong> Rajahmundry, Andhra Pradesh 533103</p>
          </div>
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
