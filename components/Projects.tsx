/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from "../typings";
import { urlFor } from '../sanity';
type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    return (
        <div className="min-h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0 pt-24">
            <h3 className="pl-5 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">Projects</h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
        scrollbar-track-gray-400/20 scrollbar-thumb-[#a8b2d1]/40">
                {projects?.map((project, i) => (
                    <div key={project._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 itmes-center justify-center px-[3rem] md:px-44">
                        <div className='md:flex md:flex-row'>
                            <div className='flex-auto'>
                                <div className=' text-[#64ffda] pt-[-8rem] md:px-10 max-w-xl text-xs sm:pb-4 flex lg:pl-11 lg:mx-auto justify-center text-center invisible md:visible '>
                                    (Hover Over Image to Expand)
                                </div>

                                <motion.img
                                    initial={{
                                        opacity: 0
                                    }}
                                    transition={{ duration: 1.2 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:h-72 lg:w-96 mx-auto mt-[-2rem] object-cover pt-[-3rem] hidden md:block"
                                    src={urlFor(project?.image).url()}
                                    alt=""
                                />
                                <img
                                    className="lg:h-72 lg:w-96 mx-auto mt-[-2rem] object-cover pt-[-3rem] md:hidden"
                                    src={urlFor(project?.image).url()}
                                    alt=""
                                />
                            </div>
                            <div className='flex-auto'>
                                <div className='space-y-10 px-0 md:px-10 lg:max-w-xl text-xs sm:pb-4 md:text-base lg:pl-10 lg:pb-4'><span className='text-[#64ffda]'>{project.linkToBuild}</span></div>

                                <div className="space-y-10 px-0 md:px-10 max-w-xl flex-col flex">
                                    <h4 className="mb-[-20px] lg:text-xl md:text-2xl sm:text-xl font-semibold">
                                        <span className="underline text-[#ccd6f6] decoration-[#64ffda]/50">Case Study {i + 1} of {projects.length}</span>:{" "} <span className='text-[#ccd6f6]'>{project?.title}</span>
                                    </h4>

                                    <div className='flex items-start space-x-2 pb-3 justify-start'>
                                        {project?.technologies.map((technology) => (
                                            <img
                                                className='h-10 w-10'
                                                key={technology._id}
                                                src={urlFor(technology.image).url()}
                                                alt=""
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="m-auto py-6 text-md text-center text-[#a8b2d1] sm:overflow-y-auto lg:overflow-visible lg:text-lg sm:text-md scrollbar-thin scrollbar-thumb-[#64ffda]/40 justify-center max-w-5xl max-h-96">
                            {project?.summary}
                        </p>
                    </div>

                ))}

            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </div>

    )
}

export default Projects