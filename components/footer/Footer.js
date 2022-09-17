import React from "react"
import Link from "next/link"

const { LINKS_PRIMARY, LINKS_SECONDARY } = require("./links")

const Footer = () => {
	
	const renderLinks = () => {

		var links_primary = []
		var links_secondary = []
		LINKS_PRIMARY.map( ( value, index ) => {

			links_primary.push(

				<div key={"footer-link-primary-" + index }>
					<Link href={ "/" + value.url } passHref>
						<a className="text-sm text-slate-500 dark:text-slate-300">{ value.name }</a>
					</Link>
				</div>

			)

		})
		LINKS_SECONDARY.map( ( value, index ) => {

			links_secondary.push(

				<div key={"footer-link-" + index }>
					<Link href={ "/" + value.url } passHref>
						<a className="text-sm text-slate-500 dark:text-slate-300">{ value.name }</a>
					</Link>
				</div>

			)

		})
		return (

			<div className="flex flex-col items-center gap-2.5">
				<div className="flex gap-2.5">
					{ links_primary }
				</div>
				<div className="flex gap-2.5">
					{ links_secondary }
				</div>
			</div>

		)

	}

	return(

		<div className="container mx-auto max-w-3xl h-full flex justify-center py-5 items-center">
			<div>
				{ renderLinks() }
			</div>
		</div>

	)

}

export default Footer
