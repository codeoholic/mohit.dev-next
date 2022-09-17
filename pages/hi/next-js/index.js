import Link from "next/link"

import sanity from "../../../sanity"

import Footer from "../../../components/footer"
import Header from "../../../components/header"
import MetaTags from "../../../components/meta-tags"

import { PortableText } from "@portabletext/react"
import Languages from "../../../components/languages"

const NextJSIndex = ( props ) => {

    const {

		body,
        body_hindi,
		description,
		title,
        next_link_title,
        next_link_url,

	} = props.nextJS

    return (

        <>
            <MetaTags
				title={ title }
				description={ description }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
                lang={ "hi" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
                <div className="mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded dark:bg-slate-800 dark:border dark:border-slate-300">
                        <h1 className="text-3xl text-slate-900 font-bold dark:text-slate-50">{ title }</h1>
                        <div className="text-slate-700 mt-5 text-lg dark:text-slate-200 w-full prose prose-p:mt-0 prose-p:mb-2.5 max-w-none leading-normal prose-code:before:content-none prose-code:after:content-none prose-code:mt-2.5 prose-strong:dark:text-slate-200">
                            <PortableText value={ body_hindi } />
                        </div>
                        <div className="flex justify-between">
                            <div></div>
                            <Link href={ next_link_url } passHref>
                                <a className="text-sm text-slate-900 dark:text-slate-50">
                                    { next_link_title }
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Languages />
                </div>
                <Footer/>
            </div>
        </>

    )

}

export const getServerSideProps = async () => {

	const nextJS = await sanity.fetch(`*[_type == "next-js" && slug.current == "introduction-to-nextjs"][0]{ _id, title, description, meta_image, publish_time, slug, body_hindi, next_link_title, next_link_url }`)
  	return {

  		props: {

            nextJS

  		}

  	}

}

export default NextJSIndex
