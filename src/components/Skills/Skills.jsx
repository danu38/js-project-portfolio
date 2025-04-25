import React from 'react';
import styled from 'styled-components';
import skillData from '../../data/skills.json';

// Styled Components
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 2rem;
 
  justify-content: center;
  gap: 2rem;
  background-color: #1f0e5e;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;color: #e0e0eb;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  min-width: 200px;
  flex-direction: column;
  align-items: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8f4f4;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;flex-direction:column;
`;

const SkillItem = styled.div`
  background-color: #1f0e5e;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #f0e8e8;
`;

const Skills = () => {
  return (
    
    <SkillsWrapper>
      <Title>Skills</Title>

      {skillData.skills.map((category, index) => (
        <CategoryWrapper key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <SkillGrid>
            {category.skillset.map((skill, idx) => (
              <SkillItem key={idx}>{skill}</SkillItem>
            ))}
          </SkillGrid>
        </CategoryWrapper>
      ))}
    </SkillsWrapper>
   
  );
};

export default Skills;