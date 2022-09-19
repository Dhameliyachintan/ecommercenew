import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Productdetails(props) {

    const productval = [props.location.state]
    console.log(productval);
    

    return (
        <>
            {productval.map((d) => {
                // const { id, productname, price, url, categories } = values
                return (
                    <>
                        <section className='mt-5 mb-5'>
                            <div className="container">
                                <div className='row align-items-center justify-content-center'>
                                    <div className="col-sm-4">
                                        <div className="product-images">
                                            <img src={d.url} alt="" className="img-fluid" width="50%" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="product-details">
                                            <h4 className="product-name lh-base mb-3">{d.productname}</h4>
                                            <h5 className="product-desc lh-base fw-normal mb-3">{d.desc}</h5>
                                            <p className="product-price fw-bold mb-3">Price :{d.price}</p>
                                            <button href="#" className="btn btn-dark px-3">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            })}
        </>
    );
}

export default Productdetails;