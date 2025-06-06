
export const SharedButton = ({name}) => {
    return(
        <>
            <button className="bg-blue-300 font-bold px-4 py-2 max-sm:py-1 md:text-yellow-900 rounded hover:text-amber-50 hover:bg-blue-900 
                                transition hover:cursor-pointer text-sm">
               {name}
            </button>

        </>
    )

}