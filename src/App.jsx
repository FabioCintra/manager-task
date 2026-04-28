import { useState,useRef } from "react";

import ButtonInsideList from "./Components/ButtonInsideList";
import InsideBar from "./Components/InsideBar";
import CreateProject from "./Components/Screens/CreateProject";
import InitialScreen from "./Components/Screens/InitialScreen";

const MODEL_PROJECT_STRUCT = {
  title:'',
  description:'',
  date: '',
  tasks: []
};

const ALL_SCREENS ={
    initialScreen: InitialScreen,
    createProject: CreateProject
};

function App() {

  const [screen, setScreen] = useState('initialScreen');
  const [newProject, setNewProject] = useState([]);

  const getInformationProject = useRef();

  const ActiveScreen = ALL_SCREENS[screen];

  function changeScreenProject(nameScreen){
    setScreen(nameScreen);
  }

  function handleProjects(){
    setNewProject(prevProjects => {
      let newProject = {...MODEL_PROJECT_STRUCT};

      const {title,desc,date} = getInformationProject.current.getInformations();
      newProject.title = title;
      newProject.description = desc;
      newProject.date = date;

      return [
        ...prevProjects,
        newProject
      ];

    });

    setScreen("initialScreen");

  }

  return (
    <div className="flex h-screen py-10">
      <InsideBar projects={newProject} changeScreen={changeScreenProject}/>
      <ActiveScreen ref={getInformationProject} onChange={changeScreenProject} saveProject={handleProjects}/>
    </div>
  );
}

export default App;
