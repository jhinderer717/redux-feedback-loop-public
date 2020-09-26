import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Understand from '../Understand/Understand';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <Route path='/' exact>
            <Feeling />
          </Route>

          <Route path='/understand' exact>
            <Understand />
          </Route>

          <Route path="/supported">
            <Supported />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/thankyou">
            <ThankYou />
          </Route>

        </Router>

      </div>
    );
  }
}

export default App;
