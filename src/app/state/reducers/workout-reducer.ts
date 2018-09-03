import { Action } from 'redux';

export interface WorkoutState 
{
    workoutGroups: []
    workouts: WorkoutData[]
}

export interface WorkoutGroup
{
    _id: string;
    name: string;
    workouts: string[];
}

export interface WorkoutData 
{
    _id: string;
    type: string,
    weight: number | string;
    rep: number;
    set: number;
}

export default function WorkoutReducer (
    state: WorkoutState = {
        workoutGroups: [],
        workouts: []
    },
    act: Action
)
{
    return state;
}