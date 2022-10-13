import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { decrementcounter, incrementcounter } from '../Redux/Action/cart.action';
import { getproductdata } from '../Redux/Action/Product.action';

function Home(props) {
    const [product, setProducts] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const history = useHistory()

    const products = useSelector(state => state.product)
    console.log(products);
    const categorys = useSelector(state => state.category)
    console.log(categorys);
    console.log("product", products.product);

    const dispatch = useDispatch()
    // const history = useHistory()

    useEffect(
        () => {
            // loadData()
            // dispatch(getcategorydata())
            dispatch(getproductdata())
            setProducts(products.product);
        },
        [])

    const categoryList = [
        "ALL",
        ...new Set(
            products.product.map((categoryitem) => {
                return categoryitem.categories;
            })

        ),
    ];


    // console.log("uniqcategory", categoryList);

    const filter = (categories) => {
        console.log("categories", categories);
        if (categories === "All") {
            setProducts(products);
            return;
        }

        const categoryList = products.product.filter((categoryitem1) => {
            return (
                categoryitem1.categories === categories
            )

        });
        setProducts(categoryList);
        console.log("categoryList", categoryList);
    };



    let finaldata = product.length > 0 ? product : products.product;
    console.log(finaldata);


    // let categorydata = category.length > 0 ? category : categorys.category;
    const handleSearch = (val) => {
        // let localdata = JSON.parse(localStorage.getItem("product"))

        let fdata = finaldata.filter((d) => (
            d.id.toString().includes(val) ||
            d.productname.toString().toLowerCase().includes(val.toLowerCase()) ||
            d.categories.toString().includes(val.toLowerCase()) ||
            d.price.toString().includes(val)
        ))

        console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    }


    let fdata = filterdata.length > 0 ? filterdata : products.product


    const handleproduct = (val) => {
        console.log(val)
        history.push('/Productdetails', val)
    }


    return (
        <div>
            <section className="slider_section ">
                <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                Roco Wireless Headphone
                                            </h1>
                                            {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                                            </p> */}
                                            <a href className='text=white'>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="images/big-billion-day.webp" alt width={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                Smart Digital <br></br> Watch
                                            </h1>
                                            {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                                            </p> */}
                                            <a href>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="images/product-39.png" alt width={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail-box">
                                            <h1>
                                                Welcome to our<br></br> shop
                                            </h1>
                                            {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                                            </p> */}
                                            <a href>
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="images/product-38.png" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel_btn_box">
                        <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* end slider section */}
            {/* product section */}
            <section className="product_section layout_padding">
                {/* category */}
                <div className='mt-5 mb-5'>
                    <div className='container mx-2 '>
                        {/* <input
                            type="text"
                            id='search'
                            label='search'
                            variant='standard'
                            placeholder='search'
                            onChange={(e) => { handleSearch(e.target.value) }}

                        /> */}
                        <div className="container">
                            <div className='row mt-5 mx-2 justify-content-center'>
                                <div className="col-xl-6">
                                    {/* <Navbar filter={filter} categoryList={categoryList} /> */}
                                    <div className="d-flex pb-4">
                                        {categoryList.map((valcatagory, index) => {
                                            return (
                                                <li className="nav-link btn btn-dark text-white mx-3" key={index} data-filter="" onClick={() => filter(valcatagory)}>{valcatagory}</li>

                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <div className="row">
                                        {finaldata.map((val, id) => {
                                            // const { id, productname, price, url, categories } = values
                                            return (
                                                <>
                                                    <div className="card-images col-md-3 mb-4">
                                                        <div className="card px-0 border-1">

                                                            <img onClick={() => { handleproduct(val) }} src={val.url} className="px-0 card-img-top w-100" alt="..." />
                                                            <div className="card-body">
                                                                <h4 className="card-title lh-base">{val.productname}</h4>
                                                                <p className="card-price fw-bold">{val.price}</p>
                                                                <h4 className="card-name lh-base">{val.categories}</h4>
                                                                <h4 className="card-title lh-base">{val.desc}</h4>
                                                                {/* <button href="#" className="btn btn-dark ms-3 px-3" onClick={() => { handleproduct(val) }}>Read More</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* category end */}

            </section>
            {/* end product section */}
            {/* about section */}
            <section className="about_section">
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-md-5 ml-auto">
                            <div className="detail-box pr-md-3">
                                <div className="heading_container">
                                    <h2>
                                        We Provide Best For You
                                    </h2>
                                </div>
                                <p>
                                    Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore officia!
                                    Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam? Vero, dicta.
                                </p>
                                <a href>
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 px-0">
                            <div className="img-box">
                                <img src="images/about-img.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* why us section */}
            <section className="why_us_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Why Choose Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w1.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w2.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/w3.png" alt />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Best Quality
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end why us section */}
            {/* client section */}
            <section className="client_section layout_padding-bottom">
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

export default Home;