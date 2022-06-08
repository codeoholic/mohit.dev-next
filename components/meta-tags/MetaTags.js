import Head from "next/head"

const MetaTags = ({

	description,
	image,
	title,

}) => {

	return (

		<Head>
    		<title>{ title } | mohit.dev</title>
    		<meta name="description" content={ "How to "+title } />
    		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
    		<meta charSet="utf-8" />
			<meta name="title" content={`${ title } | mohit.dev`}/>
			<meta name="description" content={ description }/>

			<meta property="og:type" content="website"/>
			<meta property="og:url" content="https://mohit.dev/"/>
			<meta property="og:title" content={`${ title } | mohit.dev`}/>
			<meta property="og:description" content={ description }/>
			<meta property="og:image" content={ image }/>

			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content="https://mohit.dev/"/>
			<meta property="twitter:title" content={`${ title } | mohit.dev`}/>
			<meta property="twitter:description" content={ description }/>
			<meta property="twitter:image" content={ image }/>
			
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=optional" rel="stylesheet" /> 
  		</Head>

	)

}

export default MetaTags
