import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Proyectos from "./pages/proyectos";
import NuevaCuenta from "./pages/nueva-cuenta";
import ProyectoState from "./context/proyecto/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <BrowserRouter>
      <ProyectoState>
        <TareaState>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/proyectos" component={Proyectos} />
            <Route exact={true} path="/nueva-cuenta" component={NuevaCuenta} />
          </Switch>
        </TareaState>
      </ProyectoState>
    </BrowserRouter>
  );
}

export default App;
