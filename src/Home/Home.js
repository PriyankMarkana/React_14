import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './Items';
import Header from './Header';
import Categories from '../Category/Categories';

function Home() {
  return (
    <>
    <Header></Header>
    <Categories></Categories>
    <Items></Items>
    </>
  )
}

export default Home
