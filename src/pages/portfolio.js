import React from 'react'

import { graphql } from 'gatsby'

import ProjectTeaser from '../components/projectTeaser'
import Layout from '../components/layout'

export default props => {
  console.log(props)
  return (
    <Layout>
      <div className="container">
        {props.data.allMarkdownRemark.edges.map(project => (
          <ProjectTeaser key={project.node.id} project={project.node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllProjects {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`
