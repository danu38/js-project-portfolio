import React from "react";
import styled from "styled-components";

function Card({
  title,
  subtitle,
  buttonText,
  buttonColor,
  buttonTextColor,
  primaryColor,
  secondaryColor
}) {
  return (
      //html stuff
    // <h1>something</h1>
    <cardStyle secondaryColor={secondaryColor}>
        <Header primaryColor={primaryColor}>
          <Title>{title}</Title>
          </Header>
        <Subtitle>{subtitle}</Subtitle>
        <Button buttonColor={buttonColor} buttonTextColor={buttonTextColor}>{buttonText}</Button>
    </cardStyle>
    )
} 

const cardStyle = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
  padding: 20px;
  `;
  
  
  
// const emojiStyle = styled.span`

// ;
  
//   '