import styles from './footer.module.scss';
import {Link} from 'react-router-dom';

export default function FooterLogin() {
  return (
    <div className={styles.footer} >
      <div className={styles.ex9} >
        <a href="#!" className={styles.__text} >
          ¿no puedes iniciar sesión?
        </a>
        <Link to='/nueva-cuenta' className={styles.__text}  >
          crear una cuenta
        </Link>
      </div>
      <div className={styles.ex3}>
        <a href="#!" className={`${styles.__text} ${styles.version}`}   >
          V28.0.1
        </a>
      </div>
    </div>
  );
}
