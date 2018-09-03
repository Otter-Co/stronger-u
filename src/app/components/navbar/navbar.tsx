import * as React from 'react';

import './navbar.css';

export interface NavBarProps<IDTYPE>
{
    currentItem?: IDTYPE;
    items?: [string, IDTYPE][];
    onChange?: (id: IDTYPE) => void;
    disabledIDs?: IDTYPE[];
}

export interface NavBarState { }
export class NavBar<IDTYPE=string> extends React.Component<NavBarProps<IDTYPE>, NavBarState>
{
    render ()
    {
        let {
            currentItem = null,
            items = [],
            onChange = () => { },
            disabledIDs = [],
        } = this.props;

        let rItems = items.map(i => (
            <div
                key={ i[1] as any }
                className={
                    `NavBarItem${
                    i[1] === currentItem ? " Selected" : ""
                    }${
                    disabledIDs.indexOf(i[1]) > -1 ? " Disabled" : ""
                    }`
                }
                onClick={ (e) => onChange(i[1]) }
            >
                <p>{ i[0] }</p>
            </div>
        ));

        return (
            <div className={ `NavBar` }>
                { rItems }
            </div>
        );
    }
}
