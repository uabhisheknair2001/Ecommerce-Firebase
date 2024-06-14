import './App.css';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import { Home } from "./Components/Home"
import { Signup } from './Components/Signup';
import Login from './Components/Login'
import NotFound from './Components/NotFound';
import { AddProducts } from './Components/AddProducts';
import Cart from './Components/Cart';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/Signup' Component={Signup} />
      <Route exact path='/Login' Component={Login} />
      <Route exact path='*' Component={NotFound} />
      <Route exact path='/AddProducts' Component={AddProducts} />
      <Route exact path='/Cart' Component={Cart} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
