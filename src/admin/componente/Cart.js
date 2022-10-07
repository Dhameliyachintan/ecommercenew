import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import { removetocart } from '../../Redux/Action/cart.action';
import { decrementcounter, handledeletecart, incrementcounter } from '../../Redux/Action/cart.action';
import { addproductdata, getorderdata, getproductdata } from '../../Redux/Action/Product.action';
import { addorder, getorder } from '../../Redux/Action/Order.action';

function Cart(props) {
    // console.log(props.location.state);
    const [placeorder, setplaceorder] = useState(false)
    const [button, setbutton] = useState(false)
    const dispatch = useDispatch()

    const history = useHistory()


    const cart = useSelector(state => state.cart)
    console.log(cart);

    const products = useSelector(state => state.product)
    console.log(products);


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
                // filterdata.push(p);
            }
        })
    })

    var TotalAmount = 0;
    let Total = 0;

    filterdata.map((c) => {
        //console.log("11111111", parseInt(c.price), c.price, c.Quantity);
        Total = c.Quantity * c.price
        TotalAmount = TotalAmount + Total;
    })

    const Discount = Math.round(TotalAmount * 0.08);
    // const DeliveryCharges = Math.round(TotalAmount + 0.05);
    const FinalAmount = TotalAmount - Discount;



    console.log("cart.cart", Total);

    console.log("filterdata", filterdata);


    // const heandleplaceorder = () => {
    //     setplaceorder(true)
    // }


    return (
        <div className="container">
            <div className="row">

                <div className='col-lg-6 mb-5 mt-5'>

                    {/* { placeorder ? */}
                    {/* <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="name"
                                        name='name'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        helperText={formik.errors.name}
                                        error={formik.errors.name ? true : false}

                                    />
                                    <TextField
                                        margin="dense"
                                        id="email"
                                        label="email"
                                        name='email'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.email}
                                        helperText={formik.errors.email}
                                        error={formik.errors.email ? true : false}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="Phone"
                                        label="Phone"
                                        name='Phone'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.Phone}
                                        helperText={formik.errors.Phone}
                                        error={formik.errors.Phone ? true : false}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="Address"
                                        label="Address"
                                        name='Address'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.Address}
                                        helperText={formik.errors.Address}
                                        error={formik.errors.Address ? true : false}
                                    />

                                    <DialogActions>

                                        <Button type="submit">Submit</Button>

                                    </DialogActions>
                                </DialogContent>

                            </Form>
                        </Formik> */}

                    :

                    <table border="1px" cellPadding="20px" align='center'>
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
                    {/* } */}

                    <div className="place-order">
                        {/* <button onClick={heandleplaceorder}>Place Order</button> */}
                        <NavLink to={{
                            pathname: '/Placeorder',
                            state: { cart: filterdata }
                        }}>
                            Place Order
                        </NavLink>
                    </div>
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
                                    <span className='text-dark'>-{Discount}</span>
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