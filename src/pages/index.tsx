import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <div className="container" style={{ marginTop: "-36px" }}>
      <h3
        style={{
          fontSize: "36px",
          color: "#212121",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        About Me
      </h3>
      <div style={{ textAlign: "justify" }}>
        <p style={{ fontSize: "18px", color: "#666", fontWeight: 500 }}>
          My name is Selcuk Gok, and I'm a software engineer based in Istanbul
          with over 4 years of professional experience. I specialize in building
          websites and IoT applications for causes that are important to me. My
          expertise spans embedded Linux systems, Linux networking, IoT
          applications, and software development.
        </p>
        <p style={{ fontSize: "18px", color: "#666", fontWeight: 500 }}>
          In the few hours when I’m not programming, you’ll find me at the gym
          :)
        </p>
        <p style={{ fontSize: "18px", color: "#666", fontWeight: 500 }}>
          Have questions or interested in working with me? Feel free to{" "}
          <a href="mailto:selcukgok29@gmail.com">contact me.</a>
        </p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="My name’s Selcuk Gok. I’m a software engineer based in the Istanbul area. I have 4+ years of professional experience and counting. I work as building websites or IOT applications for causes I care about. I gained experience in embedded Linux systems, Linux networking, IoT applications and software development."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutSection />
      </main>
    </Layout>
  );
}
