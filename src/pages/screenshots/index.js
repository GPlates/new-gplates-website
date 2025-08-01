import React from "react";
import Layout from "../../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";

export default function Screenshots() {
  const data = useStaticQuery(
    graphql`
      query screenshotsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "screenshots" } } }
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
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 360
                      height: 270
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h2 className="has-text-weight-bold is-size-2 gp-title">Gallery</h2>
      <div className="container">
        <div className="column is-12 is-offset-0">
          <div className="columns is-multiline">
            {posts &&
              posts.map(({ node: post }) => (
                <div
                  className="is-parent column is-3"
                  key={post.id}
                  title={post.frontmatter.title}
                >
                  <div className="box pg-screenshot-box">
                    <Link to={post.fields.slug}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `screenshot image thumbnail for  ${post.frontmatter.title}`,
                        }}
                      />
                    </Link>
                    <h3 style={{ textAlign: "center", marginTop: "7px" }}>
                      {post.frontmatter.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}



