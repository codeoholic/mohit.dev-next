import sanityClient from '@sanity/client'

export default sanityClient({
	
	dataset: process.env.SANITY_PROJECT_DATASET,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: true,

})
