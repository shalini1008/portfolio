import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandCpp } from "react-icons/tb"; 
import { SiFirebase, SiTailwindcss, SiExpress,  } from "react-icons/si";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
      intial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
          duration:duration,
          ease:"linear",
          repeat: Infinity,
          repeatType:"reverse",
        }
      }
})
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1 ,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.2}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}} 
      className="flex flex-wrap items-center justify-center gap-8">
       
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-6">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-6">
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-6">
          <TbBrandCpp className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-6">
          <SiFirebase className="text-7xl text-orange-500" />
        </motion.div>

        
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-6">
          <SiTailwindcss className="text-7xl text-teal-400" />
        </motion.div>

        
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-6">
          <SiExpress className="text-7xl text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;

