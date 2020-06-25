import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//* Components
import Home from "./routes/home";
import AddNews from "./routes/add-news";

function App() {
  const [news, setNews] = useState([]);

  const addToNews = newsObject => {
    if (!newsObject) return;
    setNews(prev => [...prev, newsObject]);
  };

  const deleteNews = id => {
    const newNews = news.filter(item => item.id !== id);
    setNews(newNews);
  };

  return (
    <div className="content-wrapper">
      <div className="content">
        <Router>
          <Route exact path="/">
            <Home news={news} deleteNews={deleteNews} />
          </Route>
          <Route path="/add-news">
            <AddNews addToNews={addToNews} />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
