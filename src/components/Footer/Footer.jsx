import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e2167;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 1rem 0;
`;

const Scroller = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scroll 15s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Text = styled.span`
  display: inline-block;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Nanum Gothic Coding", monospace;
  padding-right: 3rem; /* space between repeats */
`;

const Footer = () => {
  const repeatText = "Danushka Somasiri · Fullstack Developer · ";

  return (
    <FooterContainer>
      <Scroller>
        <Text>{repeatText.repeat(10)}</Text>
        <Text>{repeatText.repeat(10)}</Text>
      </Scroller>
    </FooterContainer>
  );
};


export default Footer;