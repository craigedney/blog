import React from "react"

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-2 pb-md-4 bg-white">
      <div className="container">
        <hr className="my-4" />
        <div className="row">
          <div className="col-sm-5 order-sm-2">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/edneycraig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  id="icons_tabler_linkedin"
                  data-name="icons/tabler/linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <rect
                    id="Icons_Tabler_Linkedin_background"
                    data-name="Icons/Tabler/Linkedin background"
                    width="16"
                    height="16"
                    fill="none"
                  />
                  <path
                    id="Color"
                    d="M2.515,16A2.517,2.517,0,0,1,0,13.486V2.515A2.517,2.517,0,0,1,2.515,0H13.486A2.517,2.517,0,0,1,16,2.515V13.486A2.517,2.517,0,0,1,13.486,16ZM1.372,2.515V13.486a1.145,1.145,0,0,0,1.143,1.143H13.486a1.145,1.145,0,0,0,1.143-1.143V2.515a1.145,1.145,0,0,0-1.143-1.143H2.515A1.145,1.145,0,0,0,1.372,2.515Zm9.606,9.236-.006-.094V8.915A1.143,1.143,0,0,0,8.691,8.8l-.005.117v2.742a.686.686,0,0,1-1.365.094l-.006-.094V7.086a.686.686,0,0,1,1.271-.357,2.515,2.515,0,0,1,3.753,2.033l0,.153v2.742a.686.686,0,0,1-1.365.094Zm-7.314,0-.006-.094V7.086a.686.686,0,0,1,1.365-.093l.006.093v4.571a.686.686,0,0,1-1.365.094Zm0-7.305-.006-.1A.686.686,0,0,1,5.022,4.25l.006.1a.686.686,0,0,1-1.365.093Z"
                    fill="#1e1e1e"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-sm-7">
            <p className="small text-gray-600 text-center text-sm-left">
              © {new Date().getFullYear()}, Craig Edney. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
