import styles from './head.module.scss';

export default function HeadLogin() {
  return (
    <div className={styles.header} >
      <div className={styles.first} >
        <div>
          <img src="/logo.png" className={styles.__logo} alt="e" />
        </div>
      </div>
      <p className={styles.sub_title} >Registro</p>
    </div>
  );
}
