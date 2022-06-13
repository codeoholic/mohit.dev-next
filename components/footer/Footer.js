import React from "react"
import Link from "next/link"

import { useToast } from "@chakra-ui/react"

const Footer = () => {

	const toast = useToast()

	const displayToast = () => {

		toast({

			duration: 5000,
			isClosable: false,
			position: "top",
			status: "success",
			title: "Hey Ninja!",

        })

	}
	
	return(

		<div className="container mx-auto max-w-3xl h-full flex justify-center my-5" onClick={ () => displayToast() }>
			<div className="dark:hidden cursor-pointer">🥷🏻</div>
			<div className="hidden dark:block cursor-pointer">💎</div>
		</div>

	)

}

export default Footer
