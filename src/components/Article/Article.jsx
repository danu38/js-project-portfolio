import React from 'react';
import Card from './card';
import styled from 'styled-components';

import articleData from '../../data/articles.json'; //  project data
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { Element } from 'react-scroll';



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
    text-align: left; 
    margin-bottom: 2rem;
    color: #050114;
    font-family: 'Nanum Gothic Coding', monospace;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row on larger screens */
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

const Articles = () => {
  return (
    <Element name="articles">
      <Section>
        <Title>My Words</Title>
        <Grid>
          {articleData.articles.map((article, index) => (
            <Card key={index} {...article} />
          ))}
        </Grid>
        <ScrollArrow>
          <Link to="skills" smooth={true} duration={600}>
            <FaChevronDown />
          </Link>
        </ScrollArrow>
      </Section>
    </Element>
  );
};

export default Articles;