import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { type Metadata } from 'next'

import {
  awesomeProjects,
  githubProjects,
  projectHeadLine,
  projectIntro,
  projects,
} from '@/config/infoConfig'

import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { ProjectCard } from '@/components/project/ProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectHeadLine,
}

export default function Projects() {
  return (
    <SimpleLayout title={projectHeadLine} intro={projectIntro}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          <CustomIcon name="github" size={28} />
          Open Source
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {githubProjects.map((project) => (
            <GithubProjectCard
              key={project.name}
              project={project}
              titleAs="h3"
            />
          ))}
        </ul>
      </div>

      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight opacity-80 md:text-3xl">
          <CustomIcon name="github" size={28} />
          Awesome Project
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {awesomeProjects.map((project) => (
            <GithubProjectCard
              key={project.name}
              project={project}
              titleAs="h3"
            />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
