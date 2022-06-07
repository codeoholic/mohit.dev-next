import Link from "next/link"
import sanity from "../sanity"
import format from "date-fns/format"

import Footer from "../components/footer"
import Header from "../components/header"
import MetaTags from "../components/meta-tags"

const Home = ( props ) => {

	const {

		posts

	} = props

	return (

		<>
			<MetaTags
				title="Code is Art"
				description={ "Using this platform I will be sharing my experiences on the technology that I explore. I might occasionally or more frequenty post my non-technological opinions too." }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full  py-2.5">
				<Header/>
				<div className="mt-0 md:mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 dark:bg-slate-800 shadow-md rounded dark:border dark:border-slate-600">
						<div className="grid gap-5">
						{

							posts.map( ( value, index ) => {

								return(

									<div key={ "post-" + index } className="border rounded p-5 border-slate-200 dark:border-slate-700 dark:bg-slate-800 shadow">
										<Link href={ `/${ value.slug.current }` } passHref>
											<a>
												<h1 className="text-xl text-slate-900 dark:text-slate-100 font-bold">{ value.title }</h1>
											</a>
										</Link>
										<div className="text-base text-slate-900 dark:text-slate-400">{ value.description }</div>
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
		</>

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
