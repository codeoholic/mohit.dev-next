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

	console.log( posts )

	return (

		<>
			<MetaTags
				title="NextJS, React, React Native"
				description={ "Using this platform I will be sharing my experiences on the technology that I explore. I might occasionally or more frequenty post my non-technological opinions too." }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
				<div className="mt-0 md:mt-5 md:p-0">
					<div className="container mx-auto max-w-3xl bg-slate-50 dark:bg-slate-800 rounded p-5">
						<div className="grid gap-2.5">
						{

							posts.map( ( value, index ) => {

								return(

									<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
										<Link href={ `/${ value.slug.current }` } passHref>
											<a>
												<p className="text-xl text-slate-900 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
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

	const posts = await sanity.fetch(`*[_type == "post"]{ title, slug, categories } | order( publish_time desc)`)
	
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
