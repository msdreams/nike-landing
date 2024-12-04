import { BsBagCheck } from "react-icons/bs"; 
import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
/* eslint-disable react/prop-types */


const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onclickBag }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
    <a href="#">
    <NikeLogo className="h-20 w-20 dark:fill-white" />
    </a>
      <button
        className="
        dark:text-gray-400 dark:hover:bg-gray-700
        lg:hidden
        hover:bg-gray-100
        p-2
        focus:ring-2 focus:ring-gray-200
        rounded-xl"
        onClick={() => setIsMobileMenu(!isMobileMenu)}
      >
        <RxHamburgerMenu size={24}/>
      </button>

      <div className={`${
        !isMobileMenu && "hidden"
        } w-full lg:w-auto lg:block`
      }
      >
        <ul className="
        flex flex-col lg:flex-row
        lg:space-x-8
        p-4
        bg-gray-50 lg:bg-transparent
        text-lg  lg:dark:text-white
        border border-gray-100 lg:border-none"
        >
          {ROUTES.map((route, i) => {
            return <li
              className={`
                cursor-pointer rounded py-2 px-3 
                lg:hover:bg-transparent
                 lg:hover:text-blue-500 ${
              i === 0
                ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
                } ${(i == 3 || i == 4) && "lg:text-white"}
            `}
              key={i}>{route}
            </li>;
          })}
        </ul>
      </div>
      <div
        onClick={onclickBag} 
        className="transition active:scale-75 fixed left-4 bottom-4 lg:static lg:mr-8">
        <div
          className="
          cursor-pointer flex-center
          h-12 w-12 rounded-full
          bg-fuchsia-300 shadow-md transition hover:bg-fuchsia-200
          ">
        <BsBagCheck size={24} />
        </div>
      </div>

    </nav>
  );

}