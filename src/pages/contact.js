import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container">
        <hr className="bg-gray-200 mt-2 mt-md-4" />
        <section className="muse-section py-4 py-md-5">
          <div className="row align-items-center">
            <div
              className="col-md-12 mb-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="mb-1 h1">Send a message</h4>
              <p className="big lh-lg">Get in touch below</p>
            </div>
            <div className="col-md-12">
              <div
                className="card border-gray-200 rounded-12 shadow-dark-80 p-4 p-md-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4 mb-md-5">
                        <label className="form-label form-label-lg">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-xl"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4 mb-md-5">
                        <label className="form-label form-label-lg">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-xl"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4 mb-md-5">
                        <label className="form-label form-label-lg">
                          Subject
                        </label>
                        <select className="form-select form-select-xl">
                          <option>Choose</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4 mb-md-5">
                        <label className="form-label form-label-lg">
                          Message
                        </label>
                        <textarea
                          className="form-control form-control-xl"
                          placeholder="Start typing"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="form-check mb-4 mt-md-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          className="form-check-label pl-1"
                          htmlFor="flexCheckIndeterminate"
                        >
                          Subscribe to our newsletter
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5 text-md-right">
                      <button type="button" className="btn btn-xl btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Contact
