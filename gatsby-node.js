const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// Gatsby prefixes its own assets and <Link> components, but Markdown and raw
// HTML can still contain root-relative URLs such as `/docs`. Convert those
// URLs in generated HTML when the site is deployed as a GitHub Pages project
// site (which lives below the repository-name path).
exports.onPostBuild = ({ reporter }) => {
  const basePath = process.env.PAGES_BASE_PATH
  if (!basePath) return

  const fs = require('fs')
  const publicDir = path.join(__dirname, 'public')
  const files = []
  const visit = (directory) => {
    fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
      const entryPath = path.join(directory, entry.name)
      if (entry.isDirectory()) visit(entryPath)
      else if (entry.name.endsWith('.html')) files.push(entryPath)
    })
  }

  visit(publicDir)
  const rootRelativeUrl = /\b(href|src)=(['\"])\/(?!\/)/g
  files.forEach((file) => {
    const html = fs.readFileSync(file, 'utf8')
    const updatedHtml = html.replace(rootRelativeUrl, `$1=$2${basePath}/`)
    if (updatedHtml !== html) fs.writeFileSync(file, updatedHtml)
  })

  reporter.info(`Prefixed root-relative URLs in ${files.length} HTML files for ${basePath}`)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
