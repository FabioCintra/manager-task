export default function Input({as: Tag = 'input',label, ...props}){

    return (
        <label className="flex flex-col text-orange-950 text-2xs font-roboto font-bold uppercase">
            {label}
            <Tag {...props} className='bg-gray-300 border-transparent shadow-gray-500 shadow-xs focus:outline-none focus:shadow-black' />
        </label>
    );

}