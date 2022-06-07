import React from "react"
import Link from "next/link"

const Header = () => {

	return(

		<div className="bg-slate-50 h-16 border-b border-b-slate-300">
			<div className="container mx-auto max-w-3xl h-full flex items-center justify-between px-5 md:p-0">
				<Link href="/" passHref>
					<a>
						<div className="text-xl text-slate-900 font-bold">mohit.dev</div>
					</a>
				</Link>
				<div className="h-8 w-6 relative">
					<Link href="https://twitter.com/codeoholic" passHref>
						<a target="_blank">
							<img src="https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/twitter.png" alt="twitter_icon"/>
						</a>
					</Link>
				</div>
			</div>
		</div>

	)

}

export default Header
