import Head from "next/head"
import Link from "next/link"

import Footer from "../../components/footer"
import Header from "../../components/header"

import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Heading1, Heading2, Text } from "../../components/styling"

import { ArrowLongLeftIcon, BeakerIcon } from '@heroicons/react/24/solid'

const components = {
		
    h1: Heading1,
    h2: Heading2,
    p: Text,

}

const Post = ( props ) => {

    const page = allPosts.find((page) => page.slugAsParams === props.url )
    const MDXContent = useMDXComponent( page.body.code )
	return (

    	<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
			<Head>
        		<title>Artile | Mohit.dev</title>
      		</Head>
			<Header
				small={ true }
			/>
			<div className="container mx-auto px-5 lg:px-0 lg:max-w-4xl min-h-screen">
                <div className="w-fit">
                    <Link href="/nextjs">
                        <div className="flex items-center gap-2.5 mt-10">
                            <ArrowLongLeftIcon className="w-8 h-8 text-zinc-800 dark:text-zinc-300"/>
                            <div className="text-zinc-800 dark:text-zinc-300 text-sm">NextJS</div>
                        </div>
                    </Link>
                </div>
				<h1 className="text-3xl mt-5 font-bold text-zinc-800 dark:text-zinc-300">{ page.title }</h1>
				<div className="py-5">
                    <MDXContent components={ components }/>
				</div>
			</div>
            <Footer/>
    	</div>
  	
	)

}

export async function getStaticPaths() {

    const response = allPosts.map((page) => ({
        
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

	const posts = allPosts
  	return { props: { posts, url: params.url } }

}

export default Post
