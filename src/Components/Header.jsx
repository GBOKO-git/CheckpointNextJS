"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icônes stylées (tu peux aussi utiliser un svg)
import { MdPictureAsPdf } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-blue-400 fixed top-0 w-full z-50 shadow-lg lg:px-20 px-1 ">
      <div className="flex justify-between  items-center  ">
        <div className="flex items-center gap-3  md:ml-5">
          <Image
            src="/logodev.png"
            alt="profil"
            width={40}
            height={40}
            className="rounded-full hover:cursor-pointer"
          />
          <Link href="/" className=" block text-black text-lg font-semibold">
            gboko.dev
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 font-extrabold bg-blue-400/40 backdrop-blur-md  text-yellow-800 p-5 w-l">
          
          <li className="cursor-pointer hover:text-green-300  relative group flex gap-2">
            <a href="/cv-gboko-fullstack-junior.pdf"
               download="cv-gboko-fullstack-junior" >
                Telecharger mon cv</a>
            <MdPictureAsPdf className="text-red-600  opacity-0 group-hover:opacity-100" size={20}/>
          </li>
          <li className="hover:text-green-300  ">
            <Link href="/About">À propos</Link>
          </li>
          <li className="hover:text-green-300 ">
            <Link href="/Projects">Projets</Link>
          </li>
          <li className="hover:text-green-300 ">
            <Link href="/Contact">Contact</Link>
          </li>
          <li className="hover:text-green-300 ">
            <Link href="/formation">Services</Link>
          </li>
        </ul>
      </div>

      {/* Menu mobile (déroulant) */}
      {menuOpen && (
        <ul className="absolute top-full right-0 w-full h-auto justify-center bg-white/40 backdrop-blur-md text-white px-4 py-2 flex flex-wrap  gap-4 md:hidden shadow-lg z-40 border border-green-300 rounded">
          <li className="cursor-pointer hover:text-green-400 relative group flex gap-2">
            <a href="/cv-gboko-fullstack-junior.pdf"
               download="cv-gboko-fullstack-junior" >
                Telecharger mon cv</a>
            <MdPictureAsPdf className="text-red-400 opacity-0 group-hover:opacity-100"/>
          </li>
          <li className="cursor-pointer hover:text-green-400 hover:underline">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li className="cursor-pointer hover:text-green-400 hover:underline">
            <Link href="/About" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          </li>
          <li className="cursor-pointer hover:text-green-400 hover:underline">
            <Link href="/Projects" onClick={() => setMenuOpen(false)}>
              Mes Projets
            </Link>
          </li>
          <li className="cursor-pointer hover:text-green-400 hover:underline">
            <Link href="/Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="cursor-pointer hover:text-green-400 hover:underline">
            <Link href="/formation" onClick={() => setMenuOpen(false)}>Services
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
