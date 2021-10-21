import _tasks from "../data/tasks";
import { combineReducers } from "redux";

function tasks(state = _tasks, action) {
    //action.type is defined in /redux/action.js
    switch (action.type) {
        //ES6 Spread syntax (...) is used to break up each elements in the state into individual elements
        case "ADD_TASK":
            return [...state, action.task];
        case "UPDATE_TASK":
            const index = state.findIndex((task) => task.id === action.task.id);
            console.log(index);
            return [
                ...state.slice(0, index), // everything before current task
                {
                    ...state[action.index],
                    id: action.task.id,
                    title: action.task.title,
                    duration: parseInt(action.task.duration),
                    paused: action.task.paused,
                    completed: action.task.completed,
                },
                ...state.slice(index + 1), // everything after current task
            ];
        case "LOAD_TASKS":
            return action.tasks;
        default:
            return state;
    }
    console.log(state);
    return state;
}

const rootReducer = combineReducers({ tasks });
export default rootReducer;