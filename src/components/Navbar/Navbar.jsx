import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import NavDropDownBtn from "./NavDropDownBtn";
import DropDownContent from "./DropDownContent";
import NavDropDownBtn2 from "./NavDropDownBtn2";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [dropDownBtn, setDropDownBtn] = React.useState(false);
  const { theme, mode, toggle } = useContext(themeContext);
  const { darkmode, lightdarkmode, lightmode } = theme;

  const handleDropDownBtnClick = () => {
    setDropDownBtn(!dropDownBtn);
  };
  return (
    <nav>
      <div className="n-wrapper" style={mode ? lightdarkmode : lightmode}>
        <div className="n-left">
          <div className="n-name">{`${"< Sourav />"}`}</div>
          <Toggle />
          {/* <span>toggle</span> */}
        </div>

        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="intro" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="https://drive.google.com/file/d/1wkFsKq8IQg2R1RVIibER5nOQjoq4ZzD1/view?usp=sharing"
            target="_blank"
          >
            <button className="button n-button">Resume</button>
          </a>
        </div>
        <button onClick={handleDropDownBtnClick} className="nav-dropDownBtn">
          {dropDownBtn ? <NavDropDownBtn2 /> : <NavDropDownBtn />}
        </button>
      </div>
      {dropDownBtn ? (
        <DropDownContent handleDropDownBtnClick={handleDropDownBtnClick} />
      ) : null}
    </nav>
  );
};

export default Navbar;
