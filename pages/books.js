import Head from "next/head"
import Link from "next/link"

import Footer from "../components/footer"
import Header from "../components/header"

import { allBooks } from "contentlayer/generated"
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid"

const BookCard = ( book ) => {

    return (
    	
		<div className="mb-5">
      		<div className="text-lg">
        		<Link href={book.url}>
          			<h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-300">{ book.title }</h2>
        		</Link>
      		</div>
			<div className="text-base text-zinc-800 dark:text-zinc-300 mt-1">{ book.description }</div>
    	</div>
	
    )

}

const Books = ({ books }) => {
  
	return (

    	<div className="bg-slate-200 w-screen h-full dark:bg-slate-800">
			<Head>
        		<title>Books | Mohit.dev</title>
      		</Head>
			<Header
				small={ true }
			/>
			<div className="container mx-auto px-5 lg:px-0 lg:max-w-4xl min-h-screen">
				<Link href="/">
                    <div className="flex items-center gap-2.5 mt-10">
                        <ArrowLongLeftIcon className="w-8 h-8 text-zinc-800 dark:text-zinc-300"/>
                        <div className="text-zinc-800 dark:text-zinc-300 text-sm">Home</div>
                    </div>
                </Link>
				<h1 className="text-3xl font-bold mt-5 text-zinc-800 dark:text-zinc-300">Books</h1>
				<div className="py-5">
					{
						
						books.map((book, idx) => (
							
							<BookCard key={idx} {...book} />
						
						))
					
					}
				</div>
			</div>
			<Footer />
    	</div>
  	
	)

}

export async function getStaticProps() {
  
	const books = allBooks
  	return { props: { books } }

}

export default Books
