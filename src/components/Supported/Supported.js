import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Supported extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                How well are you being supported?
                <br></br>
                <input type="number" placeholder='1-6' min="1" max="6" />

                <Route>
                    <Link to="/comments">
                        <button>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default Supported;

// Don't forget to import Component into parent Component