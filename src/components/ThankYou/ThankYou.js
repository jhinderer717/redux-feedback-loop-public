import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class ThankYou extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Thank you
                <Route>
                    <Link to="/">
                        <button>
                            Leave New Feedback
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default ThankYou;

// Don't forget to import Component into parent Component