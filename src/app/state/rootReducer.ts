import { Action, Reducer } from 'redux';
import uuid from 'uuid';
import { } from './actions/ui-actions';
import { WorkoutActionTypes, UserJoinGroupAct, UserLeaveGroupAct, AddWorkoutGroupAct, EditWorkoutGroupAct, RemWorkoutGroupAct, AddWorkoutItemAct, EditWorkoutItemAct, RemWorkoutItemAct, EditWorkoutSetsAct } from './actions/workout-actions';

export interface AppState 
{
    ui: {}
    users: WorkUser[];
    groups: WorkGroup[];
    workouts: WorkoutData[];
    worksets: WorkSet[];
}

export default <Reducer<AppState, Action<string>>> function RootReducer (state = {
    ui: {},
    users: [],
    groups: [],
    workouts: [],
    worksets: [],
}, act) 
{
    switch (act.type)
    {
        case WorkoutActionTypes.USER_JOIN_GROUP:
            {
                let { groupID, userID } = act as UserJoinGroupAct;
                return Object.assign({}, state, {
                    users: [
                        ...state.users.filter(u => u._id !== userID),
                        { ...state.users.find(u => u._id === userID), mainGroup: groupID }
                    ]
                } as AppState);
            }
        case WorkoutActionTypes.USER_LEAVE_GROUP:
            {
                let { groupID, userID } = act as UserLeaveGroupAct;
                return Object.assign({}, state, {
                    worksets: state.worksets.filter(ws => (ws.groupID !== groupID && ws.userID !== userID))
                } as AppState);
            }
        case WorkoutActionTypes.ADD_WORKOUT_GROUP:
            {
                let { ownerID, groupID, name } = act as AddWorkoutGroupAct;
                return Object.assign({}, state, {
                    groups: [...state.groups, { _id: groupID, name, ownerID }]
                } as AppState);
            }
        case WorkoutActionTypes.EDIT_WORKOUT_GROUP:
            {
                let { groupID, edits } = act as EditWorkoutGroupAct;
                return Object.assign({}, state, {
                    groups: state.groups.map(g => g._id !== groupID ? g : Object.assign({}, g, edits))
                } as AppState);
            }
        case WorkoutActionTypes.REM_WORKOUT_GROUP:
            {
                let { groupID } = act as RemWorkoutGroupAct;
                return Object.assign({}, state, {
                    groups: state.groups.filter(g => g._id !== groupID)
                } as AppState);
            }
        case WorkoutActionTypes.ADD_WORKOUT:
            {
                let { groupID, workoutID, name, type } = act as AddWorkoutItemAct;
                return Object.assign({}, state, {
                    workouts: [...state.workouts, { _id: workoutID, groupID, name, type, }],
                    worksets: [...state.worksets, ...state.users.filter(u => u.mainGroup === groupID).map(u => ({
                        _id: uuid.v4(),
                        groupID,
                        workoutID,
                        userID: u._id,
                        weight: 0,
                        rep: 0,
                        set: 0,
                        date_completed: 0,
                        completed: false,
                        note: ""
                    } as WorkSet))],
                } as AppState);
            }
        case WorkoutActionTypes.EDIT_WORKOUT:
            {
                let { groupID, workoutID, edits } = act as EditWorkoutItemAct;
                return Object.assign({}, state, {} as AppState);
            }
        case WorkoutActionTypes.REM_WORKOUT:
            {
                let { groupID, workoutID } = act as RemWorkoutItemAct;
                return Object.assign({}, state, {} as AppState);
            }
        case WorkoutActionTypes.EDIT_WORKOUT_SETS:
            {
                let { groupID, workoutID, userID, edits } = act as EditWorkoutSetsAct;
                return Object.assign({}, state, {} as AppState);
            }

        default:
            return state;
    }
}


export interface WorkGroup 
{
    _id: string;
    ownerID: string;
    name: string;
}

export interface WorkUser 
{
    _id: string;
    name: string;
    role: "user|coach",
    mainGroup: string;
    stats: any;

}

export interface WorkoutData 
{
    _id: string;
    groupID: string;

    type: string;
    name: string;
}

export interface WorkSet 
{
    _id: string;
    groupID: string,
    workoutID: string,
    userID: string,
    weight: number,
    rep: number,
    set: number,
    completed: boolean,
    date_completed: number,
    note: string
}