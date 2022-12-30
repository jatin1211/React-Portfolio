import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icons from "../../assets/icons";
import myResume from "../../assets/resume.pdf";
import RenderIcon from "../Icons";
const icon = Icons();

export default function Resume() {
  return (
    <div className="container-fluid m-0 p-2 lightGray">
      <div className="container mt-1 p-0 ">
        <Row className="d-flex flex-wrap justify-content-center p-3">
          {/* HEADING */}
          <Col
            xs={{ span: 10 }}
            className="d-flex flex-wrap flex-column align-items-center"
          >
            <header className="col-12 d-flex justify-content-center">
              <h1 className="headingTitle mt-lg-5 text-center">Resume</h1>
            </header>
            </Col>
            <Row>
            <div className="d-flex">
              <a href={myResume} download>
                <span className="rebeccaPurple d-flex justify-content-center p-2 border downloadIcon boxShadow ml-3 mt-4 pulseHoverOnly">
                  <i
                    className="bi bi-file-earmark-pdf-fill"
                    style={{ fontSize: "2.5rem", color: "white" }}
                  ></i>{" "}
                  <br></br> <p className="text-white mt-3">Download</p>
                </span>
              </a>
              <a href={myResume} target={"_blank"} rel="noreferrer">
                <span className="lightGreen d-flex justify-content-center p-2 border viewIcon boxShadow ml-3 mt-4 pulseHoverOnly">
                  <i
                    className="bi bi-search"
                    style={{ fontSize: "2.5rem", color: "white" }}
                  ></i>{" "}
                  <br></br> <p className="text-white mt-3">View</p>
                </span>
              </a>
            </div>
            </Row>
          <Col
            xs={{ span: 10, order: 2 }}
            className=" d-flex flex-wrap justify-content-center"
          >
            {skills.map((el) => (
              <ul
                className="mt-5 col-6 d-flex flex-column justify-content-center align-items-center list-unstyled"
                key={el.name}
              >
                <li>
                  {" "}
                  <h2>{el.name}</h2>
                  <ul className="list-unstyled ">
                    {el.skills.map((skill, idx) => (
                      <li className="m-1" key={skill.name}>
                        <div
                          key={"div"}
                          className="col-12 d-flex justify-content-start align-items-start pulse"
                        >
                          {RenderIcon(skill, idx)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

const skills = [
  {
    name: "Front End",
    skills: [
      { name: "HTML", variant: "", bg: "black", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
      { name: "Bootstrap", variant: "", bg: "purple", icon: icon.bootStrap },
      {
        name: "Tailwinds",
        variant: "",
        bg: "rebeccaPurple",
        icon: icon.twCssIcon,
      },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "jQuery", variant: "light", bg: "", icon: icon.jQuery },
      { name: "React", variant: "secondary", icon: icon.react },
    ],
  },
  {
    name: "Back End",
    skills: [
      { name: "APIs", variant: "", bg: "orange", icon: icon.apiIcon },
      { name: "Node.js", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "Express.js", variant: "", bg: "lightGreen", icon: icon.express },
      { name: "MySQL", variant: "dark", icon: icon.mysqlIcon },
      { name: "Sequelize", variant: "light", bg: "", icon: icon.sqlIze },
      { name: "MongoDB", variant: "", bg: "black", icon: icon.mongo },
      { name: "Mongoose", variant: "light", bg: "", icon: icon.mongoose },
    ],
  },
];
