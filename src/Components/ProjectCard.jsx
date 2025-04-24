"use client";
import Link from "next/link";
import { SharedButton } from "./SharedButton";
// import { useState } from "react";

const ProjectCard = ({ project }) => {
//   const [text, setText] = useState(false);
  const { name, description, technologie, projectUrl, imgUrl } = project;
  return (
    <>
      <div className="max-lg:h-auto  w-auto  m-0 grid max-sm:mx-2 max-sm:w-80 bg-white rounded-sm">
        <div className="w-auto md:h-40 p-5 h-50  object">
          <img
            className="rounded-xl md:w-80  max-sm:w-auto max-sm:h-80 font-semi-condensed  grid object-cover transition-transform duration-500 hover:scale-105 "
            src={imgUrl}
            alt={name}
          />
        </div>
        <div className="bg-slate-50 h-auto md:h-82 w-auto grid p-2 rounded-b-2xl md:shadow-lg  max-lg:text-xl md:text-md md:font-semibold text-sm">
          <h3 className="font-bold text-lg text-yellow-600 text-center">
            {name}
          </h3>
          {/* Texte toujours visible en md+ */}
          <p className=" md:block text-black md:text-justify font-serif ">
            {description}
          </p>
          <p className="md:text-center text-red-600">{technologie} </p>
          {/* <div className="flex justify-around"> */}
          {/* <div className="text-center">
            <button
              className="md:hidden bg-blue-300 px-3  text-xl  rounded hover:text-amber-50 hover:bg-blue-900 hover:cursor-pointer"
              onClick={() => setText(!text)}
            >
              {text ? "Masquer" : "Description"}
            </button>

            {text && (
              <p className="text-justify h-40 font-bold text-black text-sm">
                {description}
              </p>
            )}
          </div> */}

          <Link
            href={projectUrl}
            className=" text-center text-xl font-serif"
            target="blank"
          >
            <SharedButton name="voir plus" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
