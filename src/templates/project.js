import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'

import ImageExpander from '../components/imageExpander'

import { graphql } from 'gatsby'
import BrowserChrome from '../components/browserChrome'

import ExternalLink from '../components/externalLink'

import Badge from '../components/badge'

import './project.sass'

export default ({ data }) => {
  const post = data.markdownRemark

  const { html } = post
  const { title, url, date, image, project_type } = post.frontmatter

  return (
    <Layout>
      <div className="container">
        <div style={{ display: 'flex', marginTop: '2rem' }}>
          <div className="featured-image">
            <BrowserChrome round={true} small={true} />
            <Img maxWidth={300} fluid={image.childImageSharp.fluid} />
          </div>
          <div>
            <h1>{title}</h1>
            <ExternalLink url={url} style={{ marginBottom: '1rem', marginRight: 'auto' }} />
            <br />
            <Badge text={project_type} style={{ marginBottom: "1rem" }} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        date
        project_type
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
