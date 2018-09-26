import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, WorkUser } from '../state/rootReducer';

export const HomePage = connect<void, {}, {}, AppState>(
    (state) => ({
        currentUser: state.users.find(u => u._id === state.core.currentUserID),
    }),
    (dispatch) => ({

    })
)(
    class HomePage extends React.Component<{
        currentUser?: WorkUser
    }, {}>{
        render() {
            let {
                children,
                currentUser,
            } = this.props;

            return (
                <div className={`HomePage`}>
                    {/* <i className="far fa-user-circle fa-10x"></i> */}
                    <img src="../img/strengthUlogo.png" alt="Strength Unvieristy Logo"/>
                    <div className="container">
                        <h3>Hello {currentUser.name}, </h3>
                        <div>
                            <span>Workout for the week (9/02/2018): </span>
                            <div>
                                <strong>Powerlifting</strong>
                            </div>
                            <br/>
                        </div>
                        <h5>Maxes</h5>
                        <ul>
                            <li><strong>Squats:</strong> 405lb</li>
                            <li><strong>Bench:</strong> 265lb </li>
                            <li><strong>Deadlift:</strong> 700lb</li>
                        </ul>
                    </div>
                    {children}
                </div>
            );
        }
    }
);