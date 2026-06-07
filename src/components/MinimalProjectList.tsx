'use client'

import { Project } from '@/types/project'
import { FadeInUp } from '@/components/ui/PageTransitions'

interface MinimalProjectListProps {
  projects: Project[]
}

export default function MinimalProjectList({ projects }: MinimalProjectListProps) {
  return (
    <div className="flex flex-col gap-1">
      {projects.map((project, index) => {
        const link = project.liveLink || project.githubLink || '#'
        // Strip markdown bold stars for a cleaner look in the minimalist list
        const cleanDescription = project.description.replace(/\*\*/g, '')

        return (
          <FadeInUp key={project.id} delay={index * 0.05}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col py-3 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
            >
              <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-2 leading-relaxed">
                {cleanDescription}
              </p>
            </a>
          </FadeInUp>
        )
      })}
    </div>
  )
}
