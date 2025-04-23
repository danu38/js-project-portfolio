import styled from "styled-components";
import techData from "../../data/techData.json";
import React from "react";

const Tech = () => {
  return (
    <TechContainer>
      <TechTitle>{techData.title}</TechTitle>
      <TechDesc>{techData.description}</TechDesc>
    </TechContainer>
  );
};

export default Tech;

// ---------- Styled Components ----------
const TechContainer = styled.div`
  padding: 2rem;
  background-color: #211668;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  color: #777;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
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