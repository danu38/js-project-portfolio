import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json'; //  project data
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { Element } from 'react-scroll';


const Section = styled.section`
  padding: 2rem 4rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
  color: #1a168a;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const ScrollArrow = styled.div`
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 2rem;
    color: #aaa;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }
`;

const Projects = () => {
  return (
<Element name="projects">

    <Section>
      <Title>Featured Projects</Title>
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}

<ScrollArrow>
  <Link to="articles" smooth={true} duration={600}>
    <FaChevronDown />
  </Link>
</ScrollArrow>
    </Section>

    </Element>
    
  );
};

export default Projects;