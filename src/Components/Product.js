import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Products from './Products'

const url="https://api.pujakaitem.com/api/products"

function Product() {
    const [data, setData] = useState([])

    const getData = async(url) =>{
        try {
            const result = await axios.get(url);
            setData(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      getData(url)
    }, [])
    

  return (
    <div className='container py-5'>
        <div className="my-5 text-center">
            <h1>Products</h1>
        </div>
        <div className="row">
        {
            data.map((item) => {
                return <Products key={item.id} product={item}></Products>
            })
        }
        </div>
    </div>
  )
}

export default Product