import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "E-Commerce website",
      image: "./p1.png",
      description:
        "E-Commerce Website is a modern, user-friendly platform for online shopping. It features Firebase authentication, secure payment integration with Razorpay, and a React.js-based frontend styled with Tailwind CSS. The platform includes role-based access for admins to manage products and orders via a dashboard, while users can browse products, manage a cart, and complete purchases seamlessly.",
      technologies: ["ReactJs", "Redux Toolkit", "Tailwind CSS", "Firebase"],
      githubLink:"https://github.com/shalini1008/e-commerce-",
      siteLink:"https://e-commerce-beryl-three-67.vercel.app/",
    },
    {
      title: "Waste Web Page",
      image: "./p2.png",
      description:
        "Website to segregate waste by allowing users or suppliers to buy or sell waste. It also includes scheduling for waste pickups.It also offer QR based reward offering feature for segregating waste",
      technologies: ["ReactJs", "Tailwind CSS"],
      githubLink:"https://github.com/shalini1008/wastewebpage",
      siteLink:"https://binbandhu.vercel.app/",
    },
    {
      title: "Food Website",
      image: "./p6.png",
      description:
        "Food website showcasing different food items with a user-friendly UI.",
      technologies: ["HTML", "Tailwind CSS", "Javascript"],
      githubLink:"https://github.com/shalini1008/foodWebsite",
      siteLink:"https://melodious-macaron-1d8693.netlify.app/",
    },
    {
      title: "Task Management App",
      image: "./p3.png",
      description:
        "Website to manage your daily tasks efficiently, helping you stay organized.",
      technologies: ["ReactJs", "Redux Toolkit", "Tailwind"],
      githubLink:"https://github.com/shalini1008/To-do-contextApi-",
      siteLink:"https://to-do-context-api-kywt.vercel.app/",
    },
    {
      title: "Drumkit",
      image: "./p4.png",
      description:
        "Fun website that plays different sounds when specific keys are pressed.",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink:"https://github.com/shalini1008/drumkit",
      siteLink:"https://drumkit-red-ten.vercel.app/",
    },
    {
      title: "Firebase Contact App",
      image: "./p5.png",
      description:
        "Website to save contacts with options to add, update, and delete names and email addresses.",
      technologies: ["ReactJS", "Tailwind CSS", "Firebase"],
      githubLink:"https://github.com/shalini1008/ContactApp",
      siteLink:"https://contact-app-av85.vercel.app/",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div 
      className="flex flex-col items-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full max-w-4xl items-center md:items-start gap-6 rounded-lg p-6 shadow-lg hover:shadow-white transition-shadow duration-3000"
          >
            <div className="flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="h-32 w-32 rounded-lg object-cover  md:m-0 m-8 "
                
              />
            </div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transiition={{ duration: 1 }}
            className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-md px-2 py-1 text-sm text-neutral-300 bg-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

             
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-pink-400 hover:bg-purple-700 transition duration-300"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-pink-400 hover:bg-purple-700 transition duration-300"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Site
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default Project;
