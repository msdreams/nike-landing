import { useEffect, useState } from "react";
import { ItemsSection } from "./components/ItemsSection";
import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SideBar } from "./components/SideBar";
import { SHOE_LIST } from "./Constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (!isDarkMode) {
      window.document.documentElement.classList.add("dark")
    }
  }, [])
  
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    )
  }

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(i => i.product.id === product.id);
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);
    }
  }

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== productId)
    );
  };

  return <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
    <Nav onclickBag={() => setIsOpen(true) } />
    <ShoeDetail onClickAdd={addToCart} shoe={currentShoe} />
    <ItemsSection items={SHOE_LIST} onClickCart={ setCurrentShoe } />
    <SideBar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <Cart removeItemFromCart={removeFromCart} cartItems={cartItems}/>
    </SideBar>
    <div className=" fixed bottom-4 right-4 ">
      <button
        onClick={()=> toggleDarkMode()}
        className="
        bg-night-50 dark:bg-white
        shadow-lg
        px-4 py-2 rounded-full
        text-white dark:text-night-500"
      >
        <BiSun className="hidden dark:block" />
        <BiMoon className="dark:hidden"/>

      </button>
    </div>
  </div>;
}
