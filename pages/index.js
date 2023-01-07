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
						<p className="text-zinc-800 text-lg dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<ReadingList />
				</div>
				<Footer/>
			</div>
		</>

	)

}

export default Home
