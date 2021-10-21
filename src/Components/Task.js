import React,{ Component, useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Task extends Component{
	constructor(){
		super()
		
	}

	render(){
		// console.log(this.state);
		const task = this.props.task;
		return <figure className="figure">
					<figcaption> <p> {task.title} </p></figcaption>
					<div>{task.duration} seconds left</div>
					<button>
						  {task.paused? "Start counter": "Stop counter"}
					</button>
					<div className="button-container">
						<button className="complete-button">
						 {task.completed ? "Completed" :"Mark as complete"} </button>
					</div>
				</figure>
	}



}
Task.propTypes = {
		task: PropTypes.object.isRequired,
		
	}
	/* this way all tasks can be accessable in task component directly without passing it from Main to 
TaskList then to Task.  Get the state data to prop "tasks" */
		function mapStateToProps(state){
			return {
				tasks : state
			}
		}
//this is only needed if Task component needs to be connected to Redux to get the state
// otherwise just use export default Task
export default connect(mapStateToProps)(Task);
// export default Task