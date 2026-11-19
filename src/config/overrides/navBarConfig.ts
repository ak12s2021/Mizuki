// Personal settings preserved when updating the upstream theme.
export default {
  links: [
    0,
    1,
    {
      name: "Links",
      url: "/links/",
      icon: "material-symbols:link",
      children: [
        {
          name: "GitHub",
          url: "https://github.com/ak12s2021",
          external: true,
          icon: "fa7-brands:github"
        },
        {
          name: "Bilibili",
          url: "https://space.bilibili.com/269509778",
          external: true,
          icon: "fa7-brands:bilibili"
        },
        {
          name: "Gitee",
          url: "https://gitee.com/matsuzakayuki/Mizuki",
          external: false,
          icon: "mdi:git"
        }
      ]
    },
    {
      name: "My",
      url: "/content/",
      icon: "material-symbols:person",
      children: [
        {
          name: "Anime",
          url: "/anime/",
          icon: "material-symbols:movie"
        },
        {
          name: "Diary",
          url: "/diary/",
          icon: "material-symbols:book"
        },
        {
          name: "Gallery",
          url: "/albums/",
          icon: "material-symbols:photo-library"
        },
        {
          name: "Devices",
          url: "devices/",
          icon: "material-symbols:devices",
          external: false
        },
        {
          name: "Dreams",
          url: "/dreams/",
          icon: "material-symbols:bedtime"
        }
      ]
    },
    {
      name: "About",
      url: "/content/",
      icon: "material-symbols:info",
      children: [
        {
          name: "About",
          url: "/about/",
          icon: "material-symbols:person"
        },
        {
          name: "Friends",
          url: "/friends/",
          icon: "material-symbols:group"
        }
      ]
    },
    {
      name: "Others",
      url: "#",
      icon: "material-symbols:more-horiz",
      children: [
        {
          name: "Projects",
          url: "/projects/",
          icon: "material-symbols:work"
        },
        {
          name: "Skills",
          url: "/skills/",
          icon: "material-symbols:psychology"
        },
        {
          name: "Timeline",
          url: "/timeline/",
          icon: "material-symbols:timeline"
        }
      ]
    }
  ]
};
