import { useImperativeHandle } from "react";

export default function ButtonInsideList({project,changeScreen}){

    const {title,description,date,tasks} = project;

    return(
        <li>
            <button 
                className="w-full px-3 py-1 text-white hover:bg-white/10 text-xs text-left" 
                onClick={() => changeScreen('project',project)}
            >
                {title}
            </button>
        </li>
    );

}