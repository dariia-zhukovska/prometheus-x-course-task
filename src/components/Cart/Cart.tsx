import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import emptyCart from "../../assets/img/empty_cart.svg";
import imageNotFound from "../../assets/img/imageNotFound.png";
import { IBookListData, ICartBookData } from "../../types";
import Counter from "../Counter/Counter";
import NavMenu from "../NavMenu/NavMenu";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  handleClearCart: () => void;
  handleRemoveFromCart: () => void;
}

export default function Cart({
  handleClearCart,
  handleRemoveFromCart,
}: IProps) {
  const [cartItems, setCartItems] = useState<ICartBookData[]>([]);

  const username = localStorage.getItem("username");
  useEffect(() => {
    const cartData = localStorage.getItem(`cartItems${username}`);
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`cartItems${username}`, JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDeleteItem = (itemId: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
    handleRemoveFromCart();
  };

  const handleCountChange = (itemId: number, count: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, count } : item
      )
    );
  };

  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const handlePurchase = () => {
    setCartItems([]);
    localStorage.removeItem(`cartItems${username}`);
    toast.success("Thank you for purchasing!");
    handleClearCart();
  };

  return (
    <>
      <Toaster />
      <NavMenu />
      <div className={styles.shopCart}>
        <div className={styles.cartContainer}>
          {cartItems.length > 0 ? (
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartItemInfo}>
                    <img
                      src={item.image || imageNotFound}
                      alt="book_image"
                      className={styles.cartItemImage}
                    />
                    <div>
                      <div className={styles.bookItemTitle}>{item.title}</div>
                      <div className={styles.bookItemAuthor}>{item.author}</div>
                      <div className={styles.bookItemPrice}>
                        {item.price.toFixed(2)} $
                      </div>
                    </div>
                  </div>

                  <div className={styles.priceContainer}>
                    <div className={styles.counter}>
                      <Counter
                        initialValue={1}
                        onCountChange={(count) =>
                          handleCountChange(item.id, count)
                        }
                      />
                      <button
                        className={styles.cartItemDeleteButton}
                        onClick={() => handleDeleteItem(item.id)}
                      ></button>

                      <div className={styles.bookItemTotalPrice}>
                        {(item.price * item.count).toFixed(2)} $
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.cartTotal}>
                <div className={styles.cartTotalTitle}>Cart Total:</div>
                <div className={styles.cartTotalPrice}>
                  {cartTotalPrice.toFixed(2)} $
                </div>
                <button
                  className={styles.cartPurchaseButton}
                  disabled={cartItems.length === 0}
                  onClick={handlePurchase}
                >
                  Purchase
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.emptyCart}>
              <img
                src={emptyCart}
                alt="empty_cart"
                className={styles.emptyCartImg}
              />
              <div className={styles.emptyCartTitle}>Your cart is empty</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
