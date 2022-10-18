import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addproductdata, addtocart, cartgetproduct, } from '../Redux/Action/cart.action';

function Product(props) {

    return (
        <div>
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p1.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>
                                            Add To Cart
                                        </span>
                                    </a>
                                    {/* <a href className="remove_cart_btn">
                                        <span onClick={() => decrement()}>
                                            remove to cart
                                        </span>

                                    </a> */}
                                    {/* <button onClick={() => empty()}>emptyt</button> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p2.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p3.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p4.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p5.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p6.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p7.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p8.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/p9.png" alt />
                                    <a href className="add_cart_btn">
                                        <span>Add To Cart</span>
                                    </a>
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Product Name
                                    </h5>
                                    <div className="product_info">
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_box">
                        <a href className="view_more-link">
                            View More
                        </a>
                    </div>
                </div>
            </section>
            {/* end product section */}
            {/* info section */}
            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_contact">
                                <h5>
                                    <a href className="navbar-brand">
                                        <span>
                                            Minics
                                        </span>
                                    </a>
                                </h5>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    Address
                                </p>
                                <p>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    +01 1234567890
                                </p>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    demo@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_info">
                                <h5>
                                    Information
                                </h5>
                                <p>
                                    Eligendi sunt, provident, debitis nemo, facilis cupiditate velit libero dolorum aperiam enim nulla iste maxime corrupti ad illo libero minus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_links">
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="product.html">
                                            Products
                                        </a>
                                    </li>
                                    <li>
                                        <a href="why.html">
                                            Why Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html">
                                            Testimonial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action>
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
                                <div className="social_box">
                                    <a href>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-youtube" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Product;