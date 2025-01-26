import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
console.log(container(0));
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 m-12 lg:mb-35 ">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-1 lg:text-8xl"
            >
              Shalini
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-500 via-yellow-200 to-green-500 bg-clip-text text-transparent text-4xl tracking-tight">
              Software Engineer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am a B.Tech student eager to learn new things. So far, I have
              explored competitive programming, frontend and backend
              development, and machine learning. While I am still in the
              learning phase, I am gaining knowledge in this domain through
              projects and internships.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}} 
            width={650}
            height={650}
            className="rounded-2xl" src="./myimg2.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
