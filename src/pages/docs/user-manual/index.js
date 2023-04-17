import React from "react";
import Layout from "../../../components/Layout";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { HTMLContent } from "../../../components/Content";
import Search from "../../../components/Search";
import ClientOnly from "../../../components/ClientOnly";

class ManualIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const sorted_posts = [];
    let next = "";
    if (posts.length > 0) {
      //find the first chapter
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].node.frontmatter.prev === "") {
          console.log(posts[i]);
          sorted_posts.push(posts[i]);
          next = posts[i].node.frontmatter.next;
          break;
        }
      }
      //sort the rest chapters
      let count = 0;
      while (next !== "") {
        if (count > 1000) {
          // safe guard, should not happen, break the infinite loop, if the manual has more than 1000 chapters, this is a problem.
          break;
        }
        count++;
        let i = 0;
        for (; i < posts.length; i++) {
          if (posts[i].node.fields.slug.includes(next)) {
            sorted_posts.push(posts[i]);
            next = posts[i].node.frontmatter.next;
            break;
          }
        }
        if (i === posts.length) {
          //cannot find next chapter, break the loop
          next = "";
        }
      }
    }

    return (
      <Layout>
        <h2 className="has-text-weight-bold is-size-2 gp-title">
          GPlates User Manual
        </h2>

        <div className="container">
          <div className="column is-8 is-offset-2">
            <div style={{ maxWidth: "700px" }}>
              <ClientOnly>
                <Search />
              </ClientOnly>
            </div>

            {sorted_posts &&
              sorted_posts.map(({ node: post }, idx) => (
                <div
                  style={{ textAlign: "left", marginTop: "7px" }}
                  key={post.id}
                >
                  <Link to={post.fields.slug}>
                    <h2 className="has-text-weight-bold is-size-3">
                      Chapter {idx + 1}: {post.frontmatter.title}
                    </h2>
                  </Link>
                  <HTMLContent className="toc" content={post.tableOfContents} />
                </div>
              ))}
          </div>
        </div>
        <br></br>
      </Layout>
    );
  }
}

ManualIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

//https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/#getting-table-of-contents
const fn = () => (
  <StaticQuery
    query={graphql`
      query manualIndexQuery {
        allMarkdownRemark(
          sort: { frontmatter: { title: ASC } }
          filter: { frontmatter: { templateKey: { eq: "user-manual" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              tableOfContents(absolute: true, pathToSlugField: "fields.slug")
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
);

export default fn;
