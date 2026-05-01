export default function Task({taskName,deleteTask}){

    return(
        <li className="flex flex-row">
            <p className="flex-1 font-roboto">
                {taskName}
            </p>
            <button className="font-roboto hover:text-red-500" onClick={() => deleteTask(taskName)}>
                Clear
            </button>
        </li>
    );

}