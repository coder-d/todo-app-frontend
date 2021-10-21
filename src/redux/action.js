const baseUrl = "http://localhost:8000/api/todos";
//add task to backend API
export function startAddingTask(task){
	return async (dispatch) =>{

		const response = await fetch(baseUrl, {
			method :"POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				title:task.title,
				duration: parseInt(task.duration),
				completed:false
			}),
		}).then((response) => response.json()).then((responseJSON) => {return responseJSON});

		return dispatch(addTask(response));
	};
};

//load tasks from backend API
export function startLoadingTasks(){

	return async (dispatch) =>{
		const response = await fetch(baseUrl)
								.then((response) => response.json())
								.then((responseJSON) => {return responseJSON});
		return dispatch(loadTasks(response));
	};
};

//adding task
export function addTask(task){
	return{
		type: 'ADD_TASK',
		task
	}
}
//load the tasks data recevied from backend API in startLoadingTasks() to the app view
export function loadTasks(tasks){
	// console.log(tasks);
	// just tasks means tasks:tasks(its ecma 6 script shortcut)
	return {
		type: 'LOAD_TASKS',
		tasks
	}
}