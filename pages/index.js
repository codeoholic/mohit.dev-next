import sanity from "../sanity"

const Home = ( props ) => {

	const {

		posts

	} = props

	return (

		<div className="bg-slate-200 w-screen h-full p-2.5 md:p-0">
			<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded">
				{

					posts.map( ( value, index ) => {

						return(

							<div key={ "post-" + index }>
								<div className="text-3xl text-slate-900 font-bold">{ value.title }</div>
								<div className="text-base text-slate-900">{ value.description }</div>
							</div>

						)
					})

				}
			</div>
		</div>

	)

}

export const getServerSideProps = async () => {

	const posts = await sanity.fetch(`*[_type == "post"]`)
	console.log( posts )
  	return {

  		props: {

  			posts

  		}

  	}

}

export default Home
