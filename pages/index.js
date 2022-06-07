import sanity from "../sanity"

const Home = () => {

	return (

		<div>I am home</div>

	)

}

export const getServerSideProps = async () => {

	const post = await sanity.fetch(`*[_type == "post"]`)
  	return {

  		props: {

  			post

  		}

  	}

}

export default Home
