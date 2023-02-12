import Head from "next/head"
import Link from "next/link"

import Footer from "../../components/footer"
import Header from "../../components/header"

import { allThoughts } from "contentlayer/generated"
import { Heading1, Heading2, Text, OrderedList, OrderedListItem, Anchor } from "../../components/styling"

import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import Post from "components/post"

const components = {
		
    a: Anchor,
    h1: Heading1,
    h2: Heading2,
    li: OrderedListItem,
    ol: OrderedList,
    p: Text,

}

const Thoughts = ( props ) => {

    const page = allThoughts.find((page) => page.slugAsParams === props.url )
	return (

    	<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
			<Head>
        		<title>Thoughts | Mohit.dev</title>
      		</Head>
			<Header
				small={ true }
			/>
			<div className="container mx-auto px-5 lg:px-0 lg:max-w-4xl min-h-screen">
                <div className="w-fit">
                    <Link href="/thoughts">
                        <div className="flex items-center gap-2.5 mt-10">
                            <ArrowLongLeftIcon className="w-8 h-8 text-zinc-800 dark:text-zinc-300"/>
                            <div className="text-zinc-800 dark:text-zinc-300 text-sm">Thoughts</div>
                        </div>
                    </Link>
                </div>
                <Post
                    page={ page }
                    components={ components }
                />
			</div>
            <Footer/>
    	</div>
  	
	)

}

export async function getStaticPaths( params ) {

    const response = allThoughts.map((page) => ({
        
        params: {
            
            slug: page.slugAsParams,
            url: page.slugAsParams,
        
        }
    
    }))
    return {
        
        paths: response,
        fallback: false

    }

}

export async function getStaticProps({ params }) {

	const thoughts = allThoughts
    console.log( thoughts )
  	return { props: { thoughts, url: params.url } }

}

export default Thoughts
