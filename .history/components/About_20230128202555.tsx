import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center justify-center relative min-h-screen text-center md:text-left
       max-w-7xl px-10 mx-auto pt-24">
            <h3 className="mb-10 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
                
            </h3>
            <div className="flex flex-col relative md:flex-row justify-evenly items-center gap-6">


            </div>
        </motion.div>
    )
}