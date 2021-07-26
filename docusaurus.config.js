const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DataEra It Association Project",
  tagline:
    "Learn Coding with DataEra IT Association - Follow our examples to learn coding step by step.",
  url: "https://doc.dataera.ca",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "DataEraIt Association Project", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "DataEra Project Hub",
      logo: {
        alt: "DataEra IT Association",
        src: "img/bad_logo.png",
        href: "https://dataera.ca/"
      },
      items: [
        {
          position: "left",
          label: "Tutorials",
          items: [
            {
              to: "/docs/Docusaurus/GetStarted",
              label: "Docusaurus",
              position: "left"
            },
            { to: "/python", label: "Python", position: "left" },
            {
              to: "/docs/JavaScript/JavaScript",
              label: "JavaScript",
              position: "left"
            },
            { to: "/java", label: "Java", position: "left" },
            { to: "/robotics", label: "Robotics", position: "left" },
            { to: "/dataScience", label: "Data Science", position: "left" },
            { to: "/unity", label: "Unity", position: "left" },
            { to: "/ccc", label: "CCC", position: "left" }
          ]
        },
        { to: "/contributors", label: "Contributors", position: "left" },

        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/DataEraITAssociation/DataEraITAssociation",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DataEra IT Association. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/DataEraITAssociation/DataEraITAssociation/tree/main/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/DataEraITAssociation/DataEraITAssociation/tree/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
