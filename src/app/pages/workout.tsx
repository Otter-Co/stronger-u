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
                Workout
                <h2>Today program is Powerlifting</h2>
                <ul>
                    <li>Bench 2x2 @ 205lb</li>
                        <form>
                            <fieldset>
                                <legend>
                                    How did it feel?
                                </legend>
                                <input type="text" placeholder="this felt great!"/> <input type="button"/>
                                
                            </fieldset>
                        </form>
                    <li>Squats 2x2 @ 405lb</li>                    
                    <li>Rows 2x2 @ 135lb</li>
                    <li>Facepulls green banded </li>
                </ul>


                { children }
            </div>
        );
    }
}