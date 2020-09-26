import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Review extends Component {


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
                        <button>
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