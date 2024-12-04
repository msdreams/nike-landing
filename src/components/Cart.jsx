import { CartItem } from "./CartItem";
import CatAstronautGif from '../assets/CatAstronaut.gif';
import CatAstronautGifBlack from '../assets/CatAstronaut_black.gif';
/* eslint-disable react/prop-types */


export function Cart({ cartItems, removeItemFromCart }) {
  const isDarkMode = window.document.documentElement.classList.contains("dark")
  console.log(isDarkMode)

  return (
    <>
      <h2 className="dark:text-white mb-5 text-4xl font-bold">Cart</h2>
      {cartItems.length === 0 &&
        <div className="dark:text-white mb-5 text-xl font-semibold">
          
          Please select an item!

          {/* Вставка GIF */}
          <div className="flex justify-center items-center">
            { isDarkMode ? (
              <img src={CatAstronautGifBlack} alt="empty card" className="mt-5 w-[250px] h-auto" />

            ) : (
              <img src={CatAstronautGif} alt="empty card" className="mt-5 w-[250px] h-auto" />
            )}

          </div>
        </div>
        
      }
        
      <ul className="space-y-5">
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <CartItem removeItem={removeItemFromCart} item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}