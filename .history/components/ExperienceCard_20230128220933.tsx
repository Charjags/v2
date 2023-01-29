import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function ExperienceCard({ }: Props) {
    return <article className="flex flex-col rounded-lg md:mt-3 items-center space-y-7 flex-shrink-0 sm:w-[600px] xl:w-[650px] snap-center bg-[#292929] mb-9 p-3 pb-3 md:mb-5 md:p-3 md:pb-3 md:hover:opacity-100 md:opacity-40
     transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,

            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-27 h-27 rounded-full 
         object-center"
            src="https://cdn.pixabay.com/photo/2016/04/01/08/29/animals-1298747_1280.png"
            alt=""
        />

        <div className="px-0 sm:px-10 md:space-y-2">
            <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">Full Stack Software Engineer</h4>
            <p className="font-bold sm:text-xl lg:text-2xl nt-1">ScriptChain Health</p>
            <div className="flex  lg:space-x-2 my-2 sm:space-x-1">
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/angularjs.png" alt='AngularJS' title='AngularJS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/html-5--v1.png" alt='HTML5' title='HTML5' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/css3.png" alt='CSS' title='CSS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/344/node-js.png" alt='NodeJS' title='NodeJS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/344/amazon-web-services.png" alt='AWS' title='AWS' />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/ios/344/django.png" alt='Django' title='Django' />



                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className="uppercase py-5 text-[#ccd6f6] lg:text-m text-sm">
                Started work 05/2022 - Ended 10/2022
            </p>

            <ul className=" overflow-y-auto  max-w-[15rem] text-left text-[#a8b2d1] md:max-w-lg lg:max-w-xl  list-disc md:mt-3 space-y-4 ml-5 lg:text-lg sm:text-md max-h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64ffda]/40">
                <li>• Developed front-end responsive UI Interface of site through <span className="underline decoration-[#64ffda] text-[#64ffda]">Angular</span>/<span className="underline decoration-[#64ffda] text-[#64ffda]">TypeScript</span>/<span className="underline decoration-[#64ffda] text-[#64ffda]">BootStrap</span>.</li>
                <li>• Used <span className="underline decoration-[#64ffda] text-[#64ffda]">NodeJs</span> to connect entire back-end JS controllers/MySQL database to Angular front end.</li>
                <li>• Created and integrated the company's database into <span className="underline decoration-[#64ffda] text-[#64ffda]">AWS</span>, using EC2 Instance to place db into private subnet in
                    VPC with PemKeyProtection, Password Authorization, and Specified IP access through connection method
                    of TCP over SSH.</li>
                <li>• <span className="underline decoration-[#64ffda] text-[#64ffda]">TypeScript</span> used to connect controllers to components and initialize forms, routers, email system senders.</li>
                <li>• Demo – <a href="https://www.scriptchain.co" target="_blank" rel="noopener noreferrer"><span className="underline decoration-[#64ffda] text-[#64ffda]"> https://www.scriptchain.co</span></a></li>
            </ul>
        </div>
    </article>;
}