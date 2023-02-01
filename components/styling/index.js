export const Heading1 = ( props ) => {

    return (
        <h1 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-300 py-2.5">{ props.children }</h1>
    )

}
export const Heading2 = ( props ) => {

    return (
        <h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-300 py-2.5">{ props.children }</h2>
    )

}
export const Text = ( props ) => {

    return (
        <p className="text-base text-zinc-800 dark:text-zinc-300 pt-2.5">{ props.children }</p>
    )

}
