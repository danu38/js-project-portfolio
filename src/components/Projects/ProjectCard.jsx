// import './Project.css';
import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/comingsoon.jpg';




const Card = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 900px; 
  padding: 1rem;
  width: 100%; /* Allow responsive shrinking */
  box-sizing: border-box; /* Include padding in width calculation */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
 
  max-width: 300px;
  height: auto; 
  object-fit: cover;
  aspect-ratio: 3 / 2;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  color: #141414;
`;

const TagList = styled.div`
  margin-top: 1rem;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: #101010;
  color: #f9f4f4;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  font-size: 0.65rem; margin-bottom: 0.65rem;
@media screen and (max-width: 768px) {
  font-size: 0.85rem;
}

`;
const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  a {
    margin-right: 1rem;
    text-decoration: none;
    color: #070707;
    font-weight: bold;
    border-radius: 95px;
    background-color: #e0e0e0;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* optional: center the buttons */

    a {
      width: 100%; /* make buttons full width */
      text-align: center;
    }
  }

`;

const imageMap = {
  "1": img1,
  "2": img2,
  "3": img3,
  "4": img4,
  "5": img5,
  "6": img6,
  "7": img7
};

const ProjectCard = ({ image, name, Description, tags, netlify, github }) => {
    
  const projectImage = imageMap[image]; 
  return (
        <Card>
            <Image src={projectImage} alt={name} className="project-image" />
            <Info>
                <Title>{name}</Title>
                <Desc>{Description}</Desc>
                <TagList>
                    {tags.map((tag, index) => (
                        <Tag key={index} className="tag">{tag}</Tag>
                    ))}
                </TagList>
                <Links>
                    <a href={netlify} target="_blank" rel="noreferrer">🌐 Live demo</a>
                    <a href={github} target="_blank" rel="noreferrer">💻 View the codeCode</a>
                </Links>
            </Info>
        </Card>
    )
}

export default ProjectCard;