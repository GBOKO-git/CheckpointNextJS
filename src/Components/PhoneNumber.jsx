"use client";
import { MdOutlinePhoneIphone, MdPhoneInTalk } from "react-icons/md";
import { toast } from "sonner";

export default function PhoneItem() {
  const phoneNumber = "+225 0758019243";

  const handleClick = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      //  Lancer l'appel
      window.location.href = `tel:${phoneNumber}`;
    } else {
      //  Copier le numéro
      navigator.clipboard.writeText(phoneNumber);
      toast.success("Numéro copié dans le presse-papier 📋", {
        description: phoneNumber,
        duration: 2000,
      });
    }
  };

  return (
    <li
      className="flex items-center gap-2 cursor-pointer font-sans relative group"
      onClick={handleClick}
    >
      <MdOutlinePhoneIphone size={18} className="text-green-600" />
      <p>{phoneNumber}</p>
      <MdPhoneInTalk className="text-red-400 opacity-0 group-hover:opacity-100" />
    </li>
  );
}
