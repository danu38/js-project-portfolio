import React from 'react';
import Card from './card';

import articleData from '../../data/articles.json'; //  project data
import './article.css';

const Articles = () => {
  return (
    <section className="articles">
      <h2 className="articles-title">My Words</h2>
      {articleData.articles.map((article, index) => (
        <Card key={index} {...article} />
      ))}
    </section>
  );
};

export default Articles;