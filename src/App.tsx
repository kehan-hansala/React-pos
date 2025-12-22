import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import './App.css'
import Home from "./Componenets/Home.tsx";
import Customer from "./Componenets/Cunstomer.tsx";
import Product from "./Componenets/Product.tsx";

function App() {

  return (

      <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to= '/customer'>customer</Link>
                    </li>
                    <li>
                        <Link to= '/product'>product</Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/customer' element={<Customer/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </div>
      </Router>


  )
}

export default App
