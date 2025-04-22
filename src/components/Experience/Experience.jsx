import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import VizuaraIcon from "./vizuaraicon.png";
import OmnifulIcon from "./omnifulicon.png";
// import OmnifulIcon from "../../img/Facebook.png";
import { themeContext } from "../../Context";

const experiences = [
  {
    date: "Oct 2023 - Dec 2024",
    companyname: "Vizuara",
    role: "Full Stack Developer",
    location: "Bangaluru, India",
    icon: VizuaraIcon,
    points: [
      `Developed an AI-powered face recognition attendance system to streamline student attendance tracking and
increase operational eﬀiciency in classrooms.`,
      `Created a video lecture and assignment portal to enhance digital learning and improve student engagement.`,
      `Integrated VizLab, a 3D virtual science lab, to provide interactive learning experiences and enhance conceptual
understanding for educational institutions.`,
      `Implemented a payment gateway using PhonePe API to simplify course purchase flow and boost conversion rates.`,
    ],
    technologies: [
      "Next Js",
      "Three Js",
      "Express Js",
      "Firebase",
      "Tensorflow Js",
      "Material Ui",
      "Tailwind CSS",
    ],
  },
  {
    date: "Jul 2023 - Sep 2023",
    companyname: "Omniful",
    role: "Software Engineer",
    location: "Gurugram, India",
    icon: OmnifulIcon,
    points: [
      `Developed an Inventory Management System to optimize hub operations and enhance tracking accuracy.`,
      `Created Fleet Management System as a core SaaS product, facilitating real-time delivery tracking and logistics
transparency.`,
      `Contributed to the launch of new logistics SaaS, driving B2B sales growth and expanding product oﬀerings.`,
    ],
    technologies: ["React", "Redux", "Google Map", "SCSS", "BootStrap"],
  },
  {
    date: "Apr 2023 - Jun 2023",
    companyname: "Vizuara",
    role: "Full Stack Developer Intern",
    location: "Bangaluru, India",
    icon: VizuaraIcon,
    points: [
      "Contributed to the development of Videsh, a platform for mentoring PhD aspirants in global opportunities.",
      `Developed an Admin Dashboard for centralized control.`,
      `Implemented an authentication system using Firebase for secure access and role-based authorization.`,
    ],
    technologies: ["React", "Redux", "Express Js"],
  },
];

const WorkIcon = ({ icon }) => {
  return (
    <div
      style={{
        // background: "red",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={icon}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const ExperienceCard = ({ exp }) => {
  const { date, companyname, role, icon, location, points, technologies } = exp;

  const { theme, mode } = useContext(themeContext);
  const { lightmode } = theme;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        border: "none",
        boxShadow: `${
          mode
            ? "#fdc510 0px 2px 8px 0px"
            : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        } `,
        borderRadius: "20px",
      }}
      date={date}
      iconStyle={{ background: "rgb(84, 170, 240)", color: "#fff" }}
      icon={<WorkIcon icon={icon} />}
    >
      <h3 className="experience-role">{role}</h3>
      <h6 className="experience-company-name">{companyname}</h6>
      <ul className="points">
        {points.map((point, index) => {
          return (
            <li
              className="bullet-points"
              key={index}
              style={mode ? { color: "lightgray" } : lightmode}
            >
              {point}
            </li>
          );
        })}
      </ul>
      <div className="experience-skills">
        {technologies.map((techstack, index) => {
          return <div key={`technologies-${index}`}>{techstack}</div>;
        })}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <h1 className="e-title">EXPERIENCE</h1>
      <VerticalTimeline>
        {experiences.map((exp, i) => {
          return <ExperienceCard exp={exp} key={i} />;
        })}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
