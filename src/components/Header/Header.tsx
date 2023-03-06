import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import icon_cart from "../../assets/svg/icon_cart.svg";
import userLogo from "../../assets/svg/icon_account.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

interface IProps {
  cartCount: number;
}

export default function Header({ cartCount }: IProps) {
  // @ts-ignore
  const { username, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOutClick = () => {
    logOut();
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerName}>
        <a href="/book-list">JS BAND STORE</a>
        <span> | </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/dariia-zhukovska/"
        >
          Dariia Zhukovska
        </a>
      </div>
      <div className={styles.userNavigation}>
        {username ? (
          <>
            <div className={styles.headerCart}>
              <Link to="/cart">
                <img
                  className={styles.cartIcon}
                  src={icon_cart}
                  alt="spopping_cart"
                />
                <span className={styles.cartBage}>{cartCount}</span>
              </Link>
            </div>
            <button
              className={styles.buttonSignOut}
              onClick={handleSignOutClick}
            >
              Sign out
            </button>
            <div className={styles.headerUsername}>
              <img src={userLogo} alt="user_icon" />
              <div className={""}>{username}</div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}

// 'uil_times close_icon header__closed_search'
