import React, { useRef, useState, useEffect } from "react";
import { IBookListData } from "../../types";
import styles from "./SpecificBook.module.css";
import imageNotFound from "../../assets/img/imageNotFound.png";
import { Link, useParams } from "react-router-dom";
import booksData from "../../data/books.json";
import Counter from "../Counter/Counter";
import PageNotFound from "../PageNotFound/PageNotFound";
import vectorUp from "../../assets/svg/icon_vector_up.svg";
import vectorDown from "../../assets/svg/icon_vector_down.svg";
import NavMenu from "../NavMenu/NavMenu";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  handleCartCount: () => void;
}

export default function SpecificBook({ handleCartCount }: IProps) {
  const dataBooks = booksData.books;
  const [isExpanded, setIsExpanded] = useState(true);
  const [countValue, setCountValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);

  const { id } = useParams();

  const selectedBook = dataBooks.find((book) => book.id === parseInt(`${id}`));

  useEffect(() => {
    const newTotalPrice = countValue * (selectedBook?.price || 0);
    setTotalPrice(newTotalPrice);
  }, [countValue, selectedBook?.price]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCountChange = (count: number) => {
    setCountValue(count);
  };

  if (!selectedBook) {
    return <PageNotFound />;
  }

  const handleAddToCart = () => {
    const username = localStorage.getItem("username");
    const cartItems = JSON.parse(
      localStorage.getItem(`cartItems${username}`) ?? "[]"
    );
    const selectedCartItemIndex = cartItems.findIndex(
      (item: IBookListData) => item.id === selectedBook.id
    );
    if (selectedCartItemIndex !== -1) {
      const selectedCartItem = cartItems[selectedCartItemIndex];
      selectedCartItem.count += countValue;
      selectedCartItem.totalPrice += totalPrice;
      toast.error("Item has been already added to the cart");
    } else {
      cartItems.push({
        id: selectedBook.id,
        image: selectedBook.image,
        title: selectedBook.title,
        author: selectedBook.author,
        price: selectedBook.price,
        count: countValue,
        totalPrice: totalPrice,
      });
      toast.success("Item added to the cart");
      handleCartCount();
    }

    localStorage.setItem(`cartItems${username}`, JSON.stringify(cartItems));
  };

  return (
    <>
      <Toaster />
      <NavMenu />
      <div className={styles.bookItem}>
        <div className={styles.bookItemLeft}>
          <img
            src={selectedBook.image || imageNotFound}
            alt="book_image"
            className={styles.bookItemImage}
          />
        </div>
        <div className={styles.bookItemRight}>
          <div className={styles.bookItemInfo}>
            <div className={styles.bookItemAuthor}>{selectedBook.author}</div>
            <div className={styles.bookItemTitle}>{selectedBook.title}</div>
            <div className={styles.bookItemShortDescription}>
              {isExpanded
                ? selectedBook.shortDescription
                : selectedBook.description}
            </div>
            <div className={styles.bookItemMoreCard}>
              <div
                className={styles.bookItemMore}
                onClick={handleToggle}
                style={{ backgroundColor: isExpanded ? vectorUp : vectorDown }}
              >
                {isExpanded ? "More about book" : "Less about book"}
              </div>
            </div>
          </div>
          <div className={styles.bookItemPriceLine}>
            <div className={styles.bookItemPrice}>
              {`${selectedBook.price.toFixed(2)} $`}
            </div>
            <div className={styles.bookItemCount}>
              {<Counter initialValue={1} onCountChange={handleCountChange} />}
            </div>
            <div className={styles.bookItemTotalPrice}>
              {` Total Price: ${totalPrice.toFixed(2)}  $`}
            </div>
            <button
              className={styles.ButtonAddToCart}
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
