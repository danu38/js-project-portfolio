import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json'; //  project data
import './Project.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Featured Projects</h2>
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;