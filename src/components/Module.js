import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Module = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  // Dummy data for articles, replace with actual articles for each module
  const moduleArticles = {
    module1: [
      { title: 'Best practices for strong passwords and secure authentication', link: 'https://www.it.ucsb.edu/general-security-resources/password-best-practices' },
      { title: 'Guide to implementing multi-factor authentication', link: 'https://docs.tenable.com/vulnerability-management/best-practices/security/Content/MultiFactorAuthentication.htm' },
      { title: 'Role based access control explained', link: 'https://www.ibm.com/think/topics/rbac#:~:text=Role%2Dbased%20access%20control%20(RBAC)%20is%20a%20model%20for,cant%20touch%20firewall%20settings' },
    ],
    module2: [
      { title: 'Data encryption best practices', link: 'https://www.imperva.com/learn/data-security/data-at-rest/#:~:text=Data%20at%20Rest%20Encryption,-Encryption%20is%20the&text=Hard%20disk%20encryption%20is%20the,are%20useless%20to%20anyone%20else' },
      { title: 'Data masking and anonymization techniques', link: 'https://www.imperva.com/learn/data-security/anonymization/#:~:text=from%20the%20data.-,Data%20Anonymization%20Techniques,*%E2%80%9D%20or%20%E2%80%9Cx%E2%80%9D' },
    ],
    module3: [
      { title: 'OWASP Top 10', link: 'https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/' },
      { title: 'How to conduct effective code reviews', link: 'https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/' },
    ],
    module4: [
      { title: 'Best practices for securing API endpoints', link: 'https://nilesecure.com/network-security/what-is-network-segmentation-how-it-works-why-it-matters#:~:text=Network%20segmentation%20allows%20for%20better,isolated%20from%20general%20network%20traffic' },
      { title: 'How to use OAuth and JWT for API authentication', link: 'https://www.f5.com/glossary/firewall-security' },
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
