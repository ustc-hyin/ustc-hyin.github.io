// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications are listed in reverse chronological order. * denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Most of my research has code open-sourced at GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-started-a-research-internship-at-xiaomi-milm-plus-after-completing-my-internship-at-tencent-working-on-post-training-mllms-for-temporal-video-grounding-and-closed-loop-spatial-reasoning",
          title: 'Started a research internship at Xiaomi (MiLM Plus) after completing my internship at...',
          description: "",
          section: "News",},{id: "news-revisor-co-first-author-is-accepted-to-cvpr-2026-it-lets-mllms-re-inspect-key-video-segments-while-reflecting-grounding-their-reasoning-in-the-right-visual-evidence-for-long-form-video-understanding",
          title: 'REVISOR (co-first author) is accepted to CVPR 2026! It lets MLLMs re-inspect key...',
          description: "",
          section: "News",},{id: "news-video-opd-co-first-author-is-accepted-to-icml-2026-it-brings-on-policy-distillation-to-video-mllms-replacing-sparse-grpo-rewards-with-dense-token-level-teacher-supervision-for-temporal-video-grounding",
          title: 'Video-OPD (co-first author) is accepted to ICML 2026! It brings on-policy distillation to...',
          description: "",
          section: "News",},{id: "news-started-a-research-visit-at-ccvl-johns-hopkins-university-working-with-alan-yuille-and-jieneng-chen-my-project-evaluates-the-spatial-intelligence-of-mllms-through-acting-in-embodied-environments-rather-than-answering-questions",
          title: 'Started a research visit at CCVL, Johns Hopkins University, working with Alan Yuille...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%6E%68%6E%61%76%69@%6D%61%69%6C.%75%73%74%63.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ustc-hyin", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-2562-5441", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K9_zbI8AAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ustc_hyin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
