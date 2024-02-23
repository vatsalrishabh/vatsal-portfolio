import React from 'react';

const Project = () => {
  return (
    <div id="Project">
      <div className="Project-top">
        <div className="Project-heading">
          <h1>Projects</h1>
        </div>
      </div>
      <div className="Project-middle">
        <div className="project">Project one</div>
        <div className="project">Project two</div>
        <div className="project">Project three</div>
        <div className="project">Project four</div>
        <div className="project">Project five</div>
      </div>
      <div className="Project-bottom">
        <button>Download CV</button>
      </div>
    </div>
  );
}

export default Project;
