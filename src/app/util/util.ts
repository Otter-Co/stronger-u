import { WorkSet, Workout } from '../state/rootReducer';
export function Match_WorkRes (w: WorkSet, groupID: string, workoutID: string, userID: string): boolean
{
    return ((w.groupID === groupID) && (w.workoutID === workoutID) && (w.userID === userID));
}

export function X_Match_WorkRes (w: WorkSet, groupID: string, workoutID: string, userID: string): boolean 
{
    return ((w.groupID !== groupID) && (w.workoutID !== workoutID) && (w.userID !== userID));
}

export function Match_Workout (w: Workout, groupID: string, workoutID: string)
{
    return ((w.groupID === groupID) && (w._id === workoutID));
}

export function X_Match_Workout (w: Workout, groupID: string, workoutID: string)
{
    return ((w.groupID !== groupID) || (w._id !== workoutID))
}

export function WSIsOwned (w: WorkSet, groupID: string, userID: string): boolean
{
    return ((w.groupID === groupID) && (w.userID === userID));
}