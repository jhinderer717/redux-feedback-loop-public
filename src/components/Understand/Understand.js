import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Understand extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                How well are you understanding the content?
                <br></br>
                <input type="number" placeholder='1-6' min="1" max="6" />

                <Route>
                    <Link to="/supported">
                        <button>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default Understand;

// Don't forget to import Component into parent Component