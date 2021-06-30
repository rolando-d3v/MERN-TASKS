import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page404 from "./pages/404/Page404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Proyectos from "./pages/Proyectos";
import Registro from "./pages/NuevaCuenta";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={Registro} />
          <Route exact path="/proyectos" component={Proyectos} />
          
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
