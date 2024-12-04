/* eslint-disable react/prop-types */
import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../Constant";

export function CartItem({ item: { product, qty, size }, removeItem }) {

  return (
    <div className="
      dark:bg-transparent dark:hover:bg-night-50 dark:text-white
      cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 p-2 space-y-2"
    >
        <div className="flex space-x-2">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
        <div className="font-bold" >{product.title}</div>
        <div className="text-sm text-gray-400" >{ product.description}</div>
        </div>
        <div className="font-bold" >{ product.price}$</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div >
            <div className="font-bold" >SIZES</div>
            <Select value={size} title="" options={SIZES} className={ "w-16 p-1 pl-2" } />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select value={qty} title="" options={QTY } className={ "w-16 p-1 pl-2" }/>
          </div>
        </div>

        <button
          onClick={() => removeItem(product.id)}
        >
          <CiTrash className="text-black dark:text-white" size={25}></CiTrash>
        </button>

      </div>

    </div>
  )
}