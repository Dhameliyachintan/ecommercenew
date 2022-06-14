import React from 'react';

function Testimonial(props) {
    return (
        <div>
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            What Says Our Customers
                        </h2>
                    </div>
                </div>
                <div className="client_container ">
                    <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                <i className="fa fa-quote-left" aria-hidden="true" />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className="client-id">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                <i className="fa fa-quote-left" aria-hidden="true" />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className="client-id">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="box">
                                        <div className="detail-box">
                                            <p>
                                                <i className="fa fa-quote-left" aria-hidden="true" />
                                            </p>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it lookIt is a
                                                long established fact that a reader will be distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look
                                            </p>
                                        </div>
                                        <div className="client-id">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    James Dew
                                                </h5>
                                                <h6>
                                                    Photographer
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn-box">
                            <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                                <span>
                                    <i className="fa fa-angle-left" aria-hidden="true" />
                                </span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                                <span>
                                    <i className="fa fa-angle-right" aria-hidden="true" />
                                </span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end client section */}
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

export default Testimonial;