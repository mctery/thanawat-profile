"use client";

import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

// Mock Profile Data
const profileData = {
  name: "ธนวัฒน์ สุขใจดี",
  nameEn: "Thanawat Sukjaidee",
  title: "Full Stack Developer",
  tagline: "สร้างสรรค์ประสบการณ์ดิจิทัลที่น่าจดจำ",
  email: "thanawat@example.com",
  phone: "+66 98 765 4321",
  location: "กรุงเทพมหานคร, ประเทศไทย",
  github: "github.com/thanawat",
  linkedin: "linkedin.com/in/thanawat",
  bio: "นักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างเว็บแอปพลิเคชันที่สวยงามและใช้งานง่าย มีประสบการณ์กว่า 5 ปีในการพัฒนา Full Stack ชอบเรียนรู้เทคโนโลยีใหม่ๆ และแบ่งปันความรู้กับชุมชนนักพัฒนา",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code", "Postman", "Jira"] },
];

const experiences = [
  {
    company: "TechVision Thailand",
    position: "Senior Full Stack Developer",
    period: "2022 - ปัจจุบัน",
    description: "พัฒนาระบบ E-commerce ขนาดใหญ่รองรับผู้ใช้กว่า 1 ล้านคน ปรับปรุง Performance ลดเวลาโหลดลง 40%",
    highlights: ["Lead team 5 คน", "Microservices Architecture", "AWS Infrastructure"],
  },
  {
    company: "Digital Solutions Co., Ltd.",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "พัฒนาเว็บแอปพลิเคชันสำหรับลูกค้าองค์กร ทำงานร่วมกับทีม UX/UI ในการสร้าง Design System",
    highlights: ["React + Node.js", "GraphQL API", "Agile/Scrum"],
  },
  {
    company: "StartUp Hub",
    position: "Junior Developer",
    period: "2019 - 2020",
    description: "เริ่มต้นอาชีพนักพัฒนา เรียนรู้ Best Practices และร่วมพัฒนา MVP สำหรับ Startups หลายราย",
    highlights: ["JavaScript/TypeScript", "REST API", "MySQL"],
  },
];

const education = [
  {
    institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
    period: "2015 - 2019",
    gpa: "3.45",
  },
];

const projects = [
  {
    name: "ShopSmart E-commerce",
    description: "แพลตฟอร์ม E-commerce ครบวงจร รองรับการชำระเงินหลายช่องทาง",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    name: "TaskFlow Pro",
    description: "แอปจัดการงานและโปรเจกต์สำหรับทีม พร้อม Real-time collaboration",
    tech: ["React", "Socket.io", "MongoDB"],
  },
  {
    name: "HealthTrack",
    description: "แอปติดตามสุขภาพส่วนบุคคล เชื่อมต่อกับ Wearable devices",
    tech: ["React Native", "Firebase", "HealthKit"],
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", year: "2023" },
  { name: "Google Professional Cloud Developer", year: "2022" },
  { name: "Meta Frontend Developer Certificate", year: "2022" },
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
      {/* Floating Orbs Background */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className="liquid-nav">
        <div className="nav-container">
          <div className="nav-logo">Thanawat.fun</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">เกี่ยวกับ</a>
            <a href="#skills" className="nav-link">ทักษะ</a>
            <a href="#experience" className="nav-link">ประสบการณ์</a>
            <a href="#projects" className="nav-link">ผลงาน</a>
            <a href="#contact" className="nav-link">ติดต่อ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section" ref={heroRef}>
        <animated.div className="hero-content" style={heroSpring}>
          <div className="hero-text">
            <p className="hero-greeting">สวัสดี, ผมชื่อ</p>
            <h1 className="hero-name">{profileData.name}</h1>
            <h2 className="hero-title">{profileData.title}</h2>
            <p className="hero-tagline">{profileData.tagline}</p>
            <div className="hero-buttons">
              <a href="#contact" className="liquid-button primary">ติดต่อผม</a>
              <a href="#projects" className="liquid-button secondary">ดูผลงาน</a>
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
                <span className="detail-icon">💼</span>
                <span>5+ ปี ประสบการณ์</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <span>วศ.บ. วิศวกรรมคอมพิวเตอร์</span>
              </div>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" ref={skillsRef}>
        <animated.div style={skillsSpring}>
          <h2 className="section-title">ทักษะความสามารถ</h2>
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
          <h2 className="section-title">ประสบการณ์ทำงาน</h2>
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
          <h2 className="section-title">การศึกษา</h2>
          {education.map((edu, index) => (
            <div key={index} className="liquid-glass edu-card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                </div>
                <div className="edu-meta">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-gpa">GPA: {edu.gpa}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <h3 className="subsection-title">ใบรับรอง & Certificates</h3>
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
          <h2 className="section-title">ผลงานที่น่าสนใจ</h2>
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
          <h2 className="section-title">ติดต่อผม</h2>
          <p className="contact-intro">สนใจร่วมงานหรือมีโปรเจกต์อยากปรึกษา? ติดต่อผมได้เลยครับ!</p>
          <div className="contact-grid">
            <a href={`mailto:${profileData.email}`} className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{profileData.email}</span>
            </a>
            <a href={`tel:${profileData.phone}`} className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{profileData.phone}</span>
            </a>
            <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{profileData.github}</span>
            </a>
            <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{profileData.linkedin}</span>
            </a>
          </div>
        </animated.div>
      </section>

      {/* Footer */}
      <footer className="liquid-footer">
        <p>© 2025 {profileData.name} — สร้างด้วย Next.js & React Spring</p>
      </footer>
    </main>
  );
}
