
import _tasks from '../data/tasks';
import {combineReducers} from 'redux';


function tasks(state = _tasks,action){
	//action.type is defined in /redux/action.js
	switch(action.type){
		
		//ES6 Spread syntax (...) is used to break up each elements in the state into individual elements
		case 'ADD_TASK' :return [...state,action.task]
		case 'UPDATE_TASK' :
		case 'LOAD_TASKS': return action.tasks
		default : return state
	}
	console.log(state);
	return state;
}

const rootReducer = combineReducers({tasks})
export default rootReducer