'use client'

import {Inter} from '@next/font/google'
import {Home} from "@/app/components/screens/home/Home";
import {NextPage} from "next";
import { ChakraProvider} from "@chakra-ui/react";


const inter = Inter({subsets: ['latin']})

const HomePage: NextPage = () => {

  return <Home/>

}

export default HomePage