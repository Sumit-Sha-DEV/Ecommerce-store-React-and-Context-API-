import './App.css';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Cart from './Pages/Cart/Cart';
import Navbar from './Components/Navbar.jsx';
import Shop from './Pages/Shop/Shop';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </Router>
     </ShopContextProvider> 
     
    </div>
  );
}

export default App;
