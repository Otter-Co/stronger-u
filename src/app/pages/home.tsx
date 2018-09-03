import * as React from 'react';
import { connect } from 'react-redux';

export const HomePage = connect((state) => ({
    
}))(
    class HomePage extends React.Component 
    {
        render ()
        {
            let {
                children
            } = this.props;

            return (
                <div className={ `HomePage` }>
                <i className="far fa-user-circle fa-10x"></i>
                    <h2>Stronger University</h2>
                    <h3>Welcome Andre</h3>
                    <p><strong>9/02/2018</strong></p> 
                    <p>This is your workout for today: 
                        <div>
                            <strong>Powerlifting!!! </strong>
                        </div>
                        
                </p>
                    <h5>Strongest lifts</h5>
                    <ul>
                        <li><strong>Squats:</strong> 405lb</li>
                        <li><strong>Bench:</strong> 265lb </li>
                        <li><strong>Deadlift:</strong> 700lb</li>
                    </ul>
                    { children }
                </div>
            );
        }
    }
);