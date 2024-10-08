import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Module = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  // Dummy data for articles, replace with actual articles for each module
  const moduleArticles = {
    module1: [
      { title: 'What is Cyber Hygiene?', link: 'https://example.com/article1' },
      { title: 'Importance of Cyber Hygiene', link: 'https://example.com/article2' },
    ],
    module2: [
      { title: 'Common Cyber Threats', link: 'https://example.com/article3' },
      { title: 'Detecting Phishing Attacks', link: 'https://example.com/article4' },
    ],
    module3: [
      { title: 'Protecting Your Data', link: 'https://example.com/article5' },
      { title: 'Using Strong Passwords', link: 'https://example.com/article6' },
    ],
    module4: [
      { title: 'Online Safety Tips', link: 'https://example.com/article7' },
      { title: 'Securing Your Social Media', link: 'https://example.com/article8' },
    ],
  };

  const articles = moduleArticles[`module${moduleId}`];

  return (
    <div className="modules-container">
      <h2>Module {moduleId}: Articles</h2>
      <div className="articles-list">
        {articles && articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="article-item">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </div>
          ))
        ) : (
          <p>No articles available for this module.</p>
        )}
      </div>
      <button
        className="quiz-button"
        onClick={() => navigate(`/quiz/${moduleId}`)}
      >
        Take Quiz
      </button>
    </div>
  );
};

export default Module;
