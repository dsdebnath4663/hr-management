import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div>
        <h1 className="next-error-h1 not-found-message">404</h1>
        <div style={{ display: 'inline-block' }}>
          <h2 className="not-found-text">This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
