import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import './App.css'
import Home from "./Componenets/Home.tsx";
import Customer from "./Componenets/Customer.tsx";
import Product from "./Componenets/Product.tsx";
import Order from "./Componenets/Order.tsx";

function App() {

  return (

      <Router>
          <div>

              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                      <a className="navbar-brand">
                          <img src="https://www.liblogo.com/img-logo/br2066b571-brabus-logo-brabus-emblem-chrome-decals-by-ozim06-community-.png" alt="benz"/>
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                              aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to='/customer'>Customer</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to='/orders'>Order Management</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link " to='/products'>Products</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>


              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/customer' element={<Customer/>}/>
                  <Route path='/products' element={<Product/>}/>
                  <Route path='/order' element={<Order/>}/>
              </Routes>
          </div>
      </Router>


  )
}

export default App
