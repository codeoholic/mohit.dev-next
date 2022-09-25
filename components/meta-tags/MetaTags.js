import Head from "next/head"

const MetaTags = ({

	description,
	image,
	slug,
	title,

}) => {

	return (

		<Head>
    		<title>{ title }</title>
    		<meta name="description" content={ title } />
    		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
    		<meta charSet="utf-8" />
			<meta name="author" content="Mohit Tyagi" />
			<meta name="title" content={`${ title }`}/>
			<meta name="description" content={ description }/>

			<meta property="og:type" content="article"/>
			<meta property="og:url" content={ "https://mohit.dev/" + slug }/>
			<meta property="og:title" content={`${ title }`}/>
			<meta property="og:description" content={ description }/>
			<meta property="og:image" content={ image }/>

			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={ "https://mohit.dev/" + slug }/>
			<meta property="twitter:title" content={`${ title }`}/>
			<meta property="twitter:description" content={ description }/>
			<meta property="twitter:image" content={ image }/>
  		</Head>

	)

}

export default MetaTags
