import React from "react"
import Link from "next/link"

const Header = ({ small }) => {

	return(

		<div className="bg-slate-50 dark:bg-slate-800 h-16 border-b border-b-slate-300 dark:border-b-slate-900 dark:shadow-md">
			<div className={` ${ small ? "max-w-4xl" : "" } container mx-auto h-full flex items-center justify-between px-5 md:p-0`}>
				<Link href="/">
					<div className="text-xl text-slate-900 dark:text-slate-50 font-bold">mohit.dev</div>
				</Link>
				<div className="h-8 w-6 relative">
					<Link href="https://twitter.com/mohitdotdev" target="_blank">
						<img src="https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/twitter.png" alt="twitter_icon"/>
					</Link>
				</div>
			</div>
		</div>

	)

}

export default Header
