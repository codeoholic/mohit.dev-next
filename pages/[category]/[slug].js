import Image from "next/image"

import { PortableText } from "@portabletext/react"
import format from "date-fns/format"

import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

import sanity from "../../sanity"
import Link from "next/link"

const { LINKS_PRIMARY, LINKS_SECONDARY } = require("../../components/footer/links")

const Home = ( props ) => {

	const {

		category_name,
		category_url,
		post,

	} = props
	const {

		body,
		description,
		meta_image,
		publish_time,
		title,

	} = post

	const codeComponent = {

		types: {

		  	code: ({value}) => <pre data-language={value.language}>
		  			<code>{value.code}</code>
				</pre>

		}

	}

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
								<PortableText value={ body } components={ codeComponent }/>
							</div>
						</div>
						<div className="mt-5">
							<Link href={ "/" + category_url } passHref>
								<a>
									<p className="underline">More articles on { category_name }</p>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		</>

	)

}

export const getServerSideProps = async ( context ) => {

	const category_url = context.params.category
	const slug = context.params.slug
	const post = await sanity.fetch(`*[_type == "post" && "${ category_url }" in categories[]->slug.current && slug.current == "${slug}"][0]`)
	
	var category_name = ""
	LINKS_PRIMARY.map( ( value ) => {

		if( value.url === category_url )
			category_name = value.name

	})
	if( category_name === "" ){

		LINKS_SECONDARY.map( ( value ) => {

			if( value.url === category_url )
				category_name = value.name
	
		})
	}

	if( post !== null )
		return {

			props: {

				category_name,
				category_url,
				post,

			}

		}
	
	return {
		
		notFound: true
	
	}

}

export default Home
