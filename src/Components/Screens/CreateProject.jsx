import Input from "../Input";
import { useImperativeHandle, useRef } from "react";

export default function CreateProject({onChange,ref, saveProject}){

    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    function builderObjectInformation(){
        return {
            title: titleRef.current.value,
            desc: descRef.current.value,
            date: dateRef.current.value,
        }
    }

    useImperativeHandle(ref, () => {
        return{
            getInformations () {
               return builderObjectInformation();
            }
        };
    })

    return(
        <div className="flex-1 flex flex-col space-y-3 px-10">
            <div className="flex flex-row-reverse space-x-reverse space-x-5">
                <button className="bg-orange-950 font-roboto text-white px-5 rounded hover:bg-orange-900" onClick={saveProject}>
                    Save
                </button>
                <button className="font-roboto" onClick={() => onChange('initialScreen')}>Cancel</button>
            </div>
            <Input ref={titleRef} label='TITLE' type='text'/>
            <Input ref={descRef} label='description' as='textarea'/>
            <Input ref={dateRef} label='due date' type='date'/>
        </div>
        
    );

}