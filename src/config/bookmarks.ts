// bookmarks
export const bookmarkHeadLine = "What I'm using"
export const bookmarkIntro =
  'I often come across some tools that can assist us in certain ways and improve efficiency. Here is my collection of tool websites.'

export type BookmarkItemType = {
  name: string
  logo?: string
  url: string
  description: string
}

// UI Components
export const uiComponents: Array<BookmarkItemType> = [
  {
    name: 'Origin UI',
    logo: 'https://originui.com/icon.svg',
    url: 'https://originui.com',
    description:
      'An open-source collection of copy-and-paste components for quickly build application UIs.',
  },
  {
    name: 'Aceternity UI',
    logo: 'https://ui.aceternity.com/logo.png',
    url: 'https://ui.aceternity.com',
    description:
      'Copy paste the most trending components and use them in your websites without having to worry about styling and animations.',
  },
  {
    name: 'Magic UI',
    logo: 'https://magicui.design/favicon.ico',
    url: 'https://magicui.design',
    description:
      '150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion. Perfect companion for shadcn / ui.',
  },
  {
    name: 'React Bits',
    logo: 'https://reactbits.dev/favicon.ico',
    url: 'https://reactbits.dev/',
    description: 'Animated React components for creative developers',
  },
  {
    name: '21st.dev',
    logo: 'https://21st.dev//brand/21st-logo-dark.svg',
    url: 'https://21st.dev',
    description:
      'Discover and share video components. Ready-to-use React Tailwind components inspired by shadcn/ui.',
  },
  {
    name: 'ScrollX UI',
    logo: 'https://www.scrollxui.dev/favicon.ico',
    url: 'https://www.scrollxui.dev/',
    description:
      'ScrollX UI is an open-source library with customizable, animated, interactive React components to help developers build fast, visually appealing UIs.',
  },
]

// Navigation Station
export const navigationStations: Array<BookmarkItemType> = [
  {
    name: 'IndieHub Tools',
    logo: 'https://indiehub.best/logo.png',
    url: 'https://indiehub.best/tool',
    description:
      'Discover 400+ best tools for efficient indie hacking, from Domain, Database, Design, to Template, CMS, Marketing, etc.',
  },
  {
    name: 'FMHY',
    url: 'https://fmhy.net',
    description: 'The largest collection of free stuff on the internet!',
  },
]

// Developer Tools
export const developerTools: Array<BookmarkItemType> = [
  {
    name: 'grep.app',
    logo: 'https://grep.app/icon.png',
    url: 'https://grep.app',
    description:
      'Effortlessly search for code, files, and paths across a million GitHub repositories.',
  },
  {
    name: 'Map of GitHub',
    logo: 'https://anvaka.github.io/map-of-github/favicon-32x32.png',
    url: 'https://anvaka.github.io/map-of-github/',
    description:
      'This is a map of 690,000+ GitHub projects. Each dot is a project. Dots are close to each other if they have a lot of common stargazers.',
  },
  {
    name: 'npm compare',
    url: 'https://npm-compare.com',
    description:
      'Search for similar packages and compare them in terms of popularity, features, and discover popular alternatives.',
  },
  {
    name: 'DeepWiki',
    url: 'https://deepwiki.org',
    description: 'DeepWiki | AI documentation you can talk to, for every repo',
  },
  {
    name: 'Zread',
    url: 'https://zread.ai/',
    description:
      'Explore Deep Research in Zread, the AI code wiki with multilingual guides, architecture insights, and community buzz, helping you dive into any GitHub repo in depth.',
  },
  {
    name: 'Code Wiki',
    url: 'https://codewiki.google',
    description:
      'A new perspective on development for the agentic era. Gemini-generated documentation, always up-to-date.',
  },
  {
    name: 'EaseMaster',
    url: 'https://easemaster.satisui.xyz/',
    description:
      '设计出感觉真实的运动。这是用于生成CSS、Tailwind、Framer Motion和GSAP的三次贝塞尔曲线和弹簧物理的终极简化可视化工具。',
  },
]

// Blogs
export const blogs: Array<BookmarkItemType> = [
  {
    name: '宝玉的分享',
    url: 'https://baoyu.io/',
    description:
      '宝玉的分享，主要在大语言模型、Prompt Engineering、软件工程、工程管理、前端等领域。',
  },
  {
    name: 'CSS-Tricks',
    url: 'https://css-tricks.com/',
    description: 'CSS-Tricks - A Website About Making Websites',
  },
]

// AI
export const ais: Array<BookmarkItemType> = [
  {
    name: 'Z-Image Turbo AI 在线免费使用',
    logo: 'https://z-image.62tool.com/favicon.ico',
    url: 'https://z-image.62tool.com/',
    description:
      '阿里通义最新开源 AI 绘画模型，性能和效果碾压 Flux。8 秒实时出图，免费在线体验，支持提示词示例与任务追踪。',
  },
  {
    name: 'Ketchup AI',
    url: 'https://ketchup-ai.com/zh',
    description: '让 AI 成为你的创作助手，从文字到图像，激发无限创意可能。',
  },
]

// Information
export const informations: Array<BookmarkItemType> = [
  {
    name: 'Upstract',
    logo: 'https://upstract.com/cdn/83/favicon.png',
    url: 'https://upstract.com',
    description:
      'The Mother of News Aggregators, since 2002. Read the Entire Internet on a Single Page.',
  },
  {
    name: 'buzzing',
    url: 'https://www.buzzing.cc/',
    description: '一个聚合了国外各大社交媒体热榜的网站',
  },
]

// paywalls
export const paywalls: Array<BookmarkItemType> = [
  {
    name: 'removepaywall',
    logo: 'https://www.removepaywall.com/faviFold/apple-touch-icon.png',
    url: 'https://www.removepaywall.com/',
    description: 'Read articles without annoying paywalls',
  },
  {
    name: 'Smry',
    logo: 'https://www.smry.ai/favicon.ico?favicon.f55f3c58.ico',
    url: 'https://www.smry.ai/',
    description:
      'Paste any paywalled article link and get the full text plus an AI summary. Free to use, no account, no browser extension. Works on most major news sites.',
  },
]
