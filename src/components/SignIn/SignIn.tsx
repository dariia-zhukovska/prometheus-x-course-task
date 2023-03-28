import { ChangeEvent, useEffect, useState } from "react";
import styles from "./SignIn.module.css";
import avatar from "../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function SignIn() {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = useState("");
  const { setUsername } = useCart();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      navigate("/books");
    }
  }, [navigate]);

  const handleUsernameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newUsername = value;
    setUsernameValue(newUsername);
  };

  const handleSignInClick = () => {
    setUsername(usernameValue);
    navigate("/books");
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSignInClick();
    }
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
        onKeyDown={handleKeyDown}
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
