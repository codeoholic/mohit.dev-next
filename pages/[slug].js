import sanity from "../sanity"
import { PortableText } from "@portabletext/react"
import format from "date-fns/format"

import Footer from "../components/footer"
import Header from "../components/header"
import MetaTags from "../components/meta-tags"

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
			<div className="bg-slate-200 w-screen h-full dark:bg-slate-800 py-2.5">
				<Header/>
				<div className="mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded dark:bg-slate-800 dark:border dark:border-slate-600">
						<h1 className="text-3xl text-slate-900 font-bold dark:text-slate-50">{ title }</h1>
						<div className="text-sm mt-1 text-slate-600 dark:text-slate-200">{ format(new Date( publish_time ),"MMMM do, yyyy") }</div>
						<div className="text-slate-700 mt-5 dark:text-slate-300">
							<PortableText value={ body } />
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
	const post = await sanity.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`)
  	return {

  		props: {

  			post

  		}

  	}

}

export default Home
