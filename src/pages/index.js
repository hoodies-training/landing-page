import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";

// markup
const IndexPage = () => {
  return (
    <main id="content">
      <title>hoodies</title>
      <Navbar />
      <h1>
        Onboard to the digital economy&nbsp;
        <span role="img" aria-label="Digital Economy Emojis">
          💻🌎🔐
        </span>
      </h1>
      <div className="button-wrapper">
        <div>
          {/* <a
            aria-label="Download Hoodies.Training from the Apple App Store"
            href=""
            id="app-store-button"
          >
            <div></div>
          </a> */}
        </div>
        <div></div>
      </div>
      {/* <div className="app-preview">
        <div><img alt="A Preview of hoodies.training" src=""/></div>
      </div> */}
      <footer>
        <div className="divider" />
        <div className="about">
          <div className="footer-menu">
            <a
              href="https://github.com/hoodies-training"
              rel="noreferrer"
              target="_blank"
            >
              <h3>👾 github</h3>
            </a>
            {/* <a href="/terms-of-use">
              <h3>📜 terms of use</h3>
            </a>
            <a href="/privacy">
              <h3>🔒 privacy policy</h3>
            </a> */}
          </div>
          <p>© hoodies.training</p>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
