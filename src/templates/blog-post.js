import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="container">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <section className="muse-section">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="my-3">
                  <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                  </header>
                  <div className="my-3">
                    <div
                      className="my-4 pb-2"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <section
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        itemProp="articleBody"
                      />
                    </div>
                  </div>
                  <hr />
                  <footer>
                    <Bio />
                  </footer>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
