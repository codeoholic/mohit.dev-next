import "../styles/globals.css"
import { MDXProvider } from '@mdx-js/react'
import { Heading, Text } from "../components/styling"
function MyApp({ Component, pageProps }) {
	
	const components = {
		
		h1: Heading,
		p: Text,

	}
	  
	return (

		<MDXProvider components={ components}>
			<Component {...pageProps} />
		</MDXProvider>

	)

}

export default MyApp
