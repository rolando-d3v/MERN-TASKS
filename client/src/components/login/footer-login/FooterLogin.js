import "./footer.login.scss";
import {Link} from 'react-router-dom';

export default function FooterLogin() {
  return (
    <div className="footer">
      <div className="ex9">
        <a href="#!" className="__text">
          ¿no puedes iniciar sesión?
        </a>
        <Link to='/nueva-cuenta' className="__text">
          crear una cuenta
        </Link>
      </div>
      <div className="ex3">
        <a href="#!" className="__text version">
          V28.0.1
        </a>
      </div>
    </div>
  );
}
