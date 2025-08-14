// bookmarks
export const bookmarkHeadLine = "What I'm using"
export const bookmarkIntro = "I often come across some tools that can assist us in certain ways and improve efficiency. Here is my collection of tool websites."


export type BookmarkItemType = {
  name: string;
  logo?: string;
  url: string;
  description: string;
}

// UI Components
export const uiComponents: Array<BookmarkItemType> = [
  {
    name: "Origin UI",
    logo: "https://originui.com/icon.svg",
    url: "https://originui.com",
    description: "An open-source collection of copy-and-paste components for quickly build application UIs."
  },
  {
    name: "Aceternity UI",
    logo: "https://ui.aceternity.com/logo.png",
    url: "https://ui.aceternity.com",
    description: "Copy paste the most trending components and use them in your websites without having to worry about styling and animations."
  },
  {
    name: "Magic UI",
    logo: "https://magicui.design/favicon.ico",
    url: "https://magicui.design",
    description: "150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion. Perfect companion for shadcn / ui."
  },
  {
    name: "React Bits",
    logo: "https://reactbits.dev/favicon.ico",
    url: "https://reactbits.dev/",
    description: "Animated React components for creative developers"
  },
  {
    name: "21st.dev",
    logo: "https://21st.dev//brand/21st-logo-dark.svg",
    url: "https://21st.dev",
    description: "Discover and share video components. Ready-to-use React Tailwind components inspired by shadcn/ui."
  }
]


// Navigation Station
export const navigationStations: Array<BookmarkItemType> = [
  {
    name: "IndieHub Tools",
    logo: "https://indiehub.best/logo.png",
    url: "https://indiehub.best/tool",
    description: "Discover 400+ best tools for efficient indie hacking, from Domain, Database, Design, to Template, CMS, Marketing, etc."
  },
  {
    name: "FMHY",
    url: "https://fmhy.net",
    description: "The largest collection of free stuff on the internet!"
  }
]

// Developer Tools
export const developerTools: Array<BookmarkItemType> = [
  {
    name: "grep.app",
    logo: "https://grep.app/icon.png",
    url: "https://grep.app",
    description: "Effortlessly search for code, files, and paths across a million GitHub repositories."
  },
  {
    name: "Map of GitHub",
    logo: "https://anvaka.github.io/map-of-github/favicon-32x32.png",
    url: "https://anvaka.github.io/map-of-github/",
    description: "This is a map of 690,000+ GitHub projects. Each dot is a project. Dots are close to each other if they have a lot of common stargazers."
  },
  {
    name: "npm compare",
    url: "https://npm-compare.com",
    description: "Search for similar packages and compare them in terms of popularity, features, and discover popular alternatives.",
  }
]

// Blogs
export const blogs: Array<BookmarkItemType> = [
  {
    name: "宝玉的分享",
    url: "https://baoyu.io/",
    description: "宝玉的分享，主要在大语言模型、Prompt Engineering、软件工程、工程管理、前端等领域。"
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com/",
    description: "CSS-Tricks - A Website About Making Websites"
  }
]

