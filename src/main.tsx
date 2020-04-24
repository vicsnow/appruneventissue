import app from 'apprun';
import WindowLayout from './layouts/WindowLayout'
import BottomPanel from './layouts/BottomPanel'

const state = {};

const view = () => (
  <div>
      <button
				onclick={() => {app.run("do_nothing", "anywhere")}}
		  > Click Me to repeat the bug!</button>
      
      <WindowLayout/>
      <BottomPanel />

  </div>);

const update = {
  "do_nothing": (state) => ({
    ...state, // DO NOTHING!!!!
  }),
}

app.start(document.body, state, view, update);
