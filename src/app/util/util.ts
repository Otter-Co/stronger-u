import { WorkSet, Workout, Excersize } from '../state/rootReducer';

export function Match_WorkRes(w: WorkSet, groupID: string, workoutID: string, userID: string): boolean {
    return ((w.groupID === groupID) && (w.workoutID === workoutID) && (w.userID === userID));
}

export function X_Match_WorkRes(w: WorkSet, groupID: string, workoutID: string, userID: string): boolean {
    return ((w.groupID !== groupID) && (w.workoutID !== workoutID) && (w.userID !== userID));
}

export function Match_Excersize(e: Excersize, groupID: string, workoutID: string, excersizeID: string): boolean {
    return (e.groupID === groupID) && (e.workoutID === workoutID) && (e._id === excersizeID);
}
export function X_Match_Excersize(e: Excersize, groupID: string, workoutID: string, excersizeID: string): boolean {
    return (e.groupID !== groupID) || (e.workoutID !== workoutID) || (e._id !== excersizeID);
}

export function Match_Workout(w: Workout, groupID: string, workoutID: string) {
    return ((w.groupID === groupID) && (w._id === workoutID));
}

export function X_Match_Workout(w: Workout, groupID: string, workoutID: string) {
    return ((w.groupID !== groupID) || (w._id !== workoutID))
}

export function WSIsOwned(w: WorkSet, groupID: string, userID: string): boolean {
    return ((w.groupID === groupID) && (w.userID === userID));
}