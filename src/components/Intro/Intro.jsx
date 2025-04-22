import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
// import Coder from "../../img/developerimage.gif";
import coderanimation from "../../lotties/coderanimation.json";

import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { themeContext } from "../../Context";

const Intro = () => {
  const { theme, mode } = useContext(themeContext);
  const { darkmode, lightmode } = theme;

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={mode ? darkmode : lightmode}>Hey! I Am</span>
          <span style={mode ? { color: "wheat" } : lightmode}>Sourav Jana</span>
          <span style={mode ? { color: "lightgray" } : lightmode}>
          Full-stack developer with hands-on experience in frontend and backend, building high-scalable and user-focused web applications
          </span>
        </div>
        <div className="i-buttons-div">
          <a
            href="https://drive.google.com/drive/folders/1t35w0Y0FbuhEPf0RLv0YoI94ldFtgZ_b?usp=sharing"
            target="_blank"
          >
            <button className="i-button button">Resume</button>
          </a>
          <button className="i-button button">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              style={{ fontSize: "16px" }}
            >
              Hire me
            </Link>
          </button>
        </div>
        <div className="i-icons">
          <a href="https://github.com/sourav215" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/souravjana131" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a
            title="souravjana131@gmail.com"
            href="mailto:souravjana131@gmail.com"
            target="_blank"
          >
            <img src={Email} alt="" />
          </a>
        </div>
      </div>
      {/* <div className="i-right">
        <img src={Coder} alt="srvicon" />

        
      </div> */}
      <div className="intro-right">
        <Lottie
          animationData={coderanimation}
          loop={true}
          style={{
            width: "100%",
            margin: "auto",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
