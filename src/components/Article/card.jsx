import './Article.css';
import React from 'react';

const card = ({ image, title, Description, tags, link }) => {
    return (
        <div className="article-card">
            <img src={image} alt={title} className="article-image" />
            <div className="article-info">
                <h3>{title}</h3>
                <p>{Description}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="article-links">
                    <a href={link} target="_blank" rel="noreferrer">🌐 Read more</a>

                </div>
            </div>
        </div>
    )
}

export default card;