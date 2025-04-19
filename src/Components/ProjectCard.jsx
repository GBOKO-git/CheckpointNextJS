"use client";
import Link from "next/link";
import { SharedButton } from "./SharedButton";
import { useState } from "react";

const ProjectCard = ({project}) => {
    const [text, setText] = useState(false);
    const {name, description, technologie, projectUrl, imgUrl} = project;
    return (
        <>
            <div className="max-lg:h-auto  w-auto  m-0 grid max-sm:mx-2 max-sm:w-80">
                <div>
                <img className="rounded-t-xl md:w-80 md:h-50 xl:h-90 xl:w-120 max-sm:w-auto max-sm:h-80 font-semi-condensed  grid object-cover transition-transform duration-500 hover:scale-105 "
                src={imgUrl} alt={name} />
                </div>
                <div className="bg-slate-50 h-82 w-auto grid p-2 rounded-b-2xl shadow-lg max-sm:font-bold max-lg:text-xl text-md font-semibold ">
                    <h3 className="font-bold text-lg text-yellow-600 text-center">{name}</h3>
                    {/* Texte toujours visible en md+ */}
                    <p className="hidden md:block text-black text-justify">
                    {description}</p>
                    <p className="text-center text-red-600">{technologie} </p>
                    {/* <div className="flex justify-around"> */}
                    <div className="text-center">
                        <button className="md:hidden bg-blue-300 px-3  text-xl  rounded hover:text-amber-50 hover:bg-blue-900 hover:cursor-pointer"
                        onClick={() => setText(!text)}>
                            {text ? "Masquer" : "Description"}
                        </button>
                        
                        {text && 
                        (
                            <p className="text-justify h-40 font-bold text-black text-sm" >{description}</p>
                        )}
                        
                     </div>
                     
                    <Link href={projectUrl}
                    className=" text-center text-xl font-serif" target="blank"
                    ><SharedButton name="voir plus"/></Link>
                    
                </div>
                
            </div>
        </>
    )
}

export default ProjectCard;