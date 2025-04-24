// import './Project.css';
import React from 'react';
import styled from 'styled-components';



const Card = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  /* max-width: 900px; */
  width: 100%; /* Allow responsive shrinking */
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
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
  font-size: 0.85rem;
`;
const Links = styled.div`
  margin-top: 1rem;
  a {
    margin-right: 1rem;
    text-decoration: none;
    color: #070707;
    font-weight: bold;
    border-radius: 95px;
    background-color: #e0e0e0;
    padding: 0.5rem 1rem;
  }
`;

const ProjectCard = ({ image, name, Description, tags, netlify, github }) => {
    return (
        <Card>
            <Image src={image} alt={name} className="project-image" />
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