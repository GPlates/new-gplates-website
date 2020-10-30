import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/GPlatesLogoVector.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="GPlates" style={{ width: '40px', 'maxHeight': '40px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              role = "button"
              tabIndex="0"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/news">
                News
              </Link>
              <Link className="navbar-item" to="/screenshots">
                Gallery
              </Link>
              <Link className="navbar-item" to="/features">
                Features
              </Link>
              <Link className="navbar-item" to="/download">
                Download
              </Link>
              <Link className="navbar-item" to="/docs">
                Documentation
              </Link>
              {/*<Link className="navbar-item" to="/publications">
                Publications
              </Link>
              <Link className="navbar-item" to="/gpml">
                GPML
              </Link>
              <Link className="navbar-item" to="/auscope">
                AuScope
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>*/}
               <Link className="navbar-item" to="/education">
                Education
               </Link>
              <a className="navbar-item" href="https://discourse.gplates.org/" target="_blank" rel="noreferrer">
                Forum
              </a>
              {/*
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  drop
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    AAA!!!!!!!!!!!!!
                  </a>
                  <a class="navbar-item">
                    BBB
                  </a>
                  <a class="navbar-item">
                    CCC
                  </a>
                  <hr class="navbar-divider"></hr>
                  <a class="navbar-item">
                    DDD
                  </a>
                </div>
              </div>
              */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/GPlates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
