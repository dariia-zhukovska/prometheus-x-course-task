import styles from "./Cart.module.css";
import emptyCart from "../../assets/img/empty_cart.svg";
import imageNotFound from "../../assets/img/imageNotFound.png";
import Counter from "../Counter/Counter";
import NavMenu from "../NavMenu/NavMenu";
import toast, { Toaster } from "react-hot-toast";
import useCart from "../../hooks/useCart";

export default function Cart() {
  const { cartItems, setCartItems } = useCart();

  const handleDeleteItem = (itemId: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const handleCountChange = (itemId: number, count: number) => {
    const items = cartItems.map((item) =>
      item.id === itemId ? { ...item, count } : item
    );
    setCartItems(items);
  };

  const cartTotalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const handlePurchase = () => {
    setCartItems([]);
    toast.success("Thank you for purchasing!");
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
                    <div className={styles.cartItemDescription}>
                      <div className={styles.cartItemData}>
                        <div className={styles.bookItemTitle}>{item.title}</div>
                        <div className={styles.bookItemAuthor}>
                          {item.author}
                        </div>
                        <div className={styles.bookItemPrice}>
                          {item.price.toFixed(2)} $
                        </div>
                      </div>
                      <div className={styles.priceContainer}>
                        <div className={styles.counter}>
                          <Counter
                            count={item.count}
                            setCount={(count) =>
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
                  </div>
                </div>
              ))}
              <div className={styles.cartTotal}>
                <div className={styles.cartTotalPriceLine}>
                  <div className={styles.cartTotalTitle}>Cart Total:</div>
                  <div className={styles.cartTotalPrice}>
                    {cartTotalPrice.toFixed(2)} $
                  </div>
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
