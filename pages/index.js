import Footer from "../components/footer"
import Header from "../components/header"
import MetaTags from "../components/meta-tags"

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
				<div className="container mx-auto max-w-3xl">
					<div className="mt-5">
						<h1 className="font-semibold text-zinc-800 text-xl">About</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div className="mt-5">
						<h1 className="font-semibold text-zinc-800 text-xl">Reading List - 2023</h1>
						<ol className="list-decimal pl-5 mt-2.5">
							<li>
								<div className="flex grid grid-cols-4 gap-5 items-center">
									<div>Animal Farm</div>
									<div>George Orwell</div>
									<div className="relative">
										<div className="bg-blue-600/40 w-full h-4 rounded-full"></div>
										<div className="bg-blue-600 w-[22%] h-4 rounded-full absolute top-0 left-0"></div>
									</div>
									<div className="flex items-center justify-between">
										<div className="text-sm">22% completed</div>
									</div>
								</div>
							</li>
						</ol>
					</div>
				</div>
				<Footer/>
			</div>
		</>

	)

}

export default Home
