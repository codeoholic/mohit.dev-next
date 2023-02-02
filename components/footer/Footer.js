import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {

	return(

		<div className="bg-slate-200 dark:bg-slate-800">
			<div className="container mx-auto max-w-3xl h-full flex justify-center py-5 items-center flex-col">
				<div className="flex gap-5">
					<div className="h-8 w-8 relative">
						<Link href="https://twitter.com/mohitdotdev" passHref target="_blank">
							<Image
								src="/twitter.svg"
								alt="twitter_icon"
								unoptimized
								fill
							/>
						</Link>
					</div>
					<div className="h-8 w-8 relative">
						<Link href="https://github.com/codeoholic/mohit.dev" passHref target="_blank">
							<Image
								src="/github.svg"
								alt="github_icon"
								unoptimized
								fill
							/>
						</Link>
					</div>
				</div>
				<div className="mt-5">
					<p className="text-xs text-slate-500 dark:text-slate-300">Mohit Tyagi</p>
				</div>
			</div>
		</div>

	)

}

export default Footer
