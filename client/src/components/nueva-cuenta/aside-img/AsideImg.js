// import "./asideImg.scss";
import styles from './asideImg.module.scss';

export default function AsideDerecho() {
  return (
    <div
      className={styles.aside_img}
      style={{ backgroundImage: "url(/assets/wall.jpg)" }}
    ></div>
  );
}
