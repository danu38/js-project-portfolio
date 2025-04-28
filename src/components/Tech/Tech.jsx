import styled from "styled-components";
import techData from "../../data/techData.json";
import React from "react";
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';



const Tech = () => {
  return (
    <Element name="tech">
      <TechContainer>
        <TextContent>
          <TechTitle>{techData.title}</TechTitle>
          <TechDesc>{techData.description}</TechDesc>
        </TextContent>
        <ScrollArrow>
          <Link to="projects" smooth={true} duration={600}>
            <FaChevronDown />
          </Link>
        </ScrollArrow>
      </TechContainer>
    </Element>
  );
};

export default Tech;

// ---------- Styled Components ----------
const TechContainer = styled.div`
  padding: 8rem 2rem;
  background-color: #211668;
  display: flex;
  flex-direction: column; /* now vertical! */
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  color: #777;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;display: flex;
    flex-direction: row; /* now vertical! */
  }
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

const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center; /* center text */
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column; /* now vertical! */
  }
`;

const TechTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  color: #eee8e8;
  font-family: "Nanum Gothic Coding", monospace;
  padding-right: 5rem;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 1rem;
    display: flex;
    flex-direction: row; /* now vertical! */
  
  }
`;

const TechDesc = styled.div`
  max-width: 600px;
  text-align: left;
  font-family: "Nanum Gothic Coding", monospace;
  color: #777;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;