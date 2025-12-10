import { FaLaptopCode, FaDatabase, FaMobileAlt, FaCloud } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
    title: "Frontend Development",
    description:
      "Building responsive and dynamic user interfaces using React.js, Tailwind CSS, and modern frontend technologies.",
  },
  {
    icon: <FaDatabase className="text-green-600 text-5xl mb-4" />,
    title: "Backend Development",
    description:
      "Creating robust server-side applications using Node.js, Express.js, and integrating with MongoDB or SQL databases.",
  },
  {
    icon: <FaMobileAlt className="text-purple-600 text-5xl mb-4" />,
    title: "Mobile-Responsive Design",
    description:
      "Ensuring websites and applications work seamlessly across all devices and screen sizes.",
  },
  {
    icon: <FaCloud className="text-yellow-600 text-5xl mb-4" />,
    title: "Cloud & Deployment",
    description:
      "Deploying full-stack applications to platforms like Vercel, Netlify, or cloud services, with CI/CD setup.",
  },
];

const Services = () => {
  return (
    <section className=" min-h-screen mx-auto bg-gray-100 dark:bg-gray-900 py-26 px-10 transition-colors duration-300">
      <div className=" text-center mb-20 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          My Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          I help businesses and individuals build modern, scalable, and
          high-performance web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              {/* <p className="text-gray-700 dark:text-gray-300 text-center">
                {service.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
