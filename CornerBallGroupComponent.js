import React, {Component, Fragment} from 'react'
import CornerBallComponent from './CornerBallComponent'
export default class CornerBallGroupComponent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Fragment>{[0, 1, 2, 3].map((num) => <CornerBallComponent i={num} key={`ball_${num}`}/>)}</Fragment>
	}	
}