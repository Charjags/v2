import {useEffect, useState} from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"; 
import Link from 'next/link';
type Props = {}

export default function Header({}: Props) {
  const [bgColor, setBgColor] = useState('#333333');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setBgColor('#333333');
    } else if (scrollY >= 100 && scrollY < 200) {
      setBgColor('#3A3A3A');
    } else {
      setBgColor('#444444');
    }
  }
  return (
  <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
  xl:items-center">
    <motion.div
    initial={{
       x:-500,
       opacity:0,
       scale:0.5
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration: 1.5,
    }}
     className="flex flex-row items-center">
      {/* Social Icons */}   
      <Link href="#hero">
      <motion.img
    whileHover={{scale:2.2}}
    transition={{duration:1.2}}
    viewport={{once:true}}
      className="max-h-10 max-w-10 rounded-full filter grayscale md:hover:grayscale-0 cursor-pointer"
          src="https://i.ibb.co/3ksRTKS/Free-Sample-By-Wix-1.jpg" alt="" title="Home"/>
        </Link>

      <SocialIcon url="https://www.linkedin.com/in/charanjagwani/"
      fgColor='gray'
      bgColor='transparent'/>


<SocialIcon url="https://www.github.com/charjags/"
      fgColor='gray'
      bgColor='transparent'/>

<SocialIcon url="https://www.youtube.com/channel/UC2KWRuoLBrY97V_zAwONGOQ"
      fgColor='gray'
      bgColor='transparent'/>

<SocialIcon url="https://medium.com/@charjags100/how-to-stand-out-as-a-software-engineer-intern-or-new-grad-candidate-1742e350a7f"
      fgColor='gray'
      bgColor='transparent'/>
      
    </motion.div>

      <Link href='#contactme '>
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{duration:1.5}}
     className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
      className="cursor-pointer"
      network="email"
      fgColor="gray"
      bgColor="transparent"
      />
    </motion.div>
    </Link>
  </header>
  );
}