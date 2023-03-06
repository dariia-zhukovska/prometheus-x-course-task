import { createContext, useEffect, useState } from "react";
import { ICartBookData, ICartContext } from "../types";

const defaultState: ICartContext = {
  cartItems: [],
  setCartItems: () => null,
  username: null,
  setUsername: () => null,
};

export const CartContext = createContext(defaultState);

export const CartProvider = ({ children }: any) => {
  const [username, setUsernameState] = useState<string | null>(null);
  const [cartItems, setCartItemsState] = useState<ICartBookData[]>(
    defaultState.cartItems
  );

  const setItemsToStorage = (items: ICartBookData[]) => {
    if (items.length === 0) {
      localStorage.removeItem(`cartItems${username}`);
    } else {
      localStorage.setItem(`cartItems${username}`, JSON.stringify(items));
    }
  };

  const setUsernameToStorage = (name: string | null) => {
    if (!name) {
      localStorage.removeItem("username");
    } else {
      localStorage.setItem("username", name || "");
    }
  };

  const setCartItems = (items: ICartBookData[]) => {
    setItemsToStorage(items);
    setCartItemsState(items);
  };

  const setUsername = (name: string | null) => {
    setUsernameToStorage(name);
    setUsernameState(name);
  };

  useEffect(() => {
    const cartData = localStorage.getItem(`cartItems${username}`);
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    } else {
      setCartItems([]);
    }
  }, [username]);

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setUsername(name);
    }
  }, []);

  const value: ICartContext = {
    cartItems,
    setCartItems,
    username,
    setUsername,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
