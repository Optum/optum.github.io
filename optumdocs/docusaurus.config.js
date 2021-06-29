module.exports = {
  title: "Optum Open Source",
  tagline: "Open Collaboration to Solve the Biggest Problems in Healthcare",
  url: "https://optum.github.io",
  baseUrl: "/",
  favicon: "img/open_source.svg",
  organizationName: "Optum", // Usually your GitHub org/user name.
  projectName: "optumdocs", // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Optum Open Source",
      logo: {
        alt: "Optum Logo",
        src: "img/Optum(R)_4C.png",
      },
      items: [
        {
          label: "Open Source Program Office",
          position: "left",
          items: [
            {
              to: "contributors",
              label: "Engineers",
              position: "left",
            },
            { to: "communities", label: "Projects", position: "left" },

            { to: "philsophy", label: "Philosophy", position: "left" },
            {
              to: "standards",
              label: "Standards and Best Practices",
              position: "left",
            },
          ],
        },

        {
          label: "Blog",
          position: "left",
          items: [
            {
              label: "Employee Culture",
              href: "/blogculture",
            },
            {
              label: "Open Source",
              href: "/blogopensource",
            },
            {
              label: "ML/AI",
              href: "/blogmlai",
            },
            {
              label: "Tech Talks",
              href: "/blogtechtalks",
            },
          ],
        },
        {
          label: "Incubator",
          position: "left",
          items: [
            {
              label: "Project Highlights",
              to: "incubatorhighlights",
            },
          ],
        },
        { to: "communities", label: "Communities", position: "left" },
        {
          to: "contributors",
          label: "Contributors",
          position: "left",
        },
        {
          label: "Activities",
          position: "left",
          items: [
            {
              label: "Conferences",
              to: "activityconferences",
            },
            {
              label: "Events",
              to: "activityevents",
            },
            {
              label: "Competition",
              to: "activitycompetition",
            },
          ],
        },
        {
          label: "Learning",
          position: "left",
          items: [
            {
              label: "OTU",
              to: "learningotu",
            },
          ],
        },
        // {
        //   href: "https://www.youtube.com/watch?v=9sdASFlw0As",
        //   label: "Why Contribute to Open Source?",
        //   position: "right",
        // },
        {
          href: "https://github.com/Optum",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Our Projects",
              to: "communities",
            },
            {
              label: "Our Engineers",
              to: "contributors",
            },
          ],
        },
        {
          title: "Administration",
          items: [
            {
              label: "Contributor Code of Conduct",
              to: "docs/optumcoc",
            },
            {
              label: "Individual Contributor License Agreement",
              to: "docs/optumicla",
            },
            {
              label: "Project Licensing",
              to: "docs/optumlic",
            },
            {
              label: "Code Attribution",
              to: "docs/attribution",
            },
          ],
        },
        {
          title: "Work With Us",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Optum",
            },
            {
              label: "opensource@optum.com",
              href: "mailto:opensource@optum.com",
            },
            {
              label: "Career Opportunities",
              href:
                "https://careers.unitedhealthgroup.com/search-jobs?kw=&sp=&re=US&jf=20",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: `Terms of use`,
              href: `https://www.optum.com/terms-of-use.html`,
            },
            {
              label: `Privacy`,
              href: `https://www.optum.com/privacy-policy.html`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Optum, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "second-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "blogculture",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogculture",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "first-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "blogopensource",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogopensource",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "ml-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "blogmlai",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogmlai",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "third-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "blogtechtalks",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./blogtechtalks",
      },
    ],
  ],
};
