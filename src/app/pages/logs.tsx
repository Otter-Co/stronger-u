import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../state/rootReducer';

export const LogsPage = connect(
    (state) => ({}),
    (dispatch) => ({}),
)(
    class LogsPage extends React.Component {
        render() {
            let {
                children
            } = this.props;

            return (
                <div className={`LogsPage`}>
                    Logs!
                {children}
                </div>
            );
        }
    }
);