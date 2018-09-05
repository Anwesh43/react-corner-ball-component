import React, {Component} from 'react'
import StateObj from './StateObj'
import {animator} from './Animator'
export default class CornerBall extends Component {
	constructor(props) {
		super(props)
		this.sobj = new StateObj()
		this.getIntialState()
	}

	getIntialState() {
		const w = window.innerWidth, h = window.innerHeight 
		const size = Math.min(w, h) / 5
		const origX = (this.props.i % 2) * (w - size), origY = Math.floor(this.props.i / 2) * (h-size)
		this.state = {origX, origY, size, x : origX, y : origY}
	}

	componentDidMount() {
		window.onresize = () => {
			const w = window.innerWidth, h = window.innerHeight 
			const size = Math.min(w, h) / 5
			const factor = size/this.state.size
			console.log(size / this.state.size)
			const reorg = (a) => {
				return a * factor 
			}
			const reorgObj = (obj) => {
				var newObj = {}
				for (let key of Object.keys(obj)) {
					newObj[key] = reorg(obj[key])
				}
				console.log(newObj)
				return newObj
			}
			this.setState(reorgObj(this.state))
		}
	}

	handleClick() {
		const w = window.innerWidth, h = window.innerHeight
		this.sobj.startUpdating(() => {
			animator.start(() => {
				return this.sobj.update((sc) => {
					console.log(sc)
					const sc1 = Math.min(0.5, sc) * 2
					const sc2 = Math.min(0.5, Math.max(0, sc - 0.5)) * 2
					const {origX, origY, size} = this.state
					this.setState({x : origX + ((w/2 - size/2) - origX) * sc1, y : origY + ((h/2 - size/2) - origY) * sc2})
				})
			})
		})
	}

	render() {
		return <div onClick={this.handleClick.bind(this)} style={{width : this.state.size, height : this.state.size, borderRadius:"50%", position : "absolute", left: this.state.x, top : this.state.y,
		 background: '#1976D2'}}></div>
	}
}

