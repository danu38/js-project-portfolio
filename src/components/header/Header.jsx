import "./Header.css"; // Assuming you have a CSS file for styling
import ProfilePic from "../../../assets/profile.jpeg"; // Adjust the path as necessary

const Header = () => {
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
};

export default Header;