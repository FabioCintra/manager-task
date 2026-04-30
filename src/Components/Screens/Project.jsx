export default function Project({project}){

    const {title,description,date,tasks} = project;
    const h1Style = "flex-1 break-all font-roboto font-bold text-orange-950";
    const buttonStyle = 'hover:font-bold';
    const hasTask = tasks.lenght > 0 ? true : false;

    return(
        <div className="flex flex-1 flex-col space-y-5 px-10 py-8">

            <header className="space-y-3">
                <div className="flex">
                    <h1 className={`${h1Style} text-4xl`}>
                        {title}
                    </h1>
                    <button className={buttonStyle}>Delete</button>
                </div>
                <p className="font-roboto text-2xs text-gray-400">{date}</p>
                <p className="font-roboto">{description}</p>
            </header>

            <hr className="outline-1 outline-gray-300 border-gray-300"/>
            
            <section className="flex flex-col space-y-3">
                <h1 className={`${h1Style} text-2xl`}>Tasks</h1>
                <div className="space-x-4">
                    <input type="text" className="bg-gray-300 focus:outline-blue-500"/>
                    <button className={buttonStyle}>Add Task</button>
                </div>

                {!hasTask && <p className="font-roboto">This project does not have any tasks yet.</p>}
                {hasTask && <ul></ul>}
            </section>
            {/* {tasks.map(task => <p>{task}</p>)} */}
        </div>
    );

}
