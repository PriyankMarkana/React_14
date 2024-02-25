import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header';
import { Row, Col } from 'react-bootstrap';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { add } from '../App/Slice';

function Product() {
    let data = useSelector((state) => state.cart.data);
    let [img,setimg]=useState('');
    let cart=useDispatch();
    let temp;
    let id = useParams()

    temp = data.filter((ele) => {
        return ele.id == id.id;
    })
    const change =(ele)=>{
        setimg(ele)
    }


    return (
        <>  
            <Header></Header>
            {
                <div className='product mt-3'>
                    <Row>
                        <Col lg={1}> 
                            {
                                temp.map((ele,ind) => {
                                    return (
                                        <div className='imgs'>
                                            <ul className='m-0 p-0'>
                                                {
                                                    ele.images.map((ele,ind) => {
                                                        return (
                                                            <li className='ImgBtn'>
                                                                <img src={ele} className='w-100 h-100' onClick={()=>change(ele)} />
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col className='align-items-center'>
                            {
                                temp.map((ele) => {
                                    return (
                                        <div className='product_img'>
                                            <img src={img?img:ele.thumbnail} className='w-100 h-100'></img>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col>
                            {
                                temp.map((ele) => {
                                    return (
                                        <div className='cnt mt-4'>
                                            <h3 className='mb-0'>{ele.description}</h3>
                                            <font>Visit the store</font>
                                            <div className='d-flex icons'>
                                                <font className="ps-1">{ele.rating}</font>
                                                <i><TiStarFullOutline /></i>
                                                <i><TiStarFullOutline /></i>
                                                <i><TiStarFullOutline /></i>
                                                <i><TiStarFullOutline /></i>
                                                <i><TiStarHalfOutline /></i>
                                            </div>
                                            <hr className='ms-0 mb-1'></hr>
                                            <div className='d-flex align-items-center'>
                                                <span className='price'><sup className='sup'>$</sup>{ele.price}</span>
                                                <p className='ps-3 m-0 dis'>Discount: {ele.discountPercentage}%</p>
                                            </div>
                                            <p>Inclusive of all taxes</p>
                                            <hr className='ms-0 mb-1'></hr>
                                            <div className='l_cnt'>
                                                <span className='span pe-2'>Product:</span><span>{ele.title}</span>
                                            </div>
                                            <div className='l_cnt'>
                                                <span className='span pe-2'>Category:</span><span>{ele.category}</span>
                                            </div>
                                            <div className='l_cnt'>
                                                <span className='span pe-2'>Brand:</span><span>{ele.brand}</span>
                                            </div>
                                            <div className='l_cnt'>
                                                <span className='span pe-2'>Stock:</span><span>{ele.stock}</span>
                                            </div>
                                            <div className='cart'>
                                                <button  onClick={() =>cart(add(ele))} className='add'>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}

export default Product;




