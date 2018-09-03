import { Action, Reducer } from 'redux';
import uuid from 'uuid';
import { WorkoutActionTypes, UserJoinGroupAct, UserLeaveGroupAct, AddWorkoutGroupAct, EditWorkoutGroupAct, RemWorkoutGroupAct, AddWorkoutItemAct, EditWorkoutItemAct, RemWorkoutItemAct, EditWorkoutSetsAct } from './actions/workout-actions';
import { } from './actions/ui-actions';
import { Match_WorkRes, X_Match_WorkRes, X_Match_Workout, Match_Workout, WSIsOwned } from '../util/util';

export interface AppState 
{
    core: { currentUserID: string, },
    ui: {}
    users: WorkUser[];
    groups: WorkGroup[];
    workouts: Workout[];
    worksets: WorkSet[];
}

export default <Reducer<AppState, Action<string>>> function RootReducer (state = {
    core: {
        currentUserID: null,
    },
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
                    worksets: state.worksets.filter(ws => !WSIsOwned(ws, groupID, userID))
                } as AppState);
            }
        case WorkoutActionTypes.ADD_WORKOUT_GROUP:
            {
                let { ownerID, groupID, name } = act as AddWorkoutGroupAct;
                return Object.assign({}, state, {
                    groups: [...state.groups, new WorkGroup(groupID, ownerID, name)]
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
                    worksets: [
                        ...state.worksets,
                        ...state.users
                            .filter(u => (u.mainGroup === groupID))
                            .map(u => (new WorkSet(uuid.v4(), groupID, workoutID, u._id)))],
                } as AppState);
            }
        case WorkoutActionTypes.EDIT_WORKOUT:
            {
                let { groupID, workoutID, edits } = act as EditWorkoutItemAct;
                return Object.assign({}, state, {
                    workouts: [...state.workouts.filter(w => X_Match_Workout(w, groupID, workoutID)),
                    {
                        ...state.workouts.find(w => Match_Workout(w, groupID, workoutID)),
                        ...edits,
                    }
                    ]
                } as AppState);
            }
        case WorkoutActionTypes.REM_WORKOUT:
            {
                let { groupID, workoutID } = act as RemWorkoutItemAct;
                return Object.assign({}, state, {
                    workouts: state.workouts.filter(w => X_Match_Workout(w, groupID, workoutID))
                } as AppState);
            }
        case WorkoutActionTypes.EDIT_WORKOUT_SETS:
            {
                let { groupID, workoutID, userID, edits } = act as EditWorkoutSetsAct;
                return Object.assign({}, state, {
                    worksets: [
                        ...state.worksets.filter(ws => X_Match_WorkRes(ws, groupID, workoutID, userID)),
                        {
                            ...state.worksets.find(ws => Match_WorkRes(ws, groupID, workoutID, userID)),
                            ...edits
                        }
                    ]
                } as AppState);
            }

        default:
            return state;
    }
}


export class WorkGroup 
{
    constructor (
        public _id: string,
        public ownerID: string,
        public name: string,
    ) { }
}

export interface WorkUser 
{
    _id: string;
    name: string;
    role: "user|coach",
    mainGroup: string;
    stats: any;

}

export class Workout 
{
    constructor (
        public _id: string,
        public groupID: string,
        public type: string,
        public name: string,
    ) { }
}

export class WorkSet 
{
    constructor (
        public _id: string,
        public groupID: string,
        public workoutID: string,
        public userID: string,
    ) { }

    public weight: number = 0;
    public rep: number = 0;
    public set: number = 0;
    public completed: boolean = false;
    public date_completed: number = 0;
    public note: string = "";
}