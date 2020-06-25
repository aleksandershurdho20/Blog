import React from "react";
import { Link } from "react-router-dom";

const Home = ({ news, deleteNews }) => {
  const renderNews = () =>
    news.map(item => {
      const { title, description, author, date, id } = item;
      return !item ? null : (
        <div className="news-item">
          <div className="delete-button" onClick={() => deleteNews(id)}>
            <i className="fas fa-times"></i>
          </div>
          <div className="news-item-title-container">
            <p>{title}</p>
          </div>
          <div className="news-item-description-container">
            <p>{description}</p>
          </div>
          <div className="news-item-footer">
            <div className="news-item-author-container">
              <p>{`By ${author}`}</p>
            </div>
            <div className="news-item-date-container">
              <p>{date}</p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <div className="header">
        <div className="title-container">
          <h3>News</h3>
        </div>
        <div className="add-button-container">
          <Link to="/add-news">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
      <div className="news-container">{renderNews()}</div>
    </>
  );
};

export default Home;
