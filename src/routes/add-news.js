import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getTimeOfPublish } from "../utils/date-manager";
import Id from "../utils/id";

const AddNews = ({ addToNews }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();
    const newsObject = {
      id: Id(),
      title,
      author,
      description,
      date: getTimeOfPublish(),
    };
    console.log(newsObject);
    addToNews(newsObject);
    //? Clear inputs
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <>
      <div className="header">
        <div className="title-container">
          <h3>Add News</h3>
        </div>
        <div className="add-button-container">
          <Link to="/">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="form-container-wrapper">
        <div className="form-container">
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={title}
                className="form-control"
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                value={author}
                className="form-control"
                onChange={e => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Short Description</label>
              <textarea
                value={description}
                className="form-control"
                rows="3"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Add To News
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNews;
