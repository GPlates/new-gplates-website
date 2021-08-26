import React from 'react'
import Layout from '../../../components/Layout'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery } from 'gatsby'
import Content, { HTMLContent } from '../../../components/Content'

class ManualIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        
        <h2 className="has-text-weight-bold is-size-2 gp-title">
          GPlates User Manual
        </h2>

        <div className="container">

          

          <div className="column is-8 is-offset-2">
          
          <div style={{maxWidth: '700px'}}>
            <div className="gcse-search"></div>
          </div>

            {posts &&
              posts.map(({ node: post }) => (
                  <div style={{textAlign: 'left', marginTop:'7px'}}>
                    <h2 className="has-text-weight-bold is-size-4">{post.frontmatter.title} </h2>
                    <HTMLContent className="toc" content={ post.tableOfContents}/>
                  </div>  
            ))}
           
          </div>
        </div>
        <br></br>
      </Layout>
    )
  }
}

ManualIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query manualIndexQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___chapterNo] }
          filter: { frontmatter: { templateKey: { eq: "user-manual" } } }
        ) {
          edges {
            node {
              html
              tableOfContents
              frontmatter {
                title
                prev
                next
              }
            }
          }
        }
      }
    `}
    render={(data) => <ManualIndex data={data} />}
  />
)
