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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt="" />
                <p className="project-title">{project.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webportfolio;
