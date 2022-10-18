import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addorder, getorder } from '../../Redux/Action/Order.action';
import { useHistory } from 'react-router-dom';
import { buynoweempty, handleempty } from '../../Redux/Action/cart.action';
import { useSnackbar } from 'notistack';
import { toast } from 'react-toastify';



function Placeorder(props) {
    console.log(props.location.state);
    const alert = useSelector(state => state.alert)
    console.log(alert);
    // const [data, setData] = useState([])
    const dispatch = useDispatch()
    let cartData = [];
    const BuyData = [];

    let history = useHistory();

    const cart = useSelector(state => state.cart)
    console.log(cart.cart);

    const products = useSelector(state => state.product)
    console.log(products);

    console.log("props.location.state.cart", props.location.state);


    // const handleSubmitdata = (OrderData) => {
    //     console.log(OrderData)
    // }

    useEffect(
        () => {

            dispatch(getorder())
            if (props?.location?.state) {
            }
        },
        [props?.location?.state])





    products.product.map((p) => {
        if (p.id === props?.location?.state?.id) {
            let databuy = {
                ...p,
                Quantity: props.location.state.Quantity
            }
            BuyData.push(databuy);
            console.log(databuy);
        }
    })


    cart.cart.map((c) => {
        products.product.map((p) => {
            if (c.id === p.id) {
                const data = {
                    ...p,
                    Quantity: c.Quantity
                }
                cartData.push(data);
            }
        })
    })

    var TotalBuymount = 0;
    let Total = 0;

    BuyData.map((c) => {
        //console.log("11111111", parseInt(c.price), c.price, c.Quantity);
        Total = c.Quantity * c.price;
        TotalBuymount = TotalBuymount + Total;
    })

    const Discount = Math.round(TotalBuymount * 0.08);
    const FinalAmountdata = TotalBuymount - Discount;
    // const DeliveryCharges = Math.round(TotalAmount + 0.05);



    let product = {
        name: yup.string().required('please enter name').matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Is not in correct format'),
        email: yup.string().required('please enter email'),
        Phone: yup.string().required('please enter Phone').max(10, "Must be 10 digit number"),
        Address: yup.string().required('please enter Address').max(100, "Must be 100 digit number"),
    }

    let schema = yup.object().shape(product);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            Phone: '',
            Address: '',
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            if (props?.location?.state) {
                console.log(value)
                let OrderData = {
                    ...value,
                    cartData
                }

                console.log("OrderData", OrderData)
                // handleSubmitdata(OrderData)
                dispatch(addorder(OrderData))
                toast.success("Your order is successfully");
                // dispatch(handleempty())
                // resetForm();
                // history.push('/');
                // dispatch(buynoweempty())
            } else {
                console.log("Error");
                let OrderData = {
                    ...value,
                    cartData
                }
                console.log("OrderData", OrderData)

                // dispatch(addorder(OrderData))
                toast.success("Your order is successfully");
                // history.push('/');
                // resetForm();
                // dispatch(buynoweempty())
            }
        }

    }
    )

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Box>
                            <Container>
                                <Formik value={formik}>
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
                                                type="number"
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
                                </Formik>
                            </Container>
                        </Box>
                    </div>

                    {/* filterdata */}
                    <div className="col-lg-4 mb-5 mt-5 p-2">
                        <div className="prices p-3">
                            <span className='text-dark text-uppercase fw-weight border-bottom d-block pb-2'>product-details</span>
                            <div className="total-pricess">
                                <div className="total p-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="prices-1 text-dark">Price ({cart.cart.length} item)</span>
                                        <span className='text-dark'> {TotalBuymount} </span>
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
                                        <span class="prices-1 text-dark">TotalBmount</span>
                                        <span className='text-dark'>{FinalAmountdata}</span>
                                    </div>
                                </div>
                                <p>You will save ₹{Discount} on this order</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Placeorder;

