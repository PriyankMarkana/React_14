import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import item_img from '../Images/item_img.png'
import Header from '../Home/Header';


function Category() {

    let data = useSelector((state) => state.cart.data);
    let temp;
    console.log(data);
    let cate = useParams()
    temp = data.filter((ele) => {
        return ele.category == cate.cate;
    })

  return (
    
    <>
        <Header></Header>
        <div className='items'>
        {
          temp.map((ele, ind) => {
            return (
                <Link to={`/product/${ele.id}`} style={{textDecoration:"none"}}>
                    <Card style={{ width: '25rem',height: '27rem' }} className='item_box p-1 my-3'>
                    <div className='img'>
                        <Card.Img variant="top"  className="w-100 h-100 mx-auto" src={ele.thumbnail}  style={{objectFit:"contain"}}/>
                    </div>
                    <Card.Body>
                        <Card.Title style={{fontSize:"19px"}}>{ele.title}</Card.Title>
                        <Card.Title style={{fontSize:"16px",fontWeight:"400"}}>({ele.brand})</Card.Title>
                        <Card.Text className='m-0 d-flex align-items-center'>
                            <span className='me-1' style={{fontSize:"18px",fontWeight:"500"}}>${ele.price}</span>
                            <span style={{fontSize:"16px",fontWeight:"500",color:"#388E3C"}} className='me-2'>{ele.discountPercentage}%</span>
                            <div className='item_img'>
                                <Card.Img variant="top"  className="w-100 h-100" src={item_img}/>
                             </div>
                        </Card.Text>
                        <Button variant="primary" className='mt-3'>Add To Cart</Button>
                    </Card.Body>
                </Card>
                </Link>
            )
        })
      }
        </div>
    </>
  )
}

export default Category;
