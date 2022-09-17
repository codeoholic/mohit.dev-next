import Image from "next/image"
import Link from "next/link"

import format from "date-fns/format"

import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

import sanity from "../../sanity"

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
					small={ true }
				/>
				<div className="mt-0 md:mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 dark:bg-slate-800 shadow-md rounded dark:border dark:border-slate-300">
                        <h1 className="text-2xl text-slate-900 font-bold">Articles on Finance</h1>
						<div className="grid gap-5 mt-5">
						{

							posts.map( ( value, index ) => {

								return(

									<div className="dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
										<Link href={ `/finance/${ value.slug.current }` } passHref>
											<a>
												<div className="">
													<h2 className="text-xl text-slate-900 dark:text-slate-100 font-bold">{ value.title }</h2>
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

export const getServerSideProps = async ({ req, res }) => {

	const posts = await sanity.fetch(`*[_type == "finance"]{ _id, title, description, meta_image, publish_time, slug } | order( publish_time desc)`)
	
	res.setHeader(

		"Cache-Control",
		"public, s-maxage=3600, stale-while-revalidate=3600"

	)

  	return {

  		props: {

  			posts

  		}

  	}

}

export default Home
