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


//adding task
export function addTask(task){
	return{
		type: 'ADD_TASK',
		task
	}
}