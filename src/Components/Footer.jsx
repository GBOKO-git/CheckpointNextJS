
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, FacebookIcon , Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logodev.png"
            alt="profil"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-semibold"> <i>AZOUM</i> Studio</span>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-sm text-gray-300">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/About" className="hover:text-white transition">About</Link></li>
          <li><Link href="/Projects" className="hover:text-white transition">Projects</Link></li>
          <li><Link href="/HomePage" className="hover:text-white transition">HomePage</Link></li>
          <li><Link href="/Contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-8 flex justify-center gap-6">
        <Link href="https://github.com/GBOKO-git" target="_blank" className="text-gray-400 hover:text-white transition">
          <Github size={24} />
        </Link>
        <Link href="https://www.instagram.com/amaragboko/" target="_blank" className="text-gray-400 hover:text-white transition">
          <Instagram size={24} />
        </Link>
        <Link href="https://x.com/AmaraGboko" target="_blank" className="text-gray-400 hover:text-white transition">
          <Twitter size={24} />
        </Link>
        <Link href="https://www.facebook.com/amara.gbokoazoumanan" target="_blank" className="text-gray-400 hover:text-white transition">
          <FacebookIcon size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/gboko-amara/" target="_blank" className="text-gray-400 hover:text-white transition">
          <Linkedin size={24} />
        </Link>
      </div>


      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GBOKO Dev — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;








// import Image from "next/image";
// import Link from "next/link";


// const Footer = () => {
//     return(
//         <>
//             <div className="flex bg-gray-950 justify-center gap-20 text-white  bottom-0 w-full place-items-center">
//                 <Image src="/devops.png" alt="profil" width={35} height={10} className="rounded-full"/>

//                 <ul className="flex gap-20 px-2">
//                     <li><Link href="/">Home</Link></li>
//                     <li><Link href="/About">About</Link></li>
//                     <li><Link href="/Projects">Projects</Link></li>
//                     <li><Link href="/HomePage">HomePage</Link></li>
//                     <li><Link href="/Contact">Contact</Link></li>
//                 </ul>
//             </div>
//         </>
//     );
// }
// export default Footer;