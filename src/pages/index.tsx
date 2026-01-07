import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "./index.module.css";

// Lazy load Three.js component for SSR compatibility
const ThreeBackground = () => (
  <BrowserOnly fallback={<div className={styles.fallbackBg} />}>
    {() => {
      const Component = require("@site/src/components/ThreeBackground").default;
      return <Component />;
    }}
  </BrowserOnly>
);

// ===== SKILLS DATA =====
const skills = [
  {
    icon: "🐧",
    title: "Embedded Linux",
    description: "Building and optimizing embedded Linux systems, kernel configuration, and system-level programming.",
    tags: ["Yocto", "Buildroot", "Kernel"],
  },
  {
    icon: "🌐",
    title: "IoT & Networking",
    description: "Designing connected devices and network solutions with various protocols and architectures.",
    tags: ["MQTT", "Modbus", "TCP/IP"],
  },
  {
    icon: "🖥️",
    title: "Desktop Applications",
    description: "Creating cross-platform desktop applications with modern UI frameworks.",
    tags: ["Qt", "QML", "PyQt5"],
  },
  {
    icon: "🐍",
    title: "Python Development",
    description: "Backend development, automation scripts, and data processing applications.",
    tags: ["Flask", "FastAPI", "Pandas"],
  },
  {
    icon: "🐳",
    title: "DevOps & Containers",
    description: "Containerization, CI/CD pipelines, and infrastructure automation.",
    tags: ["Docker", "Git", "Linux"],
  },
  {
    icon: "🔧",
    title: "System Integration",
    description: "Integrating hardware and software systems, CAN bus, and automotive protocols.",
    tags: ["CAN", "OBD-II", "RS485"],
  },
];

// ===== PROJECTS DATA =====
const projects = [
  {
    icon: "🏎️",
    title: "Smart Karting Cluster",
    description: "QT C++ dashboard for electric kart with real-time motor controller and BMS telemetry via CAN bus.",
    tags: ["Qt", "QML", "CAN", "Linux"],
    link: "/blog/karting-cluster",
  },
  {
    icon: "🚗",
    title: "Digital Cluster with OBD-II",
    description: "Car digital cluster using ELM327 Bluetooth OBD-II reader for real-time vehicle data display.",
    tags: ["Qt", "Bluetooth", "OBD-II"],
    link: "/blog/digitalCluster",
  },
  {
    icon: "🏠",
    title: "MQTT Smart Home Client",
    description: "PyQt5 desktop application for IoT home automation with temperature control and device management.",
    tags: ["Python", "PyQt5", "MQTT"],
    link: "/blog/mqttclient",
  },
];

// ===== TIMELINE DATA =====
const experience = [
  {
    date: "Apr 2025 - Present",
    title: "IoT Systems R&D Engineer",
    company: "SmartFactory",
    description: "Developing IoT systems and R&D projects for industrial automation solutions.",
  },
  {
    date: "Dec 2024 - Mar 2025",
    title: "Industrial Network Engineer",
    company: "Portel Teknoloji",
    description: "Network design, wireless networking, and industrial network solutions.",
  },
  {
    date: "Jun 2022 - Jun 2024",
    title: "Software & Network Specialist",
    company: "Mikrodev",
    description: "Designed web servers for 4G routers and RTU devices. Developed interfaces for system monitoring, network configuration, firewall, NAT, IPSEC, and OpenVPN settings.",
  },
  {
    date: "Dec 2021 - Apr 2022",
    title: "System And Network Specialist",
    company: "Fenerbahçe University",
    description: "TCP/IP, LAN & WAN technologies, Switching, Routing, VMWare/Hyper-V virtualization, Linux and Windows Server administration.",
  },
  {
    date: "Aug 2019 - Jan 2020",
    title: "Engineering Intern",
    company: "NEVA Automation",
    description: "Building Automation and Energy Management SCADA system development with Schneider Building Operation Workstation for hospitals.",
  },
];

// ===== HERO SECTION =====
function HeroSection() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      {/* Three.js 3D Background */}
      <ThreeBackground />

      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Hi, I'm Selcuk
          </Heading>
          <p className={styles.heroSubtitle}>
            Software & System Engineer crafting embedded Linux systems, IoT solutions, and desktop applications
          </p>
          <div className={styles.heroButtons}>
            <Link className="btn btn--primary" to="/blog">
              View My Work
            </Link>
            <Link
              className="btn btn--outline"
              href="mailto:selcukgok29@gmail.com"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow} />
      </div>
    </header>
  );
}

// ===== SKILLS SECTION =====
function SkillsSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Skills & Expertise
        </Heading>
        <p className={styles.sectionSubtitle}>
          Technologies and tools I work with to build reliable, efficient solutions
        </p>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillTitle}>{skill.title}</h3>
              <p className={styles.skillDescription}>{skill.description}</p>
              <div className={styles.skillTags}>
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.skillTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PROJECTS SECTION =====
function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Featured Projects
        </Heading>
        <p className={styles.sectionSubtitle}>
          Some of my recent work in IoT, embedded systems, and desktop applications
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>{project.icon}</div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className={styles.projectLink} to={project.link}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== TIMELINE SECTION =====
function TimelineSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Experience
        </Heading>
        <p className={styles.sectionSubtitle}>
          My professional journey in software engineering
        </p>
        <div className={styles.timeline}>
          {experience.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDate}>{item.date}</div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <div className={styles.timelineCompany}>{item.company}</div>
              <p className={styles.timelineDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== ABOUT SECTION =====
function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          About Me
        </Heading>
        <div className={styles.aboutContent}>
          <div className={styles.aboutAvatar}>SG</div>
          <div className={styles.aboutText}>
            <p>
              I'm Selcuk Gok, a software engineer based in Istanbul with over 4
              years of professional experience. I specialize in building embedded
              Linux systems, IoT applications, and cross-platform desktop software.
            </p>
            <p>
              My expertise spans embedded Linux, Linux networking, industrial
              protocols (Modbus, CAN), and modern desktop development with Qt/QML.
              I'm passionate about creating efficient, reliable solutions that
              bridge hardware and software.
            </p>
            <p>
              When I'm not coding, you'll find me at the gym or exploring new
              technologies. Have a project in mind?{" "}
              <a href="mailto:selcukgok29@gmail.com">Let's talk!</a>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Blog Posts</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT SECTION =====
function ContactSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Let's Connect
        </Heading>
        <p className={styles.sectionSubtitle}>
          Interested in working together or have questions? Feel free to reach out!
        </p>
        <div className={styles.contactButtons}>
          <a
            href="mailto:selcukgok29@gmail.com"
            className={clsx(styles.contactBtn, styles.contactBtnPrimary)}
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/selcukgok"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/selcukgk29"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/15EO4LtaYVvO-T2a_baYcC1FYQONeYMSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== MAIN PAGE =====
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Selcuk Gok - Software Engineer"
      description="Software & System Engineer specializing in embedded Linux, IoT applications, and desktop software development. Based in Istanbul, Turkey."
    >
      <HeroSection />
      <main>
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <AboutSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
