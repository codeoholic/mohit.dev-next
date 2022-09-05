import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

const NextJSIndex = () => {

    return (

        <>
            <MetaTags
				title="Tecnocrat"
				description={ "Using this platform I will be sharing my experiences on the technology that I explore. I might occasionally or more frequenty post my non-technological opinions too." }
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
                <div className="mt-5 p-2.5 md:p-0">
					<div className="container mx-auto p-5 max-w-3xl bg-slate-50 shadow-md rounded dark:bg-slate-800 dark:border dark:border-slate-300">
                        <h1 className="text-2xl text-slate-900 dark:text-slate-100">Introduction to NextJS</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )

}

export default NextJSIndex
