import Link from "next/link";
import { SharedButton } from "./SharedButton";

const ProjectCard = ({project}) => {
    const {name, description, technologie, projectUrl, imgUrl} = project;
    return (
        <>
            <div className="max-lg:h-auto  w-auto  m-0 grid max-sm:mx-2">
                <div>
                <img className="rounded-t-xl h-auto w-full grid object-cover transition-transform duration-500 hover:scale-105 "
                src={imgUrl} alt={name} width={350} height={400}/>
                </div>
                <div className="bg-gray-100 h-82 w-auto grid p-2 rounded-b-2xl shadow-lg max-sm:font-bold max-lg:text-xl">
                    <h3 className="font-bold">{name}</h3>
                    <p>{description} </p>
                    <p>{technologie} </p>
                    <Link href={projectUrl}
                    className=" text-center text-xl font-serif" target="blank"
                    ><SharedButton name="see more"/></Link>
                </div>
                
            </div>
        </>
    )
}

export default ProjectCard;