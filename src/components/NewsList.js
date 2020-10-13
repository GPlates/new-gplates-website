import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class NewsList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <Link to={post.fields.slug}>   
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </Link>
                    </div>
                  ) : null}
                  <div className="post-meta" style={{width:'100%', position:"relative"}}>
                    <div style={{paddingBottom:"1.5rem"}}>
                      <Link
                        className="title has-text-primary is-size-5"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </div>
                    
                    <div className="has-text-weight-bold" style={{position:"absolute", bottom:"0"}}><span> &bull; </span>{post.frontmatter.date}</div>
                    
                  </div>
                </header>
                <hr style={{borderColor:"aliceblue", width:"50%", marginLeft:"0"}}></hr>
                <p>
                  <span >
                    {post.frontmatter.description}
                  </span>
                  {/*<Link className="button is-success" to={post.fields.slug}>
                    Keep Reading →
                      </Link>*/}
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, maxHeight: 70, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsList data={data} count={count} />}
  />
)
