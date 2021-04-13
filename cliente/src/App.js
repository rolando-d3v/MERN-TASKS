import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page404 from "./pages/404/Page404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Plataforma from "./pages/plataforma/Plataforma";
import Registro from "./pages/registro/Registro";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/plataforma" component={Plataforma} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
