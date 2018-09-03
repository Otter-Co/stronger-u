import { Action } from 'redux';

export const ADD_WORKOUT_GROUP = "workout-add-group";
export type AddWorkoutGroup = Action<string> & { name: string };
export const addWorkoutGroup = (name: string): AddWorkoutGroup => ({ type: ADD_WORKOUT_GROUP, name });


export const REM_WORKOUT_GROUP = "workout-rem-group";
export type RemWorkoutGroupAct = Action<string> & { id: string };
export const remWorkoutGroup = (id: string): RemWorkoutGroupAct => ({ type: REM_WORKOUT_GROUP, id, });


export const ADD_WORKOUT_ITEM = "workout-add-item";
export type AddWorkoutItemAct = Action<string> & { name: string, groupID: string };
export const addWorkoutItem = (name: string, groupID: string): AddWorkoutItemAct => ({ type: ADD_WORKOUT_ITEM, name, groupID });


export const REM_WORKOUT_ITEM = "workout-rem-item";
export type RemWorkoutItemAct = Action<string> & { id: string };
export const remWorkoutItem = (id: string): RemWorkoutItemAct => ({ type: REM_WORKOUT_ITEM, id });