/* eslint-disable react/prop-types */

import { Card } from "./Card";

export function ItemsSection({ items, onClickCart }) {
  return (
    <div className="mt-32">
      <div className="flex-center ">
        <div className="
          dark:text-white 
          bg-[url('./assets/lines.png')] dark:bg-none
          bg-center text-4xl font-extrabold"
        >
          NEW ARRIVALS
        </div>
      </div>
      <div className="
      mt-10
      grid grid-col-1 gap-y-16 gap-x-16 md:grid-cols-2 xl:grid-cols-3"
      >
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={onClickCart}
          />
        ))}
      </div>

    </div>
  )
}