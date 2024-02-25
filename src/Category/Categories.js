import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { category} from '../App/Slice'
import { Link } from 'react-router-dom'

function Categories() {
  let dispatch=useDispatch()
  let cate=useSelector((state) => state.cart.Category)
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then(function (response) {
        dispatch(category(response.data))
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[])
  return (
   <div className='con'>
       <div className='category'>
      <ul className='m-0 mt-3'>
      {
        cate.map((ele,ind)=>{
          return(
               <Link to={`product/category/${ele}`} style={{textDecoration:"none",color:"black"}}>
                 <li key={ind}>{ele}</li>
               </Link>
          )
        })
      }
      </ul>
    </div>
   </div>
  )
}

export default Categories;
