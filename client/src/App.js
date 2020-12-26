import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./App.css";
import Login from "./pages/login";
import Proyectos from "./pages/proyectos";
import NuevaCuenta from "./pages/nueva-cuenta";

function App() {
  return (
    <BrowserRouter className="">
      <Switch>
        <Route exact={true} path='/' component={Login}  />
        <Route exact={true} path='/proyectos' component={Proyectos}  />
        <Route exact={true} path='/nueva-cuenta' component={NuevaCuenta}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
