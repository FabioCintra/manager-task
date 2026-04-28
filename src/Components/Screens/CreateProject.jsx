import Input from "../Input";

export default function CreateProject(){

    return(
        <div className="flex-1 flex flex-col space-y-3 px-10">
            <button>Save</button>
            <button>Cancel</button>
            <Input label='TITLE' type='text'/>
            <Input label='description' as='textarea'/>
            <Input label='due date' type='date'/>
        </div>
        
    );

}