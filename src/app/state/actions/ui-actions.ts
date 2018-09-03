import { Action } from 'redux';

export const TOGGLE_NAV = "ui_toggle_nav";
export const toggleNav = (): Action => ({ type: TOGGLE_NAV, });