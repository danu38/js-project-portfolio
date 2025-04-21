import './Project.css';
import React from 'react';
const ProjectCard = ({ image, name, Description, tags, netlify, github }) => {
return (
    <div className="project-card">
        <img src={image} alt={name} className="project-image" />
        <div className="project-info">
            <h3>{name}</h3>
            <p>{Description}</p>
            <div className="tags">
                {tags.map((tag,index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={netlify} target="_blank" rel="noreferrer">🌐 Live demo</a>
                <a href={github} target="_blank" rel="noreferrer">💻 View the codeCode</a>
            </div>
        </div>
    </div>
)
}

export default ProjectCard;