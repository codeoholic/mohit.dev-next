import Link from "next/link"
import sanity from "../sanity"
import format from "date-fns/format"

import Footer from "../components/footer"
import Header from "../components/header"

const Home = ( props ) => {

	const {

		posts

	} = props

	return (

		<div className="bg-slate-200 w-screen h-full">
			<Header/>
			<div className="mt-5 p-2.5 md:p-0 ">
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
									<div className="text-xs mt-2.5 text-slate-600">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</div>
								</div>

							)

						})

					}
					</div>
				</div>
			</div>
			<Footer/>
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
