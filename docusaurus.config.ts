import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Selcuk Gok",
  tagline: "Software & System Engineer | Embedded Linux | IoT | Desktop Applications",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://selcukgok.com.tr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "selgk", // Usually your GitHub org/user name.
  projectName: "selgk.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Selcuk Gok",
      logo: {
        alt: "Selcuk Gok Logo",
        src: "img/logo.svg",
      },
      hideOnScroll: false,
      items: [
        { to: "/", label: "Home", position: "left" },
        { to: "/blog", label: "Projects", position: "left" },
        {
          href: "https://drive.google.com/file/d/15EO4LtaYVvO-T2a_baYcC1FYQONeYMSV/view?usp=sharing",
          position: "left",
          label: "Resume",
          className: "navbar__item--resume",
        },
        {
          href: "mailto:selcukgok29@gmail.com",
          label: "Contact",
          position: "left",
          className: "navbar__item--contact",
        },
        {
          href: "https://github.com/selcukgk29",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
          label: " ",
        },
        {
          href: "https://www.linkedin.com/in/selcukgok",
          position: "right",
          className: "header-linkedin-link",
          "aria-label": "LinkedIn",
          label: " ",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              to: "/",
            },
            {
              label: "Projects",
              to: "/blog",
            },
            {
              label: "Resume",
              href: "https://drive.google.com/file/d/15EO4LtaYVvO-T2a_baYcC1FYQONeYMSV/view?usp=sharing",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/selcukgok",
            },
            {
              label: "GitHub",
              href: "https://github.com/selcukgk29",
            },
            {
              label: "Email",
              href: "mailto:selcukgok29@gmail.com",
            },
          ],
        },
        {
          title: "Tech Stack",
          items: [
            {
              label: "Embedded Linux",
              to: "/blog/tags/linux",
            },
            {
              label: "Python",
              to: "/blog/tags/python",
            },
            {
              label: "MQTT & IoT",
              to: "/blog/tags/mqtt",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Selcuk Gok. Built with passion.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
