"use client";

import Image from "next/image";
import { animated } from "@react-spring/web";
import { useAnimatedSection } from "@/hooks/useAnimatedSection";
import {
  profileData,
  navLinks,
  skills,
  experiences,
  education,
  projects,
  certifications,
} from "@/data/profile";

export default function Home() {
  const hero = useAnimatedSection(0);
  const about = useAnimatedSection();
  const skillsSection = useAnimatedSection();
  const exp = useAnimatedSection();
  const edu = useAnimatedSection();
  const projectsSection = useAnimatedSection();
  const contact = useAnimatedSection();

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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section" ref={hero.ref}>
        <animated.div className="hero-content" style={hero.style}>
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
      <section id="about" className="section" ref={about.ref}>
        <animated.div className="liquid-glass section-card" style={about.style}>
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-bio">{profileData.bio}</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>{profileData.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🔗</span>
                <span>Dev and Trading</span>
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
      <section id="skills" className="section" ref={skillsSection.ref}>
        <animated.div style={skillsSection.style}>
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
      <section id="experience" className="section" ref={exp.ref}>
        <animated.div style={exp.style}>
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div key={index} className="liquid-glass timeline-item">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{experience.company}</h3>
                    <p className="timeline-position">{experience.position}</p>
                  </div>
                  <span className="timeline-period">{experience.period}</span>
                </div>
                <p className="timeline-description">{experience.description}</p>
                <div className="timeline-highlights">
                  {experience.highlights.map((highlight, hIndex) => (
                    <span key={hIndex} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" ref={edu.ref}>
        <animated.div style={edu.style}>
          <h2 className="section-title">Education</h2>
          {education.map((eduItem, index) => (
            <div key={index} className="liquid-glass edu-card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-institution">{eduItem.institution}</h3>
                  <p className="edu-degree">{eduItem.degree}</p>
                </div>
                <div className="edu-meta">
                  <span className="edu-period">{eduItem.period}</span>
                  {eduItem.gpa && <span className="edu-gpa">GPA: {eduItem.gpa}</span>}
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
      <section id="projects" className="section" ref={projectsSection.ref}>
        <animated.div style={projectsSection.style}>
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
      <section id="contact" className="section" ref={contact.ref}>
        <animated.div className="liquid-glass contact-card" style={contact.style}>
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
