const ReadingList = ( props ) => {

    const { books } = props

    return (

        <div className="mt-5">
            <h1 className="font-semibold text-zinc-800 text-xl">Reading List - 2023</h1>
            <ol className="list-decimal pl-5 mt-2.5">
            {

                books.map( ( book, index ) => {
                    
                    return (
                        
                        <li key={ "book-" + index }>
                            <div className="flex grid grid-cols-4 gap-5 items-center">
                                <div className="text-zinc-800">{ book.name }</div>
                                <div className="text-zinc-800">{ book.author }</div>
                                <div className="relative">
                                    <div className="bg-blue-600/40 w-full h-3 rounded-full"></div>
                                    <div className={`bg-blue-600 w-[${ book.completion_percentage }%] h-3 rounded-full absolute top-0 left-0`}></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-zinc-800">{ book.completion_percentage !== 100 ? book.completion_percentage +"% complete" : "Completed" }</div>
                                </div>
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
