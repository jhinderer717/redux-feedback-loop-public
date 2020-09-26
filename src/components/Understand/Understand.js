import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Understand extends Component {

    state = {
        understand: '',
    }

    handleChange = (event) => {
        this.setState({
            understand: event.target.value
        });
    } // end handleChange

    understandToRedux = () => {
        // event.preventDefault();
        console.log('understandToRedux this.state.understand:', this.state.understand);
        this.props.dispatch({
            type: "SET_UNDERSTAND",
            payload: this.state.understand,
        });
    } // end understandToRedux

    giveWarning = () => {
        console.log('Enter a value');
        alert("Enter a value.");
    } // end giveWarning

    render(){
        console.log('Understand this.state:', this.state);
        return( // Can also just use <> </> instead of divs
            <div>
                How well are you understanding the content?
                <br></br>
                <input onChange={(event) => this.handleChange(event)} 
                    type="number" placeholder='1-6' min="1" max="6" />

                {                                       // conditional renderind works here because every
                    this.state.understand === '' ?      // change on the page re-renders the return function
                    <button onClick={this.giveWarning}>
                        Next
                    </button>
                    :
                    <Route>
                        <Link to="/supported">
                            <button onClick={this.understandToRedux}>
                                Next
                            </button>
                        </Link>
                    </Route>
                }
            </div>
        );
    }
}

export default connect()(Understand);

// Don't forget to import Component into parent Component