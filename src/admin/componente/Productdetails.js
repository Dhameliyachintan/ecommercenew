import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Redux/Action/cart.action';
import { useHistory } from 'react-router-dom';

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
        history.push("/cart", d)
        console.log(d);
    }


    // useEffect(() => {
    //     setData(cart.cart)
    // }, [])





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
                                            <button href="#" className="btn btn-dark px-3" onClick={() => Addtocart(d)}>Add to cart</button>
                                            <button href="#" className="btn btn-dark px-4 ms-3" >Buy Now</button>
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

<script>

</script>