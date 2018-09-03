import * as React from 'react';

export class WorkoutPage extends React.Component 
{
    render ()
    {
        let {
            children
        } = this.props;

        return (
            <div className={ `WorkoutPage` }>
                <h2>Today program is Powerlifting</h2>
                <ul>
                    <li><strong>Bench </strong> 2x2 @ 205lb <i className="far fa-check-circle"></i></li>
                    <input className="fa fa-check" type="text" placeholder="this felt great!" /> <button>Submit</button>
                    <li><strong>Squats </strong>2x2 @ 405lb <i className="far fa-check-circle"></i></li>
                    <li><strong>Rows </strong>2x2 @ 135lb<i className="far fa-check-circle"></i></li>
                    <li><strong>Facepulls </strong>green banded <i className="far fa-check-circle"></i></li>
                </ul>


                { children }
            </div>
        );
    }
}