import { useState,useRef } from "react";

import ButtonInsideList from "./Components/ButtonInsideList";
import InsideBar from "./Components/InsideBar";
import CreateProject from "./Components/Screens/CreateProject";
import InitialScreen from "./Components/Screens/InitialScreen";
import Project from "./Components/Screens/Project";

const MODEL_PROJECT_STRUCT = {
  title:'',
  description:'',
  date: '',
  tasks: []
};

const ALL_SCREENS ={
    initialScreen: InitialScreen,
    createProject: CreateProject,
    project: Project
};

function App() {

  const [screen, setScreen] = useState('initialScreen');
  const [listProject, setListProject] = useState([]);
  const [projectSelected, setProjectSelected] = useState(null);
  const getInformationProject = useRef();
  const getNewTask = useRef();
  const ActiveScreen = ALL_SCREENS[screen];

  function changeScreenProject(nameScreen, showProject=null, projectList=listProject){
    if(showProject){
      setProjectSelected( 
        projectList.find(project => project.description === showProject.description)
      );
    }
    setScreen(nameScreen); 
  }

  function handleProjects(){
    setListProject(prevProjects => {
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
  
  function updateProjectInList(project){
    const index = listProject.findIndex(proj => proj.description === project.description);
    let newList = structuredClone(listProject);
    newList[index] = project;

    setListProject(newList);
    changeScreenProject('project', project, newList);
  }

  function addNewTaskInProject(project){
    project.tasks.push(getNewTask.current.value);
    getNewTask.current.value = "";
    updateProjectInList(project);
  }

  function deleteProjectSelected(description){
    const newList = listProject.filter(project => project.description !== description);
    setListProject(newList);
    setScreen('initialScreen');
  }


  return (
    <div className="flex h-screen py-10">
      <InsideBar 
        projects={listProject} 
        changeScreen={changeScreenProject}
      />
      <ActiveScreen 
        ref={getInformationProject} 
        onChange={changeScreenProject}
        saveProject={handleProjects} 
        project={projectSelected}
        deleteProject={deleteProjectSelected}
        deleteTask={updateProjectInList}
        getNewTask={getNewTask}
        addTask={addNewTaskInProject}
      />
    </div>
  );
}

export default App;

//LEMBRAR DE TIRAR O TESTE DA LISTA E VOLTAR A TELA PARA A INITIALSCREEN