import React from 'react'

import ProjectTeaser from './projectTeaser'

import { isEven } from '../util'

export default ({ projects }) => {
  return (
    <div className="container">
      {projects.map((project, i) => {
        const isAlt = isEven(i + 1)
        return (
          <ProjectTeaser
            key={project.node.id}
            project={project.node}
            isAlt={isAlt}
          />
        )
      })}
    </div>
  )
}
