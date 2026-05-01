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
  const [listProject, setListProject] = useState([{
    title:'Teste',
    description:'Estou fazendo um descricao maior para testar o espacamento correto da aplicacao',
    date: '14/08/1999',
    tasks: ["Fazer codigos!","Terminar projeto JSX", "Estudar!", "Fazer a compra do mes!"]
  }]);
  const [projectSelected, setProjectSelected] = useState(null);
  const getInformationProject = useRef();
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
  
  function updateProject(newList){
    setListProject(newList);
    (newList.length < listProject.length) && setScreen('initialScreen');
  }

  function deleteProjectSelected(description){
    const newList = listProject.filter(project => project.description !== description);
    updateProject(newList);
  }

  function deleteTask(project){
    const index = listProject.findIndex(proj => proj.description === project.description);
    let newList = structuredClone(listProject);
    newList[index] = project;

    setListProject(newList);
    changeScreenProject('project', project, newList);
    
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
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

//LEMBRAR DE TIRAR O TESTE DA LISTA E VOLTAR A TELA PARA A INITIALSCREEN