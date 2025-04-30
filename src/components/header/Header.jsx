// import "./Header.css"; // Assuming you have a CSS file for styling
import ProfilePic from "../../../assets/profile.jpeg";
import styled from "styled-components";

import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import { Element } from 'react-scroll';

const HeaderSection = styled.header`
  padding: 5rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`;

const HeaderTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: left;
  padding-left: 1rem;
  width: 100%;

  h2,
  h4 {
    margin-bottom: 0rem;    color: #1a168a;
    font-family: 'Nanum Gothic Coding', monospace;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
 padding: 1px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
  }

  @media (min-width: 1024px) {
    padding: 200px;
  }
`;

const HeaderImage = styled.div`
  animation: grow 2s ease-out forwards;

  img {
    width: 100px; /* start small */
    height: 100px;
    border-radius: 50%;
    border: 5px solid #ffffff;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 3rem;

    @media (min-width: 768px) {
      width: 160px;
      height: 160px;
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const HeaderText = styled.div`
  max-width: 100%;
  text-align: left;
  font-family: 'Hina Mincho', serif;
  color: #444;

  h1 {
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    color: #777;
  }

  p {
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    max-width: 700px;
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


const Header = () => {
    return (

        <HeaderSection>


            <HeaderContainer>
                <HeaderImage>
                    <img src={ProfilePic} alt="Profile" />
                </HeaderImage>

                <HeaderText>
                    <HeaderTitle>
                        <h4>Hi I am Danushka👋</h4>
                        <h2>Full Stack Developer</h2>
                    </HeaderTitle>
                    <p>
                        Danushka is a passionate developer with a strong foundation in front-end technologies and experience across the full stack.  I am comfortable with version control using Git and collaborative development workflows, and I have also worked on dynamic back-end systems and database-driven applications. My versatility and hands-on experience with modern development tools make me a valuable contributor to any tech team.
                    </p>
                </HeaderText>
            </HeaderContainer>
            
<ScrollArrow>
  <Link to="tech" smooth={true} duration={600}>
    <FaChevronDown />
  </Link>
</ScrollArrow>

        </HeaderSection>
    );
};








export default Header;