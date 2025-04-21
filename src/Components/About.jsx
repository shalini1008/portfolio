import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <h2 className="my-10 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              width={420}
              height={420}
              className="rounded-2xl"
              src="./myimg.jpg"
              alt="About Me"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center items-start gap-4">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="text-lg leading-relaxed max-w-2xl"
          >
            I am a B.Tech student pursuing Information Technology at Indira
            Gandhi Delhi Technical University for Women, Delhi, with a CGPA of
            9.26. I am a dedicated learner who has explored competitive
            programming, frontend and backend development, and machine
            learning. While I am still in the learning phase, I have gained
            knowledge through hands-on projects and internships. My experience
            includes open-source contributions, technical documentation, and
            software writing for organizations like Ushahidi. I am adaptable,
            passionate about problem-solving, and committed to excelling in my
            field.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href =
                "https://drive.google.com/drive/folders/1aG1RC7NNdXhFThIQqSGx7XmUs9acmWK_")
            }
            className="mt-4 px-6 py-2 rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition"
          >
            Download My Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default About;

  
