import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header_section">
            <div className="header_top">
                <div className="container-fluid">
                    <div className="top_nav_container">
                        <div className="contact_nav">
                            <a href>
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>
                                    Call : +01 123455678990
                                </span>
                            </a>
                            <a href>
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span>
                                    Email : demo@gmail.com
                                </span>
                            </a>
                        </div>
                        <from className="search_form">
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <button className type="submit">
                                <i className="fa fa-search" aria-hidden="true" />
                            </button>
                        </from>
                        <div className="user_option_box">
                            <a href className="account-link">
                                <i className="fa fa-user" aria-hidden="true" />
                                <span>
                                    My Account
                                </span>
                            </a>
                            <a href className="cart-link">
                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                <span>
                                    Cart
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <span>
                                Minics
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <NavLink exact to={"/"} className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></NavLink>
                                    {/* <NavLink exact to={"/Home"} ClassName="nav-link scrollto active">Home</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="about.html"> About</a> */}
                                    <NavLink exat to={"/About"} className="nav-link" href="about.html"> About</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="product.html">Products</a> */}
                                    <NavLink exact to={"/Product"} className="nav-link" href="product.html">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="why.html">Why Us</a> */}
                                    <NavLink exact to={"/Why"} className="nav-link" href="why.html">Why Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="testimonial.html">Testimonial</a> */}
                                    <NavLink exact to={"/Testimonial"} className="nav-link" href="testimonial.html">Testimonial</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    );
}

export default Header;