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
    logo: '/icons/mempal-app-logo.png',
  },
  {
    name: 'ChronoWave',
    description:
      '一款根据实时热榜生成报纸和播客的应用',
    link: { href: '#', label: 'ChronoWave' },
    category: ['Website'],
    techStack: ['Sveltekit', 'TailwindCSS', 'Shadcn/UI'],
    tags: [],
    logo: '/icons/mempal-app-logo.png',
  },
  {
    name: 'DevBox',
    description:
      '⚡ Universal developer toolkit for software, hardware, and security professionals.',
    link: { href: 'github.com/carlos19960601/DevBox', label: 'DevBox' },
    category: ['App'],
    techStack: ['Tauri', 'TailwindCSS', 'Shadcn/UI', "Rust"],
    tags: ["Desktop", "Tools"],
    logo: '/icons/devbox-logo.png',
  }
  // {
  //   name: 'Luma',
  //   description:
  //     '',
  //   link: { href: 'github.cards', label: 'GitHub Cards' },
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Visual Cards', 'GitHub Contribution Cards']
  // },
  // {
  //   name: 'Lumen',
  //   description:
  //     '',
  //   link: { href: 'aibest.tools', label: 'AI Best Tools' },
  //   logo: 'images/icon/aibesttools.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['AI', 'Tools Directory']
  // },
  // {
  //   name: 'TypDoc',
  //   description:
  //     '',
  //   link: { href: 'bestdirectories.org', label: 'Best Directories' },
  //   logo: '/images/icon/bestdirectories.png',
  //   category: ['Website'],
  //   techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
  //   tags: ['Directory of Directories']
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