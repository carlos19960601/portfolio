// bookmarks
export const bookmarkHeadLine = "What I'm using"
export const bookmarkIntro = "I often come across some tools that can assist us in certain ways and improve efficiency. Here is my collection of tool websites."


export type BookmarkItemType = {
  name: string;
  logo: string;
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
  }
]


// Navigation Station
export const navigationStations: Array<BookmarkItemType> = [
  {
    name: "IndieHub Tools",
    logo: "https://indiehub.best/logo.png",
    url: "https://indiehub.best/tool",
    description: "Discover 400+ best tools for efficient indie hacking, from Domain, Database, Design, to Template, CMS, Marketing, etc."
  }
]

// Developer Tools
export const developerTools: Array<BookmarkItemType> = [
  {
    name: "grep.app",
    logo: "https://grep.app/icon.png",
    url: "https://grep.app",
    description: "Effortlessly search for code, files, and paths across a million GitHub repositories."
  }
]
