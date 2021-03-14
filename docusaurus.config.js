module.exports = {
  title: "Amplify CLI Monorepo Tour",
  tagline: "A guide for software developers by software developers",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MLH-Fellowship", // Usually your GitHub org/user name.
  projectName: "amplify-cli-monorepo-tour", // Usually your repo name.
  themeConfig: {
    colorMode: { defaultMode: "dark" },
    navbar: {
      title: "Amplify CLI Monorepo Tour",
      style: "dark",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour",
          label: "View on GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "AWS Amplify Logo",
        src: "img/logo.svg",
        href: "https://aws.amazon.com/amplify/",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Amplify CLI",
              to: "docs/",
            },
            {
              label: "amplify-util-mock",
              to: "docs/amplify-util-mock/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Official GitHub",
              href: "https://github.com/aws-amplify",
            },
            {
              label: "Discord",
              href: "https://discord.gg/amplify",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/AWSAmplify",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "View on GitHub",
              href:
                "https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MLH-Fellowship. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
