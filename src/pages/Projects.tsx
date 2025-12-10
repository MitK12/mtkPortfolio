import { NavLink } from "react-router-dom";
import ecommerce from "../assets/ecommerce.png";
import educational from "../assets/educational.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce app with user authentication, product management, and payment integration using MERN stack.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
      image: ecommerce, // Replace with your project image
      //demoLink: "https://your-demo-link.com", // Replace with actual demo URL
      //githubLink: "https://github.com/MitK12/e-commerce-project",
    },
    {
      id: 2,
      title: "warka educational website",
      description:
        " fully responsive educational website built with the MERN stack, featuring user authentication, course management, and real-time chat functionality.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      image: educational, // Replace with your project image
      // demoLink: "https://your-demo-link.com", // Replace with actual demo URL
      // githubLink: "https://github.com/yourusername/project2", // Replace with GitHub repo
    },
    {
      id: 3,
      title: "Blog Platform",
      description:
        "A MERN-based blogging site with user profiles, comments, and admin dashboard for content management.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      image: "/project3.jpg", // Replace with your project image
      // demoLink: "https://your-demo-link.com", // Replace with actual demo URL
      // githubLink: "https://github.com/yourusername/project3", // Replace with GitHub repo
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            A showcase of my MERN stack applications and full-stack development
            work.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Action Buttons */}
                {/*
               <div className="flex space-x-4">
                  <NavLink
                    to={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-center py-2 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </NavLink>
                  <NavLink
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 rounded-lg font-medium transition-colors text-center"
                  >
                    GitHub
                  </NavLink>
                </div>
                */}
              </div>
            </div>
          ))}
        </section>

        {/* Call-to-Action */}
        <section className="text-center mt-16">
          <p className="text-lg mb-6">
            Interested in collaborating? Let's build something amazing together.
          </p>
          <NavLink
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Projects;
