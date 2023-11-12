import React from "react";
import { links } from "./data";
import { social } from "./data";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src="/assets/logo-ddc33e51.svg" className="logo" alt="logo" /> */}

            <h4>
              <Link to="/">My World</Link>
            </h4>
          </div>

          {/* links mapping */}

          {links.map((itm) => {
            return (
              <div key={itm.id} className="links-container">
                <ul className="links">
                  <li>
                    {/* <a href={itm.url}>{itm.text}</a> */}

                    <NavLink to={itm.url}>{itm.text}</NavLink>
                  </li>
                </ul>
              </div>
            );
          })}

          {/* social mapping */}

          {social.map((ele) => {
            const Data = ele.icon;

            return (
              <ul key={ele.id} className="social-icons">
                <li>
                  <a href={ele.url}>
                    <Data />
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
