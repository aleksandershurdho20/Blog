import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navigation from '../src/Components/Navigation.js'
import Newspage from './Components/News/NewsPage';
import CreateNews from './Components/News/CreateNews.js'
import DeleteNews from './Components/News/DeleteNews.js'

function App() {
  return (
    <Router>
        <div className="App">
     <Navigation/>
    <Switch>
      <Route exact path="/Newspage" component={Newspage}/>
      <Route exact path="/CreateNews" component={CreateNews}/>
      <Route exact path="/DeleteNews" component={DeleteNews}/>



    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
