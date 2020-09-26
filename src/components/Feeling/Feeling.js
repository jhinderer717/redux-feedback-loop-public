import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';


class Feeling extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Feeling?
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