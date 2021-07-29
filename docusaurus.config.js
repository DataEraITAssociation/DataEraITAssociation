const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Wanna start coding",
  tagline:
    "Follow our examples to learn coding step by step.",
  url: "https://doc.dataera.ca",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DataEra IT Association", // Usually your GitHub org/user name.
  projectName: "DataEra Projects", // Usually your repo name.
  
  themeConfig: {
    navbar: {
      title: "DataEra Projects",
      logo: {
        alt: "DataEra IT Association",
        src: "img/Logo.png",
        href: "/",
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
            { to: "/python",
              label: "Python", 
              position: "left",
              type: 'catagory',
  
              items: [
                'Python',
                {
                  type: 'category',
                  label: 'python',
                  items: ['WinInstallation', 'MacInstallation'],
                },
              ],

            
            },
            {
              to: "/docs/JavaScript/JavaScript",
              label: "JavaScript",
              position: "left"
            },
            { to: "/java", label: "Java", position: "left" },
            {
              to: "/docs/Robotics/Robotics",
              label: "Robotics",
              position: "left"
            },
            {
              to: "/docs/Data_Science/Data_Science",
              label: "Data Science",
              position: "left"
            },
            { to: "/unity", label: "Unity", position: "left" },
            { to: "/ccc", label: "CCC", position: "left" }
          ]
        },
        { to: "/contributors", label: "Contributors", position: "left" },

        { to: "/blog", label: "Blog", position: "right" },
        { href: "https://dataera.ca", label: "DataEra.ca Home", position: "right" },
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
              label: "Discord",
              href: "https://discord.gg/KujcKyywNW"
            },
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
              href: "https://github.com/DataEraITAssociation/DataEraITAssociation"
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
  plugins: ['docusaurus-plugin-sass'],
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
