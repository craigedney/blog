import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const Blog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <SEO title="All posts" />
        <p>No blog posts found.</p>
      </Layout>
    )
  }
  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <div className="container">
        <hr className="bg-gray-200 mt-2 mt-md-4" />
        <section className="muse-section py-4">
          <div className="row">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const subtitle = post.frontmatter.subtitle
              return (
                <div className="col-md-6 col-lg-12">
                  <div
                    className="border-bottom border-gray-200 mb-4 mb-md-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h4 key={post.fields.slug} className="mb-lg-0 mt-2">
                      <Link
                        className="text-black-600"
                        to={post.fields.slug}
                        itemProp="url"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h4>
                    <p className="lh-lg mb-2 pb-1">{subtitle}</p>
                    <p className="lh-lg">Tags Tags Tags</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          description
        }
      }
    }
  }
`
