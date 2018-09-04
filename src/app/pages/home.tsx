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
                    <i className="far fa-user-circle fa-10x"></i>
                    <h2>Stronger University</h2>
                    <h3>Welcome {currentUser.name}</h3>
                    <p><strong>9/02/2018</strong></p>
                    <div>
                        <span>This is your workout for today:</span>
                        <div>
                            <strong>Powerlifting!!! </strong>
                        </div>

                    </div>
                    <h5>Strongest lifts</h5>
                    <ul>
                        <li><strong>Squats:</strong> 405lb</li>
                        <li><strong>Bench:</strong> 265lb </li>
                        <li><strong>Deadlift:</strong> 700lb</li>
                    </ul>
                    {children}
                </div>
            );
        }
    }
);