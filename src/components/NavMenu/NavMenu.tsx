import { useNavigate } from "react-router-dom";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <nav className={styles.menuNavigation}>
      <button className={styles.backBtn} onClick={goBack}></button>
    </nav>
  );
}
