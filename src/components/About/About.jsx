import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./About.css";
import Profilefic from "../../img/profilepic.png";
import Experience from "../Experience/Experience";

function About() {
  const { theme, mode, toggle } = useContext(themeContext);
  const { darkmode, lightdarkmode, lightmode } = theme;
  React.useEffect(() => {
    startText();
  }, []);
  return (
    <div className="about" id="about">
      <div className="a-img">
        <img src={Profilefic} alt="profile" className="profileImg" />
      </div>
      <div className="a-div">
        <div className="a-text">
          <h1 className="a-head" style={mode ? darkmode : lightmode}>
            ABOUT
          </h1>
          <h1 className="a-title">
            Hii there{" "}
            <img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              alt=""
            />{" "}
            I'm <span>Sourav Jana</span>{" "}
            <img
              src="https://user-images.githubusercontent.com/97526754/173172254-697ba77e-bed8-4ffc-b1d1-2c20ede245b0.gif"
              alt=""
            />
          </h1>
          <span
            className="title-span"
            style={mode ? { color: "wheat" } : lightmode}
          >
            I am a passionate Full Stack Developer with over 1 year and 10
            months of hands-on experience specializing in the MERN stack and
            Next.js.
          </span>
          <br />
          <br />
          <span
            className="title-span"
            style={mode ? { color: "wheat" } : lightmode}
          >
            I have a strong foundation in building scalable web applications and
            AI-integrated educational platforms. My work has been instrumental
            in developing and deploying new-age learning tools, enhancing user
            experience, and solving real-world problems through technology. I
            thrive in collaborative environments, enjoy building things from
            scratch, and love experimenting with AI-driven interactive solutions
            to create impact-driven products.
          </span>
        </div>
        {/* <div className="a-img">
          <img src={Profilefic} alt="profile" className="profileImg" />
        </div> */}
      </div>
      <h1 className="blinking-text">
        <a
          style={mode ? darkmode : lightmode}
          href="/"
          class="typewrite"
          data-period="1000"
          data-type='[ "Hi , I am Sourav.", "I am a Developer.","I Love Coding.", "I Love Problem Solving.", "I Love to Develop.", "MERN Developer." ]'
        >
          <span class="wrap"></span>
        </a>
      </h1>
      {/* <Experience /> */}
    </div>
  );
}

export default About;

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

function startText() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
}
