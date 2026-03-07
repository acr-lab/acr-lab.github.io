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
          title: "people",
          description: "people in the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "list of the team members are/were involved in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "recent publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-activities",
          title: "activities",
          description: "seminars, talks, and workshops hosted by the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "get in touch with the ACR Lab.",
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
          section: "News",},{id: "people-do-dai-chi",
          title: 'Do_dai_chi',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/do_dai_chi/";
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
