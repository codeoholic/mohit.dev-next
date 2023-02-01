import Link from "next/link"
import Script from "next/script"

import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

const NextJSPage = () => {

    return (
        <>
            <MetaTags
				title="NextJS | mohit.dev"
				description="some description."
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
            <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
			<div className="w-screen h-screen flex-col flex">
				<Header
					small={ true }
				/>
				<div className="grid grow bg-gradient-to-br from-blue-500 to-blue-600 place-items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            <h1 className="text-3xl md:text-6xl text-indigo-50 font-semibold">How to NextJS</h1>
                        </div>
                        <div className="mt-2.5">
                            <h2 className="text-sm md:text-xl text-indigo-50">The most convient blog to start your NextJS career.</h2>
                        </div>
                        <Link href="https://twitter.com/mohitdotdev" passHref target="_blank">
                            <div className="rounded-full bg-white px-5 py-2.5 mt-5 flex gap-2.5 items-center shadow-md shadow-indigo-700 w-fit">
                                <div className="h-4 w-4 relative">
                                    <img src="/twitter.svg" alt="twitter_icon"/>
                                </div>
                                <p className="text-xs md:text-sm text-zinc-800">Any questions? Ask me.</p>
                            </div>
                        </Link>
                    </div>
                </div>
			</div>
            <div className="container mx-auto py-5 px-5 md:px-0 mt-2.5 md:mt-10">
                <div className="text-lg md:text-3xl text-zinc-700 font-semibold text-center">Why you should learn NextJS?</div>
                <div className="text-sm md:text-xl text-zinc-600 mt-2.5 text-center">This is what Twitter has to say about the companies using NextJS.</div>
                <div className="flex grid grid-col-1 md:grid-cols-3 gap-5 mt-10">
                    <div className="flex gap-2.5 flex-col">
                        <blockquote className="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">wow. <a href="https://t.co/KTdaRyDizp">https://t.co/KTdaRyDizp</a> using <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a> <a href="https://t.co/mR3ns4Nvf2">pic.twitter.com/mR3ns4Nvf2</a></p>&mdash; Guillermo Rauch (@rauchg) <a href="https://twitter.com/rauchg/status/1594779272945627136?ref_src=twsrc%5Etfw">November 21, 2022</a></blockquote>
                        <blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Next.js in production, 2021 edition (non-exhaustive list) <a href="https://t.co/XUUzn4a2Su">https://t.co/XUUzn4a2Su</a> <a href="https://t.co/VoeHDcV8Yl">pic.twitter.com/VoeHDcV8Yl</a></p>&mdash; Guillermo Rauch (@rauchg) <a href="https://twitter.com/rauchg/status/1359237922076037122?ref_src=twsrc%5Etfw">February 9, 2021</a></blockquote> 
                    </div>
                    <div className="flex gap-2.5 flex-col">
                        <blockquote className="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">The Verge: new version built with <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a>, <a href="https://twitter.com/vercel?ref_src=twsrc%5Etfw">@vercel</a>, and <a href="https://twitter.com/tailwindcss?ref_src=twsrc%5Etfw">@tailwindcss</a> 🔥<a href="https://t.co/FgZVHIS8Fb">https://t.co/FgZVHIS8Fb</a> <a href="https://t.co/PGWnzfGiEO">pic.twitter.com/PGWnzfGiEO</a></p>&mdash; Lee Robinson (@leeerob) <a href="https://twitter.com/leeerob/status/1569717140768555008?ref_src=twsrc%5Etfw">September 13, 2022</a></blockquote>
                        <blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Steve Jobs Archive by Apple hosted at <a href="https://twitter.com/vercel?ref_src=twsrc%5Etfw">@vercel</a> and built with <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a><a href="https://t.co/jvH379YNnu">https://t.co/jvH379YNnu</a></p>&mdash; rauno (@raunofreiberg) <a href="https://twitter.com/raunofreiberg/status/1567831207391404032?ref_src=twsrc%5Etfw">September 8, 2022</a></blockquote>
                    </div>
                    <div className="flex gap-2.5 flex-col">
                        <blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">I&#39;m curating a list of the most beautiful <a href="https://twitter.com/nextjs?ref_src=twsrc%5Etfw">@nextjs</a> sites of all time:<br/><br/>◆ <a href="https://t.co/zI9NZtatP8">https://t.co/zI9NZtatP8</a><br/>◆ <a href="https://t.co/lrcH8haDO7">https://t.co/lrcH8haDO7</a><br/>◆ <a href="https://t.co/fqmO18ap5v">https://t.co/fqmO18ap5v</a><br/>◆ <a href="https://t.co/sZ3VgwJ8AL">https://t.co/sZ3VgwJ8AL</a><br/>◆ <a href="https://t.co/BZoyYb5NOd">https://t.co/BZoyYb5NOd</a><br/><br/>Who else did I miss? 👀 <a href="https://t.co/up5x23x32M">pic.twitter.com/up5x23x32M</a></p>&mdash; Steven Tey (@steventey) <a href="https://twitter.com/steventey/status/1591134103210176512?ref_src=twsrc%5Etfw">November 11, 2022</a></blockquote>
                        <blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">This is probably one of the best SaaS landing pages I&#39;ve seen in a while 👇<br/><br/>✅ Impactful demo right in the hero<br/>✅ Clean *chefs kiss* dropdowns in the menu bar<br/>✅ Incredible demo video<br/><br/>All built with Next.js + Vercel 🤯<a href="https://t.co/m4C6rgXdoA">https://t.co/m4C6rgXdoA</a> <a href="https://t.co/VroV9H9pmT">pic.twitter.com/VroV9H9pmT</a></p>&mdash; Steven Tey (@steventey) <a href="https://twitter.com/steventey/status/1491443020117385219?ref_src=twsrc%5Etfw">February 9, 2022</a></blockquote>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default NextJSPage
