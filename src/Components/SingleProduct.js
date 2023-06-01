import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SingleProductImage from './SingleProductImage';


function SingleProduct() {
  const [product, setProduct] = useState([])

  const params = useParams()
  const back = useNavigate(); 

  const getProduct = async () => {
    try {
      const data = await axios.get(`https://api.pujakaitem.com/api/products/${params.id}`)
      setProduct(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct()
  }, [params.id])
  

  return (
    <div className="container">
      <div className="my-5">
        <button onClick={() => back('/Product')} className='btn btn-outline-primary'>back</button>
      </div>
      <div>

        <div className="row justify-content-between">
          <div className="col-lg-6">
            <SingleProductImage image={product.image}/>
          </div>
          <div className="col-lg-5">
            <h4 className="card-title fw-bolder">{product.name}</h4>
            <p className="card-text"><span className='fw-bolder'>price : </span>{product.price} ₹</p>
            <p className="card-text"><span className='fw-bolder'>Reviews: </span>{product.reviews}</p>
            <p className="card-text"><span className='fw-bolder'>Stars:</span> {product.stars}</p>
            <p className="card-text fw-bolder">Colors: </p>
            {product.colors && product.colors.map((clr)=>{
              return (<span className="card-text d-inline-block mx-1 rounded-circle" style={{backgroundColor:`${clr}`,width:"30px",height:"30px"}}></span>)
            })}
            <p className='py-2'><span className='fw-bolder'>Description : </span><br />{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct