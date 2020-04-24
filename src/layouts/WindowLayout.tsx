import app, { Component } from "apprun"
import TileElement from "../components/buttons/TileElement"

export default class extends Component {
	getWindows = () => {
		setInterval(()=> {
			this.run("update_windows", [ 
				{
					ID: "MECHES",
					Data: [
						{
						Name: "Bar1",
						ID: "id01",
						}
					]
				}])
		}, 1000);
		return []

	}
	state = {
		windows: this.getWindows()
	}

	view = (state) => {
		return state.windows.length ? <TileElement btn={state.windows[0].Data[0]} />  : <div>Empty</div>;
	};

	update = {
		"update_windows": (state, wins) => ({
			...state,
			windows: wins
		})
	}
}