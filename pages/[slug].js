import sanity from "../sanity"

import { PortableText } from "@portabletext/react"

const Home = ( props ) => {

	console.log( props )
	const {

		title,
		body

	} = props.post

	return (

		<div>
			<div>{ title }</div>
			<PortableText value={ body } />
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
