import Image from "next/image"

import { PortableText } from "@portabletext/react"
import format from "date-fns/format"

import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

import sanity from "../../sanity"

const Home = ( props ) => {

	const {

		body,
		description,
		meta_image,
		publish_time,
		title,

	} = props.post

	return (

		<>
			<MetaTags
				title={ title }
				description={ description }
				image={ meta_image }
			/>
			<div className="bg-slate-200 w-screen h-full dark:bg-slate-800">
				<Header
					small={ true }
				/>
				<div className="mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded dark:bg-slate-800 dark:border dark:border-slate-300">
						<div className="w-full h-48 sm:h-48 md:h-72 relative bg-slate-200">
							<Image
								src={ typeof meta_image !== "undefined" ? meta_image : "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
								layout={ "fill" }
								objectFit={ "cover" }
								alt={ title }
								unoptimized
								priority={ true }
								sizes="100vw"
							/>
						</div>
						<div className="mt-5">
							<h1 className="text-3xl text-slate-900 font-bold dark:text-slate-50">{ title }</h1>
							<div className="text-sm mt-1 text-slate-600 dark:text-slate-200">{ format(new Date( publish_time ),"MMMM do, yyyy") }</div>
							<div className="text-slate-700 mt-5 text-lg dark:text-slate-200 w-full prose prose-p:mt-0 prose-p:mb-2.5 max-w-none leading-normal prose-code:before:content-none prose-code:after:content-none prose-code:mt-2.5 prose-strong:dark:text-slate-200">
								<PortableText value={ body } />
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		</>

	)

}

export const getServerSideProps = async ( context ) => {

	const slug = context.params.slug
	const post = await sanity.fetch(`*[_type == "finance" && slug.current == "${slug}"][0]`)
	
	if( post !== null )
		return {

			props: {

				post

			}

		}
	
	return {
		
		notFound: true
	
	}

}

export default Home
