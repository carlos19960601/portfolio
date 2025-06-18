// projects
export const projectHeadLine = "What I've done, what I'm doing and what I'm learning"
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'MemPal',
    description:
      '一款学习英语的App',
    link: { href: '#', label: 'MemPal' },
    category: ['App'],
    techStack: ['React', "Flutter"],
    tags: ['App', 'iOS', "Android"],
    logo: '/images/icon/mempal-app-logo.png',
  },
  {
    name: 'ChronoWave',
    description:
      '一款根据实时热榜生成报纸和播客的应用',
    link: { href: '#', label: 'ChronoWave' },
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: [],
    logo: '/images/icon/mempal-app-logo.png',
  },
  // {
  //   name: 'GitHub Cards',
  //   description:
  //     'Showcase your GitHub contributions into stunning visual cards.',
  //   link: { href: 'github.cards', label: 'GitHub Cards' },
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Visual Cards', 'GitHub Contribution Cards']
  // },
  // {
  //   name: 'AI Best Tools',
  //   description:
  //     'Find the best AI tools in AIBest.tools',
  //   link: { href: 'aibest.tools', label: 'AI Best Tools' },
  //   logo: 'images/icon/aibesttools.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['AI', 'Tools Directory']
  // },
  // {
  //   name: 'Best Directories',
  //   description:
  //     'Your ultimate directory of directories.',
  //   link: { href: 'bestdirectories.org', label: 'Best Directories' },
  //   logo: '/images/icon/bestdirectories.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Directory of Directories']
  // },
  // {
  //   name: 'User Growth',
  //   description:
  //     'Boost Your business growth with UserGrowth.link',
  //   link: { href: 'usergrowth.link', label: 'User Growth' },
  //   logo: '/images/icon/usergrowth.ico',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['User Growth', 'Marketing', 'SEO']
  // },
  // {
  //   name: 'Dev Toolset',
  //   description:
  //     'Open-source database-free tools directory.',
  //   link: { href: 'devtoolset.net', label: 'Dev Toolset' },
  //   logo: '/images/icon/devtoolset.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Open Source', 'Database-Free', 'Tools Directory']
  // },
  // {
  //   name: 'Domain Score',
  //   description:
  //     'Ultimate AI-Powered tool for domain scoring and evaluation',
  //   link: { href: 'domainscore.ai', label: 'Domain Score' },
  //   logo: '/images/icon/domainscore.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Domain', 'AI', 'SEO']
  // },
  // {
  //   name: 'MagicBox Tools',
  //   description:
  //     'Find the best AI tools in MagicBox.tools',
  //   link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
  //   logo: '/images/icon/magicbox.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['AI', 'Tools Directory']
  // },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'Cambridge Dictionary API',
    description: 'cambridge dictionary api / 剑桥词典API',
    link: { href: 'github.com/carlos19960601/cambridge-dictionary-api', label: 'Dictionary' },
    gitStars: 1,
    gitForks: 1
  },
  {
    name: 'TrPlayer',
    description:
      '一款使用whisper和Ollama实现视频转录和翻译的播放器',
    link: { href: 'github.com/carlos19960601/trplayer', label: 'Player' },
    gitStars: 1,
    gitForks: 1
  },
  // {
  //   name: 'Chrome Extension Plasmo Template',
  //   description:
  //     'A chrome extension template using plasmo, tailwind css, shadcn/ui',
  //   link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
  //   gitStars: 54,
  //   gitForks: 10
  // },
  // {
  //   name: 'Awesome Indie Hacker Tools',
  //   description:
  //     '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
  //   link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
  //   gitStars: 815,
  //   gitForks: 69
  // },
  // {
  //   name: 'Awesome AI Directory',
  //   description:
  //     'AI资源工具导航站收录 / Find all the best AI directories',
  //   link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
  //   gitStars: 40,
  //   gitForks: 7
  // },
  // {
  //   name: 'Producthunt Daily Bot',
  //   description:
  //     'A bot getting product hunt daily top products',
  //   link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
  //   gitStars: 3,
  //   gitForks: 3
  // },
  // {
  //   name: 'Cantonese Echoes',
  //   description:
  //     'Cantonese Echoes / 粵語殘片',
  //   link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
  //   gitStars: 1
  // },
]


export const awesomeProjects: Array<ProjectItemType> = [
  {
    name: 'everyone-can-use-english',
    description: '人人都能用英语',
    link: { href: 'https://github.com/ZuodaoTech/everyone-can-use-english', label: 'English' },
    gitStars: 26300,
    gitForks: 3900
  },
  {
    name: 'zola',
    description: 'Open chat interface for all your models.',
    link: { href: "https://github.com/ibelick/zola", label: "ChatBot" },
    gitStars: 822,
    gitForks: 134
  },
  {
    name: 'deepchat',
    description: '🐬DeepChat - A smart assistant that connects powerful AI to your personal world',
    link: { href: "https://github.com/ThinkInAIXYZ/deepchat", label: "ChatBot" },
    gitStars: 3500,
    gitForks: 433
  }
]