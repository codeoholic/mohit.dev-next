import Link from "next/link"

const { useRouter } = require("next/router")

const Languages = () => {

    const router = useRouter()
    var url = router.asPath
    var url_array = url.split("/")
    url = url_array.length === 3 ? url_array[2] : url_array[1]

    console.log( url )
    return (

        <div className="flex justify-center mt-5 gap-2.5">
            <Link href={ "/" + url } passHref>
                <a>
                <div className="text-xs cursor-pointer">English</div>
                </a>
            </Link>
            <Link href={ "/hi/" + url } passHref>
                <a>
                    <div className="text-xs cursor-pointer">हिन्दी</div>
                </a>
            </Link>
        </div>

    )

}

export default Languages
