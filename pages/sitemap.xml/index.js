import sanity from "../../sanity"

const Sitemap = ( props ) => {
	
}

export const getServerSideProps = async ( context ) => {

	const posts = await sanity.fetch(`*[_type == "post"]{ _id, title, description, meta_image, publish_time, slug } | order( publish_time desc)`)

	const sitemapArray = []
	const sitemapList = posts.map(function(value,index){
		sitemapArray.push(`<url>
		<loc>https://mohit.dev/${ value.slug.current }</loc>
		<lastmod>${ new Date().toISOString() }</lastmod>
		<priority>0.80</priority>
	</url>`
		)
		return true
	})
	var sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
	<url>
	  	<loc>https://mohit.dev/</loc>
	  	<lastmod>${ new Date().toISOString() }</lastmod>
	  	<priority>1.00</priority>
	</url>
	${sitemapArray.join("")}
</urlset>
	`
	context.res.setHeader("Content-Type", "text/xml")
	context.res.write(sitemap)
	context.res.end()
	return { props : { data } }

}

export default Sitemap
