import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LogoutUser } from '../../Redux/Action/auth.Action';
import Alert from '../Alert/Alert';


function Header(props) {

    const auth = useSelector(state => state.auth)
    // console.log(auth);

    const cart = useSelector(state => state.cart)
    const cartitem = cart.cart.length
    console.log(cart);
    // console.log(categorys);

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(LogoutUser())
        // console.log("Logout");
    }

    return (
        <header className="header_section">
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <NavLink exact to={"/"} className="navbar-brand" href="index.html">
                            <span>
                                <img src="images/cartpng.png" alt className="img-fluid" width="100px"/>
                            </span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <NavLink exact to={"/Home"} className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></NavLink>
                                    {/* <NavLink exact to={"/Home"} ClassName="nav-link scrollto active">Home</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="about.html"> About</a> */}
                                    <NavLink exat to={"/About"} className="nav-link" href="about.html"> About</NavLink>
                                </li>
                                <li className="dropdown">
                                    {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                    <NavLink exact to={"/Category"} className="nav-link text-white" href="Category.html">Category</NavLink>
                                    <ul className='dropdown-content'>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Categoriesadmin"} className="nav-link" href="Categoriesadmin.html">Categoriesadmin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Productadmin"} className="nav-link" href="Productadmin.html">Productadmin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Productdetails"} className="nav-link" href="Productdetails.html">Productdetails</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Cart"} className="nav-link" href="Cart.html">Cart</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Placeorder"} className="nav-link" href="Cart.html">Placeorder</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Orderadmin"} className="nav-link" href="Orderadmin.html">Orderadmin</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="product.html">Products</a> */}
                                    <NavLink exact to={"/Product"} className="nav-link" href="product.html">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="why.html">Why Us</a> */}
                                    {/* <NavLink exact to={"/Why"} className="nav-link" href="why.html">Why Us</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                    {/* <NavLink exact to={"/Testimonial"} className="nav-link" href="testimonial.html">Testimonial</NavLink> */}
                                </li>

                                {
                                    auth.user === null ?
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink exact to={"/Logins"} className="nav-link" href="Loginss.html">Logins</NavLink>
                                        </li> :
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                            <NavLink onClick={() => handleLogout()} exact to={"/Logins"} className="nav-link" href="Loginss.html">Logout</NavLink>
                                        </li>
                                }
                            </ul>
                            <button type="button" class="btn btn-primary position-relative">
                                <a href="/Cart" className='text-white'><i className="fa fa-shopping-cart" aria-hidden="true" /></a>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartitem}
                                </span>
                            </button>
                        </div>
                        <Alert />
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;

