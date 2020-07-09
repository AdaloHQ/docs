module.exports = {
  title: "Adalo",
  tagline: "Developer Documentation",
  url: "https://developers.adalo.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "AdaloHQ", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Adalo Logo",
        src: "img/adalo-logo-black.png",
        srcDark: "img/adalo-logo-white.png",
      },
      links: [
        {
          href: "https://github.com/AdaloHQ",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "marketplace/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href:
                "https://join.slack.com/t/adalo-community/shared_invite/enQtNTUyMTcwNzE4NDE3LWVkMWNjY2MxNzhlMjE0Nzc5OTA5Y2Y0YjgwMGEyYzZiZDcwNGFiYjNmMWJmNTBjNDA3NTBjOTdiZmQ4NDVmMGE",
            },
            {
              label: "Forum",
              href: "https://forum.adalo.com",
            },
            {
              label: "Roadmap",
              href: "https://ideas.adalo.com",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/AdaloHQ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/AdaloHQ",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/AdaloHQ",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/AdaloHQ",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adalo. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/palenight"),
      additionalLanguages: ["bash"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
