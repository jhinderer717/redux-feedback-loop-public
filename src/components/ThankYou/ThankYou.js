import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class ThankYou extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                Thank you
                <br></br>

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

export default connect()(ThankYou);

// Don't forget to import Component into parent Component