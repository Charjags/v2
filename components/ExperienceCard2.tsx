import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function ExperienceCard1({}: Props) {
    return <article className="flex flex-col rounded-lg md:mt-3 items-center space-y-7 flex-shrink-0 w-
    [500px] sm:w-[600px] xl:w-[900px] snap-center bg-[#292929] mb-9 p-3 pb-3 md:mb-5 md:p-3 md:pb-3 md:hover:opacity-100 md:opacity-40
     transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0,

        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
            src="https://replit.com/cdn-cgi/image/quality=80,metadata=copyright,format=auto/https://storage.googleapis.com/replit/images/1598681976124_0839228c91f23ab46cd1f9bab2c35fcb.jpeg"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">ReplCon Hackathon 2022</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">Repl.it</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/344/node-js.png" alt='NodeJS' title='NodeJS'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript'/>

            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 03/2022 - Ended 04/2022
                </p>

            <ul className=" overflow-y-auto text-left max-w-[15rem] md:max-w-lg lg:max-w-xl  text-[#a8b2d1] list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Web application allowing communities the chance to connect with not just each other, but 
communities across the globe through chatroom with privacy mimicked features from telegram: 
message delay, word filtration, history for privacy protected changing username.</li>
                <li>• <span className="underline decoration-[#64ffda] text-[#64ffda]">Nodejs</span> used to establish connection to server. <span className="underline decoration-[#64ffda] text-[#64ffda]">JS</span> used to establish back end client to client 
functionality through socket creation, encryption features, data storing and pulling. <span className="underline decoration-[#64ffda] text-[#64ffda]">HTML</span> used to 
transmit <span className="underline decoration-[#64ffda] text-[#64ffda]">JavaScript</span> script and beautify layout of chat integration.</li>
                <li>• Demo - <a href="https://www.youtube.com/watch?v=DRghdHNENho" target="_blank" rel="noopener noreferrer"><span className="underline decoration-[#64ffda] text-[#64ffda]">https://www.youtube.com/watch?v=DRghdHNENho</span></a></li>
            </ul>
        </div>
    </article>;
}