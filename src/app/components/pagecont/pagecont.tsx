import * as React from 'react';

export interface PageContProps<IDTYPE = string>
{
    currentPage?: IDTYPE,
    pages?: [IDTYPE, JSX.Element][]
}

export interface PageContState 
{

}

export class PageContainer<IDTYPE = string> extends React.Component<PageContProps<IDTYPE>, PageContState>
{
    render ()
    {
        let {
            currentPage = -1,
            pages = []
        } = this.props;

        let curP = pages.find(p => p[0] === currentPage);

        return (
            <div className={ `PageCont` }>
                { curP ? curP[1] : null }
            </div>
        );
    }
}