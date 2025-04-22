// import "./Header.css"; // Assuming you have a CSS file for styling
import ProfilePic from "../../../assets/profile.jpeg"; // Adjust the path as necessary
import styled from "styled-components";

const HeaderSection = styled.header`
  padding: 2rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const HeaderImage = styled.div`
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

const Header = () => {
    return (
        <HeaderSection>

            <HeaderContainer>
                <HeaderImage>
                    <img src={ProfilePic} alt="Profile" />
                </HeaderImage>

                <HeaderText>
                    <HeaderTitle>
                        <h4>Hi I am Danushka</h4>
                        <h2>Full Stack Developer</h2>
                    </HeaderTitle>
                    <p>
                        Danushka is a passionate developer with a strong foundation in front-end technologies and experience across the full stack. Comfortable with version control using Git and collaborative development workflows, they’ve also worked on dynamic back-end systems and database-driven applications. Their versatility and hands-on experience with modern development tools make them a valuable contributor to any tech team.
                    </p>
                </HeaderText>
            </HeaderContainer>
        </HeaderSection>
    );
};

/* const Header = () => {
    return (
        <header className="header">
            <div className="header-title">
                <h4>Hi I am Danushka</h4>
                <h2>Full Stack Developer</h2>
            </div>
            <div className="header-container">
                <div className="header-image">
                    <img src={ProfilePic} alt="Profile" />
                </div>
                <div className="header-text">
                    <p>Danushka is a passionate developer with a strong foundation in front-end technologies and experience across the full stack. Comfortable with version control using Git and collaborative development workflows, they’ve also worked on dynamic back-end systems and database-driven applications. Their versatility and hands-on experience with modern development tools make them a valuable contributor to any tech team.</p>
                </div>
            </div>
        </header>
    );
}; */






export default Header;