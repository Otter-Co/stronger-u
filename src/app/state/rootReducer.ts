import * as redux from 'redux';

import ui, { UIState } from './reducers/ui-reducer';

export default redux.combineReducers<UIState>({
    ui
});

export interface AppState 
{
    ui: UIState,
}