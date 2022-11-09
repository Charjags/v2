import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import ExperienceCard1 from './ExperienceCard1'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'
import ExperienceCard4 from './ExperienceCard4'
import ExperienceCard5 from './ExperienceCard5'
import ExperienceCard6 from './ExperienceCard6'
type Props = {}

function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center pt-24">
      <h3
        className="uppercase tracking-[20px] pl-5 text-gray-500 text-2xl mb-10"
      >Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll
         p-4 snap-x snap-mandatory py-0 md:pb-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a8b2d1]/40">
        <ExperienceCard />
        <ExperienceCard1 />
        <ExperienceCard2 />
        <ExperienceCard3 />
        <ExperienceCard4 />
        <ExperienceCard5 />
        <ExperienceCard6 />
      </div>
    </motion.div>
  )
}

export default WorkExperience