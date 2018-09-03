import * as React from 'react';

export class CoachPage extends React.Component 
{
    render ()
    {
        let {
            children
        } = this.props;

        return (
            <div className={ `CoachPage` }>
                <h2>Hello Coach Derek</h2>
                <h3>Create a group</h3>

                <p>Here are your group</p>
                <form>
                    <fieldset>
                        <div>
                            <input type="text"/> <input type="button"/>
                        </div>
                    </fieldset>
                </form>
                <h3>Powerlifting group: </h3>
                <form>
                    <fieldset>
                        <div>
                            <input type="text"/> <input type="button"/>
                        </div>
                        <div>
                            <input type="text"/> <input type="button"/>
                        </div>
                    
                    </fieldset>
                </form>

                <h3>Weightlifting group: </h3>
                <form>
                <fieldset>
                        <div>
                            <input type="text"/> <input type="button"/>
                        </div>
                        <div>
                            <input type="text"/> <input type="button"/>
                        </div>
                    </fieldset>
                </form>





                { children }
            </div>
        );
    }
}