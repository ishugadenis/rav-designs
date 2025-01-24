import React from "react";
import "./Webportfolio.css";
import data from "../../constants/data";

const Webportfolio = () => {
  return (
    <div className="web-projects">
      <div className="websites">
        {data.projects.map((project, index) => (
          <div key={index}>
            <div className="project-container">
              <a href={project.link} target="_blank">
                <img src={project.image} alt="" />
                <a className="project-title">{project.title}</a>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webportfolio;
