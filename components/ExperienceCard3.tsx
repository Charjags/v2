import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceCard({ }: Props) {
    return <article className="flex flex-col rounded-lg md:mt-3 items-center space-y-7 flex-shrink-0 w-
    [500px] sm:w-[600px] snap-center bg-[#292929] mb-9 p-3 pb-3 md:mb-5 md:p-12 md:pb-3 md:hover:opacity-100 md:opacity-40
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
            src="https://static.dezeen.com/uploads/2013/01/dezeen_American-Airlines-logo-and-livery_4a.jpg"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">TAMUHACK2022 Hackathon</h4>
            <p className="font-bold items-center sm:text-xl lg:text-2xl nt-1">American Airlines</p>
            <div className="flex lg:space-x-2 my-2 sm:space-x-1">
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/python--v1.png" alt='Python' title='Python' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/opencv.png" alt='OpenCV' title='OpenCV' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/amazon-web-services.png" alt='AWS' title='AWS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png" alt='Django' title='Django' />



                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-gray-300 lg:text-m text-sm">
                Started work 01/2022 - Ended 2/2022
            </p>

            <ul className=" overflow-y-auto text-left text-[#a8b2d1] max-w-[15rem] md:max-w-lg lg:max-w-xl  list-disc space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Emotional distress system improving the lives of American Airlines passengers through improved
                    customer service while lowering anxiety of emotional escalations</li>
                <li>• Pretrained deepface neural network and utilized <span className="underline decoration-[#64ffda] text-[#64ffda]">OpenCV’s</span> facial recognition functions and
                    methods to replicate facial recognition software capable of identifying emotions.</li>
                <li>• Demo - <a href="https://www.youtube.com/watch?v=mzsFfkjtmLc&t=1s" target="_blank" rel="noopener noreferrer"><span className="underline decoration-[#64ffda] text-[#64ffda]">https://www.youtube.com/watch?v=mzsFfkjtmLc&t=1s</span></a></li>
                <li>• More Info: <a href="https://devpost.com/software/emotional-distress-detector" target="_blank" rel="noopener noreferrer"><span className="underline decoration-[#64ffda] text-[#64ffda]">https://devpost.com/software/emotional-distress-detector</span></a></li>
            </ul>
        </div>
    </article>;
}










