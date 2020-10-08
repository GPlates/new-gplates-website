import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import bgImg from '../img/topo_1200x600.png'

export const SimplePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content box" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SimplePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SimplePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${bgImg})`,
            marginBottom: '0'
          }}
        >
          <h1 className="has-text-weight-bold is-size-1 gp-title">
            {post.frontmatter.title}
          </h1>
          <div className="tint"></div>
      </div>

      <SimplePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SimplePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimplePage

export const simplePageQuery = graphql`
  query SimplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
