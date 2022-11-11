import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceCard({ }: Props) {
    return <article className="flex flex-col rounded-lg md:mt-3 items-center space-y-7 flex-shrink-0 w-
    [500px] sm:w-[600px] snap-center bg-[#292929] mb-9 p-3 pb-3 md:mb-5 md:p-12 md:hover:opacity-100 md:opacity-40
     transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,

            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
            src="https://img.icons8.com/color/48/000000/chase-bank.png"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">Software Engineer Intern</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">JP Morgan Chase</p>
            <div className="flex items-center lg:space-x-2 my-2 sm:space-x-1">
                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/70142?s=280&v=4" alt='jQuery' title='jQuery' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" alt='Python' title='Python' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/office/344/react.png" alt='React' title='React' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/48/000000/typescript--v1.png" alt='TypeScript' title='TypeScript' />


                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 03/2021 - Ended 06/2021
            </p>

            <ul className="overflow-y-auto max-w-[15rem] md:max-w-lg lg:max-w-xl text-[#a8b2d1] list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Interface with live stock price data and develop analysis process through <span className="underline decoration-[#64ffda] text-[#64ffda]">Python</span> and <span className="underline decoration-[#64ffda] text-[#64ffda]">Git</span> integrations</li>
                <li>• Modified JP Morgan's <span className="underline decoration-[#64ffda] text-[#64ffda]">Perspective</span> software to create stock charts for the trader’s dashboard to visually display data as well through <span className="underline decoration-[#64ffda] text-[#64ffda]">React</span> and <span className="underline decoration-[#64ffda] text-[#64ffda]">TypeScript</span> for the frontend and backend</li>
                <li>•  Created Chase’s Perspective tool from scratch using JPMorgan Chase frameworks allowing
                    users to present and manipulate data feeds visually in web applications.</li>
            </ul>
        </div>
    </article>;
}