import styled from "styled-components";
import contactData from "../../data/contact.json";
import React from "react";
import ProfilePic from "../../../assets/profile.jpeg";
import { Element } from 'react-scroll';

const Contact = () => {
    const data = contactData.contact[0];
  return (
    <Element name="contact">
    <InfoContainer>
      <ContactTitle>{data.title}</ContactTitle>
        <ContactImage>
            <img src={ProfilePic} alt="Profile" /></ContactImage>
      <Name>{data.name}</Name>
      <Name>{data.mobile}</Name>
      <Name>{data.email}</Name>
      <SocialLinks>
        {data.socials.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.platform} />
          </a>
        ))}
      </SocialLinks>
    </InfoContainer>
    </Element>
  );
};

export default Contact;

// ---------- Styled Components ----------
const InfoContainer = styled.div`
  padding: 2rem;
  background-color: #f7f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  flex-wrap: wrap;
  color: #f5f0f0;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ContactTitle = styled.h2`
    font-size: 2rem;
  color: #1e104e;
  font-family: "Nanum Gothic Coding", monospace;
  

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 1rem;
  }
`;

const Name = styled.h2`
    font-size: 2rem;
  color: #0c0c0c;
  font-family: "Nanum Gothic Coding", monospace;
  

  @media (max-width: 768px) {
    font-size: 1.2rem;
    gap: 0rem;
  }
`;

const ContactImage = styled.div`
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

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  a img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

