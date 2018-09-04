import { AppState, WorkUser, WorkGroup } from '../app/state/rootReducer';

export default <AppState>{
    core: {
        currentUserID: "user_id_2"
    },
    ui: {},
    users: [
        new WorkUser("user_id_1", "Ben", "user", "group_id_1", {}),
        new WorkUser("user_id_2", "Andre", "coach", "group_id_1", {})
    ],
    groups: [
        new WorkGroup("group_id_1", "user_id_2", "Andre's Test Group!")
    ],
    workouts: [],
    excercises: [],
    worksets: []
};