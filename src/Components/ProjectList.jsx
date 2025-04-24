const { default: ProjectCard } = require("./ProjectCard")

const ProjectList = ({projects}) => {
    return(
        <>
            <div className="grid max-sm:grid-cols-1  max-lg:grid-cols-2  max-sm:gap-5 max-sm:py-7 grid-cols-4  lg:gap-8 lg:p-6 max-lg:w-auto w-l
             bg-gray-300  place-items-center overflow-hidden  shadow-lg md:mt-15 mt-7">
                {
                    projects?.map((project, index) =>(
                        <ProjectCard key={index} project={project}/>
                    ))
                }
            </div>
        </>
    )
}

export default ProjectList;