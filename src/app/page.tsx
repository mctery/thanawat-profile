"use client";

import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

// Profile Data from GitHub: https://github.com/mctery
const profileData = {
  name: "Thanawat Lerdlamyong",
  title: "Web Developer & Trading EA",
  tagline: "DevOps & Finding Innovative Solutions",
  email: "tlerdlumyong@live.com",
  phone: "",
  location: "Thailand",
  github: "github.com/mctery",
  bio: "Hi! I'm Thanawat. Currently, I'm a freelance developer and interested in Full-Stack Web Development, Teading EA, Ai Traning and Prompt Engineering.",
};

const skills = [
  { category: "Frontend", items: ["JavaScript", "React", "HTML/CSS", "Material UI", "Next.js", "PHP", "Python"] },
  { category: "Backend", items: ["Node.js", "REST API", "Database", "Git", "GitHub", "Vercel"] },
  { category: "Learning", items: ["TypeScript", "React", "React Native", "Python", "Android", "ios"] },
];

const experiences = [
  {
    company: "Self-Learning & Personal Projects",
    position: "Web Developer",
    period: "2023 - Current",
    description: "พัฒนาโปรเจกต์ส่วนตัวเพื่อเรียนรู้เทคโนโลยีใหม่ๆ โดยเฉพาะ Blockchain และ Web3 Development",
    highlights: ["JavaScript", "React", "Blockchain"],
  },
  {
    company: "GitHub Open Source",
    position: "Contributor",
    period: "กำลังเรียนรู้",
    description: "ศึกษาและมีส่วนร่วมกับโปรเจกต์ Open Source บน GitHub เพื่อพัฒนาทักษะการเขียนโค้ด",
    highlights: ["QRApp", "Dashboard Templates", "HTML/CSS"],
  },
];

const education = [
  {
    institution: "Self-Taught Developer",
    degree: "เรียนรู้ด้วยตนเองผ่าน Online Courses และ Documentation",
    period: "กำลังเรียนรู้",
    gpa: "",
  },
];

const projects = [
  {
    name: "QRApp",
    description: "แอปพลิเคชันสร้างและอ่าน QR Code พัฒนาด้วย JavaScript",
    tech: ["JavaScript", "HTML/CSS", "QR Code API"],
  },
  {
    name: "Material Dashboard React",
    description: "Dashboard UI Template สำหรับ React พร้อม Material Design",
    tech: ["React", "Material UI", "JavaScript"],
  },
  {
    name: "Paper Dashboard React",
    description: "Dashboard Template ที่สวยงามสำหรับ React Applications",
    tech: ["React", "Bootstrap", "JavaScript"],
  },
];

const certifications = [
  { name: "GitHub Pull Shark Badge (x2)", year: "GitHub" },
  { name: "GitHub YOLO Badge", year: "GitHub" },
  { name: "11 Public Repositories", year: "GitHub" },
];

const springConfig = { tension: 120, friction: 14 };

export default function Home() {
  // Individual refs for each section
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expRef, expInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [eduRef, eduInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Spring animations for each section
  const heroSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: heroInView ? 0 : 60, opacity: heroInView ? 1 : 0 },
    config: springConfig,
    delay: 0,
  });

  const aboutSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: aboutInView ? 0 : 60, opacity: aboutInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  const skillsSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: skillsInView ? 0 : 60, opacity: skillsInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  const expSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: expInView ? 0 : 60, opacity: expInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  const eduSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: eduInView ? 0 : 60, opacity: eduInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  const projectsSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: projectsInView ? 0 : 60, opacity: projectsInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  const contactSpring = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: contactInView ? 0 : 60, opacity: contactInView ? 1 : 0 },
    config: springConfig,
    delay: 100,
  });

  return (
    <main className="min-h-screen">
      {/* PS3 XMB Wave Background */}
      <div className="ps3-waves-container">
        <div className="ps3-stars"></div>
        <div className="ps3-wave ps3-wave-4"></div>
        <div className="ps3-wave ps3-wave-1"></div>
        <div className="ps3-wave ps3-wave-2"></div>
        <div className="ps3-wave ps3-wave-3"></div>
        <div className="ps3-wave-glow"></div>
      </div>

      {/* Navigation */}
      <nav className="liquid-nav">
        <div className="nav-container">
          <div className="nav-logo">Thanawat.fun</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About me</a>
            <a href="#skills" className="nav-link">Skills and Abilities</a>
            <a href="#experience" className="nav-link">Work Experience</a>
            <a href="#projects" className="nav-link">Workings</a>
            <a href="#contact" className="nav-link">Contact me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section" ref={heroRef}>
        <animated.div className="hero-content" style={heroSpring}>
          <div className="hero-text">
            <p className="hero-greeting">About me</p>
            <h1 className="hero-name">{profileData.name}</h1>
            <h2 className="hero-title">{profileData.title}</h2>
            <p className="hero-tagline">{profileData.tagline}</p>
            <div className="hero-buttons">
              <a href="#contact" className="liquid-button primary">Contact me</a>
              <a href="#projects" className="liquid-button secondary">My works</a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="liquid-glass profile-frame">
              <Image
                src="/assets/profile.jpg"
                width={280}
                height={280}
                alt="Profile Picture"
                className="profile-image"
              />
            </div>
          </div>
        </animated.div>
      </section>

      {/* About Section */}
      <section id="about" className="section" ref={aboutRef}>
        <animated.div className="liquid-glass section-card" style={aboutSpring}>
          <h2 className="section-title">เกี่ยวกับผม</h2>
          <div className="about-content">
            <p className="about-bio">{profileData.bio}</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{profileData.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🔗</span>
                <span>Dev and Teadings</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📚</span>
                <span>Learn about Investing, Money Management, Trading and AI</span>
              </div>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" ref={skillsRef}>
        <animated.div style={skillsSpring}>
          <h2 className="section-title">Skills and Abilities</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="liquid-glass skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" ref={expRef}>
        <animated.div style={expSpring}>
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="liquid-glass timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-position">{exp.position}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-highlights">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span key={hIndex} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" ref={eduRef}>
        <animated.div style={eduSpring}>
          <h2 className="section-title">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="liquid-glass edu-card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                </div>
                <div className="edu-meta">
                  <span className="edu-period">{edu.period}</span>
                  {edu.gpa && <span className="edu-gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
            </div>
          ))}

          {/* GitHub Achievements */}
          <h3 className="subsection-title">GitHub Achievements</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="liquid-glass cert-card">
                <span className="cert-icon">🏆</span>
                <p className="cert-name">{cert.name}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </animated.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" ref={projectsRef}>
        <animated.div style={projectsSpring}>
          <h2 className="section-title">Workings</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="liquid-glass project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" ref={contactRef}>
        <animated.div className="liquid-glass contact-card" style={contactSpring}>
          <h2 className="section-title">Contact me</h2>
          <p className="contact-intro">by email or github</p>
          <div className="contact-grid">
            <a href={`mailto:${profileData.email}`} className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{profileData.email}</span>
            </a>
            <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{profileData.github}</span>
            </a>
          </div>
        </animated.div>
      </section>

      {/* Footer */}
      <footer className="liquid-footer">
        <p>© 2025 {profileData.name} — Inspired by PlayStation 3 XMB</p>
      </footer>
    </main>
  );
}
