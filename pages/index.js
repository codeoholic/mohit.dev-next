import Link from "next/link"
import sanity from "../sanity"

const Home = ( props ) => {

	const {

		posts

	} = props

	return (

		<div className="bg-slate-200 w-screen h-full p-2.5 md:p-0">
			<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded">
				<div className="grid gap-2.5">
				{

					posts.map( ( value, index ) => {

						return(

							<div key={ "post-" + index } className="border rounded p-5 border-slate-200 shadow">
								<Link href={ `/${ value.slug.current }` } passHref>
									<a>
										<div className="text-xl text-slate-900 font-bold">{ value.title }</div>
									</a>
								</Link>
								<div className="text-base text-slate-900">{ value.description }</div>
							</div>

						)

					})

				}
				</div>
			</div>
		</div>

	)

}

export const getServerSideProps = async () => {

	const posts = await sanity.fetch(`*[_type == "post"]`)
  	return {

  		props: {

  			posts

  		}

  	}

}

export default Home
