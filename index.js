import React, {Component} from 'react'
import CornerBallGroupComponent from './CornerBallGroupComponent'
import ReactDOM from 'react-dom'
class Main extends Component {
	render() {
		return (<div>
				<CornerBallGroupComponent/>
			</div>)
	}
}

ReactDOM.render(<Main/>, document.getElementById('main'))