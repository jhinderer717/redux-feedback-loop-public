import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class Review extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Review
                <br></br>

                <Route>
                    <Link to="/thankyou">
                        <button>
                            Submit
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default Review;

// Don't forget to import Component into parent Component