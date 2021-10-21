import React, { Component } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TaskList extends Component {
    render() {
        //ES6 Spread syntax (...) is used to merge all the objects and pass it together
        console.log("Debanjan inside task list");

        return (
            <div>
                <Link className="add-icon" to="/AddTask"></Link>

                <div className="task-grid">
                    {this.props.tasks
                        .sort(function (x, y) {
                            return y.id - x.id;
                        })
                        .map((task, index) => (
                            <Task
                                {...this.props}
                                key={index}
                                task={task}
                                index={index}
                            />
                        ))}
                </div>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
};
export default TaskList;