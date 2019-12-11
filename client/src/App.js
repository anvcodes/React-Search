import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Saved from "./pages/SavedBooks"
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

   

class App extends React.Component{
  render() {
    return (
      
      <Router>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/SavedBooks"}>My Saved Books</Link></li>
        </ul>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/SavedBooks" component={Saved}></Route>
    </Router>
  );
  }
}

export default App;