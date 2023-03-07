import { useState } from "react";
import styles from "./SignIn.module.css";
import avatar from "../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function SignIn() {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const { setUsername } = useCart();

  const handleUsernameChange = ({ target: { value } }: any) => {
    const newUsername = value;
    setUsernameValue(newUsername);
  };

  const handleSignInClick = () => {
    setUsername(usernameValue);
    navigate("/book-list");
  };

  return (
    <div className={styles.content}>
      <img className={styles.avatarNew} src={avatar} alt="avatar" />
      <p className={styles.bioSubtitle}>Username</p>
      <input
        type="name"
        className={styles.usernameInput}
        placeholder="Type username"
        value={usernameValue}
        onChange={handleUsernameChange}
      />
      <button
        className={styles.buttonSignIn}
        onClick={handleSignInClick}
        disabled={!/^[A-Za-z][A-Za-z0-9_]{3,15}$/.test(usernameValue)}
      >
        Sign in
      </button>
    </div>
  );
}
