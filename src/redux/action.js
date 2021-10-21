const baseUrl = "http://localhost:8000/api/todos";
//add task to backend API
export function startAddingTask(task) {
    return async (dispatch) => {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: task.title,
                duration: parseInt(task.duration),
                completed: false,
            }),
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                return responseJSON;
            });

        return dispatch(addTask(response));
    };
}
//load tasks from backend API
export function startLoadingTasks() {
    return async (dispatch) => {
        const response = await fetch(baseUrl)
            .then((response) => response.json())
            .then((responseJSON) => {
                return responseJSON;
            });
        return dispatch(loadTasks(response));
    };
}

//update task in backend API
export function startUpdatingTask(task) {
    return async (dispatch) => {
        const response = await fetch(baseUrl + "/" + task.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                paused: task.paused,
                completed: task.completed,
            }),
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                return responseJSON;
            });
        return dispatch(updateTask(response));
    };
}

//load the tasks data recevied from backend API in startLoadingTasks() to the app view
export function loadTasks(tasks) {
    // console.log(tasks);
    // just tasks means tasks:tasks(its ecma 6 script shortcut)
    return {
        type: "LOAD_TASKS",
        tasks,
    };
}

//adding task
export function addTask(task) {
    return {
        type: "ADD_TASK",
        task,
    };
}
//updating task
export function updateTask(task) {
    return {
        type: "UPDATE_TASK",
        task,
    };
}