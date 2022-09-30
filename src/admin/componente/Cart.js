import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { removetocart } from '../../Redux/Action/cart.action';
import { decrementcounter, handledeletecart, incrementcounter } from '../../Redux/Action/cart.action';

function Cart(props) {
    console.log(props.location.state);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const products = useSelector(state => state.product)
    console.log(products);



    const dispatch = useDispatch()


    const incrementcounters = (id) => {
        dispatch(incrementcounter(id))
    }

    const decrementcounters = (id) => {
        dispatch(decrementcounter(id))
    }

    const handleclickdelete = (id) => {
        dispatch(handledeletecart(id))
        console.log(id);
    }




    let filterdata = [];

    cart.cart.map((c) => {
        products.product.map((p) => {
            if (c.id === p.id) {
                const data = {
                    ...p,
                    Quantity: c.Quantity
                }
                filterdata.push(data);
            }
        })
    })

    var TotalAmount = 0;
    let Total = 0;

    filterdata.map((c) => {
        //console.log("11111111", parseInt(c.price), c.price, c.Quantity);
        Total = c.Quantity * parseInt(c.price)
        TotalAmount = TotalAmount + Total;
    })

    const Discount = Math.round(TotalAmount * 0.05);
    // const DeliveryCharges = Math.round(TotalAmount + 0.05);
    const FinalAmount = TotalAmount - Discount ;



    console.log("cart.cart", Total);

    // useEffect(() => {
    //     dispatch(getproductdata())
    //     dispatch(gettocart())
    // })

    console.log("filterdata", filterdata);


    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-6 mb-5 mt-5'>
                    <table border="2px" cellPadding="20px" align='center'>
                        <tbody>
                            <tr align="center">
                                <th>image</th>
                                <th>productname</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                {/* <th>Total Export</th> */}
                            </tr>
                        </tbody>

                        {
                            filterdata.map((d) => {
                                return (
                                    <tr align="center">
                                        <td><img src={d.url} alt="" width={100} /></td>
                                        <td>{d.productname}</td>
                                        <td>
                                            <button className='btn' onClick={() => incrementcounters(d.id)}>+</button>
                                            <p className='mb-0'>{d.Quantity}</p>
                                            <button className='btn' onClick={() => decrementcounters(d.id)} disabled={d.Quantity === 1 && true}>-</button>
                                        </td>
                                        <td>{d.price * d.Quantity}</td>
                                        <td className='deletecart' onClick={() => handleclickdelete(d.id)}>Delete</td>
                                    </tr>

                                )
                            })
                        }
                    </table>
                </div>
                <div className="col-lg-6 mb-5 mt-5 p-2">
                    <div className="prices p-3">
                        <span className='text-dark text-uppercase fw-weight border-bottom d-block pb-2'>product-details</span>
                        <div className="total-pricess">
                            <div className="total p-3">
                                <div class="d-flex justify-content-between">
                                    <span class="prices-1 text-dark">Price ({cart.cart.length} item)</span>
                                    <span className='text-dark'> {TotalAmount} </span>
                                </div>
                            </div>
                            <div className="total p-3">
                                <div class="d-flex justify-content-between">
                                    <span class="prices-1 text-dark">Discount(10%)</span>
                                    <span className='text-dark'> −  {Discount}</span>
                                </div>
                            </div>
                            <div className="total p-3 border-bottom">
                                <div class="d-flex justify-content-between">
                                    <span class="prices-1 text-dark">DeliveryCharges</span>
                                    <span className='text-dark'>20%</span>
                                </div>
                            </div>
                            <div className="total p-3 border-bottom">
                                <div class="d-flex justify-content-between">
                                    <span class="prices-1 text-dark">TotalAmount</span>
                                    <span className='text-dark'>{FinalAmount}</span>
                                </div>
                            </div>
                            <p>You will save ₹{Discount} on this order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;