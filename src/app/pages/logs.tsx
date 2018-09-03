import * as React from 'react';

export class LogsPage extends React.Component 
{
    render ()
    {
        let {
            children
        } = this.props;

        return (
            <div className={ `LogsPage` }>
                Logs!
                { children }
            </div>
        );
    }
}