import AsideImg from "../aside-img/AsideImg";
import FooterLogin from "../footer-registro/Footer";
import FormLogin from "../form-registro/Form";
import HeadLogin from "../head-registro/Head";
import styles from './layout.module.scss';

export default function LayoutNuevaCuenta() {
  return (
    <div className={`${styles.layout_registro}`}   >
      <div className={styles.right_side} >
        <HeadLogin />
        <FormLogin />
        <FooterLogin />
      </div>
      <AsideImg />
    </div>
  );
}
