import notebookImg from '../../assets/no-projects.png'

export default function InitialScreen({onChange}){

    return(
        <div className='flex-1 flex flex-col items-center justify-center space-y-3'>
            <img src={notebookImg} alt="No-Projects" className='w-16 '/> 
            <h1 className='font-bold'>No Project Selected</h1>
            <p className='text-xs'>
                Select a project or get started whit a new one
            </p>
            <button className='bg-amber-950 px-3.5 py-1 font-serif text-amber-50 rounded hover:bg-amber-900' onClick={onChange}>
                Create new project
            </button>
        </div>
        
    );

}