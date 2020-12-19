import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="muse-header py-sm-2 bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="menu-icon"
              data-name="icons/tabler/hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <rect
                data-name="Icons/Tabler/Hamburger background"
                width="16"
                height="16"
                fill="none"
              />
              <path
                d="M15.314,8H.686A.661.661,0,0,1,0,7.368a.653.653,0,0,1,.593-.625l.093-.006H15.314A.661.661,0,0,1,16,7.368a.653.653,0,0,1-.593.626Zm0-6.737H.686A.661.661,0,0,1,0,.632.654.654,0,0,1,.593.005L.686,0H15.314A.661.661,0,0,1,16,.632a.653.653,0,0,1-.593.625Z"
                transform="translate(0 4)"
                fill="#1e1e1e"
              />
            </svg>
            <svg
              className="menu-close"
              data-name="icons/tabler/close"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <rect
                data-name="Icons/Tabler/Close background"
                width="16"
                height="16"
                fill="none"
              />
              <path
                d="M.82.1l.058.05L6,5.272,11.122.151A.514.514,0,0,1,11.9.82l-.05.058L6.728,6l5.122,5.122a.514.514,0,0,1-.67.777l-.058-.05L6,6.728.878,11.849A.514.514,0,0,1,.1,11.18l.05-.058L5.272,6,.151.878A.514.514,0,0,1,.75.057Z"
                transform="translate(2 2)"
                fill="#1e1e1e"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="/"
                  role="button"
                  id="home"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="/about"
                  role="button"
                  id="about"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  About{" "}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="/blog"
                  role="button"
                  id="dashboard"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog{" "}
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-lg btn-primary my-3 my-lg-0">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
