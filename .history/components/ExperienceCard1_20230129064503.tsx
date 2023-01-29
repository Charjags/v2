import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

export default function ExperienceCard({ }: Props) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link href='#projects1'>
      <div style={{scrollBehavior: 'smooth'}}>
        <button>
          <article className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] sm:w-[600px] xl:w-[786px] snap-center bg-[#292929] mb-5 p-5 pb-3 md:mb-3 md:p-3 md:pb-3 md:hover:opacity-100 md:opacity-80 transition-opacity duration-200 overflow-hidden ${scroll ? 'shadow-md' : ''}`}>
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-24 h-24 invert md:w-27 md:h-27 rounded-md xl:w-[300px] xl:h-[200px] object-center"
              src="https://i.ibb.co/YjHFypj/ac32d8d7810328ab827142c1434ba10f-removebg-preview.png"
              alt=""
            />
            <div className="px-0 sm:px-10 md:space-y-2">
              <h4 className="sm:text-2xl md:text-3xl lg:text-4xl text-[#ccd6f6] font-light">Slow and Steady Wins the Race</h4>
              <p className="font-bold sm:text-xl lg:text-2xl nt-1">Long Term, Shorter Risk</p>
              {/* ... */}
            </div>
          </article>
        </button>
      </div>
    </Link>
  )
}
