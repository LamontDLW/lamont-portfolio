import React from "react";
import Project from "../data/components/project";
import projectdata from "../data/objects/projectdata";

const projects = projectdata.map(item => {
  return (
    <Project key={item.id} {...item} />
  )
})

export default function Projects() {
  return (
    <div id="Projects" className="Projects">
      <h1>projects</h1>
      <div className="project-grid">
        {projects}
      </div>
    </div>
  );
}
