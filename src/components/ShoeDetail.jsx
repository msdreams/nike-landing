import { useState } from "react";
import { QTY, SHOE_LIST, SIZES } from "../Constant";
import { Select } from "./Select";
import { ItemsCarousel } from "./ItemsCarousel";
/* eslint-disable react/prop-types */



export function ShoeDetail({ shoe, onClickAdd, onClickCart}) {
  const [form, setForm] = useState({qty: null, size: null})

  return (
    <div className="space-y-4 flex flex-col lg:flex-row-reverse">
        {/* Shoe image */}
      <div className=" flex-1 lg:-mt-32 lg:ml-28">
        <div className="
          flex-center h-[70%] flex-col bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <div className="max-w-[700px]">
            <img className="animate-combinedWF" src={shoe.src} />
          </div>
        </div>
        <div className="w-full h-[140px] mx-auto">
          <ItemsCarousel items={SHOE_LIST} onClickCart={ onClickCart } />
        </div>
      </div>

        {/* Shoe text */}
      <div className="lg:min-h-[640px] flex-1 space-y-6 dark:text-gray-200">
        <div className="text-5xl font-black md:text-9xl">
          {shoe.title}
        </div>
        <div className="font-medium md:text-xl">
          {shoe.description}
        </div>
        <div className="flex flex-row space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
          {shoe.price} $
          </div>
        <Select
          value={form.qty}
          onChange={(qty) => setForm({...form, qty})}
          title={"QTY"}
          options={QTY} 
        />
        <Select
          value={form.size}
          onChange={(size) => setForm({...form, size})}
          title={"SIZE"}
          options={SIZES} 
        />

        </div>
         {/* Shoe buttons */}
        <div className="space-x-10 ">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size )}
            className="
            dark:bg-white dark:text-night dark:font-bold
            transition active:scale-75
            h-14 w-44
            bg-black
            text-white
            hover:bg-gray-900
            active:bg-gray-700 "
          >
          Add to bag
        </button>
        <a className="text-lg font-bold underline  underline-offset-4" href="#">
          View details
        </a>
        </div>
       
      </div>
    </div>
  )
}