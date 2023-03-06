import React from "react";
import { IBookListData } from "../../types";
import styles from "./Book.module.css";
import imageNotFound from "../../assets/img/imageNotFound.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IProps {
  bookItemData: IBookListData;
}

export default function Book({ bookItemData }: IProps) {
  const navigate = useNavigate();

  return (
    <li className={styles.bookItem}>
      <div>
        <img
          src={bookItemData.image || imageNotFound}
          alt="book_image"
          className={styles.bookItemImage}
        />
      </div>
      <div className={styles.bookDescription}>
        <div className={styles.bookItemTitle}>{bookItemData.title}</div>
        <div className={styles.bookItemAuthor}>{bookItemData.author}</div>
        <div className={styles.bookItemPriceLine}>
          <div className={styles.bookItemPrice}>
            {`${bookItemData.price} $`}
          </div>
          <button
            className={styles.bookItemButton}
            onClick={() => navigate(`/book-list/${bookItemData.id}`)}
          >
            View
          </button>
        </div>
        <div className={styles.bookItemShortDescription}>
          {bookItemData.shortDescription}
        </div>
        <div className={styles.bookItemDescription}>
          {bookItemData.description}
        </div>{" "}
      </div>
    </li>
  );
}
