import { useState } from "react";

import ButtonInsideList from "./Components/ButtonInsideList";
import InsideBar from "./Components/InsideBar";
import ShowScreen from "./Components/Screens/ShowScreen";
import CreateProject from "./Components/Screens/CreateProject";
import InitialScreen from "./Components/Screens/InitialScreen";

const MODEL_TASK_STRUCT = [
  {
    title:'',
    description:'',
    date: '',
    tasks: []
  }
];

function App() {

  const [screen, setScreen] = useState(null);

  function changeScreenProject(){
    setScreen(<CreateProject/>);
  }

  return (
    <div className="flex h-screen py-10">
      <aside className="flex-none h-screen bg-amber-950 w-64 px-5 py-5 space-y-5 rounded-r-2xl">
          <h1 className="uppercase font-stretch text-amber-50 text-xl font-bold font-mono">
              your projects
          </h1>
          <button 
            className="px-3.5 py-1.5 bg-olive-500 text-xs text-olive-300 rounded hover:bg-olive-400"
            onClick={changeScreenProject}
          >
              + Add Project
          </button>
          <ol >
            <ButtonInsideList>teste</ButtonInsideList>
          </ol>
      </aside>
      <ShowScreen screen={<CreateProject/>}/>
    </div>
  );
}

export default App;
