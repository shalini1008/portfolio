import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      year: "July-Dec 2024",
      role: "Software Documentation Writer",
      company: "Ushahidi",
      description: `
        - Contributed to enhancing Ushahidi’s platform for information gathering, data archiving, and insights generation.
        - Drafted deployment setup documentation, covering technical setups, domain configurations, and SSL/TLS setups.
        - Created documentation for data collection forms used during crises such as floods and police brutality, along with other functionalities of Ushahidi.
      `,
    },
    {
      year: "March-April 2024",
      role: "Contributor",
      company: "Outreachy Open Source Organization",
      description: `
        - Gained in-depth understanding of Open Source principles and workflows, including documentation and APIs.
        - Worked on the proposed project by Ushahidi, contributing to documentation, Cypress test framework, Infobip integration, and API-related tasks.
      `,
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transiition={{ duration: 1 }}
              className="w-full lg:w-1/4 "
            >
              <p className="m-16 mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transiition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm ">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
