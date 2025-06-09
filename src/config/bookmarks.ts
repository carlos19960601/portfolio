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

