import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <div>
            <footer style={{backgroundColor:"rgb(247,247,247)"}}>
                <div className='px-3 px-md-5'>
                    <div className='px-3 px-md-5'>
                        <div className='py-5'>
                            <div className="d-inline-block py-4">
                                <Link className="navbar-brand" to="/" aria-label="Space">
                                    <Link className="navbar-brand" to="/">
                                            <img src="./assert/image/logo-dark.png" alt="logo" className="w-50" />
                                        
                                    </Link>
                                </Link>
                            </div>
                            <div className="row justify-content-between">
                                <p className={`col-lg-5 col-md-5 col-12 fs-5`}>If you want to create a corporate template you can purshace now our doob template. </p>
                                <div className="col-lg-3 col-md-4 col-12"><button className="btn-clr">Purchase Doob <span className="material-symbols-outlined">arrow_forward</span></button></div>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>  <h5 className='mb-3'>Services</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">About</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Portfolio</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Contact</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Services</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>
                                    <h5>Solutions
                                    </h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Pricing</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Team</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Advance Tab</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Service</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>
                                    <h5 className="mb-3">Company</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Gallery</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">About Us
                                    </Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Testimonial</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Timeline</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 >
                                    <h5>Resources</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Gallery</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">About Us
                                    </Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`} to="/">Testimonial</Link></li>
                                    <li><Link className={`link-sm text-dark text-decoration-none`}to="/">Timeline</Link></li>
                                </ul>
                                {/* <!-- End List --> */}
                            </div>
                        </div>
                        {/* <!-- End Col --> */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-3">
                                <h5 >
                                    <h5 className="mb-3">Stay With Us.</h5>
                                </h5>
                                <p>2000+ Our clients are subscribe Around the World</p>
                            
                            <form action="">
                                <input type="email" name="email" className={`form-control text-light shadow-none  outline-0`} id="email" value="Enter Your Email Here" required />
                                <input type="submit" className="btn-clr mt-3" value="submit" />
                            </form>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}


                    </div>
                    {/* <!-- End Row --> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer