import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signin from "./pages/Signup"
import Order from "./pages/Order"
import Cart from "./pages/Cart"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sigin' element={<Signin />} />
      <Route path='/order' element={<Order />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
