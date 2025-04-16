const { default: ProjectCard } = require("./ProjectCard")

const ProjectList = ({projects}) => {
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 p-6 w-l bg-orange-100  place-items-center overflow-hidden  shadow-lg">
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