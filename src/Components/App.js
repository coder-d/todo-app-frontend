import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/action';
import {withRouter} from 'react-router';

	function mapStateToProps(state){
		console.log('inside mapStateToProps');	
		return {
		tasks : state.tasks,
	}
}
//mapDispatchToProps is used as a shortcut, which lets us call redux action method
//directly like this.props.removeTask(1) instead of this.props.dispatch(removeTask(1))
//in this case actions is imported as wildcart so it has all the functions of /redux/action.js
function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
}
{/* App has the main component and also is connected to Redux from where we can get the state
the state is injected into Main component */}
const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

export default App