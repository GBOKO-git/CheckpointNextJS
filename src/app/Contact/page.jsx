import { Mail, Github, Linkedin, MapPin, Handshake } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className=" grid mt-10 md:mt-15 md:p-6 pt-7 justify-center items-center bg-slate-200 min-h-screen text-xl gap-7 text-black md:font-serif font-semibold">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:w-2xl">
            <form className=" mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-9">
                Contactez-moi
              </h2>

              <div className="grid">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="gboko.amara@gmail.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid">
                <label htmlFor="name">Message</label>
                <textarea
                  type="text"
                  placeholder="Votre message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="md:w-2xl max-sm:w-87 mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6  grid justify-center">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Mail size={24} className="text-blue-600" />
              Informations de contact
            </h2>

            <ul className="space-y-2 text-gray-800 max-sm:font-bold">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <a
                  href="mailto:gbko.amara@uvci.edu.ci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  gbko.amara@uvci.edu.ci
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={18} className="text-gray-800" />
                <a
                  href="https://github.com/GBOKO-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/GBOKO-git
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={18} className="text-blue-700" />
                <a
                  href="http://www.linkedin.com/in/gboko-amara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/gboko-amara
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-red-500" />
                Abidjan, Côte d’Ivoire
              </li>
            </ul>
          </div>
        </div>
        <div className="m-2 mx-auto max-sm:w-87 bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold  flex items-center gap-2 place-items-center">
            <Handshake size={24} className="text-green-600 " />
            Travaillons ensemble
          </h2>

          <p className="max-sm:font-bold ">
            Vous avez un projet, une idée, ou simplement une question ? <br />
            Je serais ravi d’échanger avec vous ! <br />
            N'hésitez pas à me contacter par e-mail, via les réseaux ou en
            remplissant le formulaire ci-contre.
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
