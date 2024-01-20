/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bars3BottomRightIcon,
  // BookOpenIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blueLogo from "../../assets/images/logo-blue1.png";
import { getUserInfo, removeUserInfo } from "../../services/auth.service";
import GlobalModal from "./GlobalModal";
import HomePageModal from "../../pages/home/homePageModal";

const Navbar = () => {
  const { role, accessToken } = getUserInfo() as any;
  const navigate = useNavigate();

  const Links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];
  const [open, setOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = (accessToken: string) => {
    removeUserInfo(accessToken);
    return navigate("/login");
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div
        className="md:flex items-center justify-between py-1 md:px-10 px-7"
        style={{
          background: "rgba(0,0,0,0)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          {/* <BookOpenIcon className="w-7 h-7 text-blue-600" /> */}
          <Link to={"/"}>
            <img src={blueLogo} className="w-[7rem] lg:w-[10rem]" alt="" />
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 block" : "top-[-490px]"
          }`}
          style={{
            backdropFilter: "blur(8px)",
          }}
        >
          {Links.map((link, index) => (
            // <Link to='#service'>
            <li
              key={index}
              className="md:ml-8 md:my-0 my-7 font-semibold uppercase"
            >
              <Link
                to={link.link}
                className="text-gray-700 hover:text-[#017dfc] duration-500"
              >
                {link.name}
              </Link>
            </li>
            // </Link>
          ))}

          {role ? (
            <button
              onClick={() => handleLogout("accessToken")}
              className="btn border-2 border-[#21286a] text-[#21286a] hover:bg-[#21286a] hover:text-white md:ml-8  px-6 py-3 rounded-full duration-500 md:static text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              style={{
                cursor: "pointer",
              }}
            >
              <button className="btn border-2 border-[#21286a] text-[#21286a] hover:bg-[#21286a] hover:text-white md:ml-8  px-6 py-3 rounded-full duration-500 md:static text-sm">
                Login / Register
              </button>
            </Link>
          )}
          <button className="btn bg-[#1967d2] text-white md:ml-8  px-6 py-3 rounded-full duration-500 md:static text-sm ml-3" onClick={() => setModalOpen(true)}>
            Job post
          </button>
        </ul>
        {/* button */}
      </div>
      <GlobalModal
          open={modalOpen}
          setOpen={setModalOpen}
          width={600}
          title={"Let's create your account"}
        >
          <div className="">
            <HomePageModal></HomePageModal>
          </div>
        </GlobalModal>
    </div>
  );
};

export default Navbar;
