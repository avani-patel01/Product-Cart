import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CardContext } from '../Context/CardContext'

function Navbar() {
    const {cart} = useContext(CardContext)

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgb(247,247,247)"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" to="/">
                    <img src="./assert/image/logo-dark.png" alt="logo" className="w-50 m-auto" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto me-5">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Product">Products</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='me-5'>
                        <Link className="nav-link" to="/Cart">
                            <button type="button" className="btn p-2 pb-0  btn-primary position-relative">
                            <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle" style={{fontSize:"11px"}}>{cart.totalItems? cart.totalItems:"0"}
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar