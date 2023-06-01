import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../Context/CardContext';
import axios from 'axios';

function Cart() {
  const back = useNavigate();
  let total = 0;

  const [products, setProducts] = useState([])
  const { cart, setCart } = useContext(CardContext)
  console.log(cart);

  useEffect(() => {
    if (!(cart.items)) {
      return;
    }

    const itemIds = Object.keys(cart.items); // Get all item IDs from the cart

    // Fetch data for each item in parallel
    Promise.all(
      itemIds.map(itemId =>
        axios.get(`https://api.pujakaitem.com/api/products/${itemId}`)
      )
    )
      .then(responses => {
        // Extract the product data from the responses
        const productsData = responses.map(response => response.data);

        setProducts(productsData);
      })
      .catch(error => console.log(error));
  }, [cart.items]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  const Decrement = (p) => {
    const oldqty = cart.items[p]
    if (oldqty === 1) {
      return;
    }
    const _cart = { ...cart }
    _cart.items[p] = oldqty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }

  const Increment = (p) => {
    const oldqty = cart.items[p]
    const _cart = { ...cart }
    _cart.items[p] = oldqty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }

  const totalAmount = (productId, productPrice) => {
    const sum = productPrice * getQty(productId)
    total += sum;
    return sum
  }

  const deleteHandler = (productId) => {
    const _cart = { ...cart }
    const qty = _cart.items[productId]
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    setProducts(products.filter((product) => product.id !== productId))
  }

  const HandleOrder = () => {
    window.alert("Order Placed Successfully....")
    setProducts([]);
    setCart({})
  }

  return (

    products.length ?
      <div className='container mx-auto py-5'>
        <div className="container">
          <div className='pb-5'>
            <button className='btn btn-outline-primary' onClick={() => { back("/Product") }}>BACK</button>
          </div>
          <div className="container">
            <h1>Cart Items</h1>
            <ul className='list-unstyled'>

              {products.map((product) => {
                return (
                  <li className='py-4' key={product.id}>
                    <div className='row justify-content-between'>
                      <div className="d-flex align-items-center col-lg-5 col-sm-6 col-12 mt-lg-0 mt-4">


                        {product.image && <img src={product.image[0].url} alt="p.name" width="25%" height="100%" />}


                        <p className='mx-3 my-0 fs-5 text-capitalize'>{product.name}</p>
                      </div>
                      <div className='col-lg-3 col-sm-6 col-12 mt-lg-0 mt-4'>
                        <button className='btn btn-outline-primary py-0' onClick={() => Decrement(product.id)}>-</button>
                        <b className='mx-2'> {getQty(product.id)} </b>
                        <button className='btn btn-outline-primary py-0' onClick={() => Increment(product.id)}>+</button>
                      </div>
                      <div className='col-lg-2 col-sm-6 col-12 mt-lg-0 mt-4'>
                        <p>Price : {totalAmount(product.id, product.price)}</p>
                      </div>
                      <div className='col-lg-2 col-sm-6 col-12 mt-lg-0 mt-4'>
                        <button className="btn btn-danger" onClick={() => { deleteHandler(product.id) }}>
                          DELETE
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}

            </ul>
            <hr />

            <div>
              <div className='text-end'>
                <p>Total Amount : ₹ {total}</p>
                <div>
                  <button className="btn btn-primary" onClick={HandleOrder}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> :
      <div className='py-5'>
        <div className='container' >
          <button className='btn btn-outline-primary' onClick={() => { back("/Product") }}>BACK</button>
        </div>
        <img src="https://media.istockphoto.com/id/995125114/vector/running-man-pushing-shopping-cart-icon-vector-illustration.webp?s=612x612&w=is&k=20&c=OLZKQD2DlXpla2cDZvQjFl2c7Zs3n87Y87X6IgD1OT8=" alt="cartImg" className='m-auto w-25 d-block' />

      </div>
  )
}

export default Cart
