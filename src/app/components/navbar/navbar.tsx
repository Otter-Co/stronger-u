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

        let rItems = items.map(item => (
            <div key={ item[2] as any } onClick={ (e) => onChange(item[2]) }>
                <div className={ item[1] } />
                <div
                    className={ 'NavBarItem' +
                        (item[2] === currentItem ? " Selected" : "") +
                        (disabledIDs.indexOf(item[2]) > -1 ? " Disabled" : "")
                    }
                >
                    <p>{ item[0] }</p>
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
