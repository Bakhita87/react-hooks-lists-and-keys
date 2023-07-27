import React from 'react';


function ProjectItem ({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectItem;