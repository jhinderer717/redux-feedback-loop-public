import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Understand extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Understand?
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