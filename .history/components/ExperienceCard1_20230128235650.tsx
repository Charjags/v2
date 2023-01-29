import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function ExperienceCard1({}: Props) {
    return <article className="flex flex-col rounded-lg md:mt-3 items-center space-y-7 flex-shrink-0 w-
    [500px] sm:w-[600px] xl:w-[786px] snap-center bg-[#292929] mb-9 p-3 pb-3 md:mb-5 md:p-3 md:pb-3 md:hover:opacity-100 md:opacity-80
     transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0,

        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="w-24 h-24 invert md:w-27 md:h-27 rounded-md xl:w-[300px] xl:h-[200px]
 object-center"
            src="https://i.ibb.co/KyxPFS2/depositphotos-86868680-stock-illustration-hare-sketch-in-black-and-removebg-preview.png"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">Slow and Steady Wins The Race</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">Google</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" alt='Python' title='Python'/>
            <img className="h-10 w-10 rounded-full"src="https://img.icons8.com/color/344/google-cloud.png" alt='Google Cloud Platform' title='Google Cloud Platform'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5'/>
            <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/javascript--v1.png" alt='javaScript' title='javaScript'/>

            
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 03/2022 - Ended 05/2022
                </p>

            <ul className="  overflow-y-auto text-left max-w-[15rem] md:max-w-lg lg:max-w-xl text-[#a8b2d1] list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Squashing United Nations Development Goals by developing technical solution ensuring an 
improvement in healthier lives through <span className="underline decoration-[#64ffda] text-[#64ffda]">Google Cloud</span> Map tools and <span className="underline decoration-[#64ffda] text-[#64ffda]">API</span>.</li>
                <li>• Web application displaying health code inspection violations through pop ups within every 
restaurant or eating area in the US interfaced on an interactive map.</li>
                <li>• <span className="underline decoration-[#64ffda] text-[#64ffda]">Python</span> used to webscrape inspection data and feed into <span className="underline decoration-[#64ffda] text-[#64ffda]">Google Earth API</span>. <span className="underline decoration-[#64ffda] text-[#64ffda]">HTML/JS</span> used to develop UI and incorporate <span className="underline decoration-[#64ffda] text-[#64ffda]">Google Cloud API</span>. </li>
                <li>• mentorship from google developers and informative CodeLabs workshops to acquire knowledge on 
various google cloud services.</li>
                <li>Demo - <a href="https://www.youtube.com/watch?v=k5M1EJ1Ygdg" target="_blank" rel="noopener noreferrer"><span className="underline decoration-[#64ffda] text-[#64ffda]">https://www.youtube.com/watch?v=k5M1EJ1Ygdg</span></a></li>
            </ul>
        </div>
    </article>;
}