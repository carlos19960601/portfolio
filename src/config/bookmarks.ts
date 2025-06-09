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

