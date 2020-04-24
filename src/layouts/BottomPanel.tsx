import app, { Component } from "apprun"


export default class extends Component {

	getJoysticks = () => {
		let timerId = setInterval(() => {
			console.log("Test1");
			this.run("update_joysticks", [
				{ID: "joyID", Name:"JoysticName", Color:"#ff00ff"}
			])
		}, 1000);
		return []
	}

	state = {
		joysticks: this.getJoysticks(),
	}

	view = (state) => {
		return state.joysticks.length ? <div style={{background: state.joysticks[0].Color}}> {state.joysticks[0].Name}</div> : <div>Waiting for joystick</div>
	}
	
	update = {
		"update_joysticks": (state, joys) => ({
			...state,
			joysticks: joys
		})
	}
}