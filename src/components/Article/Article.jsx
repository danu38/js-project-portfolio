import React from 'react';
import Card from './card';
import styled from 'styled-components';

import articleData from '../../data/articles.json'; //  project data
import './article.css';



const Section = styled.section`
padding: 2rem 4rem;
    align-items: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
    background-color: #E1D8F5;

`;


const Title = styled.h2`
  font-size: 2rem;
    font-weight: bold;
    
    text-align: left; /* Make sure text aligns to left */
    margin-bottom: 2rem;
      color: #050114;
      font-family: 'Nanum Gothic Coding', monospace;
`;

const Articles = () => {
  return (
    <Section>
      <Title>My Words</Title>
      {articleData.articles.map((article, index) => (
        <Card key={index} {...article} />
      ))}
    </Section>
  );
};

export default Articles;