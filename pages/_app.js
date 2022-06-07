import '../styles/globals.css'
import * as Fathom from "fathom-client"
import { useEffect } from "react"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
	
	const router = useRouter()
	useEffect(() => {

		Fathom.load("GOVQTVBD",{

			excludedDomains:["localhost"],
			url:"https://inventive-elastic.mohit.dev/script.js",

		})

		const onRouteChangeComplete = () => {

			Fathom.trackPageview()

		}
		// RECORD A PAGEVIEW WHEN ROUTE CHANGES
		router.events.on("routeChangeComplete", onRouteChangeComplete)

		// UNASSIGN EVENT LISTENER
		return () => {

			router.events.off("routeChangeComplete", onRouteChangeComplete)

		}

	}, [])
	return <Component {...pageProps} />

}

export default MyApp
