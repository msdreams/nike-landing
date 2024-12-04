import { CartItem } from "./CartItem";
/* eslint-disable react/prop-types */


export function Cart({ cartItems, removeItemFromCart }) {
  return (
    <>
      <h2 className="dark:text-white mb-5 text-4xl font-bold">Cart</h2>
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