"use client";
import { useEffect, useState } from "react";
import NewProject from "./ProjectCard";

const bgImages = ["/logodev.png", "/logoTech.png", "/monlogo.png"];

const ProjetRecent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImages[index]})` }}
        className="min-h-screen items-center justify-center grid bg-center bg-cover w-full transition-all duration-1000 ease-in-out"
      >
        <p className="font-extrabold text-2xl text-white text-center">
          {" "}
          MES PROJETS RECENTS
        </p>
        <div className="container md:flex px-5 gap-5 grid">
          <NewProject/>
        </div>
      </div>
    </>
  );
};

export default ProjetRecent;
