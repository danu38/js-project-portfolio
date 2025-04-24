import styled from "styled-components";
import techData from "../../data/techData.json";
import React from "react";

const Contact = () => {
  return (
    <TechContainer>
      <TechTitle>{techData.title}</TechTitle>
      <TechDesc>{techData.description}</TechDesc>
    </TechContainer>
  );
};

export default Tech;

// ---------- Styled Components ----------
const InfoContainer = styled.div`
  padding: 2rem;
  background-color: #d8d7df;
  display: flex;
  flex-direction: column;
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

const ContactTitle = styled.h2`
    font-size: 2rem;
  color: #eee8e8;
  font-family: "Nanum Gothic Coding", monospace;
  

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 1rem;
  }
`;

const ContactImg = styled.div`
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 5px solid #ffffff;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
margin-top: 3rem;
    @media (min-width: 768px) {
      width: 180px;
      height: 180px;
    }
  }
`;