import React from "react";

function ProjectList({Projects}){
    
        console.log(Projects);
        const projectElements = Projects.map((project) => {
          return (
            <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
          )
        })
        return (
          <div id="projects">
            <h2>Our Projects</h2>
            <div id="list-project">{/* render the ProjectItem Components here */}</div>
            <div id="list-project">{projectElements}</div>
          </div>
        );
      }
    


export default ProjectList;