import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

 export default function App() {
  return (
    <div className="app">
   <BrowserRouter>
   <Switch>
     <Route exact path='/login' component={Login} />
     <Route exact path='/' component={Home} />
   </Switch>
   </BrowserRouter>
    </div>
  );
}

