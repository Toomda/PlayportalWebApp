import { NavLink } from "react-router-dom";
import Logo from "../assets/Playportal_Logo.png";
import { FaTwitch, FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(
    window.innerWidth >= 1250 ? true : false
  );

  function openMenu() {
    setShowMenu((oldValue) => !oldValue);
  }

  return (
    <nav className="bg-white px-2 sticky top-0 sm:px-4 py-2.5 dark:bg-gray-900 z-20 border-gray-200 dark:border-gray-6000">
      <div className="flex flex-wrap items-center justify-evenly phone:flex-col phone:w-full">
        <div className="phone:flex phone:justify-between phone:order-2 phone:w-full">
          <NavLink
            className="text-5xl font-semibold dark:text-white mb-2 flex flex-nowrap phone:order-2"
            to={"/"}
            style={{ color: "#77BF29" }}
          >
            <img src={Logo} className="w-14 mr-2"></img>
            Playportal
          </NavLink>
          <GiHamburgerMenu
            fill="#FFF"
            className="hidden phone:flex phone:order-1"
            size={60}
            onClick={openMenu}
            cursor={"pointer"}
          ></GiHamburgerMenu>
          <GiHamburgerMenu
            className="phone:order-3 opacity-0 hidden phone:flex"
            size={60}
          ></GiHamburgerMenu>
        </div>
        <AnimateHeight
          id="pagelink_wrapper"
          duration={350}
          height={showMenu ? "auto" : 0}
          className="phone:w-full flex-nowrap phone:order-4"
        >
          <ul className="flex items-center gap-8 p-6 font-medium dark:bg-gray-900 phone:flex-col phone:items-start phone:gap-6 phone:mt-4">
            <li>
              <NavLink
                className="text-2xl p-2 text-gray-700 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to={"/Events"}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-2xl p-2 text-gray-700 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to={"/Members"}
              >
                Mitglieder
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-2xl p-2 text-gray-700 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to={"/Partnerships"}
              >
                Partnerschaften
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-2xl p-2 text-gray-700 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                to={"/Giveaways"}
              >
                Verlosungen
              </NavLink>
            </li>
          </ul>
        </AnimateHeight>
        <div className="flex gap-3 items-center phone:justify-end phone:order-3 phone:w-full ">
          <button
            type="button"
            className="mr-2 phone:order-2 phone:absolute phone:top-4 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <AiOutlineLogin className="mr-2" size={25} />
            Login
          </button>
          <a
            href="https://www.youtube.com/c/PlayPortalNetwork"
            target="_blank"
            className="phone:hidden"
          >
            <FaYoutube title="Youtube" fill="#FFF" size={35} />
          </a>
          <a
            href="https://discord.com/invite/fzEsThV"
            target="_blank"
            className="phone:hidden"
          >
            <FaDiscord title="Discord" fill="#FFF" size={30} />
          </a>
          <a
            href="https://twitter.com/Playportal_Net"
            target="_blank"
            className="phone:hidden"
          >
            <FaTwitter title="Twitter" fill="#FFF" size={30} />
          </a>
          <a
            href="https://www.twitch.tv/playportal_network"
            target="_blank"
            className="phone:hidden"
          >
            <FaTwitch title="Twitch" fill="#FFF" size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
}
