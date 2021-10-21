import React,{Component} from 'react'

class AddTask extends Component{

	constructor(){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleSubmit(event){
		event.preventDefault();
		const title = event.target.elements.title.value;
		const duration = event.target.elements.duration.value;
		const task = {
			title:title,
			duration:duration
		}
		if(duration && title){
			this.props.startAddingTask(task);
			this.props.history.push('/');
		}
	}

	render(){
		return (
			<div>
				<div className="form">
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Enter a task" name="title"/>
						<input type="text" placeholder="Enter duration" name="duration"/>
						<button>Add Task</button>
					</form>
				</div>
			</div>
		)
	}
}
export default AddTask