import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

import auscopeIcon from "../img/AuScope-Logo-Icon.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";
import animatedlogo from "../img/animated-gplates-logo.svg";

const getRandomDelay = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const Footer = () => {
  const [isLogoOnRight, setIsLogoOnRight] = useState(false);

  useEffect(() => {
    let timeout;

    const schedulePositionChange = () => {
      const delay = getRandomDelay(12000, 25000);
      timeout = window.setTimeout(() => {
        setIsLogoOnRight((isOnRight) => !isOnRight);
      }, delay);
    };

    schedulePositionChange();
    return () => window.clearTimeout(timeout);
  }, [isLogoOnRight]);

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <img
        className={`footer-logo${isLogoOnRight ? " is-right" : ""}`}
        src={animatedlogo}
        width="35"
        alt="Animated GPlates logo"
      />
      <div className="content has-text-centered">
        <div className="container">
          <div className="footer-layout">
          <div className="footer-menu">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item has-text-white-ter">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item has-text-white-ter" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <a
                    className="navbar-item has-text-white-ter"
                    href="https://www.earthbyte.org"
                  >
                    EarthByte Group
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <ul className="menu-list">
                <li>
                  <Link
                    className="navbar-item has-text-white-ter"
                    to="/contact#contact-us"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="footer-funder">
            <section>
              <a title="AuScope" href="https://www.auscope.org.au/">
                <img
                  src={auscopeIcon}
                  alt="AuScope Logo"
                  className="footer-auscope-logo"
                />
              </a>
              <div className="footer-funder-label">Funded by AuScope</div>
            </section>
          </div>

          <div className="social">
            <a
              title="Facebook"
              aria-label="Facebook"
              href="https://www.facebook.com/earthbyte"
            >
              <object type="image/svg+xml" data={facebook} aria-hidden="true" />
            </a>
            <a
              title="Twitter"
              aria-label="Twitter"
              href="https://twitter.com/earthbytegroup"
            >
              <object type="image/svg+xml" data={twitter} aria-hidden="true" />
            </a>
            <a
              title="Instagram"
              aria-label="Instagram"
              href="https://www.instagram.com/explore/tags/earthbyte/top/"
            >
              <object type="image/svg+xml" data={instagram} aria-hidden="true" />
            </a>
            <a
              title="YouTube"
              aria-label="YouTube"
              href="https://www.youtube.com/channel/UCa41IQEhmmuXmz9J6iMfsnA"
            >
              <object type="image/svg+xml" data={youtube} aria-hidden="true" />
            </a>
          </div>
          </div>
        </div>

        <p style={{ fontSize: "80%", marginTop: "1.5rem" }}>
          <i>
            Copyright © 2020-2026 The University of Sydney. All rights reserved.
          </i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;