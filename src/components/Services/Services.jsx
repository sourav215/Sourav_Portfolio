import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Sourav_Jana_Resume_Masai.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";

function Services() {
  const { theme, mode, toggle } = useContext(themeContext);
  const { darkmode, lightdarkmode, lightmode } = theme;
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={mode ? darkmode : lightmode}>My Awesome</span>
        <span style={mode ? darkmode : lightmode}>Services</span>
        <span style={mode ? { color: "lightgray" } : lightmode}>
          MERN Stack Development <br /> ( Frontend & Backend )
        </span>
        <div>
          <a
            href={
              "https://drive.google.com/file/d/1wkFsKq8IQg2R1RVIibER5nOQjoq4ZzD1/view?usp=sharing"
            }
            target="_blank"
          >
            <button className="button s-button">Resume</button>
          </a>
        </div>
      </div>
      <div className="cards">
        <div style={mode ? { color: "#F5C32C" } : lightmode}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={
              "Chakra UI, Material UI, Styled-Components, Bootstrap & more"
            }
          />
        </div>
        <div style={mode ? { color: "#F5C32C" } : lightmode}>
          <Card
            emoji={Glasses}
            heading={"Development"}
            details={
              "HTML, CSS, JavaScript, React, Redux, NodeJs, ExpressJs, MongoDB, Mongoose"
            }
          />
        </div>
        <div style={mode ? { color: "#F5C32C" } : lightmode}>
          <Card
            emoji={Humble}
            heading={"Tools | USE"}
            details={"VS Code, Git, Postman, Github, NPM, Yarn"}
          />
        </div>
        {/* <div className="blur s-blur2" style={{ background:"var(--purple)" }}></div> */}
      </div>
    </div>
  );
}

export default Services;
