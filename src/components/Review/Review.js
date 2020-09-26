import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


class Review extends Component {

    submitFeedback = () => {
        console.log('in Review, submitting:', this.props);
        let objToSend = {
            feeling: this.props.feeling,
            understand: this.props.understand,
            support: this.props.support,
            comment: this.props.comment,
        }
        axios({
            method: 'POST',
            url: '/review',
            data: objToSend
        }).then((response) => {
            console.log('response is:', response);
        }).catch((error) => {
            console.log('frick. - Colin Baumgard', error);
        }) // end axios POST
    } // end submit feedback

    render(){
        console.log('Review props:', this.props);
        return( // Can also just use <> </> instead of divs
            <div>
                <h3>Review Your Feedback</h3>
                {/* <br></br> */}
                <p>Feelings: <b>{this.props.feeling}</b></p>
                <p>Understanding: <b>{this.props.understand}</b></p>
                <p>Support: <b>{this.props.support}</b></p>
                <p>Comments: <b>{this.props.comment}</b></p>

                <Route>
                    <Link to="/thankyou">
                        <button onClick={this.submitFeedback}>
                            Submit
                        </button>
                    </Link>
                </Route>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    console.log('reduxState from inside mapStateToProps', reduxState);
    let locationProps = {
        feeling: reduxState.valuesReducer.feeling,
        understand: reduxState.valuesReducer.understand,
        support: reduxState.valuesReducer.support,
        comment: reduxState.valuesReducer.comment,
    };
    return locationProps;
}

export default connect(mapStateToProps)(Review);

// Don't forget to import Component into parent Component