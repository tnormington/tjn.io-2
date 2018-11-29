import React from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/hero'

import Layout from '../components/layout'
import ProjectList from '../components/projectList'
import ContactSection from '../components/contactSection'

export default ({ data }) => (
  <Layout>
    <Hero />
    <h2 style={{ textAlign: 'center', margin: '3rem 0' }}>
      Here is Some of My Work
    </h2>
    <ProjectList projects={data.allMarkdownRemark.edges} />
    <ContactSection />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`
