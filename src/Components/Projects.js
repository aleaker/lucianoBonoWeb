import React, { useState, useEffect } from "react";
import ProjectsDisplay from "./ProjectsDisplay/ProjectsDisplay";
import Project from "./Project";
import { setObject } from "../helpers/setObject";

const Projects = () => {
  const [project, setProject] = useState(undefined);
  const [projectObject, setProjectObject] = useState({});

  useEffect(() => {
    setObject(project, setProjectObject);
  }, [project]);

  const handleClick = (title) => {
    setProject(title);
  };

  return (
    <div className="textComponentContainer slideUp columns">
      {project === undefined && <ProjectsDisplay setProject={handleClick} />}
      {project !== undefined && <Project setProject={handleClick} projectObject={projectObject} />}
    </div>
  );
};

export default Projects;
