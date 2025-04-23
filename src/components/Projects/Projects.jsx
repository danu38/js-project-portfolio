import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json'; //  project data
import styled from 'styled-components';


const Section = styled.section`
  padding: 2rem 4rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;width: 100%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
  color: #1a168a;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const Projects = () => {
  return (
    <Section>
      <Title>Featured Projects</Title>
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Section>
  );
};

export default Projects;