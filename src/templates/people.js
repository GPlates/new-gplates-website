import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

const PeopleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  name,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1
              className="title is-size-2 has-text-weight-bold is-bold-light"
              style={{ textAlign: "center" }}
            >
              {name}
            </h1>
            <h1
              className="title is-size-4 has-text-weight-bold is-bold-light"
              style={{ textAlign: "center" }}
            >
              {title}
            </h1>
            <PostContent content={content} />

            {/*tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
                  ) : null*/}
          </div>
        </div>
      </div>
    </section>
  );
};

PeopleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const People = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PeopleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={"%s | " + post.frontmatter.title}>
            <title>{`${post.frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        name={post.frontmatter.name}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

PeopleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default People;

export const pageQuery = graphql`
  query PeopleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
