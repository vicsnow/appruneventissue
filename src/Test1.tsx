import app, { Component } from "apprun"
export default class extends Component {
    constructor( ) {
        super();
        let timerId = setInterval(() => {
            console.log("Test1");
            this.run("update", "test1")
        }, 1000);
        this.state.timer=timerId
    }
    state={
        data:"",
        i:0,
        timer:null,
    }
    view = (state) => <div>test1 (updating component) {state.data} {state.i} </div>
    update={
        "update":(state, data) => ({
            ...state,
            data: data,
            i: state.i+1,
        })
    }
    unload=(state)=> {
        clearInterval(state.timer)
    }

}