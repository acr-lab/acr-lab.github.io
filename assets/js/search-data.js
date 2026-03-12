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
  },{id: "nav-people",
          title: "People",
          description: "People in the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "List of the team members are/were involved in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Recent publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "Seminars, talks, and workshops hosted by the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-links",
          title: "Links",
          description: "Useful links for cryptography research and related resources.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/links/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Get in touch with the ACR Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-hội-thảo-giới-thiệu-thuật-toán-chữ-ký-số-kháng-lượng-tử-vn-pqsign-của-ban-cơ-yếu-chính-phủ-và-lễ-ra-mắt-phòng-nghiên-cứu-mật-mã-tiên-tiến",
          title: 'Hội thảo Giới thiệu thuật toán chữ ký số kháng lượng tử VN-PQsign...',
          description: "",
          section: "News",},{id: "news-website-created",
          title: 'Website created.',
          description: "",
          section: "News",},{id: "news-gs-phan-dương-hiệu-bảo-vệ-tư-duy-bên-trong-để-không-bị-điều-khiển-từ-ngoài",
          title: 'GS Phan Dương Hiệu: Bảo vệ tư duy bên trong để không bị...',
          description: "",
          section: "News",},{id: "news-we-are-pleased-to-announce-a-mini-course-on-introduction-to-lattice-based-cryptography-to-be-held-march-25-29-2026-the-lectures-will-be-delivered-by-prof-alfred-menezes-for-further-details-please-visit-the-course-page",
          title: 'We are pleased to announce a mini-course on Introduction to Lattice-Based Cryptography, to...',
          description: "",
          section: "News",},{id: "people-do-dai-chi",
          title: 'Do_dai_chi',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/do_dai_chi/";
            },},{id: "people-do-dinh-khue",
          title: 'Do_dinh_khue',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/do_dinh_khue/";
            },},{id: "people-do-xuan-thanh",
          title: 'Do_xuan_thanh',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/do_xuan_thanh/";
            },},{id: "people-hoang-dinh-linh",
          title: 'Hoang_dinh_linh',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hoang_dinh_linh/";
            },},{id: "people-hoang-van-thuc",
          title: 'Hoang_van_thuc',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hoang_van_thuc/";
            },},{id: "people-le-minh-ha",
          title: 'Le_minh_ha',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/le_minh_ha/";
            },},{id: "people-le-quoc-huy",
          title: 'Le_quoc_huy',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/le_quoc_huy/";
            },},{id: "people-mac-dang-truong",
          title: 'Mac_dang_truong',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/mac_dang_truong/";
            },},{id: "people-nguyen-duy-tung-khanh",
          title: 'Nguyen_duy_tung_khanh',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/nguyen_duy_tung_khanh/";
            },},{id: "people-nguyen-quoc-toan",
          title: 'Nguyen_quoc_toan',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/nguyen_quoc_toan/";
            },},{id: "people-phan-duong-hieu",
          title: 'Phan_duong_hieu',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/phan_duong_hieu/";
            },},{id: "people-vu-quoc-huy",
          title: 'Vu_quoc_huy',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/vu_quoc_huy/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
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
