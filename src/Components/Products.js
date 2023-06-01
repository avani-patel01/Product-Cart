import { Link } from 'react-router-dom'
import React, { useContext,useState } from 'react'
import { CardContext } from '../Context/CardContext'

function Products(props) {
    const [isAdding, setIsAdding] = useState(false)

    const { product } = props
    const { cart,setCart }  = useContext(CardContext)

    const addtocart = (event,products) =>{
        event.preventDefault();
        
        let _cart = {...cart};
        console.log(_cart);

        if(!(_cart.items)){
            _cart.items = {}
        }

        // if already exist id 
        if(_cart.items[products.id]){
            _cart.items[products.id] += 1 
        }
        else{
            _cart.items[products.id] = 1
        }

        if(!(_cart.totalItems)){
            _cart.totalItems = 0
        }
        _cart.totalItems += 1


        setCart(_cart)

        // add btn change

        setIsAdding(true)

        setTimeout(() => {
            setIsAdding(false)
        }, 1000);
    }


    return (

        <div className="col-lg-3 col-sm-6 col-12 my-3">
            <Link to={`/SingleProduct/${product.id}`} className='text-decoration-none text-dark'>
                <div className="card h-100">
                    <div>
                        <img src={product.image} alt={product.name} width="100%" height="180px"/>
                    </div>
                    <div className="card-body text-center p-3">
                        <h4 className="card-title text-capitalize">{product.name}</h4>
                        {/* <p className="card-text mb-0">{product.company}</p> */}
                        <p className="card-text">{product.price} ₹</p>
                        <button onClick={(e)=>{addtocart(e,product)}} disabled={isAdding} className={`btn ${isAdding?"btn-outline-primary":" btn-outline-success"}`}>{isAdding?"Added to Cart":"Add to Cart"}</button>
                    </div>
                    
                </div>
            </Link>
        </div>

    )
}

export default Products