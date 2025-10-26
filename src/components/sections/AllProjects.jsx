import { projects } from "@/data/projects";

const AllProjects = () => {
  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam text-white'>
      <div className="container px-4">
        <div className="content text-center">
          <h2 className="font-bold font_poppins text-3xl sm:text-4xl mt-4 mx-auto text-white">
            Veja Nossos Últimos Clientes
          </h2>
        </div>

        <div className="projects_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projects.map(project => (
            <div
              key={project.id}
              className="project bg-white px-5 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8 rounded-[20px] shadow-brandShadow hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                className="rounded-[20px] w-full h-[180px] sm:h-[200px] object-contain"
                src={project.image}
                alt={`Imagem do ${project.title}`}
              />
              <h4 className="font-poppins font-semibold text-lg sm:text-xl text-black uppercase text-left mt-5 sm:mt-6">
                {project.title}
              </h4>

              <p
                className="text-xs sm:text-sm text-gray-500 mt-3 text-left md:transition-all md:duration-300 md:ease-in-out md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-[200px] md:overflow-hidden opacity-100 max-h-full"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
