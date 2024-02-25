import React, { useState } from 'react'
import { Col,Row } from 'react-bootstrap';
import logo from '../Images/logo.svg'
import cart from '../Images/cart.svg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import { CiShop } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  let[val,setval]=useState();
    return (
        <>
        <div className='con'>
        <Row className='py-3 mb-1 align-items-center header'>
                    <Col lg={2} >
                        <img src={logo}></img>
                    </Col>
                    <Col className='c-2' lg={6}>
                       <div className='d-flex'>
                        <input type='text' placeholder='Search For Products,Brands and More' className='p-2 f' onChange={(e)=>setval(e.target.value)}></input>
                          <Link to={`product/search/${val?val:"all"}`} style={{textDecoration:"none",color:"black"}}>
                            <input type='button' value="Search" className='p-2'></input>
                          </Link>
                       </div>
                    </Col>
                    <Col className='justify-content-between d-flex'>
                      <div className='d-flex align-items-center'>
                        <LiaUserCircle style={{fontSize:"22px"}} className='mx-2' />
                        <p className='m-0'>Login</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <Link to="/cart">
                         <img src={cart} className='mx-2'></img>
                        </Link>
                        <p className='m-0'>Cart</p>
                      </div>
                      <div className='d-flex align-items-center'>
                         <CiShop style={{fontSize:"22px"}} className='mx-2' />
                        <p className='m-0'>Become a Seller</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <BsThreeDotsVertical />  
                      </div>
                    </Col>
                </Row>

        </div>
        </>
    )
}

export default Header;
