import React, { useState } from "react";
import styles from "./SignIn.module.css";
import avatar from "../../assets/img/avatar.png";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleUsernameChange = ({ target: { value } }: any) => {
    const newUsername = value;
    setUsername(newUsername);
  };

  const handleSignInClick = () => {
    localStorage.setItem("username", username);
    navigate("/books");
  };

  return (
    <div className={styles.content}>
      <img className={styles.avatarNew} src={avatar} alt="avatar" />
      <p className={styles.bioSubtitle}>Username</p>
      <input
        type="name"
        className={styles.usernameInput}
        placeholder="Type username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button
        className={styles.buttonSignIn}
        onClick={handleSignInClick}
        disabled={username.length < 4 || username.length > 16}
      >
        Sign in
      </button>
    </div>
  );
}
