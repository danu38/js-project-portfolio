import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/thesis.png';
import img2 from '../../assets/Joomlascan.png';
import img3 from '../../assets/wpscan.png';
import img4 from '../../assets/wpscan.png';


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 350px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Image = styled.img`
  
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #130303;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  color: #0f0000;
  margin-bottom: 0rem;
`;

const TagList = styled.div`
  margin-top: 0.5rem;
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

const Link = styled.a`
  margin-right: 1rem;
  text-decoration: none;
  color: #070707;
  font-weight: bold;
  border: 1px solid #4a4646;
  border-radius: 95px;
  background-color: #e0e0e0;
  padding: 0.3rem 1rem;
`;

const Links = styled.div`
  margin-top: 1rem;
  `;

  const imageMap = {
    "1": img1,
    "2": img2,
    "3": img3,
    "4": img4
  };

const card = ({ image, title, Description, tags, link }) => {

  const projectImage = imageMap[image]; 
    return (
        <CardWrapper>
            <Image src={projectImage} alt={title} />
            <Info>
                <Title>{title}</Title>
                <Desc>{Description}</Desc>

                <TagList>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagList>
                <Links>
                    <Link href={link} target="_blank" rel="noreferrer">🌐 Read more</Link>

                </Links>
            </Info>
        </CardWrapper>
    )
}




export default card;