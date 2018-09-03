import * as React from 'react';

export class HomePage extends React.Component 
{
    render ()
    {
        let {
            children
        } = this.props;

        return (
            <div className={ `HomePage` }>
                <h3>Welcome Andre</h3>
                <h4>Today date is: 9/02/2018</h4>
                <p>This is your workout for today <br/>
                Today is push day!!!
                </p>
                <h5>This is your strongest lift</h5>
                <ul>
                    <li>Squats: 405lb</li>
                    <li>Bench : 265lb </li>
                    <li>Deadlift : 700lb</li>
                </ul>
                { children }
            </div>
        );
    }
}