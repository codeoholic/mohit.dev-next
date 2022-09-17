import React from "react"
import Link from "next/link"


const { LINKS_PRIMARY, LINKS_SECONDARY } = require("./links")

const Footer = () => {
	
	const renderLinks = () => {

		var links_primary = []
		var links_secondary = []
		LINKS_PRIMARY.map( ( value, index ) => {

			links_primary.push(
				<div key={"footer-link-" + index }>
					<p className="text-sm text-slate-300">{ value.name }</p>
				</div>
			)

		})
		LINKS_SECONDARY.map( ( value, index ) => {

			links_secondary.push(
				<div key={"footer-link-" + index }>
					<p className="text-sm text-slate-300">{ value.name }</p>
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
