import AsideDerecho from "../aside-derecho/AsideDerecho";
import FooterLogin from "../footer-login/FooterLogin";
import FormLogin from "../form-login/FormLogin";
import HeadLogin from "../head-login/HeadLogin";
import './layout.login.scss'

export default function LayoutLogin() {
  return (
    <div className="wrapper-screen">
      <div className="right-side">
        <HeadLogin />
        <FormLogin />
        <FooterLogin />
      </div>
      <AsideDerecho />
    </div>
  );
}
