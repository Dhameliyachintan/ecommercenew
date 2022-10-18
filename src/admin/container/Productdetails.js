import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, buynowdata } from '../../Redux/Action/cart.action';
import { useHistory } from 'react-router-dom';
import { addorder, getorder } from '../../Redux/Action/Order.action';

function Productdetails(props) {
    const [Quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const productval = [props.location.state]
    console.log(productval);
    const history = useHistory()

    const cart = useSelector(state => state.cart)
    console.log(cart.cart);

    const counters = useSelector(state => state.counter)
    console.log(counters);


    const Addtocart = (d) => {
        console.log(d)
        const carts = {
            id: d.id,
            Quantity: Quantity
        }

        dispatch(addtocart(carts))
        history.push("/Cart", d)
        console.log(d);
    }


    const buynow = (d) => {
        console.log(d)
        const buydata = {
            id: d,
            Quantity: Quantity
        }
        console.log(buydata);
        // dispatch(buynowdata(buydata))
        history.push("/Placeorder", buydata)
    }


    // useEffect(() => {
    //     setData(cart.cart)
    // }, [])





    return (
        <>
            {productval.map((val) => {
                // const { id, productname, price, url, categories } = values
                return (
                    <>
                        <section className='mt-5 mb-5'>
                            <div className="container">
                                <div className='row align-items-center justify-content-center'>
                                    <div className="col-sm-4">
                                        <div className="product-images">
                                            <img src={val.url} alt="" className="img-fluid" width="50%" />
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="product-details">
                                            <h5 className="product-desc lh-base fw-normal mb-3">{val.productname}</h5>
                                            <p className="product-price fw-bold mb-3">${val.price}</p>
                                            <p className="product-price mb-3">{val.desc}</p>
                                            <button href="#" className="btn btn-dark px-3" onClick={() => Addtocart(val)}>Add to cart</button>
                                            <button href="#" className="btn btn-dark px-4 ms-3" onClick={() => buynow(val.id)} >Buy Now</button>
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
