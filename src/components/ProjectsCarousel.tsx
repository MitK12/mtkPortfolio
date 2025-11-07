import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectsCarousel = ({ projects }) => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-12">Some Recent Work</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={1.2}
        centeredSlides
        loop
        className="max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-800 flex flex-col md:flex-row items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-96 object-cover"
              />
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-gray-500 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// --- Modal Component ---
import { useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-gray-900 rounded-lg shadow-2xl w-full max-w-3xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          ×
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded"
        />
        <h3 className="text-2xl font-semibold mt-6 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 border border-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsCarousel = ({ projects }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-12">Some Recent Work</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={1.2}
        centeredSlides
        loop
        className="max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              onClick={() => setSelected(project)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-gray-800 hover:shadow-2xl transition-shadow flex flex-col md:flex-row items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 h-96 object-cover"
              />
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-gray-500 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default ProjectsCarousel;
