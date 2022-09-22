import Image from "next/image"
import Link from "next/link"
import sanity from "../sanity"
import format from "date-fns/format"

import Footer from "../components/footer"
import Header from "../components/header"
import MetaTags from "../components/meta-tags"

const Home = ( props ) => {

	const {

		nextjs_posts,
		react_posts,
		reactnative_posts,
		rust_posts,
		tailwindcss_posts,
		ubuntu_posts,

	} = props

	return (

		<>
			<MetaTags
				title="NextJS, React, React Native"
				description={ "Using this platform I will be sharing my experiences on the technology that I explore. I might occasionally or more frequenty post my non-technological opinions too." }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
				<div className="mt-0 md:mt-5 md:p-0">
					<div className="container mx-auto max-w-3xl bg-slate-50 dark:bg-slate-800 rounded p-5">
						<div className="grid gap-2.5">
							<h1 className="text-2xl text-slate-900 font-bold">NextJS</h1>
							{

								nextjs_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/nextjs/${ value.slug.current }` } passHref>
												<a>
													<p className="text-lg text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-0.5">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
						<div className="grid gap-2.5 mt-5">
							<h1 className="text-2xl text-slate-900 font-bold">React Native</h1>
							{

								reactnative_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/react-native/${ value.slug.current }` } passHref>
												<a>
													<p className="text-lg text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-1">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
						<div className="grid gap-2.5 mt-5">
							<h1 className="text-2xl text-slate-900 font-bold">React</h1>
							{

								react_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/react/${ value.slug.current }` } passHref>
												<a>
													<p className="text-lg text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-1">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
						<div className="grid gap-2.5 mt-5">
							<h1 className="text-2xl text-slate-900 font-bold">Rust</h1>
							{

								rust_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/rust/${ value.slug.current }` } passHref>
												<a>
													<p className="text-lg text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-1">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
						<div className="grid gap-2.5 mt-5">
							<h1 className="text-2xl text-slate-900 font-bold">Tailwind CSS</h1>
							{

							tailwindcss_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/tailwind-css/${ value.slug.current }` } passHref>
												<a>
													<p className="text-xl text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-1">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
						<div className="grid gap-2.5 mt-5">
							<h1 className="text-2xl text-slate-900 font-bold">Ubuntu</h1>
							{

								ubuntu_posts.map( ( value, index ) => {

									return(

										<div className="rounded dark:bg-slate-800 overflow-hidden" key={ "post-" + index }>
											<Link href={ `/ubuntu/${ value.slug.current }` } passHref>
												<a>
													<p className="text-lg text-slate-600 dark:text-slate-100 font-bold hover:text-purple-700">{ value.title }</p>
													<div className="mt-1">
														<p className="text-xs text-slate-400 dark:text-slate-300">{ format(new Date( value.publish_time ),"MMMM do, yyyy") }</p>
													</div>
												</a>
											</Link>
										</div>

									)

								})

							}
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		</>

	)

}

export const getServerSideProps = async ({ req, res }) => {

	const nextjs_posts = await sanity.fetch(`*[_type == "post" && "nextjs" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)
	const reactnative_posts = await sanity.fetch(`*[_type == "post" && "react-native" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)
	const react_posts = await sanity.fetch(`*[_type == "post" && "react" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)
	const rust_posts = await sanity.fetch(`*[_type == "post" && "rust" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)
	const tailwindcss_posts = await sanity.fetch(`*[_type == "post" && "tailwind-css" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)
	const ubuntu_posts = await sanity.fetch(`*[_type == "post" && "ubuntu" in categories[]->slug.current]{ title, slug, publish_time } | order( publish_time desc )`)

	console.log( tailwindcss_posts )
	
	res.setHeader(

		"Cache-Control",
		"public, s-maxage=3600, stale-while-revalidate=3600"

	)

  	return {

  		props: {

			nextjs_posts,
			react_posts,
			reactnative_posts,
			rust_posts,
			tailwindcss_posts,
			ubuntu_posts,

  		}

  	}

}

export default Home
