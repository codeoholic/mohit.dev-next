const { BOOKS } = require("./books")

const ReadingList = ( props ) => {

    return (

        <div className="mt-5">
            <h1 className="font-semibold text-zinc-800 text-xl dark:text-white">Reading List - 2023</h1>
            <ol className="list-decimal pl-5 mt-2.5 text-lg  dark:text-white">
            {

                BOOKS.map( ( book, index ) => {
                    
                    return (
                        
                        <li key={ "book-" + index }>
                            <div className="flex grid grid-cols-1 lg:grid-cols-5 gap-2.5 items-center mb-2.5">
                                <div className="text-zinc-800 text-lg lg:col-span-2 dark:text-white">{ book.name }</div>
                                <div className="text-zinc-800 text-lg dark:text-white">{ book.author }</div>
                                <div className="relative">
                                    <div className="bg-blue-600/40 w-full h-3 rounded-full"></div>
                                    <div className={`${ book.progress } ${ book.completion_percentage === 100 ? "bg-green-600" : "bg-blue-600" } h-3 rounded-full absolute top-0 left-0`}></div>
                                </div>
                                <div className="text-lg text-zinc-800 lg:text-center dark:text-white">{ book.completion_percentage !== 100 ? book.completion_percentage === 0 ? "Yet to start" : book.completion_percentage +"% complete" : "Completed" }</div>
                            </div>
                        </li>

                    )                    

                })

            }
            </ol>
        </div>

    )

}

export default ReadingList
