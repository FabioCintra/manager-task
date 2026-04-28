export default function ButtonInsideList({children}){

    return(
        <li>
            <button className="w-full px-3 py-1 text-white hover:bg-white/10 text-xs text-left">
                {children}
            </button>
        </li>
    );

}