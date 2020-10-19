import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'
import auscopeLogo from '../img/AuScope-logo.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '25em', height: '5em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news">
                         News
                      </Link>
                    </li>
                    
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.earthbyte.org">
                        EarthByte Group
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/earthbyte">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/earthbytegroup">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/explore/tags/earthbyte/top/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCa41IQEhmmuXmz9J6iMfsnA">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{display:"flex", flexDirection: "column"}}>
          <div style={{margin:"auto"}}>
            <a title="AuScope" href="https://www.auscope.org.au/">
              <img
                src={auscopeLogo}
                alt="AuScope Logo"
                style={{ maxWidth:"120px", filter: "invert(20%)", marginLeft:"5px", marginBottom:"0px", borderRadius:"15px", verticalAlign:"middle"}}
              />
            </a>
          </div>
          <div  style={{margin:"auto", textAlign: "center", padding: "0.2rem"}}>Copyright © 2020 The University of Sydney. All rights reserved. GPlates project is funded by&nbsp;
            <a title="AuScope" href="https://www.auscope.org.au/">AuScope</a>.
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
