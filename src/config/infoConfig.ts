export * from './activity'
export * from './career'
export * from './changelog'
export * from './education'
export * from './friends'
export * from './projects'


// personal info
export const name = 'Carlos'
export const headline = 'Software engineer, Full-Stack web developer.'
export const introduction = 'I’m Carlos, a software engineer based in Shenzhen, China. I like coding, and building interesting things'
export const email = 'zengiang96@gmail.com'
export const githubUsername = 'carlos19960601'

// about page
export const aboutMeHeadline = "I'm Carlos, a software engineer based in Chengdu, China."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, watching movies, music and so on.",
  "I'm working as a software develop engineer in Chengdu, China now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  // {
  //   name: 'X',
  //   icon: 'x',
  //   href: 'https://x.com/realcoreychiu'
  // },
  // {
  //   name: 'Bsky',
  //   icon: 'bsky',
  //   href: 'https://bsky.app/profile/coreychiu.com'
  // },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/4706388'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/carlos19960601'
  },
  // {
  //   name: 'Wechat',
  //   icon: 'wechat',
  //   href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
  // },
  // {
  //   name: 'Discord',
  //   icon: 'discord',
  //   href: 'https://discord.gg/xTxRg3Ej'
  // },
  // {
  //   name: 'Ko-fi',
  //   icon: 'coffee',
  //   href: 'https://ko-fi.com/coreychiu'
  // }
]

// https://simpleicons.org/
export const techIcons = [
  // 语言
  "typescript",
  "javascript",
  "flutter",
  "python",
  "java",
  "go",
  // 框架
  "react",
  "nextdotjs",
  "nodedotjs",
  // 工具包
  "biome",
  "sequelize",
  "tailwindcss",
  // 运维部署
  "mysql",
  "sqlite",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "ubuntu",
  "kubernetes",
  // 开发工具
  "git",
  "github",
  "visualstudiocode",
  "intellijidea",
  "goland",
  // 机器学习
  "pytorch",
  "jupyter"
];



