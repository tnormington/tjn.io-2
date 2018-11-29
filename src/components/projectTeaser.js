import React from 'react'
import Link from 'gatsby-link'

import Badge from './badge'
import BrowserChrome from './browserChrome'

// import externalIcon from '../images/external-gray.svg'
import arrowRightIcon from '../images/arrow-right-yellow.svg'
import colors from '../colors'

import ExternalLink from './externalLink'

import './projectTeaser.sass'

import Img from 'gatsby-image'

export default ({ project, isAlt }) => {
  const { title, project_type, url, image } = project.frontmatter
  return (
    <div className={`project-teaser ${isAlt ? 'project-teaser--alt' : ''}`}>
      <div className="project-teaser__image">
        <BrowserChrome small={true} />
        {image && <Img fluid={image.childImageSharp.fluid} />}
      </div>
      <div className="project-teaser__info">
        <div style={{ marginBottom: '8px' }}>
          <Link
            style={{ color: '#fff', fontSize: '22px', textDecoration: 'none' }}
            to={project.fields.slug}
          >
            {title}
          </Link>
        </div>
        {url && (
          <div style={{ marginBottom: '8px' }}>
            <ExternalLink url={url} />
          </div>
        )}
        {project_type && (
          <div style={{ marginBottom: '8px' }}>
            <Badge text={project_type} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
        <Link
          to={project.fields.slug}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: colors.yellow,
            textDecoration: 'none',
            fontSize: '13px',
            textTransform: 'uppercase',
          }}
        >
          Read More
          <img
            src={arrowRightIcon}
            alt="Arrow pointing right"
            style={{
              marginLeft: '8px',
              width: '20px',
              height: 'auto',
            }}
          />
        </Link>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment Project on MarkdownRemark {
    id
    html
    frontmatter {
      title
      date
      project_type
      url
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    fields {
      slug
    }
  }
`
