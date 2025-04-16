
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icônes stylées (tu peux aussi utiliser un svg)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-blue-400/40 fixed top-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center  md:px-8">

        <div className="flex items-center gap-3">
                  <Image
                    src="/logodev.png"
                    alt="profil"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                <span className="block text-sm font-normal text-gray-700">Full Stack Developer</span> 
                </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 font-extrabold bg-blue-400/40 backdrop-blur-md  text-yellow-800 p-5 w-l">
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/About">À propos</Link>
            </li>
            <li>
                <Link href="/Projects">Projets</Link>
            </li>
            <li>
                <Link href="/HomePage">Profil</Link>
            </li>
            <li>
                <Link href="/Contact">Contact</Link>
            </li>
        </ul>

      </div>

      {/* Menu mobile (déroulant) */}
      {menuOpen && (
        // <ul className="flex flex-col gap-4 bg-transparent px-4 py-2 md:hidden items-end">
        // <ul className="absolute top-full right-0 w-1/4 h-screen bg-gray-100 text-blue-950 px-4 py-2 flex flex-col items-end gap-4 md:hidden shadow-lg z-40">
        <ul className="absolute top-full right-0 w-1/5 h-62 bg-white/30 backdrop-blur-md text-blue-950 px-4 py-2 flex flex-col items-end gap-4 md:hidden shadow-lg z-40 border-l border-white/20">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link href="/About" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link href="/Projects" onClick={() => setMenuOpen(false)}>Mes Projets</Link></li>
          <li><Link href="/HomePage" onClick={() => setMenuOpen(false)}>Mon Profil</Link></li>
          <li><Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;

