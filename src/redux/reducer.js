
import _tasks from '../data/tasks';
import {combineReducers} from 'redux';


function tasks(state = _tasks,action){
	//action.type is defined in /redux/action.js
	switch(action.type){
		
		case 'UPDATE_TASK' :
			
		case 'LOAD_TASKS': 
		default : return state
	}
	console.log(state);
	return state;
}

const rootReducer = combineReducers({tasks})
export default rootReducer