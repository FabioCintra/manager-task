import ButtonInsideList from "./ButtonInsideList";

export default function InsideBar({tasks}){

    return(
        <aside className="flex-none h-screen bg-amber-950 w-64 px-5 py-5 space-y-5 rounded-r-2xl">
            <h1 className="uppercase font-stretch text-amber-50 text-xl font-bold font-mono">
                your projects
            </h1>
            <button className="px-3.5 py-1.5 bg-olive-500 text-xs text-olive-300 rounded hover:bg-olive-400">
                + Add Project
            </button>
            <ol >
                <ButtonInsideList>teste</ButtonInsideList>
            </ol>
        </aside>
    );

}