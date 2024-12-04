import { AiOutlineClose } from "react-icons/ai"; 
/* eslint-disable react/prop-types */

export function SideBar({ children, isOpen, setIsOpen }) {
  return (
    <div>
      <div className={`
        dark:bg-night
        overflow-y-auto
        p-4 z-50 right-0 top-0 fixed 
        h-full bg-white shadow-lg
        w-full md:w-[50%] lg:w-[35%]
        transition transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
      <button
        onClick={() => setIsOpen(false)}
        className="
        dark:text-gray-400 dark:hover:bg-night-50
        hover:bg-gray-100
        text-black absolute right-4 top-4 p-2
        focus:ring-2 focus:ring-gray-200
        rounded-xl
        ">
        <AiOutlineClose className="text-black dark:text-white" size={24} />
      </button>
      {children}
    </div>
      {isOpen && <div
        onClick={() => setIsOpen(false)}
        className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      }
    </div>

  )
}