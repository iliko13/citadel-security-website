import { AiFillHome } from "react-icons/ai";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { IoMdMail } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div
      className="fixed  bottom-0 left-1/2 z-30 flex w-full -translate-x-1/2 items-center justify-around gap-12 rounded-t-xl
     bg-stone-900 px-6 py-3 text-stone-100 sm:bottom-12 sm:w-fit sm:justify-center sm:rounded-full"
    >
      <Link to="home" smooth>
        <button className="text-xl">
          <AiFillHome />
        </button>
      </Link>
      <Link to="about" smooth>
        <button className="text-xl">
          <VscWorkspaceUnknown />
        </button>
      </Link>
      <Link to="project" smooth>
        <button className="text-xl">
          <MdLocalOffer />
        </button>
      </Link>
      <Link to="contact" smooth>
        <button className="text-xl">
          <IoMdMail />
        </button>
      </Link>
    </div>
  );
};

export default Menu;
