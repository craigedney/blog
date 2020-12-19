import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="blog-home2-template bg-gray-100">
        <div className="container">
          <section className="muse-section">
            <h3 className="pt-5 mt-4 mb-sm-4 mb-3">I'm Craig Edney...</h3>
            <p>Subtitle</p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex
