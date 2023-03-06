import React, { useContext, useState } from "react";
import styles from "./SignIn.module.css";
import avatar from "../../assets/img/avatar.png";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "../../providers/AuthProvider";

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // @ts-ignore
  const { logIn } = useContext(AuthContext);

  const handleUsernameChange = ({ target: { value } }: any) => {
    const newUsername = value;
    setUsername(newUsername);
  };

  const handleSignInClick = () => {
    // localStorage.setItem("username", username);
    // getUserName(username);
    // signIn(username, () => navigate("/book-list", { replace: true }));
    // navigate("/book-list");
    logIn(username);
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
        disabled={!/^[A-Za-z][A-Za-z0-9_]{3,15}$/.test(username)}
      >
        Sign in
      </button>
    </div>
  );
}
