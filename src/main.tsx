import app from 'apprun';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';

const state = {
  content: <div>0</div>
};

const view = (state) => (
  <div>
    <button
      onclick={() => { app.run("change", "1") }}
    > Change to Test1 </button>
    <button
      onclick={() => { app.run("change", "2") }}
    > Change to Test2</button>
    <button
      onclick={() => { app.run("change", "3") }}
    > Change to Test3</button>
    {state.content}


  </div>);

const update = {
  "change": (state, which) => {
    switch (which) {
      case "1": return { content: <Test1 /> }
      case "2": return { content: <Test2 /> }
      case "3": return { content: <Test3 /> }
    }
  },
}

app.start(document.body, state, view, update);
