import * as React from "react";
import logo from "../images/logo.png";

function redirect() {
  // Check AWS env var to determine redirect
  window.location.href = "http://localhost:8000";
}

const Navbar = () => {
  return (
    <nav className="nav-custom">
      <div className="custom-logo" onClick={redirect}>
        <img
          className="custom-logo-img"
          height="84px"
          width="84px"
          alt="hoodies logo"
          src={logo}
        />
      </div>
      <div className="custom-logo-text"></div>{" "}
      <ul className="nav-custom-ul">
        <li>
          <a
            aria-label="Check out Hoodies Twitter"
            className="nav-twitter"
            href="https://twitter.com/hoodies_trainin"
            rel="noreferrer"
            target="_blank"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            aria-label="Check out Hoodies Github"
            className="nav-learn"
            href="https://github.com/hoodies-training"
            rel="noreferrer"
            target="_blank"
          >
            github
          </a>
        </li>
        {/* <li>
            <a
              aria-label="Hoodies Frequently Asked Questions"
              className="nav-faq"
              href="/faq"
              rel="noreferrer"
            >
              faq
            </a>
          </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
