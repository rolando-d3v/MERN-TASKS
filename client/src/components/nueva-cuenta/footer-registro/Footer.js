import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

export default function FooterLogin() {
  return (
    <div className={styles.footer}>
      <div className={styles.ex9}>
        <Link to="/" className={styles.__text}>
          Volver a iniciar sesion
        </Link>
      </div>
      <div className={styles.ex3}>
        <a href="#!" className={`${styles.__text} ${styles.version}`}>
          V28.0.1
        </a>
      </div>
    </div>
  );
}
