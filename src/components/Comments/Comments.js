import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Comments.css';
import {connect} from 'react-redux';


class Comments extends Component {

    state = {
        comment: '',
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    } // end handleChange

    commentToRedux = () => {
        // event.preventDefault();
        console.log('commentToRedux this.state.comment:', this.state.comment);
        this.props.dispatch({
            type: "SET_COMMENT",
            payload: this.state.comment,
        });
    } // end commentToRedux

    render(){
        console.log('Comment this.state:', this.state);
        return( // Can also just use <> </> instead of divs
            <div>
                Any comments you want to leave?
                <br></br>
                <input onChange={this.handleChange}
                    className="inputClass" type="text" width="100px"/>

                <Route>
                    <Link to="/review">
                        <button onClick={this.commentToRedux}>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default connect()(Comments);

// Don't forget to import Component into parent Component