import * as React from 'react';
import uuid from 'uuid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState, WorkUser, WorkGroup, Workout, Excersize } from '../state/rootReducer';
import { workout as ws } from '../state/allActions';
import { Match_Workout } from '../util/util';

export const CoachPage = connect<void, {}, {}, AppState>(
    (state) => ({
        currentUser: state.users.find(u => u._id === state.core.currentUserID),
        groups: state.groups.filter(g => g.ownerID === state.core.currentUserID),
        workouts: state.workouts,
        excersizes: state.excercises,
    }),
    (dispatch) => ({
        workoutA: bindActionCreators(ws.WorkoutActions, dispatch)
    }),
)(
    class CoachPage extends React.Component<
        {
            currentUser?: WorkUser,
            groups?: WorkGroup[],
            workouts?: Workout[],
            excersizes?: Excersize[],
            workoutA?: typeof ws.WorkoutActions;
        }, {
            currentGroup: string,
            newGroupText: string,
            newWorkoutCount: number,
        }> {

        public state = {
            currentGroup: "",
            newGroupText: "",
            newWorkoutCount: 1
        };

        render() {
            let {
                currentUser,
                groups,
                workouts,
                excersizes,
                workoutA,
                children,
            } = this.props;

            return (
                <div className={`CoachPage`}>

                    <h2>Hello Coach {currentUser.name}</h2>
                    <h3>Create a group</h3>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <fieldset>
                            <input
                                type="text"
                                value={this.state.newGroupText}
                                onChange={(e) => this.setState({ ...this.state, newGroupText: e.target.value })}
                            />

                            <input
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();

                                    if (this.state.newGroupText.length !== 0) {
                                        console.log(this.state.newGroupText);
                                        workoutA.addWorkoutGroup(currentUser._id, uuid.v4(), this.state.newGroupText);
                                        this.setState({ ...this.state, newGroupText: "" });
                                    }
                                }}
                            />
                        </fieldset>
                    </form>

                    <h3>Here are your group</h3>

                    <select
                        value={this.state.currentGroup}
                        onChange={e => this.setState({ ...this.state, currentGroup: e.target.value || "" })}
                    >
                        <option value={""}>Please choose group</option>
                        {groups.map(g => <option key={g._id} value={g._id}>{g.name}</option>)}
                    </select>

                    <h3>How many workout per week? </h3>

                    <select
                        value={this.state.newWorkoutCount}
                        onChange={(e) => this.setState({ ...this.state, newWorkoutCount: parseInt(e.target.value) })}
                    >
                        {([1, 2, 3, 4, 5, 6, 7]).map(
                            n => <option key={n} value={n}>{n}</option>
                        )}
                    </select>

                    <input
                        type="button"
                        value="Add Workout/s"
                        onClick={(e) => {
                            e.preventDefault();

                            if (this.state.currentGroup !== "") {
                                for (let i = 0; i < this.state.newWorkoutCount; i++)
                                    workoutA.addWorkoutItem(
                                        this.state.currentGroup,
                                        uuid.v4(),
                                        "Workout " + i,
                                        "Unset",
                                    );

                                this.setState({ ...this.state, newWorkoutCount: 1 });
                            }
                        }}
                    />
                    <div className="WorkoutCont">
                        {workouts.filter(wo => wo.groupID === this.state.currentGroup).map(wo =>
                            <WorkoutTag
                                key={wo._id}
                                workout={wo}
                                onAdd={(eType) =>
                                    workoutA.addExcersizeItem(
                                        this.state.currentGroup,
                                        wo._id,
                                        uuid.v4(),
                                        "Excersize",
                                        eType,
                                    )}
                            >
                                {excersizes
                                    .filter(e => (e.groupID === this.state.currentGroup) && (e.workoutID === wo._id))
                                    .map(e =>
                                        <div key={e._id}>
                                            <span>Type:</span>
                                            <span>{e.type}</span>
                                        </div>
                                    )}
                            </WorkoutTag>
                        )}
                    </div>
                </div >
            );
        }
    }
);

class WorkoutTag extends React.Component<
    {
        workout: Workout;
        onAdd: (eType: string) => void
    },
    {
        newExcersizeType: string,
    }
    >
{
    public state = {
        newExcersizeType: ""
    };
    render() {
        let {
            workout: wo,
            onAdd,
        } = this.props;

        return (
            <div>
                <h3>{wo.name}</h3>

                <div className="ECont">
                    {this.props.children}
                </div>

                <form>
                    <input
                        type="text"
                        value={this.state.newExcersizeType}
                        onChange={e => this.setState({ ...this.state, newExcersizeType: e.target.value })}
                    />
                    <input
                        className="question"
                        type="button"
                        value="Add Exercise"
                        onClick={e => {
                            e.preventDefault();
                            onAdd(this.state.newExcersizeType);
                            this.setState({ ...this.state, newExcersizeType: "" })
                        }}
                    />
                </form>
            </div>
        );
    }
}