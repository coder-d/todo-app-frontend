import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/action';
import {withRouter} from 'react-router';

	function mapStateToProps(state){
		console.log('inside mapStateToProps');	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actions,dispatch);
}
{/* App has the main component and also is connected to Redux from where we can get the state
the state is injected into Main component */}
const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

export default App