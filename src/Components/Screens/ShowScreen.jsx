import { useState } from "react";

import InitialScreen from "./InitialScreen";
import CreateProject from "./CreateProject";

export default function ShowScreen({screen}){

    const [screenProject, setScreenProject] = useState(null);

    if(screenProject !== null){
        screen = screenProject;
    }

    function handleScreenProject(){
        setScreenProject(<CreateProject/>)
    }

    return(
        <>
            {!screen ? <InitialScreen onChange={handleScreenProject}/> : screen}
        </>
        
    );

}