import Link from "next/link"
import Footer from "../components/footer"
import Header from "../components/header"
import MetaTags from "../components/meta-tags"
import ReadingList from "../components/reading-list"

const Home = ( props ) => {

	return (

		<>
			<MetaTags
				title="home | mohit.dev"
				description="some description."
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
				<div className="container mx-auto px-5 lg:px-0 lg:max-w-4xl">
					<div className="mt-5">
						<h1 className="font-semibold text-zinc-800 text-xl dark:text-white">About</h1>
						<p className="text-zinc-800 text-lg dark:text-white">Hey! Welcome to my website. This might sound like that it has been written in early 2000&apos;s but this is not the case. With time I am going to add text to the website and to start with I am showcasing my reading list for the year 2023. My idea of having a platform to keep things more permanent. A place where if needed to know about me, you can quickly judge the depth or shallowness of my ideas and notions.</p>
					</div>
					<div className="mt-5">
						<h1 className="font-semibold text-zinc-800 text-xl dark:text-white">Thought on Social Media</h1>
						<p className="text-zinc-800 text-lg dark:text-white">Social instruments over the internet were made to increase your social skills and not corner you in your own curated likes and dislikes. I will write more on this with time.</p>
					</div>
					<div className="mt-5">
						<h1 className="font-semibold text-zinc-800 text-xl dark:text-white">Microsites</h1>
						<ol className="list-decimal pl-5 mt-2.5 text-lg  dark:text-white">
							<li className="w-fit">
								<Link href="/nextjs">
									<div>NextJS</div>
								</Link>
							</li>
						</ol>
					</div>
					<ReadingList />
				</div>
				<Footer/>
			</div>
		</>

	)

}

export default Home
