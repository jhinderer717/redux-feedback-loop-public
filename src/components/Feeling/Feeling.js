// import Axios from 'axios';
import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import './Feeling.css';
import {connect} from 'react-redux';


class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    } // end handleChange

    feelingToRedux = () => {
        // event.preventDefault();
        console.log('feelingToRedux this.state.feeling:', this.state.feeling);
        this.props.dispatch({
            type: "SET_FEELING",
            payload: this.state.feeling,
        });
    } // end feelingToRedux



        // console.log('in feelingToRedux');
        // Axios({
        //     method: 'POST',
        //     url: '/feeling',
        //     data: this.state
        // }).then((response) => {
        //     console.log('POST complete');
        // }).catch(err => {
        //     console.log('POST err', err);
        // }); // end axios



    render(){
        console.log('Feeling this.state:', this.state);
        return( // Can also just use <> </> instead of divs
            <div>
                How are you feeling today?
                <br></br>
                <input onChange={(event) => this.handleChange(event)} 
                    type="number" placeholder='1-6' min="1" max="6" />

                <Route>
                    <Link to="/understand">
                        <button onClick={this.feelingToRedux}>
                            Next
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

export default connect()(Feeling);

// Don't forget to import Component into parent Component