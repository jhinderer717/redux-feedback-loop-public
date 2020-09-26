import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import './Feeling.css';


class Feeling extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                How are you feeling today?
                <br></br>
                <input type="number" placeholder='1-6' min="1" max="6" />

                <Route>
                    <Link to="/understand">
                        <button>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default Feeling;

// Don't forget to import Component into parent Component