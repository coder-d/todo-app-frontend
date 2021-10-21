import React, {Component} from 'react'
import Title from './Title'
import TaskList from './TaskList'
import AddTask from './AddTask'
import{Route} from 'react-router-dom'
import{removeTask} from '../redux/action'
import { Link } from 'react-router-dom'
import Task from './Task';


class Main extends Component {
    constructor() {
    	//without super this instance won't be available in constructor
         super()
        
        console.log('constructor')
    }

   
    render(){
        console.log('main render Debanjan');
    	//render method is called before in-built method componentDidMount()
    	//when componentDidMount() changes the state render() is called again
    	return (
            <div>
                 <h1>
                    <Link to="/"> TaskList </Link>
                </h1>
            </div>
        )
    }
}
export default Main 
    