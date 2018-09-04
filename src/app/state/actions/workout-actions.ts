import { Action } from 'redux';

export const enum WorkoutActionTypes {
    USER_JOIN_GROUP = "workout-user-join-group",
    USER_LEAVE_GROUP = "workout-user-leave-group",

    ADD_WORKOUT_GROUP = "workout-add-group",
    EDIT_WORKOUT_GROUP = "workout-edit-group",
    REM_WORKOUT_GROUP = "workout-rem-group",

    ADD_WORKOUT = "workout-add-item",
    EDIT_WORKOUT = "workout-edit-item",
    REM_WORKOUT = "workout-rem-item",

    ADD_EXCERSIZE = "workout-add-excersize",
    EDIT_EXCERSIZE = "workout-edit-excersize",
    REM_EXCERSIZE = "workout-rem-excersize",

    EDIT_WORKOUT_SETS = "workout-edit-set",
}

export type UserJoinGroupAct =
    Action<WorkoutActionTypes.USER_JOIN_GROUP> & { userID: string, groupID: string };
export type UserLeaveGroupAct =
    Action<WorkoutActionTypes.USER_LEAVE_GROUP> & { userID: string, groupID: string };

export type AddWorkoutGroupAct =
    Action<WorkoutActionTypes.ADD_WORKOUT_GROUP> & { ownerID: string, groupID: string, name: string, };
export type EditWorkoutGroupAct =
    Action<WorkoutActionTypes.EDIT_WORKOUT_GROUP> & { groupID: string, edits: any };
export type RemWorkoutGroupAct =
    Action<WorkoutActionTypes.REM_WORKOUT_GROUP> & { groupID: string };

export type AddWorkoutItemAct =
    Action<WorkoutActionTypes.ADD_WORKOUT> & { groupID: string, workoutID: string, name: string, wType: string };
export type EditWorkoutItemAct =
    Action<WorkoutActionTypes.EDIT_WORKOUT> & { groupID: string, workoutID: string, edits: any };
export type RemWorkoutItemAct =
    Action<WorkoutActionTypes.REM_WORKOUT> & { groupID: string, workoutID: string };

export type AddExcersizeItemAct =
    Action<WorkoutActionTypes.ADD_EXCERSIZE> & { groupID: string, workoutID: string, excersizeID: string, name: string, wType: string };
export type EditExcersizeItemAct =
    Action<WorkoutActionTypes.EDIT_EXCERSIZE> & { groupID: string, workoutID: string, excersizeID: string, edits: any };
export type RemExcersizeItemAct =
    Action<WorkoutActionTypes.REM_EXCERSIZE> & { groupID: string, workoutID: string, excersizeID: string };

export type EditWorkoutSetsAct =
    Action<WorkoutActionTypes.EDIT_WORKOUT_SETS> & { groupID: string, workoutID: string, userID: string, edits: any };

export namespace WorkoutActions {

    export const userJoinGroup = (userID: string, groupID: string): UserJoinGroupAct =>
        ({ type: WorkoutActionTypes.USER_JOIN_GROUP, userID, groupID });
    export const userLeaveGroup = (userID: string, groupID: string): UserLeaveGroupAct =>
        ({ type: WorkoutActionTypes.USER_LEAVE_GROUP, userID, groupID });

    export const addWorkoutGroup = (ownerID: string, groupID: string, name: string): AddWorkoutGroupAct =>
        ({ type: WorkoutActionTypes.ADD_WORKOUT_GROUP, ownerID, groupID, name, });
    export const editWorkoutGroup = (groupID: string, edits: any): EditWorkoutGroupAct =>
        ({ type: WorkoutActionTypes.EDIT_WORKOUT_GROUP, groupID, edits });
    export const remWorkoutGroup = (groupID: string): RemWorkoutGroupAct =>
        ({ type: WorkoutActionTypes.REM_WORKOUT_GROUP, groupID, });

    export const addWorkoutItem = (groupID: string, workoutID: string, name: string, wType: string): AddWorkoutItemAct =>
        ({ type: WorkoutActionTypes.ADD_WORKOUT, groupID, workoutID, name, wType });
    export const editWorkoutItem = (groupID: string, workoutID: string, edits: any): EditWorkoutItemAct =>
        ({ type: WorkoutActionTypes.EDIT_WORKOUT, groupID, workoutID, edits });
    export const remWorkoutItem = (groupID: string, workoutID: string): RemWorkoutItemAct =>
        ({ type: WorkoutActionTypes.REM_WORKOUT, groupID, workoutID });

    export const addExcersizeItem = (groupID: string, workoutID: string, excersizeID: string, name: string, wType: string): AddExcersizeItemAct =>
        ({ type: WorkoutActionTypes.ADD_EXCERSIZE, groupID, workoutID, excersizeID, name, wType, });
    export const editExcersizeItem = (groupID: string, workoutID: string, excersizeID: string, edits: any): EditExcersizeItemAct =>
        ({ type: WorkoutActionTypes.EDIT_EXCERSIZE, groupID, workoutID, excersizeID, edits });
    export const remExcersizeItem = (groupID: string, workoutID: string, excersizeID: string, ): RemExcersizeItemAct =>
        ({ type: WorkoutActionTypes.REM_EXCERSIZE, groupID, workoutID, excersizeID, });

    export const editWorkoutSets = (groupID: string, workoutID: string, userID: string, edits: any): EditWorkoutSetsAct =>
        ({ type: WorkoutActionTypes.EDIT_WORKOUT_SETS, groupID, workoutID, userID, edits });
}