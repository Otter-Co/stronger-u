import * as React from 'react';

import './navbar.css';

export interface NavBarProps<IDTYPE>
{
    currentItem?: IDTYPE;
    items?: [string, string, IDTYPE][];
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
            <div key={ i[2] as any }>
                <div className={ i[1] } />
                <div
                    className={
                        `NavBarItem${
                        i[2] === currentItem ? " Selected" : ""
                        }${
                        disabledIDs.indexOf(i[2]) > -1 ? " Disabled" : ""
                        }`
                    }
                    onClick={ (e) => onChange(i[2]) }
                >
                    <p>{ i[0] }</p>
                </div>
            </div >
        ));

        return (
            <div className={ `NavBar` }>
                { rItems }
            </div>
        );
    }
}
