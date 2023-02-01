export const Heading = ( props ) => {

    return (
        <h1 className="font-semibold text-2xl text-zinc-800">{ props.children }</h1>
    )

}
export const Text = ( props ) => {

    return (
        <p className="text-base text-zinc-800 pt-2.5">{ props.children }</p>
    )

}
