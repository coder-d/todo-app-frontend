import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Task extends Component {
    constructor() {
        super();
        this.handleTimerClick = this.handleTimerClick.bind(this);
        this.state = { count: 0, paused: false };
    }
    handleTimerClick(event, task) {
        event.preventDefault();
        // console.log('timer click');
        // console.log(this.state.paused);
        this.setState((prevState) => ({
            paused: !prevState.paused,
        }));
        // console.log(this.state.paused);
        const timerUpdates = {
            id: task.id,
            paused: !task.paused,
            completed: false,
        };
        // console.log(timerUpdates);
        this.props.startUpdatingTask(timerUpdates);
    }

    handleCompletedClick(event, id) {
        if (this.state.completed) {
            return true;
        }
        const completedUpdate = {
            id: id,
            completed: true,
        };
        this.props.startUpdatingTask(completedUpdate);
        console.log(this.props.task);
        this.setState((prevState) => ({
            completed: true,
        }));
    }

    componentDidMount() {
        this.setState({
            count: this.props.task.duration,
            paused: this.props.task.paused,
            completed: this.props.task.completed,
        });

        this.myInterval = setInterval(() => {
            if (this.state.count > 0 && !this.state.paused) {
                this.setState((prevState) => ({
                    count: prevState.count - 1,
                }));
            }
        }, 1000);
        // console.log(this.props.task.duration);
    }
    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        // console.log(this.state);
        const { count } = this.state;
        const task = this.props.task;
        return (
            <figure className="figure">
                <figcaption>
                    {" "}
                    <p> {task.title} </p>
                </figcaption>
                <div>{count} seconds left</div>
                {this.state.count > 0 && (
                    <button
                        onClick={(e) => {
                            this.handleTimerClick(e, task);
                        }}
                    >
                        {task.paused ? "Start counter" : "Stop counter"}
                    </button>
                )}
                <div className="button-container">
                    <button
                        className="complete-button"
                        onClick={(e) => {
                            this.handleCompletedClick(e, task.id);
                        }}
                    >
                        {task.completed ? "Completed" : "Mark as complete"}{" "}
                    </button>
                </div>
            </figure>
        );
    }
}
Task.propTypes = {
    task: PropTypes.object.isRequired,
};
/* this way all tasks can be accessable in task component directly without passing it from Main to 
TaskList then to Task.  Get the state data to prop "tasks" */
function mapStateToProps(state) {
    return {
        tasks: state,
    };
}
//this is only needed if Task component needs to be connected to Redux to get the state
// otherwise just use export default Task
export default connect(mapStateToProps)(Task);
// export default Task
