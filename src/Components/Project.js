import React from "react";
const leftArrowIcon = require("../images/lefArrowIcon.png");

const Project = ({ setProject, projectObject }) => {
  const { title, subtitle, text, img1, img2 } = projectObject;

  return (
    <div  >
      <img onClick={() => setProject(undefined)} src={leftArrowIcon} id="leftArrowIcon" alt="goBackArrow"/>
      <div className="projectContainer slideUp">
        <div>
          <div className="projectTextContainer">
            <h1 className="singleProjectTitle">{title}</h1>
            <h2 className="singleProjectSubtitle">{subtitle}</h2>
            <p className="projectText">{text}</p>
          </div>
          {img1 && title !== "SPOTIFY" && (
            <img className="projectImage1" src={img1} alt="spotify" />
          )}
        </div>
        <div className="rightColum">
          {title === "SPOTIFY" && (
            <img className="projectImage2 upperImg" src={img1} alt="firstPic" />
          )}
          <img className="projectImage2" src={img2} alt="secondPic"/>
        </div>
      </div>
    </div>
  );
};

export default Project;
