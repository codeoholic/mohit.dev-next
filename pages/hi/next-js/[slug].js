import Link from "next/link"

import sanity from "../../../sanity"
import { PortableText } from "@portabletext/react"

import Footer from "../../../components/footer"
import Header from "../../../components/header"
import MetaTags from "../../../components/meta-tags"
import Languages from "../../../components/languages"

const NextJSChapter = ( props ) => {

	const {

		body_hindi,
		description,
		meta_image,
		title,
		title_hindi,
        next_link_title,
        next_link_url,
        previous_link_title,
        previous_link_url,

	} = props.post

	return (

		<>
			<MetaTags
				title={ title }
				description={ description }
				image={ meta_image }
			/>
			<div className="bg-slate-200 w-screen h-full dark:bg-slate-800">
				<Header
					small={ true }
				/>
				<div className="mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded dark:bg-slate-800 dark:border dark:border-slate-300">
						<div className="mt-5">
							<h1 className="text-3xl text-slate-900 font-bold dark:text-slate-50">{ title_hindi }</h1>
							<div className="text-slate-700 mt-5 text-lg dark:text-slate-200 w-full prose prose-p:mt-0 prose-p:mb-2.5 max-w-none leading-normal prose-code:before:content-none prose-code:after:content-none prose-code:mt-2.5 prose-strong:dark:text-slate-200">
								<PortableText value={ body_hindi } />
							</div>
                            <div className="flex justify-between">
                                {

                                    typeof previous_link_title !== "undefined" &&
                                    <Link href={ previous_link_url } passHref>
                                        <a className="text-sm text-slate-900 dark:text-slate-50">
                                            { previous_link_title }
                                        </a>
                                    </Link>

                                }
                                {

                                    typeof next_link_title !== "undefined" &&
                                    <Link href={ next_link_url } passHref>
                                        <a className="text-sm text-slate-900 dark:text-slate-50">
                                            { next_link_title }
                                        </a>
                                    </Link>

                                }
                            </div>
						</div>
					</div>
					<Languages />
				</div>
				<Footer/>
			</div>
		</>

	)

}

export const getServerSideProps = async ( context ) => {

	const slug = context.params.slug
	const post = await sanity.fetch(`*[_type == "next-js" && slug.current == "${slug}"][0]`)
	
	if( post !== null )
		return {

			props: {

				post

			}

		}
	
	return {
		
		notFound: true
	
	}

}

export default NextJSChapter
