import './App.css';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom"
import Product from './Product.js/Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { item } from './App/Slice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Category/Category';
import Search from './Search/Search';
import Cart from './Cart/Cart';

function App() {
  let dispatch=useDispatch()
  useEffect(() => {
      axios.get("https://dummyjson.com/products?limit=100")
        .then(function (response) {
          dispatch(item(response.data.products))
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[])
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product/:id" element={ <Product></Product> } />
        <Route path="/product/category/:cate" element={ <Category></Category>} />
        <Route path="/product/search/:ser" element={ <Search></Search>} />
        <Route path="/cart" element={ <Cart></Cart>} />
      </Routes>
    </>
  );
}

export default App;
