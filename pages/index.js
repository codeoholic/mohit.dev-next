import Image from "next/image"
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
				title="Tecnocrat"
				description={ "Using this platform I will be sharing my experiences on the technology that I explore. I might occasionally or more frequenty post my non-technological opinions too." }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ false }
				/>
				<div className="mt-0 md:mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-7xl bg-slate-50 dark:bg-slate-800 shadow-md rounded dark:border dark:border-slate-300">
						<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
						{

							posts.map( ( value, index ) => {

								return(

									<div className="border rounded border-slate-200 dark:border-slate-300 dark:bg-slate-800 shadow overflow-hidden" key={ "post-" + index }>
										<Link href={ `/${ value.slug.current }` } passHref>
											<a>
												<div className="w-full h-48 sm:h-48 md:h-60 relative bg-slate-200">
													<Image
														src={ typeof value.meta_image !== "undefined" ? value.meta_image : "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
														layout={ "fill" }
														objectFit={ "cover" }
														alt={ "recommendation-image" }
														unoptimized
													/>
												</div>
												<div className=" p-5">
													<h1 className="text-xl text-slate-900 dark:text-slate-100 font-bold">{ value.title }</h1>
													<div className="mt-2.5">
														<p className="text-lg text-slate-900 dark:text-slate-100">{ value.description }</p>
														<p className="text-xs mt-2.5 text-slate-600 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</div>
											</a>
										</Link>
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

	const posts = await sanity.fetch(`*[_type == "post"]{ _id, title, description, meta_image, publish_time, slug } | order( publish_time desc)`)
	// console.log( posts )
  	return {

  		props: {

  			posts

  		}

  	}

}

export default Home
