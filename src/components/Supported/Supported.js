import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Supported extends Component {

    state = {
        support: '',
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    } // end handleChange

    supportToRedux = () => {
        // event.preventDefault();
        console.log('supportToRedux this.state.support:', this.state.support);
        this.props.dispatch({
            type: "SET_SUPPORT",
            payload: this.state.support,
        });
    } // end supportToRedux

    render(){
        console.log('Support this.state:', this.state);
        return( // Can also just use <> </> instead of divs
            <div>
                How well are you being supported?
                <br></br>
                <input onChange={(event) => this.handleChange(event)} 
                    type="number" placeholder='1-6' min="1" max="6" />

                <Route>
                    <Link to="/comments">
                        <button onClick={this.supportToRedux}>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default connect()(Supported);

// Don't forget to import Component into parent Component