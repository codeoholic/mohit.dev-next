import Footer from "../../components/footer"
import Header from "../../components/header"
import MetaTags from "../../components/meta-tags"

const NextJSPage = () => {

    return (
        <div>
            <MetaTags
				title="NextJS | mohit.dev"
				description="some description."
				image={ "https://mohit.sgp1.cdn.digitaloceanspaces.com/mohit.dev/assets/mohit.dev.webp" }
			/>
			<div className="bg-slate-200 dark:bg-slate-800 w-screen h-full">
				<Header
					small={ true }
				/>
				
				<Footer/>
			</div>
        </div>
    )

}

export default NextJSPage
