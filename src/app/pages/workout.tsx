import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../state/rootReducer';

export const WorkoutPage = connect<void, {}, {}, AppState>(
    (state) => ({}),
    (dispatch) => ({}),
)(
    class WorkoutPage extends React.Component {
        render() {
            let {
                children
            } = this.props;

            return (
                <div className={`WorkoutPage`}>
                    <h2>Today program is Powerlifting</h2>
                    <ul>
                        <li><strong>Bench </strong> 2x2 @ 205lb <i className="far fa-check-circle"></i></li>
                        <input className="fa fa-check" type="text" placeholder="This felt heavy!" /> <button>Submit</button>
                        <li><strong>Squats </strong>2x2 @ 405lb <i className="far fa-check-circle"></i></li>
                        <li><strong>Rows </strong>2x2 @ 135lb<i className="far fa-check-circle"></i></li>
                        <li><strong>Facepulls </strong>green banded <i className="far fa-check-circle"></i></li>
                    </ul>


                    {children}
                </div>
            );
        }
    }
);