import sanity from "../sanity"
import { PortableText } from "@portabletext/react"

import Footer from "../components/footer"
import Header from "../components/header"

const Home = ( props ) => {

	const {

		title,
		body

	} = props.post

	return (

		<div className="bg-slate-200 w-screen h-full">
			<Header/>
			<div className="mt-5 p-2.5 md:p-0 ">
				<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded">
					<div className="text-3xl text-slate-900 font-bold">{ title }</div>
					<div className="text-slate-700 mt-5">
						<PortableText value={ body } />
					</div>
				</div>
			</div>
			<Footer/>
		</div>

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
