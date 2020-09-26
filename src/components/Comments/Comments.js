import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Comments extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Any comments you want to leave?
                <br></br>
                <input type="text"/>

                <Route>
                    <Link to="/review">
                        <button>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default Comments;

// Don't forget to import Component into parent Component