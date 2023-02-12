import { useMDXComponent } from 'next-contentlayer/hooks'
import { format } from "date-fns"

const Post = ( props ) => {

    const { components, page } = props
    const MDXContent = useMDXComponent( page.body.code )
    return (
        <>
            <h1 className="text-3xl mt-5 font-bold text-zinc-800 dark:text-zinc-300">{ page.title }</h1>
            <div className="mt-2.5">
                <div className="text-xs text-zinc-800 dark:text-zinc-300">{ format( new Date( page.date ), "do MMMM yyyy" )  }</div>
            </div>
            <div className="py-5">
                <MDXContent components={ components }/>
            </div>
            <div className="py-5">
                <div className="text-xs text-zinc-800 dark:text-zinc-300">{ format( new Date( page.updated_date ), "do MMMM yyyy" )  }</div>
                <div className="text-xs text-zinc-800 dark:text-zinc-300">Last Update</div>
            </div>
        </>
    )

}

export default Post
