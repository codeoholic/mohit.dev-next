import Link from "next/link"

import Footer from "../components/footer"
import Header from "../components/header"

const FourZeroFour = () => {

    return (

        <>
            <div className="bg-slate-200 w-screen h-full dark:bg-slate-800">
                <Header
                    small={ true }
                />
                <div className="container mx-auto px-5 max-w-5xl">
                    <div className="flex flex-col justify-center items-center py-5">
                        <div className="h-64 w-64 relative mt-10 mb-10">
                            <iframe src="https://giphy.com/embed/Bp3dFfoqpCKFyXuSzP" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </div>
                        <div className="text-6xl font-bold text-slate-900">404</div>
                        <div className="text-lg text-slate-700 mt-5">Seems like you are on a wrong page.</div>
                        <Link href="/" passHref>
                            <a>
                                <div className="text-lg text-slate-700 mt-5 underline">Visit Home</div>
                            </a>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )

}

export default FourZeroFour
