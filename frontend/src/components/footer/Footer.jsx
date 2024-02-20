import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-32 flex h-52 w-full flex-col items-center justify-center gap-4">
      {/* Social Media */}
      <div className="flex h-12 w-fit items-center justify-center gap-6 text-white">
        <a
          href="https://github.com/u-steen"
          target="_blank"
          title="Github Profile"
        >
          <FaGithub size={"2rem"} />
        </a>
        <a href="https://linkedin.com" target="_blank" title="LinkedIn">
          <FaLinkedin size={"2rem"} />
        </a>
        <a
          href="mailto:iustin.esanu7@gmail.com"
          target="_blank"
          title="Send me an email"
        >
          <IoMdMail size={"2rem"} />
        </a>
        <a href="" target="_blank" title="CV">
          <IoDocumentText size={"2rem"} />
        </a>
      </div>
      {/* Credits */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-white">Author: Esanu Iustin</h3>
        <h3 className="text-md text-gray-200">
          Note: I own none of the images, descriptions or any other data used.
        </h3>
        <h4 className="text-xs text-gray-400">Jan 2024</h4>
      </div>
    </div>
  );
};

export default Footer;
